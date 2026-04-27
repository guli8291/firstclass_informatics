import { motion } from "framer-motion";
import {
  Monitor, Eye, Activity, Cpu, Mouse, Keyboard, Ear, Hand, Sparkles,
  FolderOpen, Shield, X, Palette, Shapes, Wand2, RotateCw, Flag, MousePointer2,
  Bot, ArrowRight, Cat, Sun, Snowflake, Apple, Carrot, Globe, Star, Brush,
} from "lucide-react";

/* Shared float animation for centerpiece */
const floatY = { y: [0, -10, 0] };
const floatT = { duration: 3.2, repeat: Infinity, ease: "easeInOut" as const };

function Wrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-40 w-40 md:h-56 md:w-56 flex items-center justify-center">
      {children}
    </div>
  );
}

/* L1 — Здоровье: монитор + орбитальные иконки осанки/глаза/разминки */
export function L01() {
  const orbit = [
    { Icon: Eye, angle: 0 },
    { Icon: Activity, angle: 120 },
    { Icon: Hand, angle: 240 },
  ];
  return (
    <Wrap>
      <motion.div animate={floatY} transition={floatT}>
        <Monitor className="h-24 w-24 md:h-32 md:w-32 text-white drop-shadow-2xl" strokeWidth={1.5} />
      </motion.div>
      {orbit.map(({ Icon, angle }, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ width: 0, height: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
        >
          <div
            style={{ transform: `rotate(${angle}deg) translateY(-90px) rotate(-${angle}deg)` }}
            className="absolute"
          >
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
              className="rounded-full bg-white/95 p-2.5 shadow-xl"
            >
              <Icon className="h-6 w-6 text-emerald-600" />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </Wrap>
  );
}

/* L2 — Знакомство: 4 части появляются по очереди */
export function L02() {
  const parts = [
    { Icon: Monitor, x: 0, y: -50, d: 0 },
    { Icon: Cpu, x: 0, y: 30, d: 0.25 },
    { Icon: Keyboard, x: -55, y: 60, d: 0.5 },
    { Icon: Mouse, x: 55, y: 60, d: 0.75 },
  ];
  return (
    <Wrap>
      {parts.map(({ Icon, x, y, d }, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ opacity: 0, scale: 0.3, x, y: y - 30 }}
          animate={{ opacity: 1, scale: 1, x, y }}
          transition={{ delay: d, type: "spring", stiffness: 140 }}
        >
          <motion.div animate={floatY} transition={{ ...floatT, delay: d }}>
            <Icon className="h-14 w-14 md:h-16 md:w-16 text-white drop-shadow-xl" strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      ))}
    </Wrap>
  );
}

/* L3 — 5 органов чувств */
export function L03() {
  const senses = [
    { Icon: Eye, angle: -90 },
    { Icon: Ear, angle: -30 },
    { Icon: Hand, angle: 30 },
    { Icon: Sparkles, angle: 90 },
    { Icon: Sun, angle: 150 },
  ];
  return (
    <Wrap>
      <motion.div
        className="absolute h-24 w-24 rounded-full bg-white/20 backdrop-blur-sm"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      {senses.map(({ Icon, angle }, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ transform: `rotate(${angle}deg) translateY(-85px) rotate(-${angle}deg)` }}
          animate={{ scale: [1, 1.25, 1], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.25 }}
        >
          <div className="rounded-full bg-white/95 p-3 shadow-xl">
            <Icon className="h-7 w-7 text-teal-600" />
          </div>
        </motion.div>
      ))}
    </Wrap>
  );
}

/* L4 — Поток 0/1 в процессор */
export function L04() {
  const bits = Array.from({ length: 8 });
  return (
    <Wrap>
      <motion.div animate={floatY} transition={floatT} className="relative z-10">
        <Cpu className="h-24 w-24 md:h-28 md:w-28 text-white drop-shadow-2xl" strokeWidth={1.5} />
      </motion.div>
      {bits.map((_, i) => (
        <motion.span
          key={i}
          className="absolute font-mono text-xl font-bold text-white/90"
          initial={{ x: -120 - i * 10, y: -80 + (i % 4) * 35, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.25, ease: "easeIn" }}
        >
          {i % 2}
        </motion.span>
      ))}
    </Wrap>
  );
}

