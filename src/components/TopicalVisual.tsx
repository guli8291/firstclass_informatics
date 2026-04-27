import { useState } from "react";
import { motion } from "framer-motion";
import { useLang, t, Translatable } from "@/lib/language";

interface Props {
  src?: string;
  title?: Translatable;
  emoji?: string;
  color?: string;
  className?: string;
  height?: string;
}

/**
 * Always renders a visual block. If a real image is provided and loads,
 * shows it. Otherwise falls back to a topical gradient illustration with
 * the lesson emoji and title, so no text block is ever left without an image.
 */
export default function TopicalVisual({
  src,
  title,
  emoji,
  color,
  className = "",
  height = "h-56 md:h-64",
}: Props) {
  const { lang } = useLang();
  const [error, setError] = useState(false);
  const label = title ? t(title, lang) : "";
  const gradient = color || "from-primary/70 to-secondary/70";

  if (src && !error) {
    return (
      <motion.img
        src={src}
        alt={label}
        onError={() => setError(true)}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className={`w-full ${height} rounded-2xl object-cover shadow-lg ${className}`}
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className={`relative w-full ${height} overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} shadow-lg ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        {emoji && (
          <motion.span
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="text-7xl md:text-8xl drop-shadow-lg"
          >
            {emoji}
          </motion.span>
        )}
        {label && (
          <span className="max-w-md text-lg md:text-xl font-bold text-white drop-shadow-md">
            {label}
          </span>
        )}
      </div>
      {/* decorative dots */}
      <div className="pointer-events-none absolute -top-6 -right-6 h-32 w-32 rounded-full bg-white/15 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
    </motion.div>
  );
}
