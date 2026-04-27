import { createContext, useContext, useState, ReactNode, useCallback } from "react";

interface AudioState {
  playingId: string | null;
  setPlaying: (id: string | null) => void;
  isPlaying: (id: string) => boolean;
}

const Ctx = createContext<AudioState>({
  playingId: null,
  setPlaying: () => {},
  isPlaying: () => false,
});

export function AudioStateProvider({ children }: { children: ReactNode }) {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const setPlaying = useCallback((id: string | null) => setPlayingId(id), []);
  const isPlaying = useCallback((id: string) => playingId === id, [playingId]);
  return <Ctx.Provider value={{ playingId, setPlaying, isPlaying }}>{children}</Ctx.Provider>;
}

export function useAudioState() {
  return useContext(Ctx);
}
