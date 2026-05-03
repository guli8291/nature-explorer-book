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
            template: "На первом фото растения ___, а на втором — ___.",
            hints: ["дикорастущие", "культурные"],
          },
          kz: {
            title: "Екі көріністі салыстыр",
            template: "Бірінші суретте өсімдіктер ___, ал екіншісінде — ___.",
            hints: ["жабайы", "мәдени"],
          },
          en: {
            title: "Compare two landscapes",
            template: "In the first photo the plants are ___, in the second — ___.",
            hints: ["wild", "cultivated"],
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

  // ════════════════════════════════════════════════════════════════════════
  // УРОК 6. Растения и животные. Чем похожи и чем отличаются.
  // ════════════════════════════════════════════════════════════════════════
  6: {
    intro: [
      {
        type: "audio",
        data: {
          ru: {
            title: "Аудио-гид к уроку",
            text:
              "Сегодня мы узнаем, чем растения и животные похожи и чем отличаются. Это поможет нам лучше понимать живую природу.",
            caption: "Послушай вступление к уроку",
            durationLabel: "0:48",
          },
          kz: {
            title: "Сабақтың аудио-гиді",
            text:
              "Бүгін біз өсімдіктер мен жануарлардың қандай ұқсастықтары мен айырмашылықтары бар екенін білеміз.",
            caption: "Сабақтың кіріспесін тыңда",
            durationLabel: "0:48",
          },
          en: {
            title: "Lesson audio guide",
            text:
              "Today we'll learn how plants and animals are alike and how they differ. This helps us understand living nature better.",
            caption: "Listen to the lesson intro",
            durationLabel: "0:48",
          },
        },
      },
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Ключевые слова",
            title: "Живые организмы",
            slides: [
              { emoji: "🐶", caption: "Животное / Жануар / Animal" },
              { emoji: "🌳", caption: "Растение / Өсімдік / Plant" },
              { emoji: "💨", caption: "Дышит / Тыныс алады / Breathes" },
              { emoji: "🍽️", caption: "Питается / Қоректенеді / Eats" },
            ],
          },
          kz: {
            groupLabel: "Кілт сөздер",
            title: "Тірі ағзалар",
            slides: [
              { emoji: "🐶", caption: "Жануар / Животное / Animal" },
              { emoji: "🌳", caption: "Өсімдік / Растение / Plant" },
              { emoji: "💨", caption: "Тыныс алады / Дышит / Breathes" },
              { emoji: "🍽️", caption: "Қоректенеді / Питается / Eats" },
            ],
          },
          en: {
            groupLabel: "Key words",
            title: "Living organisms",
            slides: [
              { emoji: "🐶", caption: "Animal / Животное / Жануар" },
              { emoji: "🌳", caption: "Plant / Растение / Өсімдік" },
              { emoji: "💨", caption: "Breathes / Дышит / Тыныс алады" },
              { emoji: "🍽️", caption: "Eats / Питается / Қоректенеді" },
            ],
          },
        },
      },
    ],

    // Растения и животные — живые организмы
    scientists: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Как растёт собака",
            slides: [
              { emoji: "🐶", caption: "1 месяц — маленький щенок." },
              { emoji: "🐕", caption: "3 месяца — играет и быстро учится." },
              { emoji: "🐕", caption: "6 месяцев — почти взрослый." },
              { emoji: "🦮", caption: "1 год — взрослая собака." },
              { emoji: "🦮", caption: "3 года — сильная и умная." },
              { emoji: "🐕‍🦺", caption: "5 лет — настоящий друг человека." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Ит қалай өседі",
            slides: [
              { emoji: "🐶", caption: "1 ай — кішкентай күшік." },
              { emoji: "🐕", caption: "3 ай — ойнайды және тез үйренеді." },
              { emoji: "🐕", caption: "6 ай — дерлік ересек." },
              { emoji: "🦮", caption: "1 жас — ересек ит." },
              { emoji: "🦮", caption: "3 жас — күшті де ақылды." },
              { emoji: "🐕‍🦺", caption: "5 жас — адамның нағыз досы." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "How a dog grows",
            slides: [
              { emoji: "🐶", caption: "1 month — a tiny puppy." },
              { emoji: "🐕", caption: "3 months — plays and learns fast." },
              { emoji: "🐕", caption: "6 months — almost grown up." },
              { emoji: "🦮", caption: "1 year — adult dog." },
              { emoji: "🦮", caption: "3 years — strong and clever." },
              { emoji: "🐕‍🦺", caption: "5 years — a true friend of people." },
            ],
          },
        },
      },
      {
        type: "fact",
        data: {
          ru: {
            title: "Что нужно всему живому",
            text:
              "Всем живым существам нужны пища, вода, воздух и тепло — без этого они не могут жить и расти.",
            keywords: ["пища", "вода", "воздух", "тепло"],
            icon: "bulb",
          },
          kz: {
            title: "Барлық тіршілік иесіне не керек",
            text:
              "Барлық тірі ағзаларға тамақ, су, ауа және жылу қажет — оларсыз олар өмір сүре алмайды.",
            keywords: ["тамақ", "су", "ауа", "жылу"],
            icon: "bulb",
          },
          en: {
            title: "What all living things need",
            text:
              "All living things need food, water, air and warmth — without them they cannot live or grow.",
            keywords: ["food", "water", "air", "warmth"],
            icon: "bulb",
          },
        },
      },
      {
        type: "action",
        data: {
          ru: {
            title: "Подумай и запиши",
            prompt:
              "Что общего у щенка, цветка и тебя? Назови хотя бы 3 признака живого.",
            placeholder: "Например: дышим, питаемся, растём...",
            multiline: true,
          },
          kz: {
            title: "Ойлан да жаз",
            prompt:
              "Күшік, гүл және сенің араңда не ортақ? Тіршіліктің кемінде 3 белгісін ата.",
            placeholder: "Мысалы: тыныс аламыз, қоректенеміз, өсеміз...",
            multiline: true,
          },
          en: {
            title: "Think and write",
            prompt:
              "What do a puppy, a flower and you have in common? Name at least 3 signs of living things.",
            placeholder: "For example: we breathe, eat, grow...",
            multiline: true,
          },
        },
      },
    ],

    // Чем похожи и чем отличаются
    observation: [
      {
        type: "summary",
        data: {
          ru: {
            title: "Чем похожи живые организмы",
            text:
              "И растения, и животные **дышат**, **питаются**, **растут**, **размножаются** и **умирают** — это признаки всего живого.",
            terms: ["дышат", "питаются", "растут", "размножаются", "умирают"],
          },
          kz: {
            title: "Тірі ағзалардың ұқсастығы",
            text:
              "Өсімдіктер де, жануарлар да **тыныс алады**, **қоректенеді**, **өседі**, **көбейеді** және **өледі** — бұл барлық тіршілік белгілері.",
            terms: ["тыныс алады", "қоректенеді", "өседі", "көбейеді", "өледі"],
          },
          en: {
            title: "How living things are alike",
            text:
              "Both plants and animals **breathe**, **eat**, **grow**, **reproduce** and **die** — these are the signs of all living things.",
            terms: ["breathe", "eat", "grow", "reproduce", "die"],
          },
        },
      },
      {
        type: "sort",
        data: {
          ru: {
            title: "Работа в парах: кто это?",
            instruction:
              "Распредели животных по группам: дикие или домашние.",
            categories: [
              { id: "wild", label: "Дикие", emoji: "🌳" },
              { id: "dom", label: "Домашние", emoji: "🏠" },
            ],
            items: [
              { id: "a1", label: "лошадь", emoji: "🐴", categoryId: "dom" },
              { id: "a2", label: "черепаха", emoji: "🐢", categoryId: "wild" },
              { id: "a3", label: "ёж", emoji: "🦔", categoryId: "wild" },
              { id: "a4", label: "корова", emoji: "🐄", categoryId: "dom" },
              { id: "a5", label: "попугай ара", emoji: "🦜", categoryId: "wild" },
              { id: "a6", label: "кошка", emoji: "🐱", categoryId: "dom" },
            ],
            checkLabel: "Проверить",
          },
          kz: {
            title: "Жұппен жұмыс: кім бұл?",
            instruction:
              "Жануарларды топтарға бөл: жабайы ма, үй жануары ма.",
            categories: [
              { id: "wild", label: "Жабайы", emoji: "🌳" },
              { id: "dom", label: "Үй", emoji: "🏠" },
            ],
            items: [
              { id: "a1", label: "жылқы", emoji: "🐴", categoryId: "dom" },
              { id: "a2", label: "тасбақа", emoji: "🐢", categoryId: "wild" },
              { id: "a3", label: "кірпі", emoji: "🦔", categoryId: "wild" },
              { id: "a4", label: "сиыр", emoji: "🐄", categoryId: "dom" },
              { id: "a5", label: "ара тотықұс", emoji: "🦜", categoryId: "wild" },
              { id: "a6", label: "мысық", emoji: "🐱", categoryId: "dom" },
            ],
            checkLabel: "Тексеру",
          },
          en: {
            title: "Pair work: who is it?",
            instruction:
              "Sort the animals into groups: wild or domestic.",
            categories: [
              { id: "wild", label: "Wild", emoji: "🌳" },
              { id: "dom", label: "Domestic", emoji: "🏠" },
            ],
            items: [
              { id: "a1", label: "horse", emoji: "🐴", categoryId: "dom" },
              { id: "a2", label: "turtle", emoji: "🐢", categoryId: "wild" },
              { id: "a3", label: "hedgehog", emoji: "🦔", categoryId: "wild" },
              { id: "a4", label: "cow", emoji: "🐄", categoryId: "dom" },
              { id: "a5", label: "macaw parrot", emoji: "🦜", categoryId: "wild" },
              { id: "a6", label: "cat", emoji: "🐱", categoryId: "dom" },
            ],
            checkLabel: "Check",
          },
        },
      },
      {
        type: "fact",
        data: {
          ru: {
            title: "Проведи исследование",
            text:
              "1) Выбери одно животное во дворе. 2) Понаблюдай за ним 5 минут. 3) Запиши: что оно делает, чем питается, как двигается.",
            keywords: ["наблюдение", "исследование"],
            icon: "sparkles",
          },
          kz: {
            title: "Зерттеу жүргіз",
            text:
              "1) Аулаңнан бір жануар таңда. 2) Оны 5 минут бақыла. 3) Жаз: ол не істейді, немен қоректенеді, қалай қозғалады.",
            keywords: ["бақылау", "зерттеу"],
            icon: "sparkles",
          },
          en: {
            title: "Run a study",
            text:
              "1) Pick one animal in the yard. 2) Watch it for 5 minutes. 3) Write down what it does, what it eats and how it moves.",
            keywords: ["observation", "research"],
            icon: "sparkles",
          },
        },
      },
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Движение и питание",
            title: "Как двигаются и питаются животные",
            slides: [
              { emoji: "🐎", caption: "Лошадь пасётся на лугу — щиплет траву." },
              { emoji: "🐿️", caption: "Белка ест орех, который сама нашла." },
              { emoji: "🐿️", caption: "Белка прыгает по веткам — ищет еду." },
            ],
          },
          kz: {
            groupLabel: "Қозғалыс пен қоректену",
            title: "Жануарлар қалай қозғалады",
            slides: [
              { emoji: "🐎", caption: "Жылқы шалғында жайылады — шөп жейді." },
              { emoji: "🐿️", caption: "Тиін өзі тапқан жаңғақты жейді." },
              { emoji: "🐿️", caption: "Тиін бұтақтарда секіреді — тамақ іздейді." },
            ],
          },
          en: {
            groupLabel: "Movement and feeding",
            title: "How animals move and eat",
            slides: [
              { emoji: "🐎", caption: "A horse grazes on a meadow — eats grass." },
              { emoji: "🐿️", caption: "A squirrel eats a nut it found." },
              { emoji: "🐿️", caption: "A squirrel jumps on branches — looking for food." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Найди отличия",
            question:
              "Гепард бежит за добычей, а суслик прячется в норе. Как это им помогает?",
            items: [
              { emoji: "🐆", label: "гепард" },
              { emoji: "🐹", label: "суслик" },
            ],
            answer:
              "Гепард — самый быстрый, он догоняет добычу. Суслик быстро прячется в нору, чтобы спастись от хищников.",
            buttonLabel: "Показать ответ",
          },
          kz: {
            title: "Айырмашылықты тап",
            question:
              "Гепард олжасының соңынан жүгіреді, ал суыр ініне тығылады. Бұл оларға қалай көмектеседі?",
            items: [
              { emoji: "🐆", label: "гепард" },
              { emoji: "🐹", label: "суыр" },
            ],
            answer:
              "Гепард — ең жылдам, олжасын қуып жетеді. Суыр жыртқыштардан қорғану үшін тез ініне тығылады.",
            buttonLabel: "Жауапты көрсету",
          },
          en: {
            title: "Find the differences",
            question:
              "A cheetah chases its prey, a gopher hides in a burrow. How does it help them?",
            items: [
              { emoji: "🐆", label: "cheetah" },
              { emoji: "🐹", label: "gopher" },
            ],
            answer:
              "The cheetah is the fastest and catches its prey. The gopher quickly hides in its burrow to escape predators.",
            buttonLabel: "Show answer",
          },
        },
      },
    ],

    // Итоги
    experiments: [
      {
        type: "fact",
        data: {
          ru: {
            title: "4 октября — Всемирный день защиты животных",
            text:
              "В этот день люди по всему миру напоминают, что животных нужно беречь и относиться к ним с заботой.",
            keywords: ["защита", "природа", "забота"],
            icon: "sparkles",
          },
          kz: {
            title: "4 қазан — Дүниежүзілік жануарларды қорғау күні",
            text:
              "Бұл күні әлем халқы жануарларды қорғау және оларға қамқорлықпен қарау керектігін еске салады.",
            keywords: ["қорғау", "табиғат", "қамқорлық"],
            icon: "sparkles",
          },
          en: {
            title: "October 4 — World Animal Day",
            text:
              "On this day people around the world remind us to protect animals and treat them with care.",
            keywords: ["protection", "nature", "care"],
            icon: "sparkles",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Чем отличаются растения и животные",
            text:
              "Растения **сами** создают питательные вещества из света и воды. Животные **поедают** готовую пищу — растения или других животных.",
            terms: ["сами", "поедают"],
          },
          kz: {
            title: "Өсімдіктер мен жануарлардың айырмашылығы",
            text:
              "Өсімдіктер қоректік заттарды күн мен судан **өздері** жасайды. Жануарлар дайын тағамды — өсімдіктерді немесе басқа жануарларды **жейді**.",
            terms: ["өздері", "жейді"],
          },
          en: {
            title: "How plants and animals differ",
            text:
              "Plants **make** nutrients themselves from light and water. Animals **eat** ready food — plants or other animals.",
            terms: ["make", "eat"],
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Итоговые вопросы",
            text:
              "1) Чем растения и животные **похожи**? 2) Чем они **отличаются**? 3) Как растения и животные получают **пищу**?",
          },
          kz: {
            title: "Қорытынды сұрақтар",
            text:
              "1) Өсімдіктер мен жануарлардың қандай **ұқсастықтары** бар? 2) Олардың **айырмашылықтары** қандай? 3) Олар **тамақты** қалай алады?",
          },
          en: {
            title: "Wrap-up questions",
            text:
              "1) How are plants and animals **alike**? 2) How do they **differ**? 3) How do plants and animals get their **food**?",
          },
        },
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════
  // УРОК 7. Какие бывают животные. Дикие и домашние.
  // ════════════════════════════════════════════════════════════════════════
  7: {
    intro: [
      {
        type: "audio",
        data: {
          ru: {
            title: "Аудио-гид к уроку",
            text:
              "Сегодня мы узнаем, что животные бывают дикими и домашними, и в чём их главное отличие.",
            caption: "Послушай вступление к уроку",
            durationLabel: "0:22",
          },
          kz: {
            title: "Сабақтың аудио-гиді",
            text:
              "Бүгін біз жануарлардың жабайы және үй жануарлары болып бөлінетінін, олардың айырмашылығы неде екенін білеміз.",
            caption: "Сабақтың кіріспесін тыңда",
            durationLabel: "0:22",
          },
          en: {
            title: "Lesson audio guide",
            text:
              "Today we'll learn that animals can be wild or domestic, and what is the main difference between them.",
            caption: "Listen to the lesson intro",
            durationLabel: "0:22",
          },
        },
      },
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Ключевые слова",
            title: "Дикие и домашние",
            slides: [
              { emoji: "🏠", caption: "Домашние животные / Үй жануарлары / Domestic animals" },
              { emoji: "🌲", caption: "Дикие животные / Жабайы жануарлар / Wild animals" },
              { emoji: "🌍", caption: "Среда обитания / Мекен орта / Habitat" },
            ],
          },
          kz: {
            groupLabel: "Кілт сөздер",
            title: "Жабайы және үй",
            slides: [
              { emoji: "🏠", caption: "Үй жануарлары / Домашние / Domestic animals" },
              { emoji: "🌲", caption: "Жабайы жануарлар / Дикие / Wild animals" },
              { emoji: "🌍", caption: "Мекен орта / Среда обитания / Habitat" },
            ],
          },
          en: {
            groupLabel: "Key words",
            title: "Wild and domestic",
            slides: [
              { emoji: "🏠", caption: "Domestic animals / Домашние / Үй жануарлары" },
              { emoji: "🌲", caption: "Wild animals / Дикие / Жабайы жануарлар" },
              { emoji: "🌍", caption: "Habitat / Среда обитания / Мекен орта" },
            ],
          },
        },
      },
    ],

    // Домашние животные
    scientists: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Домашние животные",
            slides: [
              { emoji: "🐕", caption: "Собаки живут рядом с людьми — охраняют дом." },
              { emoji: "🐄", caption: "Корова на пастбище даёт молоко." },
              { emoji: "🐐", caption: "Коза у забора — даёт молоко и шерсть." },
              { emoji: "🐎", caption: "Лошадь с жеребёнком — помогает человеку." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Үй жануарлары",
            slides: [
              { emoji: "🐕", caption: "Иттер адаммен бірге тұрып, үйді күзетеді." },
              { emoji: "🐄", caption: "Жайылымдағы сиыр сүт береді." },
              { emoji: "🐐", caption: "Қоршау жанындағы ешкі — сүт пен жүн береді." },
              { emoji: "🐎", caption: "Жылқы құлынымен — адамға көмектеседі." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Domestic animals",
            slides: [
              { emoji: "🐕", caption: "Dogs live with people — they guard the house." },
              { emoji: "🐄", caption: "A cow on the pasture gives milk." },
              { emoji: "🐐", caption: "A goat by the fence gives milk and wool." },
              { emoji: "🐎", caption: "A mare with her foal — helps people." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Проверь себя",
            question:
              "Кто из этих животных — домашний? Подумай и проверь ответ.",
            items: [
              { emoji: "🐕", label: "собака" },
              { emoji: "🐄", label: "корова" },
              { emoji: "🐐", label: "коза" },
            ],
            answer:
              "Все трое — домашние животные. Они живут рядом с человеком, приносят пользу, а человек заботится о них.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Өзіңді тексер",
            question:
              "Бұлардың қайсысы үй жануары? Ойлан да жауапты тексер.",
            items: [
              { emoji: "🐕", label: "ит" },
              { emoji: "🐄", label: "сиыр" },
              { emoji: "🐐", label: "ешкі" },
            ],
            answer:
              "Үшеуі де үй жануарлары. Олар адамның жанында тұрады, пайда әкеледі, адам оларды күтеді.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Check yourself",
            question:
              "Which of these are domestic animals? Think, then check.",
            items: [
              { emoji: "🐕", label: "dog" },
              { emoji: "🐄", label: "cow" },
              { emoji: "🐐", label: "goat" },
            ],
            answer:
              "All three are domestic animals. They live near people, are useful, and people take care of them.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Домашние** животные живут рядом с человеком, приносят **пользу**, а человек **заботится** о них.",
            terms: ["домашние", "пользу", "заботится"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Үй** жануарлары адамның жанында тұрады, **пайда** әкеледі, адам олар туралы **қамқорлық** жасайды.",
            terms: ["үй", "пайда", "қамқорлық"],
          },
          en: {
            title: "What I learned",
            text:
              "**Domestic** animals live near people, bring **benefit**, and people **take care** of them.",
            terms: ["domestic", "benefit", "take care"],
          },
        },
      },
    ],

    // Дикие животные
    observation: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Дикие животные",
            slides: [
              { emoji: "🐘", caption: "Слон живёт в жарких странах." },
              { emoji: "🦧", caption: "Орангутан живёт в тропических лесах." },
              { emoji: "🦅", caption: "Беркут парит над горами." },
              { emoji: "🦌", caption: "Сайгак бегает по степям Казахстана." },
              { emoji: "🐱", caption: "Рысь живёт в густых лесах." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Жабайы жануарлар",
            slides: [
              { emoji: "🐘", caption: "Піл ыстық елдерде тұрады." },
              { emoji: "🦧", caption: "Орангутан тропиктік ормандарда тұрады." },
              { emoji: "🦅", caption: "Бүркіт таулардың үстінде қалықтайды." },
              { emoji: "🦌", caption: "Киік Қазақстан даласында жүгіреді." },
              { emoji: "🐱", caption: "Сілеусін қалың орманда тұрады." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Wild animals",
            slides: [
              { emoji: "🐘", caption: "An elephant lives in hot countries." },
              { emoji: "🦧", caption: "An orangutan lives in tropical forests." },
              { emoji: "🦅", caption: "A golden eagle soars above the mountains." },
              { emoji: "🦌", caption: "A saiga runs across the steppes of Kazakhstan." },
              { emoji: "🐱", caption: "A lynx lives in dense forests." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Где они обитают?",
            question:
              "К какой группе относятся эти животные? Где они обитают?",
            items: [
              { emoji: "🐘", label: "слон" },
              { emoji: "🦅", label: "беркут" },
              { emoji: "🦌", label: "сайгак" },
            ],
            answer:
              "Все они — дикие животные. Слон живёт в саваннах, беркут — в горах, сайгак — в степях. Они сами добывают пищу.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Олар қайда тұрады?",
            question:
              "Бұл жануарлар қай топқа жатады? Олар қайда тұрады?",
            items: [
              { emoji: "🐘", label: "піл" },
              { emoji: "🦅", label: "бүркіт" },
              { emoji: "🦌", label: "киік" },
            ],
            answer:
              "Олардың барлығы — жабайы жануарлар. Піл саваннада, бүркіт тауда, киік далада тұрады. Олар тамағын өздері табады.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Where do they live?",
            question:
              "What group do these animals belong to? Where do they live?",
            items: [
              { emoji: "🐘", label: "elephant" },
              { emoji: "🦅", label: "eagle" },
              { emoji: "🦌", label: "saiga" },
            ],
            answer:
              "They are all wild animals. The elephant lives in savannas, the eagle in the mountains, the saiga in the steppes. They find food on their own.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Дикие** животные живут в **лесах**, **степях** и **горах**. Они сами добывают пищу и находят жильё.",
            terms: ["дикие", "лесах", "степях", "горах"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Жабайы** жануарлар **ормандарда**, **далада** және **тауларда** тұрады. Олар тамағын өздері табады, паналайтын жерін өздері іздейді.",
            terms: ["жабайы", "ормандарда", "далада", "тауларда"],
          },
          en: {
            title: "What I learned",
            text:
              "**Wild** animals live in **forests**, **steppes** and **mountains**. They find food and shelter on their own.",
            terms: ["wild", "forests", "steppes", "mountains"],
          },
        },
      },
      {
        type: "sort",
        data: {
          ru: {
            title: "Где обитают эти животные?",
            instruction:
              "Распредели животных по среде обитания.",
            categories: [
              { id: "land", label: "На земле / в лесу", emoji: "🌳" },
              { id: "water", label: "В воде", emoji: "🌊" },
              { id: "mount", label: "В горах", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "корова", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "заяц", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "лиса", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "архар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Проверить",
          },
          kz: {
            title: "Бұл жануарлар қайда тұрады?",
            instruction:
              "Жануарларды мекен ортасы бойынша бөл.",
            categories: [
              { id: "land", label: "Жерде / орманда", emoji: "🌳" },
              { id: "water", label: "Суда", emoji: "🌊" },
              { id: "mount", label: "Тауда", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "сиыр", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "қоян", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "түлкі", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "арқар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Тексеру",
          },
          en: {
            title: "Where do these animals live?",
            instruction:
              "Sort the animals by their habitat.",
            categories: [
              { id: "land", label: "On land / in forest", emoji: "🌳" },
              { id: "water", label: "In water", emoji: "🌊" },
              { id: "mount", label: "In mountains", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "cow", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "hare", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "fox", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "dolphin", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "argali", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Check",
          },
        },
      },
    ],

    // Итоги
    experiments: [
      {
        type: "fact",
        data: {
          ru: {
            title: "Найди в энциклопедии",
            text:
              "Узнай, какие редкие дикие животные живут в Казахстане. Запиши 3 примера и где они обитают.",
            keywords: ["энциклопедия", "Казахстан", "редкие"],
            icon: "sparkles",
          },
          kz: {
            title: "Энциклопедиядан тап",
            text:
              "Қазақстанда қандай сирек кездесетін жабайы жануарлар бар? 3 мысал жазып, қайда тұратынын көрсет.",
            keywords: ["энциклопедия", "Қазақстан", "сирек"],
            icon: "sparkles",
          },
          en: {
            title: "Find in the encyclopedia",
            text:
              "Find out which rare wild animals live in Kazakhstan. Write down 3 examples and where they live.",
            keywords: ["encyclopedia", "Kazakhstan", "rare"],
            icon: "sparkles",
          },
        },
      },
      {
        type: "fact",
        data: {
          ru: {
            title: "Это интересно!",
            text:
              "У молодых пингвинов хвост похож на белый мех. Это помогает их мамам быстро находить своих птенцов в большой стае.",
            keywords: ["пингвины", "хвост", "мех"],
            icon: "bulb",
          },
          kz: {
            title: "Бұл қызық!",
            text:
              "Жас пингвиндердің құйрығы ақ жүнге ұқсайды. Бұл аналарына үлкен топтан өз балапандарын тез табуға көмектеседі.",
            keywords: ["пингвин", "құйрық", "жүн"],
            icon: "bulb",
          },
          en: {
            title: "Did you know?",
            text:
              "Young penguins have tails that look like white fur. It helps their mothers quickly find their chicks in a large flock.",
            keywords: ["penguins", "tail", "fur"],
            icon: "bulb",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Итоговые вопросы",
            text:
              "1) Чем **дикие** животные отличаются от **домашних**? 2) Почему человек должен **заботиться** о домашних животных?",
          },
          kz: {
            title: "Қорытынды сұрақтар",
            text:
              "1) **Жабайы** жануарлар **үй** жануарларынан немен ерекшеленеді? 2) Адам үй жануарларына неліктен **қамқорлық** жасауы керек?",
          },
          en: {
            title: "Wrap-up questions",
            text:
              "1) How do **wild** animals differ from **domestic** ones? 2) Why should people **take care** of domestic animals?",
          },
        },
      },
    ],
  },

  8: {
    intro: [
      {
        type: "audio",
        data: {
          ru: {
            title: "Аудио-гид к уроку",
            text:
              "Сегодня мы узнаем, что животные бывают дикими и домашними, и в чём их главное отличие.",
            caption: "Послушай вступление к уроку",
            durationLabel: "0:22",
          },
          kz: {
            title: "Сабақтың аудио-гиді",
            text:
              "Бүгін біз жануарлардың жабайы және үй жануарлары болып бөлінетінін, олардың айырмашылығы неде екенін білеміз.",
            caption: "Сабақтың кіріспесін тыңда",
            durationLabel: "0:22",
          },
          en: {
            title: "Lesson audio guide",
            text:
              "Today we'll learn that animals can be wild or domestic, and what is the main difference between them.",
            caption: "Listen to the lesson intro",
            durationLabel: "0:22",
          },
        },
      },
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Ключевые слова",
            title: "Дикие и домашние",
            slides: [
              { emoji: "🏠", caption: "Домашние животные / Үй жануарлары / Domestic animals" },
              { emoji: "🌲", caption: "Дикие животные / Жабайы жануарлар / Wild animals" },
              { emoji: "🌍", caption: "Среда обитания / Мекен орта / Habitat" },
            ],
          },
          kz: {
            groupLabel: "Кілт сөздер",
            title: "Жабайы және үй",
            slides: [
              { emoji: "🏠", caption: "Үй жануарлары / Домашние / Domestic animals" },
              { emoji: "🌲", caption: "Жабайы жануарлар / Дикие / Wild animals" },
              { emoji: "🌍", caption: "Мекен орта / Среда обитания / Habitat" },
            ],
          },
          en: {
            groupLabel: "Key words",
            title: "Wild and domestic",
            slides: [
              { emoji: "🏠", caption: "Domestic animals / Домашние / Үй жануарлары" },
              { emoji: "🌲", caption: "Wild animals / Дикие / Жабайы жануарлар" },
              { emoji: "🌍", caption: "Habitat / Среда обитания / Мекен орта" },
            ],
          },
        },
      },
    ],

    // Домашние животные
    scientists: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Домашние животные",
            slides: [
              { emoji: "🐕", caption: "Собаки живут рядом с людьми — охраняют дом." },
              { emoji: "🐄", caption: "Корова на пастбище даёт молоко." },
              { emoji: "🐐", caption: "Коза у забора — даёт молоко и шерсть." },
              { emoji: "🐎", caption: "Лошадь с жеребёнком — помогает человеку." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Үй жануарлары",
            slides: [
              { emoji: "🐕", caption: "Иттер адаммен бірге тұрып, үйді күзетеді." },
              { emoji: "🐄", caption: "Жайылымдағы сиыр сүт береді." },
              { emoji: "🐐", caption: "Қоршау жанындағы ешкі — сүт пен жүн береді." },
              { emoji: "🐎", caption: "Жылқы құлынымен — адамға көмектеседі." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Domestic animals",
            slides: [
              { emoji: "🐕", caption: "Dogs live with people — they guard the house." },
              { emoji: "🐄", caption: "A cow on the pasture gives milk." },
              { emoji: "🐐", caption: "A goat by the fence gives milk and wool." },
              { emoji: "🐎", caption: "A mare with her foal — helps people." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Проверь себя",
            question:
              "Кто из этих животных — домашний? Подумай и проверь ответ.",
            items: [
              { emoji: "🐕", label: "собака" },
              { emoji: "🐄", label: "корова" },
              { emoji: "🐐", label: "коза" },
            ],
            answer:
              "Все трое — домашние животные. Они живут рядом с человеком, приносят пользу, а человек заботится о них.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Өзіңді тексер",
            question:
              "Бұлардың қайсысы үй жануары? Ойлан да жауапты тексер.",
            items: [
              { emoji: "🐕", label: "ит" },
              { emoji: "🐄", label: "сиыр" },
              { emoji: "🐐", label: "ешкі" },
            ],
            answer:
              "Үшеуі де үй жануарлары. Олар адамның жанында тұрады, пайда әкеледі, адам оларды күтеді.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Check yourself",
            question:
              "Which of these are domestic animals? Think, then check.",
            items: [
              { emoji: "🐕", label: "dog" },
              { emoji: "🐄", label: "cow" },
              { emoji: "🐐", label: "goat" },
            ],
            answer:
              "All three are domestic animals. They live near people, are useful, and people take care of them.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Домашние** животные живут рядом с человеком, приносят **пользу**, а человек **заботится** о них.",
            terms: ["домашние", "пользу", "заботится"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Үй** жануарлары адамның жанында тұрады, **пайда** әкеледі, адам олар туралы **қамқорлық** жасайды.",
            terms: ["үй", "пайда", "қамқорлық"],
          },
          en: {
            title: "What I learned",
            text:
              "**Domestic** animals live near people, bring **benefit**, and people **take care** of them.",
            terms: ["domestic", "benefit", "take care"],
          },
        },
      },
    ],

    // Дикие животные
    observation: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Дикие животные",
            slides: [
              { emoji: "🐘", caption: "Слон живёт в жарких странах." },
              { emoji: "🦧", caption: "Орангутан живёт в тропических лесах." },
              { emoji: "🦅", caption: "Беркут парит над горами." },
              { emoji: "🦌", caption: "Сайгак бегает по степям Казахстана." },
              { emoji: "🐱", caption: "Рысь живёт в густых лесах." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Жабайы жануарлар",
            slides: [
              { emoji: "🐘", caption: "Піл ыстық елдерде тұрады." },
              { emoji: "🦧", caption: "Орангутан тропиктік ормандарда тұрады." },
              { emoji: "🦅", caption: "Бүркіт таулардың үстінде қалықтайды." },
              { emoji: "🦌", caption: "Киік Қазақстан даласында жүгіреді." },
              { emoji: "🐱", caption: "Сілеусін қалың орманда тұрады." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Wild animals",
            slides: [
              { emoji: "🐘", caption: "An elephant lives in hot countries." },
              { emoji: "🦧", caption: "An orangutan lives in tropical forests." },
              { emoji: "🦅", caption: "A golden eagle soars above the mountains." },
              { emoji: "🦌", caption: "A saiga runs across the steppes of Kazakhstan." },
              { emoji: "🐱", caption: "A lynx lives in dense forests." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Где они обитают?",
            question:
              "К какой группе относятся эти животные? Где они обитают?",
            items: [
              { emoji: "🐘", label: "слон" },
              { emoji: "🦅", label: "беркут" },
              { emoji: "🦌", label: "сайгак" },
            ],
            answer:
              "Все они — дикие животные. Слон живёт в саваннах, беркут — в горах, сайгак — в степях. Они сами добывают пищу.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Олар қайда тұрады?",
            question:
              "Бұл жануарлар қай топқа жатады? Олар қайда тұрады?",
            items: [
              { emoji: "🐘", label: "піл" },
              { emoji: "🦅", label: "бүркіт" },
              { emoji: "🦌", label: "киік" },
            ],
            answer:
              "Олардың барлығы — жабайы жануарлар. Піл саваннада, бүркіт тауда, киік далада тұрады. Олар тамағын өздері табады.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Where do they live?",
            question:
              "What group do these animals belong to? Where do they live?",
            items: [
              { emoji: "🐘", label: "elephant" },
              { emoji: "🦅", label: "eagle" },
              { emoji: "🦌", label: "saiga" },
            ],
            answer:
              "They are all wild animals. The elephant lives in savannas, the eagle in the mountains, the saiga in the steppes. They find food on their own.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Дикие** животные живут в **лесах**, **степях** и **горах**. Они сами добывают пищу и находят жильё.",
            terms: ["дикие", "лесах", "степях", "горах"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Жабайы** жануарлар **ормандарда**, **далада** және **тауларда** тұрады. Олар тамағын өздері табады, паналайтын жерін өздері іздейді.",
            terms: ["жабайы", "ормандарда", "далада", "тауларда"],
          },
          en: {
            title: "What I learned",
            text:
              "**Wild** animals live in **forests**, **steppes** and **mountains**. They find food and shelter on their own.",
            terms: ["wild", "forests", "steppes", "mountains"],
          },
        },
      },
      {
        type: "sort",
        data: {
          ru: {
            title: "Где обитают эти животные?",
            instruction:
              "Распредели животных по среде обитания.",
            categories: [
              { id: "land", label: "На земле / в лесу", emoji: "🌳" },
              { id: "water", label: "В воде", emoji: "🌊" },
              { id: "mount", label: "В горах", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "корова", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "заяц", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "лиса", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "архар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Проверить",
          },
          kz: {
            title: "Бұл жануарлар қайда тұрады?",
            instruction:
              "Жануарларды мекен ортасы бойынша бөл.",
            categories: [
              { id: "land", label: "Жерде / орманда", emoji: "🌳" },
              { id: "water", label: "Суда", emoji: "🌊" },
              { id: "mount", label: "Тауда", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "сиыр", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "қоян", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "түлкі", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "арқар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Тексеру",
          },
          en: {
            title: "Where do these animals live?",
            instruction:
              "Sort the animals by their habitat.",
            categories: [
              { id: "land", label: "On land / in forest", emoji: "🌳" },
              { id: "water", label: "In water", emoji: "🌊" },
              { id: "mount", label: "In mountains", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "cow", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "hare", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "fox", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "dolphin", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "argali", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Check",
          },
        },
      },
    ],

    // Итоги
    experiments: [
      {
        type: "fact",
        data: {
          ru: {
            title: "Найди в энциклопедии",
            text:
              "Узнай, какие редкие дикие животные живут в Казахстане. Запиши 3 примера и где они обитают.",
            keywords: ["энциклопедия", "Казахстан", "редкие"],
            icon: "sparkles",
          },
          kz: {
            title: "Энциклопедиядан тап",
            text:
              "Қазақстанда қандай сирек кездесетін жабайы жануарлар бар? 3 мысал жазып, қайда тұратынын көрсет.",
            keywords: ["энциклопедия", "Қазақстан", "сирек"],
            icon: "sparkles",
          },
          en: {
            title: "Find in the encyclopedia",
            text:
              "Find out which rare wild animals live in Kazakhstan. Write down 3 examples and where they live.",
            keywords: ["encyclopedia", "Kazakhstan", "rare"],
            icon: "sparkles",
          },
        },
      },
      {
        type: "fact",
        data: {
          ru: {
            title: "Это интересно!",
            text:
              "У молодых пингвинов хвост похож на белый мех. Это помогает их мамам быстро находить своих птенцов в большой стае.",
            keywords: ["пингвины", "хвост", "мех"],
            icon: "bulb",
          },
          kz: {
            title: "Бұл қызық!",
            text:
              "Жас пингвиндердің құйрығы ақ жүнге ұқсайды. Бұл аналарына үлкен топтан өз балапандарын тез табуға көмектеседі.",
            keywords: ["пингвин", "құйрық", "жүн"],
            icon: "bulb",
          },
          en: {
            title: "Did you know?",
            text:
              "Young penguins have tails that look like white fur. It helps their mothers quickly find their chicks in a large flock.",
            keywords: ["penguins", "tail", "fur"],
            icon: "bulb",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Итоговые вопросы",
            text:
              "1) Чем **дикие** животные отличаются от **домашних**? 2) Почему человек должен **заботиться** о домашних животных?",
          },
          kz: {
            title: "Қорытынды сұрақтар",
            text:
              "1) **Жабайы** жануарлар **үй** жануарларынан немен ерекшеленеді? 2) Адам үй жануарларына неліктен **қамқорлық** жасауы керек?",
          },
          en: {
            title: "Wrap-up questions",
            text:
              "1) How do **wild** animals differ from **domestic** ones? 2) Why should people **take care** of domestic animals?",
          },
        },
      },
    ],
  },
  9: {
    intro: [
      {
        type: "audio",
        data: {
          ru: {
            title: "Аудио-гид к уроку",
            text:
              "Сегодня мы узнаем, что животные бывают дикими и домашними, и в чём их главное отличие.",
            caption: "Послушай вступление к уроку",
            durationLabel: "0:22",
          },
          kz: {
            title: "Сабақтың аудио-гиді",
            text:
              "Бүгін біз жануарлардың жабайы және үй жануарлары болып бөлінетінін, олардың айырмашылығы неде екенін білеміз.",
            caption: "Сабақтың кіріспесін тыңда",
            durationLabel: "0:22",
          },
          en: {
            title: "Lesson audio guide",
            text:
              "Today we'll learn that animals can be wild or domestic, and what is the main difference between them.",
            caption: "Listen to the lesson intro",
            durationLabel: "0:22",
          },
        },
      },
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Ключевые слова",
            title: "Дикие и домашние",
            slides: [
              { emoji: "🏠", caption: "Домашние животные / Үй жануарлары / Domestic animals" },
              { emoji: "🌲", caption: "Дикие животные / Жабайы жануарлар / Wild animals" },
              { emoji: "🌍", caption: "Среда обитания / Мекен орта / Habitat" },
            ],
          },
          kz: {
            groupLabel: "Кілт сөздер",
            title: "Жабайы және үй",
            slides: [
              { emoji: "🏠", caption: "Үй жануарлары / Домашние / Domestic animals" },
              { emoji: "🌲", caption: "Жабайы жануарлар / Дикие / Wild animals" },
              { emoji: "🌍", caption: "Мекен орта / Среда обитания / Habitat" },
            ],
          },
          en: {
            groupLabel: "Key words",
            title: "Wild and domestic",
            slides: [
              { emoji: "🏠", caption: "Domestic animals / Домашние / Үй жануарлары" },
              { emoji: "🌲", caption: "Wild animals / Дикие / Жабайы жануарлар" },
              { emoji: "🌍", caption: "Habitat / Среда обитания / Мекен орта" },
            ],
          },
        },
      },
    ],

    // Домашние животные
    scientists: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Домашние животные",
            slides: [
              { emoji: "🐕", caption: "Собаки живут рядом с людьми — охраняют дом." },
              { emoji: "🐄", caption: "Корова на пастбище даёт молоко." },
              { emoji: "🐐", caption: "Коза у забора — даёт молоко и шерсть." },
              { emoji: "🐎", caption: "Лошадь с жеребёнком — помогает человеку." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Үй жануарлары",
            slides: [
              { emoji: "🐕", caption: "Иттер адаммен бірге тұрып, үйді күзетеді." },
              { emoji: "🐄", caption: "Жайылымдағы сиыр сүт береді." },
              { emoji: "🐐", caption: "Қоршау жанындағы ешкі — сүт пен жүн береді." },
              { emoji: "🐎", caption: "Жылқы құлынымен — адамға көмектеседі." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Domestic animals",
            slides: [
              { emoji: "🐕", caption: "Dogs live with people — they guard the house." },
              { emoji: "🐄", caption: "A cow on the pasture gives milk." },
              { emoji: "🐐", caption: "A goat by the fence gives milk and wool." },
              { emoji: "🐎", caption: "A mare with her foal — helps people." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Проверь себя",
            question:
              "Кто из этих животных — домашний? Подумай и проверь ответ.",
            items: [
              { emoji: "🐕", label: "собака" },
              { emoji: "🐄", label: "корова" },
              { emoji: "🐐", label: "коза" },
            ],
            answer:
              "Все трое — домашние животные. Они живут рядом с человеком, приносят пользу, а человек заботится о них.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Өзіңді тексер",
            question:
              "Бұлардың қайсысы үй жануары? Ойлан да жауапты тексер.",
            items: [
              { emoji: "🐕", label: "ит" },
              { emoji: "🐄", label: "сиыр" },
              { emoji: "🐐", label: "ешкі" },
            ],
            answer:
              "Үшеуі де үй жануарлары. Олар адамның жанында тұрады, пайда әкеледі, адам оларды күтеді.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Check yourself",
            question:
              "Which of these are domestic animals? Think, then check.",
            items: [
              { emoji: "🐕", label: "dog" },
              { emoji: "🐄", label: "cow" },
              { emoji: "🐐", label: "goat" },
            ],
            answer:
              "All three are domestic animals. They live near people, are useful, and people take care of them.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Домашние** животные живут рядом с человеком, приносят **пользу**, а человек **заботится** о них.",
            terms: ["домашние", "пользу", "заботится"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Үй** жануарлары адамның жанында тұрады, **пайда** әкеледі, адам олар туралы **қамқорлық** жасайды.",
            terms: ["үй", "пайда", "қамқорлық"],
          },
          en: {
            title: "What I learned",
            text:
              "**Domestic** animals live near people, bring **benefit**, and people **take care** of them.",
            terms: ["domestic", "benefit", "take care"],
          },
        },
      },
    ],

    // Дикие животные
    observation: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Дикие животные",
            slides: [
              { emoji: "🐘", caption: "Слон живёт в жарких странах." },
              { emoji: "🦧", caption: "Орангутан живёт в тропических лесах." },
              { emoji: "🦅", caption: "Беркут парит над горами." },
              { emoji: "🦌", caption: "Сайгак бегает по степям Казахстана." },
              { emoji: "🐱", caption: "Рысь живёт в густых лесах." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Жабайы жануарлар",
            slides: [
              { emoji: "🐘", caption: "Піл ыстық елдерде тұрады." },
              { emoji: "🦧", caption: "Орангутан тропиктік ормандарда тұрады." },
              { emoji: "🦅", caption: "Бүркіт таулардың үстінде қалықтайды." },
              { emoji: "🦌", caption: "Киік Қазақстан даласында жүгіреді." },
              { emoji: "🐱", caption: "Сілеусін қалың орманда тұрады." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Wild animals",
            slides: [
              { emoji: "🐘", caption: "An elephant lives in hot countries." },
              { emoji: "🦧", caption: "An orangutan lives in tropical forests." },
              { emoji: "🦅", caption: "A golden eagle soars above the mountains." },
              { emoji: "🦌", caption: "A saiga runs across the steppes of Kazakhstan." },
              { emoji: "🐱", caption: "A lynx lives in dense forests." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Где они обитают?",
            question:
              "К какой группе относятся эти животные? Где они обитают?",
            items: [
              { emoji: "🐘", label: "слон" },
              { emoji: "🦅", label: "беркут" },
              { emoji: "🦌", label: "сайгак" },
            ],
            answer:
              "Все они — дикие животные. Слон живёт в саваннах, беркут — в горах, сайгак — в степях. Они сами добывают пищу.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Олар қайда тұрады?",
            question:
              "Бұл жануарлар қай топқа жатады? Олар қайда тұрады?",
            items: [
              { emoji: "🐘", label: "піл" },
              { emoji: "🦅", label: "бүркіт" },
              { emoji: "🦌", label: "киік" },
            ],
            answer:
              "Олардың барлығы — жабайы жануарлар. Піл саваннада, бүркіт тауда, киік далада тұрады. Олар тамағын өздері табады.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Where do they live?",
            question:
              "What group do these animals belong to? Where do they live?",
            items: [
              { emoji: "🐘", label: "elephant" },
              { emoji: "🦅", label: "eagle" },
              { emoji: "🦌", label: "saiga" },
            ],
            answer:
              "They are all wild animals. The elephant lives in savannas, the eagle in the mountains, the saiga in the steppes. They find food on their own.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Дикие** животные живут в **лесах**, **степях** и **горах**. Они сами добывают пищу и находят жильё.",
            terms: ["дикие", "лесах", "степях", "горах"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Жабайы** жануарлар **ормандарда**, **далада** және **тауларда** тұрады. Олар тамағын өздері табады, паналайтын жерін өздері іздейді.",
            terms: ["жабайы", "ормандарда", "далада", "тауларда"],
          },
          en: {
            title: "What I learned",
            text:
              "**Wild** animals live in **forests**, **steppes** and **mountains**. They find food and shelter on their own.",
            terms: ["wild", "forests", "steppes", "mountains"],
          },
        },
      },
      {
        type: "sort",
        data: {
          ru: {
            title: "Где обитают эти животные?",
            instruction:
              "Распредели животных по среде обитания.",
            categories: [
              { id: "land", label: "На земле / в лесу", emoji: "🌳" },
              { id: "water", label: "В воде", emoji: "🌊" },
              { id: "mount", label: "В горах", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "корова", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "заяц", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "лиса", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "архар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Проверить",
          },
          kz: {
            title: "Бұл жануарлар қайда тұрады?",
            instruction:
              "Жануарларды мекен ортасы бойынша бөл.",
            categories: [
              { id: "land", label: "Жерде / орманда", emoji: "🌳" },
              { id: "water", label: "Суда", emoji: "🌊" },
              { id: "mount", label: "Тауда", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "сиыр", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "қоян", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "түлкі", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "арқар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Тексеру",
          },
          en: {
            title: "Where do these animals live?",
            instruction:
              "Sort the animals by their habitat.",
            categories: [
              { id: "land", label: "On land / in forest", emoji: "🌳" },
              { id: "water", label: "In water", emoji: "🌊" },
              { id: "mount", label: "In mountains", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "cow", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "hare", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "fox", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "dolphin", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "argali", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Check",
          },
        },
      },
    ],

    // Итоги
    experiments: [
      {
        type: "fact",
        data: {
          ru: {
            title: "Найди в энциклопедии",
            text:
              "Узнай, какие редкие дикие животные живут в Казахстане. Запиши 3 примера и где они обитают.",
            keywords: ["энциклопедия", "Казахстан", "редкие"],
            icon: "sparkles",
          },
          kz: {
            title: "Энциклопедиядан тап",
            text:
              "Қазақстанда қандай сирек кездесетін жабайы жануарлар бар? 3 мысал жазып, қайда тұратынын көрсет.",
            keywords: ["энциклопедия", "Қазақстан", "сирек"],
            icon: "sparkles",
          },
          en: {
            title: "Find in the encyclopedia",
            text:
              "Find out which rare wild animals live in Kazakhstan. Write down 3 examples and where they live.",
            keywords: ["encyclopedia", "Kazakhstan", "rare"],
            icon: "sparkles",
          },
        },
      },
      {
        type: "fact",
        data: {
          ru: {
            title: "Это интересно!",
            text:
              "У молодых пингвинов хвост похож на белый мех. Это помогает их мамам быстро находить своих птенцов в большой стае.",
            keywords: ["пингвины", "хвост", "мех"],
            icon: "bulb",
          },
          kz: {
            title: "Бұл қызық!",
            text:
              "Жас пингвиндердің құйрығы ақ жүнге ұқсайды. Бұл аналарына үлкен топтан өз балапандарын тез табуға көмектеседі.",
            keywords: ["пингвин", "құйрық", "жүн"],
            icon: "bulb",
          },
          en: {
            title: "Did you know?",
            text:
              "Young penguins have tails that look like white fur. It helps their mothers quickly find their chicks in a large flock.",
            keywords: ["penguins", "tail", "fur"],
            icon: "bulb",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Итоговые вопросы",
            text:
              "1) Чем **дикие** животные отличаются от **домашних**? 2) Почему человек должен **заботиться** о домашних животных?",
          },
          kz: {
            title: "Қорытынды сұрақтар",
            text:
              "1) **Жабайы** жануарлар **үй** жануарларынан немен ерекшеленеді? 2) Адам үй жануарларына неліктен **қамқорлық** жасауы керек?",
          },
          en: {
            title: "Wrap-up questions",
            text:
              "1) How do **wild** animals differ from **domestic** ones? 2) Why should people **take care** of domestic animals?",
          },
        },
      },
    ],
  },
  10: {
    "intro": [
      {
        "type": "audio",
        "data": {
          "ru": {
            "title": "Аудио-гид к уроку",
            "text": "Сегодня узнаем, как растёт человек: от младенца до пожилого. Каждый возраст — это новая ступенька жизни.",
            "caption": "Послушай вступление к уроку",
            "durationLabel": "0:25"
          },
          "kz": {
            "title": "Сабақтың аудио-гиді",
            "text": "Бүгін адамның қалай өсетінін білеміз: бөбектен қарт адамға дейін. Әр жас — өмірдің жаңа сатысы.",
            "caption": "Сабақтың кіріспесін тыңда",
            "durationLabel": "0:25"
          },
          "en": {
            "title": "Lesson audio guide",
            "text": "Today we learn how a person grows: from a baby to an elderly person. Every age is a new step of life.",
            "caption": "Listen to the lesson intro",
            "durationLabel": "0:25"
          }
        }
      },
      {
        "type": "carousel",
        "data": {
          "ru": {
            "groupLabel": "Ключевые слова",
            "title": "Этапы жизни",
            "slides": [
              {
                "emoji": "👶",
                "caption": "Младенец",
                "question": "Что умеет малыш?"
              },
              {
                "emoji": "🧒",
                "caption": "Ребёнок",
                "question": "Чем занят ребёнок?"
              },
              {
                "emoji": "🧑",
                "caption": "Юноша",
                "question": "Чему учится юноша?"
              },
              {
                "emoji": "👨",
                "caption": "Взрослый",
                "question": "Что делает взрослый?"
              },
              {
                "emoji": "👴",
                "caption": "Пожилой",
                "question": "Чем мудры пожилые?"
              }
            ]
          },
          "kz": {
            "groupLabel": "Кілт сөздер",
            "title": "Өмір кезеңдері",
            "slides": [
              {
                "emoji": "👶",
                "caption": "Бөбек",
                "question": "Бөбек не істей алады?"
              },
              {
                "emoji": "🧒",
                "caption": "Бала",
                "question": "Бала немен айналысады?"
              },
              {
                "emoji": "🧑",
                "caption": "Жасөспірім",
                "question": "Жасөспірім не үйренеді?"
              },
              {
                "emoji": "👨",
                "caption": "Ересек",
                "question": "Ересек не істейді?"
              },
              {
                "emoji": "👴",
                "caption": "Қарт",
                "question": "Қарт неге дана?"
              }
            ]
          },
          "en": {
            "groupLabel": "Key words",
            "title": "Stages of life",
            "slides": [
              {
                "emoji": "👶",
                "caption": "Baby",
                "question": "What can a baby do?"
              },
              {
                "emoji": "🧒",
                "caption": "Child",
                "question": "What does a child do?"
              },
              {
                "emoji": "🧑",
                "caption": "Youth",
                "question": "What does a youth learn?"
              },
              {
                "emoji": "👨",
                "caption": "Adult",
                "question": "What do adults do?"
              },
              {
                "emoji": "👴",
                "caption": "Elderly",
                "question": "Why are elders wise?"
              }
            ]
          }
        }
      }
    ],
    "scientists": [
      {
        "type": "carousel",
        "data": {
          "ru": {
            "groupLabel": "1-я группа · работа в группах",
            "title": "Кто на фото?",
            "slides": [
              {
                "emoji": "👶🍼",
                "caption": "Младенец с бутылочкой.",
                "question": "Что нужно младенцу?"
              },
              {
                "emoji": "🧒🎒",
                "caption": "Школьник идёт в школу.",
                "question": "Зачем дети учатся?"
              },
              {
                "emoji": "👩‍⚕️",
                "caption": "Взрослая — врач.",
                "question": "Какие профессии знаешь?"
              },
              {
                "emoji": "👵🧶",
                "caption": "Бабушка вяжет внуку.",
                "question": "Чему учат бабушки?"
              }
            ]
          },
          "kz": {
            "groupLabel": "1-топ · топтық жұмыс",
            "title": "Суретте кім?",
            "slides": [
              {
                "emoji": "👶🍼",
                "caption": "Бөтелкедегі бөбек.",
                "question": "Бөбекке не керек?"
              },
              {
                "emoji": "🧒🎒",
                "caption": "Оқушы мектепке барады.",
                "question": "Балалар неге оқиды?"
              },
              {
                "emoji": "👩‍⚕️",
                "caption": "Ересек — дәрігер.",
                "question": "Қандай мамандықтарды білесің?"
              },
              {
                "emoji": "👵🧶",
                "caption": "Әже немересіне тоқыма тоқиды.",
                "question": "Әжелер не үйретеді?"
              }
            ]
          },
          "en": {
            "groupLabel": "Group 1 · group work",
            "title": "Who is in the photo?",
            "slides": [
              {
                "emoji": "👶🍼",
                "caption": "A baby with a bottle.",
                "question": "What does a baby need?"
              },
              {
                "emoji": "🧒🎒",
                "caption": "A schoolchild goes to school.",
                "question": "Why do children study?"
              },
              {
                "emoji": "👩‍⚕️",
                "caption": "An adult — a doctor.",
                "question": "What jobs do you know?"
              },
              {
                "emoji": "👵🧶",
                "caption": "Grandma knits for her grandchild.",
                "question": "What do grandmas teach?"
              }
            ]
          }
        }
      },
      {
        "type": "reveal",
        "data": {
          "ru": {
            "title": "Работа в парах: кто старше?",
            "question": "Расположите от младшего к старшему. Кто на каком этапе жизни?",
            "items": [
              {
                "emoji": "👶",
                "label": "младенец"
              },
              {
                "emoji": "🧒",
                "label": "ребёнок"
              },
              {
                "emoji": "🧑",
                "label": "юноша"
              },
              {
                "emoji": "👨",
                "label": "взрослый"
              },
              {
                "emoji": "👴",
                "label": "пожилой"
              }
            ],
            "answer": "Правильный порядок: 👶 → 🧒 → 🧑 → 👨 → 👴. Это пять этапов жизни человека.",
            "buttonLabel": "Проверить ответ"
          },
          "kz": {
            "title": "Жұптық жұмыс: кім үлкен?",
            "question": "Кішіден үлкенге дейін орналастыр. Кім қай кезеңде?",
            "items": [
              {
                "emoji": "👶",
                "label": "бөбек"
              },
              {
                "emoji": "🧒",
                "label": "бала"
              },
              {
                "emoji": "🧑",
                "label": "жасөспірім"
              },
              {
                "emoji": "👨",
                "label": "ересек"
              },
              {
                "emoji": "👴",
                "label": "қарт"
              }
            ],
            "answer": "Дұрыс реті: 👶 → 🧒 → 🧑 → 👨 → 👴. Бұл — адам өмірінің бес кезеңі.",
            "buttonLabel": "Жауапты тексеру"
          },
          "en": {
            "title": "Pair work: who is older?",
            "question": "Order from youngest to oldest. Who is at which stage?",
            "items": [
              {
                "emoji": "👶",
                "label": "baby"
              },
              {
                "emoji": "🧒",
                "label": "child"
              },
              {
                "emoji": "🧑",
                "label": "youth"
              },
              {
                "emoji": "👨",
                "label": "adult"
              },
              {
                "emoji": "👴",
                "label": "elderly"
              }
            ],
            "answer": "Correct order: 👶 → 🧒 → 🧑 → 👨 → 👴. These are the five stages of human life.",
            "buttonLabel": "Check answer"
          }
        }
      },
      {
        "type": "summary",
        "data": {
          "ru": {
            "title": "Словарь",
            "text": "**Младенец**, **ребёнок**, **юноша**, **взрослый**, **пожилой** — пять этапов жизни."
          },
          "kz": {
            "title": "Сөздік",
            "text": "**Бөбек**, **бала**, **жасөспірім**, **ересек**, **қарт** — өмірдің бес кезеңі."
          },
          "en": {
            "title": "Glossary",
            "text": "**Baby**, **child**, **youth**, **adult**, **elderly** — five stages of life."
          }
        }
      }
    ],
    "observation": [
      {
        "type": "zoom",
        "data": {
          "ru": {
            "title": "Индивидуальная работа · рассмотри лица",
            "instruction": "Наведи лупу. По каким признакам ты узнаёшь возраст?",
            "images": [
              {
                "emoji": "👶",
                "caption": "Гладкая кожа, маленькие черты"
              },
              {
                "emoji": "👴",
                "caption": "Морщинки, седые волосы"
              }
            ]
          },
          "kz": {
            "title": "Жеке жұмыс · бет-әлпетті қара",
            "instruction": "Лупаны жүгірт. Жасты қандай белгілер арқылы танисың?",
            "images": [
              {
                "emoji": "👶",
                "caption": "Тегіс тері, кішкентай белгілер"
              },
              {
                "emoji": "👴",
                "caption": "Әжімдер, ақ шаш"
              }
            ]
          },
          "en": {
            "title": "Individual work · examine faces",
            "instruction": "Move the magnifier. How do you tell a person's age?",
            "images": [
              {
                "emoji": "👶",
                "caption": "Smooth skin, small features"
              },
              {
                "emoji": "👴",
                "caption": "Wrinkles, grey hair"
              }
            ]
          }
        }
      },
      {
        "type": "carousel",
        "data": {
          "ru": {
            "groupLabel": "Работа в группах · что я умею",
            "title": "Что умеют в каждом возрасте",
            "slides": [
              {
                "emoji": "👶",
                "caption": "Младенец только учится держать голову.",
                "question": "Что ел ты в год?"
              },
              {
                "emoji": "🧒📚",
                "caption": "Ребёнок учится читать и писать.",
                "question": "Что любишь читать?"
              },
              {
                "emoji": "🧑‍🍳",
                "caption": "Юноша осваивает профессию.",
                "question": "Кем хочешь стать?"
              }
            ]
          },
          "kz": {
            "groupLabel": "Топтық жұмыс · мен не істей аламын",
            "title": "Әр жаста не істей алады",
            "slides": [
              {
                "emoji": "👶",
                "caption": "Бөбек басын ұстауды үйренеді.",
                "question": "Бір жасыңда не жедің?"
              },
              {
                "emoji": "🧒📚",
                "caption": "Бала оқуды үйренеді.",
                "question": "Не оқығанды ұнатасың?"
              },
              {
                "emoji": "🧑‍🍳",
                "caption": "Жасөспірім мамандық таңдайды.",
                "question": "Кім болғың келеді?"
              }
            ]
          },
          "en": {
            "groupLabel": "Group work · what I can do",
            "title": "Skills at each age",
            "slides": [
              {
                "emoji": "👶",
                "caption": "A baby learns to hold its head.",
                "question": "What did you eat at age 1?"
              },
              {
                "emoji": "🧒📚",
                "caption": "A child learns to read.",
                "question": "What do you like to read?"
              },
              {
                "emoji": "🧑‍🍳",
                "caption": "A youth chooses a profession.",
                "question": "Who do you want to be?"
              }
            ]
          }
        }
      },
      {
        "type": "reveal",
        "data": {
          "ru": {
            "title": "Самостоятельно: угадай этап",
            "question": "Посмотри на действия и определи возраст человека.",
            "items": [
              {
                "emoji": "🍼",
                "label": "пьёт молоко"
              },
              {
                "emoji": "🎓",
                "label": "оканчивает школу"
              },
              {
                "emoji": "💼",
                "label": "работает"
              }
            ],
            "answer": "🍼 — младенец, 🎓 — юноша, 💼 — взрослый.",
            "buttonLabel": "Проверить ответ"
          },
          "kz": {
            "title": "Өздік жұмыс: кезеңді тап",
            "question": "Әрекеттерге қарап, адамның жасын анықта.",
            "items": [
              {
                "emoji": "🍼",
                "label": "сүт ішеді"
              },
              {
                "emoji": "🎓",
                "label": "мектеп бітіреді"
              },
              {
                "emoji": "💼",
                "label": "жұмыс істейді"
              }
            ],
            "answer": "🍼 — бөбек, 🎓 — жасөспірім, 💼 — ересек.",
            "buttonLabel": "Жауапты тексеру"
          },
          "en": {
            "title": "Independent: guess the stage",
            "question": "Look at the actions and find the stage.",
            "items": [
              {
                "emoji": "🍼",
                "label": "drinks milk"
              },
              {
                "emoji": "🎓",
                "label": "finishes school"
              },
              {
                "emoji": "💼",
                "label": "works"
              }
            ],
            "answer": "🍼 — baby, 🎓 — youth, 💼 — adult.",
            "buttonLabel": "Check answer"
          }
        }
      }
    ],
    "experiments": [
      {
        "type": "sort",
        "data": {
          "ru": {
            "title": "Работа в группах · кому что подходит",
            "instruction": "Распредели предметы по этапам жизни.",
            "categories": [
              {
                "id": "baby",
                "label": "Младенец",
                "emoji": "👶"
              },
              {
                "id": "child",
                "label": "Ребёнок",
                "emoji": "🧒"
              },
              {
                "id": "adult",
                "label": "Взрослый",
                "emoji": "👨"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "бутылочка",
                "emoji": "🍼",
                "categoryId": "baby"
              },
              {
                "id": "i2",
                "label": "погремушка",
                "emoji": "🪀",
                "categoryId": "baby"
              },
              {
                "id": "i3",
                "label": "рюкзак",
                "emoji": "🎒",
                "categoryId": "child"
              },
              {
                "id": "i4",
                "label": "книга",
                "emoji": "📕",
                "categoryId": "child"
              },
              {
                "id": "i5",
                "label": "ноутбук",
                "emoji": "💻",
                "categoryId": "adult"
              },
              {
                "id": "i6",
                "label": "ключи от машины",
                "emoji": "🔑",
                "categoryId": "adult"
              }
            ],
            "checkLabel": "Проверить"
          },
          "kz": {
            "title": "Топтық жұмыс · кімге не сай келеді",
            "instruction": "Заттарды өмір кезеңдеріне қарай бөл.",
            "categories": [
              {
                "id": "baby",
                "label": "Бөбек",
                "emoji": "👶"
              },
              {
                "id": "child",
                "label": "Бала",
                "emoji": "🧒"
              },
              {
                "id": "adult",
                "label": "Ересек",
                "emoji": "👨"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "бөтелке",
                "emoji": "🍼",
                "categoryId": "baby"
              },
              {
                "id": "i2",
                "label": "сылдырмақ",
                "emoji": "🪀",
                "categoryId": "baby"
              },
              {
                "id": "i3",
                "label": "рюкзак",
                "emoji": "🎒",
                "categoryId": "child"
              },
              {
                "id": "i4",
                "label": "кітап",
                "emoji": "📕",
                "categoryId": "child"
              },
              {
                "id": "i5",
                "label": "ноутбук",
                "emoji": "💻",
                "categoryId": "adult"
              },
              {
                "id": "i6",
                "label": "көлік кілті",
                "emoji": "🔑",
                "categoryId": "adult"
              }
            ],
            "checkLabel": "Тексеру"
          },
          "en": {
            "title": "Group work · what matches whom",
            "instruction": "Sort the items by life stage.",
            "categories": [
              {
                "id": "baby",
                "label": "Baby",
                "emoji": "👶"
              },
              {
                "id": "child",
                "label": "Child",
                "emoji": "🧒"
              },
              {
                "id": "adult",
                "label": "Adult",
                "emoji": "👨"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "bottle",
                "emoji": "🍼",
                "categoryId": "baby"
              },
              {
                "id": "i2",
                "label": "rattle",
                "emoji": "🪀",
                "categoryId": "baby"
              },
              {
                "id": "i3",
                "label": "backpack",
                "emoji": "🎒",
                "categoryId": "child"
              },
              {
                "id": "i4",
                "label": "book",
                "emoji": "📕",
                "categoryId": "child"
              },
              {
                "id": "i5",
                "label": "laptop",
                "emoji": "💻",
                "categoryId": "adult"
              },
              {
                "id": "i6",
                "label": "car keys",
                "emoji": "🔑",
                "categoryId": "adult"
              }
            ],
            "checkLabel": "Check"
          }
        }
      },
      {
        "type": "fact",
        "data": {
          "ru": {
            "title": "Это интересно",
            "text": "За первый год жизни ребёнок вырастает почти на 25 см!",
            "keywords": [
              "рост",
              "младенец"
            ],
            "icon": "bulb"
          },
          "kz": {
            "title": "Бұл қызық",
            "text": "Бөбек өмірінің бірінші жылында 25 см-ге дейін өседі!",
            "keywords": [
              "өсу",
              "бөбек"
            ],
            "icon": "bulb"
          },
          "en": {
            "title": "Did you know",
            "text": "In the first year a baby grows almost 25 cm!",
            "keywords": [
              "growth",
              "baby"
            ],
            "icon": "bulb"
          }
        }
      }
    ]
  },

  11: {
    "intro": [
      {
        "type": "audio",
        "data": {
          "ru": {
            "title": "Аудио-гид к уроку",
            "text": "Человек — живой организм. У нас есть голова, тело, руки и ноги. Сегодня узнаем части тела и зачем они нужны.",
            "caption": "Послушай вступление к уроку",
            "durationLabel": "0:25"
          },
          "kz": {
            "title": "Сабақтың аудио-гиді",
            "text": "Адам — тірі ағза. Бізде бас, дене, қол, аяқ бар. Бүгін дене мүшелерін және олардың қызметін білеміз.",
            "caption": "Сабақтың кіріспесін тыңда",
            "durationLabel": "0:25"
          },
          "en": {
            "title": "Lesson audio guide",
            "text": "A human is a living organism. We have a head, body, arms and legs. Today we learn the body parts and what they do.",
            "caption": "Listen to the lesson intro",
            "durationLabel": "0:25"
          }
        }
      },
      {
        "type": "carousel",
        "data": {
          "ru": {
            "groupLabel": "Ключевые слова",
            "title": "Части тела",
            "slides": [
              {
                "emoji": "🧠",
                "caption": "Мозг",
                "question": "Что делает мозг?"
              },
              {
                "emoji": "❤️",
                "caption": "Сердце",
                "question": "Что качает сердце?"
              },
              {
                "emoji": "👁️",
                "caption": "Глаза",
                "question": "Зачем нам глаза?"
              },
              {
                "emoji": "👂",
                "caption": "Уши",
                "question": "Что слышишь сейчас?"
              },
              {
                "emoji": "🦵",
                "caption": "Ноги",
                "question": "Куда бегут ноги?"
              }
            ]
          },
          "kz": {
            "groupLabel": "Кілт сөздер",
            "title": "Дене мүшелері",
            "slides": [
              {
                "emoji": "🧠",
                "caption": "Ми",
                "question": "Ми не істейді?"
              },
              {
                "emoji": "❤️",
                "caption": "Жүрек",
                "question": "Жүрек нені айдайды?"
              },
              {
                "emoji": "👁️",
                "caption": "Көз",
                "question": "Көз не үшін?"
              },
              {
                "emoji": "👂",
                "caption": "Құлақ",
                "question": "Қазір не естисің?"
              },
              {
                "emoji": "🦵",
                "caption": "Аяқ",
                "question": "Аяқтар қайда жүгіреді?"
              }
            ]
          },
          "en": {
            "groupLabel": "Key words",
            "title": "Body parts",
            "slides": [
              {
                "emoji": "🧠",
                "caption": "Brain",
                "question": "What does the brain do?"
              },
              {
                "emoji": "❤️",
                "caption": "Heart",
                "question": "What does the heart pump?"
              },
              {
                "emoji": "👁️",
                "caption": "Eyes",
                "question": "Why do we need eyes?"
              },
              {
                "emoji": "👂",
                "caption": "Ears",
                "question": "What do you hear now?"
              },
              {
                "emoji": "🦵",
                "caption": "Legs",
                "question": "Where do legs run?"
              }
            ]
          }
        }
      }
    ],
    "scientists": [
      {
        "type": "carousel",
        "data": {
          "ru": {
            "groupLabel": "1-я группа · работа в группах",
            "title": "Покажи и назови",
            "slides": [
              {
                "emoji": "🙋",
                "caption": "Подними руку — это рука!",
                "question": "Сколько рук у тебя?"
              },
              {
                "emoji": "👀",
                "caption": "Закрой глаза — что видишь?",
                "question": "Зачем нам два глаза?"
              },
              {
                "emoji": "👃",
                "caption": "Понюхай воздух.",
                "question": "Чем пахнет в классе?"
              },
              {
                "emoji": "👣",
                "caption": "Топни ногой.",
                "question": "Что чувствуешь?"
              }
            ]
          },
          "kz": {
            "groupLabel": "1-топ · топтық жұмыс",
            "title": "Көрсет әрі ата",
            "slides": [
              {
                "emoji": "🙋",
                "caption": "Қолыңды көтер — бұл қол!",
                "question": "Сенде қанша қол бар?"
              },
              {
                "emoji": "👀",
                "caption": "Көзіңді жұм — не көресің?",
                "question": "Неге екі көз керек?"
              },
              {
                "emoji": "👃",
                "caption": "Ауаны иіскеп көр.",
                "question": "Сыныпта не иіс шығады?"
              },
              {
                "emoji": "👣",
                "caption": "Аяғыңмен тарс еткіз.",
                "question": "Не сезесің?"
              }
            ]
          },
          "en": {
            "groupLabel": "Group 1 · group work",
            "title": "Show and name",
            "slides": [
              {
                "emoji": "🙋",
                "caption": "Raise your hand — this is an arm!",
                "question": "How many arms do you have?"
              },
              {
                "emoji": "👀",
                "caption": "Close your eyes — what do you see?",
                "question": "Why two eyes?"
              },
              {
                "emoji": "👃",
                "caption": "Smell the air.",
                "question": "What's the smell?"
              },
              {
                "emoji": "👣",
                "caption": "Stomp your foot.",
                "question": "What do you feel?"
              }
            ]
          }
        }
      },
      {
        "type": "zoom",
        "data": {
          "ru": {
            "title": "Работа в парах · рассмотри",
            "instruction": "Найди части лица друга. Где брови, нос, рот?",
            "images": [
              {
                "emoji": "😀",
                "caption": "Лицо: глаза, нос, рот, уши"
              },
              {
                "emoji": "🖐️",
                "caption": "Рука: ладонь и 5 пальцев"
              }
            ]
          },
          "kz": {
            "title": "Жұптық жұмыс · қарап шық",
            "instruction": "Достыңның бет-әлпетін қара. Қас, мұрын, ауыз қайда?",
            "images": [
              {
                "emoji": "😀",
                "caption": "Бет: көз, мұрын, ауыз, құлақ"
              },
              {
                "emoji": "🖐️",
                "caption": "Қол: алақан мен 5 саусақ"
              }
            ]
          },
          "en": {
            "title": "Pair work · examine",
            "instruction": "Find the parts of your friend's face. Where are the brows, nose, mouth?",
            "images": [
              {
                "emoji": "😀",
                "caption": "Face: eyes, nose, mouth, ears"
              },
              {
                "emoji": "🖐️",
                "caption": "Hand: palm and 5 fingers"
              }
            ]
          }
        }
      },
      {
        "type": "summary",
        "data": {
          "ru": {
            "title": "Что я узнал",
            "text": "У человека есть **голова**, **туловище**, **руки** и **ноги**. Каждая часть выполняет свою работу."
          },
          "kz": {
            "title": "Мен нені білдім",
            "text": "Адамда **бас**, **тұлға**, **қол** және **аяқ** бар. Әр мүше өз қызметін атқарады."
          },
          "en": {
            "title": "What I learned",
            "text": "A human has a **head**, **body**, **arms** and **legs**. Each part has its job."
          }
        }
      }
    ],
    "observation": [
      {
        "type": "sort",
        "data": {
          "ru": {
            "title": "Работа в группах · что для чего",
            "instruction": "Соедини часть тела с её работой.",
            "categories": [
              {
                "id": "see",
                "label": "Смотреть",
                "emoji": "👁️"
              },
              {
                "id": "hear",
                "label": "Слышать",
                "emoji": "👂"
              },
              {
                "id": "walk",
                "label": "Ходить",
                "emoji": "🦵"
              },
              {
                "id": "think",
                "label": "Думать",
                "emoji": "🧠"
              }
            ],
            "items": [
              {
                "id": "a",
                "label": "глаз",
                "emoji": "👁️",
                "categoryId": "see"
              },
              {
                "id": "b",
                "label": "ухо",
                "emoji": "👂",
                "categoryId": "hear"
              },
              {
                "id": "c",
                "label": "нога",
                "emoji": "🦵",
                "categoryId": "walk"
              },
              {
                "id": "d",
                "label": "мозг",
                "emoji": "🧠",
                "categoryId": "think"
              }
            ],
            "checkLabel": "Проверить"
          },
          "kz": {
            "title": "Топтық жұмыс · не үшін",
            "instruction": "Дене мүшесін қызметімен сәйкестендір.",
            "categories": [
              {
                "id": "see",
                "label": "Көру",
                "emoji": "👁️"
              },
              {
                "id": "hear",
                "label": "Есту",
                "emoji": "👂"
              },
              {
                "id": "walk",
                "label": "Жүру",
                "emoji": "🦵"
              },
              {
                "id": "think",
                "label": "Ойлау",
                "emoji": "🧠"
              }
            ],
            "items": [
              {
                "id": "a",
                "label": "көз",
                "emoji": "👁️",
                "categoryId": "see"
              },
              {
                "id": "b",
                "label": "құлақ",
                "emoji": "👂",
                "categoryId": "hear"
              },
              {
                "id": "c",
                "label": "аяқ",
                "emoji": "🦵",
                "categoryId": "walk"
              },
              {
                "id": "d",
                "label": "ми",
                "emoji": "🧠",
                "categoryId": "think"
              }
            ],
            "checkLabel": "Тексеру"
          },
          "en": {
            "title": "Group work · what for what",
            "instruction": "Match each body part with its job.",
            "categories": [
              {
                "id": "see",
                "label": "See",
                "emoji": "👁️"
              },
              {
                "id": "hear",
                "label": "Hear",
                "emoji": "👂"
              },
              {
                "id": "walk",
                "label": "Walk",
                "emoji": "🦵"
              },
              {
                "id": "think",
                "label": "Think",
                "emoji": "🧠"
              }
            ],
            "items": [
              {
                "id": "a",
                "label": "eye",
                "emoji": "👁️",
                "categoryId": "see"
              },
              {
                "id": "b",
                "label": "ear",
                "emoji": "👂",
                "categoryId": "hear"
              },
              {
                "id": "c",
                "label": "leg",
                "emoji": "🦵",
                "categoryId": "walk"
              },
              {
                "id": "d",
                "label": "brain",
                "emoji": "🧠",
                "categoryId": "think"
              }
            ],
            "checkLabel": "Check"
          }
        }
      },
      {
        "type": "reveal",
        "data": {
          "ru": {
            "title": "Самостоятельная работа · загадка",
            "question": "У каждого человека есть, но они не одинаковые. Что это?",
            "items": [
              {
                "emoji": "👁️",
                "label": "глаза"
              },
              {
                "emoji": "👂",
                "label": "уши"
              },
              {
                "emoji": "✋",
                "label": "отпечатки"
              }
            ],
            "answer": "Отпечатки пальцев! У каждого человека они уникальны.",
            "buttonLabel": "Проверить ответ"
          },
          "kz": {
            "title": "Өздік жұмыс · жұмбақ",
            "question": "Әр адамда бар, бірақ бірдей емес. Бұл не?",
            "items": [
              {
                "emoji": "👁️",
                "label": "көз"
              },
              {
                "emoji": "👂",
                "label": "құлақ"
              },
              {
                "emoji": "✋",
                "label": "ізі"
              }
            ],
            "answer": "Саусақ ізі! Әр адамда бірегей.",
            "buttonLabel": "Жауапты тексеру"
          },
          "en": {
            "title": "Independent work · riddle",
            "question": "Everyone has them, but they are not the same. What is it?",
            "items": [
              {
                "emoji": "👁️",
                "label": "eyes"
              },
              {
                "emoji": "👂",
                "label": "ears"
              },
              {
                "emoji": "✋",
                "label": "prints"
              }
            ],
            "answer": "Fingerprints! Every person's are unique.",
            "buttonLabel": "Check answer"
          }
        }
      }
    ],
    "experiments": [
      {
        "type": "carousel",
        "data": {
          "ru": {
            "groupLabel": "Опыт в группах · 5 чувств",
            "title": "Проверь свои органы чувств",
            "slides": [
              {
                "emoji": "👁️",
                "caption": "Закрой один глаз и поймай мяч.",
                "question": "Легко ли?"
              },
              {
                "emoji": "👃",
                "caption": "С закрытыми глазами понюхай фрукт.",
                "question": "Угадал?"
              },
              {
                "emoji": "👅",
                "caption": "Попробуй сладкое и кислое.",
                "question": "Чем отличается?"
              }
            ]
          },
          "kz": {
            "groupLabel": "Топта тәжірибе · 5 сезім",
            "title": "Сезім мүшелеріңді тексер",
            "slides": [
              {
                "emoji": "👁️",
                "caption": "Бір көзіңді жұмып, доп ұстап көр.",
                "question": "Оңай ма?"
              },
              {
                "emoji": "👃",
                "caption": "Көзің жұмулы жеміс иіскеп көр.",
                "question": "Таптың ба?"
              },
              {
                "emoji": "👅",
                "caption": "Тәтті мен қышқылды дәмдеп көр.",
                "question": "Айырмасы неде?"
              }
            ]
          },
          "en": {
            "groupLabel": "Experiment in groups · 5 senses",
            "title": "Test your senses",
            "slides": [
              {
                "emoji": "👁️",
                "caption": "Close one eye and catch a ball.",
                "question": "Is it easy?"
              },
              {
                "emoji": "👃",
                "caption": "With eyes closed, smell a fruit.",
                "question": "Did you guess?"
              },
              {
                "emoji": "👅",
                "caption": "Taste sweet and sour.",
                "question": "What's different?"
              }
            ]
          }
        }
      },
      {
        "type": "fact",
        "data": {
          "ru": {
            "title": "Это интересно",
            "text": "Сердце человека за день качает кровь и совершает около 100 000 ударов!",
            "keywords": [
              "сердце",
              "удары"
            ],
            "icon": "bulb"
          },
          "kz": {
            "title": "Бұл қызық",
            "text": "Адамның жүрегі бір күнде шамамен 100 000 рет соғады!",
            "keywords": [
              "жүрек",
              "соғу"
            ],
            "icon": "bulb"
          },
          "en": {
            "title": "Did you know",
            "text": "The human heart beats about 100,000 times a day!",
            "keywords": [
              "heart",
              "beats"
            ],
            "icon": "bulb"
          }
        }
      }
    ]
  },

  12: {
    "intro": [
      {
        "type": "audio",
        "data": {
          "ru": {
            "title": "Аудио-гид к уроку",
            "text": "Чтобы быть здоровым, нужно правильно питаться, много двигаться и хорошо спать. Сегодня узнаем, как заботиться о своём теле.",
            "caption": "Послушай вступление к уроку",
            "durationLabel": "0:25"
          },
          "kz": {
            "title": "Сабақтың аудио-гиді",
            "text": "Сау болу үшін дұрыс тамақтану, көп қозғалу және жақсы ұйықтау қажет. Бүгін денеге қалай қамқорлық ету керектігін білеміз.",
            "caption": "Сабақтың кіріспесін тыңда",
            "durationLabel": "0:25"
          },
          "en": {
            "title": "Lesson audio guide",
            "text": "To stay healthy we need to eat right, move a lot and sleep well. Today we learn how to care for our body.",
            "caption": "Listen to the lesson intro",
            "durationLabel": "0:25"
          }
        }
      },
      {
        "type": "carousel",
        "data": {
          "ru": {
            "groupLabel": "Ключевые слова",
            "title": "Здоровье человека",
            "slides": [
              {
                "emoji": "🥦",
                "caption": "Питание",
                "question": "Что полезно есть?"
              },
              {
                "emoji": "🏃",
                "caption": "Движение",
                "question": "Любишь спорт?"
              },
              {
                "emoji": "😴",
                "caption": "Сон",
                "question": "Сколько часов ты спишь?"
              },
              {
                "emoji": "🧼",
                "caption": "Гигиена",
                "question": "Когда моешь руки?"
              }
            ]
          },
          "kz": {
            "groupLabel": "Кілт сөздер",
            "title": "Адам денсаулығы",
            "slides": [
              {
                "emoji": "🥦",
                "caption": "Тамақтану",
                "question": "Не пайдалы?"
              },
              {
                "emoji": "🏃",
                "caption": "Қозғалыс",
                "question": "Спортты ұнатасың ба?"
              },
              {
                "emoji": "😴",
                "caption": "Ұйқы",
                "question": "Қанша сағат ұйықтайсың?"
              },
              {
                "emoji": "🧼",
                "caption": "Гигиена",
                "question": "Қолыңды қашан жуасың?"
              }
            ]
          },
          "en": {
            "groupLabel": "Key words",
            "title": "Human health",
            "slides": [
              {
                "emoji": "🥦",
                "caption": "Nutrition",
                "question": "What is healthy to eat?"
              },
              {
                "emoji": "🏃",
                "caption": "Movement",
                "question": "Do you like sport?"
              },
              {
                "emoji": "😴",
                "caption": "Sleep",
                "question": "How many hours do you sleep?"
              },
              {
                "emoji": "🧼",
                "caption": "Hygiene",
                "question": "When do you wash hands?"
              }
            ]
          }
        }
      }
    ],
    "scientists": [
      {
        "type": "carousel",
        "data": {
          "ru": {
            "groupLabel": "1-я группа · работа в группах",
            "title": "Полезные привычки",
            "slides": [
              {
                "emoji": "🪥",
                "caption": "Чистим зубы 2 раза в день.",
                "question": "Когда чистишь зубы?"
              },
              {
                "emoji": "🍎",
                "caption": "Едим фрукты и овощи.",
                "question": "Любимый фрукт?"
              },
              {
                "emoji": "🚿",
                "caption": "Принимаем душ.",
                "question": "Сколько раз в неделю?"
              },
              {
                "emoji": "🚴",
                "caption": "Катаемся на велосипеде.",
                "question": "Куда бы поехал?"
              }
            ]
          },
          "kz": {
            "groupLabel": "1-топ · топтық жұмыс",
            "title": "Пайдалы әдеттер",
            "slides": [
              {
                "emoji": "🪥",
                "caption": "Күніне 2 рет тіс тазалаймыз.",
                "question": "Тісіңді қашан тазалайсың?"
              },
              {
                "emoji": "🍎",
                "caption": "Жеміс пен көкөніс жейміз.",
                "question": "Сүйікті жеміс?"
              },
              {
                "emoji": "🚿",
                "caption": "Душ қабылдаймыз.",
                "question": "Аптасына қанша рет?"
              },
              {
                "emoji": "🚴",
                "caption": "Велосипед тебеміз.",
                "question": "Қайда барар едің?"
              }
            ]
          },
          "en": {
            "groupLabel": "Group 1 · group work",
            "title": "Healthy habits",
            "slides": [
              {
                "emoji": "🪥",
                "caption": "Brush teeth twice a day.",
                "question": "When do you brush?"
              },
              {
                "emoji": "🍎",
                "caption": "Eat fruits and vegetables.",
                "question": "Favourite fruit?"
              },
              {
                "emoji": "🚿",
                "caption": "Take a shower.",
                "question": "How often weekly?"
              },
              {
                "emoji": "🚴",
                "caption": "Ride a bike.",
                "question": "Where would you go?"
              }
            ]
          }
        }
      },
      {
        "type": "reveal",
        "data": {
          "ru": {
            "title": "Работа в парах · что лишнее?",
            "question": "Найди привычку, которая вредит здоровью.",
            "items": [
              {
                "emoji": "🥕",
                "label": "морковь"
              },
              {
                "emoji": "🏊",
                "label": "плавание"
              },
              {
                "emoji": "🍭",
                "label": "много конфет"
              }
            ],
            "answer": "Лишнее — много сладкого. Это вредно для зубов и желудка.",
            "buttonLabel": "Проверить ответ"
          },
          "kz": {
            "title": "Жұптық жұмыс · артық қайсысы?",
            "question": "Денсаулыққа зиян әдетті тап.",
            "items": [
              {
                "emoji": "🥕",
                "label": "сәбіз"
              },
              {
                "emoji": "🏊",
                "label": "жүзу"
              },
              {
                "emoji": "🍭",
                "label": "көп кәмпит"
              }
            ],
            "answer": "Артығы — көп тәтті. Бұл тіс пен асқазанға зиян.",
            "buttonLabel": "Жауапты тексеру"
          },
          "en": {
            "title": "Pair work · what's extra?",
            "question": "Find the habit that hurts health.",
            "items": [
              {
                "emoji": "🥕",
                "label": "carrot"
              },
              {
                "emoji": "🏊",
                "label": "swimming"
              },
              {
                "emoji": "🍭",
                "label": "many sweets"
              }
            ],
            "answer": "The extra is too many sweets. Bad for teeth and stomach.",
            "buttonLabel": "Check answer"
          }
        }
      },
      {
        "type": "summary",
        "data": {
          "ru": {
            "title": "Запомни",
            "text": "**Питание**, **движение**, **сон** и **гигиена** — основа здоровья."
          },
          "kz": {
            "title": "Есте сақта",
            "text": "**Тамақтану**, **қозғалыс**, **ұйқы** және **гигиена** — денсаулық негізі."
          },
          "en": {
            "title": "Remember",
            "text": "**Nutrition**, **movement**, **sleep** and **hygiene** — basis of health."
          }
        }
      }
    ],
    "observation": [
      {
        "type": "zoom",
        "data": {
          "ru": {
            "title": "Индивидуально · тарелка здоровья",
            "instruction": "Рассмотри: какие продукты на тарелке полезные?",
            "images": [
              {
                "emoji": "🥗",
                "caption": "Полезная тарелка: овощи, рыба, крупы"
              },
              {
                "emoji": "🍔",
                "caption": "Фастфуд — иногда и немного"
              }
            ]
          },
          "kz": {
            "title": "Жеке · денсаулық тарелкасы",
            "instruction": "Қара: тарелкада қандай тағамдар пайдалы?",
            "images": [
              {
                "emoji": "🥗",
                "caption": "Пайдалы тарелка: көкөніс, балық, жармалар"
              },
              {
                "emoji": "🍔",
                "caption": "Фастфуд — кейде ғана"
              }
            ]
          },
          "en": {
            "title": "Individually · health plate",
            "instruction": "Look: which foods on the plate are healthy?",
            "images": [
              {
                "emoji": "🥗",
                "caption": "Healthy plate: veg, fish, grains"
              },
              {
                "emoji": "🍔",
                "caption": "Fast food — only sometimes"
              }
            ]
          }
        }
      },
      {
        "type": "sort",
        "data": {
          "ru": {
            "title": "Работа в группах · полезно / вредно",
            "instruction": "Распредели продукты на 2 группы.",
            "categories": [
              {
                "id": "good",
                "label": "Полезно",
                "emoji": "💚"
              },
              {
                "id": "bad",
                "label": "Вредно много",
                "emoji": "⚠️"
              }
            ],
            "items": [
              {
                "id": "a",
                "label": "яблоко",
                "emoji": "🍎",
                "categoryId": "good"
              },
              {
                "id": "b",
                "label": "молоко",
                "emoji": "🥛",
                "categoryId": "good"
              },
              {
                "id": "c",
                "label": "рыба",
                "emoji": "🐟",
                "categoryId": "good"
              },
              {
                "id": "d",
                "label": "чипсы",
                "emoji": "🍟",
                "categoryId": "bad"
              },
              {
                "id": "e",
                "label": "кола",
                "emoji": "🥤",
                "categoryId": "bad"
              },
              {
                "id": "f",
                "label": "торт",
                "emoji": "🍰",
                "categoryId": "bad"
              }
            ],
            "checkLabel": "Проверить"
          },
          "kz": {
            "title": "Топтық жұмыс · пайдалы / зиян",
            "instruction": "Тағамдарды 2 топқа бөл.",
            "categories": [
              {
                "id": "good",
                "label": "Пайдалы",
                "emoji": "💚"
              },
              {
                "id": "bad",
                "label": "Көп болса зиян",
                "emoji": "⚠️"
              }
            ],
            "items": [
              {
                "id": "a",
                "label": "алма",
                "emoji": "🍎",
                "categoryId": "good"
              },
              {
                "id": "b",
                "label": "сүт",
                "emoji": "🥛",
                "categoryId": "good"
              },
              {
                "id": "c",
                "label": "балық",
                "emoji": "🐟",
                "categoryId": "good"
              },
              {
                "id": "d",
                "label": "чипсы",
                "emoji": "🍟",
                "categoryId": "bad"
              },
              {
                "id": "e",
                "label": "кола",
                "emoji": "🥤",
                "categoryId": "bad"
              },
              {
                "id": "f",
                "label": "торт",
                "emoji": "🍰",
                "categoryId": "bad"
              }
            ],
            "checkLabel": "Тексеру"
          },
          "en": {
            "title": "Group work · healthy / harmful",
            "instruction": "Sort the foods into 2 groups.",
            "categories": [
              {
                "id": "good",
                "label": "Healthy",
                "emoji": "💚"
              },
              {
                "id": "bad",
                "label": "Harmful in excess",
                "emoji": "⚠️"
              }
            ],
            "items": [
              {
                "id": "a",
                "label": "apple",
                "emoji": "🍎",
                "categoryId": "good"
              },
              {
                "id": "b",
                "label": "milk",
                "emoji": "🥛",
                "categoryId": "good"
              },
              {
                "id": "c",
                "label": "fish",
                "emoji": "🐟",
                "categoryId": "good"
              },
              {
                "id": "d",
                "label": "chips",
                "emoji": "🍟",
                "categoryId": "bad"
              },
              {
                "id": "e",
                "label": "cola",
                "emoji": "🥤",
                "categoryId": "bad"
              },
              {
                "id": "f",
                "label": "cake",
                "emoji": "🍰",
                "categoryId": "bad"
              }
            ],
            "checkLabel": "Check"
          }
        }
      }
    ],
    "experiments": [
      {
        "type": "carousel",
        "data": {
          "ru": {
            "groupLabel": "Опыт в парах · режим дня",
            "title": "Мой день",
            "slides": [
              {
                "emoji": "🌅",
                "caption": "7:00 — подъём, зарядка.",
                "question": "А ты во сколько встаёшь?"
              },
              {
                "emoji": "🍳",
                "caption": "7:30 — завтрак.",
                "question": "Что любишь на завтрак?"
              },
              {
                "emoji": "📚",
                "caption": "8:30 — школа.",
                "question": "Любимый урок?"
              },
              {
                "emoji": "🛏️",
                "caption": "21:00 — сон.",
                "question": "Сколько часов спишь?"
              }
            ]
          },
          "kz": {
            "groupLabel": "Жұптық тәжірибе · күн тәртібі",
            "title": "Менің күнім",
            "slides": [
              {
                "emoji": "🌅",
                "caption": "7:00 — тұру, гимнастика.",
                "question": "Сен қашан тұрасың?"
              },
              {
                "emoji": "🍳",
                "caption": "7:30 — таңғы ас.",
                "question": "Таңғы асқа не ұнайды?"
              },
              {
                "emoji": "📚",
                "caption": "8:30 — мектеп.",
                "question": "Сүйікті сабақ?"
              },
              {
                "emoji": "🛏️",
                "caption": "21:00 — ұйқы.",
                "question": "Қанша сағат ұйықтайсың?"
              }
            ]
          },
          "en": {
            "groupLabel": "Pair experiment · daily routine",
            "title": "My day",
            "slides": [
              {
                "emoji": "🌅",
                "caption": "7:00 — wake up, exercise.",
                "question": "When do you wake up?"
              },
              {
                "emoji": "🍳",
                "caption": "7:30 — breakfast.",
                "question": "What for breakfast?"
              },
              {
                "emoji": "📚",
                "caption": "8:30 — school.",
                "question": "Favourite lesson?"
              },
              {
                "emoji": "🛏️",
                "caption": "21:00 — sleep.",
                "question": "How many hours?"
              }
            ]
          }
        }
      },
      {
        "type": "fact",
        "data": {
          "ru": {
            "title": "Это интересно",
            "text": "Дети 7 лет должны спать не меньше 10 часов, чтобы расти крепкими!",
            "keywords": [
              "сон",
              "рост"
            ],
            "icon": "bulb"
          },
          "kz": {
            "title": "Бұл қызық",
            "text": "7 жастағы балалар күшті өсу үшін кемінде 10 сағат ұйықтауы керек!",
            "keywords": [
              "ұйқы",
              "өсу"
            ],
            "icon": "bulb"
          },
          "en": {
            "title": "Did you know",
            "text": "7-year-olds need at least 10 hours of sleep to grow strong!",
            "keywords": [
              "sleep",
              "growth"
            ],
            "icon": "bulb"
          }
        }
      }
    ]
  },

  13: {
    "intro": [
      {
        "type": "audio",
        "data": {
          "ru": {
            "title": "Аудио-гид к уроку",
            "text": "Сегодня узнаем, что такое сила и движение. Когда мы толкаем мяч — он катится. Когда тянем санки — они едут.",
            "caption": "Послушай вступление к уроку",
            "durationLabel": "0:25"
          },
          "kz": {
            "title": "Сабақтың аудио-гиді",
            "text": "Бүгін күш пен қозғалыс деген не екенін білеміз. Допты итерсек — домалайды. Шананы тартсақ — жылжиды.",
            "caption": "Сабақтың кіріспесін тыңда",
            "durationLabel": "0:25"
          },
          "en": {
            "title": "Lesson audio guide",
            "text": "Today we learn what force and motion are. When we push a ball, it rolls. When we pull a sled, it moves.",
            "caption": "Listen to the lesson intro",
            "durationLabel": "0:25"
          }
        }
      },
      {
        "type": "carousel",
        "data": {
          "ru": {
            "groupLabel": "Ключевые слова",
            "title": "Сила и движение",
            "slides": [
              {
                "emoji": "💪",
                "caption": "Сила",
                "question": "Где видишь силу?"
              },
              {
                "emoji": "➡️",
                "caption": "Толкать",
                "question": "Что можно толкать?"
              },
              {
                "emoji": "⬅️",
                "caption": "Тянуть",
                "question": "Что мы тянем?"
              },
              {
                "emoji": "🏃",
                "caption": "Движение",
                "question": "Кто движется?"
              }
            ]
          },
          "kz": {
            "groupLabel": "Кілт сөздер",
            "title": "Күш пен қозғалыс",
            "slides": [
              {
                "emoji": "💪",
                "caption": "Күш",
                "question": "Күшті қайдан көресің?"
              },
              {
                "emoji": "➡️",
                "caption": "Итеру",
                "question": "Нені итеруге болады?"
              },
              {
                "emoji": "⬅️",
                "caption": "Тарту",
                "question": "Біз нені тартамыз?"
              },
              {
                "emoji": "🏃",
                "caption": "Қозғалыс",
                "question": "Кім қозғалады?"
              }
            ]
          },
          "en": {
            "groupLabel": "Key words",
            "title": "Force and motion",
            "slides": [
              {
                "emoji": "💪",
                "caption": "Force",
                "question": "Where do you see force?"
              },
              {
                "emoji": "➡️",
                "caption": "Push",
                "question": "What can be pushed?"
              },
              {
                "emoji": "⬅️",
                "caption": "Pull",
                "question": "What do we pull?"
              },
              {
                "emoji": "🏃",
                "caption": "Motion",
                "question": "Who is moving?"
              }
            ]
          }
        }
      }
    ],
    "scientists": [
      {
        "type": "carousel",
        "data": {
          "ru": {
            "groupLabel": "1-я группа · работа в группах",
            "title": "Толкаем или тянем?",
            "slides": [
              {
                "emoji": "🚪",
                "caption": "Дверь — толкаем от себя.",
                "question": "А открывая на себя?"
              },
              {
                "emoji": "🛒",
                "caption": "Тележку толкаем в магазине.",
                "question": "Тяжело с грузом?"
              },
              {
                "emoji": "🎈",
                "caption": "Воздушный шарик — тянем за нитку.",
                "question": "Куда летит шарик?"
              },
              {
                "emoji": "🛷",
                "caption": "Санки — тянем за верёвку.",
                "question": "Кто катался?"
              }
            ]
          },
          "kz": {
            "groupLabel": "1-топ · топтық жұмыс",
            "title": "Итереміз бе, тартамыз ба?",
            "slides": [
              {
                "emoji": "🚪",
                "caption": "Есік — өзімізден итереміз.",
                "question": "Өзіңе тартсаң ше?"
              },
              {
                "emoji": "🛒",
                "caption": "Дүкенде арбаны итереміз.",
                "question": "Жүкпен ауыр ма?"
              },
              {
                "emoji": "🎈",
                "caption": "Шарды жіптен тартамыз.",
                "question": "Шар қайда ұшады?"
              },
              {
                "emoji": "🛷",
                "caption": "Шананы арқанмен тартамыз.",
                "question": "Кім тебіндіңдер?"
              }
            ]
          },
          "en": {
            "groupLabel": "Group 1 · group work",
            "title": "Push or pull?",
            "slides": [
              {
                "emoji": "🚪",
                "caption": "Door — we push it.",
                "question": "And pulling toward you?"
              },
              {
                "emoji": "🛒",
                "caption": "We push a cart at the store.",
                "question": "Heavy when full?"
              },
              {
                "emoji": "🎈",
                "caption": "We pull a balloon by the string.",
                "question": "Where does it fly?"
              },
              {
                "emoji": "🛷",
                "caption": "We pull a sled by the rope.",
                "question": "Who rode it?"
              }
            ]
          }
        }
      },
      {
        "type": "reveal",
        "data": {
          "ru": {
            "title": "Работа в парах · сильнее тот, кто...",
            "question": "Кто в этих картинках применяет большую силу?",
            "items": [
              {
                "emoji": "🐜",
                "label": "муравей тащит листик"
              },
              {
                "emoji": "🐘",
                "label": "слон толкает бревно"
              },
              {
                "emoji": "👶",
                "label": "малыш катит мяч"
              }
            ],
            "answer": "Слон применяет самую большую силу — он самый сильный из них.",
            "buttonLabel": "Проверить ответ"
          },
          "kz": {
            "title": "Жұптық жұмыс · кім күшті...",
            "question": "Қай суретте үлкен күш жұмсалады?",
            "items": [
              {
                "emoji": "🐜",
                "label": "құмырсқа жапырақты сүйрейді"
              },
              {
                "emoji": "🐘",
                "label": "піл бөренені итереді"
              },
              {
                "emoji": "👶",
                "label": "бөбек допты домалатады"
              }
            ],
            "answer": "Піл ең үлкен күш жұмсайды — ол ең күшті.",
            "buttonLabel": "Жауапты тексеру"
          },
          "en": {
            "title": "Pair work · who is stronger...",
            "question": "Where is more force applied?",
            "items": [
              {
                "emoji": "🐜",
                "label": "ant carries leaf"
              },
              {
                "emoji": "🐘",
                "label": "elephant pushes log"
              },
              {
                "emoji": "👶",
                "label": "baby rolls ball"
              }
            ],
            "answer": "The elephant applies the most force — it is the strongest.",
            "buttonLabel": "Check answer"
          }
        }
      },
      {
        "type": "summary",
        "data": {
          "ru": {
            "title": "Запомни",
            "text": "**Сила** заставляет предметы двигаться. Мы можем **толкать** или **тянуть** их."
          },
          "kz": {
            "title": "Есте сақта",
            "text": "**Күш** заттарды қозғалысқа келтіреді. Біз оларды **итереміз** немесе **тартамыз**."
          },
          "en": {
            "title": "Remember",
            "text": "**Force** makes things move. We can **push** or **pull** them."
          }
        }
      }
    ],
    "observation": [
      {
        "type": "zoom",
        "data": {
          "ru": {
            "title": "Индивидуально · посмотри на стрелки",
            "instruction": "Куда направлена сила: к человеку или от него?",
            "images": [
              {
                "emoji": "➡️🚪",
                "caption": "Толчок — от человека"
              },
              {
                "emoji": "⬅️🛷",
                "caption": "Тяга — к человеку"
              }
            ]
          },
          "kz": {
            "title": "Жеке · бағыт көрсеткіштерін қара",
            "instruction": "Күш қайда бағытталған: адамға қарай ма, әлде одан әрі ме?",
            "images": [
              {
                "emoji": "➡️🚪",
                "caption": "Итеру — адамнан әрі"
              },
              {
                "emoji": "⬅️🛷",
                "caption": "Тарту — адамға қарай"
              }
            ]
          },
          "en": {
            "title": "Individually · look at the arrows",
            "instruction": "Where does the force point: toward or away?",
            "images": [
              {
                "emoji": "➡️🚪",
                "caption": "Push — away from person"
              },
              {
                "emoji": "⬅️🛷",
                "caption": "Pull — toward person"
              }
            ]
          }
        }
      },
      {
        "type": "sort",
        "data": {
          "ru": {
            "title": "Работа в группах · разложи действия",
            "instruction": "Это толчок или тяга?",
            "categories": [
              {
                "id": "push",
                "label": "Толкать ➡️",
                "emoji": "💪"
              },
              {
                "id": "pull",
                "label": "Тянуть ⬅️",
                "emoji": "🪢"
              }
            ],
            "items": [
              {
                "id": "a",
                "label": "закрыть дверь",
                "emoji": "🚪",
                "categoryId": "push"
              },
              {
                "id": "b",
                "label": "открыть ящик",
                "emoji": "📦",
                "categoryId": "pull"
              },
              {
                "id": "c",
                "label": "везти коляску",
                "emoji": "👶",
                "categoryId": "push"
              },
              {
                "id": "d",
                "label": "тащить чемодан",
                "emoji": "🧳",
                "categoryId": "pull"
              },
              {
                "id": "e",
                "label": "толкать мяч",
                "emoji": "⚽",
                "categoryId": "push"
              },
              {
                "id": "f",
                "label": "тянуть верёвку",
                "emoji": "🪢",
                "categoryId": "pull"
              }
            ],
            "checkLabel": "Проверить"
          },
          "kz": {
            "title": "Топтық жұмыс · әрекеттерді бөл",
            "instruction": "Бұл итеру ме, әлде тарту ма?",
            "categories": [
              {
                "id": "push",
                "label": "Итеру ➡️",
                "emoji": "💪"
              },
              {
                "id": "pull",
                "label": "Тарту ⬅️",
                "emoji": "🪢"
              }
            ],
            "items": [
              {
                "id": "a",
                "label": "есікті жабу",
                "emoji": "🚪",
                "categoryId": "push"
              },
              {
                "id": "b",
                "label": "жәшік ашу",
                "emoji": "📦",
                "categoryId": "pull"
              },
              {
                "id": "c",
                "label": "коляска жүргізу",
                "emoji": "👶",
                "categoryId": "push"
              },
              {
                "id": "d",
                "label": "чемодан сүйреу",
                "emoji": "🧳",
                "categoryId": "pull"
              },
              {
                "id": "e",
                "label": "допты итеру",
                "emoji": "⚽",
                "categoryId": "push"
              },
              {
                "id": "f",
                "label": "арқанды тарту",
                "emoji": "🪢",
                "categoryId": "pull"
              }
            ],
            "checkLabel": "Тексеру"
          },
          "en": {
            "title": "Group work · sort actions",
            "instruction": "Is it a push or a pull?",
            "categories": [
              {
                "id": "push",
                "label": "Push ➡️",
                "emoji": "💪"
              },
              {
                "id": "pull",
                "label": "Pull ⬅️",
                "emoji": "🪢"
              }
            ],
            "items": [
              {
                "id": "a",
                "label": "close door",
                "emoji": "🚪",
                "categoryId": "push"
              },
              {
                "id": "b",
                "label": "open drawer",
                "emoji": "📦",
                "categoryId": "pull"
              },
              {
                "id": "c",
                "label": "push stroller",
                "emoji": "👶",
                "categoryId": "push"
              },
              {
                "id": "d",
                "label": "drag suitcase",
                "emoji": "🧳",
                "categoryId": "pull"
              },
              {
                "id": "e",
                "label": "push ball",
                "emoji": "⚽",
                "categoryId": "push"
              },
              {
                "id": "f",
                "label": "pull rope",
                "emoji": "🪢",
                "categoryId": "pull"
              }
            ],
            "checkLabel": "Check"
          }
        }
      }
    ],
    "experiments": [
      {
        "type": "carousel",
        "data": {
          "ru": {
            "groupLabel": "Опыт в парах",
            "title": "Сильнее — дальше",
            "slides": [
              {
                "emoji": "🚗",
                "caption": "Толкни машинку слабо. Куда уехала?",
                "question": "А теперь сильно?"
              },
              {
                "emoji": "⚽",
                "caption": "Пни мяч слабо и сильно.",
                "question": "Что заметил?"
              },
              {
                "emoji": "📏",
                "caption": "Измерь линейкой расстояние.",
                "question": "Какая разница?"
              }
            ]
          },
          "kz": {
            "groupLabel": "Жұптық тәжірибе",
            "title": "Күштірек — алысырақ",
            "slides": [
              {
                "emoji": "🚗",
                "caption": "Машинаны әлсіз итер. Қайда барды?",
                "question": "Енді қаттырақ?"
              },
              {
                "emoji": "⚽",
                "caption": "Допты әлсіз және қатты тебіңіз.",
                "question": "Не байқадыңыз?"
              },
              {
                "emoji": "📏",
                "caption": "Сызғышпен қашықтықты өлше.",
                "question": "Айырмасы қандай?"
              }
            ]
          },
          "en": {
            "groupLabel": "Pair experiment",
            "title": "Stronger — further",
            "slides": [
              {
                "emoji": "🚗",
                "caption": "Push a toy car softly. How far?",
                "question": "Now hard?"
              },
              {
                "emoji": "⚽",
                "caption": "Kick the ball softly and hard.",
                "question": "What did you notice?"
              },
              {
                "emoji": "📏",
                "caption": "Measure distance with a ruler.",
                "question": "What's the difference?"
              }
            ]
          }
        }
      },
      {
        "type": "fact",
        "data": {
          "ru": {
            "title": "Это интересно",
            "text": "Без силы трения мы не смогли бы ходить — наши ноги скользили бы как по льду!",
            "keywords": [
              "трение",
              "сила"
            ],
            "icon": "bulb"
          },
          "kz": {
            "title": "Бұл қызық",
            "text": "Үйкеліс күшінсіз біз жүре алмас едік — аяқтарымыз мұздай тайғанақтар еді!",
            "keywords": [
              "үйкеліс",
              "күш"
            ],
            "icon": "bulb"
          },
          "en": {
            "title": "Did you know",
            "text": "Without friction we couldn't walk — our feet would slip like on ice!",
            "keywords": [
              "friction",
              "force"
            ],
            "icon": "bulb"
          }
        }
      }
    ]
  },

  14: {
    "intro": [
      {
        "type": "audio",
        "data": {
          "ru": {
            "title": "Аудио-гид к уроку",
            "text": "Все живые существа двигаются по-разному: птицы летают, рыбы плавают, звери бегают, змеи ползают.",
            "caption": "Послушай вступление к уроку",
            "durationLabel": "0:25"
          },
          "kz": {
            "title": "Сабақтың аудио-гиді",
            "text": "Барлық тірі ағзалар әртүрлі қозғалады: құстар ұшады, балықтар жүзеді, аңдар жүгіреді, жыландар жорғалайды.",
            "caption": "Сабақтың кіріспесін тыңда",
            "durationLabel": "0:25"
          },
          "en": {
            "title": "Lesson audio guide",
            "text": "All living things move differently: birds fly, fish swim, animals run, snakes crawl.",
            "caption": "Listen to the lesson intro",
            "durationLabel": "0:25"
          }
        }
      },
      {
        "type": "carousel",
        "data": {
          "ru": {
            "groupLabel": "Ключевые слова",
            "title": "Способы движения",
            "slides": [
              {
                "emoji": "🦅",
                "caption": "Летать",
                "question": "Кто умеет летать?"
              },
              {
                "emoji": "🐟",
                "caption": "Плавать",
                "question": "Где плавают рыбы?"
              },
              {
                "emoji": "🐆",
                "caption": "Бегать",
                "question": "Кто быстрее всех?"
              },
              {
                "emoji": "🐍",
                "caption": "Ползать",
                "question": "Без ног — как?"
              },
              {
                "emoji": "🦘",
                "caption": "Прыгать",
                "question": "Куда прыгает кенгуру?"
              }
            ]
          },
          "kz": {
            "groupLabel": "Кілт сөздер",
            "title": "Қозғалыс түрлері",
            "slides": [
              {
                "emoji": "🦅",
                "caption": "Ұшу",
                "question": "Кім ұша алады?"
              },
              {
                "emoji": "🐟",
                "caption": "Жүзу",
                "question": "Балықтар қайда жүзеді?"
              },
              {
                "emoji": "🐆",
                "caption": "Жүгіру",
                "question": "Ең жылдамы кім?"
              },
              {
                "emoji": "🐍",
                "caption": "Жорғалау",
                "question": "Аяқсыз қалай?"
              },
              {
                "emoji": "🦘",
                "caption": "Секіру",
                "question": "Кенгуру қайда секіреді?"
              }
            ]
          },
          "en": {
            "groupLabel": "Key words",
            "title": "Ways of moving",
            "slides": [
              {
                "emoji": "🦅",
                "caption": "Fly",
                "question": "Who can fly?"
              },
              {
                "emoji": "🐟",
                "caption": "Swim",
                "question": "Where do fish swim?"
              },
              {
                "emoji": "🐆",
                "caption": "Run",
                "question": "Who is fastest?"
              },
              {
                "emoji": "🐍",
                "caption": "Crawl",
                "question": "How without legs?"
              },
              {
                "emoji": "🦘",
                "caption": "Jump",
                "question": "Where does kangaroo hop?"
              }
            ]
          }
        }
      }
    ],
    "scientists": [
      {
        "type": "carousel",
        "data": {
          "ru": {
            "groupLabel": "1-я группа · работа в группах",
            "title": "Кто как двигается",
            "slides": [
              {
                "emoji": "🦋",
                "caption": "Бабочка летает крыльями.",
                "question": "Сколько крыльев?"
              },
              {
                "emoji": "🐬",
                "caption": "Дельфин плавает в море.",
                "question": "Чем плавает?"
              },
              {
                "emoji": "🐅",
                "caption": "Тигр бегает на четырёх лапах.",
                "question": "Тигр быстрый?"
              },
              {
                "emoji": "🐌",
                "caption": "Улитка медленно ползёт.",
                "question": "Почему медленно?"
              }
            ]
          },
          "kz": {
            "groupLabel": "1-топ · топтық жұмыс",
            "title": "Кім қалай қозғалады",
            "slides": [
              {
                "emoji": "🦋",
                "caption": "Көбелек қанатпен ұшады.",
                "question": "Қанша қанат?"
              },
              {
                "emoji": "🐬",
                "caption": "Дельфин теңізде жүзеді.",
                "question": "Немен жүзеді?"
              },
              {
                "emoji": "🐅",
                "caption": "Жолбарыс төрт аяқпен жүгіреді.",
                "question": "Жолбарыс жылдам ба?"
              },
              {
                "emoji": "🐌",
                "caption": "Ұлу баяу жорғалайды.",
                "question": "Неге баяу?"
              }
            ]
          },
          "en": {
            "groupLabel": "Group 1 · group work",
            "title": "Who moves how",
            "slides": [
              {
                "emoji": "🦋",
                "caption": "A butterfly flies with wings.",
                "question": "How many wings?"
              },
              {
                "emoji": "🐬",
                "caption": "A dolphin swims in the sea.",
                "question": "With what?"
              },
              {
                "emoji": "🐅",
                "caption": "A tiger runs on four paws.",
                "question": "Is tiger fast?"
              },
              {
                "emoji": "🐌",
                "caption": "A snail crawls slowly.",
                "question": "Why slow?"
              }
            ]
          }
        }
      },
      {
        "type": "reveal",
        "data": {
          "ru": {
            "title": "Работа в парах · подбери способ",
            "question": "Как двигается это животное?",
            "items": [
              {
                "emoji": "🐧",
                "label": "пингвин"
              },
              {
                "emoji": "🐇",
                "label": "заяц"
              },
              {
                "emoji": "🦈",
                "label": "акула"
              }
            ],
            "answer": "🐧 ходит и плавает; 🐇 прыгает и бегает; 🦈 плавает.",
            "buttonLabel": "Проверить ответ"
          },
          "kz": {
            "title": "Жұптық жұмыс · тәсілді тап",
            "question": "Бұл жануар қалай қозғалады?",
            "items": [
              {
                "emoji": "🐧",
                "label": "пингвин"
              },
              {
                "emoji": "🐇",
                "label": "қоян"
              },
              {
                "emoji": "🦈",
                "label": "акула"
              }
            ],
            "answer": "🐧 жүреді әрі жүзеді; 🐇 секіреді әрі жүгіреді; 🦈 жүзеді.",
            "buttonLabel": "Жауапты тексеру"
          },
          "en": {
            "title": "Pair work · match the way",
            "question": "How does this animal move?",
            "items": [
              {
                "emoji": "🐧",
                "label": "penguin"
              },
              {
                "emoji": "🐇",
                "label": "hare"
              },
              {
                "emoji": "🦈",
                "label": "shark"
              }
            ],
            "answer": "🐧 walks and swims; 🐇 hops and runs; 🦈 swims.",
            "buttonLabel": "Check answer"
          }
        }
      },
      {
        "type": "summary",
        "data": {
          "ru": {
            "title": "Запомни",
            "text": "Способы движения зависят от **строения тела** и **среды обитания**."
          },
          "kz": {
            "title": "Есте сақта",
            "text": "Қозғалыс тәсілі **дене құрылысына** және **мекен ортасына** байланысты."
          },
          "en": {
            "title": "Remember",
            "text": "Ways of moving depend on **body structure** and **habitat**."
          }
        }
      }
    ],
    "observation": [
      {
        "type": "zoom",
        "data": {
          "ru": {
            "title": "Индивидуально · крылья и ласты",
            "instruction": "Рассмотри: какая часть тела помогает двигаться?",
            "images": [
              {
                "emoji": "🪶",
                "caption": "Крылья — для полёта"
              },
              {
                "emoji": "🐠",
                "caption": "Плавники — для плавания"
              }
            ]
          },
          "kz": {
            "title": "Жеке · қанаттар мен қанатшалар",
            "instruction": "Қара: дене мүшесінің қайсысы қозғалуға көмектеседі?",
            "images": [
              {
                "emoji": "🪶",
                "caption": "Қанат — ұшу үшін"
              },
              {
                "emoji": "🐠",
                "caption": "Қанатша — жүзу үшін"
              }
            ]
          },
          "en": {
            "title": "Individually · wings and fins",
            "instruction": "Look: which body part helps move?",
            "images": [
              {
                "emoji": "🪶",
                "caption": "Wings — to fly"
              },
              {
                "emoji": "🐠",
                "caption": "Fins — to swim"
              }
            ]
          }
        }
      },
      {
        "type": "sort",
        "data": {
          "ru": {
            "title": "Работа в группах · по способу",
            "instruction": "Распредели животных по способу движения.",
            "categories": [
              {
                "id": "fly",
                "label": "Летает",
                "emoji": "🦅"
              },
              {
                "id": "swim",
                "label": "Плавает",
                "emoji": "🐟"
              },
              {
                "id": "run",
                "label": "Бегает",
                "emoji": "🦊"
              },
              {
                "id": "crawl",
                "label": "Ползает",
                "emoji": "🐛"
              }
            ],
            "items": [
              {
                "id": "a",
                "label": "воробей",
                "emoji": "🐦",
                "categoryId": "fly"
              },
              {
                "id": "b",
                "label": "щука",
                "emoji": "🐟",
                "categoryId": "swim"
              },
              {
                "id": "c",
                "label": "волк",
                "emoji": "🐺",
                "categoryId": "run"
              },
              {
                "id": "d",
                "label": "змея",
                "emoji": "🐍",
                "categoryId": "crawl"
              },
              {
                "id": "e",
                "label": "орёл",
                "emoji": "🦅",
                "categoryId": "fly"
              },
              {
                "id": "f",
                "label": "лошадь",
                "emoji": "🐎",
                "categoryId": "run"
              }
            ],
            "checkLabel": "Проверить"
          },
          "kz": {
            "title": "Топтық жұмыс · тәсілі бойынша",
            "instruction": "Жануарларды қозғалыс тәсіліне қарай бөл.",
            "categories": [
              {
                "id": "fly",
                "label": "Ұшады",
                "emoji": "🦅"
              },
              {
                "id": "swim",
                "label": "Жүзеді",
                "emoji": "🐟"
              },
              {
                "id": "run",
                "label": "Жүгіреді",
                "emoji": "🦊"
              },
              {
                "id": "crawl",
                "label": "Жорғалайды",
                "emoji": "🐛"
              }
            ],
            "items": [
              {
                "id": "a",
                "label": "торғай",
                "emoji": "🐦",
                "categoryId": "fly"
              },
              {
                "id": "b",
                "label": "шортан",
                "emoji": "🐟",
                "categoryId": "swim"
              },
              {
                "id": "c",
                "label": "қасқыр",
                "emoji": "🐺",
                "categoryId": "run"
              },
              {
                "id": "d",
                "label": "жылан",
                "emoji": "🐍",
                "categoryId": "crawl"
              },
              {
                "id": "e",
                "label": "бүркіт",
                "emoji": "🦅",
                "categoryId": "fly"
              },
              {
                "id": "f",
                "label": "жылқы",
                "emoji": "🐎",
                "categoryId": "run"
              }
            ],
            "checkLabel": "Тексеру"
          },
          "en": {
            "title": "Group work · by way of moving",
            "instruction": "Sort animals by way of motion.",
            "categories": [
              {
                "id": "fly",
                "label": "Flies",
                "emoji": "🦅"
              },
              {
                "id": "swim",
                "label": "Swims",
                "emoji": "🐟"
              },
              {
                "id": "run",
                "label": "Runs",
                "emoji": "🦊"
              },
              {
                "id": "crawl",
                "label": "Crawls",
                "emoji": "🐛"
              }
            ],
            "items": [
              {
                "id": "a",
                "label": "sparrow",
                "emoji": "🐦",
                "categoryId": "fly"
              },
              {
                "id": "b",
                "label": "pike",
                "emoji": "🐟",
                "categoryId": "swim"
              },
              {
                "id": "c",
                "label": "wolf",
                "emoji": "🐺",
                "categoryId": "run"
              },
              {
                "id": "d",
                "label": "snake",
                "emoji": "🐍",
                "categoryId": "crawl"
              },
              {
                "id": "e",
                "label": "eagle",
                "emoji": "🦅",
                "categoryId": "fly"
              },
              {
                "id": "f",
                "label": "horse",
                "emoji": "🐎",
                "categoryId": "run"
              }
            ],
            "checkLabel": "Check"
          }
        }
      }
    ],
    "experiments": [
      {
        "type": "carousel",
        "data": {
          "ru": {
            "groupLabel": "Опыт в парах · подражай животному",
            "title": "Покажи движение",
            "slides": [
              {
                "emoji": "🐰",
                "caption": "Прыгай как зайчик.",
                "question": "Долго получается?"
              },
              {
                "emoji": "🐍",
                "caption": "Поползи как змея на полу.",
                "question": "Удобно?"
              },
              {
                "emoji": "🦆",
                "caption": "Пройдись как утка.",
                "question": "Что удивило?"
              }
            ]
          },
          "kz": {
            "groupLabel": "Жұптық тәжірибе · еліктеп көр",
            "title": "Қозғалысты көрсет",
            "slides": [
              {
                "emoji": "🐰",
                "caption": "Қояндай секір.",
                "question": "Ұзақ шыдайсың ба?"
              },
              {
                "emoji": "🐍",
                "caption": "Еденде жыландай жорғала.",
                "question": "Ыңғайлы ма?"
              },
              {
                "emoji": "🦆",
                "caption": "Үйректей жүр.",
                "question": "Не таңғалдырды?"
              }
            ]
          },
          "en": {
            "groupLabel": "Pair experiment · mimic the animal",
            "title": "Show the motion",
            "slides": [
              {
                "emoji": "🐰",
                "caption": "Hop like a bunny.",
                "question": "Can you keep up?"
              },
              {
                "emoji": "🐍",
                "caption": "Crawl like a snake.",
                "question": "Comfortable?"
              },
              {
                "emoji": "🦆",
                "caption": "Walk like a duck.",
                "question": "What surprised you?"
              }
            ]
          }
        }
      },
      {
        "type": "fact",
        "data": {
          "ru": {
            "title": "Это интересно",
            "text": "Гепард — самое быстрое животное на земле, бегает до 120 км/ч!",
            "keywords": [
              "гепард",
              "скорость"
            ],
            "icon": "bulb"
          },
          "kz": {
            "title": "Бұл қызық",
            "text": "Гепард — жердегі ең жылдам жануар, сағатына 120 км-ге дейін жүгіреді!",
            "keywords": [
              "гепард",
              "жылдамдық"
            ],
            "icon": "bulb"
          },
          "en": {
            "title": "Did you know",
            "text": "The cheetah is the fastest land animal — up to 120 km/h!",
            "keywords": [
              "cheetah",
              "speed"
            ],
            "icon": "bulb"
          }
        }
      }
    ]
  },

  15: {
    "intro": [
      {
        "type": "audio",
        "data": {
          "ru": {
            "title": "Аудио-гид к уроку",
            "text": "Когда мяч летит — он оставляет невидимую линию в воздухе. Эта линия — траектория. Сегодня мы научимся её рисовать!",
            "caption": "Послушай вступление к уроку",
            "durationLabel": "0:25"
          },
          "kz": {
            "title": "Сабақтың аудио-гиді",
            "text": "Доп ұшқанда ауада көрінбейтін сызық қалдырады. Бұл сызық — траектория. Бүгін оны салуды үйренеміз!",
            "caption": "Сабақтың кіріспесін тыңда",
            "durationLabel": "0:25"
          },
          "en": {
            "title": "Lesson audio guide",
            "text": "When a ball flies, it leaves an invisible line in the air. That line is a trajectory. Today we learn to draw it!",
            "caption": "Listen to the lesson intro",
            "durationLabel": "0:25"
          }
        }
      },
      {
        "type": "carousel",
        "data": {
          "ru": {
            "groupLabel": "Ключевые слова",
            "title": "Виды траекторий",
            "slides": [
              {
                "emoji": "➡️",
                "caption": "Прямая",
                "question": "Что движется прямо?"
              },
              {
                "emoji": "〰️",
                "caption": "Кривая",
                "question": "А волной?"
              },
              {
                "emoji": "🔄",
                "caption": "Круговая",
                "question": "Что крутится?"
              },
              {
                "emoji": "📐",
                "caption": "Ломаная",
                "question": "Где видел зигзаг?"
              }
            ]
          },
          "kz": {
            "groupLabel": "Кілт сөздер",
            "title": "Траектория түрлері",
            "slides": [
              {
                "emoji": "➡️",
                "caption": "Түзу",
                "question": "Не түзу қозғалады?"
              },
              {
                "emoji": "〰️",
                "caption": "Иілген",
                "question": "Толқынмен ше?"
              },
              {
                "emoji": "🔄",
                "caption": "Шеңберлі",
                "question": "Не айналады?"
              },
              {
                "emoji": "📐",
                "caption": "Сынық",
                "question": "Зигзагты қайдан көрдің?"
              }
            ]
          },
          "en": {
            "groupLabel": "Key words",
            "title": "Types of trajectories",
            "slides": [
              {
                "emoji": "➡️",
                "caption": "Straight",
                "question": "What goes straight?"
              },
              {
                "emoji": "〰️",
                "caption": "Curved",
                "question": "What about a wave?"
              },
              {
                "emoji": "🔄",
                "caption": "Circular",
                "question": "What spins?"
              },
              {
                "emoji": "📐",
                "caption": "Zigzag",
                "question": "Where did you see zigzag?"
              }
            ]
          }
        }
      }
    ],
    "scientists": [
      {
        "type": "carousel",
        "data": {
          "ru": {
            "groupLabel": "1-я группа · работа в группах",
            "title": "Какая линия?",
            "slides": [
              {
                "emoji": "🚂➡️",
                "caption": "Поезд едет по прямым рельсам.",
                "question": "Это какая линия?"
              },
              {
                "emoji": "🎡",
                "caption": "Колесо обозрения крутится по кругу.",
                "question": "Куда возвращается?"
              },
              {
                "emoji": "🎢",
                "caption": "Американские горки — кривая.",
                "question": "Не страшно?"
              },
              {
                "emoji": "⚡",
                "caption": "Молния — ломаная.",
                "question": "Где её видел?"
              }
            ]
          },
          "kz": {
            "groupLabel": "1-топ · топтық жұмыс",
            "title": "Қандай сызық?",
            "slides": [
              {
                "emoji": "🚂➡️",
                "caption": "Пойыз түзу темір жолмен жүреді.",
                "question": "Бұл қандай сызық?"
              },
              {
                "emoji": "🎡",
                "caption": "Шарықшаң дөңгелек шеңбермен айналады.",
                "question": "Қайда қайтады?"
              },
              {
                "emoji": "🎢",
                "caption": "Американдық сырғанақ — иілген.",
                "question": "Қорықпайсың ба?"
              },
              {
                "emoji": "⚡",
                "caption": "Найзағай — сынық сызық.",
                "question": "Қайдан көрдің?"
              }
            ]
          },
          "en": {
            "groupLabel": "Group 1 · group work",
            "title": "Which line?",
            "slides": [
              {
                "emoji": "🚂➡️",
                "caption": "A train runs on straight rails.",
                "question": "What line is this?"
              },
              {
                "emoji": "🎡",
                "caption": "A Ferris wheel turns in a circle.",
                "question": "Where does it return?"
              },
              {
                "emoji": "🎢",
                "caption": "Roller coaster — curved.",
                "question": "Not scary?"
              },
              {
                "emoji": "⚡",
                "caption": "Lightning — zigzag.",
                "question": "Where did you see?"
              }
            ]
          }
        }
      },
      {
        "type": "reveal",
        "data": {
          "ru": {
            "title": "Работа в парах · мяч в воздухе",
            "question": "Какая траектория у мяча, который ты подбросил?",
            "items": [
              {
                "emoji": "⬆️",
                "label": "вверх"
              },
              {
                "emoji": "⬇️",
                "label": "вниз"
              },
              {
                "emoji": "🌈",
                "label": "дугой"
              }
            ],
            "answer": "Мяч летит по дуге — это кривая траектория!",
            "buttonLabel": "Проверить ответ"
          },
          "kz": {
            "title": "Жұптық жұмыс · ауадағы доп",
            "question": "Жоғары лақтырған доптың траекториясы қандай?",
            "items": [
              {
                "emoji": "⬆️",
                "label": "жоғары"
              },
              {
                "emoji": "⬇️",
                "label": "төмен"
              },
              {
                "emoji": "🌈",
                "label": "доғамен"
              }
            ],
            "answer": "Доп доғамен ұшады — бұл иілген траектория!",
            "buttonLabel": "Жауапты тексеру"
          },
          "en": {
            "title": "Pair work · ball in the air",
            "question": "What trajectory does a ball you tossed up have?",
            "items": [
              {
                "emoji": "⬆️",
                "label": "up"
              },
              {
                "emoji": "⬇️",
                "label": "down"
              },
              {
                "emoji": "🌈",
                "label": "arc"
              }
            ],
            "answer": "The ball flies in an arc — that's a curved trajectory!",
            "buttonLabel": "Check answer"
          }
        }
      },
      {
        "type": "summary",
        "data": {
          "ru": {
            "title": "Запомни",
            "text": "**Траектория** — линия, по которой движется тело. Бывает **прямой**, **кривой**, **круговой** и **ломаной**."
          },
          "kz": {
            "title": "Есте сақта",
            "text": "**Траектория** — дененің қозғалатын сызығы. Ол **түзу**, **иілген**, **шеңберлі** немесе **сынық** болады."
          },
          "en": {
            "title": "Remember",
            "text": "A **trajectory** is the line a body moves along. It can be **straight**, **curved**, **circular** or **zigzag**."
          }
        }
      }
    ],
    "observation": [
      {
        "type": "zoom",
        "data": {
          "ru": {
            "title": "Индивидуально · следы движения",
            "instruction": "Рассмотри следы. Какая это траектория?",
            "images": [
              {
                "emoji": "✈️➖",
                "caption": "Самолёт летит — прямая"
              },
              {
                "emoji": "🌀",
                "caption": "Вихрь — спираль (круговая)"
              }
            ]
          },
          "kz": {
            "title": "Жеке · қозғалыс іздері",
            "instruction": "Іздерді қара. Бұл қандай траектория?",
            "images": [
              {
                "emoji": "✈️➖",
                "caption": "Ұшақ ұшады — түзу"
              },
              {
                "emoji": "🌀",
                "caption": "Құйын — шеңберлі"
              }
            ]
          },
          "en": {
            "title": "Individually · motion traces",
            "instruction": "Look at the trails. What trajectory?",
            "images": [
              {
                "emoji": "✈️➖",
                "caption": "Plane flies — straight"
              },
              {
                "emoji": "🌀",
                "caption": "Whirlwind — spiral"
              }
            ]
          }
        }
      },
      {
        "type": "sort",
        "data": {
          "ru": {
            "title": "Работа в группах · сопоставь",
            "instruction": "Сопоставь предмет и форму его пути.",
            "categories": [
              {
                "id": "line",
                "label": "Прямая",
                "emoji": "➡️"
              },
              {
                "id": "curve",
                "label": "Кривая",
                "emoji": "〰️"
              },
              {
                "id": "circle",
                "label": "Круговая",
                "emoji": "🔄"
              }
            ],
            "items": [
              {
                "id": "a",
                "label": "стрела",
                "emoji": "🏹",
                "categoryId": "line"
              },
              {
                "id": "b",
                "label": "мяч в воздухе",
                "emoji": "⚽",
                "categoryId": "curve"
              },
              {
                "id": "c",
                "label": "карусель",
                "emoji": "🎠",
                "categoryId": "circle"
              },
              {
                "id": "d",
                "label": "стрелки часов",
                "emoji": "🕐",
                "categoryId": "circle"
              },
              {
                "id": "e",
                "label": "лыжник с горы",
                "emoji": "⛷️",
                "categoryId": "curve"
              }
            ],
            "checkLabel": "Проверить"
          },
          "kz": {
            "title": "Топтық жұмыс · сәйкестендір",
            "instruction": "Затты оның жол пішінімен сәйкестендір.",
            "categories": [
              {
                "id": "line",
                "label": "Түзу",
                "emoji": "➡️"
              },
              {
                "id": "curve",
                "label": "Иілген",
                "emoji": "〰️"
              },
              {
                "id": "circle",
                "label": "Шеңберлі",
                "emoji": "🔄"
              }
            ],
            "items": [
              {
                "id": "a",
                "label": "жебе",
                "emoji": "🏹",
                "categoryId": "line"
              },
              {
                "id": "b",
                "label": "ауадағы доп",
                "emoji": "⚽",
                "categoryId": "curve"
              },
              {
                "id": "c",
                "label": "карусель",
                "emoji": "🎠",
                "categoryId": "circle"
              },
              {
                "id": "d",
                "label": "сағат тілі",
                "emoji": "🕐",
                "categoryId": "circle"
              },
              {
                "id": "e",
                "label": "шаңғышы таудан",
                "emoji": "⛷️",
                "categoryId": "curve"
              }
            ],
            "checkLabel": "Тексеру"
          },
          "en": {
            "title": "Group work · match",
            "instruction": "Match an object with its path shape.",
            "categories": [
              {
                "id": "line",
                "label": "Straight",
                "emoji": "➡️"
              },
              {
                "id": "curve",
                "label": "Curved",
                "emoji": "〰️"
              },
              {
                "id": "circle",
                "label": "Circular",
                "emoji": "🔄"
              }
            ],
            "items": [
              {
                "id": "a",
                "label": "arrow",
                "emoji": "🏹",
                "categoryId": "line"
              },
              {
                "id": "b",
                "label": "ball in air",
                "emoji": "⚽",
                "categoryId": "curve"
              },
              {
                "id": "c",
                "label": "carousel",
                "emoji": "🎠",
                "categoryId": "circle"
              },
              {
                "id": "d",
                "label": "clock hands",
                "emoji": "🕐",
                "categoryId": "circle"
              },
              {
                "id": "e",
                "label": "skier downhill",
                "emoji": "⛷️",
                "categoryId": "curve"
              }
            ],
            "checkLabel": "Check"
          }
        }
      }
    ],
    "experiments": [
      {
        "type": "carousel",
        "data": {
          "ru": {
            "groupLabel": "Опыт в парах",
            "title": "Нарисуй траекторию",
            "slides": [
              {
                "emoji": "🪀",
                "caption": "Раскрути йо-йо. Какая линия?",
                "question": "Это круг?"
              },
              {
                "emoji": "🏀",
                "caption": "Брось мяч в кольцо.",
                "question": "Дугой?"
              },
              {
                "emoji": "🚗",
                "caption": "Кати машинку по линейке.",
                "question": "А прямая?"
              }
            ]
          },
          "kz": {
            "groupLabel": "Жұптық тәжірибе",
            "title": "Траектория сал",
            "slides": [
              {
                "emoji": "🪀",
                "caption": "Йо-йоны айналдыр. Сызық қандай?",
                "question": "Бұл шеңбер ме?"
              },
              {
                "emoji": "🏀",
                "caption": "Допты сақинаға лақтыр.",
                "question": "Доғамен бе?"
              },
              {
                "emoji": "🚗",
                "caption": "Машинаны сызғышпен жүргіз.",
                "question": "Түзу ме?"
              }
            ]
          },
          "en": {
            "groupLabel": "Pair experiment",
            "title": "Draw the trajectory",
            "slides": [
              {
                "emoji": "🪀",
                "caption": "Spin a yo-yo. What line?",
                "question": "Is it a circle?"
              },
              {
                "emoji": "🏀",
                "caption": "Throw a ball at the hoop.",
                "question": "In an arc?"
              },
              {
                "emoji": "🚗",
                "caption": "Roll a car along a ruler.",
                "question": "Straight line?"
              }
            ]
          }
        }
      },
      {
        "type": "fact",
        "data": {
          "ru": {
            "title": "Это интересно",
            "text": "Планета Земля движется вокруг Солнца по почти круговой траектории — её называют орбитой.",
            "keywords": [
              "Земля",
              "орбита"
            ],
            "icon": "bulb"
          },
          "kz": {
            "title": "Бұл қызық",
            "text": "Жер планетасы Күнді шамамен шеңберлі траекториямен айналады — оны орбита дейді.",
            "keywords": [
              "Жер",
              "орбита"
            ],
            "icon": "bulb"
          },
          "en": {
            "title": "Did you know",
            "text": "Earth moves around the Sun on a nearly circular trajectory called an orbit.",
            "keywords": [
              "Earth",
              "orbit"
            ],
            "icon": "bulb"
          }
        }
      }
    ]
  },

  16: {
    intro: [
      {
        type: "audio",
        data: {
          ru: {
            title: "Аудио-гид к уроку",
            text:
              "Сегодня мы узнаем, что животные бывают дикими и домашними, и в чём их главное отличие.",
            caption: "Послушай вступление к уроку",
            durationLabel: "0:22",
          },
          kz: {
            title: "Сабақтың аудио-гиді",
            text:
              "Бүгін біз жануарлардың жабайы және үй жануарлары болып бөлінетінін, олардың айырмашылығы неде екенін білеміз.",
            caption: "Сабақтың кіріспесін тыңда",
            durationLabel: "0:22",
          },
          en: {
            title: "Lesson audio guide",
            text:
              "Today we'll learn that animals can be wild or domestic, and what is the main difference between them.",
            caption: "Listen to the lesson intro",
            durationLabel: "0:22",
          },
        },
      },
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Ключевые слова",
            title: "Дикие и домашние",
            slides: [
              { emoji: "🏠", caption: "Домашние животные / Үй жануарлары / Domestic animals" },
              { emoji: "🌲", caption: "Дикие животные / Жабайы жануарлар / Wild animals" },
              { emoji: "🌍", caption: "Среда обитания / Мекен орта / Habitat" },
            ],
          },
          kz: {
            groupLabel: "Кілт сөздер",
            title: "Жабайы және үй",
            slides: [
              { emoji: "🏠", caption: "Үй жануарлары / Домашние / Domestic animals" },
              { emoji: "🌲", caption: "Жабайы жануарлар / Дикие / Wild animals" },
              { emoji: "🌍", caption: "Мекен орта / Среда обитания / Habitat" },
            ],
          },
          en: {
            groupLabel: "Key words",
            title: "Wild and domestic",
            slides: [
              { emoji: "🏠", caption: "Domestic animals / Домашние / Үй жануарлары" },
              { emoji: "🌲", caption: "Wild animals / Дикие / Жабайы жануарлар" },
              { emoji: "🌍", caption: "Habitat / Среда обитания / Мекен орта" },
            ],
          },
        },
      },
    ],

    // Домашние животные
    scientists: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Домашние животные",
            slides: [
              { emoji: "🐕", caption: "Собаки живут рядом с людьми — охраняют дом." },
              { emoji: "🐄", caption: "Корова на пастбище даёт молоко." },
              { emoji: "🐐", caption: "Коза у забора — даёт молоко и шерсть." },
              { emoji: "🐎", caption: "Лошадь с жеребёнком — помогает человеку." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Үй жануарлары",
            slides: [
              { emoji: "🐕", caption: "Иттер адаммен бірге тұрып, үйді күзетеді." },
              { emoji: "🐄", caption: "Жайылымдағы сиыр сүт береді." },
              { emoji: "🐐", caption: "Қоршау жанындағы ешкі — сүт пен жүн береді." },
              { emoji: "🐎", caption: "Жылқы құлынымен — адамға көмектеседі." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Domestic animals",
            slides: [
              { emoji: "🐕", caption: "Dogs live with people — they guard the house." },
              { emoji: "🐄", caption: "A cow on the pasture gives milk." },
              { emoji: "🐐", caption: "A goat by the fence gives milk and wool." },
              { emoji: "🐎", caption: "A mare with her foal — helps people." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Проверь себя",
            question:
              "Кто из этих животных — домашний? Подумай и проверь ответ.",
            items: [
              { emoji: "🐕", label: "собака" },
              { emoji: "🐄", label: "корова" },
              { emoji: "🐐", label: "коза" },
            ],
            answer:
              "Все трое — домашние животные. Они живут рядом с человеком, приносят пользу, а человек заботится о них.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Өзіңді тексер",
            question:
              "Бұлардың қайсысы үй жануары? Ойлан да жауапты тексер.",
            items: [
              { emoji: "🐕", label: "ит" },
              { emoji: "🐄", label: "сиыр" },
              { emoji: "🐐", label: "ешкі" },
            ],
            answer:
              "Үшеуі де үй жануарлары. Олар адамның жанында тұрады, пайда әкеледі, адам оларды күтеді.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Check yourself",
            question:
              "Which of these are domestic animals? Think, then check.",
            items: [
              { emoji: "🐕", label: "dog" },
              { emoji: "🐄", label: "cow" },
              { emoji: "🐐", label: "goat" },
            ],
            answer:
              "All three are domestic animals. They live near people, are useful, and people take care of them.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Домашние** животные живут рядом с человеком, приносят **пользу**, а человек **заботится** о них.",
            terms: ["домашние", "пользу", "заботится"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Үй** жануарлары адамның жанында тұрады, **пайда** әкеледі, адам олар туралы **қамқорлық** жасайды.",
            terms: ["үй", "пайда", "қамқорлық"],
          },
          en: {
            title: "What I learned",
            text:
              "**Domestic** animals live near people, bring **benefit**, and people **take care** of them.",
            terms: ["domestic", "benefit", "take care"],
          },
        },
      },
    ],

    // Дикие животные
    observation: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Дикие животные",
            slides: [
              { emoji: "🐘", caption: "Слон живёт в жарких странах." },
              { emoji: "🦧", caption: "Орангутан живёт в тропических лесах." },
              { emoji: "🦅", caption: "Беркут парит над горами." },
              { emoji: "🦌", caption: "Сайгак бегает по степям Казахстана." },
              { emoji: "🐱", caption: "Рысь живёт в густых лесах." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Жабайы жануарлар",
            slides: [
              { emoji: "🐘", caption: "Піл ыстық елдерде тұрады." },
              { emoji: "🦧", caption: "Орангутан тропиктік ормандарда тұрады." },
              { emoji: "🦅", caption: "Бүркіт таулардың үстінде қалықтайды." },
              { emoji: "🦌", caption: "Киік Қазақстан даласында жүгіреді." },
              { emoji: "🐱", caption: "Сілеусін қалың орманда тұрады." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Wild animals",
            slides: [
              { emoji: "🐘", caption: "An elephant lives in hot countries." },
              { emoji: "🦧", caption: "An orangutan lives in tropical forests." },
              { emoji: "🦅", caption: "A golden eagle soars above the mountains." },
              { emoji: "🦌", caption: "A saiga runs across the steppes of Kazakhstan." },
              { emoji: "🐱", caption: "A lynx lives in dense forests." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Где они обитают?",
            question:
              "К какой группе относятся эти животные? Где они обитают?",
            items: [
              { emoji: "🐘", label: "слон" },
              { emoji: "🦅", label: "беркут" },
              { emoji: "🦌", label: "сайгак" },
            ],
            answer:
              "Все они — дикие животные. Слон живёт в саваннах, беркут — в горах, сайгак — в степях. Они сами добывают пищу.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Олар қайда тұрады?",
            question:
              "Бұл жануарлар қай топқа жатады? Олар қайда тұрады?",
            items: [
              { emoji: "🐘", label: "піл" },
              { emoji: "🦅", label: "бүркіт" },
              { emoji: "🦌", label: "киік" },
            ],
            answer:
              "Олардың барлығы — жабайы жануарлар. Піл саваннада, бүркіт тауда, киік далада тұрады. Олар тамағын өздері табады.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Where do they live?",
            question:
              "What group do these animals belong to? Where do they live?",
            items: [
              { emoji: "🐘", label: "elephant" },
              { emoji: "🦅", label: "eagle" },
              { emoji: "🦌", label: "saiga" },
            ],
            answer:
              "They are all wild animals. The elephant lives in savannas, the eagle in the mountains, the saiga in the steppes. They find food on their own.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Дикие** животные живут в **лесах**, **степях** и **горах**. Они сами добывают пищу и находят жильё.",
            terms: ["дикие", "лесах", "степях", "горах"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Жабайы** жануарлар **ормандарда**, **далада** және **тауларда** тұрады. Олар тамағын өздері табады, паналайтын жерін өздері іздейді.",
            terms: ["жабайы", "ормандарда", "далада", "тауларда"],
          },
          en: {
            title: "What I learned",
            text:
              "**Wild** animals live in **forests**, **steppes** and **mountains**. They find food and shelter on their own.",
            terms: ["wild", "forests", "steppes", "mountains"],
          },
        },
      },
      {
        type: "sort",
        data: {
          ru: {
            title: "Где обитают эти животные?",
            instruction:
              "Распредели животных по среде обитания.",
            categories: [
              { id: "land", label: "На земле / в лесу", emoji: "🌳" },
              { id: "water", label: "В воде", emoji: "🌊" },
              { id: "mount", label: "В горах", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "корова", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "заяц", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "лиса", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "архар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Проверить",
          },
          kz: {
            title: "Бұл жануарлар қайда тұрады?",
            instruction:
              "Жануарларды мекен ортасы бойынша бөл.",
            categories: [
              { id: "land", label: "Жерде / орманда", emoji: "🌳" },
              { id: "water", label: "Суда", emoji: "🌊" },
              { id: "mount", label: "Тауда", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "сиыр", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "қоян", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "түлкі", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "арқар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Тексеру",
          },
          en: {
            title: "Where do these animals live?",
            instruction:
              "Sort the animals by their habitat.",
            categories: [
              { id: "land", label: "On land / in forest", emoji: "🌳" },
              { id: "water", label: "In water", emoji: "🌊" },
              { id: "mount", label: "In mountains", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "cow", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "hare", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "fox", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "dolphin", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "argali", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Check",
          },
        },
      },
    ],

    // Итоги
    experiments: [
      {
        type: "fact",
        data: {
          ru: {
            title: "Найди в энциклопедии",
            text:
              "Узнай, какие редкие дикие животные живут в Казахстане. Запиши 3 примера и где они обитают.",
            keywords: ["энциклопедия", "Казахстан", "редкие"],
            icon: "sparkles",
          },
          kz: {
            title: "Энциклопедиядан тап",
            text:
              "Қазақстанда қандай сирек кездесетін жабайы жануарлар бар? 3 мысал жазып, қайда тұратынын көрсет.",
            keywords: ["энциклопедия", "Қазақстан", "сирек"],
            icon: "sparkles",
          },
          en: {
            title: "Find in the encyclopedia",
            text:
              "Find out which rare wild animals live in Kazakhstan. Write down 3 examples and where they live.",
            keywords: ["encyclopedia", "Kazakhstan", "rare"],
            icon: "sparkles",
          },
        },
      },
      {
        type: "fact",
        data: {
          ru: {
            title: "Это интересно!",
            text:
              "У молодых пингвинов хвост похож на белый мех. Это помогает их мамам быстро находить своих птенцов в большой стае.",
            keywords: ["пингвины", "хвост", "мех"],
            icon: "bulb",
          },
          kz: {
            title: "Бұл қызық!",
            text:
              "Жас пингвиндердің құйрығы ақ жүнге ұқсайды. Бұл аналарына үлкен топтан өз балапандарын тез табуға көмектеседі.",
            keywords: ["пингвин", "құйрық", "жүн"],
            icon: "bulb",
          },
          en: {
            title: "Did you know?",
            text:
              "Young penguins have tails that look like white fur. It helps their mothers quickly find their chicks in a large flock.",
            keywords: ["penguins", "tail", "fur"],
            icon: "bulb",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Итоговые вопросы",
            text:
              "1) Чем **дикие** животные отличаются от **домашних**? 2) Почему человек должен **заботиться** о домашних животных?",
          },
          kz: {
            title: "Қорытынды сұрақтар",
            text:
              "1) **Жабайы** жануарлар **үй** жануарларынан немен ерекшеленеді? 2) Адам үй жануарларына неліктен **қамқорлық** жасауы керек?",
          },
          en: {
            title: "Wrap-up questions",
            text:
              "1) How do **wild** animals differ from **domestic** ones? 2) Why should people **take care** of domestic animals?",
          },
        },
      },
    ],
  },
  17: {
    intro: [
      {
        type: "audio",
        data: {
          ru: {
            title: "Аудио-гид к уроку",
            text:
              "Сегодня мы узнаем, что животные бывают дикими и домашними, и в чём их главное отличие.",
            caption: "Послушай вступление к уроку",
            durationLabel: "0:22",
          },
          kz: {
            title: "Сабақтың аудио-гиді",
            text:
              "Бүгін біз жануарлардың жабайы және үй жануарлары болып бөлінетінін, олардың айырмашылығы неде екенін білеміз.",
            caption: "Сабақтың кіріспесін тыңда",
            durationLabel: "0:22",
          },
          en: {
            title: "Lesson audio guide",
            text:
              "Today we'll learn that animals can be wild or domestic, and what is the main difference between them.",
            caption: "Listen to the lesson intro",
            durationLabel: "0:22",
          },
        },
      },
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Ключевые слова",
            title: "Дикие и домашние",
            slides: [
              { emoji: "🏠", caption: "Домашние животные / Үй жануарлары / Domestic animals" },
              { emoji: "🌲", caption: "Дикие животные / Жабайы жануарлар / Wild animals" },
              { emoji: "🌍", caption: "Среда обитания / Мекен орта / Habitat" },
            ],
          },
          kz: {
            groupLabel: "Кілт сөздер",
            title: "Жабайы және үй",
            slides: [
              { emoji: "🏠", caption: "Үй жануарлары / Домашние / Domestic animals" },
              { emoji: "🌲", caption: "Жабайы жануарлар / Дикие / Wild animals" },
              { emoji: "🌍", caption: "Мекен орта / Среда обитания / Habitat" },
            ],
          },
          en: {
            groupLabel: "Key words",
            title: "Wild and domestic",
            slides: [
              { emoji: "🏠", caption: "Domestic animals / Домашние / Үй жануарлары" },
              { emoji: "🌲", caption: "Wild animals / Дикие / Жабайы жануарлар" },
              { emoji: "🌍", caption: "Habitat / Среда обитания / Мекен орта" },
            ],
          },
        },
      },
    ],

    // Домашние животные
    scientists: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Домашние животные",
            slides: [
              { emoji: "🐕", caption: "Собаки живут рядом с людьми — охраняют дом." },
              { emoji: "🐄", caption: "Корова на пастбище даёт молоко." },
              { emoji: "🐐", caption: "Коза у забора — даёт молоко и шерсть." },
              { emoji: "🐎", caption: "Лошадь с жеребёнком — помогает человеку." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Үй жануарлары",
            slides: [
              { emoji: "🐕", caption: "Иттер адаммен бірге тұрып, үйді күзетеді." },
              { emoji: "🐄", caption: "Жайылымдағы сиыр сүт береді." },
              { emoji: "🐐", caption: "Қоршау жанындағы ешкі — сүт пен жүн береді." },
              { emoji: "🐎", caption: "Жылқы құлынымен — адамға көмектеседі." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Domestic animals",
            slides: [
              { emoji: "🐕", caption: "Dogs live with people — they guard the house." },
              { emoji: "🐄", caption: "A cow on the pasture gives milk." },
              { emoji: "🐐", caption: "A goat by the fence gives milk and wool." },
              { emoji: "🐎", caption: "A mare with her foal — helps people." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Проверь себя",
            question:
              "Кто из этих животных — домашний? Подумай и проверь ответ.",
            items: [
              { emoji: "🐕", label: "собака" },
              { emoji: "🐄", label: "корова" },
              { emoji: "🐐", label: "коза" },
            ],
            answer:
              "Все трое — домашние животные. Они живут рядом с человеком, приносят пользу, а человек заботится о них.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Өзіңді тексер",
            question:
              "Бұлардың қайсысы үй жануары? Ойлан да жауапты тексер.",
            items: [
              { emoji: "🐕", label: "ит" },
              { emoji: "🐄", label: "сиыр" },
              { emoji: "🐐", label: "ешкі" },
            ],
            answer:
              "Үшеуі де үй жануарлары. Олар адамның жанында тұрады, пайда әкеледі, адам оларды күтеді.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Check yourself",
            question:
              "Which of these are domestic animals? Think, then check.",
            items: [
              { emoji: "🐕", label: "dog" },
              { emoji: "🐄", label: "cow" },
              { emoji: "🐐", label: "goat" },
            ],
            answer:
              "All three are domestic animals. They live near people, are useful, and people take care of them.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Домашние** животные живут рядом с человеком, приносят **пользу**, а человек **заботится** о них.",
            terms: ["домашние", "пользу", "заботится"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Үй** жануарлары адамның жанында тұрады, **пайда** әкеледі, адам олар туралы **қамқорлық** жасайды.",
            terms: ["үй", "пайда", "қамқорлық"],
          },
          en: {
            title: "What I learned",
            text:
              "**Domestic** animals live near people, bring **benefit**, and people **take care** of them.",
            terms: ["domestic", "benefit", "take care"],
          },
        },
      },
    ],

    // Дикие животные
    observation: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Дикие животные",
            slides: [
              { emoji: "🐘", caption: "Слон живёт в жарких странах." },
              { emoji: "🦧", caption: "Орангутан живёт в тропических лесах." },
              { emoji: "🦅", caption: "Беркут парит над горами." },
              { emoji: "🦌", caption: "Сайгак бегает по степям Казахстана." },
              { emoji: "🐱", caption: "Рысь живёт в густых лесах." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Жабайы жануарлар",
            slides: [
              { emoji: "🐘", caption: "Піл ыстық елдерде тұрады." },
              { emoji: "🦧", caption: "Орангутан тропиктік ормандарда тұрады." },
              { emoji: "🦅", caption: "Бүркіт таулардың үстінде қалықтайды." },
              { emoji: "🦌", caption: "Киік Қазақстан даласында жүгіреді." },
              { emoji: "🐱", caption: "Сілеусін қалың орманда тұрады." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Wild animals",
            slides: [
              { emoji: "🐘", caption: "An elephant lives in hot countries." },
              { emoji: "🦧", caption: "An orangutan lives in tropical forests." },
              { emoji: "🦅", caption: "A golden eagle soars above the mountains." },
              { emoji: "🦌", caption: "A saiga runs across the steppes of Kazakhstan." },
              { emoji: "🐱", caption: "A lynx lives in dense forests." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Где они обитают?",
            question:
              "К какой группе относятся эти животные? Где они обитают?",
            items: [
              { emoji: "🐘", label: "слон" },
              { emoji: "🦅", label: "беркут" },
              { emoji: "🦌", label: "сайгак" },
            ],
            answer:
              "Все они — дикие животные. Слон живёт в саваннах, беркут — в горах, сайгак — в степях. Они сами добывают пищу.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Олар қайда тұрады?",
            question:
              "Бұл жануарлар қай топқа жатады? Олар қайда тұрады?",
            items: [
              { emoji: "🐘", label: "піл" },
              { emoji: "🦅", label: "бүркіт" },
              { emoji: "🦌", label: "киік" },
            ],
            answer:
              "Олардың барлығы — жабайы жануарлар. Піл саваннада, бүркіт тауда, киік далада тұрады. Олар тамағын өздері табады.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Where do they live?",
            question:
              "What group do these animals belong to? Where do they live?",
            items: [
              { emoji: "🐘", label: "elephant" },
              { emoji: "🦅", label: "eagle" },
              { emoji: "🦌", label: "saiga" },
            ],
            answer:
              "They are all wild animals. The elephant lives in savannas, the eagle in the mountains, the saiga in the steppes. They find food on their own.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Дикие** животные живут в **лесах**, **степях** и **горах**. Они сами добывают пищу и находят жильё.",
            terms: ["дикие", "лесах", "степях", "горах"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Жабайы** жануарлар **ормандарда**, **далада** және **тауларда** тұрады. Олар тамағын өздері табады, паналайтын жерін өздері іздейді.",
            terms: ["жабайы", "ормандарда", "далада", "тауларда"],
          },
          en: {
            title: "What I learned",
            text:
              "**Wild** animals live in **forests**, **steppes** and **mountains**. They find food and shelter on their own.",
            terms: ["wild", "forests", "steppes", "mountains"],
          },
        },
      },
      {
        type: "sort",
        data: {
          ru: {
            title: "Где обитают эти животные?",
            instruction:
              "Распредели животных по среде обитания.",
            categories: [
              { id: "land", label: "На земле / в лесу", emoji: "🌳" },
              { id: "water", label: "В воде", emoji: "🌊" },
              { id: "mount", label: "В горах", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "корова", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "заяц", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "лиса", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "архар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Проверить",
          },
          kz: {
            title: "Бұл жануарлар қайда тұрады?",
            instruction:
              "Жануарларды мекен ортасы бойынша бөл.",
            categories: [
              { id: "land", label: "Жерде / орманда", emoji: "🌳" },
              { id: "water", label: "Суда", emoji: "🌊" },
              { id: "mount", label: "Тауда", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "сиыр", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "қоян", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "түлкі", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "арқар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Тексеру",
          },
          en: {
            title: "Where do these animals live?",
            instruction:
              "Sort the animals by their habitat.",
            categories: [
              { id: "land", label: "On land / in forest", emoji: "🌳" },
              { id: "water", label: "In water", emoji: "🌊" },
              { id: "mount", label: "In mountains", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "cow", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "hare", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "fox", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "dolphin", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "argali", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Check",
          },
        },
      },
    ],

    // Итоги
    experiments: [
      {
        type: "fact",
        data: {
          ru: {
            title: "Найди в энциклопедии",
            text:
              "Узнай, какие редкие дикие животные живут в Казахстане. Запиши 3 примера и где они обитают.",
            keywords: ["энциклопедия", "Казахстан", "редкие"],
            icon: "sparkles",
          },
          kz: {
            title: "Энциклопедиядан тап",
            text:
              "Қазақстанда қандай сирек кездесетін жабайы жануарлар бар? 3 мысал жазып, қайда тұратынын көрсет.",
            keywords: ["энциклопедия", "Қазақстан", "сирек"],
            icon: "sparkles",
          },
          en: {
            title: "Find in the encyclopedia",
            text:
              "Find out which rare wild animals live in Kazakhstan. Write down 3 examples and where they live.",
            keywords: ["encyclopedia", "Kazakhstan", "rare"],
            icon: "sparkles",
          },
        },
      },
      {
        type: "fact",
        data: {
          ru: {
            title: "Это интересно!",
            text:
              "У молодых пингвинов хвост похож на белый мех. Это помогает их мамам быстро находить своих птенцов в большой стае.",
            keywords: ["пингвины", "хвост", "мех"],
            icon: "bulb",
          },
          kz: {
            title: "Бұл қызық!",
            text:
              "Жас пингвиндердің құйрығы ақ жүнге ұқсайды. Бұл аналарына үлкен топтан өз балапандарын тез табуға көмектеседі.",
            keywords: ["пингвин", "құйрық", "жүн"],
            icon: "bulb",
          },
          en: {
            title: "Did you know?",
            text:
              "Young penguins have tails that look like white fur. It helps their mothers quickly find their chicks in a large flock.",
            keywords: ["penguins", "tail", "fur"],
            icon: "bulb",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Итоговые вопросы",
            text:
              "1) Чем **дикие** животные отличаются от **домашних**? 2) Почему человек должен **заботиться** о домашних животных?",
          },
          kz: {
            title: "Қорытынды сұрақтар",
            text:
              "1) **Жабайы** жануарлар **үй** жануарларынан немен ерекшеленеді? 2) Адам үй жануарларына неліктен **қамқорлық** жасауы керек?",
          },
          en: {
            title: "Wrap-up questions",
            text:
              "1) How do **wild** animals differ from **domestic** ones? 2) Why should people **take care** of domestic animals?",
          },
        },
      },
    ],
  },
  18: {
    intro: [
      {
        type: "audio",
        data: {
          ru: {
            title: "Аудио-гид к уроку",
            text:
              "Сегодня мы узнаем, что животные бывают дикими и домашними, и в чём их главное отличие.",
            caption: "Послушай вступление к уроку",
            durationLabel: "0:22",
          },
          kz: {
            title: "Сабақтың аудио-гиді",
            text:
              "Бүгін біз жануарлардың жабайы және үй жануарлары болып бөлінетінін, олардың айырмашылығы неде екенін білеміз.",
            caption: "Сабақтың кіріспесін тыңда",
            durationLabel: "0:22",
          },
          en: {
            title: "Lesson audio guide",
            text:
              "Today we'll learn that animals can be wild or domestic, and what is the main difference between them.",
            caption: "Listen to the lesson intro",
            durationLabel: "0:22",
          },
        },
      },
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Ключевые слова",
            title: "Дикие и домашние",
            slides: [
              { emoji: "🏠", caption: "Домашние животные / Үй жануарлары / Domestic animals" },
              { emoji: "🌲", caption: "Дикие животные / Жабайы жануарлар / Wild animals" },
              { emoji: "🌍", caption: "Среда обитания / Мекен орта / Habitat" },
            ],
          },
          kz: {
            groupLabel: "Кілт сөздер",
            title: "Жабайы және үй",
            slides: [
              { emoji: "🏠", caption: "Үй жануарлары / Домашние / Domestic animals" },
              { emoji: "🌲", caption: "Жабайы жануарлар / Дикие / Wild animals" },
              { emoji: "🌍", caption: "Мекен орта / Среда обитания / Habitat" },
            ],
          },
          en: {
            groupLabel: "Key words",
            title: "Wild and domestic",
            slides: [
              { emoji: "🏠", caption: "Domestic animals / Домашние / Үй жануарлары" },
              { emoji: "🌲", caption: "Wild animals / Дикие / Жабайы жануарлар" },
              { emoji: "🌍", caption: "Habitat / Среда обитания / Мекен орта" },
            ],
          },
        },
      },
    ],

    // Домашние животные
    scientists: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Домашние животные",
            slides: [
              { emoji: "🐕", caption: "Собаки живут рядом с людьми — охраняют дом." },
              { emoji: "🐄", caption: "Корова на пастбище даёт молоко." },
              { emoji: "🐐", caption: "Коза у забора — даёт молоко и шерсть." },
              { emoji: "🐎", caption: "Лошадь с жеребёнком — помогает человеку." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Үй жануарлары",
            slides: [
              { emoji: "🐕", caption: "Иттер адаммен бірге тұрып, үйді күзетеді." },
              { emoji: "🐄", caption: "Жайылымдағы сиыр сүт береді." },
              { emoji: "🐐", caption: "Қоршау жанындағы ешкі — сүт пен жүн береді." },
              { emoji: "🐎", caption: "Жылқы құлынымен — адамға көмектеседі." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Domestic animals",
            slides: [
              { emoji: "🐕", caption: "Dogs live with people — they guard the house." },
              { emoji: "🐄", caption: "A cow on the pasture gives milk." },
              { emoji: "🐐", caption: "A goat by the fence gives milk and wool." },
              { emoji: "🐎", caption: "A mare with her foal — helps people." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Проверь себя",
            question:
              "Кто из этих животных — домашний? Подумай и проверь ответ.",
            items: [
              { emoji: "🐕", label: "собака" },
              { emoji: "🐄", label: "корова" },
              { emoji: "🐐", label: "коза" },
            ],
            answer:
              "Все трое — домашние животные. Они живут рядом с человеком, приносят пользу, а человек заботится о них.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Өзіңді тексер",
            question:
              "Бұлардың қайсысы үй жануары? Ойлан да жауапты тексер.",
            items: [
              { emoji: "🐕", label: "ит" },
              { emoji: "🐄", label: "сиыр" },
              { emoji: "🐐", label: "ешкі" },
            ],
            answer:
              "Үшеуі де үй жануарлары. Олар адамның жанында тұрады, пайда әкеледі, адам оларды күтеді.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Check yourself",
            question:
              "Which of these are domestic animals? Think, then check.",
            items: [
              { emoji: "🐕", label: "dog" },
              { emoji: "🐄", label: "cow" },
              { emoji: "🐐", label: "goat" },
            ],
            answer:
              "All three are domestic animals. They live near people, are useful, and people take care of them.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Домашние** животные живут рядом с человеком, приносят **пользу**, а человек **заботится** о них.",
            terms: ["домашние", "пользу", "заботится"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Үй** жануарлары адамның жанында тұрады, **пайда** әкеледі, адам олар туралы **қамқорлық** жасайды.",
            terms: ["үй", "пайда", "қамқорлық"],
          },
          en: {
            title: "What I learned",
            text:
              "**Domestic** animals live near people, bring **benefit**, and people **take care** of them.",
            terms: ["domestic", "benefit", "take care"],
          },
        },
      },
    ],

    // Дикие животные
    observation: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Дикие животные",
            slides: [
              { emoji: "🐘", caption: "Слон живёт в жарких странах." },
              { emoji: "🦧", caption: "Орангутан живёт в тропических лесах." },
              { emoji: "🦅", caption: "Беркут парит над горами." },
              { emoji: "🦌", caption: "Сайгак бегает по степям Казахстана." },
              { emoji: "🐱", caption: "Рысь живёт в густых лесах." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Жабайы жануарлар",
            slides: [
              { emoji: "🐘", caption: "Піл ыстық елдерде тұрады." },
              { emoji: "🦧", caption: "Орангутан тропиктік ормандарда тұрады." },
              { emoji: "🦅", caption: "Бүркіт таулардың үстінде қалықтайды." },
              { emoji: "🦌", caption: "Киік Қазақстан даласында жүгіреді." },
              { emoji: "🐱", caption: "Сілеусін қалың орманда тұрады." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Wild animals",
            slides: [
              { emoji: "🐘", caption: "An elephant lives in hot countries." },
              { emoji: "🦧", caption: "An orangutan lives in tropical forests." },
              { emoji: "🦅", caption: "A golden eagle soars above the mountains." },
              { emoji: "🦌", caption: "A saiga runs across the steppes of Kazakhstan." },
              { emoji: "🐱", caption: "A lynx lives in dense forests." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Где они обитают?",
            question:
              "К какой группе относятся эти животные? Где они обитают?",
            items: [
              { emoji: "🐘", label: "слон" },
              { emoji: "🦅", label: "беркут" },
              { emoji: "🦌", label: "сайгак" },
            ],
            answer:
              "Все они — дикие животные. Слон живёт в саваннах, беркут — в горах, сайгак — в степях. Они сами добывают пищу.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Олар қайда тұрады?",
            question:
              "Бұл жануарлар қай топқа жатады? Олар қайда тұрады?",
            items: [
              { emoji: "🐘", label: "піл" },
              { emoji: "🦅", label: "бүркіт" },
              { emoji: "🦌", label: "киік" },
            ],
            answer:
              "Олардың барлығы — жабайы жануарлар. Піл саваннада, бүркіт тауда, киік далада тұрады. Олар тамағын өздері табады.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Where do they live?",
            question:
              "What group do these animals belong to? Where do they live?",
            items: [
              { emoji: "🐘", label: "elephant" },
              { emoji: "🦅", label: "eagle" },
              { emoji: "🦌", label: "saiga" },
            ],
            answer:
              "They are all wild animals. The elephant lives in savannas, the eagle in the mountains, the saiga in the steppes. They find food on their own.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Дикие** животные живут в **лесах**, **степях** и **горах**. Они сами добывают пищу и находят жильё.",
            terms: ["дикие", "лесах", "степях", "горах"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Жабайы** жануарлар **ормандарда**, **далада** және **тауларда** тұрады. Олар тамағын өздері табады, паналайтын жерін өздері іздейді.",
            terms: ["жабайы", "ормандарда", "далада", "тауларда"],
          },
          en: {
            title: "What I learned",
            text:
              "**Wild** animals live in **forests**, **steppes** and **mountains**. They find food and shelter on their own.",
            terms: ["wild", "forests", "steppes", "mountains"],
          },
        },
      },
      {
        type: "sort",
        data: {
          ru: {
            title: "Где обитают эти животные?",
            instruction:
              "Распредели животных по среде обитания.",
            categories: [
              { id: "land", label: "На земле / в лесу", emoji: "🌳" },
              { id: "water", label: "В воде", emoji: "🌊" },
              { id: "mount", label: "В горах", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "корова", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "заяц", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "лиса", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "архар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Проверить",
          },
          kz: {
            title: "Бұл жануарлар қайда тұрады?",
            instruction:
              "Жануарларды мекен ортасы бойынша бөл.",
            categories: [
              { id: "land", label: "Жерде / орманда", emoji: "🌳" },
              { id: "water", label: "Суда", emoji: "🌊" },
              { id: "mount", label: "Тауда", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "сиыр", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "қоян", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "түлкі", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "арқар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Тексеру",
          },
          en: {
            title: "Where do these animals live?",
            instruction:
              "Sort the animals by their habitat.",
            categories: [
              { id: "land", label: "On land / in forest", emoji: "🌳" },
              { id: "water", label: "In water", emoji: "🌊" },
              { id: "mount", label: "In mountains", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "cow", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "hare", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "fox", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "dolphin", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "argali", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Check",
          },
        },
      },
    ],

    // Итоги
    experiments: [
      {
        type: "fact",
        data: {
          ru: {
            title: "Найди в энциклопедии",
            text:
              "Узнай, какие редкие дикие животные живут в Казахстане. Запиши 3 примера и где они обитают.",
            keywords: ["энциклопедия", "Казахстан", "редкие"],
            icon: "sparkles",
          },
          kz: {
            title: "Энциклопедиядан тап",
            text:
              "Қазақстанда қандай сирек кездесетін жабайы жануарлар бар? 3 мысал жазып, қайда тұратынын көрсет.",
            keywords: ["энциклопедия", "Қазақстан", "сирек"],
            icon: "sparkles",
          },
          en: {
            title: "Find in the encyclopedia",
            text:
              "Find out which rare wild animals live in Kazakhstan. Write down 3 examples and where they live.",
            keywords: ["encyclopedia", "Kazakhstan", "rare"],
            icon: "sparkles",
          },
        },
      },
      {
        type: "fact",
        data: {
          ru: {
            title: "Это интересно!",
            text:
              "У молодых пингвинов хвост похож на белый мех. Это помогает их мамам быстро находить своих птенцов в большой стае.",
            keywords: ["пингвины", "хвост", "мех"],
            icon: "bulb",
          },
          kz: {
            title: "Бұл қызық!",
            text:
              "Жас пингвиндердің құйрығы ақ жүнге ұқсайды. Бұл аналарына үлкен топтан өз балапандарын тез табуға көмектеседі.",
            keywords: ["пингвин", "құйрық", "жүн"],
            icon: "bulb",
          },
          en: {
            title: "Did you know?",
            text:
              "Young penguins have tails that look like white fur. It helps their mothers quickly find their chicks in a large flock.",
            keywords: ["penguins", "tail", "fur"],
            icon: "bulb",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Итоговые вопросы",
            text:
              "1) Чем **дикие** животные отличаются от **домашних**? 2) Почему человек должен **заботиться** о домашних животных?",
          },
          kz: {
            title: "Қорытынды сұрақтар",
            text:
              "1) **Жабайы** жануарлар **үй** жануарларынан немен ерекшеленеді? 2) Адам үй жануарларына неліктен **қамқорлық** жасауы керек?",
          },
          en: {
            title: "Wrap-up questions",
            text:
              "1) How do **wild** animals differ from **domestic** ones? 2) Why should people **take care** of domestic animals?",
          },
        },
      },
    ],
  },
  19: {
    intro: [
      {
        type: "audio",
        data: {
          ru: {
            title: "Аудио-гид к уроку",
            text:
              "Сегодня мы узнаем, что животные бывают дикими и домашними, и в чём их главное отличие.",
            caption: "Послушай вступление к уроку",
            durationLabel: "0:22",
          },
          kz: {
            title: "Сабақтың аудио-гиді",
            text:
              "Бүгін біз жануарлардың жабайы және үй жануарлары болып бөлінетінін, олардың айырмашылығы неде екенін білеміз.",
            caption: "Сабақтың кіріспесін тыңда",
            durationLabel: "0:22",
          },
          en: {
            title: "Lesson audio guide",
            text:
              "Today we'll learn that animals can be wild or domestic, and what is the main difference between them.",
            caption: "Listen to the lesson intro",
            durationLabel: "0:22",
          },
        },
      },
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Ключевые слова",
            title: "Дикие и домашние",
            slides: [
              { emoji: "🏠", caption: "Домашние животные / Үй жануарлары / Domestic animals" },
              { emoji: "🌲", caption: "Дикие животные / Жабайы жануарлар / Wild animals" },
              { emoji: "🌍", caption: "Среда обитания / Мекен орта / Habitat" },
            ],
          },
          kz: {
            groupLabel: "Кілт сөздер",
            title: "Жабайы және үй",
            slides: [
              { emoji: "🏠", caption: "Үй жануарлары / Домашние / Domestic animals" },
              { emoji: "🌲", caption: "Жабайы жануарлар / Дикие / Wild animals" },
              { emoji: "🌍", caption: "Мекен орта / Среда обитания / Habitat" },
            ],
          },
          en: {
            groupLabel: "Key words",
            title: "Wild and domestic",
            slides: [
              { emoji: "🏠", caption: "Domestic animals / Домашние / Үй жануарлары" },
              { emoji: "🌲", caption: "Wild animals / Дикие / Жабайы жануарлар" },
              { emoji: "🌍", caption: "Habitat / Среда обитания / Мекен орта" },
            ],
          },
        },
      },
    ],

    // Домашние животные
    scientists: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Домашние животные",
            slides: [
              { emoji: "🐕", caption: "Собаки живут рядом с людьми — охраняют дом." },
              { emoji: "🐄", caption: "Корова на пастбище даёт молоко." },
              { emoji: "🐐", caption: "Коза у забора — даёт молоко и шерсть." },
              { emoji: "🐎", caption: "Лошадь с жеребёнком — помогает человеку." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Үй жануарлары",
            slides: [
              { emoji: "🐕", caption: "Иттер адаммен бірге тұрып, үйді күзетеді." },
              { emoji: "🐄", caption: "Жайылымдағы сиыр сүт береді." },
              { emoji: "🐐", caption: "Қоршау жанындағы ешкі — сүт пен жүн береді." },
              { emoji: "🐎", caption: "Жылқы құлынымен — адамға көмектеседі." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Domestic animals",
            slides: [
              { emoji: "🐕", caption: "Dogs live with people — they guard the house." },
              { emoji: "🐄", caption: "A cow on the pasture gives milk." },
              { emoji: "🐐", caption: "A goat by the fence gives milk and wool." },
              { emoji: "🐎", caption: "A mare with her foal — helps people." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Проверь себя",
            question:
              "Кто из этих животных — домашний? Подумай и проверь ответ.",
            items: [
              { emoji: "🐕", label: "собака" },
              { emoji: "🐄", label: "корова" },
              { emoji: "🐐", label: "коза" },
            ],
            answer:
              "Все трое — домашние животные. Они живут рядом с человеком, приносят пользу, а человек заботится о них.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Өзіңді тексер",
            question:
              "Бұлардың қайсысы үй жануары? Ойлан да жауапты тексер.",
            items: [
              { emoji: "🐕", label: "ит" },
              { emoji: "🐄", label: "сиыр" },
              { emoji: "🐐", label: "ешкі" },
            ],
            answer:
              "Үшеуі де үй жануарлары. Олар адамның жанында тұрады, пайда әкеледі, адам оларды күтеді.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Check yourself",
            question:
              "Which of these are domestic animals? Think, then check.",
            items: [
              { emoji: "🐕", label: "dog" },
              { emoji: "🐄", label: "cow" },
              { emoji: "🐐", label: "goat" },
            ],
            answer:
              "All three are domestic animals. They live near people, are useful, and people take care of them.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Домашние** животные живут рядом с человеком, приносят **пользу**, а человек **заботится** о них.",
            terms: ["домашние", "пользу", "заботится"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Үй** жануарлары адамның жанында тұрады, **пайда** әкеледі, адам олар туралы **қамқорлық** жасайды.",
            terms: ["үй", "пайда", "қамқорлық"],
          },
          en: {
            title: "What I learned",
            text:
              "**Domestic** animals live near people, bring **benefit**, and people **take care** of them.",
            terms: ["domestic", "benefit", "take care"],
          },
        },
      },
    ],

    // Дикие животные
    observation: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Дикие животные",
            slides: [
              { emoji: "🐘", caption: "Слон живёт в жарких странах." },
              { emoji: "🦧", caption: "Орангутан живёт в тропических лесах." },
              { emoji: "🦅", caption: "Беркут парит над горами." },
              { emoji: "🦌", caption: "Сайгак бегает по степям Казахстана." },
              { emoji: "🐱", caption: "Рысь живёт в густых лесах." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Жабайы жануарлар",
            slides: [
              { emoji: "🐘", caption: "Піл ыстық елдерде тұрады." },
              { emoji: "🦧", caption: "Орангутан тропиктік ормандарда тұрады." },
              { emoji: "🦅", caption: "Бүркіт таулардың үстінде қалықтайды." },
              { emoji: "🦌", caption: "Киік Қазақстан даласында жүгіреді." },
              { emoji: "🐱", caption: "Сілеусін қалың орманда тұрады." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Wild animals",
            slides: [
              { emoji: "🐘", caption: "An elephant lives in hot countries." },
              { emoji: "🦧", caption: "An orangutan lives in tropical forests." },
              { emoji: "🦅", caption: "A golden eagle soars above the mountains." },
              { emoji: "🦌", caption: "A saiga runs across the steppes of Kazakhstan." },
              { emoji: "🐱", caption: "A lynx lives in dense forests." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Где они обитают?",
            question:
              "К какой группе относятся эти животные? Где они обитают?",
            items: [
              { emoji: "🐘", label: "слон" },
              { emoji: "🦅", label: "беркут" },
              { emoji: "🦌", label: "сайгак" },
            ],
            answer:
              "Все они — дикие животные. Слон живёт в саваннах, беркут — в горах, сайгак — в степях. Они сами добывают пищу.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Олар қайда тұрады?",
            question:
              "Бұл жануарлар қай топқа жатады? Олар қайда тұрады?",
            items: [
              { emoji: "🐘", label: "піл" },
              { emoji: "🦅", label: "бүркіт" },
              { emoji: "🦌", label: "киік" },
            ],
            answer:
              "Олардың барлығы — жабайы жануарлар. Піл саваннада, бүркіт тауда, киік далада тұрады. Олар тамағын өздері табады.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Where do they live?",
            question:
              "What group do these animals belong to? Where do they live?",
            items: [
              { emoji: "🐘", label: "elephant" },
              { emoji: "🦅", label: "eagle" },
              { emoji: "🦌", label: "saiga" },
            ],
            answer:
              "They are all wild animals. The elephant lives in savannas, the eagle in the mountains, the saiga in the steppes. They find food on their own.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Дикие** животные живут в **лесах**, **степях** и **горах**. Они сами добывают пищу и находят жильё.",
            terms: ["дикие", "лесах", "степях", "горах"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Жабайы** жануарлар **ормандарда**, **далада** және **тауларда** тұрады. Олар тамағын өздері табады, паналайтын жерін өздері іздейді.",
            terms: ["жабайы", "ормандарда", "далада", "тауларда"],
          },
          en: {
            title: "What I learned",
            text:
              "**Wild** animals live in **forests**, **steppes** and **mountains**. They find food and shelter on their own.",
            terms: ["wild", "forests", "steppes", "mountains"],
          },
        },
      },
      {
        type: "sort",
        data: {
          ru: {
            title: "Где обитают эти животные?",
            instruction:
              "Распредели животных по среде обитания.",
            categories: [
              { id: "land", label: "На земле / в лесу", emoji: "🌳" },
              { id: "water", label: "В воде", emoji: "🌊" },
              { id: "mount", label: "В горах", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "корова", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "заяц", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "лиса", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "архар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Проверить",
          },
          kz: {
            title: "Бұл жануарлар қайда тұрады?",
            instruction:
              "Жануарларды мекен ортасы бойынша бөл.",
            categories: [
              { id: "land", label: "Жерде / орманда", emoji: "🌳" },
              { id: "water", label: "Суда", emoji: "🌊" },
              { id: "mount", label: "Тауда", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "сиыр", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "қоян", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "түлкі", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "арқар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Тексеру",
          },
          en: {
            title: "Where do these animals live?",
            instruction:
              "Sort the animals by their habitat.",
            categories: [
              { id: "land", label: "On land / in forest", emoji: "🌳" },
              { id: "water", label: "In water", emoji: "🌊" },
              { id: "mount", label: "In mountains", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "cow", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "hare", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "fox", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "dolphin", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "argali", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Check",
          },
        },
      },
    ],

    // Итоги
    experiments: [
      {
        type: "fact",
        data: {
          ru: {
            title: "Найди в энциклопедии",
            text:
              "Узнай, какие редкие дикие животные живут в Казахстане. Запиши 3 примера и где они обитают.",
            keywords: ["энциклопедия", "Казахстан", "редкие"],
            icon: "sparkles",
          },
          kz: {
            title: "Энциклопедиядан тап",
            text:
              "Қазақстанда қандай сирек кездесетін жабайы жануарлар бар? 3 мысал жазып, қайда тұратынын көрсет.",
            keywords: ["энциклопедия", "Қазақстан", "сирек"],
            icon: "sparkles",
          },
          en: {
            title: "Find in the encyclopedia",
            text:
              "Find out which rare wild animals live in Kazakhstan. Write down 3 examples and where they live.",
            keywords: ["encyclopedia", "Kazakhstan", "rare"],
            icon: "sparkles",
          },
        },
      },
      {
        type: "fact",
        data: {
          ru: {
            title: "Это интересно!",
            text:
              "У молодых пингвинов хвост похож на белый мех. Это помогает их мамам быстро находить своих птенцов в большой стае.",
            keywords: ["пингвины", "хвост", "мех"],
            icon: "bulb",
          },
          kz: {
            title: "Бұл қызық!",
            text:
              "Жас пингвиндердің құйрығы ақ жүнге ұқсайды. Бұл аналарына үлкен топтан өз балапандарын тез табуға көмектеседі.",
            keywords: ["пингвин", "құйрық", "жүн"],
            icon: "bulb",
          },
          en: {
            title: "Did you know?",
            text:
              "Young penguins have tails that look like white fur. It helps their mothers quickly find their chicks in a large flock.",
            keywords: ["penguins", "tail", "fur"],
            icon: "bulb",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Итоговые вопросы",
            text:
              "1) Чем **дикие** животные отличаются от **домашних**? 2) Почему человек должен **заботиться** о домашних животных?",
          },
          kz: {
            title: "Қорытынды сұрақтар",
            text:
              "1) **Жабайы** жануарлар **үй** жануарларынан немен ерекшеленеді? 2) Адам үй жануарларына неліктен **қамқорлық** жасауы керек?",
          },
          en: {
            title: "Wrap-up questions",
            text:
              "1) How do **wild** animals differ from **domestic** ones? 2) Why should people **take care** of domestic animals?",
          },
        },
      },
    ],
  },
  20: {
    intro: [
      {
        type: "audio",
        data: {
          ru: {
            title: "Аудио-гид к уроку",
            text:
              "Сегодня мы узнаем, что животные бывают дикими и домашними, и в чём их главное отличие.",
            caption: "Послушай вступление к уроку",
            durationLabel: "0:22",
          },
          kz: {
            title: "Сабақтың аудио-гиді",
            text:
              "Бүгін біз жануарлардың жабайы және үй жануарлары болып бөлінетінін, олардың айырмашылығы неде екенін білеміз.",
            caption: "Сабақтың кіріспесін тыңда",
            durationLabel: "0:22",
          },
          en: {
            title: "Lesson audio guide",
            text:
              "Today we'll learn that animals can be wild or domestic, and what is the main difference between them.",
            caption: "Listen to the lesson intro",
            durationLabel: "0:22",
          },
        },
      },
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Ключевые слова",
            title: "Дикие и домашние",
            slides: [
              { emoji: "🏠", caption: "Домашние животные / Үй жануарлары / Domestic animals" },
              { emoji: "🌲", caption: "Дикие животные / Жабайы жануарлар / Wild animals" },
              { emoji: "🌍", caption: "Среда обитания / Мекен орта / Habitat" },
            ],
          },
          kz: {
            groupLabel: "Кілт сөздер",
            title: "Жабайы және үй",
            slides: [
              { emoji: "🏠", caption: "Үй жануарлары / Домашние / Domestic animals" },
              { emoji: "🌲", caption: "Жабайы жануарлар / Дикие / Wild animals" },
              { emoji: "🌍", caption: "Мекен орта / Среда обитания / Habitat" },
            ],
          },
          en: {
            groupLabel: "Key words",
            title: "Wild and domestic",
            slides: [
              { emoji: "🏠", caption: "Domestic animals / Домашние / Үй жануарлары" },
              { emoji: "🌲", caption: "Wild animals / Дикие / Жабайы жануарлар" },
              { emoji: "🌍", caption: "Habitat / Среда обитания / Мекен орта" },
            ],
          },
        },
      },
    ],

    // Домашние животные
    scientists: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Домашние животные",
            slides: [
              { emoji: "🐕", caption: "Собаки живут рядом с людьми — охраняют дом." },
              { emoji: "🐄", caption: "Корова на пастбище даёт молоко." },
              { emoji: "🐐", caption: "Коза у забора — даёт молоко и шерсть." },
              { emoji: "🐎", caption: "Лошадь с жеребёнком — помогает человеку." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Үй жануарлары",
            slides: [
              { emoji: "🐕", caption: "Иттер адаммен бірге тұрып, үйді күзетеді." },
              { emoji: "🐄", caption: "Жайылымдағы сиыр сүт береді." },
              { emoji: "🐐", caption: "Қоршау жанындағы ешкі — сүт пен жүн береді." },
              { emoji: "🐎", caption: "Жылқы құлынымен — адамға көмектеседі." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Domestic animals",
            slides: [
              { emoji: "🐕", caption: "Dogs live with people — they guard the house." },
              { emoji: "🐄", caption: "A cow on the pasture gives milk." },
              { emoji: "🐐", caption: "A goat by the fence gives milk and wool." },
              { emoji: "🐎", caption: "A mare with her foal — helps people." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Проверь себя",
            question:
              "Кто из этих животных — домашний? Подумай и проверь ответ.",
            items: [
              { emoji: "🐕", label: "собака" },
              { emoji: "🐄", label: "корова" },
              { emoji: "🐐", label: "коза" },
            ],
            answer:
              "Все трое — домашние животные. Они живут рядом с человеком, приносят пользу, а человек заботится о них.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Өзіңді тексер",
            question:
              "Бұлардың қайсысы үй жануары? Ойлан да жауапты тексер.",
            items: [
              { emoji: "🐕", label: "ит" },
              { emoji: "🐄", label: "сиыр" },
              { emoji: "🐐", label: "ешкі" },
            ],
            answer:
              "Үшеуі де үй жануарлары. Олар адамның жанында тұрады, пайда әкеледі, адам оларды күтеді.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Check yourself",
            question:
              "Which of these are domestic animals? Think, then check.",
            items: [
              { emoji: "🐕", label: "dog" },
              { emoji: "🐄", label: "cow" },
              { emoji: "🐐", label: "goat" },
            ],
            answer:
              "All three are domestic animals. They live near people, are useful, and people take care of them.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Домашние** животные живут рядом с человеком, приносят **пользу**, а человек **заботится** о них.",
            terms: ["домашние", "пользу", "заботится"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Үй** жануарлары адамның жанында тұрады, **пайда** әкеледі, адам олар туралы **қамқорлық** жасайды.",
            terms: ["үй", "пайда", "қамқорлық"],
          },
          en: {
            title: "What I learned",
            text:
              "**Domestic** animals live near people, bring **benefit**, and people **take care** of them.",
            terms: ["domestic", "benefit", "take care"],
          },
        },
      },
    ],

    // Дикие животные
    observation: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Дикие животные",
            slides: [
              { emoji: "🐘", caption: "Слон живёт в жарких странах." },
              { emoji: "🦧", caption: "Орангутан живёт в тропических лесах." },
              { emoji: "🦅", caption: "Беркут парит над горами." },
              { emoji: "🦌", caption: "Сайгак бегает по степям Казахстана." },
              { emoji: "🐱", caption: "Рысь живёт в густых лесах." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Жабайы жануарлар",
            slides: [
              { emoji: "🐘", caption: "Піл ыстық елдерде тұрады." },
              { emoji: "🦧", caption: "Орангутан тропиктік ормандарда тұрады." },
              { emoji: "🦅", caption: "Бүркіт таулардың үстінде қалықтайды." },
              { emoji: "🦌", caption: "Киік Қазақстан даласында жүгіреді." },
              { emoji: "🐱", caption: "Сілеусін қалың орманда тұрады." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Wild animals",
            slides: [
              { emoji: "🐘", caption: "An elephant lives in hot countries." },
              { emoji: "🦧", caption: "An orangutan lives in tropical forests." },
              { emoji: "🦅", caption: "A golden eagle soars above the mountains." },
              { emoji: "🦌", caption: "A saiga runs across the steppes of Kazakhstan." },
              { emoji: "🐱", caption: "A lynx lives in dense forests." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Где они обитают?",
            question:
              "К какой группе относятся эти животные? Где они обитают?",
            items: [
              { emoji: "🐘", label: "слон" },
              { emoji: "🦅", label: "беркут" },
              { emoji: "🦌", label: "сайгак" },
            ],
            answer:
              "Все они — дикие животные. Слон живёт в саваннах, беркут — в горах, сайгак — в степях. Они сами добывают пищу.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Олар қайда тұрады?",
            question:
              "Бұл жануарлар қай топқа жатады? Олар қайда тұрады?",
            items: [
              { emoji: "🐘", label: "піл" },
              { emoji: "🦅", label: "бүркіт" },
              { emoji: "🦌", label: "киік" },
            ],
            answer:
              "Олардың барлығы — жабайы жануарлар. Піл саваннада, бүркіт тауда, киік далада тұрады. Олар тамағын өздері табады.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Where do they live?",
            question:
              "What group do these animals belong to? Where do they live?",
            items: [
              { emoji: "🐘", label: "elephant" },
              { emoji: "🦅", label: "eagle" },
              { emoji: "🦌", label: "saiga" },
            ],
            answer:
              "They are all wild animals. The elephant lives in savannas, the eagle in the mountains, the saiga in the steppes. They find food on their own.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Дикие** животные живут в **лесах**, **степях** и **горах**. Они сами добывают пищу и находят жильё.",
            terms: ["дикие", "лесах", "степях", "горах"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Жабайы** жануарлар **ормандарда**, **далада** және **тауларда** тұрады. Олар тамағын өздері табады, паналайтын жерін өздері іздейді.",
            terms: ["жабайы", "ормандарда", "далада", "тауларда"],
          },
          en: {
            title: "What I learned",
            text:
              "**Wild** animals live in **forests**, **steppes** and **mountains**. They find food and shelter on their own.",
            terms: ["wild", "forests", "steppes", "mountains"],
          },
        },
      },
      {
        type: "sort",
        data: {
          ru: {
            title: "Где обитают эти животные?",
            instruction:
              "Распредели животных по среде обитания.",
            categories: [
              { id: "land", label: "На земле / в лесу", emoji: "🌳" },
              { id: "water", label: "В воде", emoji: "🌊" },
              { id: "mount", label: "В горах", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "корова", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "заяц", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "лиса", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "архар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Проверить",
          },
          kz: {
            title: "Бұл жануарлар қайда тұрады?",
            instruction:
              "Жануарларды мекен ортасы бойынша бөл.",
            categories: [
              { id: "land", label: "Жерде / орманда", emoji: "🌳" },
              { id: "water", label: "Суда", emoji: "🌊" },
              { id: "mount", label: "Тауда", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "сиыр", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "қоян", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "түлкі", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "арқар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Тексеру",
          },
          en: {
            title: "Where do these animals live?",
            instruction:
              "Sort the animals by their habitat.",
            categories: [
              { id: "land", label: "On land / in forest", emoji: "🌳" },
              { id: "water", label: "In water", emoji: "🌊" },
              { id: "mount", label: "In mountains", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "cow", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "hare", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "fox", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "dolphin", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "argali", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Check",
          },
        },
      },
    ],

    // Итоги
    experiments: [
      {
        type: "fact",
        data: {
          ru: {
            title: "Найди в энциклопедии",
            text:
              "Узнай, какие редкие дикие животные живут в Казахстане. Запиши 3 примера и где они обитают.",
            keywords: ["энциклопедия", "Казахстан", "редкие"],
            icon: "sparkles",
          },
          kz: {
            title: "Энциклопедиядан тап",
            text:
              "Қазақстанда қандай сирек кездесетін жабайы жануарлар бар? 3 мысал жазып, қайда тұратынын көрсет.",
            keywords: ["энциклопедия", "Қазақстан", "сирек"],
            icon: "sparkles",
          },
          en: {
            title: "Find in the encyclopedia",
            text:
              "Find out which rare wild animals live in Kazakhstan. Write down 3 examples and where they live.",
            keywords: ["encyclopedia", "Kazakhstan", "rare"],
            icon: "sparkles",
          },
        },
      },
      {
        type: "fact",
        data: {
          ru: {
            title: "Это интересно!",
            text:
              "У молодых пингвинов хвост похож на белый мех. Это помогает их мамам быстро находить своих птенцов в большой стае.",
            keywords: ["пингвины", "хвост", "мех"],
            icon: "bulb",
          },
          kz: {
            title: "Бұл қызық!",
            text:
              "Жас пингвиндердің құйрығы ақ жүнге ұқсайды. Бұл аналарына үлкен топтан өз балапандарын тез табуға көмектеседі.",
            keywords: ["пингвин", "құйрық", "жүн"],
            icon: "bulb",
          },
          en: {
            title: "Did you know?",
            text:
              "Young penguins have tails that look like white fur. It helps their mothers quickly find their chicks in a large flock.",
            keywords: ["penguins", "tail", "fur"],
            icon: "bulb",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Итоговые вопросы",
            text:
              "1) Чем **дикие** животные отличаются от **домашних**? 2) Почему человек должен **заботиться** о домашних животных?",
          },
          kz: {
            title: "Қорытынды сұрақтар",
            text:
              "1) **Жабайы** жануарлар **үй** жануарларынан немен ерекшеленеді? 2) Адам үй жануарларына неліктен **қамқорлық** жасауы керек?",
          },
          en: {
            title: "Wrap-up questions",
            text:
              "1) How do **wild** animals differ from **domestic** ones? 2) Why should people **take care** of domestic animals?",
          },
        },
      },
    ],
  },
  21: {
    intro: [
      {
        type: "audio",
        data: {
          ru: {
            title: "Аудио-гид к уроку",
            text:
              "Сегодня мы узнаем, что животные бывают дикими и домашними, и в чём их главное отличие.",
            caption: "Послушай вступление к уроку",
            durationLabel: "0:22",
          },
          kz: {
            title: "Сабақтың аудио-гиді",
            text:
              "Бүгін біз жануарлардың жабайы және үй жануарлары болып бөлінетінін, олардың айырмашылығы неде екенін білеміз.",
            caption: "Сабақтың кіріспесін тыңда",
            durationLabel: "0:22",
          },
          en: {
            title: "Lesson audio guide",
            text:
              "Today we'll learn that animals can be wild or domestic, and what is the main difference between them.",
            caption: "Listen to the lesson intro",
            durationLabel: "0:22",
          },
        },
      },
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Ключевые слова",
            title: "Дикие и домашние",
            slides: [
              { emoji: "🏠", caption: "Домашние животные / Үй жануарлары / Domestic animals" },
              { emoji: "🌲", caption: "Дикие животные / Жабайы жануарлар / Wild animals" },
              { emoji: "🌍", caption: "Среда обитания / Мекен орта / Habitat" },
            ],
          },
          kz: {
            groupLabel: "Кілт сөздер",
            title: "Жабайы және үй",
            slides: [
              { emoji: "🏠", caption: "Үй жануарлары / Домашние / Domestic animals" },
              { emoji: "🌲", caption: "Жабайы жануарлар / Дикие / Wild animals" },
              { emoji: "🌍", caption: "Мекен орта / Среда обитания / Habitat" },
            ],
          },
          en: {
            groupLabel: "Key words",
            title: "Wild and domestic",
            slides: [
              { emoji: "🏠", caption: "Domestic animals / Домашние / Үй жануарлары" },
              { emoji: "🌲", caption: "Wild animals / Дикие / Жабайы жануарлар" },
              { emoji: "🌍", caption: "Habitat / Среда обитания / Мекен орта" },
            ],
          },
        },
      },
    ],

    // Домашние животные
    scientists: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Домашние животные",
            slides: [
              { emoji: "🐕", caption: "Собаки живут рядом с людьми — охраняют дом." },
              { emoji: "🐄", caption: "Корова на пастбище даёт молоко." },
              { emoji: "🐐", caption: "Коза у забора — даёт молоко и шерсть." },
              { emoji: "🐎", caption: "Лошадь с жеребёнком — помогает человеку." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Үй жануарлары",
            slides: [
              { emoji: "🐕", caption: "Иттер адаммен бірге тұрып, үйді күзетеді." },
              { emoji: "🐄", caption: "Жайылымдағы сиыр сүт береді." },
              { emoji: "🐐", caption: "Қоршау жанындағы ешкі — сүт пен жүн береді." },
              { emoji: "🐎", caption: "Жылқы құлынымен — адамға көмектеседі." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Domestic animals",
            slides: [
              { emoji: "🐕", caption: "Dogs live with people — they guard the house." },
              { emoji: "🐄", caption: "A cow on the pasture gives milk." },
              { emoji: "🐐", caption: "A goat by the fence gives milk and wool." },
              { emoji: "🐎", caption: "A mare with her foal — helps people." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Проверь себя",
            question:
              "Кто из этих животных — домашний? Подумай и проверь ответ.",
            items: [
              { emoji: "🐕", label: "собака" },
              { emoji: "🐄", label: "корова" },
              { emoji: "🐐", label: "коза" },
            ],
            answer:
              "Все трое — домашние животные. Они живут рядом с человеком, приносят пользу, а человек заботится о них.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Өзіңді тексер",
            question:
              "Бұлардың қайсысы үй жануары? Ойлан да жауапты тексер.",
            items: [
              { emoji: "🐕", label: "ит" },
              { emoji: "🐄", label: "сиыр" },
              { emoji: "🐐", label: "ешкі" },
            ],
            answer:
              "Үшеуі де үй жануарлары. Олар адамның жанында тұрады, пайда әкеледі, адам оларды күтеді.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Check yourself",
            question:
              "Which of these are domestic animals? Think, then check.",
            items: [
              { emoji: "🐕", label: "dog" },
              { emoji: "🐄", label: "cow" },
              { emoji: "🐐", label: "goat" },
            ],
            answer:
              "All three are domestic animals. They live near people, are useful, and people take care of them.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Домашние** животные живут рядом с человеком, приносят **пользу**, а человек **заботится** о них.",
            terms: ["домашние", "пользу", "заботится"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Үй** жануарлары адамның жанында тұрады, **пайда** әкеледі, адам олар туралы **қамқорлық** жасайды.",
            terms: ["үй", "пайда", "қамқорлық"],
          },
          en: {
            title: "What I learned",
            text:
              "**Domestic** animals live near people, bring **benefit**, and people **take care** of them.",
            terms: ["domestic", "benefit", "take care"],
          },
        },
      },
    ],

    // Дикие животные
    observation: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Дикие животные",
            slides: [
              { emoji: "🐘", caption: "Слон живёт в жарких странах." },
              { emoji: "🦧", caption: "Орангутан живёт в тропических лесах." },
              { emoji: "🦅", caption: "Беркут парит над горами." },
              { emoji: "🦌", caption: "Сайгак бегает по степям Казахстана." },
              { emoji: "🐱", caption: "Рысь живёт в густых лесах." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Жабайы жануарлар",
            slides: [
              { emoji: "🐘", caption: "Піл ыстық елдерде тұрады." },
              { emoji: "🦧", caption: "Орангутан тропиктік ормандарда тұрады." },
              { emoji: "🦅", caption: "Бүркіт таулардың үстінде қалықтайды." },
              { emoji: "🦌", caption: "Киік Қазақстан даласында жүгіреді." },
              { emoji: "🐱", caption: "Сілеусін қалың орманда тұрады." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Wild animals",
            slides: [
              { emoji: "🐘", caption: "An elephant lives in hot countries." },
              { emoji: "🦧", caption: "An orangutan lives in tropical forests." },
              { emoji: "🦅", caption: "A golden eagle soars above the mountains." },
              { emoji: "🦌", caption: "A saiga runs across the steppes of Kazakhstan." },
              { emoji: "🐱", caption: "A lynx lives in dense forests." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Где они обитают?",
            question:
              "К какой группе относятся эти животные? Где они обитают?",
            items: [
              { emoji: "🐘", label: "слон" },
              { emoji: "🦅", label: "беркут" },
              { emoji: "🦌", label: "сайгак" },
            ],
            answer:
              "Все они — дикие животные. Слон живёт в саваннах, беркут — в горах, сайгак — в степях. Они сами добывают пищу.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Олар қайда тұрады?",
            question:
              "Бұл жануарлар қай топқа жатады? Олар қайда тұрады?",
            items: [
              { emoji: "🐘", label: "піл" },
              { emoji: "🦅", label: "бүркіт" },
              { emoji: "🦌", label: "киік" },
            ],
            answer:
              "Олардың барлығы — жабайы жануарлар. Піл саваннада, бүркіт тауда, киік далада тұрады. Олар тамағын өздері табады.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Where do they live?",
            question:
              "What group do these animals belong to? Where do they live?",
            items: [
              { emoji: "🐘", label: "elephant" },
              { emoji: "🦅", label: "eagle" },
              { emoji: "🦌", label: "saiga" },
            ],
            answer:
              "They are all wild animals. The elephant lives in savannas, the eagle in the mountains, the saiga in the steppes. They find food on their own.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Дикие** животные живут в **лесах**, **степях** и **горах**. Они сами добывают пищу и находят жильё.",
            terms: ["дикие", "лесах", "степях", "горах"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Жабайы** жануарлар **ормандарда**, **далада** және **тауларда** тұрады. Олар тамағын өздері табады, паналайтын жерін өздері іздейді.",
            terms: ["жабайы", "ормандарда", "далада", "тауларда"],
          },
          en: {
            title: "What I learned",
            text:
              "**Wild** animals live in **forests**, **steppes** and **mountains**. They find food and shelter on their own.",
            terms: ["wild", "forests", "steppes", "mountains"],
          },
        },
      },
      {
        type: "sort",
        data: {
          ru: {
            title: "Где обитают эти животные?",
            instruction:
              "Распредели животных по среде обитания.",
            categories: [
              { id: "land", label: "На земле / в лесу", emoji: "🌳" },
              { id: "water", label: "В воде", emoji: "🌊" },
              { id: "mount", label: "В горах", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "корова", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "заяц", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "лиса", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "архар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Проверить",
          },
          kz: {
            title: "Бұл жануарлар қайда тұрады?",
            instruction:
              "Жануарларды мекен ортасы бойынша бөл.",
            categories: [
              { id: "land", label: "Жерде / орманда", emoji: "🌳" },
              { id: "water", label: "Суда", emoji: "🌊" },
              { id: "mount", label: "Тауда", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "сиыр", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "қоян", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "түлкі", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "арқар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Тексеру",
          },
          en: {
            title: "Where do these animals live?",
            instruction:
              "Sort the animals by their habitat.",
            categories: [
              { id: "land", label: "On land / in forest", emoji: "🌳" },
              { id: "water", label: "In water", emoji: "🌊" },
              { id: "mount", label: "In mountains", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "cow", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "hare", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "fox", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "dolphin", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "argali", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Check",
          },
        },
      },
    ],

    // Итоги
    experiments: [
      {
        type: "fact",
        data: {
          ru: {
            title: "Найди в энциклопедии",
            text:
              "Узнай, какие редкие дикие животные живут в Казахстане. Запиши 3 примера и где они обитают.",
            keywords: ["энциклопедия", "Казахстан", "редкие"],
            icon: "sparkles",
          },
          kz: {
            title: "Энциклопедиядан тап",
            text:
              "Қазақстанда қандай сирек кездесетін жабайы жануарлар бар? 3 мысал жазып, қайда тұратынын көрсет.",
            keywords: ["энциклопедия", "Қазақстан", "сирек"],
            icon: "sparkles",
          },
          en: {
            title: "Find in the encyclopedia",
            text:
              "Find out which rare wild animals live in Kazakhstan. Write down 3 examples and where they live.",
            keywords: ["encyclopedia", "Kazakhstan", "rare"],
            icon: "sparkles",
          },
        },
      },
      {
        type: "fact",
        data: {
          ru: {
            title: "Это интересно!",
            text:
              "У молодых пингвинов хвост похож на белый мех. Это помогает их мамам быстро находить своих птенцов в большой стае.",
            keywords: ["пингвины", "хвост", "мех"],
            icon: "bulb",
          },
          kz: {
            title: "Бұл қызық!",
            text:
              "Жас пингвиндердің құйрығы ақ жүнге ұқсайды. Бұл аналарына үлкен топтан өз балапандарын тез табуға көмектеседі.",
            keywords: ["пингвин", "құйрық", "жүн"],
            icon: "bulb",
          },
          en: {
            title: "Did you know?",
            text:
              "Young penguins have tails that look like white fur. It helps their mothers quickly find their chicks in a large flock.",
            keywords: ["penguins", "tail", "fur"],
            icon: "bulb",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Итоговые вопросы",
            text:
              "1) Чем **дикие** животные отличаются от **домашних**? 2) Почему человек должен **заботиться** о домашних животных?",
          },
          kz: {
            title: "Қорытынды сұрақтар",
            text:
              "1) **Жабайы** жануарлар **үй** жануарларынан немен ерекшеленеді? 2) Адам үй жануарларына неліктен **қамқорлық** жасауы керек?",
          },
          en: {
            title: "Wrap-up questions",
            text:
              "1) How do **wild** animals differ from **domestic** ones? 2) Why should people **take care** of domestic animals?",
          },
        },
      },
    ],
  },
  22: {
    intro: [
      {
        type: "audio",
        data: {
          ru: {
            title: "Аудио-гид к уроку",
            text:
              "Сегодня мы узнаем, что животные бывают дикими и домашними, и в чём их главное отличие.",
            caption: "Послушай вступление к уроку",
            durationLabel: "0:22",
          },
          kz: {
            title: "Сабақтың аудио-гиді",
            text:
              "Бүгін біз жануарлардың жабайы және үй жануарлары болып бөлінетінін, олардың айырмашылығы неде екенін білеміз.",
            caption: "Сабақтың кіріспесін тыңда",
            durationLabel: "0:22",
          },
          en: {
            title: "Lesson audio guide",
            text:
              "Today we'll learn that animals can be wild or domestic, and what is the main difference between them.",
            caption: "Listen to the lesson intro",
            durationLabel: "0:22",
          },
        },
      },
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Ключевые слова",
            title: "Дикие и домашние",
            slides: [
              { emoji: "🏠", caption: "Домашние животные / Үй жануарлары / Domestic animals" },
              { emoji: "🌲", caption: "Дикие животные / Жабайы жануарлар / Wild animals" },
              { emoji: "🌍", caption: "Среда обитания / Мекен орта / Habitat" },
            ],
          },
          kz: {
            groupLabel: "Кілт сөздер",
            title: "Жабайы және үй",
            slides: [
              { emoji: "🏠", caption: "Үй жануарлары / Домашние / Domestic animals" },
              { emoji: "🌲", caption: "Жабайы жануарлар / Дикие / Wild animals" },
              { emoji: "🌍", caption: "Мекен орта / Среда обитания / Habitat" },
            ],
          },
          en: {
            groupLabel: "Key words",
            title: "Wild and domestic",
            slides: [
              { emoji: "🏠", caption: "Domestic animals / Домашние / Үй жануарлары" },
              { emoji: "🌲", caption: "Wild animals / Дикие / Жабайы жануарлар" },
              { emoji: "🌍", caption: "Habitat / Среда обитания / Мекен орта" },
            ],
          },
        },
      },
    ],

    // Домашние животные
    scientists: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Домашние животные",
            slides: [
              { emoji: "🐕", caption: "Собаки живут рядом с людьми — охраняют дом." },
              { emoji: "🐄", caption: "Корова на пастбище даёт молоко." },
              { emoji: "🐐", caption: "Коза у забора — даёт молоко и шерсть." },
              { emoji: "🐎", caption: "Лошадь с жеребёнком — помогает человеку." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Үй жануарлары",
            slides: [
              { emoji: "🐕", caption: "Иттер адаммен бірге тұрып, үйді күзетеді." },
              { emoji: "🐄", caption: "Жайылымдағы сиыр сүт береді." },
              { emoji: "🐐", caption: "Қоршау жанындағы ешкі — сүт пен жүн береді." },
              { emoji: "🐎", caption: "Жылқы құлынымен — адамға көмектеседі." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Domestic animals",
            slides: [
              { emoji: "🐕", caption: "Dogs live with people — they guard the house." },
              { emoji: "🐄", caption: "A cow on the pasture gives milk." },
              { emoji: "🐐", caption: "A goat by the fence gives milk and wool." },
              { emoji: "🐎", caption: "A mare with her foal — helps people." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Проверь себя",
            question:
              "Кто из этих животных — домашний? Подумай и проверь ответ.",
            items: [
              { emoji: "🐕", label: "собака" },
              { emoji: "🐄", label: "корова" },
              { emoji: "🐐", label: "коза" },
            ],
            answer:
              "Все трое — домашние животные. Они живут рядом с человеком, приносят пользу, а человек заботится о них.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Өзіңді тексер",
            question:
              "Бұлардың қайсысы үй жануары? Ойлан да жауапты тексер.",
            items: [
              { emoji: "🐕", label: "ит" },
              { emoji: "🐄", label: "сиыр" },
              { emoji: "🐐", label: "ешкі" },
            ],
            answer:
              "Үшеуі де үй жануарлары. Олар адамның жанында тұрады, пайда әкеледі, адам оларды күтеді.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Check yourself",
            question:
              "Which of these are domestic animals? Think, then check.",
            items: [
              { emoji: "🐕", label: "dog" },
              { emoji: "🐄", label: "cow" },
              { emoji: "🐐", label: "goat" },
            ],
            answer:
              "All three are domestic animals. They live near people, are useful, and people take care of them.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Домашние** животные живут рядом с человеком, приносят **пользу**, а человек **заботится** о них.",
            terms: ["домашние", "пользу", "заботится"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Үй** жануарлары адамның жанында тұрады, **пайда** әкеледі, адам олар туралы **қамқорлық** жасайды.",
            terms: ["үй", "пайда", "қамқорлық"],
          },
          en: {
            title: "What I learned",
            text:
              "**Domestic** animals live near people, bring **benefit**, and people **take care** of them.",
            terms: ["domestic", "benefit", "take care"],
          },
        },
      },
    ],

    // Дикие животные
    observation: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Дикие животные",
            slides: [
              { emoji: "🐘", caption: "Слон живёт в жарких странах." },
              { emoji: "🦧", caption: "Орангутан живёт в тропических лесах." },
              { emoji: "🦅", caption: "Беркут парит над горами." },
              { emoji: "🦌", caption: "Сайгак бегает по степям Казахстана." },
              { emoji: "🐱", caption: "Рысь живёт в густых лесах." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Жабайы жануарлар",
            slides: [
              { emoji: "🐘", caption: "Піл ыстық елдерде тұрады." },
              { emoji: "🦧", caption: "Орангутан тропиктік ормандарда тұрады." },
              { emoji: "🦅", caption: "Бүркіт таулардың үстінде қалықтайды." },
              { emoji: "🦌", caption: "Киік Қазақстан даласында жүгіреді." },
              { emoji: "🐱", caption: "Сілеусін қалың орманда тұрады." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Wild animals",
            slides: [
              { emoji: "🐘", caption: "An elephant lives in hot countries." },
              { emoji: "🦧", caption: "An orangutan lives in tropical forests." },
              { emoji: "🦅", caption: "A golden eagle soars above the mountains." },
              { emoji: "🦌", caption: "A saiga runs across the steppes of Kazakhstan." },
              { emoji: "🐱", caption: "A lynx lives in dense forests." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Где они обитают?",
            question:
              "К какой группе относятся эти животные? Где они обитают?",
            items: [
              { emoji: "🐘", label: "слон" },
              { emoji: "🦅", label: "беркут" },
              { emoji: "🦌", label: "сайгак" },
            ],
            answer:
              "Все они — дикие животные. Слон живёт в саваннах, беркут — в горах, сайгак — в степях. Они сами добывают пищу.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Олар қайда тұрады?",
            question:
              "Бұл жануарлар қай топқа жатады? Олар қайда тұрады?",
            items: [
              { emoji: "🐘", label: "піл" },
              { emoji: "🦅", label: "бүркіт" },
              { emoji: "🦌", label: "киік" },
            ],
            answer:
              "Олардың барлығы — жабайы жануарлар. Піл саваннада, бүркіт тауда, киік далада тұрады. Олар тамағын өздері табады.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Where do they live?",
            question:
              "What group do these animals belong to? Where do they live?",
            items: [
              { emoji: "🐘", label: "elephant" },
              { emoji: "🦅", label: "eagle" },
              { emoji: "🦌", label: "saiga" },
            ],
            answer:
              "They are all wild animals. The elephant lives in savannas, the eagle in the mountains, the saiga in the steppes. They find food on their own.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Дикие** животные живут в **лесах**, **степях** и **горах**. Они сами добывают пищу и находят жильё.",
            terms: ["дикие", "лесах", "степях", "горах"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Жабайы** жануарлар **ормандарда**, **далада** және **тауларда** тұрады. Олар тамағын өздері табады, паналайтын жерін өздері іздейді.",
            terms: ["жабайы", "ормандарда", "далада", "тауларда"],
          },
          en: {
            title: "What I learned",
            text:
              "**Wild** animals live in **forests**, **steppes** and **mountains**. They find food and shelter on their own.",
            terms: ["wild", "forests", "steppes", "mountains"],
          },
        },
      },
      {
        type: "sort",
        data: {
          ru: {
            title: "Где обитают эти животные?",
            instruction:
              "Распредели животных по среде обитания.",
            categories: [
              { id: "land", label: "На земле / в лесу", emoji: "🌳" },
              { id: "water", label: "В воде", emoji: "🌊" },
              { id: "mount", label: "В горах", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "корова", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "заяц", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "лиса", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "архар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Проверить",
          },
          kz: {
            title: "Бұл жануарлар қайда тұрады?",
            instruction:
              "Жануарларды мекен ортасы бойынша бөл.",
            categories: [
              { id: "land", label: "Жерде / орманда", emoji: "🌳" },
              { id: "water", label: "Суда", emoji: "🌊" },
              { id: "mount", label: "Тауда", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "сиыр", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "қоян", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "түлкі", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "арқар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Тексеру",
          },
          en: {
            title: "Where do these animals live?",
            instruction:
              "Sort the animals by their habitat.",
            categories: [
              { id: "land", label: "On land / in forest", emoji: "🌳" },
              { id: "water", label: "In water", emoji: "🌊" },
              { id: "mount", label: "In mountains", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "cow", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "hare", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "fox", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "dolphin", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "argali", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Check",
          },
        },
      },
    ],

    // Итоги
    experiments: [
      {
        type: "fact",
        data: {
          ru: {
            title: "Найди в энциклопедии",
            text:
              "Узнай, какие редкие дикие животные живут в Казахстане. Запиши 3 примера и где они обитают.",
            keywords: ["энциклопедия", "Казахстан", "редкие"],
            icon: "sparkles",
          },
          kz: {
            title: "Энциклопедиядан тап",
            text:
              "Қазақстанда қандай сирек кездесетін жабайы жануарлар бар? 3 мысал жазып, қайда тұратынын көрсет.",
            keywords: ["энциклопедия", "Қазақстан", "сирек"],
            icon: "sparkles",
          },
          en: {
            title: "Find in the encyclopedia",
            text:
              "Find out which rare wild animals live in Kazakhstan. Write down 3 examples and where they live.",
            keywords: ["encyclopedia", "Kazakhstan", "rare"],
            icon: "sparkles",
          },
        },
      },
      {
        type: "fact",
        data: {
          ru: {
            title: "Это интересно!",
            text:
              "У молодых пингвинов хвост похож на белый мех. Это помогает их мамам быстро находить своих птенцов в большой стае.",
            keywords: ["пингвины", "хвост", "мех"],
            icon: "bulb",
          },
          kz: {
            title: "Бұл қызық!",
            text:
              "Жас пингвиндердің құйрығы ақ жүнге ұқсайды. Бұл аналарына үлкен топтан өз балапандарын тез табуға көмектеседі.",
            keywords: ["пингвин", "құйрық", "жүн"],
            icon: "bulb",
          },
          en: {
            title: "Did you know?",
            text:
              "Young penguins have tails that look like white fur. It helps their mothers quickly find their chicks in a large flock.",
            keywords: ["penguins", "tail", "fur"],
            icon: "bulb",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Итоговые вопросы",
            text:
              "1) Чем **дикие** животные отличаются от **домашних**? 2) Почему человек должен **заботиться** о домашних животных?",
          },
          kz: {
            title: "Қорытынды сұрақтар",
            text:
              "1) **Жабайы** жануарлар **үй** жануарларынан немен ерекшеленеді? 2) Адам үй жануарларына неліктен **қамқорлық** жасауы керек?",
          },
          en: {
            title: "Wrap-up questions",
            text:
              "1) How do **wild** animals differ from **domestic** ones? 2) Why should people **take care** of domestic animals?",
          },
        },
      },
    ],
  },
  23: {
    intro: [
      {
        type: "audio",
        data: {
          ru: {
            title: "Аудио-гид к уроку",
            text:
              "Сегодня мы узнаем, что животные бывают дикими и домашними, и в чём их главное отличие.",
            caption: "Послушай вступление к уроку",
            durationLabel: "0:22",
          },
          kz: {
            title: "Сабақтың аудио-гиді",
            text:
              "Бүгін біз жануарлардың жабайы және үй жануарлары болып бөлінетінін, олардың айырмашылығы неде екенін білеміз.",
            caption: "Сабақтың кіріспесін тыңда",
            durationLabel: "0:22",
          },
          en: {
            title: "Lesson audio guide",
            text:
              "Today we'll learn that animals can be wild or domestic, and what is the main difference between them.",
            caption: "Listen to the lesson intro",
            durationLabel: "0:22",
          },
        },
      },
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Ключевые слова",
            title: "Дикие и домашние",
            slides: [
              { emoji: "🏠", caption: "Домашние животные / Үй жануарлары / Domestic animals" },
              { emoji: "🌲", caption: "Дикие животные / Жабайы жануарлар / Wild animals" },
              { emoji: "🌍", caption: "Среда обитания / Мекен орта / Habitat" },
            ],
          },
          kz: {
            groupLabel: "Кілт сөздер",
            title: "Жабайы және үй",
            slides: [
              { emoji: "🏠", caption: "Үй жануарлары / Домашние / Domestic animals" },
              { emoji: "🌲", caption: "Жабайы жануарлар / Дикие / Wild animals" },
              { emoji: "🌍", caption: "Мекен орта / Среда обитания / Habitat" },
            ],
          },
          en: {
            groupLabel: "Key words",
            title: "Wild and domestic",
            slides: [
              { emoji: "🏠", caption: "Domestic animals / Домашние / Үй жануарлары" },
              { emoji: "🌲", caption: "Wild animals / Дикие / Жабайы жануарлар" },
              { emoji: "🌍", caption: "Habitat / Среда обитания / Мекен орта" },
            ],
          },
        },
      },
    ],

    // Домашние животные
    scientists: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Домашние животные",
            slides: [
              { emoji: "🐕", caption: "Собаки живут рядом с людьми — охраняют дом." },
              { emoji: "🐄", caption: "Корова на пастбище даёт молоко." },
              { emoji: "🐐", caption: "Коза у забора — даёт молоко и шерсть." },
              { emoji: "🐎", caption: "Лошадь с жеребёнком — помогает человеку." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Үй жануарлары",
            slides: [
              { emoji: "🐕", caption: "Иттер адаммен бірге тұрып, үйді күзетеді." },
              { emoji: "🐄", caption: "Жайылымдағы сиыр сүт береді." },
              { emoji: "🐐", caption: "Қоршау жанындағы ешкі — сүт пен жүн береді." },
              { emoji: "🐎", caption: "Жылқы құлынымен — адамға көмектеседі." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Domestic animals",
            slides: [
              { emoji: "🐕", caption: "Dogs live with people — they guard the house." },
              { emoji: "🐄", caption: "A cow on the pasture gives milk." },
              { emoji: "🐐", caption: "A goat by the fence gives milk and wool." },
              { emoji: "🐎", caption: "A mare with her foal — helps people." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Проверь себя",
            question:
              "Кто из этих животных — домашний? Подумай и проверь ответ.",
            items: [
              { emoji: "🐕", label: "собака" },
              { emoji: "🐄", label: "корова" },
              { emoji: "🐐", label: "коза" },
            ],
            answer:
              "Все трое — домашние животные. Они живут рядом с человеком, приносят пользу, а человек заботится о них.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Өзіңді тексер",
            question:
              "Бұлардың қайсысы үй жануары? Ойлан да жауапты тексер.",
            items: [
              { emoji: "🐕", label: "ит" },
              { emoji: "🐄", label: "сиыр" },
              { emoji: "🐐", label: "ешкі" },
            ],
            answer:
              "Үшеуі де үй жануарлары. Олар адамның жанында тұрады, пайда әкеледі, адам оларды күтеді.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Check yourself",
            question:
              "Which of these are domestic animals? Think, then check.",
            items: [
              { emoji: "🐕", label: "dog" },
              { emoji: "🐄", label: "cow" },
              { emoji: "🐐", label: "goat" },
            ],
            answer:
              "All three are domestic animals. They live near people, are useful, and people take care of them.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Домашние** животные живут рядом с человеком, приносят **пользу**, а человек **заботится** о них.",
            terms: ["домашние", "пользу", "заботится"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Үй** жануарлары адамның жанында тұрады, **пайда** әкеледі, адам олар туралы **қамқорлық** жасайды.",
            terms: ["үй", "пайда", "қамқорлық"],
          },
          en: {
            title: "What I learned",
            text:
              "**Domestic** animals live near people, bring **benefit**, and people **take care** of them.",
            terms: ["domestic", "benefit", "take care"],
          },
        },
      },
    ],

    // Дикие животные
    observation: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Дикие животные",
            slides: [
              { emoji: "🐘", caption: "Слон живёт в жарких странах." },
              { emoji: "🦧", caption: "Орангутан живёт в тропических лесах." },
              { emoji: "🦅", caption: "Беркут парит над горами." },
              { emoji: "🦌", caption: "Сайгак бегает по степям Казахстана." },
              { emoji: "🐱", caption: "Рысь живёт в густых лесах." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Жабайы жануарлар",
            slides: [
              { emoji: "🐘", caption: "Піл ыстық елдерде тұрады." },
              { emoji: "🦧", caption: "Орангутан тропиктік ормандарда тұрады." },
              { emoji: "🦅", caption: "Бүркіт таулардың үстінде қалықтайды." },
              { emoji: "🦌", caption: "Киік Қазақстан даласында жүгіреді." },
              { emoji: "🐱", caption: "Сілеусін қалың орманда тұрады." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Wild animals",
            slides: [
              { emoji: "🐘", caption: "An elephant lives in hot countries." },
              { emoji: "🦧", caption: "An orangutan lives in tropical forests." },
              { emoji: "🦅", caption: "A golden eagle soars above the mountains." },
              { emoji: "🦌", caption: "A saiga runs across the steppes of Kazakhstan." },
              { emoji: "🐱", caption: "A lynx lives in dense forests." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Где они обитают?",
            question:
              "К какой группе относятся эти животные? Где они обитают?",
            items: [
              { emoji: "🐘", label: "слон" },
              { emoji: "🦅", label: "беркут" },
              { emoji: "🦌", label: "сайгак" },
            ],
            answer:
              "Все они — дикие животные. Слон живёт в саваннах, беркут — в горах, сайгак — в степях. Они сами добывают пищу.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Олар қайда тұрады?",
            question:
              "Бұл жануарлар қай топқа жатады? Олар қайда тұрады?",
            items: [
              { emoji: "🐘", label: "піл" },
              { emoji: "🦅", label: "бүркіт" },
              { emoji: "🦌", label: "киік" },
            ],
            answer:
              "Олардың барлығы — жабайы жануарлар. Піл саваннада, бүркіт тауда, киік далада тұрады. Олар тамағын өздері табады.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Where do they live?",
            question:
              "What group do these animals belong to? Where do they live?",
            items: [
              { emoji: "🐘", label: "elephant" },
              { emoji: "🦅", label: "eagle" },
              { emoji: "🦌", label: "saiga" },
            ],
            answer:
              "They are all wild animals. The elephant lives in savannas, the eagle in the mountains, the saiga in the steppes. They find food on their own.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Дикие** животные живут в **лесах**, **степях** и **горах**. Они сами добывают пищу и находят жильё.",
            terms: ["дикие", "лесах", "степях", "горах"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Жабайы** жануарлар **ормандарда**, **далада** және **тауларда** тұрады. Олар тамағын өздері табады, паналайтын жерін өздері іздейді.",
            terms: ["жабайы", "ормандарда", "далада", "тауларда"],
          },
          en: {
            title: "What I learned",
            text:
              "**Wild** animals live in **forests**, **steppes** and **mountains**. They find food and shelter on their own.",
            terms: ["wild", "forests", "steppes", "mountains"],
          },
        },
      },
      {
        type: "sort",
        data: {
          ru: {
            title: "Где обитают эти животные?",
            instruction:
              "Распредели животных по среде обитания.",
            categories: [
              { id: "land", label: "На земле / в лесу", emoji: "🌳" },
              { id: "water", label: "В воде", emoji: "🌊" },
              { id: "mount", label: "В горах", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "корова", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "заяц", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "лиса", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "архар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Проверить",
          },
          kz: {
            title: "Бұл жануарлар қайда тұрады?",
            instruction:
              "Жануарларды мекен ортасы бойынша бөл.",
            categories: [
              { id: "land", label: "Жерде / орманда", emoji: "🌳" },
              { id: "water", label: "Суда", emoji: "🌊" },
              { id: "mount", label: "Тауда", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "сиыр", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "қоян", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "түлкі", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "арқар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Тексеру",
          },
          en: {
            title: "Where do these animals live?",
            instruction:
              "Sort the animals by their habitat.",
            categories: [
              { id: "land", label: "On land / in forest", emoji: "🌳" },
              { id: "water", label: "In water", emoji: "🌊" },
              { id: "mount", label: "In mountains", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "cow", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "hare", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "fox", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "dolphin", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "argali", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Check",
          },
        },
      },
    ],

    // Итоги
    experiments: [
      {
        type: "fact",
        data: {
          ru: {
            title: "Найди в энциклопедии",
            text:
              "Узнай, какие редкие дикие животные живут в Казахстане. Запиши 3 примера и где они обитают.",
            keywords: ["энциклопедия", "Казахстан", "редкие"],
            icon: "sparkles",
          },
          kz: {
            title: "Энциклопедиядан тап",
            text:
              "Қазақстанда қандай сирек кездесетін жабайы жануарлар бар? 3 мысал жазып, қайда тұратынын көрсет.",
            keywords: ["энциклопедия", "Қазақстан", "сирек"],
            icon: "sparkles",
          },
          en: {
            title: "Find in the encyclopedia",
            text:
              "Find out which rare wild animals live in Kazakhstan. Write down 3 examples and where they live.",
            keywords: ["encyclopedia", "Kazakhstan", "rare"],
            icon: "sparkles",
          },
        },
      },
      {
        type: "fact",
        data: {
          ru: {
            title: "Это интересно!",
            text:
              "У молодых пингвинов хвост похож на белый мех. Это помогает их мамам быстро находить своих птенцов в большой стае.",
            keywords: ["пингвины", "хвост", "мех"],
            icon: "bulb",
          },
          kz: {
            title: "Бұл қызық!",
            text:
              "Жас пингвиндердің құйрығы ақ жүнге ұқсайды. Бұл аналарына үлкен топтан өз балапандарын тез табуға көмектеседі.",
            keywords: ["пингвин", "құйрық", "жүн"],
            icon: "bulb",
          },
          en: {
            title: "Did you know?",
            text:
              "Young penguins have tails that look like white fur. It helps their mothers quickly find their chicks in a large flock.",
            keywords: ["penguins", "tail", "fur"],
            icon: "bulb",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Итоговые вопросы",
            text:
              "1) Чем **дикие** животные отличаются от **домашних**? 2) Почему человек должен **заботиться** о домашних животных?",
          },
          kz: {
            title: "Қорытынды сұрақтар",
            text:
              "1) **Жабайы** жануарлар **үй** жануарларынан немен ерекшеленеді? 2) Адам үй жануарларына неліктен **қамқорлық** жасауы керек?",
          },
          en: {
            title: "Wrap-up questions",
            text:
              "1) How do **wild** animals differ from **domestic** ones? 2) Why should people **take care** of domestic animals?",
          },
        },
      },
    ],
  },
  24: {
    intro: [
      {
        type: "audio",
        data: {
          ru: {
            title: "Аудио-гид к уроку",
            text:
              "Сегодня мы узнаем, что животные бывают дикими и домашними, и в чём их главное отличие.",
            caption: "Послушай вступление к уроку",
            durationLabel: "0:22",
          },
          kz: {
            title: "Сабақтың аудио-гиді",
            text:
              "Бүгін біз жануарлардың жабайы және үй жануарлары болып бөлінетінін, олардың айырмашылығы неде екенін білеміз.",
            caption: "Сабақтың кіріспесін тыңда",
            durationLabel: "0:22",
          },
          en: {
            title: "Lesson audio guide",
            text:
              "Today we'll learn that animals can be wild or domestic, and what is the main difference between them.",
            caption: "Listen to the lesson intro",
            durationLabel: "0:22",
          },
        },
      },
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Ключевые слова",
            title: "Дикие и домашние",
            slides: [
              { emoji: "🏠", caption: "Домашние животные / Үй жануарлары / Domestic animals" },
              { emoji: "🌲", caption: "Дикие животные / Жабайы жануарлар / Wild animals" },
              { emoji: "🌍", caption: "Среда обитания / Мекен орта / Habitat" },
            ],
          },
          kz: {
            groupLabel: "Кілт сөздер",
            title: "Жабайы және үй",
            slides: [
              { emoji: "🏠", caption: "Үй жануарлары / Домашние / Domestic animals" },
              { emoji: "🌲", caption: "Жабайы жануарлар / Дикие / Wild animals" },
              { emoji: "🌍", caption: "Мекен орта / Среда обитания / Habitat" },
            ],
          },
          en: {
            groupLabel: "Key words",
            title: "Wild and domestic",
            slides: [
              { emoji: "🏠", caption: "Domestic animals / Домашние / Үй жануарлары" },
              { emoji: "🌲", caption: "Wild animals / Дикие / Жабайы жануарлар" },
              { emoji: "🌍", caption: "Habitat / Среда обитания / Мекен орта" },
            ],
          },
        },
      },
    ],

    // Домашние животные
    scientists: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Домашние животные",
            slides: [
              { emoji: "🐕", caption: "Собаки живут рядом с людьми — охраняют дом." },
              { emoji: "🐄", caption: "Корова на пастбище даёт молоко." },
              { emoji: "🐐", caption: "Коза у забора — даёт молоко и шерсть." },
              { emoji: "🐎", caption: "Лошадь с жеребёнком — помогает человеку." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Үй жануарлары",
            slides: [
              { emoji: "🐕", caption: "Иттер адаммен бірге тұрып, үйді күзетеді." },
              { emoji: "🐄", caption: "Жайылымдағы сиыр сүт береді." },
              { emoji: "🐐", caption: "Қоршау жанындағы ешкі — сүт пен жүн береді." },
              { emoji: "🐎", caption: "Жылқы құлынымен — адамға көмектеседі." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Domestic animals",
            slides: [
              { emoji: "🐕", caption: "Dogs live with people — they guard the house." },
              { emoji: "🐄", caption: "A cow on the pasture gives milk." },
              { emoji: "🐐", caption: "A goat by the fence gives milk and wool." },
              { emoji: "🐎", caption: "A mare with her foal — helps people." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Проверь себя",
            question:
              "Кто из этих животных — домашний? Подумай и проверь ответ.",
            items: [
              { emoji: "🐕", label: "собака" },
              { emoji: "🐄", label: "корова" },
              { emoji: "🐐", label: "коза" },
            ],
            answer:
              "Все трое — домашние животные. Они живут рядом с человеком, приносят пользу, а человек заботится о них.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Өзіңді тексер",
            question:
              "Бұлардың қайсысы үй жануары? Ойлан да жауапты тексер.",
            items: [
              { emoji: "🐕", label: "ит" },
              { emoji: "🐄", label: "сиыр" },
              { emoji: "🐐", label: "ешкі" },
            ],
            answer:
              "Үшеуі де үй жануарлары. Олар адамның жанында тұрады, пайда әкеледі, адам оларды күтеді.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Check yourself",
            question:
              "Which of these are domestic animals? Think, then check.",
            items: [
              { emoji: "🐕", label: "dog" },
              { emoji: "🐄", label: "cow" },
              { emoji: "🐐", label: "goat" },
            ],
            answer:
              "All three are domestic animals. They live near people, are useful, and people take care of them.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Домашние** животные живут рядом с человеком, приносят **пользу**, а человек **заботится** о них.",
            terms: ["домашние", "пользу", "заботится"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Үй** жануарлары адамның жанында тұрады, **пайда** әкеледі, адам олар туралы **қамқорлық** жасайды.",
            terms: ["үй", "пайда", "қамқорлық"],
          },
          en: {
            title: "What I learned",
            text:
              "**Domestic** animals live near people, bring **benefit**, and people **take care** of them.",
            terms: ["domestic", "benefit", "take care"],
          },
        },
      },
    ],

    // Дикие животные
    observation: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Дикие животные",
            slides: [
              { emoji: "🐘", caption: "Слон живёт в жарких странах." },
              { emoji: "🦧", caption: "Орангутан живёт в тропических лесах." },
              { emoji: "🦅", caption: "Беркут парит над горами." },
              { emoji: "🦌", caption: "Сайгак бегает по степям Казахстана." },
              { emoji: "🐱", caption: "Рысь живёт в густых лесах." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Жабайы жануарлар",
            slides: [
              { emoji: "🐘", caption: "Піл ыстық елдерде тұрады." },
              { emoji: "🦧", caption: "Орангутан тропиктік ормандарда тұрады." },
              { emoji: "🦅", caption: "Бүркіт таулардың үстінде қалықтайды." },
              { emoji: "🦌", caption: "Киік Қазақстан даласында жүгіреді." },
              { emoji: "🐱", caption: "Сілеусін қалың орманда тұрады." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Wild animals",
            slides: [
              { emoji: "🐘", caption: "An elephant lives in hot countries." },
              { emoji: "🦧", caption: "An orangutan lives in tropical forests." },
              { emoji: "🦅", caption: "A golden eagle soars above the mountains." },
              { emoji: "🦌", caption: "A saiga runs across the steppes of Kazakhstan." },
              { emoji: "🐱", caption: "A lynx lives in dense forests." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Где они обитают?",
            question:
              "К какой группе относятся эти животные? Где они обитают?",
            items: [
              { emoji: "🐘", label: "слон" },
              { emoji: "🦅", label: "беркут" },
              { emoji: "🦌", label: "сайгак" },
            ],
            answer:
              "Все они — дикие животные. Слон живёт в саваннах, беркут — в горах, сайгак — в степях. Они сами добывают пищу.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Олар қайда тұрады?",
            question:
              "Бұл жануарлар қай топқа жатады? Олар қайда тұрады?",
            items: [
              { emoji: "🐘", label: "піл" },
              { emoji: "🦅", label: "бүркіт" },
              { emoji: "🦌", label: "киік" },
            ],
            answer:
              "Олардың барлығы — жабайы жануарлар. Піл саваннада, бүркіт тауда, киік далада тұрады. Олар тамағын өздері табады.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Where do they live?",
            question:
              "What group do these animals belong to? Where do they live?",
            items: [
              { emoji: "🐘", label: "elephant" },
              { emoji: "🦅", label: "eagle" },
              { emoji: "🦌", label: "saiga" },
            ],
            answer:
              "They are all wild animals. The elephant lives in savannas, the eagle in the mountains, the saiga in the steppes. They find food on their own.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Дикие** животные живут в **лесах**, **степях** и **горах**. Они сами добывают пищу и находят жильё.",
            terms: ["дикие", "лесах", "степях", "горах"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Жабайы** жануарлар **ормандарда**, **далада** және **тауларда** тұрады. Олар тамағын өздері табады, паналайтын жерін өздері іздейді.",
            terms: ["жабайы", "ормандарда", "далада", "тауларда"],
          },
          en: {
            title: "What I learned",
            text:
              "**Wild** animals live in **forests**, **steppes** and **mountains**. They find food and shelter on their own.",
            terms: ["wild", "forests", "steppes", "mountains"],
          },
        },
      },
      {
        type: "sort",
        data: {
          ru: {
            title: "Где обитают эти животные?",
            instruction:
              "Распредели животных по среде обитания.",
            categories: [
              { id: "land", label: "На земле / в лесу", emoji: "🌳" },
              { id: "water", label: "В воде", emoji: "🌊" },
              { id: "mount", label: "В горах", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "корова", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "заяц", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "лиса", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "архар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Проверить",
          },
          kz: {
            title: "Бұл жануарлар қайда тұрады?",
            instruction:
              "Жануарларды мекен ортасы бойынша бөл.",
            categories: [
              { id: "land", label: "Жерде / орманда", emoji: "🌳" },
              { id: "water", label: "Суда", emoji: "🌊" },
              { id: "mount", label: "Тауда", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "сиыр", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "қоян", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "түлкі", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "арқар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Тексеру",
          },
          en: {
            title: "Where do these animals live?",
            instruction:
              "Sort the animals by their habitat.",
            categories: [
              { id: "land", label: "On land / in forest", emoji: "🌳" },
              { id: "water", label: "In water", emoji: "🌊" },
              { id: "mount", label: "In mountains", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "cow", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "hare", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "fox", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "dolphin", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "argali", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Check",
          },
        },
      },
    ],

    // Итоги
    experiments: [
      {
        type: "fact",
        data: {
          ru: {
            title: "Найди в энциклопедии",
            text:
              "Узнай, какие редкие дикие животные живут в Казахстане. Запиши 3 примера и где они обитают.",
            keywords: ["энциклопедия", "Казахстан", "редкие"],
            icon: "sparkles",
          },
          kz: {
            title: "Энциклопедиядан тап",
            text:
              "Қазақстанда қандай сирек кездесетін жабайы жануарлар бар? 3 мысал жазып, қайда тұратынын көрсет.",
            keywords: ["энциклопедия", "Қазақстан", "сирек"],
            icon: "sparkles",
          },
          en: {
            title: "Find in the encyclopedia",
            text:
              "Find out which rare wild animals live in Kazakhstan. Write down 3 examples and where they live.",
            keywords: ["encyclopedia", "Kazakhstan", "rare"],
            icon: "sparkles",
          },
        },
      },
      {
        type: "fact",
        data: {
          ru: {
            title: "Это интересно!",
            text:
              "У молодых пингвинов хвост похож на белый мех. Это помогает их мамам быстро находить своих птенцов в большой стае.",
            keywords: ["пингвины", "хвост", "мех"],
            icon: "bulb",
          },
          kz: {
            title: "Бұл қызық!",
            text:
              "Жас пингвиндердің құйрығы ақ жүнге ұқсайды. Бұл аналарына үлкен топтан өз балапандарын тез табуға көмектеседі.",
            keywords: ["пингвин", "құйрық", "жүн"],
            icon: "bulb",
          },
          en: {
            title: "Did you know?",
            text:
              "Young penguins have tails that look like white fur. It helps their mothers quickly find their chicks in a large flock.",
            keywords: ["penguins", "tail", "fur"],
            icon: "bulb",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Итоговые вопросы",
            text:
              "1) Чем **дикие** животные отличаются от **домашних**? 2) Почему человек должен **заботиться** о домашних животных?",
          },
          kz: {
            title: "Қорытынды сұрақтар",
            text:
              "1) **Жабайы** жануарлар **үй** жануарларынан немен ерекшеленеді? 2) Адам үй жануарларына неліктен **қамқорлық** жасауы керек?",
          },
          en: {
            title: "Wrap-up questions",
            text:
              "1) How do **wild** animals differ from **domestic** ones? 2) Why should people **take care** of domestic animals?",
          },
        },
      },
    ],
  },
  25: {
    intro: [
      {
        type: "audio",
        data: {
          ru: {
            title: "Аудио-гид к уроку",
            text:
              "Сегодня мы узнаем, что животные бывают дикими и домашними, и в чём их главное отличие.",
            caption: "Послушай вступление к уроку",
            durationLabel: "0:22",
          },
          kz: {
            title: "Сабақтың аудио-гиді",
            text:
              "Бүгін біз жануарлардың жабайы және үй жануарлары болып бөлінетінін, олардың айырмашылығы неде екенін білеміз.",
            caption: "Сабақтың кіріспесін тыңда",
            durationLabel: "0:22",
          },
          en: {
            title: "Lesson audio guide",
            text:
              "Today we'll learn that animals can be wild or domestic, and what is the main difference between them.",
            caption: "Listen to the lesson intro",
            durationLabel: "0:22",
          },
        },
      },
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Ключевые слова",
            title: "Дикие и домашние",
            slides: [
              { emoji: "🏠", caption: "Домашние животные / Үй жануарлары / Domestic animals" },
              { emoji: "🌲", caption: "Дикие животные / Жабайы жануарлар / Wild animals" },
              { emoji: "🌍", caption: "Среда обитания / Мекен орта / Habitat" },
            ],
          },
          kz: {
            groupLabel: "Кілт сөздер",
            title: "Жабайы және үй",
            slides: [
              { emoji: "🏠", caption: "Үй жануарлары / Домашние / Domestic animals" },
              { emoji: "🌲", caption: "Жабайы жануарлар / Дикие / Wild animals" },
              { emoji: "🌍", caption: "Мекен орта / Среда обитания / Habitat" },
            ],
          },
          en: {
            groupLabel: "Key words",
            title: "Wild and domestic",
            slides: [
              { emoji: "🏠", caption: "Domestic animals / Домашние / Үй жануарлары" },
              { emoji: "🌲", caption: "Wild animals / Дикие / Жабайы жануарлар" },
              { emoji: "🌍", caption: "Habitat / Среда обитания / Мекен орта" },
            ],
          },
        },
      },
    ],

    // Домашние животные
    scientists: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Домашние животные",
            slides: [
              { emoji: "🐕", caption: "Собаки живут рядом с людьми — охраняют дом." },
              { emoji: "🐄", caption: "Корова на пастбище даёт молоко." },
              { emoji: "🐐", caption: "Коза у забора — даёт молоко и шерсть." },
              { emoji: "🐎", caption: "Лошадь с жеребёнком — помогает человеку." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Үй жануарлары",
            slides: [
              { emoji: "🐕", caption: "Иттер адаммен бірге тұрып, үйді күзетеді." },
              { emoji: "🐄", caption: "Жайылымдағы сиыр сүт береді." },
              { emoji: "🐐", caption: "Қоршау жанындағы ешкі — сүт пен жүн береді." },
              { emoji: "🐎", caption: "Жылқы құлынымен — адамға көмектеседі." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Domestic animals",
            slides: [
              { emoji: "🐕", caption: "Dogs live with people — they guard the house." },
              { emoji: "🐄", caption: "A cow on the pasture gives milk." },
              { emoji: "🐐", caption: "A goat by the fence gives milk and wool." },
              { emoji: "🐎", caption: "A mare with her foal — helps people." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Проверь себя",
            question:
              "Кто из этих животных — домашний? Подумай и проверь ответ.",
            items: [
              { emoji: "🐕", label: "собака" },
              { emoji: "🐄", label: "корова" },
              { emoji: "🐐", label: "коза" },
            ],
            answer:
              "Все трое — домашние животные. Они живут рядом с человеком, приносят пользу, а человек заботится о них.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Өзіңді тексер",
            question:
              "Бұлардың қайсысы үй жануары? Ойлан да жауапты тексер.",
            items: [
              { emoji: "🐕", label: "ит" },
              { emoji: "🐄", label: "сиыр" },
              { emoji: "🐐", label: "ешкі" },
            ],
            answer:
              "Үшеуі де үй жануарлары. Олар адамның жанында тұрады, пайда әкеледі, адам оларды күтеді.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Check yourself",
            question:
              "Which of these are domestic animals? Think, then check.",
            items: [
              { emoji: "🐕", label: "dog" },
              { emoji: "🐄", label: "cow" },
              { emoji: "🐐", label: "goat" },
            ],
            answer:
              "All three are domestic animals. They live near people, are useful, and people take care of them.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Домашние** животные живут рядом с человеком, приносят **пользу**, а человек **заботится** о них.",
            terms: ["домашние", "пользу", "заботится"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Үй** жануарлары адамның жанында тұрады, **пайда** әкеледі, адам олар туралы **қамқорлық** жасайды.",
            terms: ["үй", "пайда", "қамқорлық"],
          },
          en: {
            title: "What I learned",
            text:
              "**Domestic** animals live near people, bring **benefit**, and people **take care** of them.",
            terms: ["domestic", "benefit", "take care"],
          },
        },
      },
    ],

    // Дикие животные
    observation: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Дикие животные",
            slides: [
              { emoji: "🐘", caption: "Слон живёт в жарких странах." },
              { emoji: "🦧", caption: "Орангутан живёт в тропических лесах." },
              { emoji: "🦅", caption: "Беркут парит над горами." },
              { emoji: "🦌", caption: "Сайгак бегает по степям Казахстана." },
              { emoji: "🐱", caption: "Рысь живёт в густых лесах." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Жабайы жануарлар",
            slides: [
              { emoji: "🐘", caption: "Піл ыстық елдерде тұрады." },
              { emoji: "🦧", caption: "Орангутан тропиктік ормандарда тұрады." },
              { emoji: "🦅", caption: "Бүркіт таулардың үстінде қалықтайды." },
              { emoji: "🦌", caption: "Киік Қазақстан даласында жүгіреді." },
              { emoji: "🐱", caption: "Сілеусін қалың орманда тұрады." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Wild animals",
            slides: [
              { emoji: "🐘", caption: "An elephant lives in hot countries." },
              { emoji: "🦧", caption: "An orangutan lives in tropical forests." },
              { emoji: "🦅", caption: "A golden eagle soars above the mountains." },
              { emoji: "🦌", caption: "A saiga runs across the steppes of Kazakhstan." },
              { emoji: "🐱", caption: "A lynx lives in dense forests." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Где они обитают?",
            question:
              "К какой группе относятся эти животные? Где они обитают?",
            items: [
              { emoji: "🐘", label: "слон" },
              { emoji: "🦅", label: "беркут" },
              { emoji: "🦌", label: "сайгак" },
            ],
            answer:
              "Все они — дикие животные. Слон живёт в саваннах, беркут — в горах, сайгак — в степях. Они сами добывают пищу.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Олар қайда тұрады?",
            question:
              "Бұл жануарлар қай топқа жатады? Олар қайда тұрады?",
            items: [
              { emoji: "🐘", label: "піл" },
              { emoji: "🦅", label: "бүркіт" },
              { emoji: "🦌", label: "киік" },
            ],
            answer:
              "Олардың барлығы — жабайы жануарлар. Піл саваннада, бүркіт тауда, киік далада тұрады. Олар тамағын өздері табады.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Where do they live?",
            question:
              "What group do these animals belong to? Where do they live?",
            items: [
              { emoji: "🐘", label: "elephant" },
              { emoji: "🦅", label: "eagle" },
              { emoji: "🦌", label: "saiga" },
            ],
            answer:
              "They are all wild animals. The elephant lives in savannas, the eagle in the mountains, the saiga in the steppes. They find food on their own.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Дикие** животные живут в **лесах**, **степях** и **горах**. Они сами добывают пищу и находят жильё.",
            terms: ["дикие", "лесах", "степях", "горах"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Жабайы** жануарлар **ормандарда**, **далада** және **тауларда** тұрады. Олар тамағын өздері табады, паналайтын жерін өздері іздейді.",
            terms: ["жабайы", "ормандарда", "далада", "тауларда"],
          },
          en: {
            title: "What I learned",
            text:
              "**Wild** animals live in **forests**, **steppes** and **mountains**. They find food and shelter on their own.",
            terms: ["wild", "forests", "steppes", "mountains"],
          },
        },
      },
      {
        type: "sort",
        data: {
          ru: {
            title: "Где обитают эти животные?",
            instruction:
              "Распредели животных по среде обитания.",
            categories: [
              { id: "land", label: "На земле / в лесу", emoji: "🌳" },
              { id: "water", label: "В воде", emoji: "🌊" },
              { id: "mount", label: "В горах", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "корова", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "заяц", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "лиса", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "архар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Проверить",
          },
          kz: {
            title: "Бұл жануарлар қайда тұрады?",
            instruction:
              "Жануарларды мекен ортасы бойынша бөл.",
            categories: [
              { id: "land", label: "Жерде / орманда", emoji: "🌳" },
              { id: "water", label: "Суда", emoji: "🌊" },
              { id: "mount", label: "Тауда", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "сиыр", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "қоян", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "түлкі", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "арқар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Тексеру",
          },
          en: {
            title: "Where do these animals live?",
            instruction:
              "Sort the animals by their habitat.",
            categories: [
              { id: "land", label: "On land / in forest", emoji: "🌳" },
              { id: "water", label: "In water", emoji: "🌊" },
              { id: "mount", label: "In mountains", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "cow", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "hare", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "fox", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "dolphin", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "argali", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Check",
          },
        },
      },
    ],

    // Итоги
    experiments: [
      {
        type: "fact",
        data: {
          ru: {
            title: "Найди в энциклопедии",
            text:
              "Узнай, какие редкие дикие животные живут в Казахстане. Запиши 3 примера и где они обитают.",
            keywords: ["энциклопедия", "Казахстан", "редкие"],
            icon: "sparkles",
          },
          kz: {
            title: "Энциклопедиядан тап",
            text:
              "Қазақстанда қандай сирек кездесетін жабайы жануарлар бар? 3 мысал жазып, қайда тұратынын көрсет.",
            keywords: ["энциклопедия", "Қазақстан", "сирек"],
            icon: "sparkles",
          },
          en: {
            title: "Find in the encyclopedia",
            text:
              "Find out which rare wild animals live in Kazakhstan. Write down 3 examples and where they live.",
            keywords: ["encyclopedia", "Kazakhstan", "rare"],
            icon: "sparkles",
          },
        },
      },
      {
        type: "fact",
        data: {
          ru: {
            title: "Это интересно!",
            text:
              "У молодых пингвинов хвост похож на белый мех. Это помогает их мамам быстро находить своих птенцов в большой стае.",
            keywords: ["пингвины", "хвост", "мех"],
            icon: "bulb",
          },
          kz: {
            title: "Бұл қызық!",
            text:
              "Жас пингвиндердің құйрығы ақ жүнге ұқсайды. Бұл аналарына үлкен топтан өз балапандарын тез табуға көмектеседі.",
            keywords: ["пингвин", "құйрық", "жүн"],
            icon: "bulb",
          },
          en: {
            title: "Did you know?",
            text:
              "Young penguins have tails that look like white fur. It helps their mothers quickly find their chicks in a large flock.",
            keywords: ["penguins", "tail", "fur"],
            icon: "bulb",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Итоговые вопросы",
            text:
              "1) Чем **дикие** животные отличаются от **домашних**? 2) Почему человек должен **заботиться** о домашних животных?",
          },
          kz: {
            title: "Қорытынды сұрақтар",
            text:
              "1) **Жабайы** жануарлар **үй** жануарларынан немен ерекшеленеді? 2) Адам үй жануарларына неліктен **қамқорлық** жасауы керек?",
          },
          en: {
            title: "Wrap-up questions",
            text:
              "1) How do **wild** animals differ from **domestic** ones? 2) Why should people **take care** of domestic animals?",
          },
        },
      },
    ],
  },
  26: {
    intro: [
      {
        type: "audio",
        data: {
          ru: {
            title: "Аудио-гид к уроку",
            text:
              "Сегодня мы узнаем, что животные бывают дикими и домашними, и в чём их главное отличие.",
            caption: "Послушай вступление к уроку",
            durationLabel: "0:22",
          },
          kz: {
            title: "Сабақтың аудио-гиді",
            text:
              "Бүгін біз жануарлардың жабайы және үй жануарлары болып бөлінетінін, олардың айырмашылығы неде екенін білеміз.",
            caption: "Сабақтың кіріспесін тыңда",
            durationLabel: "0:22",
          },
          en: {
            title: "Lesson audio guide",
            text:
              "Today we'll learn that animals can be wild or domestic, and what is the main difference between them.",
            caption: "Listen to the lesson intro",
            durationLabel: "0:22",
          },
        },
      },
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Ключевые слова",
            title: "Дикие и домашние",
            slides: [
              { emoji: "🏠", caption: "Домашние животные / Үй жануарлары / Domestic animals" },
              { emoji: "🌲", caption: "Дикие животные / Жабайы жануарлар / Wild animals" },
              { emoji: "🌍", caption: "Среда обитания / Мекен орта / Habitat" },
            ],
          },
          kz: {
            groupLabel: "Кілт сөздер",
            title: "Жабайы және үй",
            slides: [
              { emoji: "🏠", caption: "Үй жануарлары / Домашние / Domestic animals" },
              { emoji: "🌲", caption: "Жабайы жануарлар / Дикие / Wild animals" },
              { emoji: "🌍", caption: "Мекен орта / Среда обитания / Habitat" },
            ],
          },
          en: {
            groupLabel: "Key words",
            title: "Wild and domestic",
            slides: [
              { emoji: "🏠", caption: "Domestic animals / Домашние / Үй жануарлары" },
              { emoji: "🌲", caption: "Wild animals / Дикие / Жабайы жануарлар" },
              { emoji: "🌍", caption: "Habitat / Среда обитания / Мекен орта" },
            ],
          },
        },
      },
    ],

    // Домашние животные
    scientists: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Домашние животные",
            slides: [
              { emoji: "🐕", caption: "Собаки живут рядом с людьми — охраняют дом." },
              { emoji: "🐄", caption: "Корова на пастбище даёт молоко." },
              { emoji: "🐐", caption: "Коза у забора — даёт молоко и шерсть." },
              { emoji: "🐎", caption: "Лошадь с жеребёнком — помогает человеку." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Үй жануарлары",
            slides: [
              { emoji: "🐕", caption: "Иттер адаммен бірге тұрып, үйді күзетеді." },
              { emoji: "🐄", caption: "Жайылымдағы сиыр сүт береді." },
              { emoji: "🐐", caption: "Қоршау жанындағы ешкі — сүт пен жүн береді." },
              { emoji: "🐎", caption: "Жылқы құлынымен — адамға көмектеседі." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Domestic animals",
            slides: [
              { emoji: "🐕", caption: "Dogs live with people — they guard the house." },
              { emoji: "🐄", caption: "A cow on the pasture gives milk." },
              { emoji: "🐐", caption: "A goat by the fence gives milk and wool." },
              { emoji: "🐎", caption: "A mare with her foal — helps people." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Проверь себя",
            question:
              "Кто из этих животных — домашний? Подумай и проверь ответ.",
            items: [
              { emoji: "🐕", label: "собака" },
              { emoji: "🐄", label: "корова" },
              { emoji: "🐐", label: "коза" },
            ],
            answer:
              "Все трое — домашние животные. Они живут рядом с человеком, приносят пользу, а человек заботится о них.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Өзіңді тексер",
            question:
              "Бұлардың қайсысы үй жануары? Ойлан да жауапты тексер.",
            items: [
              { emoji: "🐕", label: "ит" },
              { emoji: "🐄", label: "сиыр" },
              { emoji: "🐐", label: "ешкі" },
            ],
            answer:
              "Үшеуі де үй жануарлары. Олар адамның жанында тұрады, пайда әкеледі, адам оларды күтеді.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Check yourself",
            question:
              "Which of these are domestic animals? Think, then check.",
            items: [
              { emoji: "🐕", label: "dog" },
              { emoji: "🐄", label: "cow" },
              { emoji: "🐐", label: "goat" },
            ],
            answer:
              "All three are domestic animals. They live near people, are useful, and people take care of them.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Домашние** животные живут рядом с человеком, приносят **пользу**, а человек **заботится** о них.",
            terms: ["домашние", "пользу", "заботится"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Үй** жануарлары адамның жанында тұрады, **пайда** әкеледі, адам олар туралы **қамқорлық** жасайды.",
            terms: ["үй", "пайда", "қамқорлық"],
          },
          en: {
            title: "What I learned",
            text:
              "**Domestic** animals live near people, bring **benefit**, and people **take care** of them.",
            terms: ["domestic", "benefit", "take care"],
          },
        },
      },
    ],

    // Дикие животные
    observation: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Дикие животные",
            slides: [
              { emoji: "🐘", caption: "Слон живёт в жарких странах." },
              { emoji: "🦧", caption: "Орангутан живёт в тропических лесах." },
              { emoji: "🦅", caption: "Беркут парит над горами." },
              { emoji: "🦌", caption: "Сайгак бегает по степям Казахстана." },
              { emoji: "🐱", caption: "Рысь живёт в густых лесах." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Жабайы жануарлар",
            slides: [
              { emoji: "🐘", caption: "Піл ыстық елдерде тұрады." },
              { emoji: "🦧", caption: "Орангутан тропиктік ормандарда тұрады." },
              { emoji: "🦅", caption: "Бүркіт таулардың үстінде қалықтайды." },
              { emoji: "🦌", caption: "Киік Қазақстан даласында жүгіреді." },
              { emoji: "🐱", caption: "Сілеусін қалың орманда тұрады." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Wild animals",
            slides: [
              { emoji: "🐘", caption: "An elephant lives in hot countries." },
              { emoji: "🦧", caption: "An orangutan lives in tropical forests." },
              { emoji: "🦅", caption: "A golden eagle soars above the mountains." },
              { emoji: "🦌", caption: "A saiga runs across the steppes of Kazakhstan." },
              { emoji: "🐱", caption: "A lynx lives in dense forests." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Где они обитают?",
            question:
              "К какой группе относятся эти животные? Где они обитают?",
            items: [
              { emoji: "🐘", label: "слон" },
              { emoji: "🦅", label: "беркут" },
              { emoji: "🦌", label: "сайгак" },
            ],
            answer:
              "Все они — дикие животные. Слон живёт в саваннах, беркут — в горах, сайгак — в степях. Они сами добывают пищу.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Олар қайда тұрады?",
            question:
              "Бұл жануарлар қай топқа жатады? Олар қайда тұрады?",
            items: [
              { emoji: "🐘", label: "піл" },
              { emoji: "🦅", label: "бүркіт" },
              { emoji: "🦌", label: "киік" },
            ],
            answer:
              "Олардың барлығы — жабайы жануарлар. Піл саваннада, бүркіт тауда, киік далада тұрады. Олар тамағын өздері табады.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Where do they live?",
            question:
              "What group do these animals belong to? Where do they live?",
            items: [
              { emoji: "🐘", label: "elephant" },
              { emoji: "🦅", label: "eagle" },
              { emoji: "🦌", label: "saiga" },
            ],
            answer:
              "They are all wild animals. The elephant lives in savannas, the eagle in the mountains, the saiga in the steppes. They find food on their own.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Дикие** животные живут в **лесах**, **степях** и **горах**. Они сами добывают пищу и находят жильё.",
            terms: ["дикие", "лесах", "степях", "горах"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Жабайы** жануарлар **ормандарда**, **далада** және **тауларда** тұрады. Олар тамағын өздері табады, паналайтын жерін өздері іздейді.",
            terms: ["жабайы", "ормандарда", "далада", "тауларда"],
          },
          en: {
            title: "What I learned",
            text:
              "**Wild** animals live in **forests**, **steppes** and **mountains**. They find food and shelter on their own.",
            terms: ["wild", "forests", "steppes", "mountains"],
          },
        },
      },
      {
        type: "sort",
        data: {
          ru: {
            title: "Где обитают эти животные?",
            instruction:
              "Распредели животных по среде обитания.",
            categories: [
              { id: "land", label: "На земле / в лесу", emoji: "🌳" },
              { id: "water", label: "В воде", emoji: "🌊" },
              { id: "mount", label: "В горах", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "корова", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "заяц", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "лиса", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "архар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Проверить",
          },
          kz: {
            title: "Бұл жануарлар қайда тұрады?",
            instruction:
              "Жануарларды мекен ортасы бойынша бөл.",
            categories: [
              { id: "land", label: "Жерде / орманда", emoji: "🌳" },
              { id: "water", label: "Суда", emoji: "🌊" },
              { id: "mount", label: "Тауда", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "сиыр", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "қоян", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "түлкі", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "арқар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Тексеру",
          },
          en: {
            title: "Where do these animals live?",
            instruction:
              "Sort the animals by their habitat.",
            categories: [
              { id: "land", label: "On land / in forest", emoji: "🌳" },
              { id: "water", label: "In water", emoji: "🌊" },
              { id: "mount", label: "In mountains", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "cow", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "hare", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "fox", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "dolphin", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "argali", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Check",
          },
        },
      },
    ],

    // Итоги
    experiments: [
      {
        type: "fact",
        data: {
          ru: {
            title: "Найди в энциклопедии",
            text:
              "Узнай, какие редкие дикие животные живут в Казахстане. Запиши 3 примера и где они обитают.",
            keywords: ["энциклопедия", "Казахстан", "редкие"],
            icon: "sparkles",
          },
          kz: {
            title: "Энциклопедиядан тап",
            text:
              "Қазақстанда қандай сирек кездесетін жабайы жануарлар бар? 3 мысал жазып, қайда тұратынын көрсет.",
            keywords: ["энциклопедия", "Қазақстан", "сирек"],
            icon: "sparkles",
          },
          en: {
            title: "Find in the encyclopedia",
            text:
              "Find out which rare wild animals live in Kazakhstan. Write down 3 examples and where they live.",
            keywords: ["encyclopedia", "Kazakhstan", "rare"],
            icon: "sparkles",
          },
        },
      },
      {
        type: "fact",
        data: {
          ru: {
            title: "Это интересно!",
            text:
              "У молодых пингвинов хвост похож на белый мех. Это помогает их мамам быстро находить своих птенцов в большой стае.",
            keywords: ["пингвины", "хвост", "мех"],
            icon: "bulb",
          },
          kz: {
            title: "Бұл қызық!",
            text:
              "Жас пингвиндердің құйрығы ақ жүнге ұқсайды. Бұл аналарына үлкен топтан өз балапандарын тез табуға көмектеседі.",
            keywords: ["пингвин", "құйрық", "жүн"],
            icon: "bulb",
          },
          en: {
            title: "Did you know?",
            text:
              "Young penguins have tails that look like white fur. It helps their mothers quickly find their chicks in a large flock.",
            keywords: ["penguins", "tail", "fur"],
            icon: "bulb",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Итоговые вопросы",
            text:
              "1) Чем **дикие** животные отличаются от **домашних**? 2) Почему человек должен **заботиться** о домашних животных?",
          },
          kz: {
            title: "Қорытынды сұрақтар",
            text:
              "1) **Жабайы** жануарлар **үй** жануарларынан немен ерекшеленеді? 2) Адам үй жануарларына неліктен **қамқорлық** жасауы керек?",
          },
          en: {
            title: "Wrap-up questions",
            text:
              "1) How do **wild** animals differ from **domestic** ones? 2) Why should people **take care** of domestic animals?",
          },
        },
      },
    ],
  },
  27: {
    intro: [
      {
        type: "audio",
        data: {
          ru: {
            title: "Аудио-гид к уроку",
            text:
              "Сегодня мы узнаем, что животные бывают дикими и домашними, и в чём их главное отличие.",
            caption: "Послушай вступление к уроку",
            durationLabel: "0:22",
          },
          kz: {
            title: "Сабақтың аудио-гиді",
            text:
              "Бүгін біз жануарлардың жабайы және үй жануарлары болып бөлінетінін, олардың айырмашылығы неде екенін білеміз.",
            caption: "Сабақтың кіріспесін тыңда",
            durationLabel: "0:22",
          },
          en: {
            title: "Lesson audio guide",
            text:
              "Today we'll learn that animals can be wild or domestic, and what is the main difference between them.",
            caption: "Listen to the lesson intro",
            durationLabel: "0:22",
          },
        },
      },
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Ключевые слова",
            title: "Дикие и домашние",
            slides: [
              { emoji: "🏠", caption: "Домашние животные / Үй жануарлары / Domestic animals" },
              { emoji: "🌲", caption: "Дикие животные / Жабайы жануарлар / Wild animals" },
              { emoji: "🌍", caption: "Среда обитания / Мекен орта / Habitat" },
            ],
          },
          kz: {
            groupLabel: "Кілт сөздер",
            title: "Жабайы және үй",
            slides: [
              { emoji: "🏠", caption: "Үй жануарлары / Домашние / Domestic animals" },
              { emoji: "🌲", caption: "Жабайы жануарлар / Дикие / Wild animals" },
              { emoji: "🌍", caption: "Мекен орта / Среда обитания / Habitat" },
            ],
          },
          en: {
            groupLabel: "Key words",
            title: "Wild and domestic",
            slides: [
              { emoji: "🏠", caption: "Domestic animals / Домашние / Үй жануарлары" },
              { emoji: "🌲", caption: "Wild animals / Дикие / Жабайы жануарлар" },
              { emoji: "🌍", caption: "Habitat / Среда обитания / Мекен орта" },
            ],
          },
        },
      },
    ],

    // Домашние животные
    scientists: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Домашние животные",
            slides: [
              { emoji: "🐕", caption: "Собаки живут рядом с людьми — охраняют дом." },
              { emoji: "🐄", caption: "Корова на пастбище даёт молоко." },
              { emoji: "🐐", caption: "Коза у забора — даёт молоко и шерсть." },
              { emoji: "🐎", caption: "Лошадь с жеребёнком — помогает человеку." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Үй жануарлары",
            slides: [
              { emoji: "🐕", caption: "Иттер адаммен бірге тұрып, үйді күзетеді." },
              { emoji: "🐄", caption: "Жайылымдағы сиыр сүт береді." },
              { emoji: "🐐", caption: "Қоршау жанындағы ешкі — сүт пен жүн береді." },
              { emoji: "🐎", caption: "Жылқы құлынымен — адамға көмектеседі." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Domestic animals",
            slides: [
              { emoji: "🐕", caption: "Dogs live with people — they guard the house." },
              { emoji: "🐄", caption: "A cow on the pasture gives milk." },
              { emoji: "🐐", caption: "A goat by the fence gives milk and wool." },
              { emoji: "🐎", caption: "A mare with her foal — helps people." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Проверь себя",
            question:
              "Кто из этих животных — домашний? Подумай и проверь ответ.",
            items: [
              { emoji: "🐕", label: "собака" },
              { emoji: "🐄", label: "корова" },
              { emoji: "🐐", label: "коза" },
            ],
            answer:
              "Все трое — домашние животные. Они живут рядом с человеком, приносят пользу, а человек заботится о них.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Өзіңді тексер",
            question:
              "Бұлардың қайсысы үй жануары? Ойлан да жауапты тексер.",
            items: [
              { emoji: "🐕", label: "ит" },
              { emoji: "🐄", label: "сиыр" },
              { emoji: "🐐", label: "ешкі" },
            ],
            answer:
              "Үшеуі де үй жануарлары. Олар адамның жанында тұрады, пайда әкеледі, адам оларды күтеді.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Check yourself",
            question:
              "Which of these are domestic animals? Think, then check.",
            items: [
              { emoji: "🐕", label: "dog" },
              { emoji: "🐄", label: "cow" },
              { emoji: "🐐", label: "goat" },
            ],
            answer:
              "All three are domestic animals. They live near people, are useful, and people take care of them.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Домашние** животные живут рядом с человеком, приносят **пользу**, а человек **заботится** о них.",
            terms: ["домашние", "пользу", "заботится"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Үй** жануарлары адамның жанында тұрады, **пайда** әкеледі, адам олар туралы **қамқорлық** жасайды.",
            terms: ["үй", "пайда", "қамқорлық"],
          },
          en: {
            title: "What I learned",
            text:
              "**Domestic** animals live near people, bring **benefit**, and people **take care** of them.",
            terms: ["domestic", "benefit", "take care"],
          },
        },
      },
    ],

    // Дикие животные
    observation: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Дикие животные",
            slides: [
              { emoji: "🐘", caption: "Слон живёт в жарких странах." },
              { emoji: "🦧", caption: "Орангутан живёт в тропических лесах." },
              { emoji: "🦅", caption: "Беркут парит над горами." },
              { emoji: "🦌", caption: "Сайгак бегает по степям Казахстана." },
              { emoji: "🐱", caption: "Рысь живёт в густых лесах." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Жабайы жануарлар",
            slides: [
              { emoji: "🐘", caption: "Піл ыстық елдерде тұрады." },
              { emoji: "🦧", caption: "Орангутан тропиктік ормандарда тұрады." },
              { emoji: "🦅", caption: "Бүркіт таулардың үстінде қалықтайды." },
              { emoji: "🦌", caption: "Киік Қазақстан даласында жүгіреді." },
              { emoji: "🐱", caption: "Сілеусін қалың орманда тұрады." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Wild animals",
            slides: [
              { emoji: "🐘", caption: "An elephant lives in hot countries." },
              { emoji: "🦧", caption: "An orangutan lives in tropical forests." },
              { emoji: "🦅", caption: "A golden eagle soars above the mountains." },
              { emoji: "🦌", caption: "A saiga runs across the steppes of Kazakhstan." },
              { emoji: "🐱", caption: "A lynx lives in dense forests." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Где они обитают?",
            question:
              "К какой группе относятся эти животные? Где они обитают?",
            items: [
              { emoji: "🐘", label: "слон" },
              { emoji: "🦅", label: "беркут" },
              { emoji: "🦌", label: "сайгак" },
            ],
            answer:
              "Все они — дикие животные. Слон живёт в саваннах, беркут — в горах, сайгак — в степях. Они сами добывают пищу.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Олар қайда тұрады?",
            question:
              "Бұл жануарлар қай топқа жатады? Олар қайда тұрады?",
            items: [
              { emoji: "🐘", label: "піл" },
              { emoji: "🦅", label: "бүркіт" },
              { emoji: "🦌", label: "киік" },
            ],
            answer:
              "Олардың барлығы — жабайы жануарлар. Піл саваннада, бүркіт тауда, киік далада тұрады. Олар тамағын өздері табады.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Where do they live?",
            question:
              "What group do these animals belong to? Where do they live?",
            items: [
              { emoji: "🐘", label: "elephant" },
              { emoji: "🦅", label: "eagle" },
              { emoji: "🦌", label: "saiga" },
            ],
            answer:
              "They are all wild animals. The elephant lives in savannas, the eagle in the mountains, the saiga in the steppes. They find food on their own.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Дикие** животные живут в **лесах**, **степях** и **горах**. Они сами добывают пищу и находят жильё.",
            terms: ["дикие", "лесах", "степях", "горах"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Жабайы** жануарлар **ормандарда**, **далада** және **тауларда** тұрады. Олар тамағын өздері табады, паналайтын жерін өздері іздейді.",
            terms: ["жабайы", "ормандарда", "далада", "тауларда"],
          },
          en: {
            title: "What I learned",
            text:
              "**Wild** animals live in **forests**, **steppes** and **mountains**. They find food and shelter on their own.",
            terms: ["wild", "forests", "steppes", "mountains"],
          },
        },
      },
      {
        type: "sort",
        data: {
          ru: {
            title: "Где обитают эти животные?",
            instruction:
              "Распредели животных по среде обитания.",
            categories: [
              { id: "land", label: "На земле / в лесу", emoji: "🌳" },
              { id: "water", label: "В воде", emoji: "🌊" },
              { id: "mount", label: "В горах", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "корова", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "заяц", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "лиса", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "архар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Проверить",
          },
          kz: {
            title: "Бұл жануарлар қайда тұрады?",
            instruction:
              "Жануарларды мекен ортасы бойынша бөл.",
            categories: [
              { id: "land", label: "Жерде / орманда", emoji: "🌳" },
              { id: "water", label: "Суда", emoji: "🌊" },
              { id: "mount", label: "Тауда", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "сиыр", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "қоян", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "түлкі", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "арқар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Тексеру",
          },
          en: {
            title: "Where do these animals live?",
            instruction:
              "Sort the animals by their habitat.",
            categories: [
              { id: "land", label: "On land / in forest", emoji: "🌳" },
              { id: "water", label: "In water", emoji: "🌊" },
              { id: "mount", label: "In mountains", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "cow", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "hare", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "fox", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "dolphin", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "argali", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Check",
          },
        },
      },
    ],

    // Итоги
    experiments: [
      {
        type: "fact",
        data: {
          ru: {
            title: "Найди в энциклопедии",
            text:
              "Узнай, какие редкие дикие животные живут в Казахстане. Запиши 3 примера и где они обитают.",
            keywords: ["энциклопедия", "Казахстан", "редкие"],
            icon: "sparkles",
          },
          kz: {
            title: "Энциклопедиядан тап",
            text:
              "Қазақстанда қандай сирек кездесетін жабайы жануарлар бар? 3 мысал жазып, қайда тұратынын көрсет.",
            keywords: ["энциклопедия", "Қазақстан", "сирек"],
            icon: "sparkles",
          },
          en: {
            title: "Find in the encyclopedia",
            text:
              "Find out which rare wild animals live in Kazakhstan. Write down 3 examples and where they live.",
            keywords: ["encyclopedia", "Kazakhstan", "rare"],
            icon: "sparkles",
          },
        },
      },
      {
        type: "fact",
        data: {
          ru: {
            title: "Это интересно!",
            text:
              "У молодых пингвинов хвост похож на белый мех. Это помогает их мамам быстро находить своих птенцов в большой стае.",
            keywords: ["пингвины", "хвост", "мех"],
            icon: "bulb",
          },
          kz: {
            title: "Бұл қызық!",
            text:
              "Жас пингвиндердің құйрығы ақ жүнге ұқсайды. Бұл аналарына үлкен топтан өз балапандарын тез табуға көмектеседі.",
            keywords: ["пингвин", "құйрық", "жүн"],
            icon: "bulb",
          },
          en: {
            title: "Did you know?",
            text:
              "Young penguins have tails that look like white fur. It helps their mothers quickly find their chicks in a large flock.",
            keywords: ["penguins", "tail", "fur"],
            icon: "bulb",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Итоговые вопросы",
            text:
              "1) Чем **дикие** животные отличаются от **домашних**? 2) Почему человек должен **заботиться** о домашних животных?",
          },
          kz: {
            title: "Қорытынды сұрақтар",
            text:
              "1) **Жабайы** жануарлар **үй** жануарларынан немен ерекшеленеді? 2) Адам үй жануарларына неліктен **қамқорлық** жасауы керек?",
          },
          en: {
            title: "Wrap-up questions",
            text:
              "1) How do **wild** animals differ from **domestic** ones? 2) Why should people **take care** of domestic animals?",
          },
        },
      },
    ],
  },
  28: {
    intro: [
      {
        type: "audio",
        data: {
          ru: {
            title: "Аудио-гид к уроку",
            text:
              "Сегодня мы узнаем, что животные бывают дикими и домашними, и в чём их главное отличие.",
            caption: "Послушай вступление к уроку",
            durationLabel: "0:22",
          },
          kz: {
            title: "Сабақтың аудио-гиді",
            text:
              "Бүгін біз жануарлардың жабайы және үй жануарлары болып бөлінетінін, олардың айырмашылығы неде екенін білеміз.",
            caption: "Сабақтың кіріспесін тыңда",
            durationLabel: "0:22",
          },
          en: {
            title: "Lesson audio guide",
            text:
              "Today we'll learn that animals can be wild or domestic, and what is the main difference between them.",
            caption: "Listen to the lesson intro",
            durationLabel: "0:22",
          },
        },
      },
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Ключевые слова",
            title: "Дикие и домашние",
            slides: [
              { emoji: "🏠", caption: "Домашние животные / Үй жануарлары / Domestic animals" },
              { emoji: "🌲", caption: "Дикие животные / Жабайы жануарлар / Wild animals" },
              { emoji: "🌍", caption: "Среда обитания / Мекен орта / Habitat" },
            ],
          },
          kz: {
            groupLabel: "Кілт сөздер",
            title: "Жабайы және үй",
            slides: [
              { emoji: "🏠", caption: "Үй жануарлары / Домашние / Domestic animals" },
              { emoji: "🌲", caption: "Жабайы жануарлар / Дикие / Wild animals" },
              { emoji: "🌍", caption: "Мекен орта / Среда обитания / Habitat" },
            ],
          },
          en: {
            groupLabel: "Key words",
            title: "Wild and domestic",
            slides: [
              { emoji: "🏠", caption: "Domestic animals / Домашние / Үй жануарлары" },
              { emoji: "🌲", caption: "Wild animals / Дикие / Жабайы жануарлар" },
              { emoji: "🌍", caption: "Habitat / Среда обитания / Мекен орта" },
            ],
          },
        },
      },
    ],

    // Домашние животные
    scientists: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Домашние животные",
            slides: [
              { emoji: "🐕", caption: "Собаки живут рядом с людьми — охраняют дом." },
              { emoji: "🐄", caption: "Корова на пастбище даёт молоко." },
              { emoji: "🐐", caption: "Коза у забора — даёт молоко и шерсть." },
              { emoji: "🐎", caption: "Лошадь с жеребёнком — помогает человеку." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Үй жануарлары",
            slides: [
              { emoji: "🐕", caption: "Иттер адаммен бірге тұрып, үйді күзетеді." },
              { emoji: "🐄", caption: "Жайылымдағы сиыр сүт береді." },
              { emoji: "🐐", caption: "Қоршау жанындағы ешкі — сүт пен жүн береді." },
              { emoji: "🐎", caption: "Жылқы құлынымен — адамға көмектеседі." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Domestic animals",
            slides: [
              { emoji: "🐕", caption: "Dogs live with people — they guard the house." },
              { emoji: "🐄", caption: "A cow on the pasture gives milk." },
              { emoji: "🐐", caption: "A goat by the fence gives milk and wool." },
              { emoji: "🐎", caption: "A mare with her foal — helps people." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Проверь себя",
            question:
              "Кто из этих животных — домашний? Подумай и проверь ответ.",
            items: [
              { emoji: "🐕", label: "собака" },
              { emoji: "🐄", label: "корова" },
              { emoji: "🐐", label: "коза" },
            ],
            answer:
              "Все трое — домашние животные. Они живут рядом с человеком, приносят пользу, а человек заботится о них.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Өзіңді тексер",
            question:
              "Бұлардың қайсысы үй жануары? Ойлан да жауапты тексер.",
            items: [
              { emoji: "🐕", label: "ит" },
              { emoji: "🐄", label: "сиыр" },
              { emoji: "🐐", label: "ешкі" },
            ],
            answer:
              "Үшеуі де үй жануарлары. Олар адамның жанында тұрады, пайда әкеледі, адам оларды күтеді.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Check yourself",
            question:
              "Which of these are domestic animals? Think, then check.",
            items: [
              { emoji: "🐕", label: "dog" },
              { emoji: "🐄", label: "cow" },
              { emoji: "🐐", label: "goat" },
            ],
            answer:
              "All three are domestic animals. They live near people, are useful, and people take care of them.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Домашние** животные живут рядом с человеком, приносят **пользу**, а человек **заботится** о них.",
            terms: ["домашние", "пользу", "заботится"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Үй** жануарлары адамның жанында тұрады, **пайда** әкеледі, адам олар туралы **қамқорлық** жасайды.",
            terms: ["үй", "пайда", "қамқорлық"],
          },
          en: {
            title: "What I learned",
            text:
              "**Domestic** animals live near people, bring **benefit**, and people **take care** of them.",
            terms: ["domestic", "benefit", "take care"],
          },
        },
      },
    ],

    // Дикие животные
    observation: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Дикие животные",
            slides: [
              { emoji: "🐘", caption: "Слон живёт в жарких странах." },
              { emoji: "🦧", caption: "Орангутан живёт в тропических лесах." },
              { emoji: "🦅", caption: "Беркут парит над горами." },
              { emoji: "🦌", caption: "Сайгак бегает по степям Казахстана." },
              { emoji: "🐱", caption: "Рысь живёт в густых лесах." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Жабайы жануарлар",
            slides: [
              { emoji: "🐘", caption: "Піл ыстық елдерде тұрады." },
              { emoji: "🦧", caption: "Орангутан тропиктік ормандарда тұрады." },
              { emoji: "🦅", caption: "Бүркіт таулардың үстінде қалықтайды." },
              { emoji: "🦌", caption: "Киік Қазақстан даласында жүгіреді." },
              { emoji: "🐱", caption: "Сілеусін қалың орманда тұрады." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Wild animals",
            slides: [
              { emoji: "🐘", caption: "An elephant lives in hot countries." },
              { emoji: "🦧", caption: "An orangutan lives in tropical forests." },
              { emoji: "🦅", caption: "A golden eagle soars above the mountains." },
              { emoji: "🦌", caption: "A saiga runs across the steppes of Kazakhstan." },
              { emoji: "🐱", caption: "A lynx lives in dense forests." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Где они обитают?",
            question:
              "К какой группе относятся эти животные? Где они обитают?",
            items: [
              { emoji: "🐘", label: "слон" },
              { emoji: "🦅", label: "беркут" },
              { emoji: "🦌", label: "сайгак" },
            ],
            answer:
              "Все они — дикие животные. Слон живёт в саваннах, беркут — в горах, сайгак — в степях. Они сами добывают пищу.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Олар қайда тұрады?",
            question:
              "Бұл жануарлар қай топқа жатады? Олар қайда тұрады?",
            items: [
              { emoji: "🐘", label: "піл" },
              { emoji: "🦅", label: "бүркіт" },
              { emoji: "🦌", label: "киік" },
            ],
            answer:
              "Олардың барлығы — жабайы жануарлар. Піл саваннада, бүркіт тауда, киік далада тұрады. Олар тамағын өздері табады.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Where do they live?",
            question:
              "What group do these animals belong to? Where do they live?",
            items: [
              { emoji: "🐘", label: "elephant" },
              { emoji: "🦅", label: "eagle" },
              { emoji: "🦌", label: "saiga" },
            ],
            answer:
              "They are all wild animals. The elephant lives in savannas, the eagle in the mountains, the saiga in the steppes. They find food on their own.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Дикие** животные живут в **лесах**, **степях** и **горах**. Они сами добывают пищу и находят жильё.",
            terms: ["дикие", "лесах", "степях", "горах"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Жабайы** жануарлар **ормандарда**, **далада** және **тауларда** тұрады. Олар тамағын өздері табады, паналайтын жерін өздері іздейді.",
            terms: ["жабайы", "ормандарда", "далада", "тауларда"],
          },
          en: {
            title: "What I learned",
            text:
              "**Wild** animals live in **forests**, **steppes** and **mountains**. They find food and shelter on their own.",
            terms: ["wild", "forests", "steppes", "mountains"],
          },
        },
      },
      {
        type: "sort",
        data: {
          ru: {
            title: "Где обитают эти животные?",
            instruction:
              "Распредели животных по среде обитания.",
            categories: [
              { id: "land", label: "На земле / в лесу", emoji: "🌳" },
              { id: "water", label: "В воде", emoji: "🌊" },
              { id: "mount", label: "В горах", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "корова", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "заяц", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "лиса", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "архар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Проверить",
          },
          kz: {
            title: "Бұл жануарлар қайда тұрады?",
            instruction:
              "Жануарларды мекен ортасы бойынша бөл.",
            categories: [
              { id: "land", label: "Жерде / орманда", emoji: "🌳" },
              { id: "water", label: "Суда", emoji: "🌊" },
              { id: "mount", label: "Тауда", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "сиыр", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "қоян", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "түлкі", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "арқар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Тексеру",
          },
          en: {
            title: "Where do these animals live?",
            instruction:
              "Sort the animals by their habitat.",
            categories: [
              { id: "land", label: "On land / in forest", emoji: "🌳" },
              { id: "water", label: "In water", emoji: "🌊" },
              { id: "mount", label: "In mountains", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "cow", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "hare", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "fox", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "dolphin", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "argali", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Check",
          },
        },
      },
    ],

    // Итоги
    experiments: [
      {
        type: "fact",
        data: {
          ru: {
            title: "Найди в энциклопедии",
            text:
              "Узнай, какие редкие дикие животные живут в Казахстане. Запиши 3 примера и где они обитают.",
            keywords: ["энциклопедия", "Казахстан", "редкие"],
            icon: "sparkles",
          },
          kz: {
            title: "Энциклопедиядан тап",
            text:
              "Қазақстанда қандай сирек кездесетін жабайы жануарлар бар? 3 мысал жазып, қайда тұратынын көрсет.",
            keywords: ["энциклопедия", "Қазақстан", "сирек"],
            icon: "sparkles",
          },
          en: {
            title: "Find in the encyclopedia",
            text:
              "Find out which rare wild animals live in Kazakhstan. Write down 3 examples and where they live.",
            keywords: ["encyclopedia", "Kazakhstan", "rare"],
            icon: "sparkles",
          },
        },
      },
      {
        type: "fact",
        data: {
          ru: {
            title: "Это интересно!",
            text:
              "У молодых пингвинов хвост похож на белый мех. Это помогает их мамам быстро находить своих птенцов в большой стае.",
            keywords: ["пингвины", "хвост", "мех"],
            icon: "bulb",
          },
          kz: {
            title: "Бұл қызық!",
            text:
              "Жас пингвиндердің құйрығы ақ жүнге ұқсайды. Бұл аналарына үлкен топтан өз балапандарын тез табуға көмектеседі.",
            keywords: ["пингвин", "құйрық", "жүн"],
            icon: "bulb",
          },
          en: {
            title: "Did you know?",
            text:
              "Young penguins have tails that look like white fur. It helps their mothers quickly find their chicks in a large flock.",
            keywords: ["penguins", "tail", "fur"],
            icon: "bulb",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Итоговые вопросы",
            text:
              "1) Чем **дикие** животные отличаются от **домашних**? 2) Почему человек должен **заботиться** о домашних животных?",
          },
          kz: {
            title: "Қорытынды сұрақтар",
            text:
              "1) **Жабайы** жануарлар **үй** жануарларынан немен ерекшеленеді? 2) Адам үй жануарларына неліктен **қамқорлық** жасауы керек?",
          },
          en: {
            title: "Wrap-up questions",
            text:
              "1) How do **wild** animals differ from **domestic** ones? 2) Why should people **take care** of domestic animals?",
          },
        },
      },
    ],
  },
  29: {
    intro: [
      {
        type: "audio",
        data: {
          ru: {
            title: "Аудио-гид к уроку",
            text:
              "Сегодня мы узнаем, что животные бывают дикими и домашними, и в чём их главное отличие.",
            caption: "Послушай вступление к уроку",
            durationLabel: "0:22",
          },
          kz: {
            title: "Сабақтың аудио-гиді",
            text:
              "Бүгін біз жануарлардың жабайы және үй жануарлары болып бөлінетінін, олардың айырмашылығы неде екенін білеміз.",
            caption: "Сабақтың кіріспесін тыңда",
            durationLabel: "0:22",
          },
          en: {
            title: "Lesson audio guide",
            text:
              "Today we'll learn that animals can be wild or domestic, and what is the main difference between them.",
            caption: "Listen to the lesson intro",
            durationLabel: "0:22",
          },
        },
      },
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Ключевые слова",
            title: "Дикие и домашние",
            slides: [
              { emoji: "🏠", caption: "Домашние животные / Үй жануарлары / Domestic animals" },
              { emoji: "🌲", caption: "Дикие животные / Жабайы жануарлар / Wild animals" },
              { emoji: "🌍", caption: "Среда обитания / Мекен орта / Habitat" },
            ],
          },
          kz: {
            groupLabel: "Кілт сөздер",
            title: "Жабайы және үй",
            slides: [
              { emoji: "🏠", caption: "Үй жануарлары / Домашние / Domestic animals" },
              { emoji: "🌲", caption: "Жабайы жануарлар / Дикие / Wild animals" },
              { emoji: "🌍", caption: "Мекен орта / Среда обитания / Habitat" },
            ],
          },
          en: {
            groupLabel: "Key words",
            title: "Wild and domestic",
            slides: [
              { emoji: "🏠", caption: "Domestic animals / Домашние / Үй жануарлары" },
              { emoji: "🌲", caption: "Wild animals / Дикие / Жабайы жануарлар" },
              { emoji: "🌍", caption: "Habitat / Среда обитания / Мекен орта" },
            ],
          },
        },
      },
    ],

    // Домашние животные
    scientists: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Домашние животные",
            slides: [
              { emoji: "🐕", caption: "Собаки живут рядом с людьми — охраняют дом." },
              { emoji: "🐄", caption: "Корова на пастбище даёт молоко." },
              { emoji: "🐐", caption: "Коза у забора — даёт молоко и шерсть." },
              { emoji: "🐎", caption: "Лошадь с жеребёнком — помогает человеку." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Үй жануарлары",
            slides: [
              { emoji: "🐕", caption: "Иттер адаммен бірге тұрып, үйді күзетеді." },
              { emoji: "🐄", caption: "Жайылымдағы сиыр сүт береді." },
              { emoji: "🐐", caption: "Қоршау жанындағы ешкі — сүт пен жүн береді." },
              { emoji: "🐎", caption: "Жылқы құлынымен — адамға көмектеседі." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Domestic animals",
            slides: [
              { emoji: "🐕", caption: "Dogs live with people — they guard the house." },
              { emoji: "🐄", caption: "A cow on the pasture gives milk." },
              { emoji: "🐐", caption: "A goat by the fence gives milk and wool." },
              { emoji: "🐎", caption: "A mare with her foal — helps people." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Проверь себя",
            question:
              "Кто из этих животных — домашний? Подумай и проверь ответ.",
            items: [
              { emoji: "🐕", label: "собака" },
              { emoji: "🐄", label: "корова" },
              { emoji: "🐐", label: "коза" },
            ],
            answer:
              "Все трое — домашние животные. Они живут рядом с человеком, приносят пользу, а человек заботится о них.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Өзіңді тексер",
            question:
              "Бұлардың қайсысы үй жануары? Ойлан да жауапты тексер.",
            items: [
              { emoji: "🐕", label: "ит" },
              { emoji: "🐄", label: "сиыр" },
              { emoji: "🐐", label: "ешкі" },
            ],
            answer:
              "Үшеуі де үй жануарлары. Олар адамның жанында тұрады, пайда әкеледі, адам оларды күтеді.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Check yourself",
            question:
              "Which of these are domestic animals? Think, then check.",
            items: [
              { emoji: "🐕", label: "dog" },
              { emoji: "🐄", label: "cow" },
              { emoji: "🐐", label: "goat" },
            ],
            answer:
              "All three are domestic animals. They live near people, are useful, and people take care of them.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Домашние** животные живут рядом с человеком, приносят **пользу**, а человек **заботится** о них.",
            terms: ["домашние", "пользу", "заботится"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Үй** жануарлары адамның жанында тұрады, **пайда** әкеледі, адам олар туралы **қамқорлық** жасайды.",
            terms: ["үй", "пайда", "қамқорлық"],
          },
          en: {
            title: "What I learned",
            text:
              "**Domestic** animals live near people, bring **benefit**, and people **take care** of them.",
            terms: ["domestic", "benefit", "take care"],
          },
        },
      },
    ],

    // Дикие животные
    observation: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Дикие животные",
            slides: [
              { emoji: "🐘", caption: "Слон живёт в жарких странах." },
              { emoji: "🦧", caption: "Орангутан живёт в тропических лесах." },
              { emoji: "🦅", caption: "Беркут парит над горами." },
              { emoji: "🦌", caption: "Сайгак бегает по степям Казахстана." },
              { emoji: "🐱", caption: "Рысь живёт в густых лесах." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Жабайы жануарлар",
            slides: [
              { emoji: "🐘", caption: "Піл ыстық елдерде тұрады." },
              { emoji: "🦧", caption: "Орангутан тропиктік ормандарда тұрады." },
              { emoji: "🦅", caption: "Бүркіт таулардың үстінде қалықтайды." },
              { emoji: "🦌", caption: "Киік Қазақстан даласында жүгіреді." },
              { emoji: "🐱", caption: "Сілеусін қалың орманда тұрады." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Wild animals",
            slides: [
              { emoji: "🐘", caption: "An elephant lives in hot countries." },
              { emoji: "🦧", caption: "An orangutan lives in tropical forests." },
              { emoji: "🦅", caption: "A golden eagle soars above the mountains." },
              { emoji: "🦌", caption: "A saiga runs across the steppes of Kazakhstan." },
              { emoji: "🐱", caption: "A lynx lives in dense forests." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Где они обитают?",
            question:
              "К какой группе относятся эти животные? Где они обитают?",
            items: [
              { emoji: "🐘", label: "слон" },
              { emoji: "🦅", label: "беркут" },
              { emoji: "🦌", label: "сайгак" },
            ],
            answer:
              "Все они — дикие животные. Слон живёт в саваннах, беркут — в горах, сайгак — в степях. Они сами добывают пищу.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Олар қайда тұрады?",
            question:
              "Бұл жануарлар қай топқа жатады? Олар қайда тұрады?",
            items: [
              { emoji: "🐘", label: "піл" },
              { emoji: "🦅", label: "бүркіт" },
              { emoji: "🦌", label: "киік" },
            ],
            answer:
              "Олардың барлығы — жабайы жануарлар. Піл саваннада, бүркіт тауда, киік далада тұрады. Олар тамағын өздері табады.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Where do they live?",
            question:
              "What group do these animals belong to? Where do they live?",
            items: [
              { emoji: "🐘", label: "elephant" },
              { emoji: "🦅", label: "eagle" },
              { emoji: "🦌", label: "saiga" },
            ],
            answer:
              "They are all wild animals. The elephant lives in savannas, the eagle in the mountains, the saiga in the steppes. They find food on their own.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Дикие** животные живут в **лесах**, **степях** и **горах**. Они сами добывают пищу и находят жильё.",
            terms: ["дикие", "лесах", "степях", "горах"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Жабайы** жануарлар **ормандарда**, **далада** және **тауларда** тұрады. Олар тамағын өздері табады, паналайтын жерін өздері іздейді.",
            terms: ["жабайы", "ормандарда", "далада", "тауларда"],
          },
          en: {
            title: "What I learned",
            text:
              "**Wild** animals live in **forests**, **steppes** and **mountains**. They find food and shelter on their own.",
            terms: ["wild", "forests", "steppes", "mountains"],
          },
        },
      },
      {
        type: "sort",
        data: {
          ru: {
            title: "Где обитают эти животные?",
            instruction:
              "Распредели животных по среде обитания.",
            categories: [
              { id: "land", label: "На земле / в лесу", emoji: "🌳" },
              { id: "water", label: "В воде", emoji: "🌊" },
              { id: "mount", label: "В горах", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "корова", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "заяц", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "лиса", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "архар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Проверить",
          },
          kz: {
            title: "Бұл жануарлар қайда тұрады?",
            instruction:
              "Жануарларды мекен ортасы бойынша бөл.",
            categories: [
              { id: "land", label: "Жерде / орманда", emoji: "🌳" },
              { id: "water", label: "Суда", emoji: "🌊" },
              { id: "mount", label: "Тауда", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "сиыр", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "қоян", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "түлкі", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "арқар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Тексеру",
          },
          en: {
            title: "Where do these animals live?",
            instruction:
              "Sort the animals by their habitat.",
            categories: [
              { id: "land", label: "On land / in forest", emoji: "🌳" },
              { id: "water", label: "In water", emoji: "🌊" },
              { id: "mount", label: "In mountains", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "cow", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "hare", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "fox", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "dolphin", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "argali", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Check",
          },
        },
      },
    ],

    // Итоги
    experiments: [
      {
        type: "fact",
        data: {
          ru: {
            title: "Найди в энциклопедии",
            text:
              "Узнай, какие редкие дикие животные живут в Казахстане. Запиши 3 примера и где они обитают.",
            keywords: ["энциклопедия", "Казахстан", "редкие"],
            icon: "sparkles",
          },
          kz: {
            title: "Энциклопедиядан тап",
            text:
              "Қазақстанда қандай сирек кездесетін жабайы жануарлар бар? 3 мысал жазып, қайда тұратынын көрсет.",
            keywords: ["энциклопедия", "Қазақстан", "сирек"],
            icon: "sparkles",
          },
          en: {
            title: "Find in the encyclopedia",
            text:
              "Find out which rare wild animals live in Kazakhstan. Write down 3 examples and where they live.",
            keywords: ["encyclopedia", "Kazakhstan", "rare"],
            icon: "sparkles",
          },
        },
      },
      {
        type: "fact",
        data: {
          ru: {
            title: "Это интересно!",
            text:
              "У молодых пингвинов хвост похож на белый мех. Это помогает их мамам быстро находить своих птенцов в большой стае.",
            keywords: ["пингвины", "хвост", "мех"],
            icon: "bulb",
          },
          kz: {
            title: "Бұл қызық!",
            text:
              "Жас пингвиндердің құйрығы ақ жүнге ұқсайды. Бұл аналарына үлкен топтан өз балапандарын тез табуға көмектеседі.",
            keywords: ["пингвин", "құйрық", "жүн"],
            icon: "bulb",
          },
          en: {
            title: "Did you know?",
            text:
              "Young penguins have tails that look like white fur. It helps their mothers quickly find their chicks in a large flock.",
            keywords: ["penguins", "tail", "fur"],
            icon: "bulb",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Итоговые вопросы",
            text:
              "1) Чем **дикие** животные отличаются от **домашних**? 2) Почему человек должен **заботиться** о домашних животных?",
          },
          kz: {
            title: "Қорытынды сұрақтар",
            text:
              "1) **Жабайы** жануарлар **үй** жануарларынан немен ерекшеленеді? 2) Адам үй жануарларына неліктен **қамқорлық** жасауы керек?",
          },
          en: {
            title: "Wrap-up questions",
            text:
              "1) How do **wild** animals differ from **domestic** ones? 2) Why should people **take care** of domestic animals?",
          },
        },
      },
    ],
  },
  30: {
    intro: [
      {
        type: "audio",
        data: {
          ru: {
            title: "Аудио-гид к уроку",
            text:
              "Сегодня мы узнаем, что животные бывают дикими и домашними, и в чём их главное отличие.",
            caption: "Послушай вступление к уроку",
            durationLabel: "0:22",
          },
          kz: {
            title: "Сабақтың аудио-гиді",
            text:
              "Бүгін біз жануарлардың жабайы және үй жануарлары болып бөлінетінін, олардың айырмашылығы неде екенін білеміз.",
            caption: "Сабақтың кіріспесін тыңда",
            durationLabel: "0:22",
          },
          en: {
            title: "Lesson audio guide",
            text:
              "Today we'll learn that animals can be wild or domestic, and what is the main difference between them.",
            caption: "Listen to the lesson intro",
            durationLabel: "0:22",
          },
        },
      },
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Ключевые слова",
            title: "Дикие и домашние",
            slides: [
              { emoji: "🏠", caption: "Домашние животные / Үй жануарлары / Domestic animals" },
              { emoji: "🌲", caption: "Дикие животные / Жабайы жануарлар / Wild animals" },
              { emoji: "🌍", caption: "Среда обитания / Мекен орта / Habitat" },
            ],
          },
          kz: {
            groupLabel: "Кілт сөздер",
            title: "Жабайы және үй",
            slides: [
              { emoji: "🏠", caption: "Үй жануарлары / Домашние / Domestic animals" },
              { emoji: "🌲", caption: "Жабайы жануарлар / Дикие / Wild animals" },
              { emoji: "🌍", caption: "Мекен орта / Среда обитания / Habitat" },
            ],
          },
          en: {
            groupLabel: "Key words",
            title: "Wild and domestic",
            slides: [
              { emoji: "🏠", caption: "Domestic animals / Домашние / Үй жануарлары" },
              { emoji: "🌲", caption: "Wild animals / Дикие / Жабайы жануарлар" },
              { emoji: "🌍", caption: "Habitat / Среда обитания / Мекен орта" },
            ],
          },
        },
      },
    ],

    // Домашние животные
    scientists: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Домашние животные",
            slides: [
              { emoji: "🐕", caption: "Собаки живут рядом с людьми — охраняют дом." },
              { emoji: "🐄", caption: "Корова на пастбище даёт молоко." },
              { emoji: "🐐", caption: "Коза у забора — даёт молоко и шерсть." },
              { emoji: "🐎", caption: "Лошадь с жеребёнком — помогает человеку." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Үй жануарлары",
            slides: [
              { emoji: "🐕", caption: "Иттер адаммен бірге тұрып, үйді күзетеді." },
              { emoji: "🐄", caption: "Жайылымдағы сиыр сүт береді." },
              { emoji: "🐐", caption: "Қоршау жанындағы ешкі — сүт пен жүн береді." },
              { emoji: "🐎", caption: "Жылқы құлынымен — адамға көмектеседі." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Domestic animals",
            slides: [
              { emoji: "🐕", caption: "Dogs live with people — they guard the house." },
              { emoji: "🐄", caption: "A cow on the pasture gives milk." },
              { emoji: "🐐", caption: "A goat by the fence gives milk and wool." },
              { emoji: "🐎", caption: "A mare with her foal — helps people." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Проверь себя",
            question:
              "Кто из этих животных — домашний? Подумай и проверь ответ.",
            items: [
              { emoji: "🐕", label: "собака" },
              { emoji: "🐄", label: "корова" },
              { emoji: "🐐", label: "коза" },
            ],
            answer:
              "Все трое — домашние животные. Они живут рядом с человеком, приносят пользу, а человек заботится о них.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Өзіңді тексер",
            question:
              "Бұлардың қайсысы үй жануары? Ойлан да жауапты тексер.",
            items: [
              { emoji: "🐕", label: "ит" },
              { emoji: "🐄", label: "сиыр" },
              { emoji: "🐐", label: "ешкі" },
            ],
            answer:
              "Үшеуі де үй жануарлары. Олар адамның жанында тұрады, пайда әкеледі, адам оларды күтеді.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Check yourself",
            question:
              "Which of these are domestic animals? Think, then check.",
            items: [
              { emoji: "🐕", label: "dog" },
              { emoji: "🐄", label: "cow" },
              { emoji: "🐐", label: "goat" },
            ],
            answer:
              "All three are domestic animals. They live near people, are useful, and people take care of them.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Домашние** животные живут рядом с человеком, приносят **пользу**, а человек **заботится** о них.",
            terms: ["домашние", "пользу", "заботится"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Үй** жануарлары адамның жанында тұрады, **пайда** әкеледі, адам олар туралы **қамқорлық** жасайды.",
            terms: ["үй", "пайда", "қамқорлық"],
          },
          en: {
            title: "What I learned",
            text:
              "**Domestic** animals live near people, bring **benefit**, and people **take care** of them.",
            terms: ["domestic", "benefit", "take care"],
          },
        },
      },
    ],

    // Дикие животные
    observation: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Дикие животные",
            slides: [
              { emoji: "🐘", caption: "Слон живёт в жарких странах." },
              { emoji: "🦧", caption: "Орангутан живёт в тропических лесах." },
              { emoji: "🦅", caption: "Беркут парит над горами." },
              { emoji: "🦌", caption: "Сайгак бегает по степям Казахстана." },
              { emoji: "🐱", caption: "Рысь живёт в густых лесах." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Жабайы жануарлар",
            slides: [
              { emoji: "🐘", caption: "Піл ыстық елдерде тұрады." },
              { emoji: "🦧", caption: "Орангутан тропиктік ормандарда тұрады." },
              { emoji: "🦅", caption: "Бүркіт таулардың үстінде қалықтайды." },
              { emoji: "🦌", caption: "Киік Қазақстан даласында жүгіреді." },
              { emoji: "🐱", caption: "Сілеусін қалың орманда тұрады." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Wild animals",
            slides: [
              { emoji: "🐘", caption: "An elephant lives in hot countries." },
              { emoji: "🦧", caption: "An orangutan lives in tropical forests." },
              { emoji: "🦅", caption: "A golden eagle soars above the mountains." },
              { emoji: "🦌", caption: "A saiga runs across the steppes of Kazakhstan." },
              { emoji: "🐱", caption: "A lynx lives in dense forests." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Где они обитают?",
            question:
              "К какой группе относятся эти животные? Где они обитают?",
            items: [
              { emoji: "🐘", label: "слон" },
              { emoji: "🦅", label: "беркут" },
              { emoji: "🦌", label: "сайгак" },
            ],
            answer:
              "Все они — дикие животные. Слон живёт в саваннах, беркут — в горах, сайгак — в степях. Они сами добывают пищу.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Олар қайда тұрады?",
            question:
              "Бұл жануарлар қай топқа жатады? Олар қайда тұрады?",
            items: [
              { emoji: "🐘", label: "піл" },
              { emoji: "🦅", label: "бүркіт" },
              { emoji: "🦌", label: "киік" },
            ],
            answer:
              "Олардың барлығы — жабайы жануарлар. Піл саваннада, бүркіт тауда, киік далада тұрады. Олар тамағын өздері табады.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Where do they live?",
            question:
              "What group do these animals belong to? Where do they live?",
            items: [
              { emoji: "🐘", label: "elephant" },
              { emoji: "🦅", label: "eagle" },
              { emoji: "🦌", label: "saiga" },
            ],
            answer:
              "They are all wild animals. The elephant lives in savannas, the eagle in the mountains, the saiga in the steppes. They find food on their own.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Дикие** животные живут в **лесах**, **степях** и **горах**. Они сами добывают пищу и находят жильё.",
            terms: ["дикие", "лесах", "степях", "горах"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Жабайы** жануарлар **ормандарда**, **далада** және **тауларда** тұрады. Олар тамағын өздері табады, паналайтын жерін өздері іздейді.",
            terms: ["жабайы", "ормандарда", "далада", "тауларда"],
          },
          en: {
            title: "What I learned",
            text:
              "**Wild** animals live in **forests**, **steppes** and **mountains**. They find food and shelter on their own.",
            terms: ["wild", "forests", "steppes", "mountains"],
          },
        },
      },
      {
        type: "sort",
        data: {
          ru: {
            title: "Где обитают эти животные?",
            instruction:
              "Распредели животных по среде обитания.",
            categories: [
              { id: "land", label: "На земле / в лесу", emoji: "🌳" },
              { id: "water", label: "В воде", emoji: "🌊" },
              { id: "mount", label: "В горах", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "корова", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "заяц", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "лиса", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "архар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Проверить",
          },
          kz: {
            title: "Бұл жануарлар қайда тұрады?",
            instruction:
              "Жануарларды мекен ортасы бойынша бөл.",
            categories: [
              { id: "land", label: "Жерде / орманда", emoji: "🌳" },
              { id: "water", label: "Суда", emoji: "🌊" },
              { id: "mount", label: "Тауда", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "сиыр", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "қоян", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "түлкі", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "арқар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Тексеру",
          },
          en: {
            title: "Where do these animals live?",
            instruction:
              "Sort the animals by their habitat.",
            categories: [
              { id: "land", label: "On land / in forest", emoji: "🌳" },
              { id: "water", label: "In water", emoji: "🌊" },
              { id: "mount", label: "In mountains", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "cow", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "hare", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "fox", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "dolphin", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "argali", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Check",
          },
        },
      },
    ],

    // Итоги
    experiments: [
      {
        type: "fact",
        data: {
          ru: {
            title: "Найди в энциклопедии",
            text:
              "Узнай, какие редкие дикие животные живут в Казахстане. Запиши 3 примера и где они обитают.",
            keywords: ["энциклопедия", "Казахстан", "редкие"],
            icon: "sparkles",
          },
          kz: {
            title: "Энциклопедиядан тап",
            text:
              "Қазақстанда қандай сирек кездесетін жабайы жануарлар бар? 3 мысал жазып, қайда тұратынын көрсет.",
            keywords: ["энциклопедия", "Қазақстан", "сирек"],
            icon: "sparkles",
          },
          en: {
            title: "Find in the encyclopedia",
            text:
              "Find out which rare wild animals live in Kazakhstan. Write down 3 examples and where they live.",
            keywords: ["encyclopedia", "Kazakhstan", "rare"],
            icon: "sparkles",
          },
        },
      },
      {
        type: "fact",
        data: {
          ru: {
            title: "Это интересно!",
            text:
              "У молодых пингвинов хвост похож на белый мех. Это помогает их мамам быстро находить своих птенцов в большой стае.",
            keywords: ["пингвины", "хвост", "мех"],
            icon: "bulb",
          },
          kz: {
            title: "Бұл қызық!",
            text:
              "Жас пингвиндердің құйрығы ақ жүнге ұқсайды. Бұл аналарына үлкен топтан өз балапандарын тез табуға көмектеседі.",
            keywords: ["пингвин", "құйрық", "жүн"],
            icon: "bulb",
          },
          en: {
            title: "Did you know?",
            text:
              "Young penguins have tails that look like white fur. It helps their mothers quickly find their chicks in a large flock.",
            keywords: ["penguins", "tail", "fur"],
            icon: "bulb",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Итоговые вопросы",
            text:
              "1) Чем **дикие** животные отличаются от **домашних**? 2) Почему человек должен **заботиться** о домашних животных?",
          },
          kz: {
            title: "Қорытынды сұрақтар",
            text:
              "1) **Жабайы** жануарлар **үй** жануарларынан немен ерекшеленеді? 2) Адам үй жануарларына неліктен **қамқорлық** жасауы керек?",
          },
          en: {
            title: "Wrap-up questions",
            text:
              "1) How do **wild** animals differ from **domestic** ones? 2) Why should people **take care** of domestic animals?",
          },
        },
      },
    ],
  },
  31: {
    intro: [
      {
        type: "audio",
        data: {
          ru: {
            title: "Аудио-гид к уроку",
            text:
              "Сегодня мы узнаем, что животные бывают дикими и домашними, и в чём их главное отличие.",
            caption: "Послушай вступление к уроку",
            durationLabel: "0:22",
          },
          kz: {
            title: "Сабақтың аудио-гиді",
            text:
              "Бүгін біз жануарлардың жабайы және үй жануарлары болып бөлінетінін, олардың айырмашылығы неде екенін білеміз.",
            caption: "Сабақтың кіріспесін тыңда",
            durationLabel: "0:22",
          },
          en: {
            title: "Lesson audio guide",
            text:
              "Today we'll learn that animals can be wild or domestic, and what is the main difference between them.",
            caption: "Listen to the lesson intro",
            durationLabel: "0:22",
          },
        },
      },
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Ключевые слова",
            title: "Дикие и домашние",
            slides: [
              { emoji: "🏠", caption: "Домашние животные / Үй жануарлары / Domestic animals" },
              { emoji: "🌲", caption: "Дикие животные / Жабайы жануарлар / Wild animals" },
              { emoji: "🌍", caption: "Среда обитания / Мекен орта / Habitat" },
            ],
          },
          kz: {
            groupLabel: "Кілт сөздер",
            title: "Жабайы және үй",
            slides: [
              { emoji: "🏠", caption: "Үй жануарлары / Домашние / Domestic animals" },
              { emoji: "🌲", caption: "Жабайы жануарлар / Дикие / Wild animals" },
              { emoji: "🌍", caption: "Мекен орта / Среда обитания / Habitat" },
            ],
          },
          en: {
            groupLabel: "Key words",
            title: "Wild and domestic",
            slides: [
              { emoji: "🏠", caption: "Domestic animals / Домашние / Үй жануарлары" },
              { emoji: "🌲", caption: "Wild animals / Дикие / Жабайы жануарлар" },
              { emoji: "🌍", caption: "Habitat / Среда обитания / Мекен орта" },
            ],
          },
        },
      },
    ],

    // Домашние животные
    scientists: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Домашние животные",
            slides: [
              { emoji: "🐕", caption: "Собаки живут рядом с людьми — охраняют дом." },
              { emoji: "🐄", caption: "Корова на пастбище даёт молоко." },
              { emoji: "🐐", caption: "Коза у забора — даёт молоко и шерсть." },
              { emoji: "🐎", caption: "Лошадь с жеребёнком — помогает человеку." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Үй жануарлары",
            slides: [
              { emoji: "🐕", caption: "Иттер адаммен бірге тұрып, үйді күзетеді." },
              { emoji: "🐄", caption: "Жайылымдағы сиыр сүт береді." },
              { emoji: "🐐", caption: "Қоршау жанындағы ешкі — сүт пен жүн береді." },
              { emoji: "🐎", caption: "Жылқы құлынымен — адамға көмектеседі." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Domestic animals",
            slides: [
              { emoji: "🐕", caption: "Dogs live with people — they guard the house." },
              { emoji: "🐄", caption: "A cow on the pasture gives milk." },
              { emoji: "🐐", caption: "A goat by the fence gives milk and wool." },
              { emoji: "🐎", caption: "A mare with her foal — helps people." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Проверь себя",
            question:
              "Кто из этих животных — домашний? Подумай и проверь ответ.",
            items: [
              { emoji: "🐕", label: "собака" },
              { emoji: "🐄", label: "корова" },
              { emoji: "🐐", label: "коза" },
            ],
            answer:
              "Все трое — домашние животные. Они живут рядом с человеком, приносят пользу, а человек заботится о них.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Өзіңді тексер",
            question:
              "Бұлардың қайсысы үй жануары? Ойлан да жауапты тексер.",
            items: [
              { emoji: "🐕", label: "ит" },
              { emoji: "🐄", label: "сиыр" },
              { emoji: "🐐", label: "ешкі" },
            ],
            answer:
              "Үшеуі де үй жануарлары. Олар адамның жанында тұрады, пайда әкеледі, адам оларды күтеді.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Check yourself",
            question:
              "Which of these are domestic animals? Think, then check.",
            items: [
              { emoji: "🐕", label: "dog" },
              { emoji: "🐄", label: "cow" },
              { emoji: "🐐", label: "goat" },
            ],
            answer:
              "All three are domestic animals. They live near people, are useful, and people take care of them.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Домашние** животные живут рядом с человеком, приносят **пользу**, а человек **заботится** о них.",
            terms: ["домашние", "пользу", "заботится"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Үй** жануарлары адамның жанында тұрады, **пайда** әкеледі, адам олар туралы **қамқорлық** жасайды.",
            terms: ["үй", "пайда", "қамқорлық"],
          },
          en: {
            title: "What I learned",
            text:
              "**Domestic** animals live near people, bring **benefit**, and people **take care** of them.",
            terms: ["domestic", "benefit", "take care"],
          },
        },
      },
    ],

    // Дикие животные
    observation: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Дикие животные",
            slides: [
              { emoji: "🐘", caption: "Слон живёт в жарких странах." },
              { emoji: "🦧", caption: "Орангутан живёт в тропических лесах." },
              { emoji: "🦅", caption: "Беркут парит над горами." },
              { emoji: "🦌", caption: "Сайгак бегает по степям Казахстана." },
              { emoji: "🐱", caption: "Рысь живёт в густых лесах." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Жабайы жануарлар",
            slides: [
              { emoji: "🐘", caption: "Піл ыстық елдерде тұрады." },
              { emoji: "🦧", caption: "Орангутан тропиктік ормандарда тұрады." },
              { emoji: "🦅", caption: "Бүркіт таулардың үстінде қалықтайды." },
              { emoji: "🦌", caption: "Киік Қазақстан даласында жүгіреді." },
              { emoji: "🐱", caption: "Сілеусін қалың орманда тұрады." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Wild animals",
            slides: [
              { emoji: "🐘", caption: "An elephant lives in hot countries." },
              { emoji: "🦧", caption: "An orangutan lives in tropical forests." },
              { emoji: "🦅", caption: "A golden eagle soars above the mountains." },
              { emoji: "🦌", caption: "A saiga runs across the steppes of Kazakhstan." },
              { emoji: "🐱", caption: "A lynx lives in dense forests." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Где они обитают?",
            question:
              "К какой группе относятся эти животные? Где они обитают?",
            items: [
              { emoji: "🐘", label: "слон" },
              { emoji: "🦅", label: "беркут" },
              { emoji: "🦌", label: "сайгак" },
            ],
            answer:
              "Все они — дикие животные. Слон живёт в саваннах, беркут — в горах, сайгак — в степях. Они сами добывают пищу.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Олар қайда тұрады?",
            question:
              "Бұл жануарлар қай топқа жатады? Олар қайда тұрады?",
            items: [
              { emoji: "🐘", label: "піл" },
              { emoji: "🦅", label: "бүркіт" },
              { emoji: "🦌", label: "киік" },
            ],
            answer:
              "Олардың барлығы — жабайы жануарлар. Піл саваннада, бүркіт тауда, киік далада тұрады. Олар тамағын өздері табады.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Where do they live?",
            question:
              "What group do these animals belong to? Where do they live?",
            items: [
              { emoji: "🐘", label: "elephant" },
              { emoji: "🦅", label: "eagle" },
              { emoji: "🦌", label: "saiga" },
            ],
            answer:
              "They are all wild animals. The elephant lives in savannas, the eagle in the mountains, the saiga in the steppes. They find food on their own.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Дикие** животные живут в **лесах**, **степях** и **горах**. Они сами добывают пищу и находят жильё.",
            terms: ["дикие", "лесах", "степях", "горах"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Жабайы** жануарлар **ормандарда**, **далада** және **тауларда** тұрады. Олар тамағын өздері табады, паналайтын жерін өздері іздейді.",
            terms: ["жабайы", "ормандарда", "далада", "тауларда"],
          },
          en: {
            title: "What I learned",
            text:
              "**Wild** animals live in **forests**, **steppes** and **mountains**. They find food and shelter on their own.",
            terms: ["wild", "forests", "steppes", "mountains"],
          },
        },
      },
      {
        type: "sort",
        data: {
          ru: {
            title: "Где обитают эти животные?",
            instruction:
              "Распредели животных по среде обитания.",
            categories: [
              { id: "land", label: "На земле / в лесу", emoji: "🌳" },
              { id: "water", label: "В воде", emoji: "🌊" },
              { id: "mount", label: "В горах", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "корова", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "заяц", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "лиса", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "архар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Проверить",
          },
          kz: {
            title: "Бұл жануарлар қайда тұрады?",
            instruction:
              "Жануарларды мекен ортасы бойынша бөл.",
            categories: [
              { id: "land", label: "Жерде / орманда", emoji: "🌳" },
              { id: "water", label: "Суда", emoji: "🌊" },
              { id: "mount", label: "Тауда", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "сиыр", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "қоян", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "түлкі", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "арқар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Тексеру",
          },
          en: {
            title: "Where do these animals live?",
            instruction:
              "Sort the animals by their habitat.",
            categories: [
              { id: "land", label: "On land / in forest", emoji: "🌳" },
              { id: "water", label: "In water", emoji: "🌊" },
              { id: "mount", label: "In mountains", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "cow", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "hare", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "fox", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "dolphin", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "argali", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Check",
          },
        },
      },
    ],

    // Итоги
    experiments: [
      {
        type: "fact",
        data: {
          ru: {
            title: "Найди в энциклопедии",
            text:
              "Узнай, какие редкие дикие животные живут в Казахстане. Запиши 3 примера и где они обитают.",
            keywords: ["энциклопедия", "Казахстан", "редкие"],
            icon: "sparkles",
          },
          kz: {
            title: "Энциклопедиядан тап",
            text:
              "Қазақстанда қандай сирек кездесетін жабайы жануарлар бар? 3 мысал жазып, қайда тұратынын көрсет.",
            keywords: ["энциклопедия", "Қазақстан", "сирек"],
            icon: "sparkles",
          },
          en: {
            title: "Find in the encyclopedia",
            text:
              "Find out which rare wild animals live in Kazakhstan. Write down 3 examples and where they live.",
            keywords: ["encyclopedia", "Kazakhstan", "rare"],
            icon: "sparkles",
          },
        },
      },
      {
        type: "fact",
        data: {
          ru: {
            title: "Это интересно!",
            text:
              "У молодых пингвинов хвост похож на белый мех. Это помогает их мамам быстро находить своих птенцов в большой стае.",
            keywords: ["пингвины", "хвост", "мех"],
            icon: "bulb",
          },
          kz: {
            title: "Бұл қызық!",
            text:
              "Жас пингвиндердің құйрығы ақ жүнге ұқсайды. Бұл аналарына үлкен топтан өз балапандарын тез табуға көмектеседі.",
            keywords: ["пингвин", "құйрық", "жүн"],
            icon: "bulb",
          },
          en: {
            title: "Did you know?",
            text:
              "Young penguins have tails that look like white fur. It helps their mothers quickly find their chicks in a large flock.",
            keywords: ["penguins", "tail", "fur"],
            icon: "bulb",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Итоговые вопросы",
            text:
              "1) Чем **дикие** животные отличаются от **домашних**? 2) Почему человек должен **заботиться** о домашних животных?",
          },
          kz: {
            title: "Қорытынды сұрақтар",
            text:
              "1) **Жабайы** жануарлар **үй** жануарларынан немен ерекшеленеді? 2) Адам үй жануарларына неліктен **қамқорлық** жасауы керек?",
          },
          en: {
            title: "Wrap-up questions",
            text:
              "1) How do **wild** animals differ from **domestic** ones? 2) Why should people **take care** of domestic animals?",
          },
        },
      },
    ],
  },
  32: {
    intro: [
      {
        type: "audio",
        data: {
          ru: {
            title: "Аудио-гид к уроку",
            text:
              "Сегодня мы узнаем, что животные бывают дикими и домашними, и в чём их главное отличие.",
            caption: "Послушай вступление к уроку",
            durationLabel: "0:22",
          },
          kz: {
            title: "Сабақтың аудио-гиді",
            text:
              "Бүгін біз жануарлардың жабайы және үй жануарлары болып бөлінетінін, олардың айырмашылығы неде екенін білеміз.",
            caption: "Сабақтың кіріспесін тыңда",
            durationLabel: "0:22",
          },
          en: {
            title: "Lesson audio guide",
            text:
              "Today we'll learn that animals can be wild or domestic, and what is the main difference between them.",
            caption: "Listen to the lesson intro",
            durationLabel: "0:22",
          },
        },
      },
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Ключевые слова",
            title: "Дикие и домашние",
            slides: [
              { emoji: "🏠", caption: "Домашние животные / Үй жануарлары / Domestic animals" },
              { emoji: "🌲", caption: "Дикие животные / Жабайы жануарлар / Wild animals" },
              { emoji: "🌍", caption: "Среда обитания / Мекен орта / Habitat" },
            ],
          },
          kz: {
            groupLabel: "Кілт сөздер",
            title: "Жабайы және үй",
            slides: [
              { emoji: "🏠", caption: "Үй жануарлары / Домашние / Domestic animals" },
              { emoji: "🌲", caption: "Жабайы жануарлар / Дикие / Wild animals" },
              { emoji: "🌍", caption: "Мекен орта / Среда обитания / Habitat" },
            ],
          },
          en: {
            groupLabel: "Key words",
            title: "Wild and domestic",
            slides: [
              { emoji: "🏠", caption: "Domestic animals / Домашние / Үй жануарлары" },
              { emoji: "🌲", caption: "Wild animals / Дикие / Жабайы жануарлар" },
              { emoji: "🌍", caption: "Habitat / Среда обитания / Мекен орта" },
            ],
          },
        },
      },
    ],

    // Домашние животные
    scientists: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Домашние животные",
            slides: [
              { emoji: "🐕", caption: "Собаки живут рядом с людьми — охраняют дом." },
              { emoji: "🐄", caption: "Корова на пастбище даёт молоко." },
              { emoji: "🐐", caption: "Коза у забора — даёт молоко и шерсть." },
              { emoji: "🐎", caption: "Лошадь с жеребёнком — помогает человеку." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Үй жануарлары",
            slides: [
              { emoji: "🐕", caption: "Иттер адаммен бірге тұрып, үйді күзетеді." },
              { emoji: "🐄", caption: "Жайылымдағы сиыр сүт береді." },
              { emoji: "🐐", caption: "Қоршау жанындағы ешкі — сүт пен жүн береді." },
              { emoji: "🐎", caption: "Жылқы құлынымен — адамға көмектеседі." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Domestic animals",
            slides: [
              { emoji: "🐕", caption: "Dogs live with people — they guard the house." },
              { emoji: "🐄", caption: "A cow on the pasture gives milk." },
              { emoji: "🐐", caption: "A goat by the fence gives milk and wool." },
              { emoji: "🐎", caption: "A mare with her foal — helps people." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Проверь себя",
            question:
              "Кто из этих животных — домашний? Подумай и проверь ответ.",
            items: [
              { emoji: "🐕", label: "собака" },
              { emoji: "🐄", label: "корова" },
              { emoji: "🐐", label: "коза" },
            ],
            answer:
              "Все трое — домашние животные. Они живут рядом с человеком, приносят пользу, а человек заботится о них.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Өзіңді тексер",
            question:
              "Бұлардың қайсысы үй жануары? Ойлан да жауапты тексер.",
            items: [
              { emoji: "🐕", label: "ит" },
              { emoji: "🐄", label: "сиыр" },
              { emoji: "🐐", label: "ешкі" },
            ],
            answer:
              "Үшеуі де үй жануарлары. Олар адамның жанында тұрады, пайда әкеледі, адам оларды күтеді.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Check yourself",
            question:
              "Which of these are domestic animals? Think, then check.",
            items: [
              { emoji: "🐕", label: "dog" },
              { emoji: "🐄", label: "cow" },
              { emoji: "🐐", label: "goat" },
            ],
            answer:
              "All three are domestic animals. They live near people, are useful, and people take care of them.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Домашние** животные живут рядом с человеком, приносят **пользу**, а человек **заботится** о них.",
            terms: ["домашние", "пользу", "заботится"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Үй** жануарлары адамның жанында тұрады, **пайда** әкеледі, адам олар туралы **қамқорлық** жасайды.",
            terms: ["үй", "пайда", "қамқорлық"],
          },
          en: {
            title: "What I learned",
            text:
              "**Domestic** animals live near people, bring **benefit**, and people **take care** of them.",
            terms: ["domestic", "benefit", "take care"],
          },
        },
      },
    ],

    // Дикие животные
    observation: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Дикие животные",
            slides: [
              { emoji: "🐘", caption: "Слон живёт в жарких странах." },
              { emoji: "🦧", caption: "Орангутан живёт в тропических лесах." },
              { emoji: "🦅", caption: "Беркут парит над горами." },
              { emoji: "🦌", caption: "Сайгак бегает по степям Казахстана." },
              { emoji: "🐱", caption: "Рысь живёт в густых лесах." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Жабайы жануарлар",
            slides: [
              { emoji: "🐘", caption: "Піл ыстық елдерде тұрады." },
              { emoji: "🦧", caption: "Орангутан тропиктік ормандарда тұрады." },
              { emoji: "🦅", caption: "Бүркіт таулардың үстінде қалықтайды." },
              { emoji: "🦌", caption: "Киік Қазақстан даласында жүгіреді." },
              { emoji: "🐱", caption: "Сілеусін қалың орманда тұрады." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Wild animals",
            slides: [
              { emoji: "🐘", caption: "An elephant lives in hot countries." },
              { emoji: "🦧", caption: "An orangutan lives in tropical forests." },
              { emoji: "🦅", caption: "A golden eagle soars above the mountains." },
              { emoji: "🦌", caption: "A saiga runs across the steppes of Kazakhstan." },
              { emoji: "🐱", caption: "A lynx lives in dense forests." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Где они обитают?",
            question:
              "К какой группе относятся эти животные? Где они обитают?",
            items: [
              { emoji: "🐘", label: "слон" },
              { emoji: "🦅", label: "беркут" },
              { emoji: "🦌", label: "сайгак" },
            ],
            answer:
              "Все они — дикие животные. Слон живёт в саваннах, беркут — в горах, сайгак — в степях. Они сами добывают пищу.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Олар қайда тұрады?",
            question:
              "Бұл жануарлар қай топқа жатады? Олар қайда тұрады?",
            items: [
              { emoji: "🐘", label: "піл" },
              { emoji: "🦅", label: "бүркіт" },
              { emoji: "🦌", label: "киік" },
            ],
            answer:
              "Олардың барлығы — жабайы жануарлар. Піл саваннада, бүркіт тауда, киік далада тұрады. Олар тамағын өздері табады.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Where do they live?",
            question:
              "What group do these animals belong to? Where do they live?",
            items: [
              { emoji: "🐘", label: "elephant" },
              { emoji: "🦅", label: "eagle" },
              { emoji: "🦌", label: "saiga" },
            ],
            answer:
              "They are all wild animals. The elephant lives in savannas, the eagle in the mountains, the saiga in the steppes. They find food on their own.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Дикие** животные живут в **лесах**, **степях** и **горах**. Они сами добывают пищу и находят жильё.",
            terms: ["дикие", "лесах", "степях", "горах"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Жабайы** жануарлар **ормандарда**, **далада** және **тауларда** тұрады. Олар тамағын өздері табады, паналайтын жерін өздері іздейді.",
            terms: ["жабайы", "ормандарда", "далада", "тауларда"],
          },
          en: {
            title: "What I learned",
            text:
              "**Wild** animals live in **forests**, **steppes** and **mountains**. They find food and shelter on their own.",
            terms: ["wild", "forests", "steppes", "mountains"],
          },
        },
      },
      {
        type: "sort",
        data: {
          ru: {
            title: "Где обитают эти животные?",
            instruction:
              "Распредели животных по среде обитания.",
            categories: [
              { id: "land", label: "На земле / в лесу", emoji: "🌳" },
              { id: "water", label: "В воде", emoji: "🌊" },
              { id: "mount", label: "В горах", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "корова", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "заяц", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "лиса", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "архар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Проверить",
          },
          kz: {
            title: "Бұл жануарлар қайда тұрады?",
            instruction:
              "Жануарларды мекен ортасы бойынша бөл.",
            categories: [
              { id: "land", label: "Жерде / орманда", emoji: "🌳" },
              { id: "water", label: "Суда", emoji: "🌊" },
              { id: "mount", label: "Тауда", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "сиыр", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "қоян", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "түлкі", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "арқар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Тексеру",
          },
          en: {
            title: "Where do these animals live?",
            instruction:
              "Sort the animals by their habitat.",
            categories: [
              { id: "land", label: "On land / in forest", emoji: "🌳" },
              { id: "water", label: "In water", emoji: "🌊" },
              { id: "mount", label: "In mountains", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "cow", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "hare", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "fox", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "dolphin", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "argali", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Check",
          },
        },
      },
    ],

    // Итоги
    experiments: [
      {
        type: "fact",
        data: {
          ru: {
            title: "Найди в энциклопедии",
            text:
              "Узнай, какие редкие дикие животные живут в Казахстане. Запиши 3 примера и где они обитают.",
            keywords: ["энциклопедия", "Казахстан", "редкие"],
            icon: "sparkles",
          },
          kz: {
            title: "Энциклопедиядан тап",
            text:
              "Қазақстанда қандай сирек кездесетін жабайы жануарлар бар? 3 мысал жазып, қайда тұратынын көрсет.",
            keywords: ["энциклопедия", "Қазақстан", "сирек"],
            icon: "sparkles",
          },
          en: {
            title: "Find in the encyclopedia",
            text:
              "Find out which rare wild animals live in Kazakhstan. Write down 3 examples and where they live.",
            keywords: ["encyclopedia", "Kazakhstan", "rare"],
            icon: "sparkles",
          },
        },
      },
      {
        type: "fact",
        data: {
          ru: {
            title: "Это интересно!",
            text:
              "У молодых пингвинов хвост похож на белый мех. Это помогает их мамам быстро находить своих птенцов в большой стае.",
            keywords: ["пингвины", "хвост", "мех"],
            icon: "bulb",
          },
          kz: {
            title: "Бұл қызық!",
            text:
              "Жас пингвиндердің құйрығы ақ жүнге ұқсайды. Бұл аналарына үлкен топтан өз балапандарын тез табуға көмектеседі.",
            keywords: ["пингвин", "құйрық", "жүн"],
            icon: "bulb",
          },
          en: {
            title: "Did you know?",
            text:
              "Young penguins have tails that look like white fur. It helps their mothers quickly find their chicks in a large flock.",
            keywords: ["penguins", "tail", "fur"],
            icon: "bulb",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Итоговые вопросы",
            text:
              "1) Чем **дикие** животные отличаются от **домашних**? 2) Почему человек должен **заботиться** о домашних животных?",
          },
          kz: {
            title: "Қорытынды сұрақтар",
            text:
              "1) **Жабайы** жануарлар **үй** жануарларынан немен ерекшеленеді? 2) Адам үй жануарларына неліктен **қамқорлық** жасауы керек?",
          },
          en: {
            title: "Wrap-up questions",
            text:
              "1) How do **wild** animals differ from **domestic** ones? 2) Why should people **take care** of domestic animals?",
          },
        },
      },
    ],
  },
  33: {
    intro: [
      {
        type: "audio",
        data: {
          ru: {
            title: "Аудио-гид к уроку",
            text:
              "Сегодня мы узнаем, что животные бывают дикими и домашними, и в чём их главное отличие.",
            caption: "Послушай вступление к уроку",
            durationLabel: "0:22",
          },
          kz: {
            title: "Сабақтың аудио-гиді",
            text:
              "Бүгін біз жануарлардың жабайы және үй жануарлары болып бөлінетінін, олардың айырмашылығы неде екенін білеміз.",
            caption: "Сабақтың кіріспесін тыңда",
            durationLabel: "0:22",
          },
          en: {
            title: "Lesson audio guide",
            text:
              "Today we'll learn that animals can be wild or domestic, and what is the main difference between them.",
            caption: "Listen to the lesson intro",
            durationLabel: "0:22",
          },
        },
      },
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Ключевые слова",
            title: "Дикие и домашние",
            slides: [
              { emoji: "🏠", caption: "Домашние животные / Үй жануарлары / Domestic animals" },
              { emoji: "🌲", caption: "Дикие животные / Жабайы жануарлар / Wild animals" },
              { emoji: "🌍", caption: "Среда обитания / Мекен орта / Habitat" },
            ],
          },
          kz: {
            groupLabel: "Кілт сөздер",
            title: "Жабайы және үй",
            slides: [
              { emoji: "🏠", caption: "Үй жануарлары / Домашние / Domestic animals" },
              { emoji: "🌲", caption: "Жабайы жануарлар / Дикие / Wild animals" },
              { emoji: "🌍", caption: "Мекен орта / Среда обитания / Habitat" },
            ],
          },
          en: {
            groupLabel: "Key words",
            title: "Wild and domestic",
            slides: [
              { emoji: "🏠", caption: "Domestic animals / Домашние / Үй жануарлары" },
              { emoji: "🌲", caption: "Wild animals / Дикие / Жабайы жануарлар" },
              { emoji: "🌍", caption: "Habitat / Среда обитания / Мекен орта" },
            ],
          },
        },
      },
    ],

    // Домашние животные
    scientists: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Домашние животные",
            slides: [
              { emoji: "🐕", caption: "Собаки живут рядом с людьми — охраняют дом." },
              { emoji: "🐄", caption: "Корова на пастбище даёт молоко." },
              { emoji: "🐐", caption: "Коза у забора — даёт молоко и шерсть." },
              { emoji: "🐎", caption: "Лошадь с жеребёнком — помогает человеку." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Үй жануарлары",
            slides: [
              { emoji: "🐕", caption: "Иттер адаммен бірге тұрып, үйді күзетеді." },
              { emoji: "🐄", caption: "Жайылымдағы сиыр сүт береді." },
              { emoji: "🐐", caption: "Қоршау жанындағы ешкі — сүт пен жүн береді." },
              { emoji: "🐎", caption: "Жылқы құлынымен — адамға көмектеседі." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Domestic animals",
            slides: [
              { emoji: "🐕", caption: "Dogs live with people — they guard the house." },
              { emoji: "🐄", caption: "A cow on the pasture gives milk." },
              { emoji: "🐐", caption: "A goat by the fence gives milk and wool." },
              { emoji: "🐎", caption: "A mare with her foal — helps people." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Проверь себя",
            question:
              "Кто из этих животных — домашний? Подумай и проверь ответ.",
            items: [
              { emoji: "🐕", label: "собака" },
              { emoji: "🐄", label: "корова" },
              { emoji: "🐐", label: "коза" },
            ],
            answer:
              "Все трое — домашние животные. Они живут рядом с человеком, приносят пользу, а человек заботится о них.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Өзіңді тексер",
            question:
              "Бұлардың қайсысы үй жануары? Ойлан да жауапты тексер.",
            items: [
              { emoji: "🐕", label: "ит" },
              { emoji: "🐄", label: "сиыр" },
              { emoji: "🐐", label: "ешкі" },
            ],
            answer:
              "Үшеуі де үй жануарлары. Олар адамның жанында тұрады, пайда әкеледі, адам оларды күтеді.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Check yourself",
            question:
              "Which of these are domestic animals? Think, then check.",
            items: [
              { emoji: "🐕", label: "dog" },
              { emoji: "🐄", label: "cow" },
              { emoji: "🐐", label: "goat" },
            ],
            answer:
              "All three are domestic animals. They live near people, are useful, and people take care of them.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Домашние** животные живут рядом с человеком, приносят **пользу**, а человек **заботится** о них.",
            terms: ["домашние", "пользу", "заботится"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Үй** жануарлары адамның жанында тұрады, **пайда** әкеледі, адам олар туралы **қамқорлық** жасайды.",
            terms: ["үй", "пайда", "қамқорлық"],
          },
          en: {
            title: "What I learned",
            text:
              "**Domestic** animals live near people, bring **benefit**, and people **take care** of them.",
            terms: ["domestic", "benefit", "take care"],
          },
        },
      },
    ],

    // Дикие животные
    observation: [
      {
        type: "carousel",
        data: {
          ru: {
            groupLabel: "Работа в группах",
            title: "Дикие животные",
            slides: [
              { emoji: "🐘", caption: "Слон живёт в жарких странах." },
              { emoji: "🦧", caption: "Орангутан живёт в тропических лесах." },
              { emoji: "🦅", caption: "Беркут парит над горами." },
              { emoji: "🦌", caption: "Сайгак бегает по степям Казахстана." },
              { emoji: "🐱", caption: "Рысь живёт в густых лесах." },
            ],
          },
          kz: {
            groupLabel: "Топта жұмыс",
            title: "Жабайы жануарлар",
            slides: [
              { emoji: "🐘", caption: "Піл ыстық елдерде тұрады." },
              { emoji: "🦧", caption: "Орангутан тропиктік ормандарда тұрады." },
              { emoji: "🦅", caption: "Бүркіт таулардың үстінде қалықтайды." },
              { emoji: "🦌", caption: "Киік Қазақстан даласында жүгіреді." },
              { emoji: "🐱", caption: "Сілеусін қалың орманда тұрады." },
            ],
          },
          en: {
            groupLabel: "Group work",
            title: "Wild animals",
            slides: [
              { emoji: "🐘", caption: "An elephant lives in hot countries." },
              { emoji: "🦧", caption: "An orangutan lives in tropical forests." },
              { emoji: "🦅", caption: "A golden eagle soars above the mountains." },
              { emoji: "🦌", caption: "A saiga runs across the steppes of Kazakhstan." },
              { emoji: "🐱", caption: "A lynx lives in dense forests." },
            ],
          },
        },
      },
      {
        type: "reveal",
        data: {
          ru: {
            title: "Где они обитают?",
            question:
              "К какой группе относятся эти животные? Где они обитают?",
            items: [
              { emoji: "🐘", label: "слон" },
              { emoji: "🦅", label: "беркут" },
              { emoji: "🦌", label: "сайгак" },
            ],
            answer:
              "Все они — дикие животные. Слон живёт в саваннах, беркут — в горах, сайгак — в степях. Они сами добывают пищу.",
            buttonLabel: "Проверить ответ",
          },
          kz: {
            title: "Олар қайда тұрады?",
            question:
              "Бұл жануарлар қай топқа жатады? Олар қайда тұрады?",
            items: [
              { emoji: "🐘", label: "піл" },
              { emoji: "🦅", label: "бүркіт" },
              { emoji: "🦌", label: "киік" },
            ],
            answer:
              "Олардың барлығы — жабайы жануарлар. Піл саваннада, бүркіт тауда, киік далада тұрады. Олар тамағын өздері табады.",
            buttonLabel: "Жауапты тексеру",
          },
          en: {
            title: "Where do they live?",
            question:
              "What group do these animals belong to? Where do they live?",
            items: [
              { emoji: "🐘", label: "elephant" },
              { emoji: "🦅", label: "eagle" },
              { emoji: "🦌", label: "saiga" },
            ],
            answer:
              "They are all wild animals. The elephant lives in savannas, the eagle in the mountains, the saiga in the steppes. They find food on their own.",
            buttonLabel: "Check answer",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Что я узнал",
            text:
              "**Дикие** животные живут в **лесах**, **степях** и **горах**. Они сами добывают пищу и находят жильё.",
            terms: ["дикие", "лесах", "степях", "горах"],
          },
          kz: {
            title: "Мен нені білдім",
            text:
              "**Жабайы** жануарлар **ормандарда**, **далада** және **тауларда** тұрады. Олар тамағын өздері табады, паналайтын жерін өздері іздейді.",
            terms: ["жабайы", "ормандарда", "далада", "тауларда"],
          },
          en: {
            title: "What I learned",
            text:
              "**Wild** animals live in **forests**, **steppes** and **mountains**. They find food and shelter on their own.",
            terms: ["wild", "forests", "steppes", "mountains"],
          },
        },
      },
      {
        type: "sort",
        data: {
          ru: {
            title: "Где обитают эти животные?",
            instruction:
              "Распредели животных по среде обитания.",
            categories: [
              { id: "land", label: "На земле / в лесу", emoji: "🌳" },
              { id: "water", label: "В воде", emoji: "🌊" },
              { id: "mount", label: "В горах", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "корова", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "заяц", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "лиса", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "архар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Проверить",
          },
          kz: {
            title: "Бұл жануарлар қайда тұрады?",
            instruction:
              "Жануарларды мекен ортасы бойынша бөл.",
            categories: [
              { id: "land", label: "Жерде / орманда", emoji: "🌳" },
              { id: "water", label: "Суда", emoji: "🌊" },
              { id: "mount", label: "Тауда", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "сиыр", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "қоян", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "түлкі", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "дельфин", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "арқар", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Тексеру",
          },
          en: {
            title: "Where do these animals live?",
            instruction:
              "Sort the animals by their habitat.",
            categories: [
              { id: "land", label: "On land / in forest", emoji: "🌳" },
              { id: "water", label: "In water", emoji: "🌊" },
              { id: "mount", label: "In mountains", emoji: "⛰️" },
            ],
            items: [
              { id: "s1", label: "cow", emoji: "🐄", categoryId: "land" },
              { id: "s2", label: "hare", emoji: "🐰", categoryId: "land" },
              { id: "s3", label: "fox", emoji: "🦊", categoryId: "land" },
              { id: "s4", label: "dolphin", emoji: "🐬", categoryId: "water" },
              { id: "s5", label: "argali", emoji: "🐏", categoryId: "mount" },
            ],
            checkLabel: "Check",
          },
        },
      },
    ],

    // Итоги
    experiments: [
      {
        type: "fact",
        data: {
          ru: {
            title: "Найди в энциклопедии",
            text:
              "Узнай, какие редкие дикие животные живут в Казахстане. Запиши 3 примера и где они обитают.",
            keywords: ["энциклопедия", "Казахстан", "редкие"],
            icon: "sparkles",
          },
          kz: {
            title: "Энциклопедиядан тап",
            text:
              "Қазақстанда қандай сирек кездесетін жабайы жануарлар бар? 3 мысал жазып, қайда тұратынын көрсет.",
            keywords: ["энциклопедия", "Қазақстан", "сирек"],
            icon: "sparkles",
          },
          en: {
            title: "Find in the encyclopedia",
            text:
              "Find out which rare wild animals live in Kazakhstan. Write down 3 examples and where they live.",
            keywords: ["encyclopedia", "Kazakhstan", "rare"],
            icon: "sparkles",
          },
        },
      },
      {
        type: "fact",
        data: {
          ru: {
            title: "Это интересно!",
            text:
              "У молодых пингвинов хвост похож на белый мех. Это помогает их мамам быстро находить своих птенцов в большой стае.",
            keywords: ["пингвины", "хвост", "мех"],
            icon: "bulb",
          },
          kz: {
            title: "Бұл қызық!",
            text:
              "Жас пингвиндердің құйрығы ақ жүнге ұқсайды. Бұл аналарына үлкен топтан өз балапандарын тез табуға көмектеседі.",
            keywords: ["пингвин", "құйрық", "жүн"],
            icon: "bulb",
          },
          en: {
            title: "Did you know?",
            text:
              "Young penguins have tails that look like white fur. It helps their mothers quickly find their chicks in a large flock.",
            keywords: ["penguins", "tail", "fur"],
            icon: "bulb",
          },
        },
      },
      {
        type: "summary",
        data: {
          ru: {
            title: "Итоговые вопросы",
            text:
              "1) Чем **дикие** животные отличаются от **домашних**? 2) Почему человек должен **заботиться** о домашних животных?",
          },
          kz: {
            title: "Қорытынды сұрақтар",
            text:
              "1) **Жабайы** жануарлар **үй** жануарларынан немен ерекшеленеді? 2) Адам үй жануарларына неліктен **қамқорлық** жасауы керек?",
          },
          en: {
            title: "Wrap-up questions",
            text:
              "1) How do **wild** animals differ from **domestic** ones? 2) Why should people **take care** of domestic animals?",
          },
        },
      },
    ],
  },
};
