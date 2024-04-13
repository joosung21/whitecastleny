"use client"

import {
  Select,
  SelectItem,
  Avatar,
  Autocomplete,
  AutocompleteItem,
} from "@nextui-org/react"
import { paymentMethods } from "./select-data"
import { useState } from "react"

export function SelectUI() {
  const [methods, setMethods] = useState([] as string[])

  const handleSelectionChange = (selection: string[]) => {
    const selectedMethods = Array.from(selection)
    setMethods(selectedMethods)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
      <div className="md:col-span-3">
        <div className="font-semibold text-lg">Select</div>
        <div className="text-sm">Input의 모든 디자인시스템 + 선택옵션</div>
      </div>
      <div className="md:col-span-9">
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Select label="결제수단">
            {paymentMethods.map(method => (
              <SelectItem key={method.value} value={method.value}>
                {method.label}
              </SelectItem>
            ))}
          </Select>
          <Select
            label="결제수단 다중선택"
            placeholder="여러개 선택 가능"
            selectionMode="multiple"
            className="max-w-xs"
            onSelectionChange={keys => {
              handleSelectionChange(Array.from(keys) as string[])
            }}
          >
            {paymentMethods.map(method => (
              <SelectItem key={method.value} value={method.value}>
                {method.label}
              </SelectItem>
            ))}
          </Select>
        </div>

        {methods.length > 0 && (
          <div className="my-4">다중선택: {methods.join(", ")}</div>
        )}
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
          <Select className="max-w-xs" label="국가선택 (Start Items)">
            <SelectItem
              key="argentina"
              startContent={
                <Avatar
                  alt="Argentina"
                  className="w-6 h-6"
                  src="https://flagcdn.com/ar.svg"
                />
              }
            >
              Argentina
            </SelectItem>
            <SelectItem
              key="venezuela"
              startContent={
                <Avatar
                  alt="Venezuela"
                  className="w-6 h-6"
                  src="https://flagcdn.com/ve.svg"
                />
              }
            >
              Venezuela
            </SelectItem>
            <SelectItem
              key="brazil"
              startContent={
                <Avatar
                  alt="Brazil"
                  className="w-6 h-6"
                  src="https://flagcdn.com/br.svg"
                />
              }
            >
              Brazil
            </SelectItem>
            <SelectItem
              key="switzerland"
              startContent={
                <Avatar
                  alt="Switzerland"
                  className="w-6 h-6"
                  src="https://flagcdn.com/ch.svg"
                />
              }
            >
              Switzerland
            </SelectItem>
            <SelectItem
              key="germany"
              startContent={
                <Avatar
                  alt="Germany"
                  className="w-6 h-6"
                  src="https://flagcdn.com/de.svg"
                />
              }
            >
              Germany
            </SelectItem>
            <SelectItem
              key="spain"
              startContent={
                <Avatar
                  alt="Spain"
                  className="w-6 h-6"
                  src="https://flagcdn.com/es.svg"
                />
              }
            >
              Spain
            </SelectItem>
            <SelectItem
              key="france"
              startContent={
                <Avatar
                  alt="France"
                  className="w-6 h-6"
                  src="https://flagcdn.com/fr.svg"
                />
              }
            >
              France
            </SelectItem>
            <SelectItem
              key="italy"
              startContent={
                <Avatar
                  alt="Italy"
                  className="w-6 h-6"
                  src="https://flagcdn.com/it.svg"
                />
              }
            >
              Italy
            </SelectItem>
            <SelectItem
              key="mexico"
              startContent={
                <Avatar
                  alt="Mexico"
                  className="w-6 h-6"
                  src="https://flagcdn.com/mx.svg"
                />
              }
            >
              Mexico
            </SelectItem>
          </Select>

          <Autocomplete label="검색 (AutoSelect)">
            {paymentMethods.map(method => (
              <AutocompleteItem key={method.value} value={method.value}>
                {method.label}
              </AutocompleteItem>
            ))}
          </Autocomplete>
        </div>
      </div>
    </div>
  )
}
