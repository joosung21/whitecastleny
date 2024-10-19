"use client"

import Tour from "../Tour"

export default function Page() {
  return (
    <Tour
      content={{
        title: "뉴욕 메트로폴리탄 미술관 / 입장권 포함",
        rate: "4.9 (230)",
        images: ["/tt51.jpg", "/tt52.jpg", "/tt53.jpg", "/tt54.jpg"],
        price: "99,000원",
        pricetable: [{ title: "1명", price: "99,000원" }],
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
        ℹ
        <b className="ml-4">
          뉴욕 여행의 시작, 도시가 사랑하는 미술관과 함께하세요
        </b>
        <br />
        메트로폴리탄은 뉴욕을 대표하는 미술관입니다.
        <br />
        세계 3대 미술관으로 알려진 메트로폴리탄 미술관
        <br />
      </div>

      <div className="mt-8 border rounded-lg p-6 leading-8">
        ✔️ 처음 QR코드가 스캔되는 순간부터 24시간 동안 이용
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
