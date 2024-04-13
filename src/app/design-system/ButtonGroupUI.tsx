"use client"
import { Button, ButtonGroup } from "@nextui-org/react"
import { useState } from "react"

const buttons = [
  { label: "첫번째", value: 1 },
  { label: "두번째", value: 2 },
  { label: "세번째", value: 3 },
]

export function ButtonGroupUI() {
  const [selectedValue, setSelectedValue] = useState(1)

  const onButtonClick = (value: number) => setSelectedValue(value)

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
      <div className="md:col-span-3">
        <div className="font-semibold text-lg">Button Group</div>
      </div>
      <div className="md:col-span-9">
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <ButtonGroup>
            <Button>첫번째</Button>
            <Button>두번째</Button>
            <Button>세번째</Button>
          </ButtonGroup>
          <ButtonGroup>
            {buttons.map(({ label, value }) => (
              <Button
                key={value}
                onClick={() => onButtonClick(value)}
                color={value === selectedValue ? "secondary" : "default"}
              >
                {label}
              </Button>
            ))}
          </ButtonGroup>
        </div>
      </div>
    </div>
  )
}
