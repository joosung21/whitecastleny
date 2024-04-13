import { create } from "zustand"

interface LoadingOverlayState {
  isLoading: boolean
  startLoading: () => void
  stopLoading: () => void
}

export const useLoadingOverlayStore = create<LoadingOverlayState>()(set => ({
  isLoading: false,
  startLoading: () => set({ isLoading: true }),
  stopLoading: () => set({ isLoading: false }),
}))
