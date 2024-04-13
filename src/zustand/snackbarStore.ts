import { create } from "zustand"

interface SnackbarState {
  isOpen: boolean
  message: string
  type: "default" | "primary" | "success" | "warning" | "danger"
  openSnackbar: (
    message: string,
    type: "default" | "primary" | "success" | "warning" | "danger",
  ) => void
  closeSnackbar: () => void
}

export const useSnackbarStore = create<SnackbarState>()(set => ({
  isOpen: false,
  message: "저는 스낵바입니다.",
  type: "success",
  openSnackbar: (message, type) => {
    // 열려 있으면 닫았다가 다시 열기
    if (useSnackbarStore.getState().isOpen) {
      set({ isOpen: false })
      setTimeout(() => {
        set({ isOpen: true, message, type })
      }, 100)
    } else {
      set({ isOpen: true, message, type })
    }
  },
  closeSnackbar: () => set({ isOpen: false }),
}))
