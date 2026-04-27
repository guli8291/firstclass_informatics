import { LessonData } from "@/lib/types";

import prohibitedImg from "@/assets/lesson-17/prohibited-actions.jpg";
import familyInternetImg from "@/assets/lesson-17/family-internet.jpg";
import prosConsImg from "@/assets/lesson-17/internet-pros-cons.jpg";
import appleOrchardImg from "@/assets/lesson-17/apple-orchard.jpg";
import devicesImg from "@/assets/lesson-17/internet-devices.jpg";
import kitapKzImg from "@/assets/lesson-17/kitap-kz.jpg";
import infoTransmissionImg from "@/assets/lesson-17/info-transmission.jpg";

import firstTopicFirst from "@/assets/lesson-17/videos/17 урок, 1 тема, 1 видео.mp4";
import firstTopicSecond from "@/assets/lesson-17/videos/17 урок, 1 тема, 2 видео.mp4";
import firstTopicThird from "@/assets/lesson-17/videos/17 урок, 1 тема, 3 видео.mp4";
import secondTopicFirst from "@/assets/lesson-17/videos/17 урок ,2 тема, 1 видео.mp4";
import thirdTopicFirst from "@/assets/lesson-17/videos/17 урок, 3 тема, 1 урок.mp4";
import thirdTopicSecond from "@/assets/lesson-17/videos/17 урок, 3 тема, 2 видео.mp4";
import thirdTopicThird from "@/assets/lesson-17/videos/17 урок, 3 тема, 3 видео.mp4";
import fourthTopicFirst from "@/assets/lesson-17/videos/17 урок, 4 тема, 1 видео.mp4";
import fourthTopicSecond from "@/assets/lesson-17/videos/17 урок, 4 тема, 2 видео.mp4";
import fifthTopicFirst from "@/assets/lesson-17/videos/17 урок, 5 тема,1 видео.mp4";
import fifthTopicSecond from "@/assets/lesson-17/videos/17 урок, 5 тема, 2 видео.mp4";
import fifthTopicThird from "@/assets/lesson-17/videos/17 урок, 5 тема, 3 видео.mp4";

