import { LessonData } from "@/lib/types";

import shapeActionsImg from "@/assets/lesson-09/shape-actions.jpg";
import horseMirrorImg from "@/assets/lesson-09/horse-mirror.jpg";
import hatFlipImg from "@/assets/lesson-09/hat-flip.jpg";
import fourLivestockImg from "@/assets/lesson-09/Gemini_Generated_Image (3).png";
import fruitsBasketImg from "@/assets/lesson-09/fruits-basket.jpg";

import shapeActionsVideo from "@/assets/lesson-09/videos/Animals_and_proverbs.mp4";
import shapePracticeVideo from "@/assets/lesson-09/videos/shape-practice.mp4";
import moveRotateVideo from "@/assets/lesson-09/videos/Видео урок 9.mp4";
export const lesson09: LessonData = {
  id: "lesson-09",
  title: { kk: "Фигуралармен орындалатын іс-әрекет", ru: "Действия с фигурами", en: "Actions with Shapes" },
  description: {
    kk: "Tux Paint-те суретті бұру, төңкеру, көшіру",
    ru: "Поворот, отражение и копирование рисунка в Tux Paint",
    en: "Rotate, flip and copy images in Tux Paint",
  },
  emoji: "🔄",
  color: "from-teal-400 to-emerald-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Фигуралармен орындалатын іс-әрекет", ru: "Действия с фигурами", en: "Actions with Shapes" },
      subtitle: {
        kk: "Суретті бұруды үйренесің. Көшіру мен қоюды қайталайсың",
        ru: "Научишься поворачивать рисунок. Повторишь копирование и вставку",
        en: "Learn to rotate. Review copy and paste",
      },
      emoji: "🔄",
      color: "from-teal-400 to-emerald-500",
    },
    {
      type: "topic",
      title: { kk: "Төрт түлік", ru: "Четыре вида скота", en: "Four kinds of livestock" },
      text: {
        kk: "Қазақ халқы жылқыны ежелден қастерлеген. Жылқыны өлеңге, мақал-мәтелдерге қосқан. Мысалы: «Ат — ер қанаты». Төрт түлік туралы қандай өлең, мақал-мәтел білесің?",
        ru: "Казахский народ издавна почитал коня. Конь воспевался в стихах и пословицах. Например: «Конь — крылья джигита». Какие стихи и пословицы о четырёх видах скота ты знаешь?",
        en: "Kazakhs have honored horses since ancient times. Horses are praised in poems and proverbs. Example: 'A horse is the wings of a horseman'. What poems and proverbs about livestock do you know?",
      },
      image: fourLivestockImg,
      videos: [shapeActionsVideo],
    },
    {
      type: "rules",
      title: { kk: "Бұру құралы (1-тапсырма)", ru: "Инструмент поворота (Задание 1)", en: "Rotate tool (Task 1)" },
      points: [
        { kk: "1️⃣ Жылқының суретін таңдап, көшір", ru: "1️⃣ Выбери и скопируй картинку лошади", en: "1️⃣ Select and copy the horse image" },
        { kk: "2️⃣ Бұру құралын шерт", ru: "2️⃣ Нажми инструмент «Поворот»", en: "2️⃣ Click the Rotate tool" },
        { kk: "3️⃣ Жұмыс алаңына қой", ru: "3️⃣ Помести на рабочую область", en: "3️⃣ Place on the workspace" },
        { kk: "4️⃣ Суретті қайталап көшір", ru: "4️⃣ Скопируй картинку ещё раз", en: "4️⃣ Copy the picture again" },
        { kk: "5️⃣ Қажетті түстерді таңдап, боя", ru: "5️⃣ Выбери цвета и раскрась", en: "5️⃣ Choose colors and paint" },
      ],
      emoji: "↔️",
      image: horseMirrorImg,
    },
    {
      type: "rules",
      title: { kk: "Төңкеру құралы (2-тапсырма)", ru: "Инструмент отражения (Задание 2)", en: "Flip tool (Task 2)" },
      points: [
        { kk: "1️⃣ Қалпақтың суретін көшір", ru: "1️⃣ Скопируй картинку шапки", en: "1️⃣ Copy the hat image" },
        { kk: "2️⃣ Жұмыс алаңына қой", ru: "2️⃣ Помести на рабочую область", en: "2️⃣ Place on workspace" },
        { kk: "3️⃣ Қалпақты қайталап көшір", ru: "3️⃣ Скопируй шапку повторно", en: "3️⃣ Copy hat again" },
        { kk: "4️⃣ Төңкеру құралын шерт", ru: "4️⃣ Нажми инструмент «Отражение»", en: "4️⃣ Click the Flip tool" },
        { kk: "5️⃣ Жұмыс алаңына қой", ru: "5️⃣ Помести на рабочую область", en: "5️⃣ Place on workspace" },
      ],
      emoji: "🙃",
      image: hatFlipImg,
    },
    {
      type: "topic",
      title: { kk: "Жемістерді көшіру", ru: "Копирование фруктов", en: "Copying fruits" },
      text: {
        kk: "Tux Paint-те берілген жемістерді жұмыс алаңына көшіріп қой. Қай жеміс басқаларға қарағанда өзгеше? Көру, есту, дәм, иіс, сипап сезу мысалдарын ойлап тап.",
        ru: "В Tux Paint скопируй данные фрукты на рабочую область. Какой фрукт отличается от других? Придумай примеры на зрение, слух, вкус, запах, осязание.",
        en: "In Tux Paint, copy these fruits to the workspace. Which fruit is different from the others? Think of examples for sight, hearing, taste, smell, touch.",
      },
      image: fruitsBasketImg,
      videos: [shapePracticeVideo],
    },
    {
      type: "interactive",
      title: { kk: "Білімді тексер!", ru: "Проверь знания!", en: "Test your knowledge!" },
      items: [
        {
          type: "choice",
          question: {
            kk: "Tux Paint-те суретті көлденеңінен бұратын құрал қалай аталады?",
            ru: "Как называется инструмент, поворачивающий рисунок горизонтально?",
            en: "What tool rotates the picture horizontally?",
          },
          options: [
            { kk: "Өшіргіш", ru: "Ластик", en: "Eraser" },
            { kk: "Бұру", ru: "Поворот", en: "Rotate" },
            { kk: "Сақтау", ru: "Сохранить", en: "Save" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: {
            kk: "Қалпақты қайнардай (айна сияқты) аударатын құрал?",
            ru: "Какой инструмент переворачивает рисунок как зеркало?",
            en: "Which tool flips the picture like a mirror?",
          },
          options: [
            { kk: "Төңкеру", ru: "Отражение", en: "Flip" },
            { kk: "Ашу", ru: "Открыть", en: "Open" },
            { kk: "Өшіру", ru: "Удалить", en: "Erase" },
          ],
          correctIndex: 0,
        },
        {
          type: "choice",
          question: {
            kk: "Жылқы туралы мақал қайсы?",
            ru: "Какая пословица о коне?",
            en: "Which proverb is about a horse?",
          },
          options: [
            { kk: "Ат — ер қанаты", ru: "Конь — крылья джигита", en: "A horse is the wings of a horseman" },
            { kk: "Кітап — білім бұлағы", ru: "Книга — источник знаний", en: "Book is a source of knowledge" },
            { kk: "Еңбек — бақыт кілті", ru: "Труд — ключ счастья", en: "Work is the key to happiness" },
          ],
          correctIndex: 0,
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Tux Paint құралдары", ru: "Инструменты Tux Paint", en: "Tux Paint tools" },
      items: [
        {
          type: "match",
          instruction: {
            kk: "Құралды қызметімен сәйкестендір",
            ru: "Соедини инструмент с его функцией",
            en: "Match tool with function",
          },
          pairs: [
            { left: { kk: "↔️ Бұру", ru: "↔️ Поворот", en: "↔️ Rotate" }, right: { kk: "Суретті көлденеңінен бұрады", ru: "Поворачивает рисунок горизонтально", en: "Rotates horizontally" } },
            { left: { kk: "🙃 Төңкеру", ru: "🙃 Отражение", en: "🙃 Flip" }, right: { kk: "Суретті төңкереді", ru: "Переворачивает рисунок", en: "Flips the picture" } },
            { left: { kk: "💾 Сақтау", ru: "💾 Сохранить", en: "💾 Save" }, right: { kk: "Суретті сақтайды", ru: "Сохраняет рисунок", en: "Saves the picture" } },
            { left: { kk: "🧽 Өшіргіш", ru: "🧽 Ластик", en: "🧽 Eraser" }, right: { kk: "Суретті өшіреді", ru: "Стирает рисунок", en: "Erases the picture" } },
            { left: { kk: "📂 Ашу", ru: "📂 Открыть", en: "📂 Open" }, right: { kk: "Суретті ашады", ru: "Открывает рисунок", en: "Opens the picture" } },
          ],
        },
      ],
    },
    {
      type: "video",
      title: { kk: "Видео", ru: "Видео", en: "Video" },
      video: moveRotateVideo,
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Бұру құралы суретті көлденеңінен бұрады", ru: "Инструмент «Поворот» поворачивает рисунок", en: "Rotate tool rotates picture" },
        { kk: "Төңкеру құралы суретті төңкереді", ru: "Инструмент «Отражение» переворачивает рисунок", en: "Flip tool flips picture" },
        { kk: "Көшіру және қою — қайталанатын объектілер үшін", ru: "Копировать и вставить — для повторов", en: "Copy and paste for repeated objects" },
      ],
      emoji: "🎓",
      image: shapeActionsImg,
    },
  ],
};
