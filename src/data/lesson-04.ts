import { LessonData } from "@/lib/types";

import sourceReceiverImg from "@/assets/lesson-04/source-receiver.jpg";
import infoExamplesImg from "@/assets/lesson-04/info-examples.jpg";
import infoTypesRowImg from "@/assets/lesson-04/info-types-row.jpg";
import infoChainImg from "@/assets/lesson-04/info-chain.jpg";
import aliyaPhoneImg from "@/assets/lesson-04/aliya-phone-call.jpg";
import sourceTypesImg from "@/assets/lesson-04/5 видов информации.jpg";


import infoTypesVideo from "@/assets/lesson-04/videos/Digits_forming_word.mp4";
import sourceReceiverVideo from "@/assets/lesson-04/videos/Information_travels_from.mp4";
import infoExamplesVideo from "@/assets/lesson-04/videos/Information_in_pictures.mp4";
import teacherStudentVideo from "@/assets/lesson-04/videos/Boy_tells_girl.mp4";
import aliySpeakingOn from "@/assets/lesson-04/videos/Aliya_speaking_on.mp4";
import BoyReceivesInfo from "@/assets/lesson-04/videos/Boy_receives_information.mp4";
import ChildLearnsAbout from "@/assets/lesson-04/videos/Child_learns_about.mp4";


