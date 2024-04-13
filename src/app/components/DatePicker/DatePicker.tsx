"use client"

import DatePicker from "react-datepicker"
import { ko } from "date-fns/esm/locale"
import { Input } from "@nextui-org/react"
import { forwardRef } from "react"
import { CalendarDaysIcon } from "@heroicons/react/24/outline"
import moment from "moment"

type CustomInputProps = {
  value?: string
  onClick?: () => void
}

interface Props {
  date: string
  label?: string
  size?: "sm" | "md" | "lg"
  variant?: "flat" | "bordered" | "underlined" | "faded"
  onChange: (date: string) => void
}

export function DatePickerComponent({
  label,
  size,
  date,
  variant,
  onChange,
}: Props) {
  const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
    ({ value, onClick }, ref) => (
      <div className="relative">
        <Input
          value={value}
          label={label}
          ref={ref}
          size={size}
          variant={variant}
          endContent={<CalendarDaysIcon className="text-default-400 w-6 h-6" />}
        />
        <div
          className="absolute top-0 left-0 w-full h-full cursor-pointer"
          onClick={onClick}
        ></div>
      </div>
    ),
  )
  CustomInput.displayName = "CustomInput"

  return (
    <div>
      <DatePicker
        selected={new Date(date)}
        locale={ko}
        dateFormat="yyyy-MM-dd"
        onChange={date => date && onChange(moment(date).format("YYYY-MM-DD"))}
        customInput={<CustomInput />}
      />
    </div>
  )
}
