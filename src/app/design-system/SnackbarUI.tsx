"use client"
import { Button } from "@nextui-org/react"
import { useSnackbarStore } from "@/zustand/snackbarStore"

export function SnackbarUI() {
  const openSnackbar = useSnackbarStore(state => state.openSnackbar)

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
      <div className="md:col-span-3">
        <div className="font-semibold text-lg">Snackbar</div>
      </div>
      <div className="md:col-span-9 space-x-2">
        <Button
          color="success"
          onClick={() => openSnackbar("성공적으로 저장하였습니다.", "success")}
        >
          성공 스낵바
        </Button>

        <Button
          color="danger"
          onClick={() => openSnackbar("저장에 실패하였습니다.", "danger")}
        >
          실패 스낵바
        </Button>

        <Button
          color="warning"
          onClick={() => openSnackbar("경고 스낵바", "warning")}
        >
          경고 스낵바
        </Button>
      </div>
    </div>
  )
}
