import { LessonData } from "@/lib/types";

import appleTreeImg from "@/assets/lesson-15/apple-tree.jpg";
import appleStoryImg from "@/assets/lesson-15/apple-story.jpg";
import scriptBlocksImg from "@/assets/lesson-15/script-blocks.jpg";

import firstTopicFirst from "@/assets/lesson-15/videos/15 урок, 1 тема, 1 видео.mp4";
import firstTopicSecond from "@/assets/lesson-15/videos/15 урок, 1 тема, 2 виде.mp4";
import secondTopicFirst from "@/assets/lesson-15/videos/15 урок, 2 тема, 1 видео.mp4";
import secondTopicSecond from "@/assets/lesson-15/videos/15 урок, 2 тема 2 видео.mp4";
import secondTopicThird from "@/assets/lesson-15/videos/15 урок, 2 тема, 3 видео.mp4";
import thirdTopicFirst from "@/assets/lesson-15/videos/15 урок, 3 тема, 1 видео.mp4";
import thirdTopicSecond from "@/assets/lesson-15/videos/15 урок, 3 тема, 2 видео.mp4";
import thirdTopicThird from "@/assets/lesson-15/videos/15 урок, 3 тема, 3 видео.mp4";
import fourthTopicFirst from "@/assets/lesson-15/videos/15 урок, 4 тема, 1 виео.mp4";
import fourthTopicSecond from "@/assets/lesson-15/videos/15 урок, 4 тема, 2 видео.mp4";
import fourthTopicThird from "@/assets/lesson-15/videos/15 урок, 4 тема, 3 видео.mp4";

