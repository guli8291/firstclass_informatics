import { LessonData } from "@/lib/types";

import horseRaceImg from "@/assets/lesson-11/horse-race.jpg";
import askarNauryzImg from "@/assets/lesson-11/askar-nauryz.jpg";
import blockSchemeImg from "@/assets/lesson-11/block-scheme.jpg";
import dominoImg from "@/assets/lesson-11/domino.jpg";
import morningRoutineImg from "@/assets/lesson-11/morning-routine.jpg";

import algorithmTypesVideo from "@/assets/lesson-11/videos/algorithm-types.mp4.asset.json";
import algorithmExamplesVideo from "@/assets/lesson-11/videos/algorithm-examples.mp4.asset.json";
import branchingFlowVideo from "@/assets/lesson-11/videos/branching-flow.mp4.asset.json";

export const lesson11: LessonData = {
  id: "lesson-11",
  title: { kk: "Алгоритм", ru: "Алгоритм", en: "Algorithm" },
  description: {
    kk: "Алгоритм, блок-схема және сызықтық алгоритм",
    ru: "Алгоритм, блок-схема и линейный алгоритм",
    en: "Algorithm, block diagram and linear algorithm",
  },
  emoji: "📋",
  color: "from-violet-400 to-purple-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Алгоритм", ru: "Алгоритм", en: "Algorithm" },
      subtitle: {
        kk: "«Алгоритм», «сызықтық алгоритм» ұғымдарымен танысасың",
        ru: "Познакомишься с понятиями «алгоритм», «линейный алгоритм»",
        en: "You will learn the concepts of 'algorithm' and 'linear algorithm'",
      },
      emoji: "📋",
      color: "from-violet-400 to-purple-500",
    },
    {
      type: "topic",
      title: { kk: "Бәйге алаңы", ru: "Скачки", en: "Horse Racing" },
      text: {
        kk: "Мен бос уақытымда атқа мінгенді ұнатамын. Шабандоз бәйге алаңын толық бір айналды. Шабандоздың әрекетін ретімен ата. Алаңды толық бір айналу оқиғасын неше әрекетке бөлуге болады?",
        ru: "В свободное время я люблю кататься на лошади. Жокей сделал полный круг по скаковой площадке. Назови действия жокея по порядку. На сколько действий можно разделить полный круг?",
        en: "In my free time I love horse riding. The jockey made a full lap around the racing track. Name the jockey's actions in order. How many actions make up one full lap?",
      },
      image: horseRaceImg,
      videos: [algorithmExamplesVideo.url],
    },
    {
      type: "topic",
      title: { kk: "Алгоритм дегеніміз не?", ru: "Что такое алгоритм?", en: "What is an algorithm?" },
      text: {
        kk: "Алгоритм — белгілі бір қадамдардан кейін нәтижеге жететін әрекеттердің реті. Алгоритмдегі жекелеген әрекет алгоритмнің қадамы деп аталады. Ретімен орындалатын алгоритм сызықтық алгоритм деп аталады.",
        ru: "Алгоритм — последовательность действий, которая после определённых шагов приводит к результату. Отдельное действие называется шагом алгоритма. Алгоритм, выполняемый по порядку, называется линейным.",
        en: "An algorithm is a sequence of actions that leads to a result after a number of steps. A single action is called a step. An algorithm performed in order is called a linear algorithm.",
      },
      image: blockSchemeImg,
      videos: [algorithmTypesVideo.url],
    },
    {
      type: "rules",
      title: { kk: "Блок-схема бөліктері", ru: "Части блок-схемы", en: "Block diagram parts" },
      points: [
        { kk: "🟢 Басы — алгоритмнің басталуы", ru: "🟢 Начало — старт алгоритма", en: "🟢 Start — beginning of algorithm" },
        { kk: "🟦 Әрекет — орындалатын қадам", ru: "🟦 Действие — выполняемый шаг", en: "🟦 Action — executed step" },
        { kk: "🔴 Соңы — алгоритмнің аяқталуы", ru: "🔴 Конец — завершение алгоритма", en: "🔴 End — finish of algorithm" },
        { kk: "➡️ Блоктар бағдаршамен байланысады", ru: "➡️ Блоки соединяются стрелками", en: "➡️ Blocks are connected with arrows" },
      ],
      emoji: "🧩",
    },
    {
      type: "topic",
      title: { kk: "Асқардың қозғалысы", ru: "Движение Аскара", en: "Askar's movement" },
      text: {
        kk: "Асқар Наурыз мерекесіне бара жатыр. Оның қозғалыс алгоритмі: Басы → Алға → Солға → Алға → Алға → Алға → Оңға → Алға → Соңы. Бұл сызықтық алгоритм.",
        ru: "Аскар идёт на праздник Наурыз. Его алгоритм движения: Начало → Вперёд → Налево → Вперёд → Вперёд → Вперёд → Направо → Вперёд → Конец. Это линейный алгоритм.",
        en: "Askar goes to Nauryz festival. His movement: Start → Forward → Left → Forward → Forward → Forward → Right → Forward → End. This is a linear algorithm.",
      },
      image: askarNauryzImg,
      videos: [branchingFlowVideo.url],
    },
    {
      type: "interactive",
      title: { kk: "Білімді тексер!", ru: "Проверь знания!", en: "Test your knowledge!" },
      items: [
        {
          type: "choice",
          question: {
            kk: "Алгоритм дегеніміз не?",
            ru: "Что такое алгоритм?",
            en: "What is an algorithm?",
          },
          options: [
            { kk: "Бір ғана команда", ru: "Одна команда", en: "A single command" },
            { kk: "Нәтижеге жететін әрекеттер реті", ru: "Последовательность действий, ведущих к результату", en: "Sequence of actions leading to a result" },
            { kk: "Сурет салу", ru: "Рисование картинки", en: "Drawing a picture" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: {
            kk: "Ретімен орындалатын алгоритм қалай аталады?",
            ru: "Как называется алгоритм, выполняемый по порядку?",
            en: "What is an algorithm performed in order called?",
          },
          options: [
            { kk: "Циклдік", ru: "Циклический", en: "Loop" },
            { kk: "Сызықтық", ru: "Линейный", en: "Linear" },
            { kk: "Тармақталған", ru: "Разветвлённый", en: "Branching" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: {
            kk: "Блок-схеманың басы қандай блокпен белгіленеді?",
            ru: "Каким блоком обозначается начало блок-схемы?",
            en: "Which block marks the start of a flowchart?",
          },
          options: [
            { kk: "🔴 Қызыл соңы", ru: "🔴 Красный «Конец»", en: "🔴 Red 'End'" },
            { kk: "🟢 Жасыл басы", ru: "🟢 Зелёный «Начало»", en: "🟢 Green 'Start'" },
            { kk: "🟦 Көк әрекет", ru: "🟦 Синее «Действие»", en: "🟦 Blue 'Action'" },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Асқардың таңы", ru: "Утро Аскара", en: "Askar's morning" },
      items: [
        {
          type: "match",
          instruction: {
            kk: "Таңертеңгі әрекеттерді ретімен орналастыр",
            ru: "Расположи утренние действия по порядку",
            en: "Arrange the morning actions in order",
          },
          pairs: [
            { left: { kk: "1-қадам", ru: "1-й шаг", en: "Step 1" }, right: { kk: "Ұйқыдан тұру", ru: "Проснуться", en: "Wake up" } },
            { left: { kk: "2-қадам", ru: "2-й шаг", en: "Step 2" }, right: { kk: "Тіс жуу", ru: "Чистить зубы", en: "Brush teeth" } },
            { left: { kk: "3-қадам", ru: "3-й шаг", en: "Step 3" }, right: { kk: "Таңғы ас ішу", ru: "Завтракать", en: "Eat breakfast" } },
            { left: { kk: "4-қадам", ru: "4-й шаг", en: "Step 4" }, right: { kk: "Мектепке бару", ru: "Идти в школу", en: "Go to school" } },
          ],
        },
      ],
    },
    {
      type: "topic",
      title: { kk: "Домино тастары", ru: "Домино", en: "Dominoes" },
      text: {
        kk: "Домино тастарын бір тас қалмайтындай орналастыру алгоритмін құр. Құрған алгоритміңді сөзбен сипатта. Ол да сызықтық алгоритм болады.",
        ru: "Составь алгоритм расстановки домино так, чтобы не осталось ни одной костяшки. Опиши свой алгоритм словами. Это тоже линейный алгоритм.",
        en: "Make an algorithm to arrange dominoes so that no piece is left. Describe your algorithm in words. This is also a linear algorithm.",
      },
      image: dominoImg,
    },
    {
      type: "game",
      title: { kk: "Ағаш отырғызу", ru: "Посадка дерева", en: "Planting a tree" },
      items: [
        {
          type: "match",
          instruction: {
            kk: "Ағаш отырғызу қадамдарын ретімен орналастыр",
            ru: "Расположи шаги посадки дерева по порядку",
            en: "Order the tree planting steps",
          },
          pairs: [
            { left: { kk: "1", ru: "1", en: "1" }, right: { kk: "Шұңқыр қазу", ru: "Выкопать яму", en: "Dig a hole" } },
            { left: { kk: "2", ru: "2", en: "2" }, right: { kk: "Шұңқырға салу", ru: "Положить в яму", en: "Place into hole" } },
            { left: { kk: "3", ru: "3", en: "3" }, right: { kk: "Топырақпен жабу", ru: "Засыпать землёй", en: "Cover with soil" } },
            { left: { kk: "4", ru: "4", en: "4" }, right: { kk: "Су құю", ru: "Полить водой", en: "Water it" } },
          ],
        },
      ],
    },
    {
      type: "video",
      title: { kk: "Видео", ru: "Видео", en: "Video" },
      video: algorithmTypesVideo.url,
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Алгоритм — нәтижеге жететін әрекеттер реті", ru: "Алгоритм — последовательность действий, ведущих к результату", en: "Algorithm — sequence of actions to a result" },
        { kk: "Қадам — алгоритмнің жекелеген әрекеті", ru: "Шаг — отдельное действие алгоритма", en: "Step — single action of algorithm" },
        { kk: "Блок-схема — басы, әрекет, соңы блоктары", ru: "Блок-схема — блоки начала, действия и конца", en: "Flowchart — start, action, end blocks" },
        { kk: "Сызықтық алгоритм — қадамдар ретімен орындалады", ru: "Линейный алгоритм — шаги по порядку", en: "Linear algorithm — steps in order" },
      ],
      emoji: "🎓",
    },
  ],
};
