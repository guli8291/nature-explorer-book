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
  intro: { kz: "Кіріспе", ru: "Введение", en: "Introduction" },
  theory: { kz: "Теория", ru: "Теория", en: "Theory" },
  practice: { kz: "Тәжірибе", ru: "Практика", en: "Practice" },
  quiz: { kz: "Тест", ru: "Тест", en: "Quiz" },
  nav_intro: { kz: "Кіріспе", ru: "Введение", en: "Introduction" },
  nav_scientists: { kz: "Ғалымдар және ғылым", ru: "Учёные и наука", en: "Scientists & Science" },
  nav_observation: { kz: "Бақылау", ru: "Наблюдение", en: "Observation" },
  nav_experiments: { kz: "Тәжірибелер", ru: "Опыты и эксперименты", en: "Experiments" },
  nav_review: { kz: "Қайталау сұрақтары", ru: "Вопросы для повторения", en: "Review Questions" },
  scientists_body: {
    kz: "Ғалымдар — табиғатты зерттейтін адамдар. Олар сұрақтар қойып, жауап іздейді.",
    ru: "Учёные — это люди, которые изучают природу. Они задают вопросы и ищут ответы.",
    en: "Scientists are people who study nature. They ask questions and look for answers.",
  },
  observation_body: {
    kz: "Бақылау — көзбен, құлақпен және басқа сезім мүшелерімен айналаны зерттеу.",
    ru: "Наблюдение — это изучение окружающего мира с помощью глаз, ушей и других органов чувств.",
    en: "Observation is studying the world around us with our eyes, ears, and other senses.",
  },
  experiments_body: {
    kz: "Тәжірибе — бір нәрсені тексеру үшін жасайтын арнайы әрекет.",
    ru: "Эксперимент — это специальное действие, чтобы что-то проверить.",
    en: "An experiment is a special action we do to test something.",
  },
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
  // Sections
  sec_explorer: { kz: "Мен — зерттеушімін", ru: "Я – исследователь", en: "I am an explorer" },
  sec_living: { kz: "Тірі табиғат", ru: "Живая природа", en: "Living nature" },
  sec_physics1: { kz: "Табиғат физикасы (1-бөлім)", ru: "Физика природы (часть 1)", en: "Physics of nature (part 1)" },
  sec_space: { kz: "Жер және ғарыш", ru: "Земля и космос", en: "Earth and space" },
  sec_physics2: { kz: "Табиғат физикасы (2-бөлім)", ru: "Физика природы (часть 2)", en: "Physics of nature (part 2)" },
  // Lesson 1 content
  l1_title: { kz: 'Қоршаған әлемді қалай зерттейміз (сұрақ қоюды үйренеміз)', ru: 'Как изучают окружающий мир (учимся задавать вопросы)', en: 'How we study the world (learning to ask questions)' },
  l1_intro: { kz: 'Бүгін біз ғалымдардың табиғат туралы қалай сұрақ қоятынын және жауап іздейтінін білеміз.', ru: 'Сегодня узнаем, как учёные задают вопросы о природе и ищут на них ответы.', en: 'Today we will learn how scientists ask questions about nature and search for answers.' },
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
  l2_title: { kz: 'Өсімдіктер қандай болады', ru: 'Какие бывают растения', en: 'What kinds of plants are there' },
  // Per-lesson nav labels (override defaults nav_intro/nav_scientists/nav_observation/nav_experiments/nav_review)
  l2_nav_1: { kz: 'Кіріспе', ru: 'Введение', en: 'Introduction' },
  l2_nav_2: { kz: 'Топтық жұмыс', ru: 'Работа в группах', en: 'Group Work' },
  l2_nav_3: { kz: '', ru: '', en: '' },
  l2_nav_4: { kz: '', ru: '', en: '' },
  l2_nav_5: { kz: '', ru: '', en: '' },
  l2_intro: { kz: 'Өсімдіктер қандай топтарға бөлінетінін білеміз: ағаш, бұта, шөп.', ru: 'Узнаем, на какие группы делятся растения: дерево, кустарник, трава.', en: 'We will learn how plants are grouped: trees, shrubs and grasses.' },
  l2_theory_p1: { kz: '', ru: '', en: '' },
  l2_theory_p2: { kz: '', ru: '', en: '' },
  l2_theory_p3: { kz: '', ru: '', en: '' },
  l3_title: { kz: 'Өсімдіктің мүшелері', ru: 'Части растений', en: 'Parts of a plant' },
  l3_intro: { kz: 'Өсімдіктің негізгі мүшелерімен танысамыз: тамыр, сабақ, жапырақ, гүл және жеміс.', ru: 'Познакомимся с основными частями растения: корень, стебель, лист, цветок и плод.', en: 'We will meet the main parts of a plant: root, stem, leaf, flower and fruit.' },
  l3_theory_p1: { kz: '', ru: '', en: '' },
  l3_theory_p2: { kz: '', ru: '', en: '' },
  l3_theory_p3: { kz: '', ru: '', en: '' },
  l4_title: { kz: 'Зерттеу нәтижесін қалай жазады?', ru: 'Как записывать результаты?', en: 'How to record results?' },
  l4_intro: { kz: 'Бақылау нәтижелерін жазуды үйренеміз.', ru: 'Научимся записывать результаты своих наблюдений.', en: 'We will learn how to record observation results.' },
  l4_theory_p1: { kz: '', ru: '', en: '' },
  l4_theory_p2: { kz: '', ru: '', en: '' },
  l4_theory_p3: { kz: '', ru: '', en: '' },
  l5_title: { kz: 'Жабайы және мәдени өсімдіктер. Бөлме және мәдени өсімдіктерге күтім', ru: 'Дикорастущие и культурные растения. Уход за комнатными и культурными растениями', en: 'Wild and cultivated plants. Caring for houseplants and cultivated plants' },
  l5_intro: { kz: 'Жабайы мен мәдени өсімдіктердің айырмашылығын білеміз және оларға қалай күтім жасайтынды үйренеміз.', ru: 'Узнаем, чем дикорастущие растения отличаются от культурных, и научимся за ними ухаживать.', en: 'We will see how wild plants differ from cultivated ones and learn how to care for them.' },
  l5_theory_p1: { kz: '', ru: '', en: '' },
  l5_theory_p2: { kz: '', ru: '', en: '' },
  l5_theory_p3: { kz: '', ru: '', en: '' },
  l6_title: { kz: 'Өсімдіктер мен жануарлар. Ұқсастығы мен айырмашылығы', ru: 'Растения и животины. Чем похожи и чем отличаются', en: 'Plants and animals. How they are alike and different' },
  l6_intro: { kz: 'Өсімдіктер мен жануарлар тірі ағза ретінде немен ұқсас, немен ерекше — соны білеміз.', ru: 'Узнаем, чем растения и животные похожи как живые организмы и чем они различаются.', en: 'We will learn how plants and animals are alike as living organisms and how they differ.' },
  l6_theory_p1: { kz: '', ru: '', en: '' },
  l6_theory_p2: { kz: '', ru: '', en: '' },
  l6_theory_p3: { kz: '', ru: '', en: '' },
  l7_title: { kz: 'Жануарлар қандай болады', ru: 'Какие бывают животные', en: 'What kinds of animals are there' },
  l7_intro: { kz: 'Жануарлар жабайы және үй жануарлары болып бөлінетінін, олардың айырмашылығын білеміз.', ru: 'Узнаем, что животные бывают дикими и домашними, и в чём их отличия.', en: 'We will learn that animals are wild or domestic, and how they differ.' },
  l7_theory_p1: { kz: '', ru: '', en: '' },
  l7_theory_p2: { kz: '', ru: '', en: '' },
  l7_theory_p3: { kz: '', ru: '', en: '' },
  l8_title: { kz: 'Жануарлар жыл мезгілдерінің ауысуына қалай дайындалады', ru: 'Как животные готовятся к смене времён года', en: 'How animals prepare for the change of seasons' },
  l8_intro: { kz: 'Қыс келе жатқанда жануарлар қалай дайындалады — соны білеміз: түлеу, ұйқы, ұшып кету.', ru: 'Узнаем, как животные готовятся к зиме: линька, спячка, перелёт.', en: 'We will learn how animals get ready for winter: moulting, hibernation and migration.' },
  l8_theory_p1: { kz: '', ru: '', en: '' },
  l8_theory_p2: { kz: '', ru: '', en: '' },
  l8_theory_p3: { kz: '', ru: '', en: '' },
  l9_title: { kz: 'Адам денесінің мүшелері', ru: 'Части тела человека', en: 'Parts of the human body' },
  l9_intro: { kz: 'Адам денесі қандай мүшелерден тұратынын және анатомия деген не — соны білеміз.', ru: 'Узнаем, из каких частей состоит тело человека, и что такое анатомия.', en: 'We will learn the parts of the human body and what anatomy is.' },
  l9_theory_p1: { kz: '', ru: '', en: '' },
  l9_theory_p2: { kz: '', ru: '', en: '' },
  l9_theory_p3: { kz: '', ru: '', en: '' },
  l10_title: { kz: 'Адам өмірінің кезеңдері', ru: 'Этапы жизни человека', en: 'Stages of human life' },
  l10_intro: { kz: 'Адам өмірі қандай кезеңдерге бөлінетінін білеміз.', ru: 'Узнаем, на какие этапы делится жизнь человека.', en: 'We will learn the stages of human life.' },
  l10_theory_p1: { kz: '', ru: '', en: '' },
  l10_theory_p2: { kz: '', ru: '', en: '' },
  l10_theory_p3: { kz: '', ru: '', en: '' },
  l11_title: { kz: 'Адам — тірі ағза', ru: 'Человек — живой организм', en: 'A human is a living organism' },
  l11_intro: { kz: 'Адамға өсу мен дамуға не қажет екенін білеміз.', ru: 'Узнаем, что необходимо человеку для роста и развития.', en: 'We will learn what a human needs to grow and develop.' },
  l11_theory_p1: { kz: '', ru: '', en: '' },
  l11_theory_p2: { kz: '', ru: '', en: '' },
  l11_theory_p3: { kz: '', ru: '', en: '' },
  l12_title: { kz: 'Адам — тірі ағза (жалғасы)', ru: 'Человек — живой организм (продолжение)', en: 'A human is a living organism (continued)' },
  l12_intro: { kz: 'Өткен сабақты қайталап, білгенімізді тексереміз.', ru: 'Повторим прошлый урок и проверим свои знания.', en: 'We will revise the previous lesson and check our knowledge.' },
  l12_theory_p1: { kz: '', ru: '', en: '' },
  l12_theory_p2: { kz: '', ru: '', en: '' },
  l12_theory_p3: { kz: '', ru: '', en: '' },
  l13_title: { kz: 'Күш деген не. Қозғалыс деген не', ru: 'Что такое сила. Что такое движение', en: 'What is force. What is motion' },
  l13_intro: { kz: 'Қозғалыс, итеру және тарту деген не екенін білеміз.', ru: 'Узнаем, что такое движение, толчок и тяга.', en: 'We will learn what motion, push and pull are.' },
  l13_theory_p1: { kz: '', ru: '', en: '' },
  l13_theory_p2: { kz: '', ru: '', en: '' },
  l13_theory_p3: { kz: '', ru: '', en: '' },
  l14_title: { kz: 'Тірі ағзалардың қозғалысы', ru: 'Движение живых организмов', en: 'Motion of living organisms' },
  l14_intro: { kz: 'Жануарлар мен адамға неге қозғалу қажет екенін білеміз.', ru: 'Узнаем, почему животным и людям необходимо двигаться.', en: 'We will learn why animals and people need to move.' },
  l14_theory_p1: { kz: '', ru: '', en: '' },
  l14_theory_p2: { kz: '', ru: '', en: '' },
  l14_theory_p3: { kz: '', ru: '', en: '' },
  l15_title: { kz: 'Траектория деген не', ru: 'Что такое траектория', en: 'What is a trajectory' },
  l15_intro: { kz: 'Траектория деген не және оны қалай сызуға болады — соны білеміз.', ru: 'Узнаем, что такое траектория и как её изобразить.', en: 'We will learn what a trajectory is and how to draw it.' },
  l15_theory_p1: { kz: '', ru: '', en: '' },
  l15_theory_p2: { kz: '', ru: '', en: '' },
  l15_theory_p3: { kz: '', ru: '', en: '' },
  l16_title: { kz: 'Заттарды қозғалысқа қандай күштер келтіреді', ru: 'Какие силы приводят предметы в движение', en: 'What forces set objects in motion' },
  l16_intro: { kz: 'Ауырлық, серпімділік және үйкеліс күштерімен танысамыз.', ru: 'Узнаем, что такое сила тяжести, упругости и трения.', en: 'We will meet the forces of gravity, elasticity and friction.' },
  l16_theory_p1: { kz: '', ru: '', en: '' },
  l16_theory_p2: { kz: '', ru: '', en: '' },
  l16_theory_p3: { kz: '', ru: '', en: '' },
  l17_title: { kz: 'Ғарыш және астрономия', ru: 'Космос и астрономия', en: 'Space and astronomy' },
  l17_intro: { kz: 'Астрономия нені зерттейтінін білеміз.', ru: 'Узнаем, что изучает астрономия.', en: 'We will learn what astronomy studies.' },
  l17_theory_p1: { kz: '', ru: '', en: '' },
  l17_theory_p2: { kz: '', ru: '', en: '' },
  l17_theory_p3: { kz: '', ru: '', en: '' },
  l18_title: { kz: 'Ғарышты зерттеу', ru: 'Изучение космоса', en: 'Studying space' },
  l18_intro: { kz: 'Ғарышты зерттеуге қандай аспаптар қолданылады және ғарышкер деген кім — соны білеміз.', ru: 'Узнаем, какие приборы используют для изучения космоса и кто такие космонавты.', en: 'We will learn what tools are used to study space and who astronauts are.' },
  l18_theory_p1: { kz: '', ru: '', en: '' },
  l18_theory_p2: { kz: '', ru: '', en: '' },
  l18_theory_p3: { kz: '', ru: '', en: '' },
  l19_title: { kz: 'Ғарышты зерттеу (жалғасы)', ru: 'Изучение космоса (продолжение)', en: 'Studying space (continued)' },
  l19_intro: { kz: 'Қазақстандық ғарышкерлермен танысып, ғарыш аппараттары туралы білеміз.', ru: 'Познакомимся с казахстанскими космонавтами и космическими аппаратами.', en: 'We will meet Kazakh cosmonauts and learn about spacecraft.' },
  l19_theory_p1: { kz: '', ru: '', en: '' },
  l19_theory_p2: { kz: '', ru: '', en: '' },
  l19_theory_p3: { kz: '', ru: '', en: '' },
  l20_title: { kz: 'Жер — планета', ru: 'Земля — планета', en: 'The Earth — a planet' },
  l20_intro: { kz: 'Глобус деген не және Жер планетасының пішіні қандай — соны білеміз.', ru: 'Узнаем, что такое глобус и какую форму имеет планета Земля.', en: 'We will learn what a globe is and what shape the Earth has.' },
  l20_theory_p1: { kz: '', ru: '', en: '' },
  l20_theory_p2: { kz: '', ru: '', en: '' },
  l20_theory_p3: { kz: '', ru: '', en: '' },
  l21_title: { kz: 'Ауаның қасиеті', ru: 'Свойства воздуха', en: 'Properties of air' },
  l21_intro: { kz: 'Ауаның қасиеттерін зерттейміз.', ru: 'Изучим свойства воздуха.', en: 'We will explore the properties of air.' },
  l21_theory_p1: { kz: '', ru: '', en: '' },
  l21_theory_p2: { kz: '', ru: '', en: '' },
  l21_theory_p3: { kz: '', ru: '', en: '' },
  l22_title: { kz: 'Табиғаттағы су', ru: 'Вода в природе', en: 'Water in nature' },
  l22_intro: { kz: 'Табиғаттағы су туралы білеміз.', ru: 'Узнаем, где встречается вода в природе.', en: 'We will learn about water in nature.' },
  l22_theory_p1: { kz: '', ru: '', en: '' },
  l22_theory_p2: { kz: '', ru: '', en: '' },
  l22_theory_p3: { kz: '', ru: '', en: '' },
  l23_title: { kz: 'Судың қасиеті', ru: 'Свойства воды', en: 'Properties of water' },
  l23_intro: { kz: 'Судың қасиеттерін зерттейміз.', ru: 'Изучим свойства воды.', en: 'We will explore the properties of water.' },
  l23_theory_p1: { kz: '', ru: '', en: '' },
  l23_theory_p2: { kz: '', ru: '', en: '' },
  l23_theory_p3: { kz: '', ru: '', en: '' },
  l24_title: { kz: 'Тастар мен топырақ', ru: 'Камни и почва', en: 'Rocks and soil' },
  l24_intro: { kz: 'Тастар мен топырақпен танысамыз.', ru: 'Познакомимся с камнями и почвой.', en: 'We will meet rocks and soil.' },
  l24_theory_p1: { kz: '', ru: '', en: '' },
  l24_theory_p2: { kz: '', ru: '', en: '' },
  l24_theory_p3: { kz: '', ru: '', en: '' },
  l25_title: { kz: 'Күн мен түн', ru: 'День и ночь', en: 'Day and night' },
  l25_intro: { kz: 'Күн мен түн неге ауысатынын білеміз.', ru: 'Узнаем, почему сменяются день и ночь.', en: 'We will learn why day and night change.' },
  l25_theory_p1: { kz: '', ru: '', en: '' },
  l25_theory_p2: { kz: '', ru: '', en: '' },
  l25_theory_p3: { kz: '', ru: '', en: '' },
  l26_title: { kz: 'Күн — жарық көзі', ru: 'Солнце — источник света', en: 'The Sun — source of light' },
  l26_intro: { kz: 'Күн — жарықтың басты көзі екенін түсінеміз.', ru: 'Поймём, почему Солнце — главный источник света.', en: 'We will see why the Sun is the main source of light.' },
  l26_theory_p1: { kz: '', ru: '', en: '' },
  l26_theory_p2: { kz: '', ru: '', en: '' },
  l26_theory_p3: { kz: '', ru: '', en: '' },
  l27_title: { kz: 'Жұлдыздар мен Ай', ru: 'Звезды и Луна', en: 'Stars and the Moon' },
  l27_intro: { kz: 'Жұлдыздар мен Аймен танысамыз.', ru: 'Познакомимся со звёздами и Луной.', en: 'We will meet the stars and the Moon.' },
  l27_theory_p1: { kz: '', ru: '', en: '' },
  l27_theory_p2: { kz: '', ru: '', en: '' },
  l27_theory_p3: { kz: '', ru: '', en: '' },
  l28_title: { kz: 'Жыл мезгілдері', ru: 'Времена года', en: 'Seasons' },
  l28_intro: { kz: 'Жыл мезгілдері туралы білеміз.', ru: 'Узнаем о временах года.', en: 'We will learn about the seasons.' },
  l28_theory_p1: { kz: '', ru: '', en: '' },
  l28_theory_p2: { kz: '', ru: '', en: '' },
  l28_theory_p3: { kz: '', ru: '', en: '' },
  l29_title: { kz: 'Ауа райы және киім', ru: 'Погода и одежда', en: 'Weather and clothing' },
  l29_intro: { kz: 'Ауа райына қарай киінуді үйренеміз.', ru: 'Научимся выбирать одежду по погоде.', en: 'We will learn to dress for the weather.' },
  l29_theory_p1: { kz: '', ru: '', en: '' },
  l29_theory_p2: { kz: '', ru: '', en: '' },
  l29_theory_p3: { kz: '', ru: '', en: '' },
  l30_title: { kz: 'Күш және қозғалыс', ru: 'Сила и движение', en: 'Force and motion' },
  l30_intro: { kz: 'Күш пен қозғалыспен танысамыз.', ru: 'Познакомимся с силой и движением.', en: 'We will meet force and motion.' },
  l30_theory_p1: { kz: '', ru: '', en: '' },
  l30_theory_p2: { kz: '', ru: '', en: '' },
  l30_theory_p3: { kz: '', ru: '', en: '' },
  l31_title: { kz: 'Магниттер', ru: 'Магниты', en: 'Magnets' },
  l31_intro: { kz: 'Магниттер қалай жұмыс істейтінін білеміз.', ru: 'Узнаем, что такое магниты и как они работают.', en: 'We will learn how magnets work.' },
  l31_theory_p1: { kz: '', ru: '', en: '' },
  l31_theory_p2: { kz: '', ru: '', en: '' },
  l31_theory_p3: { kz: '', ru: '', en: '' },
  l32_title: { kz: 'Айналамыздағы дыбыстар', ru: 'Звуки вокруг нас', en: 'Sounds around us' },
  l32_intro: { kz: 'Айналамыздағы дыбыстарды тыңдаймыз.', ru: 'Услышим и изучим звуки вокруг нас.', en: 'We will listen to sounds around us.' },
  l32_theory_p1: { kz: '', ru: '', en: '' },
  l32_theory_p2: { kz: '', ru: '', en: '' },
  l32_theory_p3: { kz: '', ru: '', en: '' },
  l33_title: { kz: 'Біз не үйрендік? (Қорытынды)', ru: 'Что мы узнали? (Итоги)', en: 'What have we learned?' },
  l33_intro: { kz: 'Қорытынды жасап, үйренгенімізді еске түсіреміз.', ru: 'Подведём итоги — вспомним всё, что узнали.', en: 'We will sum up everything we have learned.' },
  l33_theory_p1: { kz: '', ru: '', en: '' },
  l33_theory_p2: { kz: '', ru: '', en: '' },
  l33_theory_p3: { kz: '', ru: '', en: '' },
  l1_scientists: { kz: 'Ғалым — қоршаған әлемді зерттейтін адам. Ол лупамен өсімдікті қарайды, неге олай аталатынын ойлайды және әр құбылыстың жауабын іздейді.', ru: 'Учёный — это человек, изучающий окружающий мир. Он рассматривает растение через лупу, думает, почему оно так называется, и ищет ответ на каждое явление.', en: 'A scientist is a person who studies the world. They look at a plant through a magnifier, ask why it is named so, and search for the answer to every phenomenon.' },
  l1_observation: { kz: 'Бүршіктің ашылуын күнделікті бақыла: жабық, жартылай ашық, толық ашық. Қай мезгілде мұндай өзгеріс болады? Сары алғашқы гүлдерді тауып, олардың атын білуге тырыс.', ru: 'Понаблюдай за раскрытием почки день за днём: закрытая, чуть приоткрытая, распустилась. В какое время года это бывает? Найди жёлтые первоцветы и попробуй узнать их название.', en: 'Watch a bud open day by day: closed, half-open, fully bloomed. In what season does this happen? Find yellow spring flowers and try to name them.' },
  l1_experiments: { kz: 'Шай кесесіне қант сал да, не болатынын қара. Адам не істеп жатыр? Ол үшін не үшін? Содан кейін кит, саңырауқұлақ, құмырсқа, жаңбыр, жапырақ түсу, су астындағы дайвер суреттерін қай ғылым саласына жатқызуға болатынын ойла.', ru: 'Опусти сахар в чашку и посмотри, что произойдёт. Что делает человек? Для чего? Затем подумай, к какому разделу науки отнести кита, гриб, муравья, дождь, листопад и дайвера под водой.', en: 'Drop sugar into a cup and watch what happens. What is the person doing, and why? Then decide which branch of science studies whales, mushrooms, ants, rain, falling leaves and divers underwater.' },
  l1_review: { kz: '1. Дикі жануар үй жануарынан немен ерекшеленеді — әлі ертерек: ғалым әлемді қалай зерттейді?
2. Қаныш Сәтбаев туралы не білдің?
3. Сұрақ қою неге маңызды?', ru: '1. Как учёный изучает окружающий мир?
2. Что ты узнал о Каныше Сатпаеве?
3. Почему важно уметь задавать вопросы?', en: '1. How does a scientist study the world?
2. What did you learn about Kanysh Satpayev?
3. Why is it important to ask questions?' },
  l2_scientists: { kz: 'Ағаштың бір ғана діңгегі, бұтаның бірнеше жіңішке діңі, шөптің жұмсақ сабағы болады. Ботаниктер дәл осы белгілер бойынша өсімдіктерді жіктейді.', ru: 'У дерева один ствол, у кустарника несколько тонких стволиков, у травы — мягкий стебель. Именно по этим признакам ботаники разделяют растения.', en: 'A tree has one trunk, a shrub has several thin stems, and a grass has a soft stem. Botanists group plants by these features.' },
  l2_observation: { kz: 'Шыршаның ине жапырағын және емен жапырағын лупамен қара. Олар немен ерекшеленеді? Шыршаның жапырақтарын қалай атаймыз?', ru: 'Рассмотри через лупу хвою ели и лист дуба. Чем они отличаются? Как называются листья ели?', en: 'Use a magnifier to look at a spruce needle and an oak leaf. How do they differ? What do we call the leaves of a spruce?' },
  l2_experiments: { kz: 'Сөздерді топтарға бөл: қайың, сирень, бақбақ, қарағай, қарақат, қызғалдақ — қайсысы ағаш, қайсысы бұта, қайсысы шөп? Тексеру түймесін бас.', ru: 'Распредели слова по группам: берёза, сирень, одуванчик, сосна, смородина, тюльпан — где дерево, где кустарник, где трава? Нажми «Проверить ответ».', en: 'Sort the words into groups: birch, lilac, dandelion, pine, currant, tulip — which is a tree, a shrub, a grass? Press "Check answer".' },
  l2_review: { kz: '1. Өсімдіктер қандай топтарға бөлінеді?
2. Жапырақ түріне қарай қандай топтар болады?
3. Сенің өңіріңде қандай қызықты өсімдіктер өседі?', ru: '1. На какие группы делятся растения?
2. Какие группы выделяют по типу листьев?
3. Какие интересные растения растут в твоей местности?', en: '1. What groups are plants divided into?
2. What groups are there by type of leaf?
3. What interesting plants grow in your area?' },
  l3_scientists: { kz: 'Қызанақ бұтасын қара: 1 — тамыр, 2 — сабақ, 3 — жапырақ, 4 — гүл, 5 — тұқымды жеміс. Әр мүше өз жұмысын атқарады.', ru: 'Рассмотри куст томата: 1 — корень, 2 — стебель, 3 — лист, 4 — цветок, 5 — плод с семенами. Каждая часть выполняет свою работу.', en: 'Look at a tomato plant: 1 — root, 2 — stem, 3 — leaf, 4 — flower, 5 — fruit with seeds. Each part has its own job.' },
  l3_observation: { kz: 'Гүлдеген алма ағашы мен жемісті алма ағашын салыстыр. Бір ғана ағаш қалай өзгерді? Қайың мен қызғалдақтың айырмашылығы неде?', ru: 'Сравни цветущую и плодоносящую яблоню. Как изменилось одно и то же дерево? Чем отличаются берёза и тюльпан?', en: 'Compare an apple tree in bloom and with fruit. How did the same tree change? How do a birch and a tulip differ?' },
  l3_experiments: { kz: 'Пластилиннен немесе кепкен жапырақтардан өсімдік моделін жаса. Содан кейін «1 — тамыр, 2 — сабақ, 3 — жапырақ, 4 — гүл, 5 — жеміс» сандарын анютиналар суретіндегі сәйкес мүшелермен сәйкестендір.', ru: 'Сделай модель растения из пластилина или засушенных листьев. Затем сопоставь номера «1 — корень, 2 — стебель, 3 — лист, 4 — цветок, 5 — плод» с частями на рисунке анютиных глазок.', en: 'Build a model plant from clay or dried leaves. Then match the numbers "1 — root, 2 — stem, 3 — leaf, 4 — flower, 5 — fruit" to the parts on the pansy picture.' },
  l3_review: { kz: '1. Өсімдік қандай мүшелерден тұрады?
2. Тамырды неге жер асты мүшесі деп атайды?
3. Өсімдік бір мүшесінен айырылса не болады?', ru: '1. Из каких частей состоит растение?
2. Почему корень называют подземной частью растения?
3. Что произойдёт, если растение лишится одной из своих частей?', en: '1. What parts does a plant consist of?
2. Why is the root called the underground part?
3. What happens if a plant loses one of its parts?' },
  l4_scientists: { kz: 'Ғалым күнделік жүргізуі шарт: сурет салады, фотоға түсіреді, күн мен ауа райын жазады. Жазбасыз жаңалықты ұмытып қалуға болады.', ru: 'Учёный обязательно ведёт дневник: рисует, фотографирует, записывает дату и погоду. Без записей открытие легко забыть.', en: 'A scientist always keeps a diary: drawings, photos, the date and the weather. Without notes a discovery is easily forgotten.' },
  l4_observation: { kz: 'Бұлттарды 5 минут бақылап, пішінін сал. Бір сағаттан кейін қайта сал — олардың қаншалықты өзгергенін көресің.', ru: 'Понаблюдай за облаками 5 минут и нарисуй их форму. Через час нарисуй снова — увидишь, как сильно они меняются.', en: 'Watch the clouds for 5 minutes and draw their shape. Draw again an hour later — you\'ll see how much they change.' },
  l4_experiments: { kz: '«Менің ауа райым» блокнотын бастап жаз: күн сайын күнді, бұлтты немесе жаңбырды сал. Аптадан кейін шынайы бақылау кестесі шығады.', ru: 'Заведи блокнот «Моя погода»: каждый день рисуй солнце, тучу или дождь. Через неделю получится настоящая таблица наблюдений.', en: 'Start a notebook called "My weather": every day draw a sun, cloud or rain. After a week you\'ll have a real observation table.' },
  l4_review: { kz: '1. Бақылау күнделігі не үшін қажет?\n2. Жаза алмасаң, нәтижені қалай жазуға болады?\n3. Сенің ауа райыңда не жиі өзгерді?', ru: '1. Зачем нужен дневник наблюдений?\n2. Как можно записывать результаты, если ещё не умеешь писать?\n3. Что в твоей погоде менялось чаще всего?', en: '1. Why do we need an observation diary?\n2. How can you record results if you can\'t write yet?\n3. What changed most often in your weather?' },
  l5_scientists: { kz: 'Жабайы өсімдіктер — даланың өзі еккен өсімдіктер. Мәдени өсімдіктерді адам өсіреді: мақта, бидай, қырыққабат. Күнтізбек, түймешетен, шайқурай — дәрілік өсімдіктер.', ru: 'Дикорастущие растения сеет сама природа, а культурные — выращивает человек: хлопок, пшеница, капуста. Календула, ромашка, зверобой — лекарственные растения.', en: 'Wild plants grow on their own, while cultivated ones are grown by people: cotton, wheat, cabbage. Calendula, chamomile and St John\'s wort are medicinal plants.' },
  l5_observation: { kz: 'Шалғын мен егілген алқапты салыстыр: бірінші суретте өсімдіктер ___, екіншісінде ___. Калла мен хлорофитумды қара: бұл бөлме гүлдерін қайда қою керек?', ru: 'Сравни луг и засеянное поле: на первом фото растения ___, на втором ___. Рассмотри фиалку и хлорофитум: где лучше держать эти комнатные цветы?', en: 'Compare a meadow and a sown field: in the first photo plants are ___, in the second ___. Look at a violet and a spider plant: where is best to keep these houseplants?' },
  l5_experiments: { kz: 'Сөздерді екі бағанға бөл: «Жабайы» — бақбақ, қайың, қалампыр; «Мәдени» — күнбағыс, бидай, қырыққабат. Содан кейін өсімдікке күтім жасауға қажет заттарды белгіле: су құюғыш, бүріккіш, бақша құралы, секатор.', ru: 'Распредели слова по двум колонкам: «Дикорастущие» — одуванчик, берёза, гвоздика; «Культурные» — подсолнечник, пшеница, капуста. Затем выбери только те предметы, что нужны для ухода: лейка, пульверизатор, садовый инструмент, секатор.', en: 'Sort the words into two columns: "Wild" — dandelion, birch, carnation; "Cultivated" — sunflower, wheat, cabbage. Then pick only the items needed for plant care: watering can, spray bottle, garden tool, secateurs.' },
  l5_review: { kz: '1. Жабайы өсімдік мәдениден немен ерекшеленеді?
2. Бөлме гүліне не қажет?
3. Мәдени өсімдікке күтім жасамаса не болады?', ru: '1. Чем дикорастущее растение отличается от культурного?
2. Что нужно комнатному растению?
3. Что произойдёт, если не ухаживать за культурными растениями?', en: '1. How does a wild plant differ from a cultivated one?
2. What does a houseplant need?
3. What happens if cultivated plants are not cared for?' },
  l6_scientists: { kz: 'Барлық тірі ағза тыныс алады, қоректенеді, өседі, көбейеді, қартаяды. Ит күшіктен ересек итке дейін өседі: 1 ай, 3 ай, 6 ай, 1 жыл, 2 жыл, 3 жыл, 5 жыл.', ru: 'Все живые организмы дышат, питаются, растут, размножаются и стареют. Собака растёт от щенка до взрослого пса: 1 месяц, 3 месяца, 6 месяцев, 1 год, 2 года, 3 года, 5 лет.', en: 'Every living thing breathes, eats, grows, reproduces and ages. A dog grows from a puppy to an adult: 1 month, 3, 6 months, 1, 2, 3, 5 years.' },
  l6_observation: { kz: 'Жылқы, тасбақа, кірпі, сиыр, тотықұс, мысықты қара. Қайсысы жылдам жүгіреді, қайсысы баяу қозғалады? Әрқайсысын белгіле.', ru: 'Рассмотри лошадь, черепаху, ежа, корову, попугая ара и кошку. Кто бегает быстро, а кто двигается медленно? Отметь каждого галочкой.', en: 'Look at a horse, turtle, hedgehog, cow, macaw and cat. Which moves fast, which slowly? Tick each one.' },
  l6_experiments: { kz: 'Гепардтың жүгіруі мен тиіннің секіруін салыстыр. Жануарлар қалай жылжиды және бұл оларға қалай көмектеседі? 4 қазан — Бүкіләлемдік жануарларды қорғау күні.', ru: 'Сравни бег гепарда и прыжки белки. Как двигаются животные и как им это помогает? 4 октября — Всемирный день защиты животных.', en: 'Compare a cheetah running and a squirrel leaping. How do animals move and how does it help them? October 4 is World Animal Day.' },
  l6_review: { kz: '1. Өсімдік пен жануардың ұқсастығы неде?
2. Олардың қоректенуі қалай ерекшеленеді?
3. Неліктен жануарларды қорғау керек?', ru: '1. Чем похожи растения и животные?
2. Чем отличается их питание?
3. Почему нужно защищать животных?', en: '1. How are plants and animals alike?
2. How does their feeding differ?
3. Why must we protect animals?' },
  l7_scientists: { kz: 'Үй жануарлары адам жанында тұрады, оған пайда әкеледі: ит, сиыр, ешкі, жылқы. Адам оларға күтім жасайды.', ru: 'Домашние животные живут рядом с человеком и приносят ему пользу: собака, корова, коза, лошадь. Человек о них заботится.', en: 'Domestic animals live near people and help them: dog, cow, goat, horse. People take care of them.' },
  l7_observation: { kz: 'Піл, орангутанг, бүркіт, киік, сілеусін — олар қай жерде мекендейді? Әрқайсысын дұрыс топқа орналастыр.', ru: 'Слон, орангутан, беркут, сайгак, рысь — где они обитают? Помести каждого в правильную группу.', en: 'Elephant, orangutan, golden eagle, saiga, lynx — where do they live? Place each in the right group.' },
  l7_experiments: { kz: 'Сиыр, қоян, түлкі, дельфин, арқарды мекен ортасы бойынша сұрыпта: су, жер, тау. Қазақстанның сирек жануарлары туралы энциклопедиядан тауып оқы.', ru: 'Распредели корову, зайца, лису, дельфина и архара по среде обитания: вода, земля, горы. Найди в энциклопедии редких животных Казахстана.', en: 'Sort cow, hare, fox, dolphin and argali by habitat: water, land, mountains. Look up rare animals of Kazakhstan in an encyclopedia.' },
  l7_review: { kz: '1. Жабайы жануарлар үй жануарларынан немен ерекшеленеді?
2. Адам үй жануарларына неліктен қамқор болуы керек?', ru: '1. Чем дикие животные отличаются от домашних?
2. Почему человек должен заботиться о домашних животных?', en: '1. How do wild animals differ from domestic ones?
2. Why must people care for domestic animals?' },
  l8_scientists: { kz: 'Түлеу — жануардың жүнін немесе құстың қауырсынын ауыстыруы. Қоян жазда сұр, қыста ақ; тиін жазда қызыл, қыста сұрғылт болады.', ru: 'Линька — это смена шерсти у животного или перьев у птицы. Заяц летом серый, зимой белый; белка летом рыжая, зимой сероватая.', en: 'Moulting is when an animal changes its fur or a bird its feathers. A hare is grey in summer and white in winter; a squirrel is red in summer and grey in winter.' },
  l8_observation: { kz: 'Аю жазда орманда жүреді, қыста апанда ұйықтайды. Көктемде қайтып келетін құстарды «жыл құстары» дейді.', ru: 'Медведь летом гуляет в лесу, зимой спит в берлоге. Птиц, которые улетают и возвращаются весной, называют перелётными.', en: 'A bear roams the forest in summer and sleeps in a den in winter. Birds that fly away and return in spring are called migratory.' },
  l8_experiments: { kz: 'Тиін, кірпі, борсық, көртышқан, тышқан, аю, сарышұнақты екі бағанға сұрыпта: «Қор жинайды» және «Ұйқыға кетеді». Сурок қор жинамайды — ол өте терең ұйықтайды.', ru: 'Распредели белку, ежа, барсука, бурундука, мышь, медведя и суслика по двум колонкам: «Делают запасы» и «Впадают в спячку». Сурок не делает запасов — он спит очень глубоко.', en: 'Sort squirrel, hedgehog, badger, chipmunk, mouse, bear and ground squirrel into two columns: "Store food" and "Hibernate". The marmot stores nothing — it sleeps very deeply.' },
  l8_review: { kz: '1. Қандай жануарлар қысқы ұйқыға кетеді?
2. Кейбір құстар жылы жаққа неге ұшып кетеді?', ru: '1. Какие животные впадают в спячку?
2. Почему некоторые птицы улетают на юг?', en: '1. Which animals hibernate?
2. Why do some birds fly south?' },
  l9_scientists: { kz: 'Адам денесі бас, мойын, тұлға, қол және аяқтан тұрады. Анатомия — ағзаның құрылысын зерттейтін ғылым.', ru: 'Тело человека состоит из головы, шеи, туловища, рук и ног. Анатомия — наука, изучающая строение организма.', en: 'The human body has a head, neck, torso, arms and legs. Anatomy is the science of how the body is built.' },
  l9_observation: { kz: 'Балалар сабақта, орманда, бассейнде, асфальтта сурет салғанда қандай мүшелерін қолданады? Әр суретке жауап бер.', ru: 'Какие части тела дети используют в классе, в лесу, в бассейне, рисуя на асфальте? Ответь по каждому фото.', en: 'Which body parts do children use in class, in the forest, in a pool, drawing on the pavement? Answer for each photo.' },
  l9_experiments: { kz: 'Цифрларды бала суретімен сәйкестендір: 1 — бас, 2 — қол, 3 — тұлға, 4 — аяқ. Жауапты тексер.', ru: 'Сопоставь цифры с рисунком ребёнка: 1 — голова, 2 — рука, 3 — туловище, 4 — нога. Проверь ответ.', en: 'Match the numbers to the child\'s picture: 1 — head, 2 — arm, 3 — torso, 4 — leg. Check the answer.' },
  l9_review: { kz: '1. Адам денесі қандай мүшелерден тұрады?
2. Денеміздің құрылысын білу неге қажет?
3. Қолыңмен не істей аласың?', ru: '1. Из каких частей состоит тело человека?
2. Зачем знать строение тела?
3. Расскажи, что ты умеешь делать руками.', en: '1. What parts make up the human body?
2. Why know the body\'s structure?
3. What can you do with your hands?' },
  l10_scientists: { kz: 'Нәрестелік (0–1), ерте балалық (1–3), мектеп жасына дейін (3–6), мектеп жасы (6–17), жастық (18–25), орта жас (26–44), толысқан жас (45–59), қарт жас (60–75), ұзақ өмір сүрушілер (90+).', ru: 'Младенчество (0–1), раннее детство (1–3), дошкольный (3–6), школьный (6–17), молодость (18–25), средний (26–44), зрелый (45–59), пожилой (60–75), долгожители (90+).', en: 'Infancy (0–1), early childhood (1–3), preschool (3–6), school (6–17), youth (18–25), middle age (26–44), maturity (45–59), elderly (60–75), long-livers (90+).' },
  l10_observation: { kz: 'Бес ер адамның суретін салыстыр: бала, жасөспірім, ересек, қарт. Адам жасына қарай қалай өзгереді?', ru: 'Сравни пять фигур мужчин: мальчик, подросток, взрослый, пожилой. Как меняется человек с возрастом?', en: 'Compare five figures: boy, teen, adult, elderly. How does a person change with age?' },
  l10_experiments: { kz: 'Қандай заттар қай кезеңге қажет: коляска, рюкзак, доп, көлік, ноутбук? Сұрыпта да тексер. Ұзақ өмір сүрушілер туралы энциклопедиядан оқы.', ru: 'Определи, на каком этапе нужны эти вещи: коляска, рюкзак, мяч, машина, ноутбук. Распредели и проверь. Найди в энциклопедии о людях-долгожителях.', en: 'Decide at which life stage these items are needed: pram, backpack, ball, car, laptop. Sort and check. Read about long-livers in an encyclopedia.' },
  l10_review: { kz: '1. Адам өмірі қандай кезеңдерге бөлінеді?
2. Қай кезеңде бала мектепке барады?
3. Бірінші сыныпта не үйрендің, қалай өзгердің?', ru: '1. На какие этапы делится жизнь человека?
2. На каком этапе человек учится в школе?
3. Чему ты научился в первом классе и как изменился?', en: '1. What are the stages of life?
2. At which stage do children go to school?
3. What have you learned in first grade and how did you change?' },
  l11_scientists: { kz: 'Адам, өсімдік және жануар сияқты, тірі ағза: өседі, тыныс алады, қоректенеді, көбейеді. Оған су, таза ауа және дұрыс тамақ керек.', ru: 'Человек, как растения и животные, — живой организм: растёт, дышит, питается, размножается. Ему нужны вода, чистый воздух и правильная еда.', en: 'Like plants and animals, a human is a living organism: grows, breathes, eats, reproduces. They need water, clean air and good food.' },
  l11_observation: { kz: 'Қыз алма жейді, бала велосипед тебеді, балалар планшетпен жұмыс істейді. Балалар не істеп жатыр? Адамға өмір сүруге тағы не қажет?', ru: 'Девочка ест яблоко, мальчик едет на велосипеде, дети работают с планшетом. Что делают дети? Что ещё необходимо человеку для жизни?', en: 'A girl eats an apple, a boy rides a bike, kids use a tablet. What are they doing? What else does a person need for life?' },
  l11_experiments: { kz: 'Қыздың айналасындағы заттардан өмірге қажеттілерді белгіле: көкөніс, су, телефон, теледидар, кітап, нан, киім. Қазақ тағам академиясы 1974 жылдан бері тағам нормаларын зерттейді.', ru: 'Отметь среди предметов вокруг девочки только жизненно важные: овощи, вода, телефон, телевизор, книга, хлеб, одежда. Казахская академия питания изучает нормы питания с 1974 года.', en: 'Mark only the essentials around the girl: vegetables, water, phone, TV, book, bread, clothes. The Kazakh Academy of Nutrition has studied diet norms since 1974.' },
  l11_review: { kz: '1. Адамға өмір сүруге не қажет?
2. Адамның қажеттіліктері туралы постер жаса.
3. Дұрыс тамақтанбаса не болады?', ru: '1. Что необходимо человеку для жизни?
2. Составь постер о потребностях человека.
3. Что произойдёт, если человек не будет правильно питаться?', en: '1. What does a human need for life?
2. Make a poster of human needs.
3. What happens if a person eats poorly?' },
  l12_scientists: { kz: 'Адам — өсімдік пен жануарға ұқсас тірі ағза, бірақ ол ойлайды, сөйлейді, еңбек етеді.', ru: 'Человек — живой организм, как растения и животные, но он думает, говорит и трудится.', en: 'A human is a living organism like plants and animals, but also thinks, speaks and works.' },
  l12_observation: { kz: 'Айналаңа қара: қандай адамдар тірі ағзаның белгілерін көрсетеді — тыныс алу, қозғалу, тамақтану?', ru: 'Посмотри вокруг: какие люди показывают признаки живого организма — дыхание, движение, питание?', en: 'Look around: who shows signs of a living organism — breathing, moving, eating?' },
  l12_experiments: { kz: 'Қорытынды тест: өсімдікті неге тірі дейміз? Жабайы жануар үй жануарынан немен ерекшеленеді? Түлеу деген не? Адам неліктен тірі ағза?', ru: 'Итоговый тест: почему растение — живое? Чем отличается дикое животное от домашнего? Что такое линька? Почему человек — живой организм?', en: 'Final quiz: why is a plant alive? How does a wild animal differ from a domestic one? What is moulting? Why is a human a living organism?' },
  l12_review: { kz: '1. Өсімдік қандай мүшелерден тұрады?
2. Адам денесі қандай мүшелерден тұрады?
3. Адамды неге тірі ағза дейміз?', ru: '1. Из каких частей состоит растение?
2. Из каких частей состоит тело человека?
3. Почему человек — живой организм?', en: '1. What parts make up a plant?
2. What parts make up a human body?
3. Why is a human a living organism?' },
  l13_scientists: { kz: 'Қозғалыс — заттың белгілі бір уақыт ішінде орнын ауыстыруы. Итеру — затты өзіңнен ары жылжыту, тарту — өзіңе қарай тарту.', ru: 'Движение — это изменение положения предмета за определённое время. Толчок — это движение предмета от себя, тяга — к себе.', en: 'Motion is a change of an object\'s position over time. A push moves an object away from you, a pull moves it toward you.' },
  l13_observation: { kz: 'Зымыранның ұшуы (тігінен) және ұшақтың ұшуын (көлденең) салыстыр. Қозғалыс бағыты қалай ерекшеленеді? Шанасын итеретін қыз бен шанасын тартып келе жатқан адамды қара.', ru: 'Сравни взлёт ракеты (вертикально) и полёт самолёта (горизонтально). Чем отличается направление движения? Рассмотри девочку, которая толкает санки, и человека, который тянет санки за собой.', en: 'Compare a rocket lifting off (vertically) and a plane flying (horizontally). How do their directions differ? Look at a girl pushing a sled and a person pulling one.' },
  l13_experiments: { kz: 'Үстелдегі допты қолыңмен оңға, сосын солға домалат. Содан кейін кітапты еңкейтіп, не болатынын қара. «Тарту — _ қарай қозғалыс», «Итеру — _ ары қозғалыс» деген сөйлемдерге сөздерді тарт.', ru: 'Прокати мяч на столе сначала вправо, затем влево. Затем наклони книгу и посмотри, что произойдёт. Перетащи слова в предложения «Тяга — движение _ к себе», «Толчок — движение _ от себя».', en: 'Roll a ball on the table right, then left. Then tilt a book and watch what happens. Drag words into the sentences "Pull — motion toward you", "Push — motion away from you".' },
  l13_review: { kz: '1. Итеру тартудан немен ерекшеленеді?
2. Заттарды қозғалысқа не келтіреді?', ru: '1. Чем отличается толчок от тяги?
2. Что приводит предметы в движение?', en: '1. How does a push differ from a pull?
2. What sets objects in motion?' },
  l14_scientists: { kz: 'Қозғалыс — өмір. Адам жұмыс істеу, тамақ табу және сау болу үшін қозғалуы керек. Спортпен айналысу денсаулықты сақтайды.', ru: 'Движение — это жизнь. Человеку нужно двигаться, чтобы трудиться, добывать пищу и быть здоровым. Спорт помогает сохранять здоровье.', en: 'Motion is life. People need to move to work, find food and stay healthy. Sport keeps us well.' },
  l14_observation: { kz: 'Көшедегі адамдарды қара: кім не істеп жатыр? Жүгіріп бара жатқан гну отары мен жайылып жүрген жылқыны қара: жануар қозғалмаса не болады?', ru: 'Рассмотри людей на улице: кто что делает? Посмотри на бегущих гну и пасущуюся лошадь: что случится с животным, если оно не будет двигаться?', en: 'Watch people on the street: who is doing what? Look at running wildebeest and a grazing horse: what happens to an animal that does not move?' },
  l14_experiments: { kz: 'Сөйлемдерді толтыр: «Жануар _ керек, әйтпесе ол _ қалады немесе _ үлгермейді». Гепард — ең жылдам жануар, ал бау-бақша ұлуы, теңіз жұлдызы, тасбақа, коала, теңіз ат-балығы — ең баяулары.', ru: 'Заполни предложения: «Животное должно _, иначе останется без _ или не сможет убежать от _». Гепард — самое быстрое животное, а садовая улитка, морская звезда, черепаха, коала и морской конёк — самые медленные.', en: 'Fill in: "An animal must _, or it will be left without _ or unable to escape _". The cheetah is the fastest animal; garden snails, starfish, tortoises, koalas and seahorses are the slowest.' },
  l14_review: { kz: '1. Жануарларға неге қозғалу қажет?
2. Адам қозғалмаса не болады?', ru: '1. Почему животным необходимо двигаться?
2. Что произойдёт с человеком, если он не будет двигаться?', en: '1. Why must animals move?
2. What happens to a person who does not move?' },
  l15_scientists: { kz: 'Заттың қозғалысын сипаттау үшін «траектория» және «жол» сөздері қолданылады. Траектория — заттың қозғалу барысында сызатын сызығы. Қозғалыс түзу немесе қисық болады.', ru: 'Чтобы описать движение, используют слова «траектория» и «путь». Траектория — это линия, которую описывает предмет во время движения. Движение бывает прямым и кривым.', en: 'To describe motion we use the words "trajectory" and "path". A trajectory is the line an object draws as it moves. Motion can be straight or curved.' },
  l15_observation: { kz: 'Екі ұшақты қара: бірі түзу пунктирмен ұшады, екіншісі қисық сызықпен. Олар бірдей жүзе ме? Жауабыңды дәлелде.', ru: 'Рассмотри два самолёта: один летит по прямой пунктирной линии, другой — по кривой. Ровно ли они летят? Обоснуй ответ.', en: 'Look at two planes: one on a dashed straight line, the other on a curve. Are they both flying straight? Justify your answer.' },
  l15_experiments: { kz: 'Ойыншық көлікті алдымен тегіс жерде, содан кейін көлбеу беттен жіберіп, өткен жолды сызғышпен өлше. «Барлық _ белгілі бір _ бойынша қозғалады» деген сөйлемге «заттар» және «траектория» сөздерін орналастыр.', ru: 'Толкни игрушечную машину сначала по ровной поверхности, затем по наклонной, и измерь линейкой пройденный путь. Расставь слова «предметы» и «траектории» в предложении «Все _ двигаются по определённой _».', en: 'Push a toy car on a flat surface, then on a slope, and measure the distance with a ruler. Place the words "objects" and "trajectories" in the sentence "All _ move along a certain _".' },
  l15_review: { kz: '1. Траектория деген не?
2. Қозғалыс қандай болады?
3. Адамға заттардың траекториясын білу неге қажет?', ru: '1. Что такое траектория движения?
2. Каким бывает движение?
3. Почему человеку нужно знать траекторию некоторых предметов?', en: '1. What is a trajectory?
2. What kinds of motion are there?
3. Why does a person need to know the trajectory of certain objects?' },
  l16_scientists: { kz: 'Күш — заттардың әрекетін сипаттайды. Ауырлық күші барлық затты Жерге тартады, серпімділік күші бұйымды бастапқы пішініне қайтарады, үйкеліс күші қозғалысқа кедергі жасайды.', ru: 'Сила характеризует действие тел. Сила тяжести притягивает все предметы к Земле, сила упругости возвращает форму, сила трения мешает движению.', en: 'Force describes how objects act. Gravity pulls everything to the Earth, elasticity restores the shape, friction resists motion.' },
  l16_observation: { kz: 'Қыз тербелісте тербеледі, бала допты тізесімен соғады. Балалар не істеп жатыр? Заттарды не қозғалтады? Арқан тартып жатқан балаларды қара: күші көп жақ қай бағытқа жылжиды?', ru: 'Девочка качается на качелях, мальчик подбивает мяч коленом. Что делают дети? Что заставляет предметы двигаться? Посмотри на перетягивание каната: куда сдвинется команда сильнее?', en: 'A girl swings on a swing, a boy bumps a ball with his knee. What are the children doing? What makes things move? Look at tug-of-war: which way does the stronger team move?' },
  l16_experiments: { kz: 'Сөйлемдердегі бос орындарға «ауырлық», «серпімділік», «үйкеліс» сөздерін қой. Тест: тарту — _ қозғалыс; итеру — _ қозғалыс; барлық затты Жерге _ күші тартады.', ru: 'Заполни пропуски словами «тяжести», «упругости», «трения». Тест: тяга — движение _; толчок — движение _; все предметы к Земле притягивает сила _.', en: 'Fill in: "gravity", "elasticity", "friction". Quiz: pull — motion _; push — motion _; all objects are pulled to Earth by _.' },
  l16_review: { kz: '1. Мұзды жолға неге құм себеді?
2. Таразы, садақ кірісі мен батутта қандай күш қолданылады?', ru: '1. Зачем посыпают песком обледенелые дорожки?
2. Какая сила работает в весах, тетиве лука и батуте?', en: '1. Why is sand spread on icy paths?
2. Which force works in scales, a bow string and a trampoline?' },
  l17_scientists: { kz: 'Жұлдыздар — алыста жанып тұрған үлкен шарлар. Ай — Жерге ең жақын ғарыш денесі, табиғи серігіміз. Күн — бізге жарық пен жылу беретін ең жақын жұлдыз. Күнде өмір жоқ, өйткені ол өте ыстық.', ru: 'Звёзды — огромные раскалённые шары вдалеке. Луна — ближайшее небесное тело и спутник Земли. Солнце — ближайшая звезда, источник света и тепла. На Солнце жизни нет — там очень жарко.', en: 'Stars are huge hot balls far away. The Moon is the nearest body and Earth\'s satellite. The Sun is the nearest star — our light and heat. There is no life on the Sun — it is too hot.' },
  l17_observation: { kz: 'Ғарыштан түсірілген суретті қара: Жер мен Айды тап. Жұлдызды тұманның суретін зерттеп, не көріп тұрғаныңды айт.', ru: 'Рассмотри фото из космоса: где Земля, где Луна. Изучи снимок звёздной туманности и расскажи, что видишь.', en: 'Look at a space photo: which is Earth, which is the Moon. Study a nebula image and tell what you see.' },
  l17_experiments: { kz: 'Бос орынға дұрыс сөзді таңда: «Шексіз кеңістік — _ (ғарыш)», «Жұлдыздар, планеталар және серіктер — _ (аспан денелері)», «Ғарышты _ зерттейді (астрономия)».', ru: 'Выбери правильное слово: «Безграничное пространство — _ (космос)», «Звёзды, планеты и спутники — _ (небесные тела)», «Космос изучает _ (астрономия)».', en: 'Choose the right word: "Endless space is _ (space)", "Stars, planets and satellites are _ (celestial bodies)", "Space is studied by _ (astronomy)".' },
  l17_review: { kz: '1. Ғарыш деген не?
2. Күнде неге өмір жоқ?
3. Жасанды аппарат Күнге ұшса не болады?', ru: '1. Что такое космос?
2. Почему на Солнце нет жизни?
3. Что произойдёт, если искусственный аппарат полетит к Солнцу?', en: '1. What is space?
2. Why is there no life on the Sun?
3. What would happen if a spacecraft flew to the Sun?' },
  l18_scientists: { kz: 'Ғарышты зерттейтін ғылым — астрономия, ғалымдар — астрономдар. Обсерватория — Жер бетіндегі арнайы ғылыми кешен. Тянь-Шань обсерваториясы — соның бірі.', ru: 'Науку о космосе называют астрономией, а учёных — астрономами. Обсерватория — научный комплекс на Земле. Тянь-Шаньская обсерватория — одна из них.', en: 'The science of space is astronomy, scientists are astronomers. An observatory is a research complex on Earth. The Tian Shan observatory is one of them.' },
  l18_observation: { kz: 'Радиотелескоп пен «Хаббл» ғарыштық телескопының суретін салыстыр. Қайсысы Жерде, қайсысы орбитада? Зымыранның ұшуы мен серіктің суретіне қарап, олардың не үшін керектігін айт.', ru: 'Сравни радиотелескоп и космический телескоп «Хаббл». Какой на Земле, а какой на орбите? Посмотри на запуск ракеты и спутник: для чего они нужны?', en: 'Compare a radio telescope and the Hubble space telescope. Which is on Earth, which on orbit? Look at a rocket launch and a satellite: what are they for?' },
  l18_experiments: { kz: 'Жұлдызды аспанның екі суретіне арналған дұрыс атауды тізімнен таңда: галактика немесе тұманшық. Содан кейін Байқоңыр ғарыш айлағы туралы оқы — Юрий Гагарин осы жерден ұшты.', ru: 'Подбери правильные названия к двум фото звёздного неба: галактика или туманность. Затем прочитай о космодроме Байконур — отсюда стартовал Юрий Гагарин.', en: 'Match the right name to two night-sky photos: galaxy or nebula. Then read about Baikonur — the cosmodrome from which Yuri Gagarin launched.' },
  l18_review: { kz: '1. Обсерватория деген не?
2. Астрономдар ғарышты немен зерттейді?
3. Байқоңыр туралы не білдің?', ru: '1. Что такое обсерватория?
2. С помощью чего астрономы изучают космос?
3. Что ты знаешь о Байконуре?', en: '1. What is an observatory?
2. What do astronomers use to study space?
3. What do you know about Baikonur?' },
  l19_scientists: { kz: 'Жасанды Жер серіктері — адам жасаған аппараттар. Ғарышкерлер — ғарыш станциясында жұмыс істейтін адамдар. Қазақстандық ғарышкерлер: Тоқтар Әубәкіров, Талғат Мұсабаев, Айдын Айымбетов.', ru: 'Искусственные спутники — аппараты, созданные людьми. Космонавты работают на станции. Казахстанские космонавты: Тохтар Аубакиров, Талгат Мусабаев, Айдын Аимбетов.', en: 'Artificial satellites are devices made by people. Cosmonauts work on a station. Kazakh cosmonauts: Toktar Aubakirov, Talgat Musabayev, Aidyn Aimbetov.' },
  l19_observation: { kz: 'МКС қасындағы ашық ғарыштағы ғарышкердің суретін қара. Ол не істеп жатыр? Не үшін?', ru: 'Рассмотри фото космонавта в открытом космосе рядом с МКС. Что он делает? Зачем?', en: 'Look at a cosmonaut on a spacewalk near the ISS. What are they doing and why?' },
  l19_experiments: { kz: 'Қазақстандық ғарышкерлердің атын дұрыс ретпен орналастыр: Әубәкіров, Мұсабаев, Айымбетов. Кім бірінші, кім кейін ұшты?', ru: 'Расставь имена казахстанских космонавтов в порядке полётов: Аубакиров, Мусабаев, Аимбетов. Кто полетел первым?', en: 'Arrange the Kazakh cosmonauts in flight order: Aubakirov, Musabayev, Aimbetov. Who flew first?' },
  l19_review: { kz: '1. Жасанды серіктер не үшін керек?
2. Қазақстандық қандай ғарышкерлерді білесің?
3. Ғарышкер болу үшін не қажет деп ойлайсың?', ru: '1. Зачем нужны искусственные спутники?
2. Каких казахстанских космонавтов ты знаешь?
3. Что, по-твоему, нужно, чтобы стать космонавтом?', en: '1. Why are artificial satellites needed?
2. Which Kazakh cosmonauts do you know?
3. What do you think it takes to become a cosmonaut?' },
  l20_scientists: { kz: 'Жер — өмір бар планета. Глобус — Жердің кішірейтілген моделі. Күн жүйесінде Күннің айналасында сегіз планета айналады, кейбіреулерінде серіктер бар.', ru: 'Земля — планета, на которой есть жизнь. Глобус — уменьшенная модель Земли. В Солнечной системе вокруг Солнца вращается восемь планет, у некоторых есть спутники.', en: 'Earth is a planet with life. A globe is a small model of Earth. In the Solar System eight planets orbit the Sun, and some have moons.' },
  l20_observation: { kz: 'Ғарыштан түскен Жердің суретін және балалар қарап тұрған глобусты салыстыр. Жер қандай пішінде? Глобустағы әртүрлі түстер нені білдіреді?', ru: 'Сравни фото Земли из космоса и глобус, который рассматривают дети. Какой формы Земля? Что обозначают разные цвета на глобусе?', en: 'Compare a photo of Earth from space and a globe the children are studying. What shape is Earth? What do the colours on the globe mean?' },
  l20_experiments: { kz: 'Планеталардың атын Күннен бастап ретімен қой: Меркурий, Шолпан, Жер, Марс, Юпитер, Сатурн, Уран, Нептун. Содан кейін «Күн жүйесі» бейнероликін қара.', ru: 'Расставь планеты по порядку от Солнца: Меркурий, Венера, Земля, Марс, Юпитер, Сатурн, Уран, Нептун. Затем посмотри видео «Солнечная система».', en: 'Order the planets from the Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. Then watch the "Solar System" video.' },
  l20_review: { kz: '1. Жер планетасының ерекшелігі неде?
2. Глобус не үшін жасалған?', ru: '1. В чём особенность планеты Земля?
2. Для чего сделали глобус?', en: '1. What is special about planet Earth?
2. Why was the globe created?' },
  l21_scientists: { kz: 'Физиктер анықтады: ауа мөлдір, түссіз, иіссіз, бірақ орын алады және қызған кезде жоғары көтеріледі.', ru: 'Физики установили: воздух прозрачен, не имеет цвета и запаха, но занимает место и при нагреве поднимается вверх.', en: 'Physicists found that air is transparent, colourless and odourless, yet it takes up space and rises when heated.' },
  l21_observation: { kz: 'Шарды үрле — ішіне ауа толып, домаланды. Оны жіберіп қал — ауа ысқырып шығады.', ru: 'Надуй шарик — он округлился, потому что внутри воздух занял место. Отпусти его — воздух выходит со свистом.', en: 'Blow up a balloon — it rounds because air takes up space inside. Let it go and the air whistles out.' },
  l21_experiments: { kz: 'Қағаз жыланды жылы радиатордың үстінде ұста — ол айналады. Бұл жылыған ауа жоғары көтеріліп, оны айналдырады.', ru: 'Подержи бумажную змейку над тёплой батареей — она закружится. Это нагретый воздух поднимается вверх и крутит её.', en: 'Hold a paper snake above a warm radiator — it will spin. Heated air rises and turns it.' },
  l21_review: { kz: '1. Ауа мөлдір ме, әлде түсті ме?\n2. Жылы ауаға не болады?\n3. Ауаны ұстауға бола ма?', ru: '1. Какой воздух — прозрачный или цветной?\n2. Что происходит с тёплым воздухом?\n3. Можно ли поймать воздух?', en: '1. Is air transparent or coloured?\n2. What happens to warm air?\n3. Can you catch air?' },
  l22_scientists: { kz: 'Гидрологтар суды зерттейді. Олар табиғаттағы судың шеңбер бойымен саяхаттайтынын анықтады: буланады, бұлт түзеді, жаңбыр болып қайта жауады.', ru: 'Гидрологи изучают воду. Они выяснили, что вода в природе путешествует по кругу: испаряется, образует облака и снова падает дождём.', en: 'Hydrologists study water. They found water travels in a cycle in nature: it evaporates, forms clouds, and falls again as rain.' },
  l22_observation: { kz: 'Жаңбырдан кейін шалшықтарға қара. Бір күннен соң олар кішірейеді — су аспанға көтерілді. Бұл — булану.', ru: 'После дождя посмотри на лужи. Через день они станут меньше — вода поднялась в небо. Это испарение.', en: 'After rain, look at the puddles. A day later they\'re smaller — water rose into the sky. That\'s evaporation.' },
  l22_experiments: { kz: 'Тарелкаға аздап су құйып, терезеге қой. Бір күннен соң ол азаяды — су буға айналады.', ru: 'Налей немного воды в блюдце и поставь у окна. Через день её станет меньше — вода превратилась в пар.', en: 'Pour a little water into a saucer by the window. A day later there\'s less — water turned into vapour.' },
  l22_review: { kz: '1. Табиғатта су қайда кездеседі?\n2. Бұлт қалай пайда болады?\n3. Судың үш күйін ата.', ru: '1. Где встречается вода в природе?\n2. Как образуются облака?\n3. Назови три состояния воды.', en: '1. Where do we find water in nature?\n2. How are clouds formed?\n3. Name the three states of water.' },
  l23_scientists: { kz: 'Химиктер айтады: су — табиғаттағы басты еріткіш. Онда қант, тұз, тіпті ауа да ериді.', ru: 'Химики говорят: вода — главный растворитель в природе. В ней растворяются сахар, соль и даже воздух.', en: 'Chemists say water is nature\'s main solvent. Sugar, salt and even air dissolve in it.' },
  l23_observation: { kz: 'Стақанға су құй — ағады. Қатыр — қатты мұзға айналады. Қайнат — буға айналады. Бір судың үш түрі.', ru: 'Налей воды в стакан — она течёт. Заморозь — станет твёрдым льдом. Вскипяти — превратится в пар. Три формы одной воды.', en: 'Pour water in a glass — it flows. Freeze it — it becomes ice. Boil it — it turns to steam. Three forms of one water.' },
  l23_experiments: { kz: 'Бір қасық тұзды суға араластыр — жоғалды ма? Жоқ, ол еріді. Дәмін татып көр — су тұзды болды.', ru: 'Размешай ложку соли в воде — она исчезла? Нет, она растворилась. Попробуй на вкус — вода стала солёной.', en: 'Stir a spoon of salt into water — gone? No, it dissolved. Taste it — the water is now salty.' },
  l23_review: { kz: '1. Судың түсі қандай?\n2. «Еріту» деген нені білдіреді?\n3. Су қандай үш күйде болады?', ru: '1. Какого цвета вода?\n2. Что значит «растворить»?\n3. В каких трёх состояниях бывает вода?', en: '1. What colour is water?\n2. What does "dissolve" mean?\n3. What three states can water be in?' },
  l24_scientists: { kz: 'Геологтар тас пен топырақты зерттейді. Олар топырақтың мың жылдар бойы ұсақ тастан, шіріген жапырақтан және құрттардың еңбегінен пайда болатынын білді.', ru: 'Геологи изучают камни и почву. Они узнали: почва образуется тысячи лет из мелких камешков, перегнивших листьев и труда червей.', en: 'Geologists study rocks and soil. They learned that soil forms over thousands of years from tiny stones, rotted leaves and the work of worms.' },
  l24_observation: { kz: 'Екі тасты салыстыр: өзеннен — тегіс, даладан — бұжыр. Өзенде толқын тасты тегістейді — сондықтан олар домалақ.', ru: 'Сравни два камня: гладкий с реки и шершавый с поля. Реку обтачивают волны — поэтому камни круглые.', en: 'Compare two stones: a smooth one from a river and a rough one from a field. Waves smooth river stones, so they are round.' },
  l24_experiments: { kz: 'Бір уыс топырақты алып, суға салып араластыр. Құм түбіне шөгеді, жапырақтар жоғары көтеріледі — топырақтың неден тұратынын көресің.', ru: 'Возьми горсть земли, положи в воду и размешай. Песок осядет внизу, листочки всплывут — увидишь, из чего состоит почва.', en: 'Take a handful of soil, put it in water and stir. Sand sinks, leaves float — you\'ll see what soil is made of.' },
  l24_review: { kz: '1. Топырақ неден тұрады?\n2. Топырақты құнарлы етуге кім көмектеседі?\n3. Тас топырақтан немен ерекшеленеді?', ru: '1. Из чего состоит почва?\n2. Кто помогает делать почву плодородной?\n3. Чем отличается камень от почвы?', en: '1. What is soil made of?\n2. Who helps make soil fertile?\n3. How is a stone different from soil?' },
  l25_scientists: { kz: 'Астрономдар түсіндірді: Жер — айналып тұратын үлкен шар. Күнге қараған жағы — күндіз, екінші жағы — түн.', ru: 'Астрономы объяснили: Земля — большой шар, который крутится. Сторона, повёрнутая к Солнцу, — день, другая — ночь.', en: 'Astronomers explain that Earth is a giant spinning ball. The side facing the Sun has day, the other side — night.' },
  l25_observation: { kz: 'Таңертең күн шығыста төмен, түсте — жоғары, кешке батыста — төмен. Ол аспанда осылай «саяхаттайды».', ru: 'Утром солнце низко на востоке, в полдень — высоко, вечером — низко на западе. Так оно «путешествует» по небу.', en: 'In the morning the sun is low in the east, at noon high overhead, in the evening low in the west. That\'s how it "travels".' },
  l25_experiments: { kz: 'Глобусты қойып, оған фонарь жарық түсір. Глобусты бұра — кез келген елде күн мен түн қалай ауысатынын көресің.', ru: 'Поставь глобус и посвети фонариком. Поверни глобус — увидишь, как день сменяет ночь у любой страны.', en: 'Set a globe and shine a torch on it. Turn the globe — and you\'ll see day and night change in any country.' },
  l25_review: { kz: '1. Түн неге болады?\n2. Тәулікте неше сағат бар?\n3. Күн таңертең қай жақтан шығады?', ru: '1. Почему бывает ночь?\n2. Сколько часов в сутках?\n3. Где утром появляется солнце?', en: '1. Why is there night?\n2. How many hours are in a day?\n3. Where does the sun appear in the morning?' },
  l26_scientists: { kz: 'Физиктер өлшеді: Күнге дейін 150 миллион километр. Соған қарамастан, оның сәулелері бізді жылытып, Жердегі барлық өсімдікті қоректендіреді.', ru: 'Физики измерили: до Солнца 150 миллионов километров. И всё же его лучи греют нас и кормят все растения на Земле.', en: 'Physicists measured: the Sun is 150 million km away. Yet its rays warm us and feed every plant on Earth.' },
  l26_observation: { kz: 'Күн ашық күні өз көлеңкеңе қара. Таңертең ол ұзын, түсте — қысқа. Бұл — күннің биіктігі өзгеретіндіктен.', ru: 'Посмотри в солнечный день на свою тень. Утром она длинная, в полдень — короткая. Это солнце меняет свою высоту.', en: 'On a sunny day look at your shadow. In the morning it\'s long, at noon it\'s short — the sun\'s height changes.' },
  l26_experiments: { kz: 'Күнге екі тасты қой: бірі қою түсті, екіншісі ашық түсті. Бір сағаттан соң ұста — қою түстісі қаттырақ қызады.', ru: 'Положи на солнце два камня: один тёмный, другой светлый. Через час потрогай — тёмный нагреется сильнее.', en: 'Put two stones in the sun: one dark, one light. After an hour the dark one will be hotter.' },
  l26_review: { kz: '1. Күн бізге не береді?\n2. Күнге неге тура қарауға болмайды?\n3. Күн сөнсе, не болар еді?', ru: '1. Что даёт нам Солнце?\n2. Почему нельзя смотреть на солнце прямо?\n3. Что было бы, если бы солнце погасло?', en: '1. What does the Sun give us?\n2. Why can\'t we look directly at the sun?\n3. What if the sun went out?' },
  l27_scientists: { kz: 'Астрономдар дәлелдеді: жұлдыздар — алыстағы күндер, ал Ай — ғарыштағы ең жақын көршіміз. Оған адамдар да ұшып барған.', ru: 'Астрономы доказали: звёзды — это далёкие солнца, а Луна — наш ближайший сосед в космосе. На неё уже летали люди.', en: 'Astronomers proved that stars are distant suns, and the Moon is our closest neighbour in space — people have already flown there.' },
  l27_observation: { kz: 'Айды бір апта бақыла. Ол өзгереді: жіңішке орақ, жартысы, толық шеңбер. Бұл — Айдың фазалары.', ru: 'Понаблюдай за Луной неделю. Она меняется: тонкий серпик, половинка, полный круг. Это её фазы.', en: 'Watch the Moon for a week. It changes: a thin crescent, a half, a full circle. These are its phases.' },
  l27_experiments: { kz: 'Қараңғы бөлмеде допқа фонарь түсір — бір жағы жарық, екінші жағы қараңғы екенін көресің. Ай да солай жарқырайды.', ru: 'В тёмной комнате освети мяч фонариком — увидишь, что одна сторона светлая, другая тёмная. Так светит и Луна.', en: 'In a dark room shine a torch on a ball — one side is bright, the other dark. The Moon shines the same way.' },
  l27_review: { kz: '1. Жұлдыздар деген не?\n2. Айды неге әртүрлі көреміз?\n3. Ғарышкер деген кім?', ru: '1. Что такое звёзды?\n2. Почему Луну видно по-разному?\n3. Кто такие космонавты?', en: '1. What are stars?\n2. Why does the Moon look different?\n3. Who are cosmonauts?' },
  l28_scientists: { kz: 'Ғалымдар жыл мезгілдерінің ауысуын Жердің көлбеулігімен түсіндіреді. Біздің бөлік Күнге жақын болғанда — жаз, алыс болғанда — қыс.', ru: 'Учёные объясняют смену сезонов наклоном Земли. Когда наша часть планеты ближе к Солнцу — лето, когда дальше — зима.', en: 'Scientists explain seasons by Earth\'s tilt. When our part is closer to the Sun — it\'s summer; when farther — winter.' },
  l28_observation: { kz: 'Қыста ағаш жалаңаш, көктемде — бүршік, жазда — жапырақ, күзде — сары. Табиғат жылына 4 рет киімін ауыстырады.', ru: 'Зимой деревья голые, весной — почки, летом — листья, осенью — жёлтые. Природа меняет свой наряд 4 раза в год.', en: 'In winter trees are bare, in spring buds appear, in summer leaves, in autumn yellow. Nature changes outfits 4 times a year.' },
  l28_experiments: { kz: '«Жыл мезгілдері» альбомын баста. Әр мезгілде ауладағы сол бір ағашты сал. Табиғаттың тірі шежіресі шығады.', ru: 'Заведи альбом «Времена года». Каждый сезон рисуй одно и то же дерево во дворе. Получится живая летопись природы.', en: 'Start a "Seasons" album. Each season draw the same yard tree. You\'ll get a living chronicle of nature.' },
  l28_review: { kz: '1. Жыл мезгілі қанша?\n2. Қай мезгіл ең жылы, қайсысы суық?\n3. Күзде құстарға не болады?', ru: '1. Сколько времён года?\n2. Какой сезон самый тёплый, а какой холодный?\n3. Что происходит с птицами осенью?', en: '1. How many seasons are there?\n2. Which season is the warmest, which the coldest?\n3. What happens to birds in autumn?' },
  l29_scientists: { kz: 'Метеорологтар күн сайын температураны, желді, жауын-шашынды өлшейді. Олардың болжамы таңертең не киетінімізді шешуге көмектеседі.', ru: 'Метеорологи каждый день измеряют температуру, ветер и осадки. Их прогноз помогает нам решить, что надеть утром.', en: 'Meteorologists measure temperature, wind and rainfall every day. Their forecast helps us decide what to wear in the morning.' },
  l29_observation: { kz: 'Терезеге қара: күн бе, бұлт па? Сосын — термометрге. Осы екі белгімен қалай киіну керектігі түсінікті.', ru: 'Посмотри в окно: солнце или тучи? Потом — на градусник. По двум приметам уже понятно, как одеться.', en: 'Look out the window: sun or clouds? Then — at the thermometer. From these two clues you already know how to dress.' },
  l29_experiments: { kz: 'Бір апта бойы «ауа райы күнделігін» жүргіз: күн, бұлт, қар белгілерін сал. Аптаның соңында қай күн ең жаңбырлы болғанын көресің.', ru: 'Веди свой «дневник погоды» неделю: значок солнца, тучки или снежинки. В конце недели увидишь, какой день был самый дождливый.', en: 'Keep a "weather diary" for a week: sun, cloud or snowflake icons. At week\'s end you\'ll see which day was the rainiest.' },
  l29_review: { kz: '1. Метеоролог деген кім?\n2. Жаңбырда не кию керек?\n3. Саған қандай ауа райы көбірек ұнайды?', ru: '1. Кто такой метеоролог?\n2. Что нужно надеть в дождь?\n3. Какая погода тебе нравится больше всего?', en: '1. Who is a meteorologist?\n2. What should you wear in the rain?\n3. What weather do you like most?' },
  l30_scientists: { kz: 'Физиктер айтады: бір зат қозғалу үшін күш керек. Зат неғұрлым ауыр болса, оны қозғалту үшін соғұрлым көп күш қажет.', ru: 'Физики говорят: чтобы что-то двигалось, нужна сила. Чем тяжелее предмет, тем больше силы нужно, чтобы его сдвинуть.', en: 'Physicists say: to move something, you need force. The heavier the object, the more force needed to move it.' },
  l30_observation: { kz: 'Допты ақырын итер — баяу домалайды. Қатты итер — жылдам. Күш жылдамдықты өзгертеді.', ru: 'Толкни мяч слегка — он покатится медленно. Толкни сильнее — быстро. Сила меняет скорость.', en: 'Push a ball gently — it rolls slowly. Push harder — it rolls fast. Force changes speed.' },
  l30_experiments: { kz: 'Үстелге кітап қойып, оны саусақпен, сосын алақанмен қозғалтып көр. Аумақ үлкен болса, итеру оңайырақ.', ru: 'Положи на стол книгу и попробуй сдвинуть пальцем, потом ладонью. Чем больше площадь, тем легче толкать.', en: 'Place a book on the table; try moving it with a finger, then with your palm. The bigger the area, the easier to push.' },
  l30_review: { kz: '1. Күш деген не?\n2. Допты тоқтату үшін не істеу керек?\n3. Қозғалысқа мысал келтір.', ru: '1. Что такое сила?\n2. Что нужно сделать, чтобы остановить мяч?\n3. Приведи пример движения.', en: '1. What is force?\n2. What do you need to do to stop a ball?\n3. Give an example of motion.' },
  l31_scientists: { kz: 'Ғалымдар магниттің таңғажайып қасиетін ашты: ол темірді тіпті қағаз, мата, жұқа ағаш арқылы да тартады.', ru: 'Учёные открыли удивительное свойство магнита: он притягивает железо даже сквозь бумагу, ткань и тонкое дерево.', en: 'Scientists discovered an amazing property: a magnet attracts iron even through paper, fabric or thin wood.' },
  l31_observation: { kz: 'Магнитті түрлі заттарға жақында: қасыққа, қарындашқа, шегеге. Қайсысына жабысады, қайсысына жабыспайды?', ru: 'Поднеси магнит к разным предметам: к ложке, к карандашу, к гвоздю. К чему он липнет, а к чему — нет?', en: 'Bring a magnet near different things: a spoon, a pencil, a nail. Which does it stick to, and which not?' },
  l31_experiments: { kz: 'Қыстырғышты қағазға қой, магнитті астына ұста. Магнитті қозғалт — қыстырғыш үстінен сиқыр сияқты ілесіп жүреді.', ru: 'Положи скрепку на бумагу, а магнит — снизу. Двигай магнит — скрепка поедет за ним сверху, как заколдованная.', en: 'Put a paperclip on paper and a magnet underneath. Move the magnet — the clip slides along on top, as if enchanted.' },
  l31_review: { kz: '1. Магнит нені тартады?\n2. Магниттің неше полюсі бар?\n3. Үйде магнит қай жерде кездеседі?', ru: '1. Что притягивает магнит?\n2. Сколько у магнита полюсов?\n3. Где в доме встречаются магниты?', en: '1. What does a magnet attract?\n2. How many poles does a magnet have?\n3. Where in the house do you find magnets?' },
  l32_scientists: { kz: 'Акустиктер анықтады: дыбыс — ауа арқылы құлағымызға жеткізілетін тербеліс. Ауасыз дыбыс болмас еді.', ru: 'Акустики выяснили: звук — это колебания, которые передаются через воздух к нашим ушам. Без воздуха звука бы не было.', en: 'Acoustics experts found that sound is vibrations passing through air to our ears. Without air, there would be no sound.' },
  l32_observation: { kz: 'Көзіңді бір минут жұмып, тыңда. Қанша түрлі дыбыс естідің? Сағат тықылы, терезеден дауыс, жел?', ru: 'Закрой глаза на минуту и послушай. Сколько разных звуков ты услышал? Тиканье часов, голос за окном, ветер?', en: 'Close your eyes for a minute and listen. How many sounds do you hear? A clock ticking, a voice outside, the wind?' },
  l32_experiments: { kz: 'Екі стақанның арасына жіп тарт — «телефон» шығады. Біріне сөйле — досың екіншісінен естиді. Дыбыс жіппен жүгіреді.', ru: 'Натяни нитку между двумя стаканчиками — получится «телефон». Говори в один — друг услышит в другом. Звук бежит по нитке.', en: 'Stretch a string between two cups — that\'s a "phone". Speak into one — your friend hears in the other. Sound travels along the string.' },
  l32_review: { kz: '1. Дыбыс деген не?\n2. Қай мүшемен естиміз?\n3. Қандай қатты дыбыстар құлаққа зиян келтіруі мүмкін?', ru: '1. Что такое звук?\n2. Каким органом мы слышим?\n3. Какие громкие звуки могут навредить ушам?', en: '1. What is sound?\n2. Which organ do we hear with?\n3. What loud sounds can harm our ears?' },
  l33_scientists: { kz: 'Шынайы ғалым ешқашан тоқтамайды: ол үнемі жаңа сұрақ қояды. Сен бір жыл бойы зерттеуші болдың — құттықтаймыз!', ru: 'Настоящий учёный никогда не останавливается: он всё время задаёт новые вопросы. Ты целый год был исследователем — поздравляем!', en: 'A true scientist never stops: they always ask new questions. You\'ve been an explorer all year — congratulations!' },
  l33_observation: { kz: 'Айналаңа қара — бұрын байқамаған нәрселерді енді көресің: жапырақтың тамырларын, Айдың фазаларын, бұлттардың пішінін.', ru: 'Оглянись вокруг — теперь ты замечаешь то, что раньше не видел: жилки на листе, фазы Луны, формы облаков.', en: 'Look around — now you notice things you didn\'t before: leaf veins, Moon phases, cloud shapes.' },
  l33_experiments: { kz: 'Жыл бойы ұнаған тәжірибеңді таңда да, оны қайта жаса — үйде, ата-анаңа. Не болып, неліктен болатынын түсіндір.', ru: 'Выбери любимый опыт за год и проведи его снова — но дома, маме и папе. Объясни, что и почему происходит.', en: 'Pick your favourite experiment of the year and do it again — at home, for mum and dad. Explain what happens and why.' },
  l33_review: { kz: '1. Биыл не жаңалық білдің?\n2. Қай сабақ саған көбірек ұнады?\n3. Кім болғың келеді — биолог, астроном әлде инженер?', ru: '1. Что нового ты узнал в этом году?\n2. Какой урок тебе понравился больше всего?\n3. Кем хочешь стать — биологом, астрономом или инженером?', en: '1. What new things did you learn this year?\n2. Which lesson did you like most?\n3. Who do you want to be — a biologist, astronomer or engineer?' },
} as const;

export type TKey = keyof typeof t;
