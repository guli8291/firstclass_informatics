import { motion } from "framer-motion";
import { SVGFollower } from "@/components/ui/svg-follower";

/**
 * Full-screen layered background:
 *  - animated mesh gradient
 *  - drifting blurred shapes (parallax-like motion)
 *  - SVGFollower interactive trail (pointer-events: none)
 */
export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base mesh gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

      {/* Animated color blobs */}
      <motion.div
        className="absolute h-[40vw] w-[40vw] rounded-full bg-primary/25 blur-3xl"
        animate={{ x: ["-10%", "30%", "-10%"], y: ["-10%", "20%", "-10%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "-10%", left: "-10%" }}
      />
      <motion.div
        className="absolute h-[35vw] w-[35vw] rounded-full bg-secondary/25 blur-3xl"
        animate={{ x: ["10%", "-20%", "10%"], y: ["10%", "30%", "10%"] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: "-10%", right: "-10%" }}
      />
      <motion.div
        className="absolute h-[25vw] w-[25vw] rounded-full bg-accent/20 blur-3xl"
        animate={{ x: ["0%", "20%", "0%"], y: ["0%", "-15%", "0%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "30%", right: "20%" }}
      />

      {/* Floating geometric particles */}
      {[
        { l: "10%", t: "20%", s: 14, c: "bg-primary/40", d: 8 },
        { l: "85%", t: "15%", s: 10, c: "bg-secondary/40", d: 11 },
        { l: "70%", t: "60%", s: 18, c: "bg-accent/40", d: 9 },
        { l: "20%", t: "75%", s: 12, c: "bg-primary/30", d: 13 },
        { l: "50%", t: "40%", s: 8, c: "bg-secondary/40", d: 10 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${p.c}`}
          style={{ left: p.l, top: p.t, width: p.s, height: p.s }}
          animate={{ y: [0, -30, 0], x: [0, 15, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: p.d, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Interactive SVG trail */}
      <div className="absolute inset-0 opacity-70">
        <SVGFollower colors={["#0097A7", "#4CAF50", "#F44336"]} removeDelay={500} />
      </div>
    </div>
  );
}
