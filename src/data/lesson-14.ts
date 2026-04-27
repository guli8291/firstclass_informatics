import { LessonData } from "@/lib/types";

import soccerImg from "@/assets/lesson-14/soccer-game.jpg";
import fishImg from "@/assets/lesson-14/fish-underwater.jpg";
import spriteBgButtonsImg from "@/assets/lesson-14/sprite-bg-buttons.jpg";
import saigaImg from "@/assets/lesson-14/saiga-steppe.jpg";

import firstTopicFirst from "@/assets/lesson-14/videos/14 урок, 1 тема, 1 видео.mp4";
import firstTopicSecond from "@/assets/lesson-14/videos/14 урок, 1 тема, 2 видео.mp4";
import secondTopicSecond from "@/assets/lesson-14/videos/14 урок, 2 тема, 2 видео.mp4";
import thirdTopicFirst from "@/assets/lesson-14/videos/14 урок, 3 тема, 1 урок.mp4";
import thirdTopicSecond from "@/assets/lesson-14/videos/14 урок, 3 тема, 2 урок.mp4";
import thirdTopicThird from "@/assets/lesson-14/videos/14 урок, 3 тема, 3 видео.mp4";
import fourthTopicFirst from "@/assets/lesson-14/videos/14 урок, 4 тема, 1 видео.mp4";
import fourthTopicSecond from "@/assets/lesson-14/videos/14 урок, 4 тема, 2 видео.mp4";
import fourthTopicThird from "@/assets/lesson-14/videos/14 урок, 4 тема, 3 видео.mp4";

