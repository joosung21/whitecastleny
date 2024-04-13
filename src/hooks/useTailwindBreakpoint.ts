"use client"
import { useState, useEffect } from "react"
import { useLayoutStore } from "@/zustand/store"

const useTailwindBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState("")
  const [prevBreakpoint, setPrevBreakpoint] = useState("")
  const isLeftOpen = useLayoutStore(state => state.isLeftOpen)
  const closeLeft = useLayoutStore(state => state.closeLeft)
  const openLeft = useLayoutStore(state => state.openLeft)

  useEffect(() => {
    setPrevBreakpoint(breakpoint)

    if (breakpoint !== prevBreakpoint) {
      // Left메뉴 실시간 자동 열기/닫기
      if (["xs", "sm"].includes(breakpoint) && isLeftOpen) {
        closeLeft() // close left
      } else if (
        ["md", "lg", "xl", "2xl"].includes(breakpoint) &&
        !isLeftOpen
      ) {
        // openLeft() // open left
      }
    }

    const checkBreakpoint = () => {
      const width = window.innerWidth

      if (width < 640) {
        setBreakpoint("xs") // Extra small devices (portrait phones)
      } else if (width >= 640 && width < 768) {
        setBreakpoint("sm") // Small devices (landscape phones)
      } else if (width >= 768 && width < 1024) {
        setBreakpoint("md") // Medium devices (tablets)
      } else if (width >= 1024 && width < 1280) {
        setBreakpoint("lg") // Large devices (desktops)
      } else if (width >= 1280 && width < 1536) {
        setBreakpoint("xl") // Extra large devices (large desktops)
      } else {
        setBreakpoint("2xl") // Extra extra large devices
      }
    }

    checkBreakpoint()
    window.addEventListener("resize", checkBreakpoint)

    return () => window.removeEventListener("resize", checkBreakpoint)
  }, [breakpoint, isLeftOpen, closeLeft, openLeft, prevBreakpoint])

  return breakpoint
}

export { useTailwindBreakpoint }
