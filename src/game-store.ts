import { create } from 'zustand'


interface GameState {
    text: string
    setText: (newText: string) => void
}


export const useGameStore = create<GameState>((set) => ({
    text: '',
    setText: (newText: string) => set({ text: newText })
}))