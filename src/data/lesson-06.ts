import { LessonData } from "@/lib/types";

import ornamentItemsImg from "@/assets/lesson-06/ornament-items.jpg";
import tuxPaintWindowImg from "@/assets/lesson-06/tux-paint-window.jpg";
import shapesRowImg from "@/assets/lesson-06/shapes-row.jpg";
import tuxPaintToolsImg from "@/assets/lesson-06/Gemini_Generated_Image.png";

import tuxPaintVideo from "@/assets/lesson-06/videos/tuxPaint.mp4";
import ornamentToolsVideo from "@/assets/lesson-06/videos/Kazakh_objects_geometric.mp4";
import paintToolsVideo from "@/assets/lesson-06/videos/shapesTuxPaintVideo.mp4";
import dancingToolsVideo from "@/assets/lesson-06/videos/dancing-tools.mp4";

export const lesson06: LessonData = {
  id: "lesson-06",
  title: { kk: "Tux Paint графикалық редакторы", ru: "Графический редактор Tux Paint", en: "Tux Paint Graphics Editor" },
  description: {
    kk: "Tux Paint бағдарламасымен танысу және фигуралар салу",
    ru: "Знакомство с Tux Paint и рисование фигур",
    en: "Meet Tux Paint and draw shapes",
  },
  emoji: "🎨",
  color: "from-pink-400 to-orange-400",
  slides: [
    {
      type: "hero",
      title: { kk: "Tux Paint графикалық редакторы", ru: "Графический редактор Tux Paint", en: "Tux Paint Graphics Editor" },
      subtitle: {
        kk: "Компьютерде сурет саламыз!",
        ru: "Рисуем на компьютере!",
        en: "Let's draw on the computer!",
      },
      emoji: "🎨",
      color: "from-pink-400 to-orange-400",
    },
    {
      type: "topic",
      title: { kk: "Ою-өрнек дегеніміз не?", ru: "Что такое орнамент?", en: "What is an Ornament?" },
      text: {
        kk: "Қазақ халқы тұрмыстық бұйымдар мен киімді ою-өрнекпен безендірген. Көбіне геометриялық пішіндегі ою-өрнектер кездеседі.",
        ru: "Казахи украшали бытовые предметы и одежду орнаментом. Часто встречаются орнаменты геометрической формы.",
        en: "Kazakhs decorated household items and clothes with ornaments. Geometric ornaments are very common.",
      },
      image: ornamentItemsImg,
      video: ornamentToolsVideo,
    },
    {
      type: "topic",
      title: { kk: "Графикалық редактор", ru: "Графический редактор", en: "Graphics Editor" },
      text: {
        kk: "Компьютерде сурет салуға арналған программа графикалық редактор деп аталады. Tux Paint — балаларға арналған графикалық редактор. Онда сурет салуға, түзетуге, көшіруге, бояуға болады.",
        ru: "Программа для рисования на компьютере называется графический редактор. Tux Paint — редактор для детей. В нём можно рисовать, исправлять, копировать и раскрашивать.",
        en: "A program for drawing on a computer is called a graphics editor. Tux Paint is an editor for kids. You can draw, edit, copy, and color in it.",
      },
      image: tuxPaintWindowImg,
      video: tuxPaintVideo,
    },
    {
      type: "rules",
      title: { kk: "Tux Paint құралдары", ru: "Инструменты Tux Paint", en: "Tux Paint Tools" },
      image: tuxPaintToolsImg,
      points: [
        { kk: "🖌️ Бояу (Краска) — қылқаламмен сурет салады", ru: "🖌️ Краска — рисует кистью", en: "🖌️ Paint — draw with a brush" },
        { kk: "🧽 Өшіргіш (Ластик) — суретті өшіреді", ru: "🧽 Ластик — стирает рисунок", en: "🧽 Eraser — erases the drawing" },
        { kk: "🔷 Пішіндер (Формы) — әртүрлі фигуралар салады", ru: "🔷 Формы — рисует разные фигуры", en: "🔷 Shapes — draws different shapes" },
        { kk: "💾 Сақтау (Сохранить) — суретті сақтайды", ru: "💾 Сохранить — сохраняет рисунок", en: "💾 Save — saves the drawing" },
      ],
      emoji: "🛠️",
    },
    {
      type: "topic",
      title: { kk: "Стандартты фигуралар", ru: "Стандартные фигуры", en: "Standard Shapes" },
      text: {
        kk: "Пішіндер құралында түзу, дөңгелек, ромб, үшбұрыш, тіктөртбұрыш бар. Олардың түсін өзгертіп, ою-өрнек құрастыруға болады.",
        ru: "В инструменте Формы есть линии, круг, ромб, треугольник, прямоугольник. Можно менять их цвет и составлять орнаменты.",
        en: "The Shapes tool has lines, circle, rhombus, triangle, rectangle. You can change colors and build ornaments.",
      },
      image: shapesRowImg,
      videos: [paintToolsVideo, dancingToolsVideo],
    },
    {
      type: "interactive",
      title: { kk: "Білімді тексер!", ru: "Проверь знания!", en: "Test Your Knowledge!" },
      items: [
        {
          type: "choice",
          question: { kk: "Компьютерде сурет салуға арналған программа қалай аталады?", ru: "Как называется программа для рисования на компьютере?", en: "What is a drawing program on a computer called?" },
          options: [
            { kk: "Мәтіндік редактор", ru: "Текстовый редактор", en: "Text editor" },
            { kk: "Графикалық редактор", ru: "Графический редактор", en: "Graphics editor" },
            { kk: "Калькулятор", ru: "Калькулятор", en: "Calculator" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Қате суретті жою үшін қандай құрал керек?", ru: "Какой инструмент стирает ошибку?", en: "Which tool erases mistakes?" },
          options: [
            { kk: "Бояу", ru: "Краска", en: "Paint" },
            { kk: "Сақтау", ru: "Сохранить", en: "Save" },
            { kk: "Өшіргіш", ru: "Ластик", en: "Eraser" },
          ],
          correctIndex: 2,
        },
        {
          type: "choice",
          question: { kk: "Үшбұрыш салу үшін қай құрал керек?", ru: "Каким инструментом нарисовать треугольник?", en: "Which tool draws a triangle?" },
          options: [
            { kk: "Пішіндер", ru: "Формы", en: "Shapes" },
            { kk: "Өшіргіш", ru: "Ластик", en: "Eraser" },
            { kk: "Сақтау", ru: "Сохранить", en: "Save" },
          ],
          correctIndex: 0,
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Құралдарды сәйкестендір", ru: "Соедини инструменты", en: "Match the Tools" },
      items: [
        {
          type: "match",
          instruction: { kk: "Құралды қызметімен сәйкестендір", ru: "Соедини инструмент с действием", en: "Match the tool with its action" },
          pairs: [
            { left: { kk: "🖌️ Бояу", ru: "🖌️ Краска", en: "🖌️ Paint" }, right: { kk: "Қылқаламмен сурет", ru: "Рисует кистью", en: "Draws with brush" } },
            { left: { kk: "🧽 Өшіргіш", ru: "🧽 Ластик", en: "🧽 Eraser" }, right: { kk: "Суретті өшіреді", ru: "Стирает рисунок", en: "Erases drawing" } },
            { left: { kk: "🔷 Пішіндер", ru: "🔷 Формы", en: "🔷 Shapes" }, right: { kk: "Фигура салады", ru: "Рисует фигуры", en: "Draws shapes" } },
            { left: { kk: "💾 Сақтау", ru: "💾 Сохранить", en: "💾 Save" }, right: { kk: "Файлды жазады", ru: "Записывает файл", en: "Saves the file" } },
          ],
        },
      ],
    },
    {
      type: "video",
      title: { kk: "Видео: Tux Paint", ru: "Видео: Tux Paint", en: "Video: Tux Paint" },
      video: tuxPaintVideo,
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Tux Paint — компьютерде сурет салуға арналған графикалық редактор", ru: "Tux Paint — графический редактор для рисования на компьютере", en: "Tux Paint is a graphics editor for drawing on a computer" },
        { kk: "Бояу, Өшіргіш, Пішіндер, Сақтау — негізгі құралдар", ru: "Краска, Ластик, Формы, Сохранить — основные инструменты", en: "Paint, Eraser, Shapes, Save — main tools" },
        { kk: "Фигуралардан ою-өрнек құрастыруға болады", ru: "Из фигур можно составлять орнаменты", en: "You can build ornaments from shapes" },
      ],
      emoji: "⭐",
    },
  ],
};