/* L5 — Вращающийся щит, отражающий вирусы */
export function L05() {
  const viruses = [0, 1, 2, 3];
  return (
    <Wrap>
      <motion.div
        animate={{ rotate: [0, 8, -8, 0], y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <Shield className="h-28 w-28 md:h-36 md:w-36 text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.6)]" strokeWidth={1.5} />
      </motion.div>
      {viruses.map((i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ x: i % 2 === 0 ? -120 : 120, y: i < 2 ? -80 : 80, opacity: 0, scale: 1 }}
          animate={{ x: i % 2 === 0 ? -50 : 50, y: i < 2 ? -30 : 30, opacity: [0, 1, 0], scale: [1, 0.3] }}
          transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.4 }}
        >
          <X className="h-7 w-7 text-red-300" strokeWidth={3} />
        </motion.div>
      ))}
    </Wrap>
  );
}

/* L6 — Tux + капли краски */
export function L06() {
  const drops = [
    { c: "bg-red-400", a: -60 },
    { c: "bg-yellow-300", a: 0 },
    { c: "bg-blue-400", a: 60 },
    { c: "bg-green-400", a: 120 },
    { c: "bg-pink-400", a: 180 },
    { c: "bg-purple-400", a: 240 },
  ];
  return (
    <Wrap>
      <motion.div
        animate={{ rotate: [-8, 8, -8] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="text-7xl md:text-8xl drop-shadow-2xl"
      >
        🐧
      </motion.div>
      {drops.map(({ c, a }, i) => (
        <motion.span
          key={i}
          className={`absolute h-4 w-4 rounded-full ${c} shadow-lg`}
          style={{ transform: `rotate(${a}deg) translateY(-95px)` }}
          animate={{ scale: [0.6, 1.2, 0.6], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </Wrap>
  );
}

/* L7 — Калейдоскоп фигур */
export function L07() {
  const shapes = [
    { shape: "circle", c: "bg-yellow-300", a: 0 },
    { shape: "square", c: "bg-pink-400", a: 60 },
    { shape: "triangle", c: "bg-cyan-300", a: 120 },
    { shape: "circle", c: "bg-violet-300", a: 180 },
    { shape: "square", c: "bg-orange-300", a: 240 },
    { shape: "triangle", c: "bg-emerald-300", a: 300 },
  ];
  return (
    <Wrap>
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      >
        {shapes.map(({ shape, c, a }, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2"
            style={{ transform: `rotate(${a}deg) translateY(-80px)` }}
            animate={{ scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.2 }}
          >
            {shape === "circle" && <div className={`h-10 w-10 rounded-full ${c} shadow-lg`} />}
            {shape === "square" && <div className={`h-10 w-10 rounded-md ${c} shadow-lg`} />}
            {shape === "triangle" && (
              <div
                className="h-0 w-0"
                style={{
                  borderLeft: "20px solid transparent",
                  borderRight: "20px solid transparent",
                  borderBottom: `34px solid currentColor`,
                  color: c.includes("cyan") ? "#67e8f9" : c.includes("emerald") ? "#6ee7b7" : "#fde68a",
                  filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.2))",
                }}
              />
            )}
          </motion.div>
        ))}
      </motion.div>
      <Shapes className="h-14 w-14 text-white drop-shadow-xl" />
    </Wrap>
  );
}

/* L8 — Волшебная палочка со звёздами */
export function L08() {
  const trail = [0, 1, 2, 3, 4];
  return (
    <Wrap>
      <motion.div
        animate={{ rotate: [-20, 20, -20], x: [-20, 20, -20], y: [10, -10, 10] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <Wand2 className="h-24 w-24 md:h-28 md:w-28 text-white drop-shadow-2xl" strokeWidth={1.5} />
      </motion.div>
      {trail.map((i) => (
        <motion.div
          key={i}
          className="absolute"
          animate={{
            x: [-30 + i * 10, 30 - i * 10, -30 + i * 10],
            y: [-20, 20, -20],
            opacity: [0, 1, 0],
            scale: [0.4, 1, 0.4],
            rotate: 360,
          }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
        >
          <Star className="h-5 w-5 text-yellow-200 fill-yellow-200" />
        </motion.div>
      ))}
    </Wrap>
  );
}

/* L9 — Фигура: вращение, отражение, клонирование */
export function L09() {
  return (
    <Wrap>
      <motion.div
        animate={{ rotate: [0, 180, 180, 360, 360], scaleX: [1, 1, -1, -1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <RotateCw className="h-24 w-24 md:h-28 md:w-28 text-white drop-shadow-2xl" strokeWidth={1.5} />
      </motion.div>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ transform: `translateX(${(i - 1) * 60}px)` }}
          animate={{ opacity: [0, 0.4, 0], scale: [0.6, 1, 0.6] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.4 }}
        >
          <div className="h-8 w-8 rounded bg-white/30" />
        </motion.div>
      ))}
    </Wrap>
  );
}

/* L10 — Флажок и автокурсор */
export function L10() {
  return (
    <Wrap>
      <motion.div animate={floatY} transition={floatT} className="relative z-10">
        <Flag className="h-24 w-24 md:h-28 md:w-28 text-green-300 fill-green-300 drop-shadow-2xl" strokeWidth={1.5} />
      </motion.div>
      <motion.div
        className="absolute"
        animate={{
          x: [80, 0, 0, 80],
          y: [80, 0, 0, 80],
          scale: [1, 1, 0.8, 1],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", times: [0, 0.4, 0.5, 1] }}
      >
        <MousePointer2 className="h-8 w-8 text-white fill-white drop-shadow-lg" />
      </motion.div>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: `${30 + i * 18}%`, top: `${75}%` }}
          animate={{ opacity: [0, 1, 0], y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1.5 + i * 0.2 }}
        >
          <Sparkles className="h-4 w-4 text-yellow-200" />
        </motion.div>
      ))}
    </Wrap>
  );
}

/* L11 — Робот шагает по клеткам со стрелками */
export function L11() {
  return (
    <Wrap>
      {/* grid */}
      <div className="absolute inset-2 grid grid-cols-4 grid-rows-4 gap-1 opacity-40">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="rounded-sm border border-white/30" />
        ))}
      </div>
      <motion.div
        className="absolute"
        animate={{
          x: [-60, -20, -20, 20, 20, 60],
          y: [-60, -60, -20, -20, 20, 20],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Bot className="h-14 w-14 text-white drop-shadow-xl" strokeWidth={1.5} />
      </motion.div>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: `${30 + i * 20}%`, top: `${30 + i * 15}%` }}
          animate={{ opacity: [0, 1, 0], scale: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5 }}
        >
          <ArrowRight className="h-6 w-6 text-yellow-200" strokeWidth={3} />
        </motion.div>
      ))}
    </Wrap>
  );
}

