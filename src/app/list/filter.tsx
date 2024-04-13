"use client"
import { Select, SelectItem, Input, Button } from "@nextui-org/react"
import { DatePickerComponent } from "@/app/components/DatePicker/DatePicker"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { useSnackbarStore } from "@/zustand/snackbarStore"
import { useEffect, useState, useCallback } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import moment from "moment"

export type FiltersType = {
  page: string
  dateType: string
  startDate: string
  endDate: string
  searchText: string
}

// 초기 필터
export const InitFilter: FiltersType = {
  page: "1",
  dateType: "all",
  startDate: moment().format("YYYY-MM-DD"),
  endDate: moment().format("YYYY-MM-DD"),
  searchText: "",
}

const dateTypeItems = [
  { title: "전체", value: "all" },
  { title: "발행일", value: "issue" },
  { title: "결제일", value: "payment" },
  { title: "만료일", value: "expire" },
]

export default function Filter() {
  const openSnackbar = useSnackbarStore(state => state.openSnackbar)
  const searchParams = useSearchParams()
  const router = useRouter()
  const path = usePathname()

  const [filters, setFilters] = useState<FiltersType>(InitFilter)

  const resetFilters = useCallback(() => {
    const newFilters: FiltersType = {
      page: searchParams.get("page") || InitFilter.page,
      dateType: searchParams.get("dateType") || InitFilter.dateType,
      startDate: searchParams.get("startDate") || InitFilter.startDate,
      endDate: searchParams.get("endDate") || InitFilter.endDate,
      searchText: searchParams.get("searchText") || InitFilter.searchText,
    }
    setFilters(newFilters)
  }, [searchParams])

  useEffect(() => {
    resetFilters()
  }, [searchParams, resetFilters])

  const handleFilterChange = (key: string, value: string) => {
    if (key === "startDate" || key === "endDate") {
      // 날짜 선택 시 오늘 이후의 날짜는 선택할 수 없도록
      if (moment(value).isAfter(moment())) {
        openSnackbar("오늘 이후의 날짜를 선택할 수 없습니다.", "danger")
        return
      }

      // 시작일이 종료일보다 늦은 경우
      if (
        key === "startDate" &&
        moment(value).isAfter(moment(filters.endDate))
      ) {
        openSnackbar("시작일은 종료일보다 늦을 수 없습니다.", "danger")
        return
      }
    }

    setFilters({ ...filters, [key]: value })
  }

  const submit = () => {
    // 검색어가 있는 경우 trim
    if (filters.searchText) {
      filters.searchText = filters.searchText.trim()
    }

    const query = new URLSearchParams(searchParams)

    for (const [key, value] of Object.entries(filters)) {
      query.set(key, value)
      query.set("page", "1")
    }

    router.push(`${path}?${query.toString()}`)
  }

  return (
    <div className="max-w-[600px]">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        <div className="col-span-2 md:col-span-1">
          <Select
            label="날짜기준"
            name="dateType"
            selectedKeys={[filters.dateType]}
            variant="underlined"
            size="sm"
            onChange={e => handleFilterChange("dateType", e.target.value)}
          >
            {dateTypeItems.map(item => (
              <SelectItem key={item.value}>{item.title}</SelectItem>
            ))}
          </Select>
        </div>

        <div>
          <DatePickerComponent
            date={filters.startDate}
            label="시작일"
            variant="underlined"
            size="sm"
            onChange={date => handleFilterChange("startDate", date)}
          />
        </div>

        <div>
          <DatePickerComponent
            date={filters.endDate}
            label="종료일"
            variant="underlined"
            size="sm"
            onChange={date => handleFilterChange("endDate", date)}
          />
        </div>
      </div>
      <div className="mt-4 flex">
        <Input
          labelPlacement="outside"
          value={filters.searchText}
          name="number"
          placeholder="검색어를 입력하세요."
          isClearable
          onClear={() => setFilters({ ...filters, searchText: "" })}
          startContent={
            <MagnifyingGlassIcon className="text-default-400 w-6 h-6" />
          }
          onChange={e => handleFilterChange("searchText", e.target.value)}
          onKeyDown={e => e.key === "Enter" && submit()}
        />
        <Button color="primary" className="ml-2" onClick={() => submit()}>
          검색
        </Button>
      </div>
    </div>
  )
}
