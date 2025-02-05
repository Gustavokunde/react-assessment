import { create } from "zustand";
import api from "../services/api";

interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: { path: string; extension: string };
}

interface MarvelState {
  characters: Character[];
  loading: boolean;
  error: string | null;
  fetchCharacters: () => Promise<void>;
}

export const useMarvelStore = create<MarvelState>((set) => ({
  characters: [],
  loading: false,
  error: null,
  fetchCharacters: async () => {
    set({ loading: true, error: null });
    try {
      const response = await api.get("/characters", { params: { limit: 20 } });
      set({ characters: response.data.data.results, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch characters", loading: false });
    }
  },
}));
