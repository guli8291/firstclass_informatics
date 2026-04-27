import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const COLORS = ["#0097A7", "#4CAF50", "#F44336", "#FFC107", "#9C27B0", "#2196F3"];

interface Props {
  show: boolean;
  count?: number;
  duration?: number;
}

export default function Confetti({ show, count = 40, duration = 1800 }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const t = setTimeout(() => setVisible(false), duration);
      return () => clearTimeout(t);
    }
  }, [show, duration]);

  return (
    <AnimatePresence>
      {visible && (
        <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
          {Array.from({ length: count }).map((_, i) => {
            const color = COLORS[i % COLORS.length];
            const left = Math.random() * 100;
            const delay = Math.random() * 0.3;
            const rot = Math.random() * 720 - 360;
            const dur = 1.4 + Math.random() * 0.8;
            const size = 6 + Math.random() * 8;
            const shape = Math.random() > 0.5 ? "50%" : "2px";
            return (
              <motion.div
                key={i}
                initial={{ y: -20, x: 0, opacity: 1, rotate: 0 }}
                animate={{ y: window.innerHeight + 40, rotate: rot, opacity: [1, 1, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: dur, delay, ease: "easeIn" }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: `${left}%`,
                  width: size,
                  height: size,
                  background: color,
                  borderRadius: shape,
                }}
              />
            );
          })}
        </div>
      )}
    </AnimatePresence>
  );
}
