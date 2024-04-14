"use client"
import AirplaneIcon from "@/assets/airplane.svg"
import { motion } from "framer-motion"

import {
  BuildingOfficeIcon,
  ShoppingBagIcon,
  TicketIcon,
  BuildingLibraryIcon,
  EnvelopeIcon,
  ChatBubbleOvalLeftIcon,
  PhoneIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline"

type QuickSlotProps = {
  title: string
  bgColor: string
  description: string
  icon: React.ReactNode
  url: string
  image: string
}

export default function Home() {
  const QuickSlot = ({
    title,
    bgColor,
    description,
    icon,
    url,
    image,
  }: QuickSlotProps) => (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          ease: "easeOut",
          delay: 0.1,
          duration: 1,
        },
      }}
    >
      <div
        className="grid grid-cols-12 cursor-pointer opacity-90 hover:opacity-100 transition"
        onClick={() => (window.location.href = url)}
      >
        <div
          className={`col-span-12 md:col-span-6 px-10 py-6 text-white ${bgColor}`}
        >
          <div className="text-[36px] font-[600] leading-10 mb-4 mt-4">
            {title}
          </div>
          <div>{description}</div>
          {icon}
          <div className="flex items-center mt-2 text-sm">
            더보기 <ArrowRightIcon className="w-4 h-4 ml-1" />
          </div>
        </div>
        <div
          className="col-span-12 md:col-span-6"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
            opacity: 0.9,
            minHeight: "290px",
          }}
        ></div>
      </div>
    </motion.div>
  )

  return (
    <>
      <div className="home-main-bg">
        <div className="h-full bg-[rgba(255,255,255,0.05)] flex flex-col items-center justify-center">
          <div className="bg-primary px-12 py-10 opacity-90 mt-auto -mb-8">
            <AirplaneIcon className="mx-auto -mb-6 -mt-10 drop-shadow w-[120px] md:w-[160px]" />
            <div className="text-white text-center font-[600] leading-[4rem] drop-shadow">
              <div className="text-[70px] md:text-[80px]">WHITE CASTLE</div>
              <div className="text-[30px] md:text-[40px]">NEW YORK</div>
            </div>
          </div>
          <div className="text-white mt-auto w-full p-1 text-small opacity-30">
            사진:{" "}
            <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EB%82%AE%EC%97%90-%EA%B1%B4%EB%AC%BC-%EC%82%AC%EC%9D%B4-%EA%B1%B0%EB%A6%AC%EB%A5%BC-%EB%8B%AC%EB%A6%AC%EB%8A%94-%EB%85%B8%EB%9E%80-%EC%B0%A8-WTPp4wgourk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </a>
            의
            <a href="https://unsplash.com/ko/@robertbye?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Robert Bye
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              ease: "easeOut",
              delay: 0.1,
              duration: 1,
            },
          }}
        >
          <div className="pt-[60px] pb-[20px] text-center leading-9">
            <div className="text-2xl font-semibold mb-4">어떠한 컨텐츠</div>
            <p>
              맨하탄 도심 42번가에 위치하여 맨하탄 뷰를 감상하실 수 있는
              숙소입니다.
            </p>
            <p>
              뉴욕의 중심인 맨하탄에서의 풍부하고 다양한 경험을 블라블라
              블라블라 럭셔리 리조트 아파트의 경험을 제공합니다.
            </p>
            <p>
              프로페셔널하고 세심히 관리되는 럭셔리 호텔 | 리조트 | 풀빌라
              스타일 아파트의 다양한 생활, 편의시설, 부대시설을 여행 내내 무료로
              즐기실수 있습니다.
            </p>
            <p>
              새롭게 인테리어 디자인한 곳으로, 모든가구와 식기류는 물론, 숙소 내
              모든 것들이 Brand New 입니다.
            </p>
          </div>
        </motion.div>

        <div className="py-[60px]">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6">
              <QuickSlot
                title="ROOMS"
                bgColor="bg-primary"
                description="42가 맨하탄뷰 숙소"
                icon={<BuildingOfficeIcon className="w-10 h-10 mt-8" />}
                url="/rooms/1"
                image="/room1.jpeg"
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <QuickSlot
                title="TOUR"
                bgColor="bg-[#7B4340]"
                description="우드베리 코먼 프리미엄 아웃렛 라이드 서비스"
                icon={<ShoppingBagIcon className="w-10 h-10 mt-8" />}
                url="/tour"
                image="/woodbury.jpeg"
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <QuickSlot
                title="TICKETS"
                bgColor="bg-[#1976D2]"
                description="티켓/입장권"
                icon={<TicketIcon className="w-10 h-10 mt-8" />}
                url="/ticket"
                image="/ticket.jpg"
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <QuickSlot
                title="BROADWAY SHOW"
                bgColor="bg-[#EA472A]"
                description="브로드웨이 뮤지컬"
                icon={<BuildingLibraryIcon className="w-10 h-10 mt-8" />}
                url="/broadway"
                image="/show.webp"
              />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              ease: "easeOut",
              delay: 0.1,
              duration: 1,
            },
          }}
        >
          <div className="pt-[30px] pb-[60px] text-center leading-9">
            <div className="text-2xl font-semibold mb-4">어떠한 컨텐츠</div>
            <p>
              맨하탄 도심 42번가에 위치하여 맨하탄 뷰를 감상하실 수 있는
              숙소입니다.
            </p>
            <p>
              뉴욕의 중심인 맨하탄에서의 풍부하고 다양한 경험을 블라블라
              블라블라 럭셔리 리조트 아파트의 경험을 제공합니다.
            </p>
            <p>
              프로페셔널하고 세심히 관리되는 럭셔리 호텔 | 리조트 | 풀빌라
              스타일 아파트의 다양한 생활, 편의시설, 부대시설을 여행 내내 무료로
              즐기실수 있습니다.
            </p>
            <p>
              새롭게 인테리어 디자인한 곳으로, 모든가구와 식기류는 물론, 숙소 내
              모든 것들이 Brand New 입니다.
            </p>
          </div>
          <hr />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              ease: "easeOut",
              delay: 0.1,
              duration: 1,
            },
          }}
        >
          <div className="pt-[30px] pb-[60px] text-center leading-9">
            <div className="text-2xl font-semibold mb-4">문의하기</div>

            <div className="leading-10 text-lg">
              1034 6th Ave, New York, NY 10018
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  <EnvelopeIcon className="h-5 w-5 mr-2" />
                  <a href="mailto:whitecastleny@gmail.com">
                    whitecastleny@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  <a href="tel:212-221-2304">212-221-2304</a>
                </div>
                <div className="flex items-center mb-4">
                  <ChatBubbleOvalLeftIcon className="h-5 w-5 inline-block mr-2" />
                  <a href="http://pf.kakao.com/_stkyb">카카오톡</a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            className="gmap_iframe"
            width="100%"
            src="https://maps.google.com/maps?width=&amp;height=&amp;hl=ko&amp;q=1515+Broadway,+New+York,+NY+10036+미국&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </>
  )
}
