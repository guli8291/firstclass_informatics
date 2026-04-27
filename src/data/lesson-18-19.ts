import { LessonData } from "@/lib/types";

import celebrationImg from "@/assets/lesson-18-19/celebration.jpg";

import whatLearnedVideo from "@/assets/lesson-18-19/videos/18 урок,  1тема , 1 видео.mp4";
import finalProjectVideo from "@/assets/lesson-18-19/videos/18 урок, 1тема, 2 видео.mp4";
import celebrationVideo from "@/assets/lesson-18-19/videos/18 урок, видео.mp4";

export const lesson1819: LessonData = {
  id: "lesson-18-19",
  title: { kk: "Шығармашылық тапсырмалар", ru: "Творческие задания", en: "Creative Tasks" },
  description: {
    kk: "Жыл бойы үйренгенді қайталау және шығармашылық жобалар жасау",
    ru: "Повторение изученного за год и создание творческих проектов",
    en: "Reviewing the year and creating creative projects",
  },
  emoji: "🏆",
  color: "from-amber-400 to-orange-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Шығармашылық тапсырмалар", ru: "Творческие задания", en: "Creative Tasks" },
      subtitle: { kk: "Жыл бойы үйренгенді қолдан!", ru: "Примени всё, чему научился за год!", en: "Apply everything you learned this year!" },
      emoji: "🏆",
      color: "from-amber-400 to-orange-500",
    },
    {
      type: "topic",
      title: { kk: "Не үйрендік?", ru: "Чему мы научились?", en: "What Did We Learn?" },
      text: {
        kk: "Жыл бойы біз компьютермен жұмыс, ақпарат түрлері, интернет қауіпсіздігі, Tux Paint, алгоритмдер, Scratch бағдарламалау тілін үйрендік. Енді осының бәрін шығармашылық тапсырмаларда қолданамыз!",
        ru: "За год мы изучили работу с компьютером, виды информации, интернет-безопасность, Tux Paint, алгоритмы и язык программирования Scratch. Теперь применим всё это в творческих заданиях!",
        en: "This year we learned computer skills, types of information, internet safety, Tux Paint, algorithms, and Scratch programming. Now let's apply it all in creative tasks!",
      },
      image: celebrationImg,
      videos: [whatLearnedVideo, finalProjectVideo, celebrationVideo],
    },
    {
      type: "rules",
      title: { kk: "Шығармашылық тапсырмалар тізімі", ru: "Список творческих заданий", en: "List of Creative Tasks" },
      points: [
        { kk: "🎨 Tux Paint-те «Менің достарым» суретін сал", ru: "🎨 Нарисуй в Tux Paint картину «Мои друзья»", en: "🎨 Draw 'My Friends' picture in Tux Paint" },
        { kk: "🐱 Scratch-те мысық би ойнайтын анимация жаса", ru: "🐱 Создай в Scratch анимацию танцующего кота", en: "🐱 Create a dancing cat animation in Scratch" },
        { kk: "📝 «Таңертеңгі іс-әрекет» алгоритмін құр", ru: "📝 Составь алгоритм «Утренние дела»", en: "📝 Create a 'Morning Routine' algorithm" },
        { kk: "🛡️ Интернет қауіпсіздігі постерін жаса", ru: "🛡️ Создай постер по интернет-безопасности", en: "🛡️ Make an internet safety poster" },
        { kk: "🎮 Scratch-те спрайт ұстайтын ойын жаса", ru: "🎮 Создай в Scratch игру «Поймай спрайт»", en: "🎮 Create a 'Catch the Sprite' game in Scratch" },
      ],
      emoji: "📋",
    },
    {
      type: "interactive",
      title: { kk: "Үлкен викторина!", ru: "Большая викторина!", en: "Big Quiz!" },
      items: [
        {
          type: "choice",
          question: { kk: "Scratch-те бағдарламаны не іске қосады?", ru: "Что запускает программу в Scratch?", en: "What starts a program in Scratch?" },
          options: [
            { kk: "Қызыл шеңбер", ru: "Красный круг", en: "Red circle" },
            { kk: "Жасыл жалауша", ru: "Зелёный флажок", en: "Green flag" },
            { kk: "Көк жұлдыз", ru: "Синяя звезда", en: "Blue star" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Алгоритм дегеніміз не?", ru: "Что такое алгоритм?", en: "What is an algorithm?" },
          options: [
            { kk: "Сурет", ru: "Рисунок", en: "Drawing" },
            { kk: "Қадамдар тізбегі", ru: "Последовательность шагов", en: "Sequence of steps" },
            { kk: "Ойын", ru: "Игра", en: "Game" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Tux Paint-те көмекші кім?", ru: "Кто помощник в Tux Paint?", en: "Who is the helper in Tux Paint?" },
          options: [
            { kk: "Мысық", ru: "Кот", en: "Cat" },
            { kk: "Пингвин", ru: "Пингвин", en: "Penguin" },
            { kk: "Аю", ru: "Медведь", en: "Bear" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Интернетте бейтаныс адамға не айтуға болмайды?", ru: "Что нельзя говорить незнакомцу в интернете?", en: "What shouldn't you tell a stranger online?" },
          options: [
            { kk: "Сүйікті түсіңді", ru: "Свой любимый цвет", en: "Your favorite color" },
            { kk: "Үй мекенжайыңды", ru: "Свой домашний адрес", en: "Your home address" },
            { kk: "Сүйікті мультфильміңді", ru: "Свой любимый мультфильм", en: "Your favorite cartoon" },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Тақырыптарды сәйкестендір", ru: "Соедини темы", en: "Match Topics" },
      items: [
        {
          type: "match",
          instruction: { kk: "Тақырыпты мысалмен сәйкестендір", ru: "Соедини тему с примером", en: "Match topic with example" },
          pairs: [
            { left: { kk: "Scratch", ru: "Scratch", en: "Scratch" }, right: { kk: "Спрайт, блоктар, сахна", ru: "Спрайт, блоки, сцена", en: "Sprite, blocks, stage" } },
            { left: { kk: "Tux Paint", ru: "Tux Paint", en: "Tux Paint" }, right: { kk: "Қылқалам, штамп, сызық", ru: "Кисть, штамп, линия", en: "Brush, stamp, line" } },
            { left: { kk: "Алгоритм", ru: "Алгоритм", en: "Algorithm" }, right: { kk: "Қадамдар тізбегі", ru: "Последовательность шагов", en: "Sequence of steps" } },
            { left: { kk: "Қауіпсіздік", ru: "Безопасность", en: "Safety" }, right: { kk: "Құпия сөзді сақтау", ru: "Хранить пароль в тайне", en: "Keep password secret" } },
          ],
        },
      ],
    },
    {
      type: "video",
      title: { kk: "Видео", ru: "Видео", en: "Video" },
      video: celebrationVideo,
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Жыл бойы көп нәрсе үйрендік!", ru: "За год мы многому научились!", en: "We learned a lot this year!" },
        { kk: "Компьютер, ақпарат, алгоритм, Tux Paint, Scratch — негізгі тақырыптар", ru: "Компьютер, информация, алгоритм, Tux Paint, Scratch — основные темы", en: "Computer, information, algorithm, Tux Paint, Scratch — main topics" },
        { kk: "Шығармашылық жобалар — білімді бекіту тәсілі", ru: "Творческие проекты — способ закрепить знания", en: "Creative projects — a way to reinforce knowledge" },
        { kk: "Келесі жылы одан да қызықты болады! 🚀", ru: "В следующем году будет ещё интереснее! 🚀", en: "Next year will be even more exciting! 🚀" },
      ],
      emoji: "🏆",
    },
  ],
};
