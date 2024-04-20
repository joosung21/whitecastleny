import {
  BuildingLibraryIcon,
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
        <div className="col-span-12 md:col-span-4 bg-[#EA472A] px-10 py-6 text-white">
          <div className="text-[40px] font-[600] leading-10 mb-4">
            BROADWAY SHOW
          </div>
          <div>브로드웨이 뮤지컬</div>
          <BuildingLibraryIcon className="w-12 h-12 mt-8" />
        </div>
        <div
          className="col-span-12 md:col-span-8"
          style={{
            backgroundImage: `url('/show.webp')`,
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
                <div className="ml-auto">2시간/3시간(약)</div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="flex align-center items-center border-2 rounded-lg py-4 px-6">
                <GlobeAmericasIcon className="w-9 h-9 mr-2" />
                공연 언어
                <div className="ml-auto">English</div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="flex align-center items-center border-2 rounded-lg py-4 px-6">
                <CheckCircleIcon className="w-9 h-9 mr-2" />
                모바일 바우처 수락
                <div className="ml-auto">가능</div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6">
          <div className="text-xl font-semibold mb-4">
            뉴욕에서의 가장 특별한 경험
          </div>
          <p>
            최고의 연출가와 가수, 배우들이 브로드웨이에서 활약하고 있습니다. 몇
            년이 지나도 여전히 사랑받는 작품들도 있죠. 뮤지컬은 젊은이나 언어를
            완벽히 이해하지 못하는 사람들에게도 적합하며, 우화, 코미디, 드라마
            등 다양한 장르를 경험할 수 있습니다. 이제 브로드웨이에서 현재 상영
            중인 작품 중 하나를 선택하기만 하면 됩니다!
          </p>
        </div>

        <div className="py-6">
          <div className="grid grid-cols-12 gap-2">
            <Picture url="/show-1.jpeg" />
            <Picture url="/show-2.jpeg" />
            <Picture url="/show-3.webp" />
            <Picture url="/show-4.jpeg" />
            <Picture url="/show-5.jpeg" />
            <Picture url="/show-6.jpeg" />
          </div>
        </div>

        <div className="py-6">
          <div className="text-xl font-semibold mb-4">
            현재 브로드웨이에서 상영 중인 뮤지컬
          </div>
          <ul>
            <li>
              <b className="mr-4">Aladdin</b>2024년 8월 11일 까지, 2024
            </li>
            <li>
              <b className="mr-4">Americano</b>상시 공영 중
            </li>
            <li>
              <b className="mr-4">Back to the Future: The Musical</b>2024년 12월
              1일 까지
            </li>
            <li>
              <b className="mr-4">Beetlejuice</b>상시 공영 중
            </li>
            <li>
              <b className="mr-4">Blue Man Group</b>2024년 12월 31일 까지
            </li>
            <li>
              <b className="mr-4">The Book of Mormon</b>2024년 9월 1일 까지
            </li>
            <li>
              <b className="mr-4">Cabaret at the Kit Kat Club</b>2024년 4월 1일
              부터 2025년 3월 29일 까지
            </li>
            <li>
              <b className="mr-4">Chicago</b>2024년 9월 1일 까지
            </li>
            <li>
              <b className="mr-4">The Great Gatsby</b>2024년 11월 24일 까지
            </li>
            <li>
              <b className="mr-4">Hadestown</b>2024년 12월 1일 까지
            </li>
            <li>
              <b className="mr-4">Hamilton</b>2024년 9월 1일 까지
            </li>
            <li>
              <b className="mr-4">The Heart of Rock and Roll</b>2025년 1월 19일
              까지
            </li>
            <li>
              <b className="mr-4">Hell&apos;s Kitchen</b>2024년 9월 29일 까지
            </li>
            <li>
              <b className="mr-4">Lempicka</b>2025년 1월 5일 까지
            </li>
            <li>
              <b className="mr-4">Titanic</b>2025년 1월 12일 까지
            </li>
            <li>
              <b className="mr-4">The Lion King</b>2024년 8월 11일 까지
            </li>
            <li>
              <b className="mr-4">The Little Prince</b>상시 공영 중
            </li>
            <li>
              <b className="mr-4">Little Shop Of Horrors</b>2026년 1월 4일 까지
            </li>
            <li>
              <b className="mr-4">MJ</b>2024년 9월 8일 까지
            </li>
            <li>
              <b className="mr-4">Moulin Rouge! The Musical</b>2024년 9월 1일
              까지
            </li>
            <li>
              <b className="mr-4">The Notebook</b>2024년 11월 24일 까지
            </li>
            <li>
              <b className="mr-4">The Outsiders</b>2024년 12월 22일 까지
            </li>
            <li>
              <b className="mr-4">Water for Elephants</b>2024년 9월 8일 까지
            </li>
            <li>
              <b className="mr-4">The Who&apos;s TOMMY</b>2024년 11월 30일 까지
            </li>
            <li>
              <b className="mr-4">Six</b>상시 공영 중
            </li>
            <li>
              <b className="mr-4">Wicked</b>2024년 9월 1일 까지
            </li>
            <li>
              <b className="mr-4">The Wiz</b>2024년 8월 18일 까지
            </li>
          </ul>
        </div>

        <div className="py-6">
          <div className="text-xl font-semibold mb-4">
            이용 안내 및 유의사항
          </div>
          <ul>
            <li>
              오케스트라 또는 프런트 메자닌 티켓입니다. VIP 티켓도 제공
              가능합니다.
            </li>
            <li>예약을 하지 않으면 공연 가능 여부를 확인할 수 없습니다.</li>
            <li>예약 시 바우처와 함께 제공한 주소로 확인 메일이 발송됩니다.</li>
            <li>
              좌석은 극장 매표소에서 배정하며 구매일 전에 미리 알려드리지
              않습니다.
            </li>
            <li>티켓은 공연 당일 극장 매표소에서 수령하실 수 있습니다.</li>
            <li>
              휠체어 이용 가능, 휠체어 지원이 필요한 경우 예매 시 알려주시기
              바랍니다.
            </li>
            <li>성인 요금이 모두 적용되며 어린이 할인은 적용되지 않습니다.</li>
            <li>
              모든 판매는 최종 판매이며, 예약이 완료되면 취소할 수 없음을
              유의하시기 바랍니다.
            </li>
            <li>
              취소 정책: 예약 후 100% 환불 불가. 취소 시 환불이 불가능합니다.
            </li>
          </ul>
        </div>

        <Contact />
      </div>
    </>
  )
}
