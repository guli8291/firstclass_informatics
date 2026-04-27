import { useRef, useState, useEffect } from "react";
import { useLang, t } from "@/lib/language";
import type { Translatable } from "@/lib/language";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import { useAudioState } from "@/lib/audioState";

interface AudioButtonProps {
  src?: string;
  text?: Translatable;
  className?: string;
  size?: "sm" | "md";
  audioId?: string;
}

const langMap: Record<string, string> = {
  kk: "kk-KZ",
  ru: "ru-RU",
  en: "en-US",
};

/**
 * Icon-only circular audio button. No labels.
 * Plays an audio src if available, otherwise speaks the text via TTS
 * in the currently selected language.
 */
export default function AudioButton({ src, text, className = "", size = "md", audioId }: AudioButtonProps) {
  const { lang } = useLang();
  const [playing, setPlayingLocal] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { setPlaying: setGlobalPlaying } = useAudioState();

  const setPlaying = (v: boolean) => {
    setPlayingLocal(v);
    if (audioId) setGlobalPlaying(v ? audioId : null);
  };

  useEffect(() => {
    if ("speechSynthesis" in window) {
      speechSynthesis.getVoices();
      speechSynthesis.onvoiceschanged = () => {
        speechSynthesis.getVoices();
      };
    }
  }, []);

  const stop = () => {
    audioRef.current?.pause();
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    setPlaying(false);
  };

  const speakTTS = () => {
    if (!text || !("speechSynthesis" in window)) {
      setPlaying(false);
      return;
    }

    speechSynthesis.cancel();

    const fullText = t(text, lang);

  // 🔧 разбиваем текст на предложения
    const chunks = fullText
      .replace(/\n/g, " ")
      .split(/[.!?]/)
      .map(s => s.trim())
      .filter(Boolean);

    const voices = speechSynthesis.getVoices();
    const currentLang = langMap[lang] || "kk-KZ";

  // 🔧 выбираем адекватный голос
    const selectedVoice =
      voices.find(v => v.lang === currentLang && v.name.toLowerCase().includes("female")) ||
      voices.find(v => v.lang === currentLang) ||
      voices[0];

    let index = 0;

    const speakNext = () => {
      if (index >= chunks.length) {
        setPlaying(false);
        return;
     }

     const utterance = new SpeechSynthesisUtterance(chunks[index]);

     utterance.lang = currentLang;
     utterance.voice = selectedVoice;

    // 🔧 настройки под русский
     utterance.rate = currentLang === "ru-RU" ? 0.85 : 0.9;
     utterance.pitch = 1;

     utterance.onend = () => {
       index++;
       speakNext();
     };

     utterance.onerror = () => {
       setPlaying(false);
     };

     speechSynthesis.speak(utterance);
  };

  setPlaying(true);
  speakNext();
  };;

  const play = () => {
    if (playing) {
      stop();
      return;
    }
    if (src) {
      const audio = new Audio(src);
      audioRef.current = audio;
      audio.onended = () => setPlaying(false);
      audio.onerror = () => speakTTS();
      setPlaying(true);
      audio.play().catch(() => speakTTS());
    } else {
      speakTTS();
    }
  };

  const dim = size === "sm" ? "h-9 w-9" : "h-11 w-11";
  const icon = size === "sm" ? "h-4 w-4" : "h-5 w-5";

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      onClick={play}
      aria-label="Play audio"
      className={`relative inline-flex ${dim} shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md ring-1 ring-primary/30 transition-colors hover:bg-primary/90 ${className}`}
    >
      {playing ? <VolumeX className={icon} /> : <Volume2 className={icon} />}
      {playing && (
        <motion.span
          className="absolute inset-0 rounded-full ring-2 ring-primary/60"
          animate={{ scale: [1, 1.4], opacity: [0.7, 0] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
      )}
    </motion.button>
  );
}
