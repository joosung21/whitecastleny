"use client"
import { Button } from "@nextui-org/react"
import { useLoadingOverlayStore } from "@/zustand/loadingOverlayStore"

export function LoadingOverlayUI() {
  const startLoading = useLoadingOverlayStore(state => state.startLoading)
  const stopLoading = useLoadingOverlayStore(state => state.stopLoading)

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
      <div className="md:col-span-3">
        <div className="font-semibold text-lg">Loading Overlay</div>
      </div>
      <div className="md:col-span-4 space-x-2">
        <Button
          color="primary"
          onClick={() => {
            startLoading()
            setTimeout(() => {
              stopLoading()
            }, 1000)
          }}
        >
          로딩시작
        </Button>
      </div>
    </div>
  )
}
