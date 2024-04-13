"use client"
import { Accordion, AccordionItem } from "@nextui-org/react"

export function AccordionUI() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
      <div className="md:col-span-3">
        <div className="font-semibold text-lg">Accordion</div>
      </div>
      <div className="md:col-span-9">
        <Accordion>
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title="국세청 홈택스를 이용한 발급"
          >
            국세청에서 운영하는 홈택스(www.hometax.go.kr)을 이용하여 홈택스에서
            발급
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title="전자세금계산서 발급대행사업자의 시스템을 이용한 발급"
          >
            국세청에 등록된 전자(세금)계산서 발급업무 대행 사업자(ASP)가
            일정수수료를 받고 운영하는 사이트 또는 자체 구축한 전자(세금)계산서
            발급시스템(ERP)을 이용하여 발급
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            title="기타 발급 방법(인터넷 사용이 어려운 경우)"
          >
            (전화 ARS 이용) 세무서에서 보안카드 수령 후 전화ARS(Tel.
            :126-1-2-2)를 이용하여 발급
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
