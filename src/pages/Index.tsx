import { Link } from "react-router-dom";
import { useLang, t, ui } from "@/lib/language";
import { lessons } from "@/data";
import Header from "@/components/Header";
import { motion } from "framer-motion";

export default function Index() {
  const { lang } = useLang();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-8 md:py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-2 text-center font-display text-4xl font-bold text-foreground md:text-5xl"
        >
          {t({ kk: "1-сынып Информатика", ru: "Информатика 1 класс", en: "Grade 1 Informatics" }, lang)}
        </motion.h1>
        <p className="mb-10 text-center text-lg text-muted-foreground">
          {t({ kk: "Сабақты таңдаңыз", ru: "Выберите урок", en: "Choose a lesson" }, lang)}
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {lessons.map((lesson, i) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={`/lesson/${lesson.id}`}
                className="group flex flex-col gap-3 rounded-2xl bg-card p-6 card-shadow transition-all hover:scale-[1.02] hover:shadow-xl"
              >
                <span className="text-4xl">{lesson.emoji}</span>
                <h2 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {t(lesson.title, lang)}
                </h2>
                <p className="text-sm text-muted-foreground">{t(lesson.description, lang)}</p>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  {t(ui.startLesson, lang)} →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
