import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, ReactNode } from "react";
import type { Lang } from "@/i18n/translations";

const LANG_BCP47: Record<Lang, string[]> = {
  kz: ["kk-KZ", "kk", "ru-RU"], // fallback to ru if kk voice missing
  ru: ["ru-RU", "ru"],
  en: ["en-US", "en-GB", "en"],
};

type Ctx = {
  speak: (text: string, lang: Lang, id?: string) => void;
  stop: () => void;
  speakingId: string | null;
  isSpeaking: boolean;
  supported: boolean;
};

const SpeechContext = createContext<Ctx | null>(null);

export const SpeechProvider = ({ children }: { children: ReactNode }) => {
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const supported = typeof window !== "undefined" && "speechSynthesis" in window;
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    if (!supported) return;
    const load = () => { voicesRef.current = window.speechSynthesis.getVoices(); };
    load();
    window.speechSynthesis.onvoiceschanged = load;
    return () => {
      try { window.speechSynthesis.cancel(); } catch {}
    };
  }, [supported]);

  const pickVoice = useCallback((lang: Lang) => {
    const candidates = LANG_BCP47[lang];
    const voices = voicesRef.current;
    for (const code of candidates) {
      const v = voices.find((vv) => vv.lang.toLowerCase().startsWith(code.toLowerCase()));
      if (v) return v;
    }
    return undefined;
  }, []);

  const stop = useCallback(() => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    setSpeakingId(null);
  }, [supported]);

  const speak = useCallback((text: string, lang: Lang, id?: string) => {
    if (!supported || !text) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    const voice = pickVoice(lang);
    if (voice) utter.voice = voice;
    utter.lang = (voice?.lang) || LANG_BCP47[lang][0];
    utter.rate = 0.95;
    utter.pitch = 1.05;
    const tag = id ?? `${Date.now()}`;
    utter.onstart = () => setSpeakingId(tag);
    utter.onend = () => setSpeakingId((s) => (s === tag ? null : s));
    utter.onerror = () => setSpeakingId((s) => (s === tag ? null : s));
    window.speechSynthesis.speak(utter);
  }, [pickVoice, supported]);

  const value = useMemo<Ctx>(() => ({
    speak, stop, speakingId, isSpeaking: speakingId !== null, supported,
  }), [speak, stop, speakingId, supported]);

  return <SpeechContext.Provider value={value}>{children}</SpeechContext.Provider>;
};

export const useSpeech = () => {
  const ctx = useContext(SpeechContext);
  if (!ctx) throw new Error("useSpeech must be used inside SpeechProvider");
  return ctx;
};
