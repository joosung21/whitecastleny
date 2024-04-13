import MockData from "../mockData"
import { Card, CardBody } from "@nextui-org/react"
import BackBtn from "./BackBtn"

type TaxBillDetail = {
  id: number
  taxBillNo: string
  taxBillType: string
  taxBillStatus: string
  companyName: string
  companyRegistrationNumber: string
  issuedAt: string
}

export default function Page(props: { params: { id: string } }) {
  const id = props.params.id

  const data = MockData.find(item => item.id === Number(id)) as
    | TaxBillDetail
    | undefined

  if (!data) return <div>Not Found</div>

  return (
    <div className="limit-width">
      <div className="mb-4 flex items-center text-2xl">
        <BackBtn />
        <div>{data.taxBillNo}</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mb-4">
        <div>
          <Card>
            <CardBody className="px-6">
              <dl>
                <dt>ID</dt>
                <dd>{data.id}</dd>
              </dl>
              <dl>
                <dt>세금계산서 번호</dt>
                <dd>{data.taxBillNo}</dd>
              </dl>
              <dl>
                <dt>종류</dt>
                <dd>{data.taxBillType}</dd>
              </dl>
              <dl>
                <dt>상태</dt>
                <dd>{data.taxBillStatus}</dd>
              </dl>
              <dl>
                <dt>회사이름</dt>
                <dd>{data.companyName}</dd>
              </dl>
              <dl>
                <dt>사업자번호</dt>
                <dd>{data.companyRegistrationNumber}</dd>
              </dl>
              <dl className="border-none">
                <dt>발행일자</dt>
                <dd>{data.issuedAt}</dd>
              </dl>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}
