import { LessonData } from "@/lib/types";

import cartoonGameImg from "@/assets/lesson-13/cartoon-game.jpg";
import scratchWindowImg from "@/assets/lesson-13/scratch-window.jpg";
import scratchBlocksImg from "@/assets/lesson-13/scratch-blocks.jpg";

import scratchIntroVideo from "@/assets/lesson-13/videos/13 урок, scratch-cat-wave.mp4";
import scratchInterfaceVideo from "@/assets/lesson-13/videos/13 урок, вторая тема scratch-interface.mp4";
import scratchCatWaveVideo from "@/assets/lesson-13/videos/13 урок, scratch-cat-wave.mp4";
import thirdTopicFirst from "@/assets/lesson-13/videos/13 урок , 3  тема, 1 видео.mp4";
import thirdTopicSecond from "@/assets/lesson-13/videos/13 урок, 3 тема, 2 видео.mp4";
import thirdTopicThird from "@/assets/lesson-13/videos/13 урок, 3 тема, 3 видео.mp4";
import fourTopicFirst from "@/assets/lesson-13/videos/13 урок, 4 тема, 1 видео.mp4";  
import fourTopicSecond from "@/assets/lesson-13/videos/13 урок, 4 тема, 2 видео.mp4"; 


export const lesson13: LessonData = {
  id: "lesson-13",
  title: { kk: "Scratch-пен танысу", ru: "Знакомство со Scratch", en: "Introduction to Scratch" },
  description: {
    kk: "Scratch программалау ортасымен танысу",
    ru: "Знакомство со средой программирования Scratch",
    en: "Introduction to the Scratch programming environment",
  },
  emoji: "🐱",
  color: "from-orange-400 to-amber-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Scratch-пен танысу", ru: "Знакомство со Scratch", en: "Meet Scratch" },
      subtitle: {
        kk: "Анимация мен ойын құрастырамыз!",
        ru: "Создаём анимации и игры!",
        en: "Let's build animations and games!",
      },
      emoji: "🐱",
      color: "from-orange-400 to-amber-500",
    },
    // Кіріспе: мультфильм мен ойын
    {
      type: "topic",
      title: {
        kk: "Мультфильм мен компьютерлік ойын",
        ru: "Мультфильмы и компьютерные игры",
        en: "Cartoons and Computer Games",
      },
      text: {
        kk: "Өзің ұнататын компьютерлік ойындар мен мультфильмдер туралы әңгімеле. Ойын мен мультфильмдердің қалай жасалатынын білесің бе? Оларды программалау тілінің көмегімен жасайды.",
        ru: "Расскажи о любимых компьютерных играх и мультфильмах. Знаешь ли ты, как их делают? Их создают с помощью языка программирования.",
        en: "Tell about your favorite computer games and cartoons. Do you know how they are made? They are created using a programming language.",
      },
      image: cartoonGameImg,
      videos: [scratchIntroVideo, scratchCatWaveVideo],
      emoji: "🎮",
    },
    // Жаңа білім: программалау тілі
    {
      type: "topic",
      title: {
        kk: "Программалау тілі дегеніміз не?",
        ru: "Что такое язык программирования?",
        en: "What is a Programming Language?",
      },
      text: {
        kk: "Программалау тілі — компьютер түсінетін командалардан тұратын тіл. Программа — программалау тілінде жазылған алгоритм. Scratch — программалау ортасы, онда анимация, мультфильм және ойын құрастыруға болады.",
        ru: "Язык программирования — это язык из команд, понятных компьютеру. Программа — это алгоритм, записанный на языке программирования. Scratch — среда программирования, в ней можно создавать анимации, мультфильмы и игры.",
        en: "A programming language is a language of commands the computer understands. A program is an algorithm written in a programming language. Scratch is a programming environment for creating animations, cartoons, and games.",
      },
      image: scratchWindowImg,
      videos: [scratchInterfaceVideo, scratchIntroVideo, scratchCatWaveVideo],
      emoji: "💻",
    },
    // Scratch терезесі
    {
      type: "rules",
      title: { kk: "Scratch терезесі және Мысық спрайты", ru: "Окно Scratch и спрайт Кота", en: "Scratch Window and Cat Sprite" },
      points: [
        {
          kk: "📋 Терезе бөліктері: мәзір, сахна, скрипт алаңы",
          ru: "📋 Части окна: меню, сцена, область скриптов",
          en: "📋 Window parts: menu, stage, scripts area",
        },
        {
          kk: "🚀 Іске қосу → Барлық қолданбалар → Scratch 3",
          ru: "🚀 Пуск → Все приложения → Scratch 3",
          en: "🚀 Start → All apps → Scratch 3",
        },
        {
          kk: "🐱 Сахна кейіпкері — спрайт деп аталады (мысалы, Мысық)",
          ru: "🐱 Персонаж сцены называется спрайт (например, Кот)",
          en: "🐱 Stage character is called a sprite (e.g., Cat)",
        },
        {
          kk: "💾 Жоба құру, ашу, сақтау командалары мәзірде",
          ru: "💾 Команды создания, открытия, сохранения проекта в меню",
          en: "💾 New / open / save commands are in the menu",
        },
      ],
      emoji: "🪟",
    },
    // Жиі қолданылатын командалар
    {
      type: "topic",
      title: {
        kk: "Жиі қолданылатын командалар",
        ru: "Часто используемые команды",
        en: "Frequently Used Commands",
      },
      text: {
        kk: "«Move 10 steps» — спрайтты 10 қадам алға жылжытады. «-10» таңбасы — 10 қадам артқа жылжытады. Жасыл жалауша — жобаны іске қосады. «Say Hello» — спрайт «Сәлем!» деп айтады. «Wait 1 second» — белгілі бір секунд күтеді.",
        ru: "«Move 10 steps» — двигает спрайт на 10 шагов вперёд. «-10» — на 10 шагов назад. Зелёный флажок — запускает проект. «Say Hello» — спрайт говорит «Привет!». «Wait 1 second» — ждёт указанное число секунд.",
        en: "«Move 10 steps» — moves the sprite 10 steps forward. «-10» — 10 steps back. Green flag — starts the project. «Say Hello» — the sprite says «Hello!». «Wait 1 second» — waits the given seconds.",
      },
      image: scratchBlocksImg,
      videos: [thirdTopicFirst, thirdTopicSecond, thirdTopicThird,],
      emoji: "🧩",
    },
    // Скрипт пен жоба
    {
      type: "topic",
      title: {
        kk: "Скрипт және жоба",
        ru: "Скрипт и проект",
        en: "Script and Project",
      },
      text: {
        kk: "Scratch-те командалардан скрипт құрылады. Скриптілерден жоба құрылады. Жобаның жойылмауы үшін оны міндетті түрде сақтайды.",
        ru: "В Scratch из команд собирается скрипт. Из скриптов собирается проект. Чтобы проект не пропал, его обязательно сохраняют.",
        en: "In Scratch, commands form a script. Scripts make up a project. To keep the project safe, you must save it.",
      },
      image: scratchBlocksImg,
      videos: [fourTopicFirst, fourTopicSecond],
      emoji: "💾",
    },
    // Тапсырма: Сырым алгоритмі
    {
      type: "rules",
      title: {
        kk: "Тапсырма: Сырым баланың алгоритмі",
        ru: "Задание: алгоритм мальчика Сырыма",
        en: "Task: Syrym's Algorithm",
      },
      points: [
        { kk: "1. Алға қозғалды", ru: "1. Двинулся вперёд", en: "1. Moved forward" },
        { kk: "2. Сәлем берді", ru: "2. Поздоровался", en: "2. Said hello" },
        { kk: "3. Кідірді (күтті)", ru: "3. Подождал", en: "3. Waited" },
        { kk: "4. Алға қозғалды", ru: "4. Двинулся вперёд", en: "4. Moved forward" },
        { kk: "5. Қоштасты", ru: "5. Попрощался", en: "5. Said goodbye" },
        { kk: "6. Кідірді", ru: "6. Подождал", en: "6. Waited" },
        { kk: "7. Сахнадан шықты", ru: "7. Ушёл со сцены", en: "7. Left the stage" },
      ],
      emoji: "🚶",
    },
    // Интерактив: Мысық скриптісі
    {
      type: "interactive",
      title: {
        kk: "Мысық спрайтының скриптісі",
        ru: "Скрипт спрайта Кота",
        en: "Cat Sprite Script",
      },
      items: [
        {
          type: "choice",
          question: {
            kk: "Программа дегеніміз не?",
            ru: "Что такое программа?",
            en: "What is a program?",
          },
          options: [
            { kk: "Жай мәтін", ru: "Просто текст", en: "Just text" },
            {
              kk: "Программалау тілінде жазылған алгоритм",
              ru: "Алгоритм, записанный на языке программирования",
              en: "An algorithm in a programming language",
            },
            { kk: "Сурет", ru: "Картинка", en: "A picture" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: {
            kk: "Scratch-тегі сахна кейіпкері қалай аталады?",
            ru: "Как называется персонаж сцены в Scratch?",
            en: "What is the stage character in Scratch called?",
          },
          options: [
            { kk: "Скрипт", ru: "Скрипт", en: "Script" },
            { kk: "Спрайт", ru: "Спрайт", en: "Sprite" },
            { kk: "Мәзір", ru: "Меню", en: "Menu" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: {
            kk: "«Move 10 steps» командасы не істейді?",
            ru: "Что делает команда «Move 10 steps»?",
            en: "What does «Move 10 steps» do?",
          },
          options: [
            { kk: "Спрайтты 10 қадам алға жылжытады", ru: "Двигает спрайт на 10 шагов вперёд", en: "Moves the sprite 10 steps forward" },
            { kk: "Спрайтты жояды", ru: "Удаляет спрайт", en: "Deletes the sprite" },
            { kk: "Жобаны сақтайды", ru: "Сохраняет проект", en: "Saves the project" },
          ],
          correctIndex: 0,
        },
      ],
    },
    // Ауысқан әріптер
    {
      type: "game",
      title: {
        kk: "Ауысқан әріптерді тап",
        ru: "Найди перепутанные буквы",
        en: "Unscramble the Letters",
      },
      items: [
        {
          type: "match",
          instruction: {
            kk: "Ауысқан әріптердің дұрыс ретін тап (Scratch сөздерін жина)",
            ru: "Найди правильный порядок букв (собери слова Scratch)",
            en: "Find the correct order of letters (Scratch words)",
          },
          pairs: [
            { left: { kk: "Т СК П РИ", ru: "Т СК П РИ", en: "T SK P RI" }, right: { kk: "СКРИПТ", ru: "СКРИПТ", en: "SCRIPT" } },
            { left: { kk: "СТРАЙП", ru: "СТРАЙП", en: "STRAIP" }, right: { kk: "СПРАЙТ", ru: "СПРАЙТ", en: "SPRITE" } },
            { left: { kk: "ПАММРАОГР", ru: "ПАММРАОГР", en: "PAMMRAOGR" }, right: { kk: "ПРОГРАММА", ru: "ПРОГРАММА", en: "PROGRAM" } },
            { left: { kk: "АЖБО", ru: "АЖБО", en: "AZHBO" }, right: { kk: "ЖОБА", ru: "ЖОБА (проект)", en: "PROJECT" } },
            { left: { kk: "ЗӘМІР", ru: "ЗӘМІР", en: "ZAMIR" }, right: { kk: "МӘЗІР", ru: "МӘЗІР (меню)", en: "MENU" } },
          ],
        },
      ],
      emoji: "🔤",
    },
    // Сөздерді сәйкестендіру
    {
      type: "game",
      title: {
        kk: "Командаларды сәйкестендір",
        ru: "Соедини команды",
        en: "Match the Commands",
      },
      items: [
        {
          type: "match",
          instruction: {
            kk: "Әрекеттің атауын сипаттамасымен сәйкестендір",
            ru: "Соедини название действия с описанием",
            en: "Match the action name with its description",
          },
          pairs: [
            { left: { kk: "қозғалу", ru: "движение", en: "move" }, right: { kk: "10 қадам алға жылжу", ru: "сдвиг на 10 шагов вперёд", en: "move 10 steps forward" } },
            { left: { kk: "сәлем беру", ru: "приветствие", en: "greet" }, right: { kk: "«Сәлем!» деп айту", ru: "сказать «Привет!»", en: "say «Hello!»" } },
            { left: { kk: "кідіру", ru: "пауза", en: "wait" }, right: { kk: "белгілі секунд күту", ru: "ожидать N секунд", en: "wait N seconds" } },
            { left: { kk: "кейіпкер", ru: "персонаж", en: "character" }, right: { kk: "сахнадағы спрайт", ru: "спрайт на сцене", en: "sprite on stage" } },
          ],
        },
      ],
      emoji: "🔗",
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Программалау тілі — компьютер түсінетін командалар", ru: "Язык программирования — команды для компьютера", en: "Programming language — commands the computer understands" },
        { kk: "Scratch — анимация мен ойын құрастыру ортасы", ru: "Scratch — среда для создания анимаций и игр", en: "Scratch — environment for animations and games" },
        { kk: "Спрайт — Scratch сахнасының кейіпкері", ru: "Спрайт — персонаж сцены Scratch", en: "Sprite — character on the Scratch stage" },
        { kk: "Командалардан скрипт, скриптілерден жоба құрылады", ru: "Из команд — скрипт, из скриптов — проект", en: "Commands form a script, scripts form a project" },
      ],
      emoji: "🎓",
    },
  ],
};
