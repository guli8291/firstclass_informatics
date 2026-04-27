import { useState, useMemo, useEffect } from "react";
import { useLang, t, ui } from "@/lib/language";
import { LessonSlide, MatchQuestion } from "@/lib/types";
import { motion, AnimatePresence } from "framer-motion";
import AudioButton from "@/components/AudioButton";
import Confetti from "@/components/Confetti";
import { Sparkles, Timer, Trophy, RotateCcw, Star } from "lucide-react";
import {
  DndContext,
  DragEndEvent,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  useDraggable,
  useDroppable,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";

/* -------------------------------------------------------------------------- */
/*  Drag & Drop matching game                                                 */
/* -------------------------------------------------------------------------- */

interface DraggableCardProps {
  id: string;
  label: string;
  matched: boolean;
  wrong: boolean;
}
function DraggableCard({ id, label, matched, wrong }: DraggableCardProps) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id, disabled: matched });
  return (
    <motion.div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      animate={wrong ? { x: [0, -8, 8, -6, 6, 0] } : {}}
      transition={wrong ? { duration: 0.4 } : {}}
      className={`select-none touch-none rounded-2xl border-2 p-3 text-base md:text-lg font-bold cursor-grab active:cursor-grabbing transition-all ${
        matched
          ? "border-green-500/60 bg-green-500/15 text-green-700 dark:text-green-300 opacity-60"
          : isDragging
          ? "border-primary bg-primary/15 text-primary shadow-2xl scale-105 rotate-2"
          : wrong
          ? "border-destructive bg-destructive/15 text-destructive"
          : "border-border bg-card hover:border-primary/60 hover:shadow-md"
      }`}
    >
      {label}
    </motion.div>
  );
}

interface DropZoneProps {
  id: string;
  label: string;
  matchedLabel?: string;
  isOver: boolean;
}
function DropZone({ id, label, matchedLabel, isOver }: DropZoneProps) {
  const { lang } = useLang();
  const { setNodeRef } = useDroppable({ id });
  const filled = !!matchedLabel;
  return (
    <div
      ref={setNodeRef}
      className={`min-h-[64px] rounded-2xl border-2 border-dashed p-3 text-center text-base md:text-lg font-semibold transition-all ${
        filled
          ? "border-green-500 bg-green-500/15 text-green-700 dark:text-green-300 border-solid"
          : isOver
          ? "border-primary bg-primary/15 text-primary scale-105"
          : "border-border/70 bg-muted/40 text-muted-foreground"
      }`}
    >
      <div className="text-xs uppercase tracking-wide opacity-70 mb-1">{label}</div>
      {filled ? <div>{matchedLabel} ✓</div> : <div className="opacity-50">{t(ui.dropHere, lang)}</div>}
    </div>
  );
}

