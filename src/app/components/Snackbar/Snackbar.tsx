"use client"
import styles from "./Snackbar.module.scss"
import { useSnackbarStore } from "@/zustand/snackbarStore"
import { XCircleIcon } from "@heroicons/react/24/solid"
import { useEffect } from "react"

export default function Snackbar() {
  const snackbarType = useSnackbarStore(state => state.type)
  const snackbarMessage = useSnackbarStore(state => state.message)
  const IsOpen = useSnackbarStore(state => state.isOpen)

  useEffect(() => {
    let timerId: NodeJS.Timeout | null = null

    if (IsOpen) {
      timerId = setTimeout(() => {
        useSnackbarStore.setState({ isOpen: false })
      }, 3000)
    }

    return () => {
      if (timerId) {
        clearTimeout(timerId)
      }
    }
  }, [IsOpen])

  return (
    <div
      className={`${
        styles.basic
      } bg-${snackbarType} bottom-4 flex items-center justify-between ${
        IsOpen ? "opacity-100" : "opacity-0"
      } transition rounded-xl `}
    >
      <div className="pl-1 pr-2 text-sm">{snackbarMessage}</div>
      <button
        className="float-right"
        onClick={() => {
          useSnackbarStore.setState({ isOpen: false })
        }}
      >
        <XCircleIcon className="h-5 w-5 opacity-80 hover:opacity-100 transition" />
      </button>
    </div>
  )
}
