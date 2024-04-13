"use client"
import { Button, ButtonGroup } from "@nextui-org/react"

export function ButtonGroupUI() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
      <div className="md:col-span-3">
        <div className="font-semibold text-lg">Button Group</div>
      </div>
      <div className="md:col-span-9">
        <ButtonGroup>
          <Button>첫번째</Button>
          <Button>두번째</Button>
          <Button>세번째</Button>
        </ButtonGroup>
      </div>
    </div>
  )
}