function DragMatchGame({
  item,
  onScore,
  onCorrect,
}: {
  item: MatchQuestion;
  onScore: (n: number) => void;
  onCorrect: () => void;
}) {
  const { lang } = useLang();
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 100, tolerance: 5 } })
  );

  const shuffledLeft = useMemo(() => {
    const arr = item.pairs.map((p, i) => ({ id: `L-${i}`, origIdx: i, label: t(p.left, lang) }));
    return arr.sort(() => Math.random() - 0.5);
  }, [item.pairs, lang]);

  const rightItems = useMemo(
    () => item.pairs.map((p, i) => ({ id: `R-${i}`, origIdx: i, label: t(p.right, lang) })),
    [item.pairs, lang]
  );

  const [matches, setMatches] = useState<Record<number, number>>({}); // rightIdx -> leftIdx
  const [activeId, setActiveId] = useState<string | null>(null);
  const [overId, setOverId] = useState<string | null>(null);
  const [wrongLeft, setWrongLeft] = useState<number | null>(null);

  const handleStart = (e: DragStartEvent) => setActiveId(String(e.active.id));
  const handleEnd = (e: DragEndEvent) => {
    setActiveId(null);
    setOverId(null);
    if (!e.over) return;
    const leftIdx = Number(String(e.active.id).split("-")[1]);
    const rightIdx = Number(String(e.over.id).split("-")[1]);
    if (leftIdx === rightIdx) {
      setMatches((m) => ({ ...m, [rightIdx]: leftIdx }));
      onScore(10);
      onCorrect();
    } else {
      setWrongLeft(leftIdx);
      onScore(-2);
      setTimeout(() => setWrongLeft(null), 600);
    }
  };

  const allMatched = Object.keys(matches).length === item.pairs.length;
  const activeLabel = activeId ? shuffledLeft.find((l) => l.id === activeId)?.label : null;

  return (
    <div className="flex flex-col gap-4 rounded-3xl bg-card/90 backdrop-blur-sm p-5 md:p-6 card-shadow border border-border/40">
      <div className="flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-primary" />
        <h3 className="text-lg md:text-xl font-bold text-foreground">{t(item.instruction, lang)}</h3>
      </div>

      <DndContext
        sensors={sensors}
        onDragStart={handleStart}
        onDragOver={(e) => setOverId(e.over ? String(e.over.id) : null)}
        onDragEnd={handleEnd}
      >
        <div className="grid grid-cols-2 gap-4">
          {/* Left = draggables */}
          <div className="flex flex-col gap-2">
            <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1">
              {t(ui.drag, lang)} →
            </div>
            {shuffledLeft.map((l) => {
              const isMatched = Object.values(matches).includes(l.origIdx);
              return (
                <DraggableCard
                  key={l.id}
                  id={l.id}
                  label={l.label}
                  matched={isMatched}
                  wrong={wrongLeft === l.origIdx}
                />
              );
            })}
          </div>
          {/* Right = drop zones */}
          <div className="flex flex-col gap-2">
            <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1">
              {t(ui.to, lang)} ↓
            </div>
            {rightItems.map((r) => {
              const matchedLeftIdx = matches[r.origIdx];
              const matchedLabel =
                matchedLeftIdx !== undefined
                  ? shuffledLeft.find((l) => l.origIdx === matchedLeftIdx)?.label
                  : undefined;
              return (
                <div key={r.id} className="space-y-1">
                  <div className="text-sm font-semibold text-foreground/80">{r.label}</div>
                  <DropZone
                    id={r.id}
                    label={r.label}
                    matchedLabel={matchedLabel}
                    isOver={overId === r.id}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <DragOverlay>
          {activeLabel && (
            <div className="rounded-2xl border-2 border-primary bg-primary/20 text-primary p-3 text-base md:text-lg font-bold shadow-2xl rotate-3">
              {activeLabel}
            </div>
          )}
        </DragOverlay>
      </DndContext>

      <AnimatePresence>
        {allMatched && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center gap-2 rounded-2xl bg-green-500/20 p-4 text-center text-lg font-bold text-green-700 dark:text-green-300"
          >
            <Sparkles className="h-5 w-5" />
            {t(ui.wellDone, lang)}
            <Sparkles className="h-5 w-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Score + Timer HUD                                                         */
/* -------------------------------------------------------------------------- */

function GameHUD({ score, time, streak }: { score: number; time: number; streak: number }) {
  const { lang } = useLang();
  return (
    <div className="grid grid-cols-3 gap-2 md:gap-3">
      <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/15 border border-border/40 p-3 flex items-center gap-2">
        <Trophy className="h-5 w-5 text-primary shrink-0" />
        <div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">{t(ui.scoreShort, lang)}</div>
          <motion.div key={score} initial={{ scale: 1.4 }} animate={{ scale: 1 }} className="text-xl font-bold text-foreground">
            {score}
          </motion.div>
        </div>
      </div>
      <div className="rounded-2xl bg-gradient-to-br from-accent/20 to-primary/15 border border-border/40 p-3 flex items-center gap-2">
        <Timer className="h-5 w-5 text-accent-foreground shrink-0" />
        <div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">{t(ui.timeShort, lang)}</div>
          <div className="text-xl font-bold text-foreground tabular-nums">
            {Math.floor(time / 60)}:{String(time % 60).padStart(2, "0")}
          </div>
        </div>
      </div>
      <div className="rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/15 border border-border/40 p-3 flex items-center gap-2">
        <Star className="h-5 w-5 text-secondary fill-current shrink-0" />
        <div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">{t(ui.streakShort, lang)}</div>
          <div className="text-xl font-bold text-foreground">×{streak}</div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section                                                                   */
/* -------------------------------------------------------------------------- */

export default function SectionGames({ slide }: { slide: LessonSlide }) {
  const { lang } = useLang();
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [streak, setStreak] = useState(0);
  const [showConfetti, setShowConfetti] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const reset = () => {
    setScore(0);
    setTime(0);
    setStreak(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 md:grid-cols-6 gap-3 p-3 md:p-6 auto-rows-[minmax(110px,auto)]"
    >
      <Confetti show={showConfetti > 0} count={50} />

      {/* Title bar */}
      <div className="md:col-span-6 flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-3">
          <Sparkles className="h-7 w-7 text-primary" />
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">{t(slide.title, lang)}</h2>
        </div>
        <div className="flex items-center gap-2">
          {slide.audio && <AudioButton src={slide.audio} text={slide.title} />}
          <button
            onClick={reset}
            className="inline-flex items-center gap-1.5 rounded-xl bg-muted px-3 py-2 text-sm font-bold text-foreground hover:bg-muted/80"
          >
            <RotateCcw className="h-4 w-4" /> {t(ui.reset, lang)}
          </button>
        </div>
      </div>

      {/* HUD */}
      <div className="md:col-span-6">
        <GameHUD score={score} time={time} streak={streak} />
      </div>

      {/* Games */}
      <div className="md:col-span-6 grid gap-4">
        {slide.items?.map((item, i) =>
          item.type === "match" ? (
            <DragMatchGame
              key={i}
              item={item}
              onScore={(delta) => {
                setScore((s) => Math.max(0, s + delta));
                if (delta > 0) setStreak((s) => s + 1);
                else setStreak(0);
              }}
              onCorrect={() => setShowConfetti((c) => c + 1)}
            />
          ) : null
        )}
      </div>
    </motion.div>
  );
}
