"use client"

import Tour from "../Tour"

export default function Page() {
  return (
    <Tour
      content={{
        title: "브루클린 덤보 야경 투어 (워킹투어)",
        rate: "5.0 (18)",
        images: ["/tt31.jpg", "/tt32.webp", "/tt33.jpeg", "/tt34.jpeg"],
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
          브루클린에서 보는 환상적인 야경 워킹 투어
        </b>
        <br />
        원스 어폰 어 타임 인 아메리카, 무한도전 등 수많은 영화, 드라마, 예능의 촬영지로 유명합니다. 맨하탄 브릿지, 페블비치, 제인 회전목마 등 멋진 명소들과 밤하늘을 수놓는 맨하탄의 야경을 배경으로 멋진 사진을 담아가세요!
        <br />
        맨하탄심장이 멎을 만한 맨하탄의 야경 모습을 맨하탄 스카이라인과 나란히 있는 벤치에서 마음껏 즐기세요! 공원 입구에는 뉴욕 아이스크림 맛집인 브루클린 아이스크림 팩토리나 애플 힐 크리머리도 있습니다. 공원 왼쪽 끝으로가면 밤에도 밝게 빛나고 있는 자유의 여신상도 보실 수 있습니다.
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
