export type Lang = "kz" | "ru" | "en";

export const langCycle: Record<Lang, Lang> = { kz: "ru", ru: "en", en: "kz" };
export const langLabel: Record<Lang, string> = { kz: "ҚАЗ", ru: "РУС", en: "ENG" };
export const langFlag: Record<Lang, string> = { kz: "🇰🇿", ru: "🇷🇺", en: "🇬🇧" };

export const t = {
  appTitle: { kz: "Жаратылыстану", ru: "Естествознание", en: "Natural Science" },
  grade: { kz: "1-сынып", ru: "1 класс", en: "Grade 1" },
  sectionTitle: { kz: "Мен зерттеушімін", ru: "Я исследователь", en: "I am an explorer" },
  sectionSubtitle: {
    kz: "Айналаңдағы әлемді ашайық!",
    ru: "Откроем мир вокруг нас!",
    en: "Let's discover the world around us!",
  },
  lessons: { kz: "Сабақтар", ru: "Уроки", en: "Lessons" },
  lesson: { kz: "Сабақ", ru: "Урок", en: "Lesson" },
  progress: { kz: "Үлгерім", ru: "Прогресс", en: "Progress" },
  back: { kz: "Артқа", ru: "Назад", en: "Back" },
  next: { kz: "Келесі", ru: "Далее", en: "Next" },
  intro: { kz: "Кіріспе", ru: "Введение", en: "Intro" },
  theory: { kz: "Теория", ru: "Теория", en: "Theory" },
  practice: { kz: "Тәжірибе", ru: "Практика", en: "Practice" },
  quiz: { kz: "Тест", ru: "Тест", en: "Quiz" },
  startLesson: { kz: "Сабақты бастау", ru: "Начать урок", en: "Start lesson" },
  dragHint: {
    kz: "Суреттерді тиісті топқа сүйреп апар",
    ru: "Перетащи картинки в нужную группу",
    en: "Drag images to the correct group",
  },
  living: { kz: "Тірі табиғат", ru: "Живая природа", en: "Living nature" },
  nonliving: { kz: "Жансыз табиғат", ru: "Неживая природа", en: "Non-living nature" },
  correct: { kz: "Жарайсың!", ru: "Молодец!", en: "Great job!" },
  wrong: { kz: "Қайтадан көр", ru: "Попробуй ещё", en: "Try again" },
  finishQuiz: { kz: "Тестті аяқтау", ru: "Завершить тест", en: "Finish quiz" },
  yourScore: { kz: "Сенің ұпайың", ru: "Твой результат", en: "Your score" },
  retry: { kz: "Қайталау", ru: "Повторить", en: "Retry" },
  toLessons: { kz: "Сабақтарға", ru: "К урокам", en: "To lessons" },
  owlGreeting: {
    kz: "Сәлем, дос! Мен Үкі. Бірге үйренейік!",
    ru: "Привет, друг! Я Совёнок. Давай учиться вместе!",
    en: "Hi, friend! I'm Owly. Let's learn together!",
  },
  owlTheory: {
    kz: "Мұқият оқы — қызық!",
    ru: "Читай внимательно — это интересно!",
    en: "Read carefully — it's exciting!",
  },
  owlPractice: {
    kz: "Сүйреп көр!",
    ru: "Попробуй перетащить!",
    en: "Try dragging!",
  },
  owlQuiz: {
    kz: "Сен бұны істей аласың!",
    ru: "Ты справишься!",
    en: "You can do it!",
  },
  comingSoon: {
    kz: "Бұл сабақ дайындалуда...",
    ru: "Этот урок скоро будет готов...",
    en: "This lesson is coming soon...",
  },
  question: { kz: "Сұрақ", ru: "Вопрос", en: "Question" },
  of: { kz: "/", ru: "из", en: "of" },
  // Lesson 1 content
  l1_title: {
    kz: "Жаратылыстану дегеніміз не?",
    ru: "Что такое естествознание?",
    en: "What is natural science?",
  },
  l1_intro: {
    kz: "Бүгін біз жаратылыстанумен танысамыз — табиғат туралы ғылым.",
    ru: "Сегодня мы познакомимся с естествознанием — наукой о природе.",
    en: "Today we will meet natural science — the science about nature.",
  },
  l1_theory_p1: {
    kz: "Табиғат — бұл бізді қоршаған бәрі: ағаштар, жануарлар, тастар, су, ауа және күн.",
    ru: "Природа — это всё, что нас окружает: деревья, животные, камни, вода, воздух и солнце.",
    en: "Nature is everything around us: trees, animals, rocks, water, air, and the sun.",
  },
  l1_theory_p2: {
    kz: "Табиғат екіге бөлінеді: ТІРІ (өседі, тыныс алады) және ЖАНСЫЗ (өспейді).",
    ru: "Природа делится на ЖИВУЮ (растёт, дышит) и НЕЖИВУЮ (не растёт).",
    en: "Nature is divided into LIVING (grows, breathes) and NON-LIVING (does not grow).",
  },
  l1_theory_p3: {
    kz: "Зерттеуші — табиғатты бақылайтын және жаңа нәрселерді ашатын адам. Бүгіннен бастап, сен — кішкентай зерттеушісің!",
    ru: "Исследователь — это человек, который наблюдает за природой и открывает новое. С сегодняшнего дня ты — маленький исследователь!",
    en: "An explorer is someone who observes nature and discovers new things. From today, you are a little explorer!",
  },
  // Quiz
  q1: { kz: "Қайсысы тірі табиғатқа жатады?", ru: "Что относится к живой природе?", en: "Which belongs to living nature?" },
  q1_a: { kz: "Тас", ru: "Камень", en: "Rock" },
  q1_b: { kz: "Гүл", ru: "Цветок", en: "Flower" },
  q1_c: { kz: "Су", ru: "Вода", en: "Water" },
  q2: { kz: "Зерттеуші не істейді?", ru: "Что делает исследователь?", en: "What does an explorer do?" },
  q2_a: { kz: "Ұйықтайды", ru: "Спит", en: "Sleeps" },
  q2_b: { kz: "Бақылайды", ru: "Наблюдает", en: "Observes" },
  q2_c: { kz: "Жылайды", ru: "Плачет", en: "Cries" },
  q3: { kz: "Күн — бұл...", ru: "Солнце — это...", en: "The sun is..." },
  q3_a: { kz: "Тірі табиғат", ru: "Живая природа", en: "Living nature" },
  q3_b: { kz: "Жансыз табиғат", ru: "Неживая природа", en: "Non-living nature" },
  q3_c: { kz: "Ойыншық", ru: "Игрушка", en: "Toy" },
} as const;

export type TKey = keyof typeof t;
