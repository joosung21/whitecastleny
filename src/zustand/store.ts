import { create } from "zustand"
// import { devtools, persist } from 'zustand/middleware'

interface BreakpointState {
  breakpoint: string
  isMobile: boolean
  setBreakpoint: (breakpoint: string) => void
}

interface LayoutState {
  isLeftOpen: boolean
  openGroup: string[]
  toggleLeft: () => void
  openLeft: () => void
  closeLeft: () => void
  setOpenGroup: (group: string[]) => void
}

export const useBreakpointStore = create<BreakpointState>(set => ({
  isMobile: true,
  breakpoint: "sm",
  setBreakpoint: breakpoint =>
    set({ breakpoint, isMobile: breakpoint === "sm" || breakpoint === "xs" }),
}))

export const useLayoutStore = create<LayoutState>(set => ({
  isLeftOpen: false,
  openGroup: [],

  toggleLeft: () => set(state => ({ isLeftOpen: !state.isLeftOpen })),
  openLeft: () => set({ isLeftOpen: true }),
  closeLeft: () => set({ isLeftOpen: false }),
  setOpenGroup: (group: string[]) => set({ openGroup: group }),
}))
