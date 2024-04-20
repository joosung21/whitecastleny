import {
  TicketIcon,
  MapPinIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline"
import Contact from "@/app/components/Contact/Contact"

export default function Page() {
  const Picture = ({ url }: { url: string }) => {
    return (
      <div
        className="col-span-12 sm:col-span-6 md:col-span-4"
        style={{
          backgroundImage: `url('${url}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
          opacity: 0.9,
          minHeight: "380px",
        }}
      />
    )
  }

  return (
    <>
      <div className="min-h-[400px] grid grid-cols-12">
        <div className="col-span-12 md:col-span-4 bg-[#1976D2] px-10 py-6 text-white">
          <div className="text-[40px] font-[600]">TICKETS</div>
          <div>티켓/입장권</div>
          <TicketIcon className="w-12 h-12 mt-8" />
        </div>
        <div
          className="col-span-12 md:col-span-8"
          style={{
            backgroundImage: `url('/ticket.jpg')`,
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
          <div className="grid grid-cols-12 gap-4 text-lg font-semibold">
            <div className="col-span-12 md:col-span-4">
              <div className="flex align-center items-center border-2 rounded-lg py-4 px-6">
                <TicketIcon className="w-9 h-9 mr-2" />
                티켓 유형
                <div className="ml-auto">다양한 선택</div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="flex align-center items-center border-2 rounded-lg py-4 px-6">
                <MapPinIcon className="w-9 h-9 mr-2" />
                위치
                <div className="ml-auto">뉴욕</div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="flex align-center items-center border-2 rounded-lg py-4 px-6">
                <CalendarIcon className="w-9 h-9 mr-2" />
                사용 가능일
                <div className="ml-auto">예약일 포함</div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6">
          <div className="text-xl font-semibold mb-4">티켓 및 입장권 소개</div>
          <p>
            뉴욕에서 놓칠 수 없는 대표적인 관광지 입장권을 제공합니다.
            엠파이어스테이트 빌딩 전망대에서 뉴욕의 스카이라인을 한눈에
            조망하거나, Top of the Rock 전망대에서 센트럴파크와 맨해튼을
            배경으로 멋진 사진을 남겨보세요. 자유의 여신상 크루즈 투어로 자유의
            여신상을 가까이에서 관람할 수 있는 기회를 잡으십시오. 또한 MoMA
            뮤지엄과 메트로폴리탄 뮤지엄에서 세계적으로 유명한 예술작품들을
            감상할 수 있습니다. 다양한 티켓 옵션을 통해 뉴욕을 경험하세요.
          </p>
        </div>

        <div className="py-6">
          <div className="grid grid-cols-12 gap-2">
            <Picture url="/t-1.jpeg" />
            <Picture url="/t-2.jpeg" />
            <Picture url="/t-3.jpeg" />
          </div>
        </div>

        <div className="py-6">
          <div className="text-xl font-semibold mb-4">구매 및 이용 안내</div>
          <ul>
            <li>
              온라인 예약: 웹사이트에서 쉽게 예약하고 바로 티켓을 받아보세요.
            </li>
            <li>입장권 유효기간: 구매일로부터 30일</li>
            <li>단체 예약: 10인 이상은 사전에 문의 바랍니다.</li>
            <li>티켓 픽업: 현장에서 바코드 제시 후 티켓 수령</li>
            <li>환불 정책: 구매 후 7일 이내 100% 환불 가능</li>
            <li>변경 정책: 방문 예정일 3일 전까지 무료 변경 가능</li>
            <li>
              연령 제한: 특별한 연령 제한은 없으나, 일부 전망대는 높이 두려움이
              있는 분들은 주의 요망
            </li>
            <li>입장 시간: 입장권에 명시된 시간 15분 전까지 도착해 주세요.</li>
            <li>
              금지 사항: 전망대 및 뮤지엄 내에서의 음식물 반입, 플래시 사용,
              흡연 금지
            </li>
            <li>
              안전 수칙: 모든 관람객은 안전 안내에 따라 주의를 기울여 주시기
              바랍니다.
            </li>
            <li>
              특별 요청: 휠체어 사용객이나 기타 특별한 요구 사항이 있는 경우,
              예약 시 미리 알려 주세요.
            </li>
          </ul>
        </div>

        <Contact />
      </div>
    </>
  )
}
