import { LessonData } from "@/lib/types";

import colorWheelImg from "@/assets/lesson-07/color-wheel.jpg";
import geometricOrnamentsImg from "@/assets/lesson-07/geometric-ornaments.jpg";
import rulesColorPaletteImg from "@/assets/lesson-07/Gemini_Generated_Image (2).png";

import basicShapesVideo from "@/assets/lesson-07/videos/Creating_geometric_ornament.mp4";
import drawShapesVideo from "@/assets/lesson-07/videos/Creating_ornament_with.mp4";
import shapesBounceVideo from "@/assets/lesson-07/videos/shapes-bounce.mp4.asset.json";
import colorsWarmAndCoolVideo from "@/assets/lesson-07/videos/Hand_drawing_warm.mp4";
export const lesson07: LessonData = {
  id: "lesson-07",
  title: { kk: "Фигуралар. Түстер палитрасы", ru: "Фигуры. Палитра цветов", en: "Shapes. Color Palette" },
  description: {
    kk: "Түстер палитрасы, құйып бояу, фигуралардан ою-өрнек құрастыру",
    ru: "Палитра цветов, заливка и составление орнаментов из фигур",
    en: "Color palette, fill tool, building ornaments from shapes",
  },
  emoji: "🎨",
  color: "from-indigo-400 to-blue-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Фигуралар және түстер", ru: "Фигуры и цвета", en: "Shapes and Colors" },
      subtitle: {
        kk: "Жылы мен суық түстермен танысамыз!",
        ru: "Узнаем тёплые и холодные цвета!",
        en: "Discover warm and cool colors!",
      },
      emoji: "🎨",
      color: "from-indigo-400 to-blue-500",
    },
    {
      type: "topic",
      title: { kk: "Жылы және суық түстер", ru: "Тёплые и холодные цвета", en: "Warm and Cool Colors" },
      text: {
        kk: "Түстер жылы (қызыл, сары, қызғылт сары) және суық (көк, жасыл, күлгін) болып бөлінеді. Үйлесімді таңдау үшін түстер шеңберін пайдаланамыз.",
        ru: "Цвета бывают тёплые (красный, жёлтый, оранжевый) и холодные (синий, зелёный, фиолетовый). Для гармонии используем цветовой круг.",
        en: "Colors are warm (red, yellow, orange) and cool (blue, green, purple). Use the color wheel to pick harmonious colors.",
      },
      image: colorWheelImg,
      video: colorsWarmAndCoolVideo,
    },
    {
      type: "rules",
      title: { kk: "Түстер палитрасы", ru: "Палитра цветов", en: "Color Palette" },
      image: rulesColorPaletteImg,
      points: [
        { kk: "🎨 Палитра — бір мезетте көрінетін түстер жинағы", ru: "🎨 Палитра — набор цветов, видимых сразу", en: "🎨 Palette — set of colors shown at once" },
        { kk: "🪣 Толтыру (Заполнить) — жабық аймақты құйып бояйды", ru: "🪣 Заливка — заполняет цветом замкнутую область", en: "🪣 Fill — fills a closed area with color" },
        { kk: "🔥 Жылы түстер — қызыл, сары, қызғылт сары", ru: "🔥 Тёплые — красный, жёлтый, оранжевый", en: "🔥 Warm — red, yellow, orange" },
        { kk: "❄️ Суық түстер — көк, жасыл, күлгін", ru: "❄️ Холодные — синий, зелёный, фиолетовый", en: "❄️ Cool — blue, green, purple" },
      ],
      emoji: "🌈",
    },
    {
      type: "topic",
      title: { kk: "Фигуралардан ою-өрнек", ru: "Орнамент из фигур", en: "Ornaments from Shapes" },
      text: {
        kk: "Боялған үшбұрыштарды, дөңгелектерді, ромбтарды біріктіріп, әсем ою-өрнек құрастыруға болады. Тінтуірмен фигура мен түсті таңдап, жұмыс алаңына орналастырамыз.",
        ru: "Соединяя цветные треугольники, круги, ромбы, можно составить красивый орнамент. Мышкой выбираем фигуру и цвет, затем размещаем на холсте.",
        en: "By combining colored triangles, circles, and rhombuses, you can build a beautiful ornament. Pick a shape and color with the mouse, then place it on the canvas.",
      },
      image: geometricOrnamentsImg,
      video: basicShapesVideo,
    },
    {
      type: "interactive",
      title: { kk: "Білімді тексер!", ru: "Проверь знания!", en: "Test Your Knowledge!" },
      items: [
        {
          type: "choice",
          question: { kk: "Tux Paint палитрасында неше негізгі түс бар?", ru: "Сколько основных цветов в палитре Tux Paint?", en: "How many main colors are in the Tux Paint palette?" },
          options: [
            { kk: "10", ru: "10", en: "10" },
            { kk: "17", ru: "17", en: "17" },
            { kk: "25", ru: "25", en: "25" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Қай түс жылы түске жатады?", ru: "Какой цвет тёплый?", en: "Which color is warm?" },
          options: [
            { kk: "Көк", ru: "Синий", en: "Blue" },
            { kk: "Жасыл", ru: "Зелёный", en: "Green" },
            { kk: "Қызыл", ru: "Красный", en: "Red" },
          ],
          correctIndex: 2,
        },
        {
          type: "choice",
          question: { kk: "Жабық аймақты тез бояу үшін қандай құрал?", ru: "Каким инструментом быстро залить область?", en: "Which tool fills an area quickly?" },
          options: [
            { kk: "Қылқалам", ru: "Кисть", en: "Brush" },
            { kk: "Толтыру", ru: "Заливка", en: "Fill" },
            { kk: "Өшіргіш", ru: "Ластик", en: "Eraser" },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Түстерді бөл", ru: "Раздели цвета", en: "Sort the Colors" },
      items: [
        {
          type: "match",
          instruction: { kk: "Түсті температурамен сәйкестендір", ru: "Соедини цвет с температурой", en: "Match color with its temperature" },
          pairs: [
            { left: { kk: "🔴 Қызыл", ru: "🔴 Красный", en: "🔴 Red" }, right: { kk: "🔥 Жылы", ru: "🔥 Тёплый", en: "🔥 Warm" } },
            { left: { kk: "🟡 Сары", ru: "🟡 Жёлтый", en: "🟡 Yellow" }, right: { kk: "🔥 Жылы", ru: "🔥 Тёплый", en: "🔥 Warm" } },
            { left: { kk: "🔵 Көк", ru: "🔵 Синий", en: "🔵 Blue" }, right: { kk: "❄️ Суық", ru: "❄️ Холодный", en: "❄️ Cool" } },
            { left: { kk: "🟢 Жасыл", ru: "🟢 Зелёный", en: "🟢 Green" }, right: { kk: "❄️ Суық", ru: "❄️ Холодный", en: "❄️ Cool" } },
          ],
        },
      ],
    },
    {
      type: "video",
      title: { kk: "Видео: Фигуралар", ru: "Видео: Фигуры", en: "Video: Shapes" },
      video: drawShapesVideo,
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Палитра — бір мезетте көрінетін түстер жинағы", ru: "Палитра — набор цветов, видимых сразу", en: "Palette — set of colors visible at once" },
        { kk: "Толтыру құралы жабық аймақты тез бояйды", ru: "Заливка быстро красит замкнутую область", en: "Fill tool quickly colors a closed area" },
        { kk: "Түстер жылы және суық болып бөлінеді", ru: "Цвета бывают тёплые и холодные", en: "Colors are warm and cool" },
      ],
      emoji: "⭐",
    },
  ],
};
