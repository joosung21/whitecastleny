"use client"

import React, { useState } from "react"
import DatePicker from "react-datepicker"
import { CalendarDaysIcon } from "@heroicons/react/24/outline"
import { forwardRef } from "react"
import { Input } from "@nextui-org/react"
import { ko } from "date-fns/esm/locale"

interface Props {
  value?: string
  onClick?: () => void
}

export function DatePickerUI() {
  const [startDate, setStartDate] = useState<Date | null>(new Date())

  const CustomInput = forwardRef<HTMLInputElement, Props>(
    ({ value, onClick }, ref) => (
      <Input
        label="시작일"
        labelPlacement="outside"
        value={value}
        ref={ref}
        onClick={onClick}
        endContent={<CalendarDaysIcon className="text-default-400 w-6 h-6" />}
      />
    ),
  )
  CustomInput.displayName = "CustomInput"

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
      <div className="md:col-span-3">
        <div className="font-semibold text-lg">DatePicker</div>
      </div>
      <div className="md:col-span-9">
        <DatePicker
          selected={startDate}
          locale={ko}
          dateFormat="yyyy년 M월 d일"
          minDate={new Date("2022-11-01")}
          maxDate={new Date()}
          onChange={date => date && setStartDate(date)}
          customInput={<CustomInput />}
        />
      </div>
    </div>
  )
}
