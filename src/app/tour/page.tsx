import {
  ShoppingBagIcon,
  ClockIcon,
  GlobeAmericasIcon,
  CheckCircleIcon,
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
        <div className="col-span-12 md:col-span-4 bg-[#7B4340] px-10 py-6 text-white">
          <div className="text-[40px] font-[600]">WOODBURY</div>
          <div>우드버리 프리미엄 아웃렛 라이드 서비스</div>
          <ShoppingBagIcon className="w-12 h-12 mt-8" />
        </div>
        <div
          className="col-span-12 md:col-span-8"
          style={{
            backgroundImage: `url('/woodbury.jpeg')`,
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
                <ClockIcon className="w-9 h-9 mr-2" />
                소요 시간
                <div className="ml-auto">8시간(약)</div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="flex align-center items-center border-2 rounded-lg py-4 px-6">
                <GlobeAmericasIcon className="w-9 h-9 mr-2" />
                가이드 언어
                <div className="ml-auto">한국어</div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="flex align-center items-center border-2 rounded-lg py-4 px-6">
                <CheckCircleIcon className="w-9 h-9 mr-2" />
                통행료/팁 포함
                <div className="ml-auto">포함</div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6">
          <div className="text-xl font-semibold mb-4">서비스 소개</div>
          <p>
            우드버리에서 스타일리시하고 편안하게 이동하세요. 이 고급 차량 서비스
            옵션으로 여행 전, 여행 중, 여행 후에 지원을 받으실 수 있습니다.
            유연한 픽업 서비스를 이용하고, 수하물 지원을 요청하고, 전문
            드라이버와 함께 목적지까지 이동하세요. 또한 우드버리 여행에 필요한
            다양한 옵션을 살펴볼 수도 있습니다. 최대 4명의 승객과 함께 지점 간
            최대 6명의 승객과 함께 탑승하려면 Whitecastle 미니밴을 요청하세요.
            시간 단위 차량 서비스가 필요한 경우 앱에서 Whitecastle 시간제 또는
            Whitecastle SUV 시간제로 요청하실 수도 있습니다. 인기 관광 명소인
            시오셋과 같은 인근 도시나 다른 지역으로 여행할 때 차량 서비스가
            필요한 경우 Whitecastle tour를 이용해 보세요.
          </p>
        </div>

        <div className="py-6">
          <div className="grid grid-cols-12 gap-2">
            <Picture url="/w-1.jpeg" />
            <Picture url="/w-2.webp" />
            <Picture url="/w-3.jpeg" />
          </div>
        </div>

        <div className="py-6">
          <div className="text-xl font-semibold mb-4">이용안내</div>
          <ul>
            <li>픽업 가능 시간: 매일 오전 8시 ~ 10시</li>
            <li>픽업 장소: 맨하탄 내 어느 곳이든 가능</li>
            <li>픽업 서비스: 호텔 픽업 및 드롭오프</li>
            <li>최대 수용 인원: 6명</li>
            <li>수하물: 2개의 캐리어 및 2개의 핸드백</li>
            <li>통행료/팁: 포함</li>
            <li>취소 정책: 무료 취소 가능 시간 24시간 전</li>
            <li>차량 유형: SUV / 미니밴</li>
            <li>운전사: 한국어 가능</li>
            <li>
              예약 확인: 서비스 이용 전 예약 내역을 반드시 확인하십시오. 예약
              시간, 장소 및 차량 유형이 정확한지 검토해야 합니다.
            </li>
            <li>
              시간 준수: 약속된 픽업 시간 10분 전에 대기하시는 것이 좋습니다.
            </li>
            <li>
              수하물 정책: 각 차량마다 허용되는 수하물 크기와 개수가 다를 수
              있으니, 미리 확인하십시오.
            </li>
            <li>
              취소 정책: 무료 취소 가능 시간을 넘겨 취소할 경우 취소 수수료가
              부과될 수 있습니다. 이용 약관을 확인해 주십시오.
            </li>
            <li>
              안전 벨트 착용: 차량 내에서는 항상 안전 벨트를 착용하십시오.
            </li>
            <li>
              금지 행위: 차량 내에서는 금연이며, 알코올 섭취 또한 금지되어
              있습니다.
            </li>
            <li>
              특별 요구 사항: 특별한 요구 사항이 있을 경우 예약 시 미리 알려
              주십시오.
            </li>
            <li>
              유실물 처리: 차량을 이용하신 후 물건을 유실한 경우, 서비스
              제공사에 즉시 연락하여 유실물을 신고하십시오.
            </li>
          </ul>
        </div>

        <Contact />
      </div>
    </>
  )
}

// 예약 확인: 서비스 이용 전 예약 내역을 반드시 확인하십시오. 예약 시간, 장소 및 차량 유형이 정확한지 검토해야 합니다.
// 시간 준수: 약속된 픽업 시간 10분 전에 대기하시는 것이 좋습니다. 지각으로 인한 추가 요금이 발생할 수 있습니다.
// 운전자 신원 확인: 차량 탑승 전, 운전자의 신원과 차량 번호판을 확인하여 안전하게 이동하십시오.
// 수하물 정책: 각 차량마다 허용되는 수하물 크기와 개수가 다를 수 있으니, 미리 확인하십시오.
// 취소 정책: 무료 취소 가능 시간을 넘겨 취소할 경우 취소 수수료가 부과될 수 있습니다. 이용 약관을 확인해 주십시오.
// 안전 벨트 착용: 차량 내에서는 항상 안전 벨트를 착용하십시오. 어린이 탑승객의 경우, 적합한 카시트를 사용해야 합니다.
// 금지 행위: 차량 내에서는 금연이며, 알코올 섭취 또한 금지되어 있습니다. 위반 시 벌금이 부과될 수 있습니다.
// 특별 요구 사항: 특별한 요구 사항이 있을 경우 예약 시 미리 알려 주십시오. 예를 들어, 휠체어를 위한 공간 필요 등입니다.
// 유실물 처리: 차량을 이용하신 후 물건을 유실한 경우, 서비스 제공사에 즉시 연락하여 유실물을 신고하십시오.
// 평가 및 피드백: 서비스 이용 후에는 운전자 평가를 남기고, 필요한 피드백을 제공하여 서비스 개선에 도움을 줄 수 있습니다.