export const lesson04: LessonData = {
  id: "lesson-04",
  title: { kk: "Ақпарат және компьютер", ru: "Информация и компьютер", en: "Information and Computer" },
  description: {
    kk: "Ақпараттың түрлері, көзі, қабылдағышы және байланыс арнасы",
    ru: "Виды информации, источник, приёмник и канал связи",
    en: "Types of information, source, receiver and channel",
  },
  emoji: "📊",
  color: "from-purple-400 to-rose-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Ақпарат және компьютер", ru: "Информация и компьютер", en: "Information and Computer" },
      subtitle: {
        kk: "Ақпарат қандай түрде беріледі?",
        ru: "В каком виде передаётся информация?",
        en: "In what forms is information presented?",
      },
      emoji: "📊",
      color: "from-purple-400 to-rose-500",
    },
    {
      type: "topic",
      title: { kk: "Ақпарат түрлері", ru: "Виды информации", en: "Types of Information" },
      text: {
        kk: "Ақпарат ұсынылу түрі бойынша 5-ке бөлінеді: сандық, мәтіндік, графикалық, дыбыстық және бейнелік. Барлығын компьютер өңдей алады.",
        ru: "Информация по способу представления делится на 5 видов: числовая, текстовая, графическая, звуковая и видео. Все они обрабатываются компьютером.",
        en: "Information has 5 forms: numeric, text, graphic, audio, and video. All can be processed by a computer.",
      },
      image: infoTypesRowImg,
      videos: [infoTypesVideo],
    },
    {
      type: "rules",
      title: { kk: "Ақпараттың 5 түрі", ru: "5 видов информации", en: "5 Information Types" },
      image: sourceTypesImg,
      points: [
        { kk: "🔢 Сандық — сағат, телефон нөмірі (5+3=8)", ru: "🔢 Числовая — часы, номер телефона (5+3=8)", en: "🔢 Numeric — clock, phone number (5+3=8)" },
        { kk: "📝 Мәтіндік — кітап, әріптер мен сөздер", ru: "📝 Текстовая — книга, буквы и слова", en: "📝 Text — book, letters and words" },
        { kk: "🎨 Графикалық — сурет, сызба", ru: "🎨 Графическая — рисунок, схема", en: "🎨 Graphic — picture, diagram" },
        { kk: "🔊 Дыбыстық — әуен, дауыс", ru: "🔊 Звуковая — мелодия, голос", en: "🔊 Audio — melody, voice" },
        { kk: "🎬 Бейнелік — мультфильм, видео", ru: "🎬 Видео — мультфильм, видеоролик", en: "🎬 Video — cartoon, video clip" },
      ],
      emoji: "📋",
    },
    {
      type: "topic",
      title: { kk: "Ақпарат көзі мен қабылдағыш", ru: "Источник и приёмник", en: "Source and Receiver" },
      text: {
        kk: "Ақпарат көзі — ақпаратты беруші. Қабылдағыш — ақпаратты алушы. Олардың арасы — байланыс арнасы (интернет, пошта, телефон, радио, теледидар). Мысалы: компьютер — көз, адам — қабылдағыш.",
        ru: "Источник — передаёт информацию. Приёмник — получает её. Между ними — канал связи (интернет, почта, телефон, радио, ТВ). Пример: компьютер — источник, человек — приёмник.",
        en: "Source sends information. Receiver gets it. Between them — channel (internet, mail, phone, radio, TV). Example: computer — source, human — receiver.",
      },
      image: infoChainImg,
      videos: [sourceReceiverVideo, teacherStudentVideo],
    },
    {
      type: "topic",
      title: { kk: " Әлия қоңырау шалды", ru: " Алия звонит", en: " Aliya is calling" },
      text: {
        kk: "Әлия: «Жаңалықпен бөлісемін», — деп сыныптасына қоңырау шалды. Әлия — ақпарат көзі, телефон — байланыс арнасы, сыныптас — қабылдағыш.",
        ru: "Алия: «Поделюсь новостью», — позвонила однокласснику. Алия — источник, телефон — канал, одноклассник — приёмник.",
        en: "Aliya called her classmate: \"I'll share the news.\" Aliya — source, phone — channel, classmate — receiver.",
      },
      image: aliyaPhoneImg,
      video: aliySpeakingOn
    },
    {
      type: "topic",
      title: { kk: "Мысалдар", ru: "Примеры", en: "Examples" },
      text: {
        kk: "Кітап → мәтіндік. Сурет → графикалық. Ән → дыбыстық. Мультфильм → бейне. Сағат → сандық.",
        ru: "Книга → текстовая. Рисунок → графическая. Песня → звуковая. Мультфильм → видео. Часы → числовая.",
        en: "Book → text. Picture → graphic. Song → audio. Cartoon → video. Clock → numeric.",
      },
      image: infoExamplesImg,
      videos: [infoExamplesVideo],
    },
    {
      type: "interactive",
      title: { kk: "Білімді тексер!", ru: "Проверь знания!", en: "Test Your Knowledge!" },
      items: [
        {
          type: "choice",
          question: { kk: "Сурет қандай ақпарат түрі?", ru: "Рисунок — какой вид информации?", en: "A picture is what type?" },
          options: [
            { kk: "Дыбыстық", ru: "Звуковая", en: "Audio" },
            { kk: "Графикалық", ru: "Графическая", en: "Graphic" },
            { kk: "Сандық", ru: "Числовая", en: "Numeric" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Әлия телефонмен қоңырау шалды. Ол кім?", ru: "Алия позвонила. Она кто?", en: "Aliya called by phone. She is?" },
          options: [
            { kk: "Қабылдағыш", ru: "Приёмник", en: "Receiver" },
            { kk: "Байланыс арнасы", ru: "Канал связи", en: "Channel" },
            { kk: "Ақпарат көзі", ru: "Источник информации", en: "Source of information" },
          ],
          correctIndex: 2,
        },
        {
          type: "choice",
          question: { kk: "Әлия мен сыныптасының арасындағы байланыс арнасы?", ru: "Канал связи между Алиёй и одноклассником?", en: "What's the channel between Aliya and classmate?" },
          options: [
            { kk: "Кітап", ru: "Книга", en: "Book" },
            { kk: "Телефон", ru: "Телефон", en: "Phone" },
            { kk: "Теледидар", ru: "Телевизор", en: "TV" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Мультфильм қандай ақпарат түрі?", ru: "Мультфильм — какой вид?", en: "Cartoon is what type?" },
          options: [
            { kk: "Мәтіндік", ru: "Текстовая", en: "Text" },
            { kk: "Бейнелік", ru: "Видео", en: "Video" },
            { kk: "Сандық", ru: "Числовая", en: "Numeric" },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Мысалды ақпарат түрімен сәйкестендір", ru: "Соедини пример с видом", en: "Match example with type" },
      items: [
        {
          type: "match",
          instruction: { kk: "Әр мысалды дұрыс ақпарат түрімен сәйкестендір", ru: "Соедини каждый пример с правильным видом", en: "Match each example with the correct type" },
          pairs: [
            { left: { kk: "📖 Кітап", ru: "📖 Книга", en: "📖 Book" }, right: { kk: "Мәтіндік", ru: "Текстовая", en: "Text" } },
            { left: { kk: "🎵 Ән", ru: "🎵 Песня", en: "🎵 Song" }, right: { kk: "Дыбыстық", ru: "Звуковая", en: "Audio" } },
            { left: { kk: "🖼️ Сурет", ru: "🖼️ Рисунок", en: "🖼️ Picture" }, right: { kk: "Графикалық", ru: "Графическая", en: "Graphic" } },
            { left: { kk: "5+3=8", ru: "5+3=8", en: "5+3=8" }, right: { kk: "Сандық", ru: "Числовая", en: "Numeric" } },
            { left: { kk: "🎬 Мультфильм", ru: "🎬 Мультфильм", en: "🎬 Cartoon" }, right: { kk: "Бейнелік", ru: "Video", en: "Video" } },
          ],
        },
        {
          type: "match",
          instruction: { kk: "Әр рөлді мысалмен сәйкестендір", ru: "Соедини роль с примером", en: "Match each role with an example" },
          pairs: [
            { left: { kk: "Ақпарат көзі", ru: "Источник", en: "Source" }, right: { kk: "Мұғалім", ru: "Учитель", en: "Teacher" } },
            { left: { kk: "Байланыс арнасы", ru: "Канал связи", en: "Channel" }, right: { kk: "Телефон", ru: "Телефон", en: "Phone" } },
            { left: { kk: "Қабылдағыш", ru: "Приёмник", en: "Receiver" }, right: { kk: "Оқушы", ru: "Ученик", en: "Student" } },
          ],
        },
      ],
    },
    {
      type: "topic",
      title: { kk: "Ақпарат көзі ↔ қабылдағыш", ru: "Источник ↔ приёмник", en: "Source ↔ receiver" },
      text: {
        kk: "2-суреттегі компьютер — ақпарат көзі, ал адам — қабылдағыш. Байланыс арналарына: интернет, пошта, телефон, теледидар, радио жатады.",
        ru: "Компьютер — источник, человек — приёмник. Каналы: интернет, почта, телефон, ТВ, радио.",
        en: "Computer is the source, human the receiver. Channels: internet, mail, phone, TV, radio.",
      },
      image: sourceReceiverImg,
      video: BoyReceivesInfo,
    },
    {
      type: "video",
      title: { kk: "Видео: ақпарат түрлері", ru: "Видео: виды информации", en: "Video: types" },
      video: ChildLearnsAbout,
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Ақпараттың 5 түрі: сандық, мәтіндік, графикалық, дыбыстық, бейне", ru: "5 видов: числовая, текстовая, графическая, звуковая, видео", en: "5 types: numeric, text, graphic, audio, video" },
        { kk: "Ақпарат көзі → байланыс арнасы → қабылдағыш", ru: "Источник → канал → приёмник", en: "Source → channel → receiver" },
        { kk: "Графика — «сызу», «жазу», «салу»", ru: "Графика — «чертить», «писать», «рисовать»", en: "Graphics — 'draw', 'write', 'paint'" },
      ],
      emoji: "🎓",
    },
  ],
};
