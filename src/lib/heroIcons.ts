import l01 from "@/assets/hero-icons/lesson-01.png";
import l02 from "@/assets/hero-icons/lesson-02.png";
import l03 from "@/assets/hero-icons/lesson-03.png";
import l04 from "@/assets/hero-icons/lesson-04.png";
import l05 from "@/assets/hero-icons/lesson-05.png";
import l06 from "@/assets/hero-icons/lesson-06.png";
import l07 from "@/assets/hero-icons/lesson-07.png";
import l08 from "@/assets/hero-icons/lesson-08.png";
import l09 from "@/assets/hero-icons/lesson-09.png";
import l10 from "@/assets/hero-icons/lesson-10.png";
import l11 from "@/assets/hero-icons/lesson-11.png";
import l12 from "@/assets/hero-icons/lesson-12.png";
import l13 from "@/assets/hero-icons/lesson-13.png";
import l14 from "@/assets/hero-icons/lesson-14.png";
import l15 from "@/assets/hero-icons/lesson-15.png";
import l16 from "@/assets/hero-icons/lesson-16.png";
import l17 from "@/assets/hero-icons/lesson-17.png";
import l1819 from "@/assets/hero-icons/lesson-18-19.png";

export const heroIconMap: Record<string, string> = {
  "lesson-01": l01, "lesson-02": l02, "lesson-03": l03, "lesson-04": l04, "lesson-05": l05,
  "lesson-06": l06, "lesson-07": l07, "lesson-08": l08, "lesson-09": l09, "lesson-10": l10,
  "lesson-11": l11, "lesson-12": l12, "lesson-13": l13, "lesson-14": l14, "lesson-15": l15,
  "lesson-16": l16, "lesson-17": l17, "lesson-18-19": l1819,
};

/**
 * Module-grouped gradient palettes (linear-gradient 135°).
 * Foundations (1-5)  → teal/green
 * Creativity (6-10)  → warm orange/pink
 * Advanced  (11-19)  → deep purple/blue
 */
export function getLessonGradient(id: string): {
  bg: string;          // tailwind gradient classes
  ctaText: string;     // hex/hsl-ish color for CTA text
  glow: string;        // tailwind shadow color util
} {
  const num = parseInt(id.replace("lesson-", "").split("-")[0], 10);
  if (num <= 5) {
    return {
      bg: "from-emerald-500 via-teal-500 to-cyan-600",
      ctaText: "text-teal-700",
      glow: "shadow-emerald-500/40",
    };
  }
  if (num <= 10) {
    return {
      bg: "from-orange-500 via-rose-500 to-pink-600",
      ctaText: "text-rose-700",
      glow: "shadow-orange-500/40",
    };
  }
  return {
    bg: "from-indigo-600 via-violet-600 to-fuchsia-700",
    ctaText: "text-violet-700",
    glow: "shadow-violet-500/40",
  };
}
