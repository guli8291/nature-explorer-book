import type { TaskCardData } from "@/components/lesson/blocks/TaskCard";
import type { SummaryCardData } from "@/components/lesson/blocks/SummaryCard";
import type { ActionCardData } from "@/components/lesson/blocks/ActionCard";
import type { FactCardData } from "@/components/lesson/blocks/FactCard";
import type { CarouselBlockData } from "@/components/lesson/blocks/CarouselBlock";
import type { SortGameBlockData } from "@/components/lesson/blocks/SortGameBlock";
import type { ZoomImageBlockData } from "@/components/lesson/blocks/ZoomImageBlock";
import type { RevealAnswerBlockData } from "@/components/lesson/blocks/RevealAnswerBlock";
import type { FillBlanksBlockData } from "@/components/lesson/blocks/FillBlanksBlock";
import type { AudioPlayerBlockData } from "@/components/lesson/blocks/AudioPlayerBlock";
import type { VideoBlockData } from "@/components/lesson/blocks/VideoBlock";
import type { Lang } from "@/i18n/translations";

export type SectionKey = "intro" | "scientists" | "observation" | "experiments";

export type Block =
  | { type: "task"; data: Record<Lang, TaskCardData> }
  | { type: "summary"; data: Record<Lang, SummaryCardData> }
  | { type: "action"; data: Record<Lang, ActionCardData> }
  | { type: "fact"; data: Record<Lang, FactCardData> }
  | { type: "carousel"; data: Record<Lang, CarouselBlockData> }
  | { type: "sort"; data: Record<Lang, SortGameBlockData> }
  | { type: "zoom"; data: Record<Lang, ZoomImageBlockData> }
  | { type: "reveal"; data: Record<Lang, RevealAnswerBlockData> }
  | { type: "fillblanks"; data: Record<Lang, FillBlanksBlockData> }
  | { type: "audio"; data: Record<Lang, AudioPlayerBlockData> }
  | { type: "video"; data: Record<Lang, VideoBlockData> };

/**
 * Per-lesson, per-section block content.
 * Sections are EMPTY containers by default — they only render blocks that are
 * declared here. To populate a section, add an entry like:
 *   lessonBlocks[5] = { observation: [ {type: 'fact', data: {...}} ] }
 */
