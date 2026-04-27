import { LessonData } from "@/lib/types";

import fryingEggsImg from "@/assets/lesson-12/frying-eggs.jpg";
import bauyrsakImg from "@/assets/lesson-12/bauyrsak.jpg";
import buildHouseImg from "@/assets/lesson-12/build-house.jpg";
import executorsRowImg from "@/assets/lesson-12/executors-row.jpg";
import plantingImg from "@/assets/lesson-12/planting-vegetables.jpg";

import executorVideo from "@/assets/lesson-12/videos/12 урок, жарим яйшницу.mp4";
import executorExamplesVideo from "@/assets/lesson-12/videos/12 урок, алгоритм турлери.mp4";
import robotCommandsVideo from "@/assets/lesson-12/videos/12 урок, Алгоритм посадки овощей.mp4";
import buildHouse from "@/assets/lesson-12/videos/12 урок, Алгоритм постройки дома.mp4";
import cookingBaursak from "@/assets/lesson-12/videos/12 урок, Grandmother_making_baursaks.mp4";
import Video from "@/assets/lesson-12/videos/12 урок, видео.mp4";

export const lesson12: LessonData = {
  id: "lesson-12",
  title: { kk: "Орындаушы және команда", ru: "Исполнитель и команда", en: "Executor and Command" },
  description: {
    kk: "«Орындаушы», «команда» ұғымдарымен танысасың",
    ru: "Познакомишься с понятиями «исполнитель», «команда»",
    en: "You will learn the concepts of 'executor' and 'command'",
  },
  emoji: "🤖",
  color: "from-sky-400 to-blue-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Орындаушы және команда", ru: "Исполнитель и команда", en: "Executor and Command" },
      subtitle: {
        kk: "Алгоритмді кім орындайды?",
        ru: "Кто выполняет алгоритм?",
        en: "Who executes the algorithm?",
      },
      emoji: "🤖",
      color: "from-sky-400 to-blue-500",
    },
    {
      type: "topic",
      title: { kk: "Жұмыртқа қуыру", ru: "Жарим яичницу", en: "Frying eggs" },
      text: {
        kk: "Бос уақытыңда анаңмен бірге қандай тағам түрін дайындағанды ұнатасың? Жұмыртқа қуырудың реттілігі дұрыс па? Алгоритм құрастыру үшін, суреттерді дұрыс орналастыр.",
        ru: "Какое блюдо ты любишь готовить с мамой в свободное время? Правильна ли последовательность жарки яиц? Чтобы составить алгоритм, расположи картинки правильно.",
        en: "What dish do you like to cook with your mom in your free time? Is the egg-frying sequence correct? Arrange the pictures to make an algorithm.",
      },
      image: fryingEggsImg,
      videos: [executorVideo],
    },
    {
      type: "topic",
      title: { kk: "Алгоритм түрлері", ru: "Виды алгоритмов", en: "Types of algorithms" },
      text: {
        kk: "Алгоритмнің үш түрі бар: сызықтық, тармақталу, циклдік. Алгоритмнің қадамдары командалар арқылы беріледі. Адам, жануар, робот немесе компьютер алгоритм орындаушысы бола алады. Сызықтық алгоритмнің әр қадамы ретімен бір рет орындалады.",
        ru: "Существует три вида алгоритмов: линейный, разветвлённый, циклический. Шаги алгоритма задаются командами. Исполнителем может быть человек, животное, робот или компьютер. Каждый шаг линейного алгоритма выполняется по порядку один раз.",
        en: "There are three types of algorithms: linear, branching, looping. Steps are given through commands. A person, animal, robot, or computer can be an executor. Each step of a linear algorithm is performed once in order.",
      },
      image: executorsRowImg,
      videos: [executorExamplesVideo],
    },
    {
      type: "rules",
      title: { kk: "Маңызды ұғымдар", ru: "Важные понятия", en: "Key concepts" },
      points: [
        { kk: "📋 Команда — алгоритм қадамын орындауға арналған нұсқау", ru: "📋 Команда — указание для выполнения шага алгоритма", en: "📋 Command — instruction to perform an algorithm step" },
        { kk: "🤖 Орындаушы — алгоритмді орындайтын субъект", ru: "🤖 Исполнитель — тот, кто выполняет алгоритм", en: "🤖 Executor — who performs the algorithm" },
        { kk: "👨‍🍳 Адам, 🐕 жануар, 🤖 робот, 💻 компьютер — орындаушы бола алады", ru: "👨‍🍳 Человек, 🐕 животное, 🤖 робот, 💻 компьютер — могут быть исполнителями", en: "👨‍🍳 Human, 🐕 animal, 🤖 robot, 💻 computer can be executors" },
      ],
      emoji: "💡",
    },
    {
      type: "topic",
      title: { kk: "Көгөніс егу алгоритмі", ru: "Алгоритм посадки овощей", en: "Vegetable planting algorithm" },
      text: {
        kk: "Көгөніс егу қадамдары: 1) Шұңқыр қазу. 2) Тұқым салу. 3) Топырақпен жабу. 4) Су құю. Бұл алгоритмнің орындаушысы — бағбан. Командалары — қазу, салу, жабу, құю.",
        ru: "Шаги посадки овощей: 1) Выкопать ямку. 2) Положить семя. 3) Засыпать землёй. 4) Полить водой. Исполнитель алгоритма — садовник. Команды — копать, положить, засыпать, полить.",
        en: "Planting steps: 1) Dig a hole. 2) Put seed. 3) Cover with soil. 4) Water. The executor is the gardener. Commands — dig, put, cover, water.",
      },
      image: plantingImg,
      videos: [robotCommandsVideo],
    },
    {
      type: "topic",
      title: { kk: "Үй салудың алгоритмі", ru: "Алгоритм постройки дома", en: "Building a house algorithm" },
      text: {
        kk: "Үй салу қадамдары: іргетас құю → қабырға тұрғызу → шатыр жабу → терезе мен есік қою. Орындаушы — құрылысшы. Әр қадам команда арқылы беріледі.",
        ru: "Шаги постройки дома: залить фундамент → возвести стены → накрыть крышу → поставить окна и двери. Исполнитель — строитель. Каждый шаг задаётся командой.",
        en: "Steps: pour foundation → build walls → install roof → add windows and doors. Executor — builder. Each step is a command.",
      },
      image: buildHouseImg,
      video: buildHouse,
    },
    {
      type: "interactive",
      title: { kk: "Білімді тексер!", ru: "Проверь знания!", en: "Test your knowledge!" },
      items: [
        {
          type: "choice",
          question: {
            kk: "Тағам дайындау алгоритмінің орындаушысы кім?",
            ru: "Кто исполнитель алгоритма приготовления еды?",
            en: "Who is the executor of a cooking algorithm?",
          },
          options: [
            { kk: "Компьютер", ru: "Компьютер", en: "Computer" },
            { kk: "Аспаз", ru: "Повар", en: "Chef" },
            { kk: "Робот", ru: "Робот", en: "Robot" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: {
            kk: "Команда дегеніміз не?",
            ru: "Что такое команда?",
            en: "What is a command?",
          },
          options: [
            { kk: "Алгоритмнің қадамын орындауға арналған нұсқау", ru: "Указание для выполнения шага алгоритма", en: "Instruction to perform an algorithm step" },
            { kk: "Сурет түрі", ru: "Вид рисунка", en: "Type of drawing" },
            { kk: "Алгоритмнің соңы", ru: "Конец алгоритма", en: "End of algorithm" },
          ],
          correctIndex: 0,
        },
        {
          type: "choice",
          question: {
            kk: "Сызықтық алгоритмнің әр қадамы қалай орындалады?",
            ru: "Как выполняется каждый шаг линейного алгоритма?",
            en: "How is each step of a linear algorithm performed?",
          },
          options: [
            { kk: "Қайталанып бірнеше рет", ru: "Несколько раз подряд", en: "Repeated multiple times" },
            { kk: "Ретімен бір рет", ru: "По порядку один раз", en: "Once, in order" },
            { kk: "Кез келген ретпен", ru: "В любом порядке", en: "In any order" },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Орындаушы мен әрекет", ru: "Исполнитель и действие", en: "Executor and action" },
      items: [
        {
          type: "match",
          instruction: {
            kk: "Орындаушыны әрекетімен сәйкестендір",
            ru: "Соедини исполнителя с действием",
            en: "Match executor with action",
          },
          pairs: [
            { left: { kk: "👨‍🍳 Аспаз", ru: "👨‍🍳 Повар", en: "👨‍🍳 Chef" }, right: { kk: "Тағам дайындау", ru: "Готовить еду", en: "Cook food" } },
            { left: { kk: "👷 Құрылысшы", ru: "👷 Строитель", en: "👷 Builder" }, right: { kk: "Үй салу", ru: "Строить дом", en: "Build a house" } },
            { left: { kk: "🤖 Робот", ru: "🤖 Робот", en: "🤖 Robot" }, right: { kk: "Командаларды орындау", ru: "Выполнять команды", en: "Execute commands" } },
            { left: { kk: "💻 Компьютер", ru: "💻 Компьютер", en: "💻 Computer" }, right: { kk: "Бағдарлама іске асыру", ru: "Запустить программу", en: "Run a program" } },
            { left: { kk: "🐕 Ит", ru: "🐕 Собака", en: "🐕 Dog" }, right: { kk: "Иесінің бұйрығын орындау", ru: "Выполнить команду хозяина", en: "Follow owner's command" } },
          ],
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Бауырсақ жасау", ru: "Готовим бауырсак", en: "Making bauyrsak" },
      items: [
        {
          type: "match",
          instruction: {
            kk: "Бауырсақ жасау қадамдарын ретімен орналастыр",
            ru: "Расположи шаги приготовления бауырсака по порядку",
            en: "Order the steps for making bauyrsak",
          },
          pairs: [
            { left: { kk: "1-қадам", ru: "Шаг 1", en: "Step 1" }, right: { kk: "Ұн елеу", ru: "Просеять муку", en: "Sift flour" } },
            { left: { kk: "2-қадам", ru: "Шаг 2", en: "Step 2" }, right: { kk: "Қамыр илеу", ru: "Замесить тесто", en: "Knead dough" } },
            { left: { kk: "3-қадам", ru: "Шаг 3", en: "Step 3" }, right: { kk: "Кесектерге бөлу", ru: "Разделить на кусочки", en: "Cut into pieces" } },
            { left: { kk: "4-қадам", ru: "Шаг 4", en: "Step 4" }, right: { kk: "Майға қуыру", ru: "Жарить в масле", en: "Fry in oil" } },
          ],
        },
      ],
    },
    {
      type: "topic",
      title: { kk: "Бауырсақ дайын!", ru: "Бауырсак готов!", en: "Bauyrsak is ready!" },
      text: {
        kk: "Ұн мен қамырдан дөңгелек, дәмді бауырсақ жасалды. Алгоритмнің орындаушысы — әже немесе ана. Әр қадам — команда.",
        ru: "Из муки и теста получились круглые вкусные бауырсаки. Исполнитель алгоритма — бабушка или мама. Каждый шаг — команда.",
        en: "Round and tasty bauyrsak made from flour and dough. Executor — grandmother or mom. Each step is a command.",
      },
      image: bauyrsakImg,
      video: cookingBaursak,
    },
    {
      type: "video",
      title: { kk: "Видео", ru: "Видео", en: "Video" },
      video: Video,
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Команда — алгоритм қадамын орындау нұсқауы", ru: "Команда — указание для выполнения шага", en: "Command — instruction for an algorithm step" },
        { kk: "Орындаушы — алгоритмді орындайтын субъект", ru: "Исполнитель — тот, кто выполняет алгоритм", en: "Executor — who performs the algorithm" },
        { kk: "Адам, жануар, робот, компьютер — орындаушы бола алады", ru: "Человек, животное, робот, компьютер — исполнители", en: "People, animals, robots, computers can be executors" },
        { kk: "Сызықтық алгоритм қадамдары ретімен бір рет орындалады", ru: "Шаги линейного алгоритма выполняются по порядку один раз", en: "Linear algorithm steps run once, in order" },
      ],
      emoji: "⭐",
    },
  ],
};
