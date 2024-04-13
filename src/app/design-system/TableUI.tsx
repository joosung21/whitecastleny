"use client"
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Chip,
} from "@nextui-org/react"

const statusItems = [
  {
    label: "전송완료",
    color: "default",
  },
  {
    label: "승인중",
    color: "warning",
  },
  {
    label: "승인완료",
    color: "success",
  },
] as const

const colorChip = (status: string) => {
  return (
    <Chip
      variant="dot"
      color={
        statusItems.find(item => item.label === status)?.color || "default"
      }
      size="sm"
    >
      {status}
    </Chip>
  )
}

// const columns = [
//   {
//     key: 'companyName',
//     label: '회사명',
//   },
//   {
//     key: 'companyNumber',
//     label: '사업자번호',
//   },
//   {
//     key: 'phone',
//     label: '전화번호',
//   },
//   {
//     key: 'address',
//     label: '주소',
//   },
//   {
//     key: 'taxInvoiceIssuedDate',
//     label: '세금계산서 발행일자',
//   },
//   {
//     key: 'taxInvoiceIssuedNumber',
//     label: '세금계산서 발행번호',
//   },
//   {
//     key: 'managerName',
//     label: '담당자명',
//   },
//   {
//     key: 'managerEmail',
//     label: '담당자 이메일',
//   },
//   {
//     key: 'managerPhone',
//     label: '담당자 전화번호',
//   },
// ]

const rows = [
  {
    key: "1",
    status: "전송완료",
    companyName: "주식회사 블록체인",
    companyNumber: "123-45-67890",
    phone: "02-123-4567",
    address: "서울시 강남구 테헤란로 123",
    taxInvoiceIssuedDate: "2021-01-01",
    taxInvoiceIssuedNumber: "1234567890",
    managerName: "홍길동",
    managerEmail: "hong@gildong.com",
    managerPhone: "010-1234-5678",
  },
  {
    key: "2",
    status: "승인중",
    companyName: "주식회사 인공지능",
    companyNumber: "234-56-78901",
    phone: "02-987-6543",
    address: "서울시 송파구 올림픽로 456",
    taxInvoiceIssuedDate: "2021-02-02",
    taxInvoiceIssuedNumber: "2345678901",
    managerName: "이순신",
    managerEmail: "lee@soonshin.com",
    managerPhone: "010-2345-6789",
  },
  {
    key: "3",
    status: "승인완료",
    companyName: "주식회사 로보틱스",
    companyNumber: "345-67-89012",
    phone: "031-765-4321",
    address: "경기도 성남시 분당구 판교로 789",
    taxInvoiceIssuedDate: "2021-03-03",
    taxInvoiceIssuedNumber: "3456789012",
    managerName: "김유신",
    managerEmail: "kim@yushin.com",
    managerPhone: "010-3456-7890",
  },
]

export function TableUI() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
      <div className="md:col-span-3">
        <div className="font-semibold text-lg">Table</div>
      </div>
      <div className="md:col-span-9">
        <Table className="no-shrink-table hover-table" aria-label="test table">
          <TableHeader>
            <TableColumn>상태</TableColumn>
            <TableColumn>회사명</TableColumn>
            <TableColumn>사업자번호</TableColumn>
            <TableColumn>전화번호</TableColumn>
            <TableColumn>주소</TableColumn>
            <TableColumn>세금계산서 발행일자</TableColumn>
            <TableColumn>세금계산서 발행번호</TableColumn>
            <TableColumn>담당자명</TableColumn>
            <TableColumn>담당자 이메일</TableColumn>
            <TableColumn>담당자 전화번호</TableColumn>
          </TableHeader>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.key}>
                <TableCell>{colorChip(row.status)}</TableCell>
                <TableCell>{row.companyName}</TableCell>
                <TableCell>{row.companyNumber}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.taxInvoiceIssuedDate}</TableCell>
                <TableCell>{row.taxInvoiceIssuedNumber}</TableCell>
                <TableCell>{row.managerName}</TableCell>
                <TableCell>{row.managerEmail}</TableCell>
                <TableCell>{row.managerPhone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* data-key이슈로 selectionMode="multiple"사용못함 https://github.com/nextui-org/nextui/issues/779 */}
        {/* <Table
          color="primary"
          selectionMode="multiple"
          defaultSelectedKeys={['2', '3']}
          className="mt-2 no-shrink-table"
          aria-label="test table"
        >
          <TableHeader id="table-header">
            <TableColumn>회사명</TableColumn>
            <TableColumn>사업자번호</TableColumn>
            <TableColumn>전화번호</TableColumn>
            <TableColumn>주소</TableColumn>
          </TableHeader>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.key}>
                <TableCell>{row.companyName}</TableCell>
                <TableCell>{row.companyNumber}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table> */}

        <div className="my-4">Pagination</div>
        <div className="flex justify-center">
          <Pagination
            total={100}
            initialPage={1}
            siblings={3}
            className="mb-4"
          />
        </div>
      </div>
    </div>
  )
}