export const lessonBlocks: Partial<Record<number, Partial<Record<SectionKey, Block[]>>>> = {
  1: {
    // ──────────────────────────────────────────────────────────────────────
    // 1. Шапка (intro) — аудио-вступление + ключевые слова
    // ──────────────────────────────────────────────────────────────────────
    intro: [
      {
        type: "audio",
        data: {
          ru: {
            title: "Слушай: о чём этот урок",
            text:
              "Привет! Сегодня мы узнаем, как учёные изучают окружающий мир. Мы научимся задавать правильные вопросы, наблюдать за природой и проводить настоящие опыты.",
            caption: "Краткое содержание урока — нажми, чтобы прослушать",
            durationLabel: "0:25",
          },
          kz: {
            title: "Тыңда: бұл сабақ не туралы",
            text:
              "Сәлем! Бүгін біз ғалымдардың қоршаған ортаны қалай зерттейтінін білеміз. Дұрыс сұрақ қойып, табиғатты бақылап, шынайы тәжірибелер жасауды үйренеміз.",
            caption: "Сабақтың қысқаша мазмұны — тыңдау үшін бас",
            durationLabel: "0:25",
          },
          en: {
            title: "Listen: what this lesson is about",
            text:
              "Hi! Today we'll learn how scientists study the world around us. We'll learn to ask the right questions, observe nature and run real experiments.",
            caption: "Short summary of the lesson — tap to play",
            durationLabel: "0:25",
          },
        },
      },
      {
        type: "fact",
        data: {
          ru: {
            title: "Ключевые слова урока",
            text: "Эти слова мы будем использовать снова и снова. Прислушайся к ним!",
            keywords: ["наука", "учёный", "природа", "наблюдение", "опыт", "вопрос"],
            icon: "sparkles",
          },
          kz: {
            title: "Сабақтың кілт сөздері",
            text: "Бұл сөздерді біз қайталап қолданамыз. Оларға құлақ түр!",
            keywords: ["ғылым", "ғалым", "табиғат", "бақылау", "тәжірибе", "сұрақ"],
            icon: "sparkles",
          },
          en: {
            title: "Key words of the lesson",
            text: "We will use these words again and again. Listen carefully!",
            keywords: ["science", "scientist", "nature", "observation", "experiment", "question"],
            icon: "sparkles",
          },
        },
      },
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

    // ──────────────────────────────────────────────────────────────────────
    // 2. Учёные и наука — карусель + задание-дополнение + словарь + факт
    // ──────────────────────────────────────────────────────────────────────
    scientists: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "1-я группа · работа в группах",
            title: "Кто такие учёные?",
            slides: [
              { emoji: "🔍", caption: "Дети с лупой рассматривают листочек.", question: "Что они изучают? Почему именно лупа?" },
              { emoji: "🧪", caption: "Девочка проводит опыт с водой.", question: "Зачем учёный проверяет свои догадки?" },
              { emoji: "📓", caption: "Мальчик записывает наблюдения в тетрадь.", question: "Почему важно записывать то, что увидел?" },
              { emoji: "🔬", caption: "Под микроскопом — крошечный мир!", question: "Что мы можем увидеть только под микроскопом?" },
            ],
          },
          kz: {
            groupLabel: "1-топ · топтық жұмыс",
            title: "Ғалымдар деген кім?",
            slides: [
              { emoji: "🔍", caption: "Балалар лупамен жапырақты қарап тұр.", question: "Олар нені зерттейді? Неге лупа?" },
              { emoji: "🧪", caption: "Қыз сумен тәжірибе жасап жатыр.", question: "Ғалым неге өз болжамын тексереді?" },
              { emoji: "📓", caption: "Бала бақылауларын дәптерге жазады.", question: "Көргеніңді жазу неге маңызды?" },
              { emoji: "🔬", caption: "Микроскоптың астында — кішкентай әлем!", question: "Микроскоппен ғана нені көре аламыз?" },
            ],
          },
          en: {
            groupLabel: "Group 1 · group work",
            title: "Who are scientists?",
            slides: [
              { emoji: "🔍", caption: "Kids examine a leaf with a magnifier.", question: "What are they studying? Why a magnifier?" },
              { emoji: "🧪", caption: "A girl runs an experiment with water.", question: "Why does a scientist test their guess?" },
              { emoji: "📓", caption: "A boy writes observations in a notebook.", question: "Why is it important to write down what you see?" },
              { emoji: "🔬", caption: "Under a microscope — a tiny world!", question: "What can we only see under a microscope?" },
            ],
          },
        },
      },
      {
        type: "fillblanks",
        data: {
          ru: {
            title: "Допиши предложения",
            template:
              "Дети бережно относятся к растению, потому что ___. Растения называются растениями, потому что они ___.",
            hints: ["оно живое", "растут"],
          },
          kz: {
            title: "Сөйлемді аяқта",
            template:
              "Балалар өсімдікке ұқыпты қарайды, өйткені ___. Өсімдіктерді өсімдік деп атайды, өйткені олар ___.",
            hints: ["ол тірі", "өседі"],
          },
          en: {
            title: "Complete the sentences",
            template:
              "Children take care of a plant because ___. Plants are called plants because they ___.",
            hints: ["it is alive", "they grow"],
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Словарь урока",
            text:
              "**Учёный** — человек, который изучает **природу**. **Наука** — это знания о мире. **Наблюдение** — внимательно смотреть и замечать.",
          },
          kz: {
            title: "Сабақ сөздігі",
            text:
              "**Ғалым** — **табиғатты** зерттейтін адам. **Ғылым** — әлем туралы білім. **Бақылау** — мұқият қарап, байқау.",
          },
          en: {
            title: "Lesson glossary",
            text:
              "A **scientist** studies **nature**. **Science** is knowledge about the world. **Observation** means looking carefully and noticing.",
          },
        },
      },
      {
        type: "fact",
        data: {
          ru: {
            title: "Это интересно!",
            text:
              "Каныш Сатпаев — великий казахстанский учёный-геолог. Он изучал недра земли и нашёл огромные залежи руды. В его честь названы город, университет и горы!",
            keywords: ["Қаныш Сәтпаев", "геология", "Казахстан"],
            icon: "sparkles",
          },
          kz: {
            title: "Бұл қызық!",
            text:
              "Қаныш Сәтпаев — қазақтың ұлы геолог-ғалымы. Ол жер қойнауын зерттеп, орасан зор кен орындарын тапқан. Оның құрметіне қала, университет және таулар аталған!",
            keywords: ["Қаныш Сәтпаев", "геология", "Қазақстан"],
            icon: "sparkles",
          },
          en: {
            title: "Fun fact!",
            text:
              "Kanysh Satpayev was a great Kazakh geologist. He studied the Earth and discovered huge ore deposits. A city, a university and mountains are named after him!",
            keywords: ["Satpayev", "geology", "Kazakhstan"],
            icon: "sparkles",
          },
        },
      },
    ],

    // ──────────────────────────────────────────────────────────────────────
    // 3. Наблюдение — две карусели, угадайка с проверкой, лупа на явлениях
    // ──────────────────────────────────────────────────────────────────────
    observation: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в парах · левая",
            title: "Как распускается почка",
            slides: [
              { emoji: "🌰", caption: "Закрытая почка — спит зимой.", question: "Что внутри этой маленькой коробочки?" },
              { emoji: "🌱", caption: "Почка набухла, видна зелень.", question: "Какая сила её разбудила?" },
              { emoji: "🌿", caption: "Появился молодой листочек!", question: "В какое время года это происходит?" },
            ],
          },
          kz: {
            groupLabel: "Жұптық жұмыс · сол жақ",
            title: "Бүршік қалай ашылады",
            slides: [
              { emoji: "🌰", caption: "Жабық бүршік — қыста ұйықтап жатыр.", question: "Осы кішкентай қорапшаның ішінде не бар?" },
              { emoji: "🌱", caption: "Бүршік ісінді, жасыл түс көрінеді.", question: "Оны қандай күш оятты?" },
              { emoji: "🌿", caption: "Жас жапырақ пайда болды!", question: "Бұл жыл мезгілінің қайсысында болады?" },
            ],
          },
          en: {
            groupLabel: "Pair work · left",
            title: "How a bud opens",
            slides: [
              { emoji: "🌰", caption: "A closed bud — asleep in winter.", question: "What is inside this tiny box?" },
              { emoji: "🌱", caption: "The bud has swollen, green peeks out.", question: "What force woke it up?" },
              { emoji: "🌿", caption: "A young leaf has appeared!", question: "In what season does this happen?" },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Узнай первоцветы",
            question: "Перед тобой три весенних жёлтых цветка. Как ты думаешь, как они называются?",
            items: [{ emoji: "🌼" }, { emoji: "🌻" }, { emoji: "🌷" }],
            answer: "Это мать-и-мачеха, одуванчик и тюльпан — первые цветы весны!",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Бәйшешектерді тап",
            question: "Алдыңда үш сары көктем гүлі. Қалай аталады деп ойлайсың?",
            items: [{ emoji: "🌼" }, { emoji: "🌻" }, { emoji: "🌷" }],
            answer: "Бұл өгейшөп, бақбақ және қызғалдақ — көктемнің алғашқы гүлдері!",
            buttonLabel: "Жауапты тексер",
          },
          en: {
            title: "Identify the spring flowers",
            question: "Three yellow spring flowers. What do you think they are called?",
            items: [{ emoji: "🌼" }, { emoji: "🌻" }, { emoji: "🌷" }],
            answer: "These are coltsfoot, dandelion and tulip — the first flowers of spring!",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "zoom",
        data: {
          ru: {
            title: "Самостоятельная работа",
            instruction:
              "Рассмотри картинки. Как называются эти природные явления? Наведи лупу, чтобы увидеть детали.",
            images: [
              { emoji: "🌈", caption: "Явление №1" },
              { emoji: "⚡", caption: "Явление №2" },
            ],
          },
          kz: {
            title: "Өзіндік жұмыс",
            instruction:
              "Суреттерді қара. Бұл табиғат құбылыстары қалай аталады? Бөлшектерді көру үшін лупаны жүгірт.",
            images: [
              { emoji: "🌈", caption: "Құбылыс №1" },
              { emoji: "⚡", caption: "Құбылыс №2" },
            ],
          },
          en: {
            title: "Independent work",
            instruction:
              "Look at the pictures. What are these natural phenomena called? Move the magnifier to see details.",
            images: [
              { emoji: "🌈", caption: "Phenomenon №1" },
              { emoji: "⚡", caption: "Phenomenon №2" },
            ],
          },
        },
      },
      {
        type: "action",
        data: {
          ru: {
            title: "Запиши свой ответ",
            prompt: "Как называются эти природные явления? Напиши свой ответ.",
            placeholder: "Это радуга и...",
            multiline: false,
          },
          kz: {
            title: "Жауабыңды жаз",
            prompt: "Бұл табиғат құбылыстары қалай аталады? Жауабыңды жаз.",
            placeholder: "Бұл кемпірқосақ және...",
            multiline: false,
          },
          en: {
            title: "Write your answer",
            prompt: "What are these natural phenomena called? Write your answer.",
            placeholder: "This is a rainbow and...",
            multiline: false,
          },
        },
      },
    ],

    // ──────────────────────────────────────────────────────────────────────
    // 4. Опыты и эксперименты — пошаговое задание + игра-классификатор
    // ──────────────────────────────────────────────────────────────────────
    experiments: [
      {
        type: "task",
        data: {
          ru: {
            title: "Микро-исследование",
            instruction:
              "Человек опускает кусочек сахара в чашку с водой. Что делает человек? Для чего? Что произойдёт с сахаром?",
            images: [{ emoji: "🍬" }, { emoji: "☕" }, { emoji: "🥄" }, { emoji: "💧" }],
          },
          kz: {
            title: "Шағын зерттеу",
            instruction:
              "Адам кесе суға қант салып жатыр. Адам не істеп жатыр? Не үшін? Қантпен не болады?",
            images: [{ emoji: "🍬" }, { emoji: "☕" }, { emoji: "🥄" }, { emoji: "💧" }],
          },
          en: {
            title: "Mini research",
            instruction:
              "A person drops a sugar cube into a cup of water. What is the person doing? Why? What will happen to the sugar?",
            images: [{ emoji: "🍬" }, { emoji: "☕" }, { emoji: "🥄" }, { emoji: "💧" }],
          },
        },
      },
      {
        type: "action",
        data: {
          ru: {
            title: "Твоя гипотеза",
            prompt: "Что, по-твоему, произойдёт с сахаром в воде? Объясни, почему.",
            placeholder: "Я думаю, что сахар...",
            multiline: true,
          },
          kz: {
            title: "Сенің болжамың",
            prompt: "Сенің ойыңша, қантпен суда не болады? Неге екенін түсіндір.",
            placeholder: "Менің ойымша, қант...",
            multiline: true,
          },
          en: {
            title: "Your hypothesis",
            prompt: "What do you think will happen to the sugar in the water? Explain why.",
            placeholder: "I think the sugar will...",
            multiline: true,
          },
        },
      },
      {
        type: "sort",
        data: {
          ru: {
            title: "Игра в группах: какая это наука?",
            instruction:
              "Сначала выбери карточку, потом — раздел науки или природное явление. Когда распределишь все — нажми «Проверить себя».",
            categories: [
              { id: "zoo", label: "Зоология", emoji: "🐾" },
              { id: "myco", label: "Микология", emoji: "🍄" },
              { id: "ento", label: "Энтомология", emoji: "🐜" },
              { id: "meteo", label: "Метеорология", emoji: "☔" },
              { id: "phen", label: "Сезонные явления", emoji: "🍂" },
              { id: "ocean", label: "Океанология", emoji: "🌊" },
            ],
            items: [
              { id: "whale", label: "Кит", emoji: "🐋", categoryId: "zoo" },
              { id: "mush", label: "Гриб", emoji: "🍄", categoryId: "myco" },
              { id: "ants", label: "Муравьи", emoji: "🐜", categoryId: "ento" },
              { id: "rain", label: "Дождь и зонт", emoji: "☔", categoryId: "meteo" },
              { id: "fall", label: "Листопад", emoji: "🍁", categoryId: "phen" },
              { id: "diver", label: "Дайвер", emoji: "🤿", categoryId: "ocean" },
            ],
            checkLabel: "Проверить себя",
          },
          kz: {
            title: "Топтық ойын: бұл қандай ғылым?",
            instruction:
              "Алдымен карточканы таңда, содан соң — ғылым саласын немесе табиғат құбылысын. Барлығын орналастырғаннан кейін «Өзіңді тексер» басыңыз.",
            categories: [
              { id: "zoo", label: "Зоология", emoji: "🐾" },
              { id: "myco", label: "Микология", emoji: "🍄" },
              { id: "ento", label: "Энтомология", emoji: "🐜" },
              { id: "meteo", label: "Метеорология", emoji: "☔" },
              { id: "phen", label: "Маусымдық құбылыстар", emoji: "🍂" },
              { id: "ocean", label: "Океанология", emoji: "🌊" },
            ],
            items: [
              { id: "whale", label: "Кит", emoji: "🐋", categoryId: "zoo" },
              { id: "mush", label: "Саңырауқұлақ", emoji: "🍄", categoryId: "myco" },
              { id: "ants", label: "Құмырсқалар", emoji: "🐜", categoryId: "ento" },
              { id: "rain", label: "Жаңбыр мен қолшатыр", emoji: "☔", categoryId: "meteo" },
              { id: "fall", label: "Жапырақ түсу", emoji: "🍁", categoryId: "phen" },
              { id: "diver", label: "Сүңгуір", emoji: "🤿", categoryId: "ocean" },
            ],
            checkLabel: "Өзіңді тексер",
          },
          en: {
            title: "Group game: which science is it?",
            instruction:
              "First pick a card, then a branch of science or natural phenomenon. When all are placed — press 'Check yourself'.",
            categories: [
              { id: "zoo", label: "Zoology", emoji: "🐾" },
              { id: "myco", label: "Mycology", emoji: "🍄" },
              { id: "ento", label: "Entomology", emoji: "🐜" },
              { id: "meteo", label: "Meteorology", emoji: "☔" },
              { id: "phen", label: "Seasonal phenomena", emoji: "🍂" },
              { id: "ocean", label: "Oceanology", emoji: "🌊" },
            ],
            items: [
              { id: "whale", label: "Whale", emoji: "🐋", categoryId: "zoo" },
              { id: "mush", label: "Mushroom", emoji: "🍄", categoryId: "myco" },
              { id: "ants", label: "Ants", emoji: "🐜", categoryId: "ento" },
              { id: "rain", label: "Rain & umbrella", emoji: "☔", categoryId: "meteo" },
              { id: "fall", label: "Falling leaves", emoji: "🍁", categoryId: "phen" },
              { id: "diver", label: "Diver", emoji: "🤿", categoryId: "ocean" },
            ],
            checkLabel: "Check yourself",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Вопросы для повторения",
            text:
              "1) Кто такой **учёный**? 2) Что такое **наблюдение** и чем оно отличается от **опыта**? 3) Назови одно природное явление, которое ты видел сегодня.",
          },
          kz: {
            title: "Қайталау сұрақтары",
            text:
              "1) **Ғалым** деген кім? 2) **Бақылау** деген не және ол **тәжірибеден** немен ерекшеленеді? 3) Бүгін көрген бір табиғат құбылысын ата.",
          },
          en: {
            title: "Review questions",
            text:
              "1) Who is a **scientist**? 2) What is an **observation** and how is it different from an **experiment**? 3) Name one natural phenomenon you saw today.",
          },
        },
      },
    ],
  },
};
