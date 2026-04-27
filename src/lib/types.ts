import { Translatable } from "./language";

export interface ChoiceQuestion {
  type: "choice";
  question: Translatable;
  options: Translatable[];
  correctIndex: number;
}

export interface MatchQuestion {
  type: "match";
  instruction: Translatable;
  pairs: { left: Translatable; right: Translatable }[];
}

export type InteractiveItem = ChoiceQuestion | MatchQuestion;

export interface LessonSlide {
  type: "hero" | "topic" | "rules" | "interactive" | "game" | "video" | "summary";
  title?: Translatable;
  subtitle?: Translatable;
  text?: Translatable;
  points?: Translatable[];
  image?: string;
  audio?: string;
  video?: string;
  videos?: string[];
  items?: InteractiveItem[];
  emoji?: string;
  color?: string;
}

export interface LessonData {
  id: string;
  title: Translatable;
  description: Translatable;
  emoji: string;
  color: string;
  slides: LessonSlide[];
}
