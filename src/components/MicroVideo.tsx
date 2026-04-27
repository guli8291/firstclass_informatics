import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Film, Image as ImageIcon, Sparkles, Lightbulb, Target } from "lucide-react";
import { useLang, t } from "@/lib/language";
import type { Translatable } from "@/lib/language";

interface MicroVideoProps {
  src?: string;
  caption?: Translatable;
  index?: number;
}

/**
 * Visual block per explanation sentence. If `src` is a real video, plays it.
 * Otherwise renders a UNIQUE placeholder per `index` so two adjacent blocks
 * never look identical (different gradient, icon, motion).
 */
const variants = [
  {
    grad: "from-primary/25 via-secondary/15 to-accent/20",
    icon: Play,
    accent: "text-primary",
    ring: "ring-primary/40",
  },
  {
    grad: "from-accent/25 via-primary/10 to-secondary/20",
    icon: Lightbulb,
    accent: "text-accent-foreground",
    ring: "ring-accent/50",
  },
  {
    grad: "from-secondary/25 via-accent/15 to-primary/15",
    icon: Sparkles,
    accent: "text-secondary",
    ring: "ring-secondary/50",
  },
  {
    grad: "from-primary/30 via-accent/15 to-secondary/10",
    icon: Target,
    accent: "text-primary",
    ring: "ring-primary/50",
  },
  {
    grad: "from-accent/30 via-secondary/15 to-primary/10",
    icon: ImageIcon,
    accent: "text-accent-foreground",
    ring: "ring-accent/40",
  },
  {
    grad: "from-secondary/30 via-primary/15 to-accent/10",
    icon: Film,
    accent: "text-secondary",
    ring: "ring-secondary/40",
  },
];

export default function MicroVideo({ src, caption, index = 0 }: MicroVideoProps) {
  const { lang } = useLang();
  const [error, setError] = useState(false);
  const [muted, setMuted] = useState(true);
  const hasVideo = !!src && !error;
  const v = variants[index % variants.length];
  const Icon = v.icon;

  const handleClick = (e: React.MouseEvent<HTMLVideoElement>) => {
    const el = e.currentTarget;
    setMuted((m) => {
      el.muted = !m ? true : false;
      if (el.paused) el.play().catch(() => {});
      return !m;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 14 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.05 + index * 0.05, type: "spring", stiffness: 120, damping: 18 }}
      whileHover={{ scale: 1.03, y: -2 }}
      className="relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card/70 backdrop-blur-sm shadow-lg group"
    >
      <div className="relative h-full w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
        {hasVideo ? (
          <>
            <video
              src={src}
              autoPlay
              muted={muted}
              loop
              playsInline
              onError={() => setError(true)}
              onClick={handleClick}
              className="absolute inset-0 h-full w-full object-cover cursor-pointer transition-transform duration-500 group-hover:scale-110"
            />
            {muted && (
              <div className="pointer-events-none absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                🔊
              </div>
            )}
          </>
        ) : (
          <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${v.grad} transition-transform duration-500 group-hover:scale-110`}>
            <motion.div
              className={`absolute h-24 w-24 rounded-full blur-2xl ${index % 2 === 0 ? "bg-primary/25" : "bg-accent/25"}`}
              animate={{
                x: [0, index % 2 === 0 ? 30 : -30, 0],
                y: [0, -20, 0],
                rotate: [0, 360],
              }}
              transition={{ duration: 6 + (index % 3), repeat: Infinity, ease: "easeInOut" }}
              style={{ top: `${15 + (index * 11) % 30}%`, left: `${10 + (index * 17) % 50}%` }}
            />
            <motion.div
              animate={{ scale: [1, 1.15, 1], rotate: [0, 8, -8, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-background/85 ring-2 ${v.ring} shadow-xl`}
            >
              <Icon className={`h-7 w-7 ${v.accent}`} />
            </motion.div>
          </div>
        )}
      </div>
      {caption && (
        <div className="border-t border-border/40 bg-card/60 px-4 py-2">
          <p className="text-xs font-medium text-muted-foreground">{t(caption, lang)}</p>
        </div>
      )}
    </motion.div>
  );
}
