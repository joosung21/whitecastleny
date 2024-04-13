"use client"
import { useState } from "react"
import { Checkbox, CheckboxGroup } from "@nextui-org/react"

export function CheckUI() {
  const [selected, setSelected] = useState(["Glen", "Theo"])
  const [isInvalid, setIsInvalid] = useState(true)

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
      <div className="md:col-span-3">
        <div className="font-semibold text-lg">Checkbox</div>
      </div>
      <div className="md:col-span-9">
        <Checkbox defaultSelected>선택하세요</Checkbox>
        <div className="flex gap-4 my-4">
          <Checkbox defaultSelected size="sm">
            Small
          </Checkbox>
          <Checkbox defaultSelected size="md">
            Medium
          </Checkbox>
          <Checkbox defaultSelected size="lg">
            Large
          </Checkbox>
        </div>
        <div className="flex gap-4">
          <Checkbox isDisabled>Disabled 선택안됨</Checkbox>
          <Checkbox isDisabled defaultSelected>
            Disabled 선택됨
          </Checkbox>
        </div>

        <div className="flex flex-col gap-3 my-6">
          <CheckboxGroup
            label="Checkbox Group(세로)"
            value={selected}
            onValueChange={setSelected}
          >
            <Checkbox value="Glen">Glen(글렌)</Checkbox>
            <Checkbox value="Theo">Theo(테오)</Checkbox>
            <Checkbox value="May">May(메이)</Checkbox>
            <Checkbox value="Seori">Seori(서리)</Checkbox>
            <Checkbox value="Shein">Shein(셰인)</Checkbox>
            <Checkbox value="Jay">Jay(제이)</Checkbox>
          </CheckboxGroup>
          <div></div>
          <CheckboxGroup
            label="Checkbox Group(가로)"
            value={selected}
            orientation="horizontal"
            onValueChange={setSelected}
          >
            <Checkbox value="Glen">Glen(글렌)</Checkbox>
            <Checkbox value="Theo">Theo(테오)</Checkbox>
            <Checkbox value="May">May(메이)</Checkbox>
            <Checkbox value="Seori">Seori(서리)</Checkbox>
            <Checkbox value="Shein">Shein(셰인)</Checkbox>
            <Checkbox value="Jay">Jay(제이)</Checkbox>
          </CheckboxGroup>
          <p className="text-default-500 text-small">
            Selected: {selected.join(", ")}
          </p>
        </div>

        <div className="flex flex-col gap-3 my-6">
          <CheckboxGroup
            isRequired
            description="하나 이상을 선택해 주세요"
            isInvalid={isInvalid}
            label="사업자 형태"
            onValueChange={value => {
              setIsInvalid(value.length < 1)
            }}
          >
            <Checkbox value="1">개인사업자</Checkbox>
            <Checkbox value="2">법인사업자</Checkbox>
            <Checkbox value="3">과세</Checkbox>
            <Checkbox value="4">면세</Checkbox>
            <Checkbox value="5">일반과세자</Checkbox>
            <Checkbox value="6">간이과세자</Checkbox>
          </CheckboxGroup>
        </div>
      </div>
    </div>
  )
}