/* L12 — Робот выполняет команды */
export function L12() {
  return (
    <Wrap>
      <motion.div
        animate={{ rotate: [0, 0, -15, 0, 15, 0], y: [0, -8, 0, -8, 0, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <Bot className="h-28 w-28 md:h-32 md:w-32 text-white drop-shadow-2xl" strokeWidth={1.5} />
      </motion.div>
      {/* command "buttons" pressing */}
      {[
        { label: "↑", x: -85, d: 0 },
        { label: "→", x: 85, d: 0.6 },
        { label: "↻", x: -85, y: 60, d: 1.2 },
      ].map(({ label, x, y = 0, d }, i) => (
        <motion.div
          key={i}
          className="absolute flex h-9 w-9 items-center justify-center rounded-lg bg-white/95 font-bold text-violet-700 shadow-lg"
          style={{ x, y }}
          animate={{ scale: [1, 0.85, 1], boxShadow: ["0 4px 8px rgba(0,0,0,0.2)", "0 1px 2px rgba(0,0,0,0.4)", "0 4px 8px rgba(0,0,0,0.2)"] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3.1, delay: d }}
        >
          {label}
        </motion.div>
      ))}
    </Wrap>
  );
}

/* L13 — Scratch кот подпрыгивает и подмигивает */
export function L13() {
  return (
    <Wrap>
      <motion.div
        animate={{ y: [0, -25, 0], rotate: [0, -5, 5, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
        className="relative"
      >
        <Cat className="h-28 w-28 md:h-36 md:w-36 text-orange-300 fill-orange-300 drop-shadow-2xl" strokeWidth={1.2} />
        {/* wink star */}
        <motion.div
          className="absolute right-3 top-6"
          animate={{ scale: [0, 1.4, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1 }}
        >
          <Sparkles className="h-5 w-5 text-yellow-200" />
        </motion.div>
      </motion.div>
      {/* shadow */}
      <motion.div
        className="absolute bottom-2 h-2 w-20 rounded-full bg-black/30 blur-md"
        animate={{ scaleX: [1, 0.7, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
      />
    </Wrap>
  );
}

/* L14 — Кот переходит из зимы в лето */
export function L14() {
  return (
    <Wrap>
      <div className="relative h-full w-full overflow-hidden rounded-2xl">
        {/* scenes */}
        <motion.div
          className="absolute inset-0 flex items-center justify-around bg-gradient-to-r from-sky-200 to-yellow-200"
          animate={{ x: ["0%", "-50%", "-50%", "0%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", times: [0, 0.45, 0.55, 1] }}
          style={{ width: "200%" }}
        >
          <Snowflake className="h-12 w-12 text-white/80" />
          <Sun className="h-14 w-14 text-yellow-500 fill-yellow-300" />
        </motion.div>
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        >
          <Cat className="h-16 w-16 text-orange-500 fill-orange-300 drop-shadow-xl" strokeWidth={1.3} />
        </motion.div>
      </div>
    </Wrap>
  );
}

/* L15 — Яблоки падают в корзину */
export function L15() {
  return (
    <Wrap>
      {/* tree top */}
      <div className="absolute left-1/2 top-2 -translate-x-1/2 text-6xl">🌳</div>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ y: -10, x: -30 + i * 30, opacity: 0 }}
          animate={{ y: [0, 100], opacity: [0, 1, 1, 0], rotate: [0, 180] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.5 }}
        >
          <Apple className="h-8 w-8 text-red-400 fill-red-400" />
        </motion.div>
      ))}
      {/* basket */}
      <motion.div
        className="absolute bottom-3 text-5xl"
        animate={{ rotate: [-3, 3, -3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        🧺
      </motion.div>
    </Wrap>
  );
}

/* L16 — Сортировка фрукты/овощи */
export function L16() {
  return (
    <Wrap>
      <motion.div
        className="absolute"
        animate={{ x: [0, -90, -90], y: [0, -30, -30], opacity: [1, 1, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
      >
        <Apple className="h-12 w-12 text-red-400 fill-red-400 drop-shadow-lg" />
      </motion.div>
      <motion.div
        className="absolute"
        animate={{ x: [0, 90, 90], y: [0, 30, 30], opacity: [1, 1, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: 0.3 }}
      >
        <Carrot className="h-12 w-12 text-orange-400 fill-orange-400 drop-shadow-lg" />
      </motion.div>
      {/* labels */}
      <div className="absolute -left-2 top-2 rounded-md bg-white/90 px-2 py-1 text-xs font-bold text-pink-700">🍎</div>
      <div className="absolute -right-2 bottom-2 rounded-md bg-white/90 px-2 py-1 text-xs font-bold text-orange-700">🥕</div>
    </Wrap>
  );
}

/* L17 — Вращающийся глобус с орбитальными иконками */
export function L17() {
  const orbit = [Monitor, Palette, Bot, Cat, Apple, Wand2];
  return (
    <Wrap>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <Globe className="h-24 w-24 md:h-32 md:w-32 text-white drop-shadow-2xl" strokeWidth={1.4} />
      </motion.div>
      {orbit.map((Icon, i) => {
        const angle = (i * 360) / orbit.length;
        return (
          <motion.div
            key={i}
            className="absolute"
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          >
            <div
              style={{ transform: `rotate(${angle}deg) translateY(-100px) rotate(-${angle}deg)` }}
              className="absolute"
            >
              <div className="rounded-full bg-white/95 p-2 shadow-lg">
                <Icon className="h-5 w-5 text-violet-600" />
              </div>
            </div>
          </motion.div>
        );
      })}
    </Wrap>
  );
}

/* L18-19 — Праздничный салют из инструментов */
export function L1819() {
  const burst = [
    { Icon: Star, c: "text-yellow-200 fill-yellow-200", a: 0 },
    { Icon: Brush, c: "text-pink-300", a: 45 },
    { Icon: Palette, c: "text-cyan-300", a: 90 },
    { Icon: Sparkles, c: "text-white", a: 135 },
    { Icon: Star, c: "text-orange-300 fill-orange-300", a: 180 },
    { Icon: Wand2, c: "text-violet-200", a: 225 },
    { Icon: FolderOpen, c: "text-green-300", a: 270 },
    { Icon: Sparkles, c: "text-yellow-200", a: 315 },
  ];
  return (
    <Wrap>
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="relative z-10 text-7xl drop-shadow-2xl"
      >
        🏆
      </motion.div>
      {burst.map(({ Icon, c, a }, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
          animate={{
            x: Math.cos((a * Math.PI) / 180) * 100,
            y: Math.sin((a * Math.PI) / 180) * 100,
            scale: [0, 1.2, 0],
            opacity: [0, 1, 0],
            rotate: 360,
          }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.15, ease: "easeOut" }}
        >
          <Icon className={`h-7 w-7 ${c} drop-shadow-lg`} />
        </motion.div>
      ))}
    </Wrap>
  );
}

export const lessonAnimationMap: Record<string, React.ComponentType> = {
  "lesson-01": L01, "lesson-02": L02, "lesson-03": L03, "lesson-04": L04, "lesson-05": L05,
  "lesson-06": L06, "lesson-07": L07, "lesson-08": L08, "lesson-09": L09, "lesson-10": L10,
  "lesson-11": L11, "lesson-12": L12, "lesson-13": L13, "lesson-14": L14, "lesson-15": L15,
  "lesson-16": L16, "lesson-17": L17, "lesson-18-19": L1819,
};
