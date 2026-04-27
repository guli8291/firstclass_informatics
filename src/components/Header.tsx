import { Link } from "react-router-dom";
import { useLang, t, ui } from "@/lib/language";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header() {
  const { lang } = useLang();
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-card/80 px-4 py-3 backdrop-blur-lg md:px-8">
      <Link to="/" className="flex items-center gap-2">
        <span className="text-2xl">📚</span>
        <span className="font-display text-xl font-bold text-primary">
          {t(ui.lessons, lang)}
        </span>
      </Link>
      <LanguageSwitcher />
    </header>
  );
}
