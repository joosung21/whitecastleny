"use client"
import styles from "./LoadingOverlay.module.scss"
import { CircularProgress } from "@nextui-org/react"
import { useLoadingOverlayStore } from "@/zustand/loadingOverlayStore"
import { useState, useEffect } from "react"

export default function LoadingOverlay() {
  const isLoading = useLoadingOverlayStore(state => state.isLoading)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (isLoading) {
      setShow(true)
    } else if (show) {
      const timer = setTimeout(() => setShow(false), 0)
      return () => clearTimeout(timer)
    }
  }, [isLoading, show])

  return (
    show && (
      <div
        className={`${
          isLoading ? styles.fadeIn : styles.fadeOut
        } fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center`}
      >
        <div className="absolute w-full h-full bg-white opacity-60"></div>
        <CircularProgress
          classNames={{
            svg: "w-20 h-20",
          }}
          aria-label="Loading..."
          strokeWidth={4}
        />
      </div>
    )
  )
}
