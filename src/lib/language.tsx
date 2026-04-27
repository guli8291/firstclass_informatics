import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "kk" | "ru" | "en";

export type Translatable = { kk: string; ru: string; en: string };

export function t(field: Translatable | undefined, lang: Lang): string {
  if (!field) return "";
  return field[lang] || field.kk || "";
}

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LangContext = createContext<LangContextType>({ lang: "kk", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem("app-lang");
    return (saved as Lang) || "kk";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("app-lang", l);
  };

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

// UI translations
export const ui: Record<string, Translatable> = {
  home: { kk: "Басты бет", ru: "Главная", en: "Home" },
  lessons: { kk: "Сабақтар", ru: "Уроки", en: "Lessons" },
  next: { kk: "Келесі", ru: "Далее", en: "Next" },
  prev: { kk: "Артқа", ru: "Назад", en: "Back" },
  correct: { kk: "Дұрыс! 🎉", ru: "Правильно! 🎉", en: "Correct! 🎉" },
  incorrect: { kk: "Қате, қайталап көр! 😊", ru: "Неверно, попробуй ещё! 😊", en: "Wrong, try again! 😊" },
  check: { kk: "Тексеру", ru: "Проверить", en: "Check" },
  listen: { kk: "Тыңдау", ru: "Слушать", en: "Listen" },
  startLesson: { kk: "Сабақты бастау", ru: "Начать урок", en: "Start Lesson" },
  summary: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
  wellDone: { kk: "Жарайсың! 🌟", ru: "Молодец! 🌟", en: "Well done! 🌟" },
  selectAnswer: { kk: "Жауабын таңда", ru: "Выбери ответ", en: "Select an answer" },
  matchItems: { kk: "Сәйкестендір", ru: "Соедини пары", en: "Match items" },
  score: { kk: "Ұпай", ru: "Баллы", en: "Score" },
  of: { kk: "ішінен", ru: "из", en: "of" },
  slide: { kk: "Слайд", ru: "Слайд", en: "Slide" },
  nextLesson: { kk: "Келесі сабақ", ru: "Следующий урок", en: "Next lesson" },
  watchCarefully: {
    kk: "Видеоны мұқият қара",
    ru: "Внимательно посмотри видео",
    en: "Watch the video carefully",
  },
  whatDidYouLearn: {
    kk: "Не жаңа білдің?",
    ru: "Что нового узнал(а)?",
    en: "What did you learn?",
  },
  beforeWatching: { kk: "Қарау алдында", ru: "Перед просмотром", en: "Before watching" },
  afterWatching: { kk: "Қараған соң", ru: "После просмотра", en: "After watching" },
  teacherHint: {
    kk: "Мұғалімге: Видеодан кейін оқушылармен талқылаңыз.",
    ru: "Учителю: после видео обсудите увиденное с учениками.",
    en: "Teacher: discuss the video with students afterwards.",
  },
  videoComingSoon: {
    kk: "Видео жақын арада қосылады",
    ru: "Видео скоро будет добавлено",
    en: "Video coming soon",
  },
  visualPlaceholder: {
    kk: "Иллюстрация",
    ru: "Иллюстрация",
    en: "Illustration",
  },
  dropHere: { kk: "Осы жерге апар", ru: "Перетащи сюда", en: "Drop here" },
  drag: { kk: "Сүйре", ru: "Тащи", en: "Drag" },
  to: { kk: "Қайда", ru: "Куда", en: "To" },
  reset: { kk: "Қайта бастау", ru: "Сброс", en: "Reset" },
  scoreShort: { kk: "Ұпай", ru: "Очки", en: "Score" },
  timeShort: { kk: "Уақыт", ru: "Время", en: "Time" },
  streakShort: { kk: "Серия", ru: "Серия", en: "Streak" },
  letsStart: { kk: "Бастаймыз!", ru: "Поехали!", en: "Let's go!" },
  listenIntro: {
    kk: "Кіріспені тыңда",
    ru: "Послушай вступление",
    en: "Listen to the intro",
  },
  finishedLesson: {
    kk: "Сабақты аяқтадың!",
    ru: "Ты закончил(а) урок!",
    en: "You finished the lesson!",
  },
  keyTakeaways: {
    kk: "Негізгі түйін",
    ru: "Главные выводы",
    en: "Key takeaways",
  },
  lessonComplete: {
    kk: "Сабақ аяқталды",
    ru: "Урок завершён",
    en: "Lesson complete",
  },
  findRightWrong: {
    kk: "Дұрыс пен қатені тап — нүктелерді бас!",
    ru: "Найди правильное и неправильное — нажимай на точки!",
    en: "Find right and wrong — tap the dots!",
  },
  allFound: { kk: "Бәрі табылды!", ru: "Всё найдено!", en: "All found!" },
};
