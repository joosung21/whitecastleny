"use client"

import Tour from "../Tour"

export default function Page() {
  return (
    <Tour
      content={{
        title: "뉴욕 현대 미술관 MoMA 도슨트 투어 + 입장권 포함",
        rate: "4.9 (230)",
        images: ["/tt61.jpg", "/tt62.jpg", "/tt63.jpg", "/tt64.jpg"],
        price: "106,700원",
        pricetable: [{ title: "1명", price: "106,700원" }],
        description: (
          <>
            <div>
              <div>
                <b>↩️ 무료취소 상품</b> 이용일 하루 전 오전 9시까지
              </div>
              <div>
                <b>✅ 최저가 보장제</b> 차액의 두배 포인트 보상
              </div>
              <div>
                <b>🔥 최대 12개월 무이자 할부 가능</b>
              </div>
            </div>
          </>
        ),
      }}
    >
      <div className="mt-8 border rounded-lg p-6 leading-8">
        ℹ<b className="ml-4">MOMA 모마 도슨트 투어</b>
        <br />
        뉴욕 현대미술관에서 앤디 워홀, 모네, 고흐, 피카소, 미로 등 세계적인
        작가들의 작품을 만나보세요.
        <br />
        20만 점이 넘는 작품을 소장하고 있는 뉴욕 현대미술관은 세계적인 작가들의
        작품을 만나볼 수 있는 곳입니다.
        <br />
      </div>

      <div className="mt-8 border rounded-lg p-6 leading-8">
        ✔️ 만 18세 이하는 보호자가 동행해야 합니다.
        <br />
        ✔️ 미술관의 하일라이트인 주요 소장품의 미술사적 의미와 미술관이 소장하게
        된 비하인드 스토리를 곁들여 소개합니다.
        <br />
        ✔️ 미술과 전혀 친하지 않아도, 미술과 항상 같이 해도, 살아있는
        스토리텔링이 있는 투어와 함께라면 미술관 방문의 의미가 깊어집니다.
        <br />
        <br />※ 원하시는 날짜에 예약이 열려있지 않다면 문의주세요.
      </div>
    </Tour>
  )
}
