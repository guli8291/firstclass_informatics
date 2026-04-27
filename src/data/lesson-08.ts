import { LessonData } from "@/lib/types";

import fairyTaleHeroesImg from "@/assets/lesson-08/fairy-tale-heroes.jpg";
import magicEffectsImg from "@/assets/lesson-08/magic-effects.jpg";
import horsesPastureImg from "@/assets/lesson-08/horses-pasture.jpg";

import drawPictureVideo from "@/assets/lesson-08/videos/штамп.mp4";
import editPictureVideo from "@/assets/lesson-08/videos/Видеопроект 5.mp4";
import undoRedoVideo from "@/assets/lesson-08/videos/undo-redo.mp4";
import bookOpensVideo from "@/assets/lesson-08/videos/Book_opens.mp4";
import drawingVideo from "@/assets/lesson-08/videos/Видео урок 8.mp4";

export const lesson08: LessonData = {
  id: "lesson-08",
  title: { kk: "Сурет салу және оны өңдеу", ru: "Рисование и обработка картинок", en: "Drawing and Editing Pictures" },
  description: {
    kk: "Штамп пен Магия құралдары, көшіру, үлкейту және ертегі кейіпкерлерінің суреті",
    ru: "Инструменты Штамп и Магия, копирование, увеличение и герои сказок",
    en: "Stamp and Magic tools, copy, magnify and fairy tale heroes",
  },
  emoji: "✨",
  color: "from-rose-400 to-pink-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Сурет салу және өңдеу", ru: "Рисование и обработка", en: "Drawing and Editing" },
      subtitle: {
        kk: "Штамп пен Магия — сиқырлы құралдар!",
        ru: "Штамп и Магия — волшебные инструменты!",
        en: "Stamp and Magic — magical tools!",
      },
      emoji: "✨",
      color: "from-rose-400 to-pink-500",
    },
    {
      type: "topic",
      title: { kk: "Қазақ халық ертегілері", ru: "Казахские народные сказки", en: "Kazakh Folk Tales" },
      text: {
        kk: "Ертегі — халық ауыз әдебиетінің бай қазынасы. Tux Paint-те ертегі кейіпкерлерінің суретін салуға, әсер беруге болады.",
        ru: "Сказка — богатое наследие народного творчества. В Tux Paint можно нарисовать героев сказок и добавить эффекты.",
        en: "A fairy tale is a rich treasure of folk literature. In Tux Paint you can draw fairy-tale heroes and add effects.",
      },
      image: fairyTaleHeroesImg,
      video: bookOpensVideo,
    },
    {
      type: "topic",
      title: { kk: "Штамп құралы", ru: "Инструмент Штамп", en: "Stamp Tool" },
      text: {
        kk: "Штамп құралын шертсек, дайын суреттер жинағы ашылады. Қажетті суретті таңдап, жұмыс алаңына бірнеше рет көшіріп қоюға болады. Үлкейту құралымен оның көлемін үлкейтуге болады.",
        ru: "При нажатии на Штамп открывается набор готовых картинок. Можно выбрать нужную и поставить её несколько раз. Инструментом увеличения можно изменить размер.",
        en: "Click the Stamp tool to open a set of ready images. Pick one and place it several times. Use the magnifier to enlarge it.",
      },
      image: horsesPastureImg,
      video: drawPictureVideo,
    },
    {
      type: "topic",
      title: { kk: "Магия құралы", ru: "Инструмент Магия", en: "Magic Tool" },
      text: {
        kk: "Магия — қызықты әсерлер жинағы: Кемпірқосақ, Кірпіш, Шөп, Гүл, Көбік, Құйын, Мультфильм. Әр әсер суретке өзгеше көрініс береді.",
        ru: "Магия — набор интересных эффектов: Радуга, Кирпичи, Трава, Цветы, Пузыри, Вихрь, Мультфильм. Каждый эффект меняет картинку.",
        en: "Magic is a set of fun effects: Rainbow, Bricks, Grass, Flowers, Bubbles, Twirl, Cartoon. Each one transforms the picture.",
      },
      image: magicEffectsImg,
      videos: [editPictureVideo, undoRedoVideo],
    },
    {
      type: "rules",
      title: { kk: "Магия әсерлері", ru: "Эффекты Магии", en: "Magic Effects" },
      points: [
        { kk: "🌈 Кемпірқосақ — кемпірқосақ түстерімен сызады", ru: "🌈 Радуга — рисует радужными цветами", en: "🌈 Rainbow — draws in rainbow colors" },
        { kk: "🧱 Кірпіш — кірпіш өрнегін салады", ru: "🧱 Кирпичи — рисует кирпичный узор", en: "🧱 Bricks — draws a brick pattern" },
        { kk: "🌱 Шөп — жасыл шөп өсіреді", ru: "🌱 Трава — рисует зелёную траву", en: "🌱 Grass — draws green grass" },
        { kk: "🌸 Гүл — әдемі гүлдер салады", ru: "🌸 Цветы — рисует красивые цветы", en: "🌸 Flower — draws pretty flowers" },
        { kk: "🎬 Мультфильм — суретті мультфильмге ұқсатады", ru: "🎬 Мультфильм — превращает рисунок в мультяшный", en: "🎬 Cartoon — turns the image into a cartoon" },
      ],
      emoji: "✨",
    },
    {
      type: "interactive",
      title: { kk: "Білімді тексер!", ru: "Проверь знания!", en: "Test Your Knowledge!" },
      items: [
        {
          type: "choice",
          question: { kk: "Дайын суреттерді жұмыс алаңына қою үшін қандай құрал?", ru: "Каким инструментом ставят готовые картинки?", en: "Which tool places ready stamps?" },
          options: [
            { kk: "Магия", ru: "Магия", en: "Magic" },
            { kk: "Штамп", ru: "Штамп", en: "Stamp" },
            { kk: "Өшіргіш", ru: "Ластик", en: "Eraser" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Кемпірқосақ әсері қай құралда?", ru: "В каком инструменте эффект Радуги?", en: "Which tool has the Rainbow effect?" },
          options: [
            { kk: "Пішіндер", ru: "Формы", en: "Shapes" },
            { kk: "Магия", ru: "Магия", en: "Magic" },
            { kk: "Сақтау", ru: "Сохранить", en: "Save" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Қойылған суретті үлкейту үшін қандай құрал?", ru: "Каким инструментом увеличить картинку?", en: "Which tool enlarges the picture?" },
          options: [
            { kk: "Үлкейту", ru: "Увеличение", en: "Magnify" },
            { kk: "Өшіргіш", ru: "Ластик", en: "Eraser" },
            { kk: "Бояу", ru: "Краска", en: "Paint" },
          ],
          correctIndex: 0,
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Магия әсерлерін сәйкестендір", ru: "Соедини эффекты Магии", en: "Match Magic Effects" },
      items: [
        {
          type: "match",
          instruction: { kk: "Магия құралын суретімен сәйкестендір", ru: "Соедини эффект Магии с тем, что он рисует", en: "Match the Magic tool with what it draws" },
          pairs: [
            { left: { kk: "🧱 Кірпіш", ru: "🧱 Кирпичи", en: "🧱 Bricks" }, right: { kk: "Қабырға", ru: "Стена", en: "Wall" } },
            { left: { kk: "🌱 Шөп", ru: "🌱 Трава", en: "🌱 Grass" }, right: { kk: "Жасыл шөп", ru: "Зелень", en: "Greenery" } },
            { left: { kk: "🌸 Гүл", ru: "🌸 Цветы", en: "🌸 Flower" }, right: { kk: "Гүлзар", ru: "Клумба", en: "Flowerbed" } },
            { left: { kk: "🌈 Кемпірқосақ", ru: "🌈 Радуга", en: "🌈 Rainbow" }, right: { kk: "Түрлі түс", ru: "Разноцветие", en: "Many colors" } },
          ],
        },
      ],
    },
    {
      type: "video",
      title: { kk: "Видео: Сурет салу", ru: "Видео: Рисование", en: "Video: Drawing" },
      video: drawingVideo,
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Штамп — дайын суреттерді жұмыс алаңына қояды", ru: "Штамп ставит готовые картинки на холст", en: "Stamp places ready images on the canvas" },
        { kk: "Магия — қызықты әсерлер береді", ru: "Магия добавляет интересные эффекты", en: "Magic adds fun effects" },
        { kk: "Үлкейту құралымен суретті үлкейтуге болады", ru: "Инструментом увеличения меняем размер", en: "The magnifier resizes pictures" },
      ],
      emoji: "⭐",
    },
  ],
};
