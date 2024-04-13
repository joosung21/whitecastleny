import { useLayoutStore, useBreakpointStore } from "@/zustand/store"
import clsx from "clsx"

export default function Main({ children }: { children: React.ReactNode }) {
  const isLeftOpen = useLayoutStore(state => state.isLeftOpen)
  const isMobile = useBreakpointStore(state => state.isMobile)

  return (
    <div
      className={clsx("main-content", {
        full: !isLeftOpen || isMobile,
      })}
    >
      {children}
    </div>
  )
}
