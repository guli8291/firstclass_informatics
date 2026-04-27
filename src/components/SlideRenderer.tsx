import { LessonSlide } from "@/lib/types";
import SectionHero from "./sections/SectionHero";
import SectionTopic from "./sections/SectionTopic";
import SectionRules from "./sections/SectionRules";
import SectionInteractive from "./sections/SectionInteractive";
import SectionGames from "./sections/SectionGames";
import SectionVideo from "./sections/SectionVideo";
import SectionSummary from "./sections/SectionSummary";

export default function SlideRenderer({
  slide,
  lessonId,
  onNext,
}: {
  slide: LessonSlide;
  lessonId?: string;
  onNext?: () => void;
}) {
  switch (slide.type) {
    case "hero": return <SectionHero slide={slide} lessonId={lessonId} onNext={onNext} />;
    case "topic": return <SectionTopic slide={slide} />;
    case "rules": return <SectionRules slide={slide} />;
    case "interactive": return <SectionInteractive slide={slide} />;
    case "game": return <SectionGames slide={slide} />;
    case "video": return <SectionVideo slide={slide} />;
    case "summary": return <SectionSummary slide={slide} />;
    default: return null;
  }
}
