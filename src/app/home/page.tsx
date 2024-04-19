"use client"
import AirplaneIcon from "@/assets/airplane.svg"
import { motion } from "framer-motion"

import {
  BuildingOfficeIcon,
  ShoppingBagIcon,
  TicketIcon,
  BuildingLibraryIcon,
  EnvelopeIcon,
  // ChatBubbleOvalLeftIcon,
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
            <div className="text-2xl font-semibold mb-4">화이트캐슬</div>
            <p>
              세계의 중심 도시 뉴욕 그곳에서도 타임스퀘어는 맨하탄에서 가장
              화려하고 볼거리가 많은 곳입니다.
            </p>
            <p>
              화이트 캐슬 타임스퀘어 지점은 다른 일반적인 뉴욕 아파트들이나
              호텔들과 달리 지은지 몇년 안된 최신식 브랜드 뉴 아파트입니다.
            </p>
          </div>
        </motion.div>

        <div className="py-[60px]">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6">
              <QuickSlot
                title="RESIDENCE"
                bgColor="bg-primary"
                description="뉴욕 럭셔리 레지던스"
                icon={<BuildingOfficeIcon className="w-10 h-10 mt-8" />}
                url="/rooms/1"
                image="/room-7-3.jpg"
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
            <div className="text-2xl font-semibold mb-4">뉴욕 레지던스</div>
            <p>
              화이트캐슬 타임스퀘어 지점은 전 지점이 타임스퀘어를 기준으로
              미드타운 한중심에 위치하고 있습니다.
            </p>
            <p>
              모든 손님분들이 깨끗하고 안전하게 머무시다 가실 수 있도록 최선을
              다해 안내드립니다.
            </p>
            <p>
              10년이상된 오랜 운영의 노하우로 화이트캐슬만의 친절하고 깨끗한
              서비스 약속드립니다.
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
              75 west end ave #R18D, New York, NY 10023
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  <EnvelopeIcon className="h-5 w-5 mr-2" />
                  <a href="mailto:whitecastleny@gmail.com">
                    whitecastleny@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  <a href="tel:332-271-7070">332-271-7070</a>
                </div>
                {/* <div className="flex items-center mb-4">
                  <ChatBubbleOvalLeftIcon className="h-5 w-5 inline-block mr-2" />
                  <a href="http://pf.kakao.com/_stkyb">카카오톡</a>
                </div> */}
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
            src="https://maps.google.com/maps?width=&amp;height=&amp;hl=ko&amp;q=75+West+End+Ave,+New+York,+NY+10023+미국&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </>
  )
}