export const lesson17: LessonData = {
  id: "lesson-17",
  title: { kk: "Қайталау сабағы", ru: "Урок повторения", en: "Revision Lesson" },
  description: {
    kk: "Информатика, интернет және ақпарат бойынша тапсырмалар",
    ru: "Задания по информатике, интернету и информации",
    en: "Tasks on informatics, internet and information",
  },
  emoji: "📚",
  color: "from-emerald-400 to-teal-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Қайталау сабағы", ru: "Урок повторения", en: "Revision Lesson" },
      subtitle: {
        kk: "Білімді қорытындылайық!",
        ru: "Подведём итоги знаний!",
        en: "Let's summarize what we learned!",
      },
      emoji: "📚",
      color: "from-emerald-400 to-teal-500",
    },
    // 1-тапсырма: Тыйым салынатын әрекеттер
    {
      type: "topic",
      title: {
        kk: "1-тапсырма. Тыйым салынатын әрекеттер",
        ru: "Задание 1. Запрещённые действия",
        en: "Task 1. Prohibited Actions",
      },
      text: {
        kk: "Информатика кабинетінде қандай әрекеттер жасауға тыйым салынады? Суретке қарап әңгімеле. Тамақ ішуге, су төгуге, жүгіруге болмайды. Компьютерге дымқыл қолмен тиюге де тыйым салынады.",
        ru: "Какие действия запрещены в кабинете информатики? Расскажи по картинке. Нельзя есть, проливать воду, бегать. Также запрещено трогать компьютер мокрыми руками.",
        en: "What actions are prohibited in the computer lab? Describe by the picture. You cannot eat, spill water, or run. It is also forbidden to touch the computer with wet hands.",
      },
      image: prohibitedImg,
      videos: [firstTopicFirst, firstTopicSecond, firstTopicThird],
      emoji: "🚫",
    },
    // Интерактив по 1-тапсырма
    {
      type: "interactive",
      title: { kk: "Тыйым салынатынды тап", ru: "Найди запрещённое", en: "Find What's Forbidden" },
      items: [
        {
          type: "choice",
          question: {
            kk: "Информатика кабинетінде нені істеуге БОЛМАЙДЫ?",
            ru: "Что НЕЛЬЗЯ делать в кабинете информатики?",
            en: "What is NOT allowed in the computer lab?",
          },
          options: [
            { kk: "Мұғалімді тыңдау", ru: "Слушать учителя", en: "Listen to the teacher" },
            { kk: "Компьютер қасында тамақ ішу", ru: "Есть рядом с компьютером", en: "Eat near the computer" },
            { kk: "Тапсырманы орындау", ru: "Выполнять задание", en: "Complete the task" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: {
            kk: "Компьютерге қандай қолмен тиюге болады?",
            ru: "Какими руками можно трогать компьютер?",
            en: "With what hands can you touch the computer?",
          },
          options: [
            { kk: "Дымқыл қолмен", ru: "Мокрыми руками", en: "With wet hands" },
            { kk: "Кір қолмен", ru: "Грязными руками", en: "With dirty hands" },
            { kk: "Таза, құрғақ қолмен", ru: "Чистыми, сухими руками", en: "With clean, dry hands" },
          ],
          correctIndex: 2,
        },
      ],
    },
    // 2-тапсырма: Отбасы интернет
    {
      type: "topic",
      title: {
        kk: "2-тапсырма. Отбасы және интернет",
        ru: "Задание 2. Семья и интернет",
        en: "Task 2. Family and Internet",
      },
      text: {
        kk: "Зертте: отбасы мүшелері интернетті қалай пайдаланады? Әркім тәулігіне неше сағат пайдаланады, қандай мақсатта пайдаланады. Мысалы, әкесі 2 сағат — кітап оқиды.",
        ru: "Исследуй: как члены семьи пользуются интернетом? Сколько часов в день и для чего. Например, папа 2 часа — читает книги.",
        en: "Research: how do family members use the internet? How many hours per day and for what purpose. For example, dad 2 hours — reads books.",
      },
      image: familyInternetImg,
      videos: [secondTopicFirst],
      emoji: "👨‍👩‍👧",
    },
    // 3-тапсырма: Сауалнама — пайдалы/зиянды (match)
    {
      type: "game",
      title: {
        kk: "3-тапсырма. Интернеттің пайдасы мен зияны",
        ru: "Задание 3. Польза и вред интернета",
        en: "Task 3. Pros and Cons of the Internet",
      },
      items: [
        {
          type: "match",
          instruction: {
            kk: "Әр жағдайды дұрыс бағанаға (+ пайдалы немесе – зиянды) сәйкестендір",
            ru: "Соедини каждое утверждение с правильной колонкой (+ полезно или – вредно)",
            en: "Match each statement with the correct column (+ useful or – harmful)",
          },
          pairs: [
            {
              left: { kk: "Ақпарат көзі", ru: "Источник информации", en: "Source of information" },
              right: { kk: "+ Пайдалы", ru: "+ Полезно", en: "+ Useful" },
            },
            {
              left: {
                kk: "Кітап оқуға, ойын ойнауға болады",
                ru: "Можно читать книги, играть",
                en: "Can read books, play games",
              },
              right: { kk: "+ Пайдалы", ru: "+ Полезно", en: "+ Useful" },
            },
            {
              left: {
                kk: "Сабаққа қажетті ақпарат бар",
                ru: "Есть нужная для урока информация",
                en: "Has info needed for lessons",
              },
              right: { kk: "+ Пайдалы", ru: "+ Полезно", en: "+ Useful" },
            },
            {
              left: {
                kk: "Қажетсіз, зиянды ақпарат көп",
                ru: "Много ненужной, вредной информации",
                en: "Lots of harmful content",
              },
              right: { kk: "– Зиянды", ru: "– Вредно", en: "– Harmful" },
            },
            {
              left: {
                kk: "Денсаулыққа зиян (көп пайдалану)",
                ru: "Вред здоровью (от долгого использования)",
                en: "Harms health (long usage)",
              },
              right: { kk: "– Зиянды", ru: "– Вредно", en: "– Harmful" },
            },
            {
              left: {
                kk: "Теріс пиғылды адамдар кездеседі",
                ru: "Встречаются плохие люди",
                en: "Bad people may appear",
              },
              right: { kk: "– Зиянды", ru: "– Вредно", en: "– Harmful" },
            },
          ],
        },
      ],
      emoji: "⚖️",
    },
    // 4-тапсырма: Алма бағы — ақпарат көздері
    {
      type: "topic",
      title: {
        kk: "4-тапсырма. Ақпарат көздері (Алма бағы)",
        ru: "Задание 4. Источники информации (Яблоневый сад)",
        en: "Task 4. Sources of Information (Apple Orchard)",
      },
      text: {
        kk: "Суретке қарап, ақпарат көзі болатын заттарды ата. Алманың түсі — көзбен көреміз. Құстардың дауысы — құлақпен естиміз. Алманың дәмі — тілмен сезінеміз.",
        ru: "Посмотри на картинку и назови источники информации. Цвет яблок — видим глазами. Пение птиц — слышим ушами. Вкус яблок — чувствуем языком.",
        en: "Look at the picture and name the sources of information. Apple color — we see with eyes. Bird songs — we hear with ears. Apple taste — we feel with tongue.",
      },
      image: appleOrchardImg,
      videos: [thirdTopicFirst, thirdTopicSecond, thirdTopicThird],
      emoji: "🍎",
    },
    // Интерактив по 4-тапсырма
    {
      type: "interactive",
      title: { kk: "Ақпарат көздерін тап", ru: "Найди источники информации", en: "Find Information Sources" },
      items: [
        {
          type: "choice",
          question: {
            kk: "Алманың түсін қалай білеміз?",
            ru: "Как мы узнаём цвет яблока?",
            en: "How do we learn the color of an apple?",
          },
          options: [
            { kk: "Көзбен көріп", ru: "Видим глазами", en: "By seeing with eyes" },
            { kk: "Иіскеп", ru: "По запаху", en: "By smelling" },
            { kk: "Ұстап", ru: "Трогая", en: "By touching" },
          ],
          correctIndex: 0,
        },
      ],
    },
    // 5-тапсырма: Жобалық жұмыс
    {
      type: "topic",
      title: {
        kk: "5-тапсырма. Жобалық жұмыс",
        ru: "Задание 5. Проектная работа",
        en: "Task 5. Project Work",
      },
      text: {
        kk: "Тақырып: Интернетті білім алуға пайдалану. Үлкендердің көмегімен білім беретін 3 сайтты тап. Сайттардың тізімін жаса. Әр сайттың не туралы екенін айтып бер.",
        ru: "Тема: Использование интернета для обучения. С помощью взрослых найди 3 обучающих сайта. Составь список сайтов. Расскажи, о чём каждый сайт.",
        en: "Topic: Using the internet for learning. With adults' help, find 3 educational websites. Make a list. Tell what each site is about.",
      },
      image: kitapKzImg,
      videos: [fourthTopicFirst, fourthTopicSecond],
      emoji: "🌐",
    },
    // 6-тапсырма: Ақпараттың берілу түрлері
    {
      type: "topic",
      title: {
        kk: "6-тапсырма. Ақпараттың берілу түрлері",
        ru: "Задание 6. Виды передачи информации",
        en: "Task 6. Types of Information Transmission",
      },
      text: {
        kk: "Суретке қарап ақпараттың берілу түрлерін анықта. Ақпарат сөз арқылы беріледі. Ақпарат хат арқылы беріледі. Ақпарат теледидар, телефон арқылы беріледі.",
        ru: "Посмотри на картинку и определи виды передачи информации. Информация передаётся через речь. Информация передаётся через письмо. Информация передаётся через телевизор и телефон.",
        en: "Look at the picture and identify ways of transmitting information. Information is transmitted through speech. Through letters. Through TV and phone.",
      },
      image: infoTransmissionImg,
      videos: [fifthTopicFirst, fifthTopicSecond, fifthTopicThird],
      emoji: "📡",
    },
    // 7-тапсырма: kitap.kz
    {
      type: "rules",
      title: {
        kk: "7-тапсырма. kitap.kz сайтына саяхат",
        ru: "Задание 7. Путешествие на kitap.kz",
        en: "Task 7. Trip to kitap.kz",
      },
      points: [
        {
          kk: "🌐 Үлкендердің көмегімен kitap.kz сайтына кір",
          ru: "🌐 С помощью взрослых зайди на сайт kitap.kz",
          en: "🌐 With adults' help, visit kitap.kz",
        },
        {
          kk: "📚 Сайттан 5 ертегі кітабының атауын тап",
          ru: "📚 Найди на сайте названия 5 сказок",
          en: "📚 Find names of 5 fairy tale books",
        },
        {
          kk: "✏️ Ертегілердің атауларын дәптерге жаз",
          ru: "✏️ Запиши названия сказок в тетрадь",
          en: "✏️ Write the fairy tale names in your notebook",
        },
        {
          kk: "👨‍👩‍👧 Үйде ата-анаңмен бірге оқы",
          ru: "👨‍👩‍👧 Прочитай дома вместе с родителями",
          en: "👨‍👩‍👧 Read at home with your parents",
        },
      ],
      emoji: "📖",
    },
    // 8-тапсырма: Интернетке қосылатын құрылғылар
    {
      type: "interactive",
      title: {
        kk: "8-тапсырма. Интернетке қосылатын құрылғылар",
        ru: "Задание 8. Устройства для подключения к интернету",
        en: "Task 8. Internet-Connected Devices",
      },
      image: devicesImg,
      items: [
        {
          type: "choice",
          question: {
            kk: "Қай құрылғы интернетке қосылады?",
            ru: "Какое устройство подключается к интернету?",
            en: "Which device connects to the internet?",
          },
          options: [
            { kk: "Ұялы телефон", ru: "Смартфон", en: "Smartphone" },
            { kk: "Қарапайым кітап", ru: "Обычная книга", en: "Regular book" },
            { kk: "Қарындаш", ru: "Карандаш", en: "Pencil" },
          ],
          correctIndex: 0,
        },
        {
          type: "choice",
          question: {
            kk: "Қайсысы интернетке қосыла АЛМАЙДЫ?",
            ru: "Что НЕ может подключиться к интернету?",
            en: "Which device CANNOT connect to the internet?",
          },
          options: [
            { kk: "Ноутбук", ru: "Ноутбук", en: "Laptop" },
            { kk: "Планшет", ru: "Планшет", en: "Tablet" },
            { kk: "Калькулятор", ru: "Калькулятор", en: "Calculator" },
          ],
          correctIndex: 2,
        },
        {
          type: "choice",
          question: {
            kk: "Smart TV нені пайдаланады?",
            ru: "Что использует Smart TV?",
            en: "What does Smart TV use?",
          },
          options: [
            { kk: "Газ", ru: "Газ", en: "Gas" },
            { kk: "Интернет (Wi-Fi)", ru: "Интернет (Wi-Fi)", en: "Internet (Wi-Fi)" },
            { kk: "Су", ru: "Воду", en: "Water" },
          ],
          correctIndex: 1,
        },
      ],
    },
    // Қорытынды
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        {
          kk: "Информатика кабинетінде қауіпсіздік ережелерін сақтау керек",
          ru: "В кабинете информатики надо соблюдать правила безопасности",
          en: "Follow safety rules in the computer lab",
        },
        {
          kk: "Интернет — пайдалы да, зиянды да болуы мүмкін",
          ru: "Интернет может быть и полезным, и вредным",
          en: "The internet can be both useful and harmful",
        },
        {
          kk: "Ақпарат көздері: көз, құлақ, тіл, мұрын, тері",
          ru: "Источники информации: глаза, уши, язык, нос, кожа",
          en: "Sources of information: eyes, ears, tongue, nose, skin",
        },
        {
          kk: "Интернетке смартфон, ноутбук, планшет, Smart TV қосылады",
          ru: "К интернету подключаются смартфон, ноутбук, планшет, Smart TV",
          en: "Smartphone, laptop, tablet, Smart TV connect to the internet",
        },
      ],
      emoji: "🎓",
    },
  ],
};
