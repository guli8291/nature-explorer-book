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

  // ════════════════════════════════════════════════════════════════════════
  // LESSON 2 — Растения вокруг нас (деревья, кустарники, травы)
  // ════════════════════════════════════════════════════════════════════════
  2: {
    // ──────────────────────────────────────────────────────────────────────
    // 1. Вводная — мини-карусель определений + аудио
    // ──────────────────────────────────────────────────────────────────────
    intro: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Ключевые слова",
            title: "Дерево · Кустарник · Трава",
            slides: [
              { emoji: "🌳", caption: "Дерево — у него один большой ствол и крона из веток.", question: "Какие деревья ты знаешь?" },
              { emoji: "🌿", caption: "Кустарник — у него несколько тонких стволиков.", question: "Где ты видел кустарник?" },
              { emoji: "🌱", caption: "Трава — у неё мягкий зелёный стебель.", question: "Какая трава растёт у твоего дома?" },
            ],
          },
          kz: {
            groupLabel: "Кілт сөздер",
            title: "Ағаш · Бұта · Шөп",
            slides: [
              { emoji: "🌳", caption: "Ағаш — бір үлкен діңі мен бұтақтары бар.", question: "Қандай ағаштарды білесің?" },
              { emoji: "🌿", caption: "Бұта — бірнеше жіңішке діңшелері бар.", question: "Бұтаны қайдан көрдің?" },
              { emoji: "🌱", caption: "Шөп — жұмсақ жасыл сабағы бар.", question: "Үйіңнің жанында қандай шөп өседі?" },
            ],
          },
          en: {
            groupLabel: "Key words",
            title: "Tree · Shrub · Grass",
            slides: [
              { emoji: "🌳", caption: "A tree has one big trunk and a crown of branches.", question: "What trees do you know?" },
              { emoji: "🌿", caption: "A shrub has several thin stems.", question: "Where have you seen a shrub?" },
              { emoji: "🌱", caption: "Grass has a soft green stem.", question: "What grass grows near your home?" },
            ],
          },
        },
      },
      {
        type: "audio",
        data: {
          ru: {
            title: "Слушай: о чём этот урок",
            text: "Сегодня мы узнаем, на какие группы делятся растения. Мы научимся отличать деревья, кустарники и травы, а ещё познакомимся с лиственными и хвойными растениями.",
            caption: "Введение к уроку",
            durationLabel: "0:30",
          },
          kz: {
            title: "Тыңда: бұл сабақ не туралы",
            text: "Бүгін біз өсімдіктердің қандай топтарға бөлінетінін білеміз. Ағаш, бұта және шөпті ажыратуды үйренеміз, сонымен қатар жапырақты және қылқан жапырақты өсімдіктермен танысамыз.",
            caption: "Сабаққа кіріспе",
            durationLabel: "0:30",
          },
          en: {
            title: "Listen: what this lesson is about",
            text: "Today we'll learn what groups plants are divided into. We'll learn to tell trees, shrubs and grasses apart, and meet deciduous and coniferous plants.",
            caption: "Lesson intro",
            durationLabel: "0:30",
          },
        },
      },
    ],

    // ──────────────────────────────────────────────────────────────────────
    // 2. Деревья, кустарники и травы — карусель примеров, сортировка, видео
    // ──────────────────────────────────────────────────────────────────────
    scientists: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Примеры",
            title: "Жизненные формы растений",
            slides: [
              { emoji: "🌳", caption: "Дерево: один крепкий ствол, высокая крона." },
              { emoji: "🌸", caption: "Цветущий кустарник: много тонких стволиков." },
              { emoji: "🌾", caption: "Трава: мягкий зелёный стебель, не одревесневает." },
            ],
          },
          kz: {
            groupLabel: "Мысалдар",
            title: "Өсімдіктердің тіршілік формалары",
            slides: [
              { emoji: "🌳", caption: "Ағаш: бір берік дің, биік жапырақ алқабы." },
              { emoji: "🌸", caption: "Гүлдеген бұта: көп жіңішке діңше." },
              { emoji: "🌾", caption: "Шөп: жұмсақ жасыл сабақ, ағаштанбайды." },
            ],
          },
          en: {
            groupLabel: "Examples",
            title: "Life forms of plants",
            slides: [
              { emoji: "🌳", caption: "Tree: one strong trunk, tall crown." },
              { emoji: "🌸", caption: "Flowering shrub: many thin stems." },
              { emoji: "🌾", caption: "Grass: a soft green stem, not woody." },
            ],
          },
        },
      },
      {
        type: "video",
        data: {
          ru: {
            title: "Как растут растения",
            youtubeId: "w77zPAtVTuI",
            caption: "Таймлапс роста семян: посмотри, как из крошки появляется растение!",
            durationLabel: "1:30",
          },
          kz: {
            title: "Өсімдіктер қалай өседі",
            youtubeId: "w77zPAtVTuI",
            caption: "Тұқымның өсу таймлапсы: кішкентай дәннен өсімдіктің қалай шығатынын қара!",
            durationLabel: "1:30",
          },
          en: {
            title: "How plants grow",
            youtubeId: "w77zPAtVTuI",
            caption: "Time-lapse of seeds growing: see how a tiny seed becomes a plant!",
            durationLabel: "1:30",
          },
        },
      },
      {
        type: "sort",
        data: {
          ru: {
            title: "Работа в парах: разложи по группам",
            instruction: "Выбери слово, затем нажми на нужную карточку: дерево, кустарник или трава.",
            categories: [
              { id: "tree", label: "Дерево", emoji: "🌳" },
              { id: "shrub", label: "Кустарник", emoji: "🌿" },
              { id: "grass", label: "Трава", emoji: "🌱" },
            ],
            items: [
              { id: "birch", label: "берёза", emoji: "🌳", categoryId: "tree" },
              { id: "pine", label: "сосна", emoji: "🌲", categoryId: "tree" },
              { id: "lilac", label: "сирень", emoji: "🌸", categoryId: "shrub" },
              { id: "currant", label: "смородина", emoji: "🫐", categoryId: "shrub" },
              { id: "dandelion", label: "одуванчик", emoji: "🌼", categoryId: "grass" },
              { id: "tulip", label: "тюльпан", emoji: "🌷", categoryId: "grass" },
            ],
            checkLabel: "Проверить ответ",
          },
          kz: {
            title: "Жұптық жұмыс: топтарға бөл",
            instruction: "Сөзді таңда, сосын қажетті картаны бас: ағаш, бұта немесе шөп.",
            categories: [
              { id: "tree", label: "Ағаш", emoji: "🌳" },
              { id: "shrub", label: "Бұта", emoji: "🌿" },
              { id: "grass", label: "Шөп", emoji: "🌱" },
            ],
            items: [
              { id: "birch", label: "қайың", emoji: "🌳", categoryId: "tree" },
              { id: "pine", label: "қарағай", emoji: "🌲", categoryId: "tree" },
              { id: "lilac", label: "сирень", emoji: "🌸", categoryId: "shrub" },
              { id: "currant", label: "қарақат", emoji: "🫐", categoryId: "shrub" },
              { id: "dandelion", label: "бақбақ", emoji: "🌼", categoryId: "grass" },
              { id: "tulip", label: "қызғалдақ", emoji: "🌷", categoryId: "grass" },
            ],
            checkLabel: "Жауапты тексер",
          },
          en: {
            title: "Pair work: sort into groups",
            instruction: "Pick a word, then tap the right card: tree, shrub or grass.",
            categories: [
              { id: "tree", label: "Tree", emoji: "🌳" },
              { id: "shrub", label: "Shrub", emoji: "🌿" },
              { id: "grass", label: "Grass", emoji: "🌱" },
            ],
            items: [
              { id: "birch", label: "birch", emoji: "🌳", categoryId: "tree" },
              { id: "pine", label: "pine", emoji: "🌲", categoryId: "tree" },
              { id: "lilac", label: "lilac", emoji: "🌸", categoryId: "shrub" },
              { id: "currant", label: "currant", emoji: "🫐", categoryId: "shrub" },
              { id: "dandelion", label: "dandelion", emoji: "🌼", categoryId: "grass" },
              { id: "tulip", label: "tulip", emoji: "🌷", categoryId: "grass" },
            ],
            checkLabel: "Check answer",
          },
        },
      },
    ],

    // ──────────────────────────────────────────────────────────────────────
    // 3. Лиственные и хвойные — лупа, энциклопедия, сортировка картинок
    // ──────────────────────────────────────────────────────────────────────
    observation: [
      {
        type: "zoom",
        data: {
          ru: {
            title: "Самостоятельная работа: ель и дуб",
            instruction: "Наведи лупу. Чем отличаются эти растения? Как называются иголки ели?",
            images: [
              { emoji: "🌲", caption: "Ель — у неё иголки (хвоя)" },
              { emoji: "🌳", caption: "Дуб — у него широкие листья" },
            ],
          },
          kz: {
            title: "Өзіндік жұмыс: шырша мен емен",
            instruction: "Лупаны жүгірт. Бұл өсімдіктер немен ерекшеленеді? Шыршаның инелері қалай аталады?",
            images: [
              { emoji: "🌲", caption: "Шырша — инелері (қылқан) бар" },
              { emoji: "🌳", caption: "Емен — кең жапырақтары бар" },
            ],
          },
          en: {
            title: "Independent work: spruce and oak",
            instruction: "Move the magnifier. How are these plants different? What are spruce needles called?",
            images: [
              { emoji: "🌲", caption: "Spruce — has needles" },
              { emoji: "🌳", caption: "Oak — has broad leaves" },
            ],
          },
        },
      },
      {
        type: "action",
        data: {
          ru: {
            title: "Найди в энциклопедии",
            prompt: "Открой книгу или интернет с помощью взрослых: какие лиственные и хвойные растения растут в твоей местности? Запиши 3 названия.",
            placeholder: "Например: берёза, сосна, тополь...",
          },
          kz: {
            title: "Энциклопедиядан тап",
            prompt: "Үлкендердің көмегімен кітап немесе интернет аш: сенің өңіріңде қандай жапырақты және қылқан жапырақты өсімдіктер өседі? 3 атауын жаз.",
            placeholder: "Мысалы: қайың, қарағай, терек...",
          },
          en: {
            title: "Find in an encyclopedia",
            prompt: "With an adult, open a book or the internet: what deciduous and coniferous plants grow in your area? Write 3 names.",
            placeholder: "For example: birch, pine, poplar...",
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Работа в парах: лиственные и хвойные",
            question: "Распредели растения на две группы. Где лиственные, а где хвойные?",
            items: [
              { emoji: "🌾", label: "Пшеница" },
              { emoji: "🌳", label: "Берёза" },
              { emoji: "🌿", label: "Кустарник" },
              { emoji: "🌲", label: "Лиственница" },
              { emoji: "🌴", label: "Пальма" },
            ],
            answer: "Лиственные: пшеница, берёза, кустарник, пальма. Хвойные: лиственница, ель, сосна. У хвойных листья — это иголки!",
            buttonLabel: "Показать ответ",
          },
          kz: {
            title: "Жұптық жұмыс: жапырақты және қылқан жапырақты",
            question: "Өсімдіктерді екі топқа бөл. Қайсысы жапырақты, қайсысы қылқан жапырақты?",
            items: [
              { emoji: "🌾", label: "Бидай" },
              { emoji: "🌳", label: "Қайың" },
              { emoji: "🌿", label: "Бұта" },
              { emoji: "🌲", label: "Балқарағай" },
              { emoji: "🌴", label: "Пальма" },
            ],
            answer: "Жапырақты: бидай, қайың, бұта, пальма. Қылқан жапырақты: балқарағай, шырша, қарағай. Қылқан жапырақтылардың жапырағы — инелер!",
            buttonLabel: "Жауапты көрсет",
          },
          en: {
            title: "Pair work: deciduous and coniferous",
            question: "Sort the plants into two groups. Which are deciduous, which are coniferous?",
            items: [
              { emoji: "🌾", label: "Wheat" },
              { emoji: "🌳", label: "Birch" },
              { emoji: "🌿", label: "Shrub" },
              { emoji: "🌲", label: "Larch" },
              { emoji: "🌴", label: "Palm" },
            ],
            answer: "Deciduous: wheat, birch, shrub, palm. Coniferous: larch, spruce, pine. Their 'leaves' are needles!",
            buttonLabel: "Show answer",
          },
        },
      },
    ],

    // ──────────────────────────────────────────────────────────────────────
    // 4. Практика, факты и итоги
    // ──────────────────────────────────────────────────────────────────────
    experiments: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Сравни",
            title: "Маленькое и большое дерево",
            slides: [
              { emoji: "🌱", caption: "Тонкий саженец берёзы — мальчик легко обхватывает его пальцами." },
              { emoji: "🌳", caption: "Старое толстое дерево — обхватить можно только всем классом!" },
            ],
          },
          kz: {
            groupLabel: "Салыстыр",
            title: "Кішкентай және үлкен ағаш",
            slides: [
              { emoji: "🌱", caption: "Қайыңның жіңішке көшеті — баланың саусағы оңай орап алады." },
              { emoji: "🌳", caption: "Қарт жуан ағаш — бүкіл сыныппен ғана құшақтай аласың!" },
            ],
          },
          en: {
            groupLabel: "Compare",
            title: "Small and large tree",
            slides: [
              { emoji: "🌱", caption: "A thin birch sapling — a boy easily wraps his fingers around it." },
              { emoji: "🌳", caption: "An old thick tree — only the whole class together can hug it!" },
            ],
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Ботаника** — наука о растениях. **Растения** — живые организмы: они растут, питаются, дышат и размножаются. По форме они делятся на **деревья**, **кустарники** и **травы**, а по типу листьев — на **лиственные** и **хвойные**.",
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Ботаника** — өсімдіктер туралы ғылым. **Өсімдіктер** — тірі ағзалар: олар өседі, қоректенеді, тыныс алады және көбейеді. Пішіні бойынша **ағаш**, **бұта** және **шөпке** бөлінеді, ал жапырақ түріне қарай **жапырақты** және **қылқан жапырақтыға** бөлінеді.",
          },
          en: {
            title: "What I learned",
            text:
              "**Botany** is the science of plants. **Plants** are living organisms: they grow, feed, breathe and reproduce. By form they are divided into **trees**, **shrubs** and **grasses**, and by leaf type into **deciduous** and **coniferous**.",
          },
        },
      },
      {
        type: "fact",
        data: {
          ru: {
            title: "Это интересно!",
            text: "Самое высокое дерево в мире — секвойя. Она вырастает выше 100 метров (как 30-этажный дом!) и может жить тысячи лет.",
            keywords: ["секвойя", "100 метров", "тысячи лет"],
            icon: "sparkles",
          },
          kz: {
            title: "Бұл қызық!",
            text: "Әлемдегі ең биік ағаш — секвойя. Ол 100 метрден де биік (30 қабатты үйдей!) өсіп, мыңдаған жыл өмір сүре алады.",
            keywords: ["секвойя", "100 метр", "мыңдаған жыл"],
            icon: "sparkles",
          },
          en: {
            title: "Fun fact!",
            text: "The tallest tree in the world is the sequoia. It grows over 100 metres tall (like a 30-storey building!) and can live for thousands of years.",
            keywords: ["sequoia", "100 metres", "thousands of years"],
            icon: "sparkles",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Вопросы для самопроверки",
            text:
              "1) На какие группы делятся **растения**? 2) По какому признаку их так разделили? 3) На какие группы делятся растения по типу **листьев**? 4) Какие интересные растения есть в твоей местности?",
          },
          kz: {
            title: "Өзіңді тексер сұрақтары",
            text:
              "1) **Өсімдіктер** қандай топтарға бөлінеді? 2) Қандай белгі бойынша бөлінген? 3) Жапырақ түріне қарай қандай топтарға бөлінеді? 4) Сенің өңіріңде қандай қызықты өсімдіктер бар?",
          },
          en: {
            title: "Self-check questions",
            text:
              "1) Into what groups are **plants** divided? 2) By what feature are they divided? 3) Into what groups are plants divided by **leaf** type? 4) What interesting plants grow in your area?",
          },
        },
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════
  // УРОК 3 — Основные части растений (трёхъязычные ключевые слова)
  // ════════════════════════════════════════════════════════════════════════
  3: {
    // ──────────── intro: ключевые слова (карусель) + аудио ────────────
    intro: [
      {
        type: "carousel",
        data: {
          ru: {
            title: "Ключевые слова на трёх языках",
            groupLabel: "RU · KZ · EN",
            slides: [
              { emoji: "🌿", caption: "корень · тамыр · root" },
              { emoji: "🌱", caption: "стебель · сабақ · stem" },
              { emoji: "🍃", caption: "лист · жапырақ · leaf" },
              { emoji: "🌸", caption: "цветок · гүл · flower" },
              { emoji: "🍎", caption: "плод с семенами · жеміс · fruit with seeds" },
            ],
          },
          kz: {
            title: "Үш тілдегі кілт сөздер",
            groupLabel: "RU · KZ · EN",
            slides: [
              { emoji: "🌿", caption: "тамыр · корень · root" },
              { emoji: "🌱", caption: "сабақ · стебель · stem" },
              { emoji: "🍃", caption: "жапырақ · лист · leaf" },
              { emoji: "🌸", caption: "гүл · цветок · flower" },
              { emoji: "🍎", caption: "жеміс · плод · fruit with seeds" },
            ],
          },
          en: {
            title: "Key words in three languages",
            groupLabel: "EN · RU · KZ",
            slides: [
              { emoji: "🌿", caption: "root · корень · тамыр" },
              { emoji: "🌱", caption: "stem · стебель · сабақ" },
              { emoji: "🍃", caption: "leaf · лист · жапырақ" },
              { emoji: "🌸", caption: "flower · цветок · гүл" },
              { emoji: "🍎", caption: "fruit with seeds · плод · жеміс" },
            ],
          },
        },
      },
      {
        type: "audio",
        data: {
          ru: {
            title: "Аудио-урок: части растения",
            text:
              "У каждого растения есть основные части: корень, стебель, лист, цветок и плод с семенами. Корень находится под землёй, остальные части — над землёй.",
            caption: "Послушай и запомни главные части",
            durationLabel: "0:33",
          },
          kz: {
            title: "Аудио-сабақ: өсімдіктің бөліктері",
            text:
              "Әр өсімдіктің негізгі бөліктері бар: тамыр, сабақ, жапырақ, гүл және тұқымды жеміс. Тамыр жер астында, қалғандары — жер үстінде.",
            caption: "Тыңда және басты бөліктерді есте сақта",
            durationLabel: "0:33",
          },
          en: {
            title: "Audio lesson: parts of a plant",
            text:
              "Every plant has main parts: root, stem, leaf, flower and fruit with seeds. The root is underground, the other parts are above the ground.",
            caption: "Listen and remember the main parts",
            durationLabel: "0:33",
          },
        },
      },
    ],

    // ──────────── scientists: основные части + работа в группах ────────────
    scientists: [
      {
        type: "fact",
        data: {
          ru: {
            title: "Основные части растений",
            text:
              "Посмотри на куст томата: 1 — корень, 2 — стебель, 3 — лист, 4 — цветок, 5 — плод с семенами. Каждая часть выполняет свою важную работу.",
            keywords: ["корень", "стебель", "лист", "цветок", "плод"],
            icon: "sparkles",
          },
          kz: {
            title: "Өсімдіктің негізгі бөліктері",
            text:
              "Қызанақ бұтасына қара: 1 — тамыр, 2 — сабақ, 3 — жапырақ, 4 — гүл, 5 — тұқымды жеміс. Әр бөліктің өз маңызды қызметі бар.",
            keywords: ["тамыр", "сабақ", "жапырақ", "гүл", "жеміс"],
            icon: "sparkles",
          },
          en: {
            title: "Main parts of a plant",
            text:
              "Look at the tomato bush: 1 — root, 2 — stem, 3 — leaf, 4 — flower, 5 — fruit with seeds. Each part does its own important job.",
            keywords: ["root", "stem", "leaf", "flower", "fruit"],
            icon: "sparkles",
          },
        },
      },
      {
        type: "carousel",
        data: {
          ru: {
            title: "Работа в группах · Календула",
            groupLabel: "1-я группа",
            slides: [
              { emoji: "🌼", caption: "Календула — рассмотри растение целиком." },
              { emoji: "🌿", question: "Каких частей этого растения не видно на рисунке?" },
              { emoji: "🌍", question: "Где обычно расположена эта часть? Под землёй или над?" },
            ],
          },
          kz: {
            title: "Топта жұмыс · Күнтабан",
            groupLabel: "1-топ",
            slides: [
              { emoji: "🌼", caption: "Күнтабан — өсімдікті толық қарап шық." },
              { emoji: "🌿", question: "Бұл өсімдіктің қандай бөліктері суретте көрінбейді?" },
              { emoji: "🌍", question: "Бұл бөлік әдетте қайда орналасқан? Жер астында ма, үстінде ме?" },
            ],
          },
          en: {
            title: "Group work · Marigold",
            groupLabel: "Group 1",
            slides: [
              { emoji: "🌼", caption: "Marigold — examine the whole plant." },
              { emoji: "🌿", question: "Which parts of this plant are not visible in the picture?" },
              { emoji: "🌍", question: "Where is that part usually located — underground or above?" },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Проверь ответ",
            question: "Каких частей календулы не видно на рисунке и где они расположены?",
            items: [
              { emoji: "🌿", label: "Корень" },
              { emoji: "🌍", label: "Под землёй" },
            ],
            answer:
              "На рисунке не видно корня — он находится под землёй и удерживает растение, добывая воду и питание.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Жауапты тексер",
            question: "Күнтабанның қандай бөлігі көрінбейді және ол қайда орналасқан?",
            items: [
              { emoji: "🌿", label: "Тамыр" },
              { emoji: "🌍", label: "Жер астында" },
            ],
            answer:
              "Суретте тамыр көрінбейді — ол жер астында және өсімдікті ұстап тұрып, су мен қоректі алады.",
            buttonLabel: "Тексеру",
          },
          en: {
            title: "Check the answer",
            question: "Which part of the marigold is not visible and where is it located?",
            items: [
              { emoji: "🌿", label: "Root" },
              { emoji: "🌍", label: "Underground" },
            ],
            answer:
              "The root is not visible — it is underground, holding the plant in place and getting water and nutrients.",
            buttonLabel: "Check answer",
          },
        },
      },
    ],

    // ──────────── observation: сравнения + итог + видео ────────────
    observation: [
      {
        type: "carousel",
        data: {
          ru: {
            title: "Сравни растения",
            groupLabel: "Жизненные формы",
            slides: [
              { emoji: "🌳", caption: "Берёза — высокое дерево с одним стволом." },
              { emoji: "🌷", caption: "Тюльпан — травянистое растение с цветком." },
              { emoji: "🤔", question: "Чем отличаются берёза и тюльпан? Какая у них жизненная форма?" },
            ],
          },
          kz: {
            title: "Өсімдіктерді салыстыр",
            groupLabel: "Тіршілік формалары",
            slides: [
              { emoji: "🌳", caption: "Қайың — биік ағаш, бір діңі бар." },
              { emoji: "🌷", caption: "Қызғалдақ — гүлі бар шөптесін өсімдік." },
              { emoji: "🤔", question: "Қайың мен қызғалдақтың айырмашылығы неде?" },
            ],
          },
          en: {
            title: "Compare the plants",
            groupLabel: "Life forms",
            slides: [
              { emoji: "🌳", caption: "Birch — a tall tree with a single trunk." },
              { emoji: "🌷", caption: "Tulip — a herbaceous plant with a flower." },
              { emoji: "🤔", question: "How do a birch and a tulip differ? What life forms are they?" },
            ],
          },
        },
      },
      {
        type: "action",
        data: {
          ru: {
            title: "Сравни рисунки",
            prompt:
              "Слева яблоня в цвету, справа — яблоня с плодами. Определи, чем отличается одно и то же растение в разные периоды жизни.",
            placeholder: "Напиши, чем отличаются рисунки...",
            multiline: true,
          },
          kz: {
            title: "Суреттерді салыстыр",
            prompt:
              "Сол жақта алма ағашы гүлдеп тұр, оң жақта — жемісімен. Бір өсімдіктің әр түрлі кезеңдегі айырмашылығын анықта.",
            placeholder: "Айырмашылықты жаз...",
            multiline: true,
          },
          en: {
            title: "Compare the pictures",
            prompt:
              "On the left an apple tree in blossom, on the right — with fruits. Tell how the same plant differs in different periods of its life.",
            placeholder: "Write what is different...",
            multiline: true,
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "У растения есть **подземная** часть — **корень**, и **надземные** части: **стебель**, **листья**, **цветы** и **плоды**. Все вместе они помогают растению жить и расти.",
            terms: ["корень", "стебель", "лист", "цветок", "плод"],
          },
          kz: {
            title: "Не білдім",
            text:
              "Өсімдіктің **жер асты** бөлігі — **тамыр**, ал **жер үсті** бөліктері: **сабақ**, **жапырақ**, **гүл** және **жеміс**. Олардың барлығы бірге өсімдіктің өсуіне көмектеседі.",
            terms: ["тамыр", "сабақ", "жапырақ", "гүл", "жеміс"],
          },
          en: {
            title: "What I learned",
            text:
              "A plant has an **underground** part — the **root**, and **above-ground** parts: **stem**, **leaves**, **flowers** and **fruits**. Together they help the plant live and grow.",
            terms: ["root", "stem", "leaf", "flower", "fruit"],
          },
        },
      },
      {
        type: "video",
        data: {
          ru: {
            title: "Строение растения",
            youtubeId: "p3St51F4kE8",
            caption: "Короткий ролик о частях растения",
            durationLabel: "0:40",
          },
          kz: {
            title: "Өсімдіктің құрылысы",
            youtubeId: "p3St51F4kE8",
            caption: "Өсімдіктің бөліктері туралы қысқа ролик",
            durationLabel: "0:40",
          },
          en: {
            title: "Plant structure",
            youtubeId: "p3St51F4kE8",
            caption: "A short clip about the parts of a plant",
            durationLabel: "0:40",
          },
        },
      },
    ],

    // ──────────── experiments: интерактивная модель + итоговые вопросы ────────────
    experiments: [
      {
        type: "sort",
        data: {
          ru: {
            title: "Интерактивная модель · Анютины глазки",
            instruction:
              "Сопоставь номер с частью растения: выбери цифру, затем нажми на нужную часть.",
            categories: [
              { id: "root", label: "Корень", emoji: "🌿" },
              { id: "stem", label: "Стебель", emoji: "🌱" },
              { id: "leaf", label: "Лист", emoji: "🍃" },
              { id: "flower", label: "Цветок", emoji: "🌸" },
              { id: "fruit", label: "Плод", emoji: "🍎" },
            ],
            items: [
              { id: "1", label: "1", categoryId: "root" },
              { id: "2", label: "2", categoryId: "stem" },
              { id: "3", label: "3", categoryId: "leaf" },
              { id: "4", label: "4", categoryId: "flower" },
              { id: "5", label: "5", categoryId: "fruit" },
            ],
            checkLabel: "Проверить ответ",
          },
          kz: {
            title: "Интерактивті модель · Хош иісті шегіргүл",
            instruction:
              "Нөмірді өсімдіктің бөлігімен сәйкестендір: алдымен цифрды таңда, содан кейін бөлікті бас.",
            categories: [
              { id: "root", label: "Тамыр", emoji: "🌿" },
              { id: "stem", label: "Сабақ", emoji: "🌱" },
              { id: "leaf", label: "Жапырақ", emoji: "🍃" },
              { id: "flower", label: "Гүл", emoji: "🌸" },
              { id: "fruit", label: "Жеміс", emoji: "🍎" },
            ],
            items: [
              { id: "1", label: "1", categoryId: "root" },
              { id: "2", label: "2", categoryId: "stem" },
              { id: "3", label: "3", categoryId: "leaf" },
              { id: "4", label: "4", categoryId: "flower" },
              { id: "5", label: "5", categoryId: "fruit" },
            ],
            checkLabel: "Тексеру",
          },
          en: {
            title: "Interactive model · Pansy",
            instruction:
              "Match the number to the plant part: pick a digit, then click the matching part.",
            categories: [
              { id: "root", label: "Root", emoji: "🌿" },
              { id: "stem", label: "Stem", emoji: "🌱" },
              { id: "leaf", label: "Leaf", emoji: "🍃" },
              { id: "flower", label: "Flower", emoji: "🌸" },
              { id: "fruit", label: "Fruit", emoji: "🍎" },
            ],
            items: [
              { id: "1", label: "1", categoryId: "root" },
              { id: "2", label: "2", categoryId: "stem" },
              { id: "3", label: "3", categoryId: "leaf" },
              { id: "4", label: "4", categoryId: "flower" },
              { id: "5", label: "5", categoryId: "fruit" },
            ],
            checkLabel: "Check answer",
          },
        },
      },
      {
        type: "action",
        data: {
          ru: {
            title: "Проблемный вопрос",
            prompt:
              "Как ты думаешь, что произойдёт, если растение лишится какой-либо своей части?",
            placeholder: "Поразмышляй и напиши свой ответ...",
            multiline: true,
          },
          kz: {
            title: "Проблемалық сұрақ",
            prompt:
              "Қалай ойлайсың, өсімдік қандай да бір бөлігінен айырылса не болады?",
            placeholder: "Ойлан да жауабыңды жаз...",
            multiline: true,
          },
          en: {
            title: "Problem question",
            prompt:
              "What do you think will happen if a plant loses one of its parts?",
            placeholder: "Think and write your answer...",
            multiline: true,
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Итоговые вопросы",
            text:
              "1) Из каких **частей** состоит растение? 2) Почему **корень** называют **подземной** частью растения? 3) Что произойдёт, если растение лишится какой-либо части?",
          },
          kz: {
            title: "Қорытынды сұрақтар",
            text:
              "1) Өсімдік қандай **бөліктерден** тұрады? 2) Неліктен **тамырды** өсімдіктің **жер асты** бөлігі деп атайды? 3) Өсімдік бір бөлігінен айырылса не болады?",
          },
          en: {
            title: "Wrap-up questions",
            text:
              "1) What **parts** make up a plant? 2) Why is the **root** called the **underground** part? 3) What will happen if a plant loses one of its parts?",
          },
        },
      },
    ],
  },
  4: {
    // ──────────── intro: ключевые слова (карусель) + аудио ────────────
    intro: [
      {
        type: "carousel",
        data: {
          ru: {
            title: "Ключевые слова на трёх языках",
            groupLabel: "RU · KZ · EN",
            slides: [
              { emoji: "🌿", caption: "корень · тамыр · root" },
              { emoji: "🌱", caption: "стебель · сабақ · stem" },
              { emoji: "🍃", caption: "лист · жапырақ · leaf" },
              { emoji: "🌸", caption: "цветок · гүл · flower" },
              { emoji: "🍎", caption: "плод с семенами · жеміс · fruit with seeds" },
            ],
          },
          kz: {
            title: "Үш тілдегі кілт сөздер",
            groupLabel: "RU · KZ · EN",
            slides: [
              { emoji: "🌿", caption: "тамыр · корень · root" },
              { emoji: "🌱", caption: "сабақ · стебель · stem" },
              { emoji: "🍃", caption: "жапырақ · лист · leaf" },
              { emoji: "🌸", caption: "гүл · цветок · flower" },
              { emoji: "🍎", caption: "жеміс · плод · fruit with seeds" },
            ],
          },
          en: {
            title: "Key words in three languages",
            groupLabel: "EN · RU · KZ",
            slides: [
              { emoji: "🌿", caption: "root · корень · тамыр" },
              { emoji: "🌱", caption: "stem · стебель · сабақ" },
              { emoji: "🍃", caption: "leaf · лист · жапырақ" },
              { emoji: "🌸", caption: "flower · цветок · гүл" },
              { emoji: "🍎", caption: "fruit with seeds · плод · жеміс" },
            ],
          },
        },
      },
      {
        type: "audio",
        data: {
          ru: {
            title: "Аудио-урок: части растения",
            text:
              "У каждого растения есть основные части: корень, стебель, лист, цветок и плод с семенами. Корень находится под землёй, остальные части — над землёй.",
            caption: "Послушай и запомни главные части",
            durationLabel: "0:33",
          },
          kz: {
            title: "Аудио-сабақ: өсімдіктің бөліктері",
            text:
              "Әр өсімдіктің негізгі бөліктері бар: тамыр, сабақ, жапырақ, гүл және тұқымды жеміс. Тамыр жер астында, қалғандары — жер үстінде.",
            caption: "Тыңда және басты бөліктерді есте сақта",
            durationLabel: "0:33",
          },
          en: {
            title: "Audio lesson: parts of a plant",
            text:
              "Every plant has main parts: root, stem, leaf, flower and fruit with seeds. The root is underground, the other parts are above the ground.",
            caption: "Listen and remember the main parts",
            durationLabel: "0:33",
          },
        },
      },
    ],

    // ──────────── scientists: основные части + работа в группах ────────────
    scientists: [
      {
        type: "fact",
        data: {
          ru: {
            title: "Основные части растений",
            text:
              "Посмотри на куст томата: 1 — корень, 2 — стебель, 3 — лист, 4 — цветок, 5 — плод с семенами. Каждая часть выполняет свою важную работу.",
            keywords: ["корень", "стебель", "лист", "цветок", "плод"],
            icon: "sparkles",
          },
          kz: {
            title: "Өсімдіктің негізгі бөліктері",
            text:
              "Қызанақ бұтасына қара: 1 — тамыр, 2 — сабақ, 3 — жапырақ, 4 — гүл, 5 — тұқымды жеміс. Әр бөліктің өз маңызды қызметі бар.",
            keywords: ["тамыр", "сабақ", "жапырақ", "гүл", "жеміс"],
            icon: "sparkles",
          },
          en: {
            title: "Main parts of a plant",
            text:
              "Look at the tomato bush: 1 — root, 2 — stem, 3 — leaf, 4 — flower, 5 — fruit with seeds. Each part does its own important job.",
            keywords: ["root", "stem", "leaf", "flower", "fruit"],
            icon: "sparkles",
          },
        },
      },
      {
        type: "carousel",
        data: {
          ru: {
            title: "Работа в группах · Календула",
            groupLabel: "1-я группа",
            slides: [
              { emoji: "🌼", caption: "Календула — рассмотри растение целиком." },
              { emoji: "🌿", question: "Каких частей этого растения не видно на рисунке?" },
              { emoji: "🌍", question: "Где обычно расположена эта часть? Под землёй или над?" },
            ],
          },
          kz: {
            title: "Топта жұмыс · Күнтабан",
            groupLabel: "1-топ",
            slides: [
              { emoji: "🌼", caption: "Күнтабан — өсімдікті толық қарап шық." },
              { emoji: "🌿", question: "Бұл өсімдіктің қандай бөліктері суретте көрінбейді?" },
              { emoji: "🌍", question: "Бұл бөлік әдетте қайда орналасқан? Жер астында ма, үстінде ме?" },
            ],
          },
          en: {
            title: "Group work · Marigold",
            groupLabel: "Group 1",
            slides: [
              { emoji: "🌼", caption: "Marigold — examine the whole plant." },
              { emoji: "🌿", question: "Which parts of this plant are not visible in the picture?" },
              { emoji: "🌍", question: "Where is that part usually located — underground or above?" },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Проверь ответ",
            question: "Каких частей календулы не видно на рисунке и где они расположены?",
            items: [
              { emoji: "🌿", label: "Корень" },
              { emoji: "🌍", label: "Под землёй" },
            ],
            answer:
              "На рисунке не видно корня — он находится под землёй и удерживает растение, добывая воду и питание.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Жауапты тексер",
            question: "Күнтабанның қандай бөлігі көрінбейді және ол қайда орналасқан?",
            items: [
              { emoji: "🌿", label: "Тамыр" },
              { emoji: "🌍", label: "Жер астында" },
            ],
            answer:
              "Суретте тамыр көрінбейді — ол жер астында және өсімдікті ұстап тұрып, су мен қоректі алады.",
            buttonLabel: "Тексеру",
          },
          en: {
            title: "Check the answer",
            question: "Which part of the marigold is not visible and where is it located?",
            items: [
              { emoji: "🌿", label: "Root" },
              { emoji: "🌍", label: "Underground" },
            ],
            answer:
              "The root is not visible — it is underground, holding the plant in place and getting water and nutrients.",
            buttonLabel: "Check answer",
          },
        },
      },
    ],

    // ──────────── observation: сравнения + итог + видео ────────────
    observation: [
      {
        type: "carousel",
        data: {
          ru: {
            title: "Сравни растения",
            groupLabel: "Жизненные формы",
            slides: [
              { emoji: "🌳", caption: "Берёза — высокое дерево с одним стволом." },
              { emoji: "🌷", caption: "Тюльпан — травянистое растение с цветком." },
              { emoji: "🤔", question: "Чем отличаются берёза и тюльпан? Какая у них жизненная форма?" },
            ],
          },
          kz: {
            title: "Өсімдіктерді салыстыр",
            groupLabel: "Тіршілік формалары",
            slides: [
              { emoji: "🌳", caption: "Қайың — биік ағаш, бір діңі бар." },
              { emoji: "🌷", caption: "Қызғалдақ — гүлі бар шөптесін өсімдік." },
              { emoji: "🤔", question: "Қайың мен қызғалдақтың айырмашылығы неде?" },
            ],
          },
          en: {
            title: "Compare the plants",
            groupLabel: "Life forms",
            slides: [
              { emoji: "🌳", caption: "Birch — a tall tree with a single trunk." },
              { emoji: "🌷", caption: "Tulip — a herbaceous plant with a flower." },
              { emoji: "🤔", question: "How do a birch and a tulip differ? What life forms are they?" },
            ],
          },
        },
      },
      {
        type: "action",
        data: {
          ru: {
            title: "Сравни рисунки",
            prompt:
              "Слева яблоня в цвету, справа — яблоня с плодами. Определи, чем отличается одно и то же растение в разные периоды жизни.",
            placeholder: "Напиши, чем отличаются рисунки...",
            multiline: true,
          },
          kz: {
            title: "Суреттерді салыстыр",
            prompt:
              "Сол жақта алма ағашы гүлдеп тұр, оң жақта — жемісімен. Бір өсімдіктің әр түрлі кезеңдегі айырмашылығын анықта.",
            placeholder: "Айырмашылықты жаз...",
            multiline: true,
          },
          en: {
            title: "Compare the pictures",
            prompt:
              "On the left an apple tree in blossom, on the right — with fruits. Tell how the same plant differs in different periods of its life.",
            placeholder: "Write what is different...",
            multiline: true,
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "У растения есть **подземная** часть — **корень**, и **надземные** части: **стебель**, **листья**, **цветы** и **плоды**. Все вместе они помогают растению жить и расти.",
            terms: ["корень", "стебель", "лист", "цветок", "плод"],
          },
          kz: {
            title: "Не білдім",
            text:
              "Өсімдіктің **жер асты** бөлігі — **тамыр**, ал **жер үсті** бөліктері: **сабақ**, **жапырақ**, **гүл** және **жеміс**. Олардың барлығы бірге өсімдіктің өсуіне көмектеседі.",
            terms: ["тамыр", "сабақ", "жапырақ", "гүл", "жеміс"],
          },
          en: {
            title: "What I learned",
            text:
              "A plant has an **underground** part — the **root**, and **above-ground** parts: **stem**, **leaves**, **flowers** and **fruits**. Together they help the plant live and grow.",
            terms: ["root", "stem", "leaf", "flower", "fruit"],
          },
        },
      },
      {
        type: "video",
        data: {
          ru: {
            title: "Строение растения",
            youtubeId: "p3St51F4kE8",
            caption: "Короткий ролик о частях растения",
            durationLabel: "0:40",
          },
          kz: {
            title: "Өсімдіктің құрылысы",
            youtubeId: "p3St51F4kE8",
            caption: "Өсімдіктің бөліктері туралы қысқа ролик",
            durationLabel: "0:40",
          },
          en: {
            title: "Plant structure",
            youtubeId: "p3St51F4kE8",
            caption: "A short clip about the parts of a plant",
            durationLabel: "0:40",
          },
        },
      },
    ],

    // ──────────── experiments: интерактивная модель + итоговые вопросы ────────────
    experiments: [
      {
        type: "sort",
        data: {
          ru: {
            title: "Интерактивная модель · Анютины глазки",
            instruction:
              "Сопоставь номер с частью растения: выбери цифру, затем нажми на нужную часть.",
            categories: [
              { id: "root", label: "Корень", emoji: "🌿" },
              { id: "stem", label: "Стебель", emoji: "🌱" },
              { id: "leaf", label: "Лист", emoji: "🍃" },
              { id: "flower", label: "Цветок", emoji: "🌸" },
              { id: "fruit", label: "Плод", emoji: "🍎" },
            ],
            items: [
              { id: "1", label: "1", categoryId: "root" },
              { id: "2", label: "2", categoryId: "stem" },
              { id: "3", label: "3", categoryId: "leaf" },
              { id: "4", label: "4", categoryId: "flower" },
              { id: "5", label: "5", categoryId: "fruit" },
            ],
            checkLabel: "Проверить ответ",
          },
          kz: {
            title: "Интерактивті модель · Хош иісті шегіргүл",
            instruction:
              "Нөмірді өсімдіктің бөлігімен сәйкестендір: алдымен цифрды таңда, содан кейін бөлікті бас.",
            categories: [
              { id: "root", label: "Тамыр", emoji: "🌿" },
              { id: "stem", label: "Сабақ", emoji: "🌱" },
              { id: "leaf", label: "Жапырақ", emoji: "🍃" },
              { id: "flower", label: "Гүл", emoji: "🌸" },
              { id: "fruit", label: "Жеміс", emoji: "🍎" },
            ],
            items: [
              { id: "1", label: "1", categoryId: "root" },
              { id: "2", label: "2", categoryId: "stem" },
              { id: "3", label: "3", categoryId: "leaf" },
              { id: "4", label: "4", categoryId: "flower" },
              { id: "5", label: "5", categoryId: "fruit" },
            ],
            checkLabel: "Тексеру",
          },
          en: {
            title: "Interactive model · Pansy",
            instruction:
              "Match the number to the plant part: pick a digit, then click the matching part.",
            categories: [
              { id: "root", label: "Root", emoji: "🌿" },
              { id: "stem", label: "Stem", emoji: "🌱" },
              { id: "leaf", label: "Leaf", emoji: "🍃" },
              { id: "flower", label: "Flower", emoji: "🌸" },
              { id: "fruit", label: "Fruit", emoji: "🍎" },
            ],
            items: [
              { id: "1", label: "1", categoryId: "root" },
              { id: "2", label: "2", categoryId: "stem" },
              { id: "3", label: "3", categoryId: "leaf" },
              { id: "4", label: "4", categoryId: "flower" },
              { id: "5", label: "5", categoryId: "fruit" },
            ],
            checkLabel: "Check answer",
          },
        },
      },
      {
        type: "action",
        data: {
          ru: {
            title: "Проблемный вопрос",
            prompt:
              "Как ты думаешь, что произойдёт, если растение лишится какой-либо своей части?",
            placeholder: "Поразмышляй и напиши свой ответ...",
            multiline: true,
          },
          kz: {
            title: "Проблемалық сұрақ",
            prompt:
              "Қалай ойлайсың, өсімдік қандай да бір бөлігінен айырылса не болады?",
            placeholder: "Ойлан да жауабыңды жаз...",
            multiline: true,
          },
          en: {
            title: "Problem question",
            prompt:
              "What do you think will happen if a plant loses one of its parts?",
            placeholder: "Think and write your answer...",
            multiline: true,
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Итоговые вопросы",
            text:
              "1) Из каких **частей** состоит растение? 2) Почему **корень** называют **подземной** частью растения? 3) Что произойдёт, если растение лишится какой-либо части?",
          },
          kz: {
            title: "Қорытынды сұрақтар",
            text:
              "1) Өсімдік қандай **бөліктерден** тұрады? 2) Неліктен **тамырды** өсімдіктің **жер асты** бөлігі деп атайды? 3) Өсімдік бір бөлігінен айырылса не болады?",
          },
          en: {
            title: "Wrap-up questions",
            text:
              "1) What **parts** make up a plant? 2) Why is the **root** called the **underground** part? 3) What will happen if a plant loses one of its parts?",
          },
        },
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════
  // УРОК 5. Дикорастущие и культурные растения. Уход за комнатными.
  // ════════════════════════════════════════════════════════════════════════
  5: {
    // ──────────────────────────────────────────────────────────────────────
    // 1. Шапка — аудио-гид + ключевые слова (трёхъязычие)
    // ──────────────────────────────────────────────────────────────────────
    intro: [
      {
        type: "audio",
        data: {
          ru: {
            title: "Аудио-гид к уроку",
            text:
              "Сегодня мы узнаем, чем дикорастущие растения отличаются от культурных, и научимся ухаживать за комнатными цветами.",
            caption: "Послушай вступление к уроку",
            durationLabel: "0:57",
          },
          kz: {
            title: "Сабақтың аудио-гиді",
            text:
              "Бүгін біз жабайы өсімдіктердің мәдени өсімдіктерден қандай айырмашылығы бар екенін біліп, бөлме гүлдерін күтуді үйренеміз.",
            caption: "Сабақтың кіріспесін тыңда",
            durationLabel: "0:57",
          },
          en: {
            title: "Lesson audio guide",
            text:
              "Today we'll learn how wild plants differ from cultivated ones and how to take care of houseplants.",
            caption: "Listen to the lesson intro",
            durationLabel: "0:57",
          },
        },
      },
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Ключевые слова",
            title: "Дикорастущие / Культурные",
            slides: [
              { emoji: "🌿", caption: "Дикорастущие растения / Жабайы өсімдіктер / Wild plants" },
              { emoji: "🌾", caption: "Культурные растения / Мәдени өсімдіктер / Cultivated plants" },
              { emoji: "🪴", caption: "Комнатные растения / Бөлме өсімдіктері / Houseplants" },
              { emoji: "💧", caption: "Уход / Күтім / Care" },
            ],
          },
          kz: {
            groupLabel: "Кілт сөздер",
            title: "Жабайы / Мәдени",
            slides: [
              { emoji: "🌿", caption: "Жабайы өсімдіктер / Дикорастущие / Wild plants" },
              { emoji: "🌾", caption: "Мәдени өсімдіктер / Культурные / Cultivated plants" },
              { emoji: "🪴", caption: "Бөлме өсімдіктері / Комнатные / Houseplants" },
              { emoji: "💧", caption: "Күтім / Уход / Care" },
            ],
          },
          en: {
            groupLabel: "Key words",
            title: "Wild / Cultivated",
            slides: [
              { emoji: "🌿", caption: "Wild plants / Дикорастущие / Жабайы өсімдіктер" },
              { emoji: "🌾", caption: "Cultivated plants / Культурные / Мәдени өсімдіктер" },
              { emoji: "🪴", caption: "Houseplants / Комнатные / Бөлме өсімдіктері" },
              { emoji: "💧", caption: "Care / Уход / Күтім" },
            ],
          },
        },
      },
    ],

    // ──────────────────────────────────────────────────────────────────────
    // 2. Дикорастущие и культурные растения
    // ──────────────────────────────────────────────────────────────────────
    scientists: [
      {
        type: "summary",
        data: {
          ru: {
            title: "Дикорастущие и культурные",
            text:
              "**Дикорастущие** растения растут сами, без помощи человека. **Культурные** растения люди выращивают сами — для еды, лекарств и красоты.",
            terms: ["дикорастущие", "культурные"],
          },
          kz: {
            title: "Жабайы және мәдени",
            text:
              "**Жабайы** өсімдіктер адамның көмегінсіз өздігінен өседі. **Мәдени** өсімдіктерді адамдар тамақ, дәрі және әсемдік үшін өздері өсіреді.",
            terms: ["жабайы", "мәдени"],
          },
          en: {
            title: "Wild and cultivated",
            text:
              "**Wild** plants grow on their own, without people. **Cultivated** plants are grown by people — for food, medicine and beauty.",
            terms: ["wild", "cultivated"],
          },
        },
      },
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Как человек использует это растение?",
            slides: [
              { emoji: "🌱", caption: "Хлопок — из его волокон делают ткань и одежду." },
              { emoji: "🌻", caption: "Подсолнечник — из семян получают масло." },
              { emoji: "🌾", caption: "Пшеница — из зёрен делают муку и хлеб." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Адам бұл өсімдікті қалай пайдаланады?",
            slides: [
              { emoji: "🌱", caption: "Мақта — талшықтарынан мата мен киім жасайды." },
              { emoji: "🌻", caption: "Күнбағыс — дәнінен май алады." },
              { emoji: "🌾", caption: "Бидай — дәнінен ұн мен нан жасайды." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "How do people use this plant?",
            slides: [
              { emoji: "🌱", caption: "Cotton — its fibres are used for fabric and clothing." },
              { emoji: "🌻", caption: "Sunflower — its seeds give oil." },
              { emoji: "🌾", caption: "Wheat — its grains are used for flour and bread." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Лекарственные растения",
            question: "Эти растения называют лекарственными. Почему?",
            items: [
              { emoji: "🌼", label: "календула" },
              { emoji: "🌸", label: "ромашка" },
              { emoji: "🌿", label: "зверобой" },
            ],
            answer:
              "Из них делают лекарства и отвары, которые помогают людям лечиться от болезней.",
            buttonLabel: "Показать ответ",
          },
          kz: {
            title: "Дәрілік өсімдіктер",
            question: "Бұл өсімдіктерді дәрілік деп атайды. Неліктен?",
            items: [
              { emoji: "🌼", label: "күнбағыс шай" },
              { emoji: "🌸", label: "түймедақ" },
              { emoji: "🌿", label: "шайқурай" },
            ],
            answer:
              "Олардан адамдарды емдейтін дәрілер мен қайнатпалар жасайды.",
            buttonLabel: "Жауапты көрсету",
          },
          en: {
            title: "Medicinal plants",
            question: "These plants are called medicinal. Why?",
            items: [
              { emoji: "🌼", label: "calendula" },
              { emoji: "🌸", label: "chamomile" },
              { emoji: "🌿", label: "St John's wort" },
            ],
            answer:
              "They are used to make medicines and herbal teas that help people recover from illness.",
            buttonLabel: "Show answer",
          },
        },
      },
      {
        type: "fillblanks",
        data: {
          ru: {
            title: "Сравни два пейзажа",
            sentence: "На первом фото растения {0}, а на втором — {1}.",
            blanks: [
              { answers: ["дикорастущие", "дикие"] },
              { answers: ["культурные"] },
            ],
            hint: "Луг — это дикорастущие, засеянное поле — культурные.",
          },
          kz: {
            title: "Екі көріністі салыстыр",
            sentence: "Бірінші суретте өсімдіктер {0}, ал екіншісінде — {1}.",
            blanks: [
              { answers: ["жабайы"] },
              { answers: ["мәдени"] },
            ],
            hint: "Шалғын — жабайы, егілген егіс — мәдени.",
          },
          en: {
            title: "Compare two landscapes",
            sentence: "In the first photo the plants are {0}, in the second — {1}.",
            blanks: [
              { answers: ["wild"] },
              { answers: ["cultivated"] },
            ],
            hint: "A meadow is wild, a sown field is cultivated.",
          },
        },
      },
      {
        type: "video",
        data: {
          ru: {
            title: "Культурные растения",
            youtubeId: "0R5Lf3Q3p2A",
            caption: "Короткое видео о том, как человек выращивает культурные растения.",
            durationLabel: "1:20",
          },
          kz: {
            title: "Мәдени өсімдіктер",
            youtubeId: "0R5Lf3Q3p2A",
            caption: "Адамның мәдени өсімдіктерді қалай өсіретіні туралы қысқа бейне.",
            durationLabel: "1:20",
          },
          en: {
            title: "Cultivated plants",
            youtubeId: "0R5Lf3Q3p2A",
            caption: "A short video about how people grow cultivated plants.",
            durationLabel: "1:20",
          },
        },
      },
      {
        type: "sort",
        data: {
          ru: {
            title: "Дикие или культурные?",
            instruction:
              "Распредели слова на две группы: дикорастущие и культурные растения.",
            categories: [
              { id: "wild", label: "Дикорастущие", emoji: "🌿" },
              { id: "cult", label: "Культурные", emoji: "🌾" },
            ],
            items: [
              { id: "i1", label: "одуванчик", emoji: "🌼", categoryId: "wild" },
              { id: "i2", label: "подсолнечник", emoji: "🌻", categoryId: "cult" },
              { id: "i3", label: "берёза", emoji: "🌳", categoryId: "wild" },
              { id: "i4", label: "пшеница", emoji: "🌾", categoryId: "cult" },
              { id: "i5", label: "гвоздика", emoji: "🌸", categoryId: "cult" },
              { id: "i6", label: "капуста", emoji: "🥬", categoryId: "cult" },
            ],
            checkLabel: "Показать ответ",
          },
          kz: {
            title: "Жабайы ма, мәдени ме?",
            instruction:
              "Сөздерді екі топқа бөл: жабайы және мәдени өсімдіктер.",
            categories: [
              { id: "wild", label: "Жабайы", emoji: "🌿" },
              { id: "cult", label: "Мәдени", emoji: "🌾" },
            ],
            items: [
              { id: "i1", label: "бақбақ", emoji: "🌼", categoryId: "wild" },
              { id: "i2", label: "күнбағыс", emoji: "🌻", categoryId: "cult" },
              { id: "i3", label: "қайың", emoji: "🌳", categoryId: "wild" },
              { id: "i4", label: "бидай", emoji: "🌾", categoryId: "cult" },
              { id: "i5", label: "қалампыр", emoji: "🌸", categoryId: "cult" },
              { id: "i6", label: "орамжапырақ", emoji: "🥬", categoryId: "cult" },
            ],
            checkLabel: "Жауапты көрсету",
          },
          en: {
            title: "Wild or cultivated?",
            instruction:
              "Sort the words into two groups: wild and cultivated plants.",
            categories: [
              { id: "wild", label: "Wild", emoji: "🌿" },
              { id: "cult", label: "Cultivated", emoji: "🌾" },
            ],
            items: [
              { id: "i1", label: "dandelion", emoji: "🌼", categoryId: "wild" },
              { id: "i2", label: "sunflower", emoji: "🌻", categoryId: "cult" },
              { id: "i3", label: "birch", emoji: "🌳", categoryId: "wild" },
              { id: "i4", label: "wheat", emoji: "🌾", categoryId: "cult" },
              { id: "i5", label: "carnation", emoji: "🌸", categoryId: "cult" },
              { id: "i6", label: "cabbage", emoji: "🥬", categoryId: "cult" },
            ],
            checkLabel: "Show answer",
          },
        },
      },
    ],

    // ──────────────────────────────────────────────────────────────────────
    // 3. Комнатные растения и уход
    // ──────────────────────────────────────────────────────────────────────
    observation: [
      {
        type: "summary",
        data: {
          ru: {
            title: "Комнатные растения",
            text:
              "Многие комнатные растения привезены из **тёплых стран**. Поэтому им нужны **тепло**, **свет** и **полив** — особый уход.",
            terms: ["тёплых стран", "тепло", "свет", "полив"],
          },
          kz: {
            title: "Бөлме өсімдіктері",
            text:
              "Көптеген бөлме өсімдіктері **жылы елдерден** әкелінген. Сондықтан оларға **жылу**, **жарық** және **суару** — ерекше күтім қажет.",
            terms: ["жылы елдерден", "жылу", "жарық", "суару"],
          },
          en: {
            title: "Houseplants",
            text:
              "Many houseplants come from **warm countries**. That's why they need **warmth**, **light** and **watering** — special care.",
            terms: ["warm countries", "warmth", "light", "watering"],
          },
        },
      },
      {
        type: "sort",
        data: {
          ru: {
            title: "Что нужно для ухода?",
            instruction:
              "Выбери только те предметы, которые нужны для ухода за растениями.",
            categories: [
              { id: "yes", label: "Нужно для ухода", emoji: "✅" },
              { id: "no", label: "Не нужно", emoji: "❌" },
            ],
            items: [
              { id: "t1", label: "Лейка", emoji: "🚿", categoryId: "yes" },
              { id: "t2", label: "Пульверизатор", emoji: "💦", categoryId: "yes" },
              { id: "t3", label: "Секатор", emoji: "✂️", categoryId: "yes" },
              { id: "t4", label: "Лампа", emoji: "💡", categoryId: "yes" },
              { id: "t5", label: "Фонарик", emoji: "🔦", categoryId: "no" },
              { id: "t6", label: "Смартфон", emoji: "📱", categoryId: "no" },
              { id: "t7", label: "Игрушка", emoji: "🧸", categoryId: "no" },
              { id: "t8", label: "Садовый инструмент", emoji: "🪴", categoryId: "yes" },
            ],
            checkLabel: "Проверить ответ",
          },
          kz: {
            title: "Күтім үшін не қажет?",
            instruction:
              "Өсімдіктерді күтуге қажет заттарды ғана таңда.",
            categories: [
              { id: "yes", label: "Күтімге қажет", emoji: "✅" },
              { id: "no", label: "Қажет емес", emoji: "❌" },
            ],
            items: [
              { id: "t1", label: "Шелек", emoji: "🚿", categoryId: "yes" },
              { id: "t2", label: "Бүріккіш", emoji: "💦", categoryId: "yes" },
              { id: "t3", label: "Қайшы", emoji: "✂️", categoryId: "yes" },
              { id: "t4", label: "Шам", emoji: "💡", categoryId: "yes" },
              { id: "t5", label: "Қол шамы", emoji: "🔦", categoryId: "no" },
              { id: "t6", label: "Смартфон", emoji: "📱", categoryId: "no" },
              { id: "t7", label: "Ойыншық", emoji: "🧸", categoryId: "no" },
              { id: "t8", label: "Бақша құралы", emoji: "🪴", categoryId: "yes" },
            ],
            checkLabel: "Жауапты тексеру",
          },
          en: {
            title: "What's needed for plant care?",
            instruction:
              "Pick only the items needed to take care of plants.",
            categories: [
              { id: "yes", label: "Needed", emoji: "✅" },
              { id: "no", label: "Not needed", emoji: "❌" },
            ],
            items: [
              { id: "t1", label: "Watering can", emoji: "🚿", categoryId: "yes" },
              { id: "t2", label: "Spray bottle", emoji: "💦", categoryId: "yes" },
              { id: "t3", label: "Pruner", emoji: "✂️", categoryId: "yes" },
              { id: "t4", label: "Lamp", emoji: "💡", categoryId: "yes" },
              { id: "t5", label: "Flashlight", emoji: "🔦", categoryId: "no" },
              { id: "t6", label: "Smartphone", emoji: "📱", categoryId: "no" },
              { id: "t7", label: "Toy", emoji: "🧸", categoryId: "no" },
              { id: "t8", label: "Garden tool", emoji: "🪴", categoryId: "yes" },
            ],
            checkLabel: "Check answer",
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Где держать эти растения?",
            question:
              "Фиалка и хлорофитум — комнатные растения. Где их лучше держать?",
            items: [
              { emoji: "🌸", label: "фиалка" },
              { emoji: "🌿", label: "хлорофитум" },
            ],
            answer:
              "В тёплом и светлом месте, на подоконнике, но не под прямыми лучами солнца. Поливать регулярно мягкой водой.",
            buttonLabel: "Показать ответ",
          },
          kz: {
            title: "Бұл өсімдіктерді қайда ұстау керек?",
            question:
              "Қызғалдақ пен хлорофитум — бөлме өсімдіктері. Оларды қайда ұстаған дұрыс?",
            items: [
              { emoji: "🌸", label: "қызғалдақ" },
              { emoji: "🌿", label: "хлорофитум" },
            ],
            answer:
              "Жылы әрі жарық жерде, терезе алдында, бірақ күннің тура сәулесінен алыс. Жұмсақ сумен үнемі суару керек.",
            buttonLabel: "Жауапты көрсету",
          },
          en: {
            title: "Where should we keep them?",
            question:
              "Violet and spider plant are houseplants. Where is it best to keep them?",
            items: [
              { emoji: "🌸", label: "violet" },
              { emoji: "🌿", label: "spider plant" },
            ],
            answer:
              "In a warm and bright place, on a windowsill, but away from direct sunlight. Water regularly with soft water.",
            buttonLabel: "Show answer",
          },
        },
      },
      {
        type: "fact",
        data: {
          ru: {
            title: "Найди в энциклопедии",
            text:
              "Узнай, какие культурные растения выращивают в твоём регионе. Запиши 3 примера.",
            keywords: ["энциклопедия", "регион", "культурные"],
            icon: "sparkles",
          },
          kz: {
            title: "Энциклопедиядан тап",
            text:
              "Сенің өңіріңде қандай мәдени өсімдіктер өсіріледі? 3 мысал жаз.",
            keywords: ["энциклопедия", "өңір", "мәдени"],
            icon: "sparkles",
          },
          en: {
            title: "Find in the encyclopedia",
            text:
              "Find out what cultivated plants are grown in your region. Write down 3 examples.",
            keywords: ["encyclopedia", "region", "cultivated"],
            icon: "sparkles",
          },
        },
      },
    ],

    // ──────────────────────────────────────────────────────────────────────
    // 4. Итоги — что я узнал + вопросы
    // ──────────────────────────────────────────────────────────────────────
    experiments: [
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "Растения бывают **дикорастущие** и **культурные**. Человек использует их для **еды**, **лекарств** и **красоты**.",
            terms: ["дикорастущие", "культурные", "еды", "лекарств", "красоты"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "Өсімдіктер **жабайы** және **мәдени** болып бөлінеді. Адам оларды **тамаққа**, **дәріге** және **әсемдікке** пайдаланады.",
            terms: ["жабайы", "мәдени", "тамаққа", "дәріге", "әсемдікке"],
          },
          en: {
            title: "What I learned",
            text:
              "Plants can be **wild** or **cultivated**. People use them for **food**, **medicine** and **beauty**.",
            terms: ["wild", "cultivated", "food", "medicine", "beauty"],
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Уход за комнатными",
            text:
              "Комнатным растениям нужны **полив**, **тепло** и **свет** — без этого они погибнут.",
            terms: ["полив", "тепло", "свет"],
          },
          kz: {
            title: "Бөлме өсімдіктеріне күтім",
            text:
              "Бөлме өсімдіктеріне **суару**, **жылу** және **жарық** қажет — оларсыз олар өледі.",
            terms: ["суару", "жылу", "жарық"],
          },
          en: {
            title: "Houseplant care",
            text:
              "Houseplants need **watering**, **warmth** and **light** — without them they will die.",
            terms: ["watering", "warmth", "light"],
          },
        },
      },
      {
        type: "action",
        data: {
          ru: {
            title: "Проблемный вопрос",
            prompt:
              "Как ты думаешь, что произойдёт, если не ухаживать за культурными растениями?",
            placeholder: "Подумай и напиши свой ответ...",
            multiline: true,
          },
          kz: {
            title: "Проблемалық сұрақ",
            prompt:
              "Қалай ойлайсың, мәдени өсімдіктерді күтпесе не болады?",
            placeholder: "Ойлан да жауабыңды жаз...",
            multiline: true,
          },
          en: {
            title: "Problem question",
            prompt:
              "What do you think will happen if cultivated plants are not cared for?",
            placeholder: "Think and write your answer...",
            multiline: true,
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Итоговые вопросы",
            text:
              "1) Чем **дикорастущие** растения отличаются от **культурных**? 2) Зачем человек выращивает культурные растения? 3) Что нужно комнатным растениям для жизни?",
          },
          kz: {
            title: "Қорытынды сұрақтар",
            text:
              "1) **Жабайы** өсімдіктердің **мәдени** өсімдіктерден қандай айырмашылығы бар? 2) Адам мәдени өсімдіктерді не үшін өсіреді? 3) Бөлме өсімдіктеріне өмір сүруге не керек?",
          },
          en: {
            title: "Wrap-up questions",
            text:
              "1) How do **wild** plants differ from **cultivated** ones? 2) Why do people grow cultivated plants? 3) What do houseplants need to live?",
          },
        },
      },
    ],
  },
};