export const lesson14: LessonData = {
  id: "lesson-14",
  title: { kk: "Scratch-те спрайт және фон таңдау", ru: "Выбор спрайта и фона в Scratch", en: "Choosing Sprites and Backgrounds in Scratch" },
  description: {
    kk: "Сахнаға спрайт пен фон қоюды үйрену",
    ru: "Учимся добавлять спрайт и фон на сцену",
    en: "Learning to add sprites and backdrops to the stage",
  },
  emoji: "🎨",
  color: "from-purple-400 to-indigo-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Спрайт және фон", ru: "Спрайт и фон", en: "Sprite and Backdrop" },
      subtitle: {
        kk: "«Теңбіл доп» жобасын құрастырамыз!",
        ru: "Создаём проект «Футбольный мяч»!",
        en: "Let's build the «Soccer Ball» project!",
      },
      emoji: "⚽",
      color: "from-purple-400 to-indigo-500",
    },
    // Кіріспе: спорт
    {
      type: "topic",
      title: {
        kk: "Спорттық ойындар",
        ru: "Спортивные игры",
        en: "Sports Games",
      },
      text: {
        kk: "Қандай спорттық ойындарды білесің? Суреттің кейіпкерлерін ата. Олар қай жерде ойнайды? Ойыңды ортаға сал.",
        ru: "Какие спортивные игры ты знаешь? Назови героев картинки. Где они играют? Поделись своими мыслями.",
        en: "What sports games do you know? Name the characters in the picture. Where do they play? Share your thoughts.",
      },
      image: soccerImg,
      videos: [firstTopicFirst, firstTopicSecond],
      emoji: "⚽",
    },
    // Жаңа білім: сахна, спрайт, фон
    {
      type: "topic",
      title: {
        kk: "Сахна, спрайт, фон",
        ru: "Сцена, спрайт, фон",
        en: "Stage, Sprite, Backdrop",
      },
      text: {
        kk: "Сахна — Scratch-те жоба құрастыратын алаң. Сахнаның кейіпкері — спрайт (мысалы, балық спрайты). Фон — сахнада спрайттың артында тұратын түс немесе сурет (мысалы, суасты суреті).",
        ru: "Сцена — это область, где собирается проект в Scratch. Персонаж сцены — спрайт (например, спрайт рыбки). Фон — это цвет или картинка за спрайтом на сцене (например, картинка под водой).",
        en: "The stage is the area where you build a project in Scratch. The stage character is a sprite (e.g., a fish sprite). The backdrop is the color or picture behind the sprite (e.g., an underwater scene).",
      },
      image: fishImg,
      videos: [firstTopicFirst, secondTopicSecond, firstTopicSecond],
      emoji: "🐠",
    },
    // Спрайт, фон қою батырмалары
    {
      type: "rules",
      title: {
        kk: "Спрайт пен фон қою батырмалары",
        ru: "Кнопки добавления спрайта и фона",
        en: "Sprite and Backdrop Buttons",
      },
      points: [
        {
          kk: "🐱 «Choose a Sprite» — спрайт кітапханасынан спрайт таңдау",
          ru: "🐱 «Choose a Sprite» — выбрать спрайт из библиотеки",
          en: "🐱 «Choose a Sprite» — pick a sprite from the library",
        },
        {
          kk: "🖼️ «Choose a Backdrop» — фон кітапханасынан фон таңдау",
          ru: "🖼️ «Choose a Backdrop» — выбрать фон из библиотеки",
          en: "🖼️ «Choose a Backdrop» — pick a backdrop from the library",
        },
        {
          kk: "🎨 Өз суретіңді жүктеу немесе салу да мүмкін",
          ru: "🎨 Можно загрузить или нарисовать свою картинку",
          en: "🎨 You can also upload or draw your own image",
        },
        {
          kk: "🗑️ Қажетсіз спрайтты жоюға болады",
          ru: "🗑️ Ненужный спрайт можно удалить",
          en: "🗑️ Unwanted sprites can be deleted",
        },
      ],
      emoji: "🔘",
    },
    // Спрайт + фон бірге
    {
      type: "topic",
      title: {
        kk: "Спрайт пен фонды бірге пайдаланамыз",
        ru: "Используем спрайт и фон вместе",
        en: "Using Sprite and Backdrop Together",
      },
      text: {
        kk: "Жоба құру үшін алдымен спрайтты таңдаймыз. Содан кейін жобаға сәйкес фон таңдаймыз. Мысалы, киіктің даладағы қозғалысын сипаттайтын жоба — фон ретінде даланың суретін, спрайт ретінде киікті орналастырамыз.",
        ru: "Чтобы создать проект, сначала выбираем спрайт. Затем выбираем подходящий фон. Например, проект «Сайга в степи» — фон это степь, а спрайт это сайга.",
        en: "To create a project, first choose a sprite. Then pick a matching backdrop. For example, a «Saiga in the steppe» project uses a steppe backdrop and a saiga sprite.",
      },
      image: saigaImg,
      videos: [thirdTopicFirst, thirdTopicSecond, thirdTopicThird],
      emoji: "🦌",
    },
    // «Теңбіл доп» жобасы
    {
      type: "topic",
      title: {
        kk: "«Теңбіл доп» жобасы",
        ru: "Проект «Футбольный мяч»",
        en: "«Soccer Ball» Project",
      },
      text: {
        kk: "Футбол тақырыбына жоба құрастырамыз. Фон — футбол алаңы. Спрайт — футбол добы. Жоба орындалғанда, доп екі қақпаның ішіне кіріп шығады.",
        ru: "Создаём проект на тему футбола. Фон — футбольное поле. Спрайт — футбольный мяч. При запуске проекта мяч заходит в обе ворота.",
        en: "We build a soccer-themed project. Backdrop — soccer field. Sprite — soccer ball. When run, the ball goes into both goals.",
      },
      image: soccerImg,
      videos: [fourthTopicFirst, fourthTopicSecond, fourthTopicThird],
      emoji: "⚽",
    },
    // Алгоритм: блоктарға қандай сандар?
    {
      type: "rules",
      title: {
        kk: "Спрайттың қозғалу алгоритмі",
        ru: "Алгоритм движения спрайта",
        en: "Sprite Movement Algorithm",
      },
      points: [
        { kk: "1) 20 қадам артқа жылжиды (-20)", ru: "1) Двигается на 20 шагов назад (-20)", en: "1) Moves 20 steps back (-20)" },
        { kk: "2) 3 секунд күтеді", ru: "2) Ждёт 3 секунды", en: "2) Waits 3 seconds" },
        { kk: "3) 30 қадам алға жылжиды", ru: "3) Двигается на 30 шагов вперёд", en: "3) Moves 30 steps forward" },
        { kk: "4) 2 секунд күтеді", ru: "4) Ждёт 2 секунды", en: "4) Waits 2 seconds" },
        { kk: "5) 20 қадам артқа жылжиды", ru: "5) Двигается на 20 шагов назад", en: "5) Moves 20 steps back" },
      ],
      emoji: "📐",
    },
    // Интерактив: біліміңді тексер
    {
      type: "interactive",
      title: {
        kk: "Білімді тексер",
        ru: "Проверь знания",
        en: "Test Your Knowledge",
      },
      image: spriteBgButtonsImg,
      items: [
        {
          type: "choice",
          question: {
            kk: "Сахнаға не қою керек?",
            ru: "Что нужно поставить на сцену?",
            en: "What should be placed on the stage?",
          },
          options: [
            { kk: "Тек фон", ru: "Только фон", en: "Only backdrop" },
            { kk: "Спрайт пен фон", ru: "Спрайт и фон", en: "Sprite and backdrop" },
            { kk: "Тек скрипт", ru: "Только скрипт", en: "Only script" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: {
            kk: "Фон дегеніміз не?",
            ru: "Что такое фон?",
            en: "What is a backdrop?",
          },
          options: [
            { kk: "Спрайттың артындағы түс немесе сурет", ru: "Цвет или картинка за спрайтом", en: "Color or picture behind the sprite" },
            { kk: "Команда блогы", ru: "Блок команды", en: "A command block" },
            { kk: "Программа атауы", ru: "Название программы", en: "Program name" },
          ],
          correctIndex: 0,
        },
        {
          type: "choice",
          question: {
            kk: "«Теңбіл доп» жобасында спрайт ретінде не қойылады?",
            ru: "Что является спрайтом в проекте «Футбольный мяч»?",
            en: "What is the sprite in the «Soccer Ball» project?",
          },
          options: [
            { kk: "Футбол алаңы", ru: "Футбольное поле", en: "Soccer field" },
            { kk: "Футбол добы", ru: "Футбольный мяч", en: "Soccer ball" },
            { kk: "Қақпа", ru: "Ворота", en: "Goal" },
          ],
          correctIndex: 1,
        },
      ],
    },
    // Зерттеу
    {
      type: "interactive",
      title: {
        kk: "Зертте: алгоритм бойынша қозғалыс",
        ru: "Исследуй: движение по алгоритму",
        en: "Investigate: Movement by Algorithm",
      },
      items: [
        {
          type: "choice",
          question: {
            kk: "Артқа 20 қадам жылжу үшін блокқа қандай сан жазылады?",
            ru: "Какое число пишется в блок, чтобы двигаться на 20 шагов назад?",
            en: "What number goes in the block to move 20 steps back?",
          },
          options: [
            { kk: "20", ru: "20", en: "20" },
            { kk: "-20", ru: "-20", en: "-20" },
            { kk: "0", ru: "0", en: "0" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: {
            kk: "30 қадам алға жылжу үшін:",
            ru: "Чтобы двигаться на 30 шагов вперёд:",
            en: "To move 30 steps forward:",
          },
          options: [
            { kk: "Move -30 steps", ru: "Move -30 steps", en: "Move -30 steps" },
            { kk: "Move 30 steps", ru: "Move 30 steps", en: "Move 30 steps" },
            { kk: "Wait 30 seconds", ru: "Wait 30 seconds", en: "Wait 30 seconds" },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Сахна — жоба құрастыратын алаң", ru: "Сцена — область создания проекта", en: "Stage — project area" },
        { kk: "Спрайт — сахнаның кейіпкері", ru: "Спрайт — персонаж сцены", en: "Sprite — stage character" },
        { kk: "Фон — спрайттың артындағы сурет немесе түс", ru: "Фон — картинка или цвет за спрайтом", en: "Backdrop — image or color behind the sprite" },
        { kk: "Жоба үшін спрайт пен фонды бірге пайдаланамыз", ru: "Для проекта используем спрайт и фон вместе", en: "Use sprite and backdrop together for a project" },
      ],
      emoji: "🎓",
    },
  ],
};
