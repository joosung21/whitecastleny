"use client"

import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import { Button } from "@nextui-org/react"
import { useRouter } from "next/navigation"

export default function BackBtn() {
  const router = useRouter()

  return (
    <Button
      isIconOnly
      color="default"
      variant="light"
      aria-label="Take a photo"
      className="mr-2"
      onClick={() => {
        router.back()
      }}
    >
      <ChevronLeftIcon className="w-6 n-6" />
    </Button>
  )
}
