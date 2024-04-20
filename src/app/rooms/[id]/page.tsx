"use client"
import { useEffect, useState } from "react"
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"
import { useSnackbarStore } from "@/zustand/snackbarStore"
import { getRoomName, getRoomExcelTitle } from "../useRooms"
import Contact from "@/app/components/Contact/Contact"
import "moment/locale/ko"

moment.locale("ko")
const localizer = momentLocalizer(moment)

type Event = {
  title: string
  start: Date
  end: Date
}

type Props = {
  params: {
    id: string
  }
}

export default function Page({ params: { id } }: Props) {
  const openSnackbar = useSnackbarStore(state => state.openSnackbar)
  const roomName = getRoomName(Number(id))
  const roomExcelTitle = getRoomExcelTitle(Number(id))
  const [date, setDate] = useState(new Date())
  const [loading, setLoading] = useState(true)
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/sheet")
        if (!res.ok) throw new Error("Data fetch failed")
        const result = await res.json()

        // react-big-calendar docs
        // https://jquense.github.io/react-big-calendar/examples/?path=/story/about-big-calendar--page

        const filteredEvents = await result.data.filter((item: string[]) => {
          const locationName = item[1]
          const checkin = item[3]
          const nights = item[4]
          const isValidDate = moment(checkin, "YYYY-MM-DD", true).isValid()
          const isValidNights = !isNaN(Number(nights))

          return locationName === roomExcelTitle && isValidDate && isValidNights
        })

        const events = await filteredEvents.map((item: string[]) => {
          const guestName = item[0]
          const roomName = item[2]
          const checkin = item[3]
          const nights = item[4]

          const maskedName = guestName.replace(/(?<=^.{1})./g, "*")
          const shortenedRoomName = roomName.replace(roomExcelTitle || "", "")

          return {
            title: `${maskedName} ${shortenedRoomName}`,
            start: moment(checkin).toDate(),
            end: moment(checkin).add(Number(nights), "days").toDate(),
          }
        })

        setEvents(events)
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }

    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleNavigate = (newDate: Date) => {
    if (newDate >= moment().startOf("month").toDate()) {
      setDate(newDate)
    } else {
      openSnackbar("지난 날짜는 조회할 수 없습니다.", "danger")
    }
  }
  const RoomPicture = ({ url }: { url: string }) => {
    return (
      <div
        className="col-span-12 sm:col-span-6"
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
      <div className="py-6">
        <div className="text-xl font-semibold mb-4">
          화이트캐슬 뉴욕 레지던스 소개
        </div>
        <p>
          화이트캐슬 타임스퀘어 지점은 전 지점이 타임스퀘어를 기준으로 미드타운
          한중심에 위치하고 있습니다.
          <br /> 모든 손님분들이 깨끗하고 안전하게 머무시다 가실 수 있도록
          최선을 다해 안내드립니다.
          <br /> 10년이상된 오랜 운영의 노하우로 화이트캐슬만의 친절하고 깨끗한
          서비스 약속드립니다.
        </p>
      </div>

      <div className="py-6">
        <div className="text-xl font-semibold mb-4">{roomName}</div>
        {id === "1" && (
          <ul>
            <li>3호점 - 마스터룸, 커플룸과 2인 1실 쉐어룸</li>
            <li>
              타임스퀘어 바로 한복판에 위치한 고급 아파트 고층 객실이라 한중심
              최고 좋은 위치과 씨티뷰를 감상하실 수 있는 지점입니다.
            </li>
            <li>
              <b>3호점 마스터룸: </b>침실과 전용화장실을 사용하실 수 있는
              객실이예요.퀸 침대 1개와 추가 매트리스 셋팅 안내드리고 주방,현관은
              커플룸,2인 1실 쉐어룸과 쉐어하시게 되세요.
            </li>
            <li>
              <b>3호점 일반룸: </b>여성 거실쉐어 룸과 화장실을 쉐어 .퀸 침대 1개
              .책상 .옷장 쇼파.3분이 오실 경우 추가 싱글 매트리스 셋팅
              안내드려요.
            </li>
            <li>
              <b>3호점 2인 1실 여성쉐어룸: </b>거실공간을 분리하여 사용.화장실은
              커플룸 분들과 쉐어하시게 되고 주방과 현관은 3호점 방 3개가 공동
              쉐어하시게 되세요. 안내드려요.
            </li>
            <li>싱글 침대 2개,전신 거울.책상.수납장.옷걸이</li>
          </ul>
        )}
        {id === "2" && (
          <ul>
            <li>5호점 - 센트럴파크 도보 5분</li>
            <li>
              최고의 위치 - 53가와 8애비뉴(센트럴 파크마스터룸, 콜럼버스룸,
              프렌드룸이 한 집이예요)
            </li>
            <li>
              <b>센트럴파크룸(마스터룸): </b>퀸 사이즈 침대 1개
              .책상.의자.쇼파베드1개 클라젯.전용화장실.(매트리스는 전 지점중에
              최고급.)
            </li>
            <li>
              <b>콜럼버스룸(커플룸): </b>퀸 사이즈 침대 1개 화장실은 2인 1실
              쉐어 룸과 쉐어하시게 되고 주방과 현관문은
              센트럴파크룸,콜럼버스룸,프렌드리빙룸이 쉐어하시게 되세요. 침실은
              독립적으로 사용하시고 (퀸 1개)화장실 주방은 쉐어하시는 객실입니다
              (매트리스는 전 지점중에 최고급.)
            </li>
            <li>
              <b>2인 1실 쉐어룸: </b>트윈침대 2개.침대 2개를 원하시는 좋은
              곳이며,기존 쉐어룸보다 천장에서 30cm떨어진 벽을 세워 방문이 있고
              방으로 꾸민 공간이라 좋아요. 침실만 따로 사용하시고 화장실은
              콜럼버스룸과 쉐어하시게 되고 주방,현관은 5호점 마스터룸 콜럼버스룸
              프렌드룸 객실 3개가 쉐어하시는 객실입니다.
            </li>
            <li>
              관광 필수코스인 락펠러센터,모마미술관,모든 뮤지컬 극장과
              타임스퀘어가 모두 도보 10분이면 가능한 미드타운 최고의 위치입니다
            </li>
          </ul>
        )}
        {id === "3" && (
          <ul>
            <li>7호점 - 럭셔리 통유리 뷰 독채</li>
            <li>
              43번가 11애비뉴 초고층에 위치하여 통유리 뷰를 통해 허드슨강과
              씨티뷰를 동시에 최고로 즐기실수있는 시설입니다.
            </li>
            <li>
              퀸 침대 1개 추가/추가쇼파베드 셋팅해드려요(베드위에 매트리스 패드
              얹어드려요)
            </li>
          </ul>
        )}
      </div>

      {id === "2" && (
        <div className="py-6">
          <div className="grid grid-cols-12 gap-2">
            <RoomPicture url="/room-5-1.jpg" />
            <RoomPicture url="/room-5-2.jpg" />
            <RoomPicture url="/room-5-3.jpg" />
            <RoomPicture url="/room-5-4.jpg" />
          </div>
        </div>
      )}

      {id === "3" && (
        <div className="py-6">
          <div className="grid grid-cols-12 gap-2">
            {/* 8개 사진 */}
            <RoomPicture url="/room-7-1.jpg" />
            <RoomPicture url="/room-7-2.jpg" />
            <RoomPicture url="/room-7-3.jpg" />
            <RoomPicture url="/room-7-4.jpg" />
            <RoomPicture url="/room-7-5.jpg" />
            <RoomPicture url="/room-7-6.jpg" />
            <RoomPicture url="/room-7-7.jpg" />
            <RoomPicture url="/room-7-8.jpg" />
          </div>
        </div>
      )}

      <div className="py-6">
        <div className="text-xl font-semibold mb-4 mt-6">
          화이트캐슬 이용안내
        </div>
        <ul>
          <li>
            체크아웃 시간은 오전 11시이고 그이후에는 캐리어1개당 10불 유료보관
            안내드려요 또는 유료짐보관소를 이용해주세요.
          </li>
          <li>
            캐리어는 기본 1인 1캐리어로만 입실이 가능하시도록 안내드려요. (그외
            배낭 보조가방 노트북 가방등은 가능하세요.)
          </li>
          <li>
            공지가 되어있는대도 캐리어가 2개이상이신 분들은 입실이 불가하시며
            이를 위해 숙소에서 운영하는 짐만 보관하는 보관소에 다른 곳들보다
            저렴하게 1박에 $7불씩 짐을 보관하실 수있어요(숙소 보관소는 5박또는
            짐을 5일이상 맡기실 분들에게만 안내드려요.)
          </li>
          <li>
            10박 이상 하실경우 캐리어가 2개이신 분들도 가능하시오니 짐이 많으신
            분들은 미리 알려주시면 답변드릴께요.
          </li>
          <li>
            세계의 중심 도시 뉴욕 그곳에서도 타임스퀘어는 맨하탄에서 가장
            화려하고 볼거리가 많은 곳입니다.
          </li>
          <li>
            화이트 캐슬 타임스퀘어 지점은 다른 일반적인 뉴욕 아파트들이나
            호텔들과 달리 지은지 몇년 안된 최신식 브랜드 뉴 아파트입니다.
          </li>
        </ul>

        <div className="text-xl font-semibold mb-4 mt-6">어메니티/무료제공</div>
        <ul>
          <li>
            욕실용품:샴푸 바디워시 헤어드라이어(각 방마다 비치) 수건은 1인 1장씩
            제공
          </li>
          <li>무선와이파이 wi-fi</li>
          <li>
            주방취사도구(전자레인지 냉장고 가스레인지 식기류 원두커피 씨리얼
            제공)
          </li>
          {["1", "2"].includes(id) && <li>건물내 유료 세탁</li>}
          {id === "3" && <li>집안에 무료세탁</li>}
        </ul>

        <div className="text-xl font-semibold mt-6">{roomName} 예약 현황</div>
        {!loading && (
          <div
            className={`scale-90 -mx-9 ${
              id === "1" ? "h-[960px]" : "h-[760px]"
            }`}
          >
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              date={date}
              onSelectEvent={event => {
                const messege = `${event.title} ${moment(event.end).diff(
                  event.start,
                  "days",
                )}박
                \n체크인: ${moment(event.start).format("YYYY-MM-DD")}
                \n체크아웃: ${moment(event.end).format("YYYY-MM-DD")}`
                alert(messege)
              }}
              views={{
                month: true,
              }}
              onNavigate={handleNavigate}
            />
          </div>
        )}
      </div>

      <Contact />
    </>
  )
}
