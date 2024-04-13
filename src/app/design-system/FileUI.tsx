"use client"
import React, { useRef } from "react"
import { Button } from "@nextui-org/react"
import { PaperClipIcon } from "@heroicons/react/24/solid"

export function FileUI() {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // 파일 처리 로직
      console.log(file.name)
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
      <div className="md:col-span-3">
        <div className="font-semibold text-lg">File Upload</div>
      </div>
      <div className="md:col-span-9">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <Button
          startContent={<PaperClipIcon className="w-6" />}
          onClick={handleButtonClick}
        >
          파일 업로드
        </Button>
      </div>
    </div>
  )
}
