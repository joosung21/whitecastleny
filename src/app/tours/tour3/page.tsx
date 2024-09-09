"use client"

import Tour from "../Tour"

export default function Page() {
  return (
    <Tour
      content={{
        title: "탑뷰 24시간 2층 버스 / 최저가 보장!",
        rate: "4.0 (820)",
        images: ["/tt21.jpg", "/tt22.jpg", "/tt23.jpg", "/tt24.jpg"],
        price: "258,824원",
        pricetable: [{ title: "1명", price: "64,900원" }],
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
          뉴욕 NO.1 탑뷰의 2층 오픈 버스로 뉴욕 시티투어를 즐겨보세요!
        </b>
        <br />
        뉴욕 시내를 한 번에 정복하고 싶을 때!
        <br />
        맨하탄의 업타운과 다운타운의 핵심 명소들은 물론, 나이트 투어까지 24시간
        동안 자유롭게 이용 가능한 투어버스입니다. 유명 관광지들을 편하게 돌아볼
        수 있어 자유 여행객들에게 인기 만점! <br />
        업타운과 다운타운 루트의 경우 원하는 정거장에서 승, 하차가 가능하며,
        무료로 제공되는 이어폰으로 한국어 오디오 가이드도 이용할 수 있어요!
        <br />
      </div>

      <div className="mt-8 border rounded-lg p-6 leading-8">
        ✔️ 처음 QR코드가 스캔되는 순간부터 24시간 동안 이용
        <br />
        ✔️ 업타운/다운타운 투어: 시간 내 무제한 승하차 가능. 한국어 오디오 가능{" "}
        <br />
        ✔️ 나이트 투어 : 1회 탑승 가능 (예약 필요) <br />
        ✔️ 탑뷰 공식 앱(TopView Sightseeing) 설치 및 예약코드 등록 후, 사용
        <br />
        <br />
        ※ 운행시간 및 탑승장소는 시기에 따라 변동될 수 있으니 반드시 탑뷰 앱에서
        확인하시기 바랍니다.
        <br />※ 나이트 투어는 NYC Skyline Night Tour with Audio Narration 로
        예약해 주세요.
      </div>
    </Tour>
  )
}
