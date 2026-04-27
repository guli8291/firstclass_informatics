import { LessonData } from "@/lib/types";

import algorithmStepsImg from "@/assets/lesson-10/algorithm-steps.jpg";
import kurtMakingImg from "@/assets/lesson-10/kurt-making.jpg";
import teaMakingImg from "@/assets/lesson-10/tea-making.jpg";
import numberBalloonsImg from "@/assets/lesson-10/number-balloons.jpg";
import fairyTaleImg from "@/assets/lesson-10/fairy-tale-book.jpg";

import algorithmStepsVideo from "@/assets/lesson-10/videos/algorithm-steps.mp4";
import algorithmPropertiesVideo from "@/assets/lesson-10/videos/Making_baursaks_step-by-step.mp4";
import morningAlgorithmVideo from "@/assets/lesson-10/videos/morning-algorithm.mp4";
import fairyTalesVideo from "@/assets/lesson-10/videos/Fairy_tale_titles.mp4";
export const lesson10: LessonData = {
  id: "lesson-10",
  title: { kk: "Әрекеттердің реті. Оқиға", ru: "Последовательность действий. Событие", en: "Sequence of Actions. Event" },
  description: {
    kk: "«Әрекеттердің реті», «оқиға» ұғымдарымен танысасың",
    ru: "Познакомишься с понятиями «последовательность действий» и «событие»",
    en: "Learn the concepts of 'sequence of actions' and 'event'",
  },
  emoji: "📝",
  color: "from-amber-400 to-yellow-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Әрекеттердің реті. Оқиға", ru: "Последовательность действий. Событие", en: "Sequence of Actions. Event" },
      subtitle: {
        kk: "Бір-бірімен байланысты әрекеттер тізбегі — оқиға",
        ru: "Последовательность связанных действий — это событие",
        en: "A sequence of related actions is an event",
      },
      emoji: "📝",
      color: "from-amber-400 to-yellow-500",
    },
    {
      type: "topic",
      title: { kk: "Құрт дайындау", ru: "Приготовление курта", en: "Making kurt" },
      text: {
        kk: "Біз күнделікті өмірде бір-бірімен байланысты әртүрлі әрекеттерді орындаймыз. 1-суретте құрт дайындау кезінде орындалатын әрекеттер бейнеленген. Әрекеттердің реті дұрыс берілген бе?",
        ru: "В повседневной жизни мы выполняем разные связанные между собой действия. На картинке показаны этапы приготовления курта. Правильна ли последовательность действий?",
        en: "Every day we perform connected actions. The picture shows steps of making kurt. Is the order of actions correct?",
      },
      image: kurtMakingImg,
      videos: [algorithmStepsVideo],
    },
    {
      type: "rules",
      title: { kk: "Жаңа ұғымдар", ru: "Новые понятия", en: "New concepts" },
      points: [
        { kk: "🔗 Әрекеттер тізбегі — бір-бірімен байланысы бар әрекеттер", ru: "🔗 Последовательность действий — связанные между собой действия", en: "🔗 Sequence of actions — connected actions" },
        { kk: "📖 Оқиға — белгілі бір ретпен орындалатын әрекеттер тізбегі", ru: "📖 Событие — последовательность действий в определённом порядке", en: "📖 Event — actions performed in a specific order" },
        { kk: "👨‍🍳 Күнделікті өмірден мысал келтір", ru: "👨‍🍳 Приведи примеры из повседневной жизни", en: "👨‍🍳 Give examples from everyday life" },
      ],
      emoji: "💡",
    },
    {
      type: "interactive",
      title: { kk: "Сандар тізбегі", ru: "Числовая последовательность", en: "Number sequence" },
      items: [
        {
          type: "choice",
          question: {
            kk: "Тізбек: 5, 6, 7, 8, 9, ... Келесі сан қандай?",
            ru: "Последовательность: 5, 6, 7, 8, 9, ... Какое следующее число?",
            en: "Sequence: 5, 6, 7, 8, 9, ... What's next?",
          },
          options: [
            { kk: "10", ru: "10", en: "10" },
            { kk: "11", ru: "11", en: "11" },
            { kk: "15", ru: "15", en: "15" },
          ],
          correctIndex: 0,
        },
        {
          type: "choice",
          question: {
            kk: "Тізбек: 5, 10, 15, ... Келесі сан?",
            ru: "Последовательность: 5, 10, 15, ... Какое число дальше?",
            en: "Sequence: 5, 10, 15, ... Next number?",
          },
          options: [
            { kk: "16", ru: "16", en: "16" },
            { kk: "20", ru: "20", en: "20" },
            { kk: "25", ru: "25", en: "25" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: {
            kk: "Әрекеттер тізбегі деген не?",
            ru: "Что такое последовательность действий?",
            en: "What is a sequence of actions?",
          },
          options: [
            { kk: "Бір-бірімен байланысы бар әрекеттер", ru: "Связанные между собой действия", en: "Actions connected to each other" },
            { kk: "Кездейсоқ әрекеттер", ru: "Случайные действия", en: "Random actions" },
            { kk: "Бір ғана әрекет", ru: "Одно действие", en: "Just one action" },
          ],
          correctIndex: 0,
        },
      ],
    },
    {
      type: "topic",
      title: { kk: "Сандар тізбегі", ru: "Числовая последовательность", en: "Number sequence" },
      text: {
        kk: "Тізбек: 5, 6, 7, 8, 9, 10, 11, ... Келесі сандарды тап. Сандар тізбегі — бұл да оқиға, өйткені белгілі бір ретпен орналасқан.",
        ru: "Последовательность: 5, 6, 7, 8, 9, 10, 11, ... Найди следующие числа. Числовая последовательность — это тоже событие, потому что числа идут в определённом порядке.",
        en: "Sequence: 5, 6, 7, 8, 9, 10, 11, ... Find the next numbers. A number sequence is also an event because numbers go in order.",
      },
      image: numberBalloonsImg,
      videos: [algorithmPropertiesVideo],
    },
    {
      type: "game",
      title: { kk: "Шай дайындау", ru: "Приготовление чая", en: "Making tea" },
      items: [
        {
          type: "match",
          instruction: {
            kk: "Шай дайындаудың ретін дұрыс орналастыр",
            ru: "Расположи шаги приготовления чая по порядку",
            en: "Order the steps of making tea",
          },
          pairs: [
            { left: { kk: "1-қадам", ru: "Шаг 1", en: "Step 1" }, right: { kk: "Шәйнекке су құю", ru: "Налить воду в чайник", en: "Pour water into kettle" } },
            { left: { kk: "2-қадам", ru: "Шаг 2", en: "Step 2" }, right: { kk: "Суды қайнату", ru: "Вскипятить воду", en: "Boil water" } },
            { left: { kk: "3-қадам", ru: "Шаг 3", en: "Step 3" }, right: { kk: "Шәйге шай салу", ru: "Засыпать чай", en: "Add tea leaves" } },
            { left: { kk: "4-қадам", ru: "Шаг 4", en: "Step 4" }, right: { kk: "Кесеге құю", ru: "Налить в пиалу", en: "Pour into cup" } },
          ],
        },
      ],
      image: teaMakingImg,
    },
    {
      type: "topic",
      title: { kk: "Қазақ ертегілері", ru: "Казахские сказки", en: "Kazakh fairy tales" },
      text: {
        kk: "Әріптерден қазақ, орыс халық ертегілерінің атын құрастыр. Мысалы: «АЛДАР КӨСЕ», «МОРОЗКО». Бір әріпті бірнеше рет пайдалануыңа болады.",
        ru: "Составь из букв названия казахских и русских народных сказок. Например: «АЛДАР КӨСЕ», «МОРОЗКО». Одну букву можно использовать несколько раз.",
        en: "Make names of Kazakh and Russian folk tales from letters. Example: 'ALDAR KOSE', 'MOROZKO'. You can reuse a letter multiple times.",
      },
      image: fairyTaleImg,
      video: fairyTalesVideo,
    },
    {
      type: "game",
      title: { kk: "Мақалды құрастыр", ru: "Составь пословицу", en: "Build a proverb" },
      items: [
        {
          type: "match",
          instruction: {
            kk: "Мақалдың сөздерін ретімен орналастыр: «Мектеп — кеме, білім — теңіз»",
            ru: "Расположи слова по порядку: «Школа — корабль, знания — море»",
            en: "Order the words: 'School is a ship, knowledge is a sea'",
          },
          pairs: [
            { left: { kk: "1", ru: "1", en: "1" }, right: { kk: "Мектеп", ru: "Школа", en: "School" } },
            { left: { kk: "2", ru: "2", en: "2" }, right: { kk: "— кеме,", ru: "— корабль,", en: "— a ship," } },
            { left: { kk: "3", ru: "3", en: "3" }, right: { kk: "білім", ru: "знания", en: "knowledge" } },
            { left: { kk: "4", ru: "4", en: "4" }, right: { kk: "— теңіз.", ru: "— море.", en: "— a sea." } },
          ],
        },
      ],
    },
    {
      type: "video",
      title: { kk: "Видео", ru: "Видео", en: "Video" },
      video: morningAlgorithmVideo,
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Әрекеттер тізбегі — бір-бірімен байланысы бар әрекеттер", ru: "Последовательность действий — связанные действия", en: "Sequence — connected actions" },
        { kk: "Оқиға — белгілі бір ретпен орындалатын әрекеттер", ru: "Событие — действия в определённом порядке", en: "Event — actions in specific order" },
        { kk: "Күнделікті өмірде көп мысал бар: тағам, шай, оқу", ru: "В жизни много примеров: еда, чай, учёба", en: "Many examples in life: food, tea, study" },
      ],
      emoji: "⭐",
      image: algorithmStepsImg,
    },
  ],
};
