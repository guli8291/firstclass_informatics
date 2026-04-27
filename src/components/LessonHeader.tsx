import { Link } from "react-router-dom";
import { useLang, t, ui } from "@/lib/language";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { LessonData } from "@/lib/types";
import { ChevronLeft } from "lucide-react";

const slideLabels: Record<string, { kk: string; ru: string; en: string }> = {
  hero: { kk: "Басты бет", ru: "Главная", en: "Home" },
  topic: { kk: "Тақырып", ru: "Тема", en: "Topic" },
  rules: { kk: "Ережелер", ru: "Правила", en: "Rules" },
  interactive: { kk: "Интерактив", ru: "Интерактив", en: "Interactive" },
  game: { kk: "Ойындар", ru: "Игры", en: "Games" },
  video: { kk: "Видео", ru: "Видео", en: "Video" },
  summary: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
};

interface LessonHeaderProps {
  lesson: LessonData;
  lessonNumber: number;
  slideIdx: number;
  onSlideChange: (idx: number) => void;
}

export default function LessonHeader({ lesson, lessonNumber, slideIdx, onSlideChange }: LessonHeaderProps) {
  const { lang } = useLang();

  const isCombined = lesson.id === "lesson-18-19";
  const lessonLabel = isCombined
    ? (lang === "kk" ? "18–19-сабақтар" : lang === "ru" ? "Уроки 18–19" : "Lessons 18–19")
    : lang === "kk"
      ? `${lessonNumber}-сабақ`
      : lang === "ru"
        ? `Урок ${lessonNumber}`
        : `Lesson ${lessonNumber}`;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-lg">
      {/* Top row: back + lesson title + lang switcher */}
      <div className="flex items-center gap-3 px-3 py-2 md:px-6">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-1 rounded-lg px-2 py-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="hidden sm:inline">{t(ui.lessons, lang)}</span>
        </Link>

        <div className="flex min-w-0 flex-1 items-center gap-2">
          <span className="text-2xl">{lesson.emoji}</span>
          <div className="min-w-0">
            <h1 className="truncate font-display text-sm font-bold leading-tight text-primary md:text-base">
              {lessonLabel}. {t(lesson.title, lang)}
            </h1>
          </div>
        </div>

        <LanguageSwitcher />
      </div>

      {/* Slide navigation tabs */}
      <div className="scrollbar-hide flex gap-0.5 overflow-x-auto px-3 pb-1.5 md:px-6">
        {lesson.slides.map((slide, i) => {
          const label = slideLabels[slide.type] || { kk: slide.type, ru: slide.type, en: slide.type };
          const isActive = i === slideIdx;
          return (
            <button
              key={i}
              onClick={() => onSlideChange(i)}
              className={`relative shrink-0 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all md:text-sm ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {t(label, lang)}
            </button>
          );
        })}
      </div>
    </header>
  );
}
