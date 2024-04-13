"use client"
import { Chip } from "@nextui-org/react"
import { useState } from "react"

const initialFruits = [
  "크레딧 카드",
  "계좌이체",
  "휴대폰 결제",
  "무통장 입금",
  "페이코",
]

export function ChipUI() {
  const [fruits, setFruits] = useState(initialFruits)

  const handleClose = (fruitToRemove: string) => {
    setFruits(fruits.filter(fruit => fruit !== fruitToRemove))
    if (fruits.length === 1) {
      setFruits(initialFruits)
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
      <div className="md:col-span-3">
        <div className="font-semibold text-lg">Chip</div>
      </div>
      <div className="md:col-span-9">
        <div className="flex gap-4">
          <Chip size="sm">Small</Chip>
          <Chip size="md">Medium</Chip>
          <Chip size="lg">Large</Chip>
        </div>

        <div className="flex gap-4 my-8">
          <Chip color="success" variant="solid">
            Solid
          </Chip>
          <Chip color="success" variant="bordered">
            Bordered
          </Chip>
          <Chip color="success" variant="light">
            Light
          </Chip>
          <Chip color="success" variant="flat">
            Flat
          </Chip>
          <Chip color="success" variant="faded">
            Faded
          </Chip>
          <Chip color="success" variant="shadow">
            Shadow
          </Chip>
          <Chip color="success" variant="dot">
            Dot
          </Chip>
        </div>

        <div className="flex gap-2">
          {fruits.map((fruit, index) => (
            <Chip key={index} onClose={() => handleClose(fruit)} variant="flat">
              {fruit}
            </Chip>
          ))}
        </div>
      </div>
    </div>
  )
}
