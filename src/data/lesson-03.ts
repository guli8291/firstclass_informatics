import { LessonData } from "@/lib/types";

import sensesImg from "@/assets/lesson-03/senses.jpg";
import winterImg from "@/assets/lesson-03/winter-senses.jpg";
import environmentsImg from "@/assets/lesson-03/environments.jpg";
import senseOrgans from "@/assets/lesson-03/органы чувств.jpg";

import fiveSensesVideo from "@/assets/lesson-03/videos/Видео_для_урока_о_чувствах_человека.mp4";
import signalMessageVideo from "@/assets/lesson-02/videos/Scent_and_taste.mp4";
import infoSignalVideo from "@/assets/lesson-02/videos/Student_hand_on.mp4";
import soundAndMusic from "@/assets/lesson-02/videos/Sounds_and_music.mp4";
import Environment from "@/assets/lesson-03/videos/Camera_moves_through.mp4";
import childExperiencingSenses from "@/assets/lesson-03/videos/Child_experiencing_senses.mp4";

export const lesson03: LessonData = {
  id: "lesson-03",
  title: { kk: "Біздің айналамыздағы ақпарат", ru: "Информация вокруг нас", en: "Information Around Us" },
  description: {
    kk: "Ақпаратты сезім мүшелері арқылы қабылдау",
    ru: "Восприятие информации органами чувств",
    en: "Perceiving information through senses",
  },
  emoji: "👁️",
  color: "from-orange-400 to-pink-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Біздің айналамыздағы ақпарат", ru: "Информация вокруг нас", en: "Information Around Us" },
      subtitle: {
        kk: "Біз әлемді 5 сезім мүшесі арқылы танимыз!",
        ru: "Мы познаём мир 5 органами чувств!",
        en: "We learn the world through 5 senses!",
      },
      emoji: "🧠",
      color: "from-orange-400 to-pink-500",
    },
    {
      type: "topic",
      title: { kk: " Қыс мезгілі", ru: "Зима", en: "Winter" },
      text: {
        kk: "Балалардың беті неге қызарған? Қай құстың даусын естіді? Сәбіздің дәмі қандай? — Біз қоршаған әлемді сезім мүшелері арқылы танимыз.",
        ru: "Почему щёки детей покраснели? Какой птицы голос они слышали? Какой вкус у моркови? — Мы познаём окружающий мир органами чувств.",
        en: "Why are the kids' cheeks red? Which bird did they hear? What does the carrot taste like? — We perceive the world through our senses.",
      },
      image: winterImg,
      videos: [fiveSensesVideo],
    },
    {
      type: "topic",
      title: { kk: "Жаңа білім", ru: "Новые знания", en: "New Knowledge" },
      text: {
        kk: "Біз ақпарат әлемінде өмір сүреміз. Ақпаратты қабылдау түрлері: көру, есту, иіс сезу, дәм сезу, сипап сезу. Хабар — мағынасы бар ақпарат. Сигнал — хабарды қашықтан тасымалдау тәсілі. Адам ақпаратты көз, құлақ, мұрын, тіл және тері арқылы қабылдайды.",
        ru: "Мы живём в мире информации. Виды восприятия: зрение, слух, обоняние, вкус, осязание. Сообщение — информация со смыслом. Сигнал — способ передачи сообщения. Человек воспринимает информацию глазами, ушами, носом, языком и кожей.",
        en: "We live in a world of information. Types of perception: sight, hearing, smell, taste, touch. A message is meaningful information. A signal is a way to transmit a message. Humans perceive through eyes, ears, nose, tongue, and skin.",
      },
      image: sensesImg,
      videos: [soundAndMusic, signalMessageVideo, infoSignalVideo],
    },
    {
      type: "rules",
      title: { kk: "Сезім мүшелері", ru: "Органы чувств", en: "Sense Organs" },
      image: senseOrgans,
      points: [
        { kk: "👁️ Көру — көз арқылы (мультфильм, түстер)", ru: "👁️ Зрение — глазами (мультфильмы, цвета)", en: "👁️ Sight — eyes (cartoons, colors)" },
        { kk: "👂 Есту — құлақ арқылы (әңгіме, музыка)", ru: "👂 Слух — ушами (речь, музыка)", en: "👂 Hearing — ears (speech, music)" },
        { kk: "👃 Иіс сезу — мұрын арқылы (бауырсақтың иісі)", ru: "👃 Обоняние — носом (запах баурсака)", en: "👃 Smell — nose (smell of baursak)" },
        { kk: "👅 Дәм сезу — тіл арқылы (құрттың дәмі)", ru: "👅 Вкус — языком (вкус курта)", en: "👅 Taste — tongue (taste of kurt)" },
        { kk: "✋ Сипап сезу — тері арқылы (ыстық, суық)", ru: "✋ Осязание — кожей (горячо, холодно)", en: "✋ Touch — skin (hot, cold)" },
      ],
      emoji: "🧩",
    },
    {
      type: "topic",
      title: { kk: "Бізді қоршаған орта", ru: "Окружающая среда", en: "Environment" },
      text: {
        kk: "Орманда, жайлауда, тауда немесе шөлде қандай сезім мүшелері ақпаратты көбірек қабылдайды? Мысалы, мұрын арқылы таудың таза ауасымен дем аламыз.",
        ru: "В лесу, на пастбище, в горах или пустыне какие органы чувств воспринимают больше информации? Например, носом дышим чистым горным воздухом.",
        en: "In a forest, pasture, mountains or desert — which senses receive more information? For example, with our nose we breathe clean mountain air.",
      },
      image: environmentsImg,
      videos: [Environment],
    },
    {
      type: "interactive",
      title: { kk: "Сәйкестендір", ru: "Соедини", en: "Match" },
      items: [
        {
          type: "choice",
          question: { kk: "Бауырсақтың иісін қай мүше арқылы сеземіз?", ru: "Каким органом чувствуем запах баурсака?", en: "Which organ senses the smell of baursak?" },
          options: [
            { kk: "Көз", ru: "Глаза", en: "Eyes" },
            { kk: "Мұрын", ru: "Нос", en: "Nose" },
            { kk: "Құлақ", ru: "Уши", en: "Ears" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Заттың ыстық не суық екенін қалай білеміз?", ru: "Как узнаём, горячий предмет или холодный?", en: "How do we know if an object is hot or cold?" },
          options: [
            { kk: "Тіл арқылы", ru: "Языком", en: "By tongue" },
            { kk: "Тері арқылы", ru: "Кожей", en: "By skin" },
            { kk: "Көз арқылы", ru: "Глазами", en: "By eyes" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Адамда неше сезім мүшесі бар?", ru: "Сколько у человека органов чувств?", en: "How many senses does a human have?" },
          options: [
            { kk: "3", ru: "3", en: "3" },
            { kk: "5", ru: "5", en: "5" },
            { kk: "7", ru: "7", en: "7" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Сигнал дегеніміз не?", ru: "Что такое сигнал?", en: "What is a signal?" },
          options: [
            { kk: "Сезім мүшесі", ru: "Орган чувств", en: "Sense organ" },
            { kk: "Хабарды қашықтан тасымалдау тәсілі", ru: "Способ передачи сообщения на расстояние", en: "A way to transmit a message at a distance" },
            { kk: "Дәмді тағам", ru: "Вкусная еда", en: "Tasty food" },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Сезім мүшелерін сәйкестендір", ru: "Соедини органы чувств", en: "Match the senses" },
      items: [
        {
          type: "match",
          instruction: { kk: "Әр сезім мүшесін мысалмен сәйкестендір", ru: "Соедини орган чувств с примером", en: "Match each sense with an example" },
          pairs: [
            { left: { kk: "👁️ Көз", ru: "👁️ Глаза", en: "👁️ Eyes" }, right: { kk: "Мультфильм", ru: "Мультфильм", en: "Cartoon" } },
            { left: { kk: "👂 Құлақ", ru: "👂 Уши", en: "👂 Ears" }, right: { kk: "Музыка", ru: "Музыка", en: "Music" } },
            { left: { kk: "👃 Мұрын", ru: "👃 Нос", en: "👃 Nose" }, right: { kk: "Бауырсақтың иісі", ru: "Запах баурсака", en: "Smell of baursak" } },
            { left: { kk: "👅 Тіл", ru: "👅 Язык", en: "👅 Tongue" }, right: { kk: "Құрттың дәмі", ru: "Вкус курта", en: "Taste of kurt" } },
            { left: { kk: "✋ Тері", ru: "✋ Кожа", en: "✋ Skin" }, right: { kk: "Жылы шай", ru: "Тёплый чай", en: "Warm tea" } },
          ],
        },
      ],
    },
    {
      type: "video",
      title: { kk: "Видео: 5 сезім мүшесі", ru: "Видео: 5 чувств", en: "Video: 5 senses" },
      video: childExperiencingSenses,
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Адамда 5 сезім мүшесі бар: көз, құлақ, мұрын, тіл, тері", ru: "5 органов чувств: глаза, уши, нос, язык, кожа", en: "5 senses: eyes, ears, nose, tongue, skin" },
        { kk: "Ақпарат — жаңа мәлімет, жаңа білім", ru: "Информация — новые сведения, знания", en: "Information — new data, knowledge" },
        { kk: "Хабар мағынасы бар, сигнал — оны жеткізу тәсілі", ru: "Сообщение имеет смысл, сигнал — способ его передачи", en: "Message has meaning; signal is the way to deliver it" },
      ],
      emoji: "🌟",
    },
  ],
};
