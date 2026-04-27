import { useLang, t } from "@/lib/language";
import type { Lang } from "@/lib/language";

const langLabels: Record<Lang, string> = { kk: "KK", ru: "RU", en: "EN" };

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex gap-1 rounded-xl bg-muted p-1">
      {(["kk", "ru", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`rounded-lg px-3 py-1.5 text-sm font-bold transition-all ${
            lang === l
              ? "bg-primary text-primary-foreground shadow-md"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {langLabels[l]}
        </button>
      ))}
    </div>
  );
}
