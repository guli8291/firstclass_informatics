import { useState } from "react";
import { useLang, t, ui } from "@/lib/language";
import { LessonSlide, ChoiceQuestion } from "@/lib/types";
import { motion, AnimatePresence } from "framer-motion";
import AudioButton from "@/components/AudioButton";
import Confetti from "@/components/Confetti";
import { CheckCircle2, XCircle, Sparkles, Target } from "lucide-react";

function ChoiceQuiz({
  item,
  onCorrect,
  index,
}: {
  item: ChoiceQuestion;
  onCorrect: () => void;
  index: number;
}) {
  const { lang } = useLang();
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const isCorrect = selected === item.correctIndex;

  const handleCheck = () => {
    setChecked(true);
    if (selected === item.correctIndex) onCorrect();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="rounded-3xl bg-card/90 backdrop-blur-sm p-5 md:p-6 card-shadow border border-border/40 flex flex-col gap-4"
    >
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-base font-bold text-primary-foreground">
          Q{index + 1}
        </div>
        <h3 className="text-lg md:text-xl font-bold text-foreground leading-snug pt-1">
          {t(item.question, lang)}
        </h3>
      </div>
      <div className="grid gap-2">
        {item.options.map((opt, i) => {
          const isSelected = selected === i;
          const isAnswer = i === item.correctIndex;
          let classes = "border-border hover:border-primary/50 hover:bg-primary/5";
          if (isSelected && !checked) classes = "border-primary bg-primary/10 text-primary";
          if (checked && isAnswer) classes = "border-green-500 bg-green-500/15 text-green-700 dark:text-green-300";
          if (checked && isSelected && !isCorrect) classes = "border-destructive bg-destructive/15 text-destructive";
          return (
            <motion.button
              key={i}
              onClick={() => !checked && setSelected(i)}
              whileHover={!checked ? { scale: 1.02, x: 3 } : {}}
              whileTap={!checked ? { scale: 0.98 } : {}}
              className={`flex items-center gap-3 rounded-2xl border-2 p-3 md:p-4 text-left text-base md:text-lg font-semibold transition-colors ${classes}`}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-bold">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="flex-1">{t(opt, lang)}</span>
              {checked && isAnswer && <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />}
              {checked && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-destructive shrink-0" />}
            </motion.button>
          );
        })}
      </div>
      {!checked && selected !== null && (
        <motion.button
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCheck}
          className="self-start rounded-2xl bg-gradient-to-r from-primary to-secondary px-6 py-2.5 font-bold text-primary-foreground shadow-md"
        >
          {t(ui.check, lang)}
        </motion.button>
      )}
      <AnimatePresence>
        {checked && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`flex items-center justify-center gap-2 rounded-2xl p-4 text-lg font-bold ${
              isCorrect
                ? "bg-green-500/20 text-green-700 dark:text-green-300"
                : "bg-destructive/20 text-destructive"
            }`}
          >
            {isCorrect ? "🎉" : "😊"} {isCorrect ? t(ui.correct, lang) : t(ui.incorrect, lang)}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/**
 * Tap-to-reveal hotspot game on the slide image.
 * Small +/- markers appear; correct ones reward, wrong ones explain.
 */
function HotspotGame({ image, title }: { image: string; title?: string }) {
  const { lang } = useLang();
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const spots: { x: number; y: number; ok: boolean; label: { kk: string; ru: string; en: string } }[] = [
    { x: 25, y: 35, ok: true, label: { kk: "Арқа тік ✅", ru: "Спина прямая ✅", en: "Straight back ✅" } },
    { x: 65, y: 30, ok: false, label: { kk: "Экранға тым жақын ❌", ru: "Слишком близко к экрану ❌", en: "Too close to screen ❌" } },
    { x: 50, y: 70, ok: true, label: { kk: "Аяқ еденде ✅", ru: "Ноги на полу ✅", en: "Feet on the floor ✅" } },
    { x: 80, y: 60, ok: false, label: { kk: "Компьютер қасында тамақ ❌", ru: "Еда у компьютера ❌", en: "Food near computer ❌" } },
  ];

  return (
    <div className="rounded-3xl bg-card/90 backdrop-blur-sm p-5 md:p-6 card-shadow border border-border/40 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Target className="h-5 w-5 text-primary" />
        <h3 className="text-lg md:text-xl font-bold text-foreground">
          {t(ui.findRightWrong, lang)}
        </h3>
      </div>
      <div className="relative w-full overflow-hidden rounded-2xl shadow-lg" style={{ aspectRatio: "16/9" }}>
        <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-foreground/10" />
        {spots.map((s, i) => {
          const isRevealed = revealed.has(i);
          return (
            <button
              key={i}
              onClick={() => setRevealed((r) => new Set(r).add(i))}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${s.x}%`, top: `${s.y}%` }}
            >
              {!isRevealed ? (
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-card ring-4 ring-primary/40 shadow-xl text-primary font-bold"
                >
                  ?
                </motion.span>
              ) : (
                <motion.span
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 220 }}
                  className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs md:text-sm font-bold shadow-xl ${
                    s.ok
                      ? "bg-green-500 text-white"
                      : "bg-destructive text-destructive-foreground"
                  }`}
                >
                  {t(s.label, lang)}
                </motion.span>
              )}
            </button>
          );
        })}
      </div>
      {revealed.size === spots.length && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="self-end font-bold text-green-600 dark:text-green-400"
        >
          {t(ui.allFound, lang)} 🎉
        </motion.div>
      )}
    </div>
  );
}

export default function SectionInteractive({ slide }: { slide: LessonSlide }) {
  const { lang } = useLang();
  const [confetti, setConfetti] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 md:grid-cols-6 gap-3 p-3 md:p-6 auto-rows-[minmax(110px,auto)]"
    >
      <Confetti show={confetti > 0} count={50} />

      {/* Title bar */}
      <div className="md:col-span-6 flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-3">
          <Sparkles className="h-7 w-7 text-primary" />
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">{t(slide.title, lang)}</h2>
        </div>
        {slide.audio && <AudioButton src={slide.audio} text={slide.title} />}
      </div>

      {/* Hotspot game (if image present) */}
      {slide.image && (
        <div className="md:col-span-6">
          <HotspotGame image={slide.image} title={t(slide.title, lang)} />
        </div>
      )}

      {/* Quiz items in two-column bento */}
      {slide.items?.map((item, i) =>
        item.type === "choice" ? (
          <div key={i} className="md:col-span-3">
            <ChoiceQuiz item={item} index={i} onCorrect={() => setConfetti((c) => c + 1)} />
          </div>
        ) : null
      )}
    </motion.div>
  );
}
