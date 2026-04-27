import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { getLessonById, lessons } from "@/data";
import { useLang, t, ui } from "@/lib/language";
import LessonHeader from "@/components/LessonHeader";
import AnimatedBackground from "@/components/AnimatedBackground";
import SlideRenderer from "@/components/SlideRenderer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function LessonPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { lang } = useLang();
  const lesson = getLessonById(id || "");
  const [slideIdx, setSlideIdx] = useState(0);

  const lessonNumber = lesson ? lessons.indexOf(lesson) + 1 : 0;

  useEffect(() => { setSlideIdx(0); }, [id]);

  const next = useCallback(() => {
    if (lesson && slideIdx < lesson.slides.length - 1) setSlideIdx((s) => s + 1);
  }, [lesson, slideIdx]);

  const prev = useCallback(() => {
    if (slideIdx > 0) setSlideIdx((s) => s - 1);
  }, [slideIdx]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  if (!lesson) {
    navigate("/");
    return null;
  }

  const slide = lesson.slides[slideIdx];
  const total = lesson.slides.length;
  const progress = ((slideIdx + 1) / total) * 100;

  return (
    <div className="relative flex min-h-screen flex-col">
      <AnimatedBackground />
      <div className="relative z-10 flex min-h-screen flex-col">
      <LessonHeader
        lesson={lesson}
        lessonNumber={lessonNumber}
        slideIdx={slideIdx}
        onSlideChange={setSlideIdx}
      />
      {/* Progress bar */}
      <div className="h-1 w-full bg-muted/60 backdrop-blur-sm">
        <motion.div
          className="h-full rounded-r-full bg-primary"
          animate={{ width: `${progress}%` }}
          transition={{ type: "spring", stiffness: 100 }}
        />
      </div>

      <main className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col px-4 md:px-8 lg:px-12 py-6 lg:py-10">
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={slideIdx}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.25 }}
            >
              <SlideRenderer slide={slide} lessonId={lesson.id} onNext={next} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={prev}
            disabled={slideIdx === 0}
            className="flex items-center gap-2 rounded-xl bg-muted px-5 py-3 font-bold text-foreground transition-all hover:bg-muted/80 disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5" />
            {t(ui.prev, lang)}
          </button>
          <span className="text-sm font-semibold text-muted-foreground">
            {slideIdx + 1} / {total}
          </span>
          <button
            onClick={next}
            disabled={slideIdx === total - 1}
            className="flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-bold text-primary-foreground transition-all hover:opacity-90 disabled:opacity-30"
          >
            {t(ui.next, lang)}
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </main>
      </div>
    </div>
  );
}
