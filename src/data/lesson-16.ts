import { LessonData } from "@/lib/types";

import morningExerciseImg from "@/assets/lesson-16/morning-exercise.jpg";
import fruitsVegetablesImg from "@/assets/lesson-16/fruits-vegetables.jpg";
import parkAliyaImg from "@/assets/lesson-16/park-aliya.jpg";
import ayranStepsImg from "@/assets/lesson-16/ayran-steps.jpg";

import firstTopicFirst from "@/assets/lesson-16/videos/16 урок, 1 тема, 1 видео.mp4";
import firstTopicSecond from "@/assets/lesson-16/videos/16 урок, 1 тема,  2 видео.mp4";
import secondTopicFirst from "@/assets/lesson-16/videos/16 урок, 2 тема, 1 видео.mp4";
import secondTopicSecond from "@/assets/lesson-16/videos/16 урок, 2 тема, 2 видео.mp4";
import secondTopicThird from "@/assets/lesson-16/videos/16 урок, 2 тема, 3 видео.mp4";
import thirdTopicFirst from "@/assets/lesson-16/videos/16 урок, 3 тема, 1 видео.mp4";
import thirdTopicSecond from "@/assets/lesson-16/videos/16 урок, 3 тема, 2 видео.mp4";

export const lesson16: LessonData = {
  id: "lesson-16",
  title: { kk: "«Көгөніс және жеміс» жобасы", ru: "Проект «Овощи и фрукты»", en: "«Vegetables and Fruits» Project" },
  description: {
    kk: "Сызықтық алгоритм бойынша Scratch жобасын құру",
    ru: "Создание проекта Scratch по линейному алгоритму",
    en: "Building a Scratch project from a linear algorithm",
  },
  emoji: "🍉",
  color: "from-green-400 to-emerald-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Көгөніс және жеміс", ru: "Овощи и фрукты", en: "Vegetables and Fruits" },
      subtitle: {
        kk: "Сызықтық алгоритм бойынша жоба жасаймыз!",
        ru: "Создаём проект по линейному алгоритму!",
        en: "Building a project with a linear algorithm!",
      },
      emoji: "🍉",
      color: "from-green-400 to-emerald-500",
    },
    {
      type: "topic",
      title: {
        kk: "Күнделікті алгоритмдер",
        ru: "Ежедневные алгоритмы",
        en: "Daily Algorithms",
      },
      text: {
        kk: "Сен күнделікті өмірде әртүрлі алгоритмдерді орындайсың. Жаттығу жасау, тамақтану, мектепке бару — бұлардың әрқайсысы бірнеше қадамнан тұрады. Scratch-те де жоба алгоритмінің дұрыс құрылуы өте маңызды.",
        ru: "В жизни ты выполняешь много алгоритмов. Зарядка, еда, дорога в школу — каждый состоит из шагов. В Scratch тоже очень важно правильно построить алгоритм проекта.",
        en: "Every day you follow many algorithms. Exercise, eating, going to school — each has steps. In Scratch, building the right algorithm is also very important.",
      },
      image: morningExerciseImg,
      videos: [firstTopicFirst, firstTopicSecond],
      emoji: "🌅",
    },
    {
      type: "topic",
      title: {
        kk: "Жобаның мазмұны",
        ru: "Содержание проекта",
        en: "Project Content",
      },
      text: {
        kk: "Жобаның кейіпкері — бала спрайты. Көгөністер мен жемістер түзудің бойында тұрады. Көгөніс — қарбыз, жемістер — банан мен алма спрайттары. Бала әр спрайтты көрсетіп, оның көгөніс пе, жеміс пе екенін айтады.",
        ru: "Главный герой — спрайт мальчика. Овощи и фрукты стоят в ряд. Овощ — арбуз, фрукты — банан и яблоко. Мальчик показывает на каждый спрайт и говорит, овощ это или фрукт.",
        en: "The main character is a boy sprite. Vegetables and fruits stand in a row. Vegetable — watermelon, fruits — banana and apple. The boy points to each one and says if it's a vegetable or a fruit.",
      },
      image: fruitsVegetablesImg,
      videos: [secondTopicFirst, secondTopicSecond, secondTopicThird],
      emoji: "🍎",
    },
    {
      type: "rules",
      title: {
        kk: "Жоба қадамдары",
        ru: "Шаги проекта",
        en: "Project Steps",
      },
      points: [
        {
          kk: "1️⃣ Scratch кітапханасынан 5 спрайт таңда (бала + 4 жеміс/көгөніс)",
          ru: "1️⃣ Выбери из библиотеки Scratch 5 спрайтов (мальчик + 4 овоща/фрукта)",
          en: "1️⃣ Pick 5 sprites from the Scratch library (boy + 4 fruits/vegs)",
        },
        {
          kk: "2️⃣ Спрайттарды түзудің бойына орналастыр",
          ru: "2️⃣ Расставь спрайты в ряд",
          en: "2️⃣ Place sprites in a row",
        },
        {
          kk: "3️⃣ Бала спрайтының скриптісін құр (3-сурет)",
          ru: "3️⃣ Собери скрипт мальчика",
          en: "3️⃣ Build the boy's script",
        },
        {
          kk: "4️⃣ Әр жеміс/көгөністің скриптісін жаз («қарбыз», «банан», «алма»)",
          ru: "4️⃣ Напиши скрипт каждого («арбуз», «банан», «яблоко»)",
          en: "4️⃣ Write a script for each («watermelon», «banana», «apple»)",
        },
        {
          kk: "5️⃣ Жобаны іске қосып, тексер",
          ru: "5️⃣ Запусти проект и проверь",
          en: "5️⃣ Run the project and test",
        },
      ],
      emoji: "📋",
    },
    {
      type: "interactive",
      title: {
        kk: "Айран ұйыту алгоритмі",
        ru: "Алгоритм заквашивания айрана",
        en: "Ayran Making Algorithm",
      },
      image: ayranStepsImg,
      items: [
        {
          type: "choice",
          question: {
            kk: "Айран ұйытудың бірінші қадамы қандай?",
            ru: "Какой первый шаг заквашивания айрана?",
            en: "What is the first step of making ayran?",
          },
          options: [
            { kk: "Сүтті құмыраға құю", ru: "Налить молоко в банку", en: "Pour milk into a jar" },
            { kk: "Айранды стақанға құю", ru: "Налить айран в стакан", en: "Pour ayran into a glass" },
            { kk: "Дастарханды жинау", ru: "Убрать со стола", en: "Clear the table" },
          ],
          correctIndex: 0,
        },
        {
          type: "choice",
          question: {
            kk: "Сүтке ұйытқыны қашан қосамыз?",
            ru: "Когда добавляем закваску в молоко?",
            en: "When do we add the starter to the milk?",
          },
          options: [
            { kk: "Сүтті құйғаннан кейін", ru: "После того как налили молоко", en: "After pouring the milk" },
            { kk: "Айран дайын болғанда", ru: "Когда айран готов", en: "When ayran is ready" },
            { kk: "Ешқашан", ru: "Никогда", en: "Never" },
          ],
          correctIndex: 0,
        },
      ],
    },
    {
      type: "topic",
      title: {
        kk: "Саябақта (Әлия)",
        ru: "В парке (Алия)",
        en: "In the Park (Aliya)",
      },
      text: {
        kk: "Әлия саябақта қыдырып жүр. Ол тоқтап, жан-жағын тамашалады. Балмұздақ сатып алды. Орындыққа барып отырды. Әлияның іс-әрекетінің алгоритмін сөзбен сипатта және блок-схеманы толықтыр.",
        ru: "Алия гуляет в парке. Останавливается, осматривается. Покупает мороженое. Садится на скамейку. Опиши алгоритм действий Алии словами и заполни блок-схему.",
        en: "Aliya walks in the park. She stops and looks around. Buys ice cream. Sits on a bench. Describe Aliya's algorithm in words and complete the flowchart.",
      },
      image: parkAliyaImg,
      videos: [thirdTopicFirst, thirdTopicSecond],
      emoji: "🌳",
    },
    {
      type: "game",
      title: {
        kk: "Әлияның алгоритмін ретімен қой",
        ru: "Расставь алгоритм Алии",
        en: "Order Aliya's Algorithm",
      },
      items: [
        {
          type: "match",
          instruction: {
            kk: "Қадам нөмірін іс-әрекетпен сәйкестендір",
            ru: "Соедини номер шага с действием",
            en: "Match step number to action",
          },
          pairs: [
            { left: { kk: "1", ru: "1", en: "1" }, right: { kk: "Саябақта қыдырды", ru: "Гуляла в парке", en: "Walked in the park" } },
            { left: { kk: "2", ru: "2", en: "2" }, right: { kk: "Тоқтап тамашалады", ru: "Остановилась посмотреть", en: "Stopped to look around" } },
            { left: { kk: "3", ru: "3", en: "3" }, right: { kk: "Балмұздақ сатып алды", ru: "Купила мороженое", en: "Bought ice cream" } },
            { left: { kk: "4", ru: "4", en: "4" }, right: { kk: "Орындыққа отырды", ru: "Села на скамейку", en: "Sat on a bench" } },
          ],
        },
      ],
      emoji: "🔢",
    },
    {
      type: "interactive",
      title: {
        kk: "«Жүйрік қыз» жобасы",
        ru: "Проект «Бегунья»",
        en: "«Fast Runner Girl» Project",
      },
      items: [
        {
          type: "choice",
          question: {
            kk: "Қыз жүгіруін қалай бастауы керек?",
            ru: "Как девочка должна начать бежать?",
            en: "How should the girl start running?",
          },
          options: [
            { kk: "Бірден жылдам", ru: "Сразу быстро", en: "Immediately fast" },
            { kk: "Жайлап бастап, біртіндеп жылдамдатады", ru: "Медленно, постепенно ускоряясь", en: "Slowly, then gradually faster" },
            { kk: "Артқа жылжиды", ru: "Двигается назад", en: "Moves backwards" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: {
            kk: "Жобаны бастамас бұрын не істеу керек?",
            ru: "Что нужно сделать до начала проекта?",
            en: "What must you do before starting a project?",
          },
          options: [
            { kk: "Бірден скрипт жазу", ru: "Сразу писать скрипт", en: "Write the script right away" },
            { kk: "Алгоритмін құру", ru: "Составить алгоритм", en: "Plan the algorithm" },
            { kk: "Компьютерді өшіру", ru: "Выключить компьютер", en: "Turn off the computer" },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "rules",
      title: {
        kk: "Шығармашылық тапсырма",
        ru: "Творческое задание",
        en: "Creative Task",
      },
      points: [
        {
          kk: "🍓 «Көгөніс және жеміс» жобасына құлпынайдың спрайтын қос",
          ru: "🍓 Добавь в проект спрайт клубники",
          en: "🍓 Add a strawberry sprite to the project",
        },
        {
          kk: "🧱 Оның скриптісін құрастыр",
          ru: "🧱 Собери для неё скрипт",
          en: "🧱 Build its script",
        },
        {
          kk: "⏱️ Скриптінің секундтарын өзгерт — жоба дұрыс жұмыс істесін",
          ru: "⏱️ Поменяй секунды в скрипте, чтобы проект работал правильно",
          en: "⏱️ Adjust the seconds so the project works correctly",
        },
      ],
      emoji: "✨",
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Сызықтық алгоритм — қадамдар бірінен соң бірі орындалады", ru: "Линейный алгоритм — шаги выполняются один за другим", en: "Linear algorithm — steps run one after another" },
        { kk: "Жобада әр спрайттың өз скриптісі болады", ru: "У каждого спрайта свой скрипт", en: "Each sprite has its own script" },
        { kk: "Алгоритмді алдын ала құру жобаны жеңілдетеді", ru: "Заранее составленный алгоритм облегчает работу", en: "Planning the algorithm makes the project easier" },
        { kk: "Скриптегі секундтар спрайттардың дұрыс ретпен орындалуын қамтамасыз етеді", ru: "Секунды в скрипте обеспечивают правильную очерёдность", en: "Seconds in scripts keep the right order" },
      ],
      emoji: "🎓",
    },
  ],
};
