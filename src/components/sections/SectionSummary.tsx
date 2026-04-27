import { useLang, t, ui } from "@/lib/language";
import { LessonSlide } from "@/lib/types";
import { motion } from "framer-motion";
import AudioButton from "@/components/AudioButton";
import { Trophy, Star, Sparkles, ArrowRight } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { lessons } from "@/data";

export default function SectionSummary({ slide }: { slide: LessonSlide }) {
  const { lang } = useLang();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const points = slide.points || [];

  const currentIdx = lessons.findIndex((l) => l.id === id);
  const nextLesson = currentIdx >= 0 && currentIdx < lessons.length - 1 ? lessons[currentIdx + 1] : null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 md:grid-cols-6 gap-3 p-3 md:p-6 auto-rows-[minmax(120px,auto)]"
    >
      {/* HERO trophy */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="md:col-span-6 relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-accent to-secondary p-8 md:p-12 text-center shadow-2xl"
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-200"
            style={{ left: `${10 + (i * 11) % 80}%`, top: `${15 + (i * 23) % 70}%` }}
            animate={{ y: [0, -15, 0], opacity: [0.4, 1, 0.4], rotate: [0, 180, 360] }}
            transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
          >
            <Star className="h-5 w-5 fill-current" />
          </motion.div>
        ))}
        <motion.div
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 140 }}
          className="relative mx-auto mb-4 inline-flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-3xl bg-background/30 backdrop-blur-md"
        >
          <Trophy className="h-10 w-10 md:h-14 md:w-14 text-yellow-100 drop-shadow-lg" />
        </motion.div>
        <h2 className="relative text-3xl md:text-5xl font-bold text-primary-foreground drop-shadow-lg">
          {t(slide.title, lang)}
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative mt-3 text-lg md:text-xl font-semibold text-primary-foreground/95"
        >
          🌟 {t(ui.finishedLesson, lang)} 🌟
        </motion.p>
      </motion.div>

      {/* Audio chip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="md:col-span-6 rounded-2xl bg-card/90 backdrop-blur-sm border border-border/40 p-4 flex items-center justify-between gap-3"
      >
        <span className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" /> {t(ui.keyTakeaways, lang)}
        </span>
        <AudioButton src={slide.audio} text={slide.title} />
      </motion.div>

      {/* Bento takeaways */}
      {points.map((point, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.08 }}
          whileHover={{ scale: 1.03, y: -3 }}
          className="md:col-span-3 rounded-2xl bg-card/90 backdrop-blur-sm border border-border/50 p-5 card-shadow flex items-start gap-3"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-lg shadow-md">
            ✅
          </span>
          <p className="flex-1 text-base md:text-lg font-medium text-foreground/90 leading-snug">
            {t(point, lang)}
          </p>
          <AudioButton text={point} size="sm" />
        </motion.div>
      ))}

      {/* Next lesson CTA */}
      {nextLesson && (
        <motion.button
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + points.length * 0.08, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate(`/lesson/${nextLesson.id}`)}
          className="md:col-span-6 group relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-accent to-secondary p-6 md:p-8 text-left shadow-2xl"
        >
          <motion.div
            className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-background/20 blur-2xl"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <div className="relative flex items-center justify-between gap-4 flex-wrap">
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-primary-foreground/80 mb-1">
                {t(ui.nextLesson, lang)}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl md:text-4xl">{nextLesson.emoji}</span>
                <span className="text-xl md:text-2xl font-bold text-primary-foreground">
                  {t(nextLesson.title, lang)}
                </span>
              </div>
            </div>
            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-background/30 backdrop-blur-md text-primary-foreground"
            >
              <ArrowRight className="h-7 w-7" />
            </motion.div>
          </div>
        </motion.button>
      )}
    </motion.div>
  );
}
