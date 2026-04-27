import { useLang, t, ui } from "@/lib/language";
import { LessonSlide } from "@/lib/types";
import { motion } from "framer-motion";
import AudioButton from "@/components/AudioButton";
import AudioWaveform from "@/components/AudioWaveform";
import { Sparkles, Rocket } from "lucide-react";
import { getLessonGradient } from "@/lib/heroIcons";
import { lessonAnimationMap } from "@/components/lesson-animations/LessonHeroAnimations";
import { useAudioState } from "@/lib/audioState";

export default function SectionHero({
  slide,
  lessonId,
  onNext,
}: {
  slide: LessonSlide;
  lessonId?: string;
  onNext?: () => void;
}) {
  const { lang } = useLang();
  const palette = getLessonGradient(lessonId || "lesson-01");
  const Animation = lessonId ? lessonAnimationMap[lessonId] : undefined;
  const audioId = `hero-${lessonId ?? "x"}`;
  const { isPlaying } = useAudioState();
  const playing = isPlaying(audioId);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 md:grid-cols-6 gap-3 p-3 md:p-6 auto-rows-[minmax(140px,auto)]"
    >
      {/* MAIN hero tile */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className={`relative md:col-span-6 overflow-hidden rounded-3xl bg-gradient-to-br ${palette.bg} p-8 md:p-14 min-h-[44vh] flex flex-col items-center justify-center text-center shadow-2xl`}
      >
        {/* Animated bg shapes */}
        <motion.div
          className="absolute h-64 w-64 rounded-full bg-white/15 blur-2xl pointer-events-none"
          animate={{ x: [0, 60, -40, 0], y: [0, -40, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "10%", left: "10%" }}
        />
        <motion.div
          className="absolute h-72 w-72 rounded-full bg-white/10 blur-3xl pointer-events-none"
          animate={{ x: [0, -50, 40, 0], y: [0, 40, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: "5%", right: "10%" }}
        />

        {/* Themed lesson animation */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, delay: 0.1 }}
          className={`relative mb-4 ${palette.glow}`}
        >
          {Animation ? <Animation /> : slide.emoji && (
            <span className="text-7xl md:text-8xl drop-shadow-xl">{slide.emoji}</span>
          )}
          {/* soft floor shadow */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-3 w-32 md:w-40 rounded-full bg-black/30 blur-md"
            animate={{ scale: [1, 0.85, 1], opacity: [0.5, 0.35, 0.5] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative mb-3 text-4xl md:text-6xl font-bold text-primary-foreground tracking-tight"
          style={{ textShadow: "0 4px 24px rgba(0,0,0,0.45), 0 2px 4px rgba(0,0,0,0.3)" }}
        >
          {t(slide.title, lang)}
        </motion.h1>
        {slide.subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative max-w-2xl text-lg md:text-2xl text-primary-foreground/90 font-medium"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.35)", letterSpacing: "0.04em" }}
          >
            {t(slide.subtitle, lang)}
          </motion.p>
        )}

        {/* CTA — high contrast white pill, gradient-tinted text, advances slide */}
        <motion.button
          type="button"
          onClick={() => onNext?.()}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
          className={`relative mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-base md:text-lg font-extrabold ${palette.ctaText} shadow-xl ring-4 ring-white/40 transition-shadow hover:shadow-2xl cursor-pointer`}
        >
          <span
            className="absolute inset-0 rounded-full bg-white animate-ping opacity-50 pointer-events-none"
            style={{ animationDuration: "2.4s" }}
          />
          <Rocket className="relative h-5 w-5" />
          <span className="relative">{t(ui.letsStart, lang)}</span>
        </motion.button>
      </motion.div>

      {/* Audio chip with live waveform */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="md:col-span-6 rounded-2xl bg-card/90 backdrop-blur-sm border border-border/40 p-4 flex items-center justify-between gap-4"
      >
        <span className="text-sm font-semibold text-foreground/80 flex items-center gap-2 min-w-0">
          <Sparkles className="h-4 w-4 text-primary shrink-0" />
          <span className="truncate">{t(ui.listenIntro, lang)}</span>
        </span>
        <div className="flex items-center gap-3">
          <AudioWaveform playing={playing} />
          {slide.title && <AudioButton text={slide.subtitle || slide.title} audioId={audioId} />}
        </div>
      </motion.div>
    </motion.div>
  );
}
