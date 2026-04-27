import { motion } from "framer-motion";

/**
 * Animated audio waveform visualizer.
 * Renders 5 bars that pulse when `playing` is true, and stay flat otherwise.
 */
export default function AudioWaveform({ playing, className = "" }: { playing: boolean; className?: string }) {
  const bars = [0, 1, 2, 3, 4];
  return (
    <div className={`inline-flex items-end gap-[3px] h-6 ${className}`} aria-hidden>
      {bars.map((i) => (
        <motion.span
          key={i}
          className="w-1 rounded-full bg-primary"
          animate={
            playing
              ? { height: ["20%", "100%", "40%", "85%", "30%"] }
              : { height: "20%" }
          }
          transition={
            playing
              ? { duration: 0.9, repeat: Infinity, ease: "easeInOut", delay: i * 0.08 }
              : { duration: 0.3 }
          }
          style={{ height: "20%" }}
        />
      ))}
    </div>
  );
}
