"use client"
import { NextUIProvider } from "@nextui-org/react"
import { useTailwindBreakpoint } from "@/hooks/useTailwindBreakpoint"
import { useBreakpointStore } from "@/zustand/store"
import { useEffect } from "react"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

export function NextuiProvider({ children }: { children: React.ReactNode }) {
  const breakpoint = useTailwindBreakpoint()
  const setBreakpoint = useBreakpointStore(state => state.setBreakpoint)

  useEffect(() => {
    setBreakpoint(breakpoint)
  }, [breakpoint, setBreakpoint])

  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>{children}</NextUIProvider>
    </QueryClientProvider>
  )
}
