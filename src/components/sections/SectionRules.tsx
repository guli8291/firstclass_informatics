import { useLang, t } from "@/lib/language";
import { LessonSlide } from "@/lib/types";
import { motion } from "framer-motion";
import AudioButton from "@/components/AudioButton";
import { ShieldCheck } from "lucide-react";

export default function SectionRules({ slide }: { slide: LessonSlide }) {
  const { lang } = useLang();
  const points = slide.points || [];
  const heroImg = slide.image;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 md:grid-cols-6 gap-3 p-3 md:p-6 auto-rows-[minmax(120px,auto)]"
    >
      {/* HERO with image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative md:col-span-6 overflow-hidden rounded-3xl shadow-xl min-h-[200px] md:min-h-[260px] bg-gradient-to-br from-primary/30 to-secondary/30"
      >
        {heroImg && (
          <img src={heroImg} alt={t(slide.title, lang)} className="absolute inset-0 h-full w-full object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 flex items-end justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            {slide.emoji && <span className="text-4xl md:text-5xl">{slide.emoji}</span>}
            <h2 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">
              {t(slide.title, lang)}
            </h2>
          </div>
          {slide.audio && <AudioButton src={slide.audio} text={slide.title} />}
        </div>
        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/25 backdrop-blur-md px-3 py-1 text-xs font-bold text-white">
          <ShieldCheck className="h-3 w-3" /> {t(slide.title, lang)}
        </div>
      </motion.div>

      {/* Rules grid — bento numbered tiles */}
      {points.map((point, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: i * 0.06, type: "spring", stiffness: 120 }}
          whileHover={{ scale: 1.03, y: -3 }}
          className="md:col-span-2 group relative overflow-hidden rounded-2xl bg-card/90 backdrop-blur-sm border border-border/50 p-5 card-shadow cursor-default"
        >
          <div className="flex items-start gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-xl font-bold text-primary-foreground shadow-md">
              {i + 1}
            </span>
            <p className="flex-1 text-base md:text-lg font-medium text-foreground/90 leading-snug">
              {t(point, lang)}
            </p>
            <AudioButton text={point} size="sm" />
          </div>
          {/* decorative corner */}
          <div className="absolute -bottom-6 -right-6 h-20 w-20 rounded-full bg-primary/10 blur-xl group-hover:bg-primary/20 transition-colors" />
        </motion.div>
      ))}
    </motion.div>
  );
}
