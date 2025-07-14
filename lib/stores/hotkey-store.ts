import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface HotkeyState {
  showFormulas: boolean
  animationsEnabled: boolean
  toggleFormulas: () => void
  toggleAnimations: () => void
  reset: () => void
}

export const useHotkeyStore = create<HotkeyState>()(
  persist(
    (set) => ({
      showFormulas: false,
      animationsEnabled: true,
      toggleFormulas: () => set((state) => ({ showFormulas: !state.showFormulas })),
      toggleAnimations: () => set((state) => ({ animationsEnabled: !state.animationsEnabled })),
      reset: () => set({ showFormulas: false, animationsEnabled: true }),
    }),
    {
      name: 'hotkey-store',
    }
  )
) 