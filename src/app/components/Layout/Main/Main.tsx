"use client"
import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { useLayoutStore, useBreakpointStore } from "@/zustand/store"
import clsx from "clsx"

export default function Main({ children }: { children: React.ReactNode }) {
  const isLeftOpen = useLayoutStore(state => state.isLeftOpen)
  const isMobile = useBreakpointStore(state => state.isMobile)
  const mainContentRef = useRef<HTMLDivElement>(null)
  const path = usePathname()

  // 라우터 변경될 때 Main 스크롤 위치 초기화
  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTop = 0
    }
  }, [path])

  return (
    <div
      ref={mainContentRef}
      className={clsx("main-content", {
        full: !isLeftOpen || isMobile,
      })}
    >
      {children}
    </div>
  )
}
