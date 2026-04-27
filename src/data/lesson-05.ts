import { LessonData } from "@/lib/types";

import internetGlobeImg from "@/assets/lesson-05/internet-globe.jpg";
import safeChildImg from "@/assets/lesson-05/safe-child-laptop.jpg";
import dangersImg from "@/assets/lesson-05/internet-dangers.jpg";
import aloneImg from "@/assets/lesson-05/alone-online.jpg";
import rulesForInternetImg from "@/assets/lesson-05/rules.png";

import computersConnectedVideo from "@/assets/lesson-05/videos/Computers_connected_worldwide.mp4";
import internetSafetyVideo from "@/assets/lesson-05/videos/Girl_learns_online.mp4";
import wanderingAloneVideo from "@/assets/lesson-05/videos/Boy_enters_internet.mp4";
import safeInternetHappyChildVideo from "@/assets/lesson-05/videos/Boy_enters_safe.mp4";
import boyLearnsOnline from "@/assets/lesson-05/videos/Boy_learns_online.mp4";

export const lesson05: LessonData = {
  id: "lesson-05",
  title: { kk: "Интернет желісінде қауіпсіздік", ru: "Безопасность в Интернете", en: "Internet Safety" },
  description: {
    kk: "Интернетті күнделікті өмірде қауіпсіз пайдалану ережелері",
    ru: "Правила безопасного использования Интернета",
    en: "Rules for safe internet usage",
  },
  emoji: "🛡️",
  color: "from-blue-500 to-cyan-400",
  slides: [
    {
      type: "hero",
      title: { kk: "Интернет желісінде жұмыс істеу қауіпсіздігі", ru: "Безопасность в сети Интернет", en: "Internet Safety" },
      subtitle: {
        kk: "Интернетті ақылмен пайдалан!",
        ru: "Используй Интернет с умом!",
        en: "Use the internet wisely!",
      },
      emoji: "🛡️",
      color: "from-blue-500 to-cyan-400",
    },
    {
      type: "topic",
      title: { kk: "Жаңа білім: Интернет дегеніміз не?", ru: "Что такое Интернет?", en: "What is the Internet?" },
      text: {
        kk: "Интернет — ақпаратты сақтауға, тасымалдауға арналған компьютерлердің әлемдік біртұтас желісі. Екі және одан да көп компьютердің өзара байланысын компьютерлік желі деп атайды.",
        ru: "Интернет — всемирная единая сеть компьютеров для хранения и передачи информации. Связь двух и более компьютеров — это компьютерная сеть.",
        en: "The Internet is a worldwide network of computers for storing and transmitting information. Two or more connected computers form a computer network.",
      },
      image: internetGlobeImg,
      video: computersConnectedVideo,
    },
    {
      type: "topic",
      title: { kk: "Интернетте жалғыз «саяхаттау»", ru: "«Путешествие» в Интернете в одиночку", en: "Wandering online alone" },
      text: {
        kk: "Интернеттегі барлық ақпарат шынайы әрі пайдалы емес. Онда жалған, пайдасыз ақпарат та кездеседі. Сондықтан ата-ана рұқсатынсыз жалғыз «саяхаттау» қауіпті.",
        ru: "Не вся информация в Интернете правдивая и полезная. Бывает ложная и бесполезная. Поэтому опасно «гулять» в Сети без разрешения родителей.",
        en: "Not all online info is true or useful. Some is false. It's dangerous to wander online alone without parents' permission.",
      },
      image: aloneImg,
      video: wanderingAloneVideo,
    },
    {
      type: "topic",
      title: { kk: "Интернеттегі қауіптер", ru: "Опасности в Интернете", en: "Internet dangers" },
      text: {
        kk: "Интернеттің өз қарақшысы мен вирусы бар. Вирус — компьютердің программасына зиян келтіру мақсатында әдейі жазылған программа. Ойы жаман адамдар жеке ақпаратыңды пайдаланып, зиянын тигізуі мүмкін.",
        ru: "В Интернете есть пираты и вирусы. Вирус — программа, написанная для нанесения вреда. Злоумышленники могут использовать твои личные данные.",
        en: "The internet has hackers and viruses. A virus is a program written to harm. Bad people may misuse your personal data.",
      },
      image: dangersImg,
      video: internetSafetyVideo,
    },
    {
      type: "rules",
      title: { kk: "Интернетте жұмыс істеудің ережелері", ru: "Правила работы в Интернете", en: "Rules for Internet use" },
      image: rulesForInternetImg,
      points: [
        { kk: "✅ Ата-анам рұқсат бергенде ғана интернетке кіремін", ru: "✅ Захожу в Интернет только с разрешения родителей", en: "✅ Go online only with parents' permission" },
        { kk: "✅ Ата-анамның рұқсатынсыз танымайтын адамдармен байланыспаймын", ru: "✅ Не общаюсь с незнакомцами без разрешения родителей", en: "✅ Don't contact strangers without parents' OK" },
        { kk: "✅ Танымайтын адамдармен суреттеріммен бөліспеймін", ru: "✅ Не делюсь фото с незнакомцами", en: "✅ Don't share photos with strangers" },
        { kk: "❌ Ата-анамның рұқсатынсыз өзім туралы ақпарат қоймаймын", ru: "❌ Не выкладываю личные данные без разрешения", en: "❌ Don't post personal info without permission" },
        { kk: "✅ Ата-анаммен интернетте не істегенімді бөлісемін", ru: "✅ Делюсь с родителями, что делал в Интернете", en: "✅ Tell parents what I do online" },
      ],
      emoji: "🔒",
    },
    {
      type: "interactive",
      title: { kk: "«Иә» немесе «Жоқ»?", ru: "«Да» или «Нет»?", en: "\"Yes\" or \"No\"?" },
      items: [
        {
          type: "choice",
          question: { kk: "Ата-анамның рұқсатынсыз өзім туралы интернетке ақпарат қоямын ба?", ru: "Выкладывать о себе данные без разрешения родителей?", en: "Post personal info without parents' permission?" },
          options: [
            { kk: "✅ Иә", ru: "✅ Да", en: "✅ Yes" },
            { kk: "❌ Жоқ", ru: "❌ Нет", en: "❌ No" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Ата-анам рұқсат бергенде ғана интернетке кіремін бе?", ru: "Захожу только с разрешения родителей?", en: "Go online only with parents' permission?" },
          options: [
            { kk: "✅ Иә", ru: "✅ Да", en: "✅ Yes" },
            { kk: "❌ Жоқ", ru: "❌ Нет", en: "❌ No" },
          ],
          correctIndex: 0,
        },
        {
          type: "choice",
          question: { kk: "Танымайтын адамдармен суреттеріммен бөлісемін бе?", ru: "Делиться фото с незнакомцами?", en: "Share photos with strangers?" },
          options: [
            { kk: "✅ Иә", ru: "✅ Да", en: "✅ Yes" },
            { kk: "❌ Жоқ", ru: "❌ Нет", en: "❌ No" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Вирус дегеніміз не?", ru: "Что такое вирус?", en: "What is a virus?" },
          options: [
            { kk: "Пайдалы программа", ru: "Полезная программа", en: "Useful program" },
            { kk: "Компьютерге зиян келтіретін программа", ru: "Программа, вредящая компьютеру", en: "A program that harms the computer" },
            { kk: "Ойын", ru: "Игра", en: "A game" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Ребус: қ-?-уіпсіздік. Жауабы?", ru: "Ребус: б-?-зопасность. Ответ?", en: "Riddle: 's-?-fety'. Answer?" },
          options: [
            { kk: "Қауіпсіздік", ru: "Безопасность", en: "Safety" },
            { kk: "Қызық", ru: "Интерес", en: "Fun" },
            { kk: "Қара", ru: "Чёрный", en: "Black" },
          ],
          correctIndex: 0,
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Қауіпсіз бе, қауіпті ме?", ru: "Безопасно или опасно?", en: "Safe or Dangerous?" },
      items: [
        {
          type: "match",
          instruction: {
            kk: "Әрекетті дұрыс санатқа сәйкестендір",
            ru: "Соедини действие с правильной категорией",
            en: "Match the action with the correct category",
          },
          pairs: [
            { left: { kk: "Құпия сөзді бөтенге айту", ru: "Сказать пароль чужому", en: "Tell password to a stranger" }, right: { kk: "❌ Қауіпті", ru: "❌ Опасно", en: "❌ Dangerous" } },
            { left: { kk: "Ата-анаға айту", ru: "Рассказать родителям", en: "Tell parents" }, right: { kk: "✅ Қауіпсіз", ru: "✅ Безопасно", en: "✅ Safe" } },
            { left: { kk: "Үй мекенжайын жазу", ru: "Написать домашний адрес", en: "Write home address" }, right: { kk: "❌ Қауіпті", ru: "❌ Опасно", en: "❌ Dangerous" } },
            { left: { kk: "Белгісіз сілтемені басу", ru: "Нажать на незнакомую ссылку", en: "Click an unknown link" }, right: { kk: "❌ Қауіпті", ru: "❌ Опасно", en: "❌ Dangerous" } },
            { left: { kk: "Сенімді сайтты пайдалану", ru: "Использовать надёжный сайт", en: "Use a trusted site" }, right: { kk: "✅ Қауіпсіз", ru: "✅ Safe", en: "✅ Safe" } },
          ],
        },
      ],
    },
    {
      type: "topic",
      title: { kk: "Қауіпсіз интернет — бақытты бала", ru: "Безопасный Интернет — счастливый ребёнок", en: "Safe internet — happy child" },
      text: {
        kk: "Ережелерді сақтасаң, интернет сенің досың болады. Қызықты ойындар, мультфильмдер, сабаққа қажетті ақпарат — бәрі қол жетімді!",
        ru: "Соблюдая правила, ты подружишься с Интернетом: игры, мультфильмы, полезная информация — всё доступно!",
        en: "If you follow the rules, the internet becomes your friend: games, cartoons, school info — all available!",
      },
      image: safeChildImg,
      video: safeInternetHappyChildVideo,
    },
    {
      type: "video",
      title: { kk: "Видео: қауіпсіздік", ru: "Видео: безопасность", en: "Video: safety" },
      video: boyLearnsOnline,
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Интернет — компьютерлердің әлемдік желісі", ru: "Интернет — мировая сеть компьютеров", en: "The internet is a global computer network" },
        { kk: "Жеке ақпаратыңды бөтен адамдарға бермеңіз", ru: "Не давай личные данные посторонним", en: "Don't share personal info with strangers" },
        { kk: "Вирус — зиян келтіретін программа", ru: "Вирус — вредная программа", en: "A virus is a harmful program" },
        { kk: "Ата-анаңмен бөліс — олар көмектеседі", ru: "Делись с родителями — они помогут", en: "Share with parents — they will help" },
      ],
      emoji: "⭐",
    },
  ],
};
