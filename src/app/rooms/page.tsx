import { BuildingOfficeIcon } from "@heroicons/react/24/outline"

export default function Page() {
  return (
    <>
      <div className="min-h-[400px] grid grid-cols-12">
        <div className="col-span-12 md:col-span-4 bg-primary px-10 py-6 text-white">
          <div className="text-[40px] font-[600]">ROOMS</div>
          <div>42가 맨하탄뷰 숙소</div>
          <BuildingOfficeIcon className="w-12 h-12 mt-8" />
        </div>
        <div
          className="col-span-12 md:col-span-8"
          style={{
            backgroundImage: `url('/room1.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
            opacity: 0.9,
            minHeight: "400px",
          }}
        ></div>
      </div>

      <div className="container">
        <div className="py-6">
          <div className="text-xl font-semibold mb-4">숙소 소개</div>
          <ul>
            <li>
              맨하탄 도심 42번가에 위치하여 맨하탄 뷰를 감상하실 수 있는
              숙소입니다.
            </li>
            <li>
              뉴욕의 중심인 맨하탄에서의 풍부하고 다양한 경험을 블라블라
              블라블라 럭셔리 리조트 아파트의 경험을 제공합니다.
            </li>
            <li>
              프로페셔널하고 세심히 관리되는 럭셔리 호텔 | 리조트 | 풀빌라
              스타일 아파트의 다양한 생활, 편의시설, 부대시설을 여행 내내 무료로
              즐기실수 있습니다.
            </li>
            <li>
              새롭게 인테리어 디자인한 곳으로, 모든가구와 식기류는 물론, 숙소 내
              모든 것들이 Brand New 입니다.
            </li>
            <li>
              하이브리드 메모리얼 폼 퀸 사이즈 침대들과 품질 좋은 브랜드
              가구들로 인테리어의 품격을 느껴보실수 있습니다.
            </li>
            <li>
              마켓 프라이스 보다 훨씬 저렴하게 측정된 가격이지만, 근처의 쉐라톤
              호텔보다 높은 퀄리티를 자랑합니다.
            </li>
          </ul>
        </div>

        <div className="py-6">
          <div className="grid grid-cols-12 gap-2">
            <div
              className="col-span-12 sm:col-span-6 md:col-span-4"
              style={{
                backgroundImage: `url('/room-temp-1.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                opacity: 0.9,
                minHeight: "380px",
              }}
            />
            <div
              className="col-span-12 sm:col-span-6 md:col-span-4"
              style={{
                backgroundImage: `url('/room-temp-2.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                opacity: 0.9,
                minHeight: "380px",
              }}
            />
            <div
              className="col-span-12 sm:col-span-6 md:col-span-4"
              style={{
                backgroundImage: `url('/room-temp-3.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                opacity: 0.9,
                minHeight: "380px",
              }}
            />
            <div
              className="col-span-12 sm:col-span-6 md:col-span-4"
              style={{
                backgroundImage: `url('/room-temp-4.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                opacity: 0.9,
                minHeight: "380px",
              }}
            />
            <div
              className="col-span-12 sm:col-span-6 md:col-span-4"
              style={{
                backgroundImage: `url('/room-temp-5.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                opacity: 0.9,
                minHeight: "380px",
              }}
            />
            <div
              className="col-span-12 sm:col-span-6 md:col-span-4"
              style={{
                backgroundImage: `url('/room-temp-6.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                opacity: 0.9,
                minHeight: "380px",
              }}
            />
          </div>
        </div>

        <div className="py-6">
          <div className="text-xl font-semibold mb-4 mt-6">이용약관</div>
          <ul>
            <li>아파트 및 건물 내에서는 절대 금연입니다.</li>
            <li>
              오토 마스터키 반납을 하지 않으실 경우 $200의 추가비용이 있습니다.
            </li>
            <li>
              시설에 훼손이 있을 경우 훼손한 만큼의 추가비용 ($1000 이상) 책임이
              있습니다.
            </li>
            <li>
              밤 10시이후 고성방가를 금지합니다. 위반 시 강제 퇴실될 수
              있습니다. (미국 내 불법/소란행위는 이웃들의 즉각적인 경찰신고로
              이어지기 때문에 각별한 주의 부탁드립니다)
            </li>
            <li>
              예약자외 외부인의 방문 및 숙박을 금지합니다. 원하실 경우 저희 측에
              꼭 알려주셔야 합니다.
            </li>
            <li>
              유료 얼리 체크인 Early Check-In: 스케줄에 따라서 가능여부가
              달라집니다. 원하실 경우 저희 쪽으로 문의 및 확인 부탁드립니다.
            </li>
            <li>
              유료 레이트 체크인 Late Check-In: 추가비용 밤 9시 이후 $20, 10시
              이후 $30, 11시 이후 $40 12시 이후 $50 입니다.
            </li>
            <li>
              저렴한 유료 세탁서비스를 제공합니다. (세탁기 + 건조 + 세탁전용 고
              농축액 제공)
            </li>
            <li>
              퇴실후 유료 짐보관 가능합니다. 저희 측에 문의 및 확인 부탁
              드립니다.
            </li>
            <li>호텔식 유료 런드리 세탁 서비스를 제공합니다.</li>
            <li>콘도 내 유료 주차장 서비스를 제공합니다.</li>
          </ul>

          <div className="text-xl font-semibold mb-4 mt-6">성수기 안내</div>
          <ul>
            <li>5월 ~ 8월 여름 성수기 | 2박 이상 가능</li>
            <li>9월 ~ 10월 추석 | 5박 이상 가능</li>
            <li>12월 25일 ~ 1월 8일 크리스마스 & 뉴이어 | 7박 이상 가능</li>
            <li>1 ~ 2월 한국 설날 | 5박 이상 가능</li>
          </ul>

          <div className="text-xl font-semibold mb-4 mt-6">
            어메니티/무료제공
          </div>
          <ul>
            <li>Dyson Supersonic Hair Dryer 다이슨 슈퍼소닉 헤어 드라이어</li>
            <li>무료 WIFI 초고속 Verizon 무선 인터넷</li>
            <li>다 채널 TV</li>
            <li>
              수건 제공: 큰 바디타월 및 얼굴 타월 제공. 숙박 일정에 따라
              넉넉하게 제공합니다.
            </li>
            <li>
              휴지, 샴푸, 컨디셔너, 바디워시, 핸드솝, 다이슨 헤어드라이기 제공.
              이 외에 필요하신 제품은 준비 해 오셔야 합니다. (치약, 칫솔,
              개인적인 용품 등)
            </li>
            <li>
              커피, 커피메이커, Tea, 주전자, 토스트기, 전자렌지, 그릇, 컵,
              와인잔, 각종냄비, 후라이팬, 칼, 수저, 포크, 취사도구 등.
            </li>
          </ul>

          <div className="text-xl font-semibold mb-4 mt-6">주변안내</div>
          <ul>
            <li>
              <b className="mr-4">Blu on the Hudson</b> 새로생긴 맛집 핫
              플레이스로 다양한 메뉴와 식사가 제공됩니다 구글을 통해 리뷰를
              확인해 보세요!
            </li>
            <li>
              <b className="mr-4">Blu Sushi Bar</b> 블루 온더 허드슨안에 위치한
              스시바 입니다
            </li>
            <li>
              <b className="mr-4">Chart House</b> Sea food 함께 허드슨 강 위에서
              맨하탄의 아름다운 뷰를 보며 식사를 즐기실 수 있는 곳으로, 가성비가
              좋은 뷰 맛집 레스토랑!
            </li>
            <li>
              <b className="mr-4">Beneci&apos;s</b> 이탈리안 & 아메리칸 캐주얼
              레스토랑으로 쉐라톤 호텔 일층에 위치해 있는 $20 대 레스토랑
            </li>
            <li>
              <b className="mr-4">Ruth&apos;s Chris Steakhouse</b> 유명 스테이크
              하우스 전문 체인점
            </li>
            <li>
              <b className="mr-4">Whole Foods</b> 유기농 대형 마트로, 싱싱한
              재료들로 만들어진 뷔페와 샐러드바, 간단한 식사를 하실수 있는
              테이크 아웃 피자, 샌드위치 등 도 판매합니다.
            </li>
          </ul>

          <div className="text-xl font-semibold mb-4 mt-6">
            숙소로 오시는 길
          </div>
          <ul>
            <li>
              예약 후, 개인적으로 보다 자세하고 쉽게 사진을 첨부하여
              보내드립니다.
            </li>
            <li>
              Times Sq 41st Street - 42nd Street 8th AVE. Port Authority Bus
              Terminal.
            </li>
            <li>
              타임스퀘어 41번가 ~ 42번가 8애비뉴에 위치한, 포트 오토리티
              버스터미널 에서 156번의 버스를 2층에 위치한 202 번 게이트에서
              타시면 됩니다.
            </li>
            <li>
              에스컬레이터를 타시고 2층 202번 게이트 앞에는 표를 사실수 있는
              자판기가 있습니다. 거기에서 표를 구매 하시면 됩니다.
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