export const lesson15: LessonData = {
  id: "lesson-15",
  title: { kk: "«Алмаағаш» жобасы", ru: "Проект «Яблоня»", en: "«Apple Tree» Project" },
  description: {
    kk: "Дайын сценарий бойынша алгоритм құру",
    ru: "Создание алгоритма по готовому сценарию",
    en: "Building an algorithm from a ready scenario",
  },
  emoji: "🍎",
  color: "from-red-400 to-rose-500",
  slides: [
    {
      type: "hero",
      title: { kk: "«Алмаағаш» жобасы", ru: "Проект «Яблоня»", en: "«Apple Tree» Project" },
      subtitle: {
        kk: "Дайын сценарийді алгоритмге айналдырамыз!",
        ru: "Превращаем готовый сценарий в алгоритм!",
        en: "Turning a ready scenario into an algorithm!",
      },
      emoji: "🍎",
      color: "from-red-400 to-rose-500",
    },
    {
      type: "topic",
      title: {
        kk: "Жоба тақырыбын ойлау",
        ru: "Придумываем тему проекта",
        en: "Choosing a Project Topic",
      },
      text: {
        kk: "Суретке қарап, қандай тақырыпта жоба құрар едің? Суреттерге қарап, оқиға алгоритмін құрастырып көр. Ойыңды ортаға сал.",
        ru: "Посмотри на картинку — на какую тему сделал бы проект? По картинкам составь алгоритм истории. Поделись своими мыслями.",
        en: "Look at the picture — what topic would you make a project on? Build a story algorithm from the pictures. Share your thoughts.",
      },
      image: appleTreeImg,
      videos: [firstTopicFirst, firstTopicSecond],
      emoji: "💭",
    },
    {
      type: "topic",
      title: {
        kk: "Жаңа командалар",
        ru: "Новые команды",
        en: "New Commands",
      },
      text: {
        kk: "«Сырғу» командасының екі түрі бар: тінтуір көрсеткен орынға және кез келген орынға сырғу. «Размер +20» — спрайт өлшемін 20-ға үлкейтеді, «–20» — кемітеді. «Hide / Show» — спрайтты жасырады және қайта көрсетеді.",
        ru: "У команды «Скользить» два варианта: к указателю мыши и в любую точку. «Изменить размер на +20» — увеличивает на 20, «–20» — уменьшает. «Hide / Show» — прячет и снова показывает спрайт.",
        en: "The «Glide» command has two forms: glide to mouse pointer and glide to any position. «Change size by +20» grows the sprite by 20, «–20» shrinks it. «Hide / Show» — hides and shows the sprite.",
      },
      image: scriptBlocksImg,
      videos: [secondTopicFirst, secondTopicSecond, secondTopicThird],
      emoji: "🧩",
    },
    {
      type: "rules",
      title: {
        kk: "1-қадам. Оқиғаның мазмұны",
        ru: "Шаг 1. Содержание истории",
        en: "Step 1. Story Content",
      },
      points: [
        { kk: "🌳 Далада өсіп тұрған алмаағаштың жемісі үлкейді", ru: "🌳 На яблоне в поле плод вырос", en: "🌳 The apple on the tree grew" },
        { kk: "🍎 Пісіп, түсін өзгертті", ru: "🍎 Созрело и изменило цвет", en: "🍎 Ripened and changed color" },
        { kk: "⬇️ Ағаштың түбіне түсті", ru: "⬇️ Упало под дерево", en: "⬇️ Fell to the ground" },
        { kk: "🌀 Домалап, шөптің арасына жасырынды", ru: "🌀 Покатилось и спряталось в траве", en: "🌀 Rolled and hid in the grass" },
      ],
      emoji: "📖",
    },
    {
      type: "topic",
      title: {
        kk: "2-қадам. Сөзбен сипатталған алгоритм",
        ru: "Шаг 2. Алгоритм словами",
        en: "Step 2. Algorithm in Words",
      },
      text: {
        kk: "1. Алма өсіп, үлкейді. 2. Алма пісті. 3. Түсін өзгертті. 4. Жерге түсті. 5. Домалады. 6. Жасырынды.",
        ru: "1. Яблоко росло и увеличивалось. 2. Созрело. 3. Изменило цвет. 4. Упало на землю. 5. Покатилось. 6. Спряталось.",
        en: "1. The apple grew. 2. It ripened. 3. It changed color. 4. It fell. 5. It rolled. 6. It hid.",
      },
      image: appleStoryImg,
      videos: [thirdTopicFirst, thirdTopicSecond, thirdTopicThird],
      emoji: "📝",
    },
    {
      type: "rules",
      title: {
        kk: "3-5-қадамдар. Жобаны құру",
        ru: "Шаги 3-5. Создание проекта",
        en: "Steps 3-5. Building the Project",
      },
      points: [
        {
          kk: "🎬 3-қадам. Спрайт пен фонды сахнаға орналастыру",
          ru: "🎬 Шаг 3. Поставить спрайт и фон на сцену",
          en: "🎬 Step 3. Place sprite and backdrop on the stage",
        },
        {
          kk: "🧱 4-қадам. Алгоритм бойынша скрипт құру",
          ru: "🧱 Шаг 4. Собрать скрипт по алгоритму",
          en: "🧱 Step 4. Build the script from the algorithm",
        },
        {
          kk: "▶️ 5-қадам. Жобаны іске қосу, орындалуын тексеру",
          ru: "▶️ Шаг 5. Запустить проект и проверить",
          en: "▶️ Step 5. Run the project and test it",
        },
        {
          kk: "💾 Жобаны міндетті түрде сақтау",
          ru: "💾 Обязательно сохранить проект",
          en: "💾 Don't forget to save the project",
        },
      ],
      emoji: "🛠️",
    },
    {
      type: "interactive",
      title: { kk: "Білімді тексер", ru: "Проверь знания", en: "Test Your Knowledge" },
      items: [
        {
          type: "choice",
          question: {
            kk: "«Размер +20» командасы не істейді?",
            ru: "Что делает команда «Размер +20»?",
            en: "What does «Change size by +20» do?",
          },
          options: [
            { kk: "Спрайтты жасырады", ru: "Прячет спрайт", en: "Hides the sprite" },
            { kk: "Спрайтты 20-ға үлкейтеді", ru: "Увеличивает на 20", en: "Grows by 20" },
            { kk: "Спрайтты 20-ға кемітеді", ru: "Уменьшает на 20", en: "Shrinks by 20" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: {
            kk: "Спрайтты жасыру үшін қандай команда?",
            ru: "Какая команда прячет спрайт?",
            en: "Which command hides the sprite?",
          },
          options: [
            { kk: "Show", ru: "Show", en: "Show" },
            { kk: "Hide", ru: "Hide", en: "Hide" },
            { kk: "Glide", ru: "Glide", en: "Glide" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: {
            kk: "Жобаны құрастыру қай қадамнан басталады?",
            ru: "С какого шага начинается создание проекта?",
            en: "Which step does building a project start with?",
          },
          options: [
            { kk: "Скрипт жазудан", ru: "С написания скрипта", en: "Writing the script" },
            { kk: "Оқиғаның мазмұнын құрудан", ru: "С придумывания истории", en: "Creating the story content" },
            { kk: "Жобаны сақтаудан", ru: "С сохранения проекта", en: "Saving the project" },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "game",
      title: {
        kk: "Алгоритм қадамдарын ретімен қой",
        ru: "Расставь шаги алгоритма",
        en: "Order the Algorithm Steps",
      },
      items: [
        {
          type: "match",
          instruction: {
            kk: "Әр қадамды дұрыс реттік нөмірмен сәйкестендір",
            ru: "Соедини каждый шаг с его порядковым номером",
            en: "Match each step with its order number",
          },
          pairs: [
            { left: { kk: "1", ru: "1", en: "1" }, right: { kk: "Алма өсіп үлкейді", ru: "Яблоко выросло", en: "Apple grew" } },
            { left: { kk: "2", ru: "2", en: "2" }, right: { kk: "Пісті", ru: "Созрело", en: "Ripened" } },
            { left: { kk: "3", ru: "3", en: "3" }, right: { kk: "Түсін өзгертті", ru: "Изменило цвет", en: "Changed color" } },
            { left: { kk: "4", ru: "4", en: "4" }, right: { kk: "Жерге түсті", ru: "Упало", en: "Fell" } },
            { left: { kk: "5", ru: "5", en: "5" }, right: { kk: "Домалады", ru: "Покатилось", en: "Rolled" } },
            { left: { kk: "6", ru: "6", en: "6" }, right: { kk: "Жасырынды", ru: "Спряталось", en: "Hid" } },
          ],
        },
      ],
      emoji: "🔢",
    },
    {
      type: "topic",
      title: {
        kk: "Шығармашылық: Әуедегі шар",
        ru: "Творчество: Шар в небе",
        en: "Creative: Balloon in the Sky",
      },
      text: {
        kk: "Шардың спрайты мен аспан фонын таңда. Әуеде қалықтап ұшқан шар жобасын құр. Ол үшін «glide», «change size», «wait» командаларын пайдаланасың.",
        ru: "Выбери спрайт шара и фон неба. Сделай проект «Шар парит в небе». Используй команды «glide», «change size», «wait».",
        en: "Choose a balloon sprite and sky backdrop. Create a «Floating Balloon» project. Use «glide», «change size», «wait» commands.",
      },
      image: scriptBlocksImg,
      videos: [fourthTopicFirst, fourthTopicSecond, fourthTopicThird],
      emoji: "🎈",
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Жоба құру 5 қадамнан тұрады: оқиға → алгоритм → спрайт/фон → скрипт → іске қосу", ru: "Создание проекта — 5 шагов: история → алгоритм → спрайт/фон → скрипт → запуск", en: "Building a project = 5 steps: story → algorithm → sprite/backdrop → script → run" },
        { kk: "«Glide», «Change size», «Hide/Show» — жиі қолданылатын командалар", ru: "«Glide», «Change size», «Hide/Show» — часто используемые команды", en: "«Glide», «Change size», «Hide/Show» — common commands" },
        { kk: "Алдымен алгоритм құру керек, содан кейін скрипт", ru: "Сначала составь алгоритм, потом скрипт", en: "Build the algorithm first, then the script" },
      ],
      emoji: "🎓",
    },
  ],
};
