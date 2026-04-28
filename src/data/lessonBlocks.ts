import type { TaskCardData } from "@/components/lesson/blocks/TaskCard";
import type { SummaryCardData } from "@/components/lesson/blocks/SummaryCard";
import type { ActionCardData } from "@/components/lesson/blocks/ActionCard";
import type { FactCardData } from "@/components/lesson/blocks/FactCard";
import type { Lang } from "@/i18n/translations";

export type SectionKey = "intro" | "scientists" | "observation" | "experiments";

export type Block =
  | { type: "task"; data: Record<Lang, TaskCardData> }
  | { type: "summary"; data: Record<Lang, SummaryCardData> }
  | { type: "action"; data: Record<Lang, ActionCardData> }
  | { type: "fact"; data: Record<Lang, FactCardData> };

/**
 * Per-lesson, per-section block content.
 * Sections are EMPTY containers by default — they only render blocks that are
 * declared here. To populate a section, add an entry like:
 *   lessonBlocks[5] = { observation: [ {type: 'fact', data: {...}} ] }
 */
export const lessonBlocks: Partial<Record<number, Partial<Record<SectionKey, Block[]>>>> = {
  1: {
    intro: [
      {
        type: "fact",
        data: {
          ru: {
            title: "Это интересно",
            text: "Слово «природа» означает всё, что родилось и растёт само — без помощи человека.",
            keywords: ["природа", "наука", "мир"],
            icon: "bulb",
          },
          kz: {
            title: "Бұл қызық",
            text: "«Табиғат» сөзі — адамның көмегінсіз өздігінен туып, өсетін барлық нәрсені білдіреді.",
            keywords: ["табиғат", "ғылым", "әлем"],
            icon: "bulb",
          },
          en: {
            title: "Did you know?",
            text: "The word 'nature' means everything that is born and grows on its own — without people.",
            keywords: ["nature", "science", "world"],
            icon: "bulb",
          },
        },
      },
    ],
    scientists: [
      {
        type: "task",
        data: {
          ru: {
            title: "Работа в парах",
            instruction: "Рассмотри картинки и обсуди с другом: кто из них учёный? Чем они занимаются?",
            images: [{ emoji: "🔬" }, { emoji: "🧪" }, { emoji: "🌱" }, { emoji: "🔭" }],
          },
          kz: {
            title: "Жұптық жұмыс",
            instruction: "Суреттерді қарап, досыңмен талқыла: олардың қайсысы ғалым? Не істейді?",
            images: [{ emoji: "🔬" }, { emoji: "🧪" }, { emoji: "🌱" }, { emoji: "🔭" }],
          },
          en: {
            title: "Pair work",
            instruction: "Look at the pictures and discuss with a friend: who is a scientist? What do they do?",
            images: [{ emoji: "🔬" }, { emoji: "🧪" }, { emoji: "🌱" }, { emoji: "🔭" }],
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Важно запомнить",
            text: "**Учёный** — это человек, который изучает **природу** и ищет ответы на вопросы.",
          },
          kz: {
            title: "Есте сақта",
            text: "**Ғалым** — бұл **табиғатты** зерттеп, сұрақтарға жауап іздейтін адам.",
          },
          en: {
            title: "Remember",
            text: "A **scientist** is a person who studies **nature** and looks for answers.",
          },
        },
      },
    ],
    observation: [
      {
        type: "task",
        data: {
          ru: {
            title: "Посмотри вокруг",
            instruction: "Найди в классе три живых и три неживых предмета. Расскажи о них.",
            images: [{ emoji: "🌿" }, { emoji: "🐠" }, { emoji: "🪨" }, { emoji: "💧" }],
          },
          kz: {
            title: "Айналаңа қара",
            instruction: "Сыныптан үш тірі және үш жансыз затты тап. Олар туралы айтып бер.",
            images: [{ emoji: "🌿" }, { emoji: "🐠" }, { emoji: "🪨" }, { emoji: "💧" }],
          },
          en: {
            title: "Look around",
            instruction: "Find three living and three non-living things in class. Tell about them.",
            images: [{ emoji: "🌿" }, { emoji: "🐠" }, { emoji: "🪨" }, { emoji: "💧" }],
          },
        },
      },
      {
        type: "action",
        data: {
          ru: {
            title: "Твоё наблюдение",
            prompt: "Что нового ты заметил сегодня по дороге в школу?",
            placeholder: "Я увидел...",
            multiline: true,
          },
          kz: {
            title: "Сенің бақылауың",
            prompt: "Бүгін мектепке келе жатқанда не жаңа нәрсе байқадың?",
            placeholder: "Мен көрдім...",
            multiline: true,
          },
          en: {
            title: "Your observation",
            prompt: "What new thing did you notice on the way to school today?",
            placeholder: "I saw...",
            multiline: true,
          },
        },
      },
    ],
    // experiments has its own LessonPractice for lesson 1
  },
};
