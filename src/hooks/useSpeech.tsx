import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, ReactNode } from "react";
import type { Lang } from "@/i18n/translations";

const LANG_BCP47: Record<Lang, string[]> = {
  kz: ["kk-KZ", "kk", "ru-RU"], // fallback to ru if kk voice missing
  ru: ["ru-RU", "ru"],
  en: ["en-US", "en-GB", "en"],
};

// Hints to detect female voices across platforms
const FEMALE_HINTS = [
  "female", "woman", "girl",
  // Common female voice names (Win/Mac/Google/Android)
  "milena", "katya", "katja", "tatyana", "tatiana", "irina", "anna", "elena", "alyona", "alena",
  "samantha", "victoria", "karen", "moira", "tessa", "fiona", "susan", "zira", "hazel", "serena",
  "google русский", "google ru", "google uk english female", "google us english",
  "aigul", "айгуль", "raushan", "раушан", "amira", "айдана",
];
const MALE_HINTS = ["male", "man", "boy", "yuri", "pavel", "alex", "daniel", "fred", "david", "mark", "george", "thomas"];

const isFemale = (v: SpeechSynthesisVoice) => {
  const n = `${v.name} ${(v as any).gender ?? ""}`.toLowerCase();
  if (FEMALE_HINTS.some((h) => n.includes(h))) return true;
  if (MALE_HINTS.some((h) => n.includes(h))) return false;
  return null as unknown as boolean; // unknown
};

type Ctx = {
  speak: (text: string, lang: Lang, id?: string) => void;
  stop: () => void;
  speakingId: string | null;
  isSpeaking: boolean;
  speechLevel: number; // 0..1 pseudo amplitude for visual sync
  supported: boolean;
};

const SpeechContext = createContext<Ctx | null>(null);

// Add micro-pauses after punctuation for a more measured pace
const addMicroPauses = (text: string) =>
  text
    .replace(/\s+/g, " ")
    .replace(/([,;:])\s*/g, "$1, ")
    .replace(/([.!?])\s*/g, "$1.. ")
    .trim();

export const SpeechProvider = ({ children }: { children: ReactNode }) => {
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [speechLevel, setSpeechLevel] = useState(0);
  const supported = typeof window !== "undefined" && "speechSynthesis" in window;
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);
  const levelTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!supported) return;
    const load = () => { voicesRef.current = window.speechSynthesis.getVoices(); };
    load();
    window.speechSynthesis.onvoiceschanged = load;
    return () => {
      try { window.speechSynthesis.cancel(); } catch {}
      if (levelTimerRef.current) window.clearInterval(levelTimerRef.current);
    };
  }, [supported]);

  const pickVoice = useCallback((lang: Lang) => {
    const candidates = LANG_BCP47[lang];
    const voices = voicesRef.current;
    // Build a ranked list: matches lang (in priority order), prefer female, then non-male, then any
    for (const code of candidates) {
      const matches = voices.filter((v) => v.lang.toLowerCase().startsWith(code.toLowerCase()));
      if (!matches.length) continue;
      const female = matches.find((v) => isFemale(v) === true);
      if (female) return female;
      const notMale = matches.find((v) => isFemale(v) !== false);
      if (notMale) return notMale;
      return matches[0];
    }
    return undefined;
  }, []);

  const startLevelLoop = () => {
    if (levelTimerRef.current) window.clearInterval(levelTimerRef.current);
    // Pseudo amplitude oscillation (Web Speech doesn't expose real volume)
    levelTimerRef.current = window.setInterval(() => {
      // Smooth quasi-random envelope
      const t = performance.now() / 180;
      const v = 0.55 + 0.35 * Math.sin(t) * Math.cos(t * 0.7) + (Math.random() - 0.5) * 0.15;
      setSpeechLevel(Math.max(0.2, Math.min(1, v)));
    }, 90) as unknown as number;
  };
  const stopLevelLoop = () => {
    if (levelTimerRef.current) window.clearInterval(levelTimerRef.current);
    levelTimerRef.current = null;
    setSpeechLevel(0);
  };

  const stop = useCallback(() => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    setSpeakingId(null);
    stopLevelLoop();
  }, [supported]);

  const speak = useCallback((text: string, lang: Lang, id?: string) => {
    if (!supported || !text) return;
    // Prevent overlap
    window.speechSynthesis.cancel();

    const prepared = addMicroPauses(text);
    const utter = new SpeechSynthesisUtterance(prepared);
    const voice = pickVoice(lang);
    if (voice) utter.voice = voice;
    utter.lang = (voice?.lang) || LANG_BCP47[lang][0];
    utter.rate = 0.85;   // slower for first-graders
    utter.pitch = 1.1;   // friendlier tone
    utter.volume = 1;

    const tag = id ?? `${Date.now()}`;
    utter.onstart = () => { setSpeakingId(tag); startLevelLoop(); };
    utter.onend = () => {
      setSpeakingId((s) => (s === tag ? null : s));
      stopLevelLoop();
    };
    utter.onerror = () => {
      setSpeakingId((s) => (s === tag ? null : s));
      stopLevelLoop();
    };
    window.speechSynthesis.speak(utter);
  }, [pickVoice, supported]);

  const value = useMemo<Ctx>(() => ({
    speak, stop, speakingId, isSpeaking: speakingId !== null, speechLevel, supported,
  }), [speak, stop, speakingId, speechLevel, supported]);

  return <SpeechContext.Provider value={value}>{children}</SpeechContext.Provider>;
};

export const useSpeech = () => {
  const ctx = useContext(SpeechContext);
  if (!ctx) throw new Error("useSpeech must be used inside SpeechProvider");
  return ctx;
};
