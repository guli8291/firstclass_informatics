import { useState, useRef } from "react";
import { useLang, t, ui } from "@/lib/language";
import { LessonSlide } from "@/lib/types";
import { motion } from "framer-motion";
import { Play, Pause, Eye, MessageCircle, BookOpen, Film, Maximize } from "lucide-react";
import AudioButton from "@/components/AudioButton";

export default function SectionVideo({ slide }: { slide: LessonSlide }) {
  const { lang } = useLang();
  const [error, setError] = useState(false);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasVideo = !!slide.video && !error;

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const goFullscreen = () => {
    const v = videoRef.current;
    if (v?.requestFullscreen) v.requestFullscreen();
  };

  const titleFallback = { kk: "Видео", ru: "Видео", en: "Video" };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 md:grid-cols-6 gap-3 p-3 md:p-6 auto-rows-[minmax(110px,auto)]"
    >
      {/* TITLE bar */}
      <div className="md:col-span-6 flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-3">
          <Film className="h-7 w-7 text-primary" />
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">
            {t(slide.title || titleFallback, lang)}
          </h2>
        </div>
        <AudioButton text={slide.title || titleFallback} />
      </div>

      {/* CINEMA player */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 80 }}
        className="md:col-span-6 relative overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-border/40"
      >
        <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
          {hasVideo ? (
            <>
              <video
                ref={videoRef}
                src={slide.video}
                poster={slide.image}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onError={() => setError(true)}
                className="absolute inset-0 h-full w-full object-cover cursor-pointer"
                onClick={togglePlay}
              />
              {!playing && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={togglePlay}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-20 w-20 md:h-28 md:w-28 items-center justify-center rounded-full bg-white/90 backdrop-blur-md shadow-2xl"
                  aria-label="Play"
                >
                  <Play className="h-10 w-10 md:h-14 md:w-14 text-primary fill-current ml-1" />
                </motion.button>
              )}
              <div className="absolute top-0 left-0 right-0 flex items-center justify-end p-3 md:p-4 bg-gradient-to-b from-black/60 to-transparent">
                <button
                  onClick={goFullscreen}
                  className="rounded-lg bg-white/20 backdrop-blur-md p-2 text-white hover:bg-white/30 transition-colors"
                  aria-label="Fullscreen"
                >
                  <Maximize className="h-4 w-4" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 p-3 md:p-4 bg-gradient-to-t from-black/70 to-transparent">
                <button
                  onClick={togglePlay}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-primary shadow-lg hover:scale-110 transition-transform"
                  aria-label={playing ? "Pause" : "Play"}
                >
                  {playing ? <Pause className="h-5 w-5 fill-current" /> : <Play className="h-5 w-5 fill-current ml-0.5" />}
                </button>
                <div className="flex-1 text-white text-sm font-semibold drop-shadow-md truncate">
                  🎬 {t(slide.title || titleFallback, lang)}
                </div>
              </div>
            </>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30">
              {slide.image && (
                <img src={slide.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
              )}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-white/90 shadow-2xl"
              >
                <Play className="h-12 w-12 text-primary fill-current ml-1" />
              </motion.div>
              <p className="relative z-10 text-lg font-bold text-white drop-shadow-md">
                {t(ui.videoComingSoon, lang)}
              </p>
            </div>
          )}
        </div>
      </motion.div>

      {/* Pre-video instruction */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="md:col-span-3 flex items-start gap-3 rounded-2xl bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 p-4"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-200 dark:bg-yellow-900">
          <Eye className="h-5 w-5 text-yellow-700 dark:text-yellow-300" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2 mb-1">
            <div className="text-xs font-bold uppercase tracking-wide text-yellow-700 dark:text-yellow-300">
              {t(ui.beforeWatching, lang)}
            </div>
            <AudioButton text={ui.watchCarefully} size="sm" />
          </div>
          <p className="text-sm font-medium text-yellow-900 dark:text-yellow-100">
            {t(ui.watchCarefully, lang)}
          </p>
        </div>
      </motion.div>

      {/* Post-video reflection */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="md:col-span-3 flex items-start gap-3 rounded-2xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 p-4"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-200 dark:bg-green-900">
          <MessageCircle className="h-5 w-5 text-green-700 dark:text-green-300" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2 mb-1">
            <div className="text-xs font-bold uppercase tracking-wide text-green-700 dark:text-green-300">
              {t(ui.afterWatching, lang)}
            </div>
            <AudioButton text={ui.whatDidYouLearn} size="sm" />
          </div>
          <p className="text-sm font-medium text-green-900 dark:text-green-100">
            {t(ui.whatDidYouLearn, lang)}
          </p>
        </div>
      </motion.div>

      {/* Teacher note */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="md:col-span-6 flex items-start gap-3 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 p-4"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-200 dark:bg-blue-900">
          <BookOpen className="h-5 w-5 text-blue-700 dark:text-blue-300" />
        </div>
        <p className="text-sm font-medium text-blue-900 dark:text-blue-100 flex-1">
          🧑‍🏫 {t(ui.teacherHint, lang)}
        </p>
        <AudioButton text={ui.teacherHint} size="sm" />
      </motion.div>
    </motion.div>
  );
}
