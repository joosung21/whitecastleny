"use client"
import { useEffect, useState, useCallback } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useLoadingOverlayStore } from "@/zustand/loadingOverlayStore"
import mockData from "./mockData"
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  // Chip,
} from "@nextui-org/react"

export type TaxBillList = {
  id: number
  taxBillNo: string
  taxBillType: string
  taxBillStatus: string
  companyName: string
  companyRegistrationNumber: string
  issuedAt: string
}

export default function Page() {
  const router = useRouter()
  const path = usePathname()
  const searchParams = useSearchParams()
  const page = Number(searchParams.get("page")) || 1
  const startLoading = useLoadingOverlayStore(state => state.startLoading)
  const stopLoading = useLoadingOverlayStore(state => state.stopLoading)

  const [data, setData] = useState<TaxBillList[]>([])

  const fetchTaxBill = useCallback(async (): Promise<TaxBillList[]> => {
    startLoading()
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(mockData)
        stopLoading()
      }, 300)
    })
  }, [startLoading, stopLoading])

  const changePage = (page: number) => {
    const query = new URLSearchParams(searchParams)
    query.set("page", page.toString())
    router.push(`${path}?${query.toString()}`)
  }

  useEffect(() => {
    fetchTaxBill().then(data => {
      setData(data)
    })
  }, [fetchTaxBill, searchParams])

  return (
    <div className="limit-width">
      <div className="grid grid-cols-1 md:grid-cols-12 mb-4">
        <div className="col-span-1 md:col-span-6">
          <div className="font-semibold text-sm">전체 {data.length} 건</div>
        </div>
      </div>

      <div className="overflow-x-auto pb-4">
        <Table
          className="no-shrink-table hover-table"
          aria-label="test table"
          removeWrapper
        >
          <TableHeader>
            <TableColumn>세금계산서 번호</TableColumn>
            <TableColumn>세금계산서 종류</TableColumn>
            <TableColumn>세금계산서 상태</TableColumn>
            <TableColumn>회사명</TableColumn>
            <TableColumn>사업자번호</TableColumn>
            <TableColumn>발행일자</TableColumn>
          </TableHeader>
          <TableBody>
            {data?.map(row => (
              <TableRow
                key={row.id}
                className="cursor-pointer"
                onClick={() => router.push(`/list/${row.id}`)}
              >
                <TableCell>{row.taxBillNo}</TableCell>
                <TableCell>{row.taxBillType}</TableCell>
                <TableCell>{row.taxBillStatus}</TableCell>
                <TableCell>{row.companyName}</TableCell>
                <TableCell>{row.companyRegistrationNumber}</TableCell>
                <TableCell>{row.issuedAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-center mt-4">
        <Pagination
          total={100}
          initialPage={1}
          siblings={3}
          className="mb-4"
          page={page}
          onChange={page => changePage(page)}
        />
      </div>
    </div>
  )
}
