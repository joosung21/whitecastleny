"use client"

import { CameraIcon, MapPinIcon } from "@heroicons/react/24/outline"

export default function Page() {
  return (
    <>
      <div className="min-h-[400px] grid grid-cols-12">
        <div className="col-span-12 md:col-span-4 bg-[#7B4340] px-10 py-6 text-white">
          <div className="text-[40px] font-[600]">TOURS</div>
          <div>뉴욕의 투어상품들</div>
          <CameraIcon className="w-12 h-12 mt-8" />
        </div>
        <div
          className="col-span-12 md:col-span-8"
          style={{
            backgroundImage: `url('/tours01.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
            opacity: 0.9,
            minHeight: "400px",
          }}
        />
      </div>
      <div className="container">
        <div className="text-xl mt-8 flex items-center">
          <MapPinIcon className="w-6 h-6 mr-2" />
          미국 / 뉴욕
        </div>

        <div className="grid grid-cols-12 gap-4 my-8">
          <div className="col-span-12 md:col-span-4">
            <div
              className="cursor-pointer pb-6"
              onClick={() => (window.location.href = "/tours/tour1")}
            >
              <div
                className="rounded-xl min-h-[300px]"
                style={{
                  backgroundImage: `url('/tours02.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "100%",
                  opacity: 0.9,
                }}
              />
              <div className="text-lg font-bold mt-4">
                화이트캐슬 뉴욕 시티투어
              </div>
              <div>⭐️ 4.9 (1,234)</div>
              <div className="font-bold my-2">
                <span className="text-red-500">3%</span> 258,824원
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4">
            <div
              className="cursor-pointer pb-6"
              onClick={() => (window.location.href = "/tours/tour2")}
            >
              <div
                className="rounded-xl min-h-[300px]"
                style={{
                  backgroundImage: `url('/tt11.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "100%",
                  opacity: 0.9,
                }}
              />
              <div className="text-lg font-bold mt-4">
                당일치기 나이아가라 폭포 투어 (뉴욕출발)
              </div>
              <div>⭐️ 4.7 (678)</div>
              <div className="font-bold my-2">
                <span className="text-red-500">5%</span> 341,017원
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4">
            <div
              className="cursor-pointer pb-6"
              onClick={() => (window.location.href = "/tours/tour3")}
            >
              <div
                className="rounded-xl min-h-[300px]"
                style={{
                  backgroundImage: `url('/tt21.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "100%",
                  opacity: 0.9,
                }}
              />
              <div className="text-lg font-bold mt-4">
                탑뷰 24시간 2층 버스 / 최저가 보장!
              </div>
              <div>⭐️ 4.0 (820)</div>
              <div className="font-bold my-2">64,900원</div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4">
            <div
              className="cursor-pointer pb-6"
              onClick={() => (window.location.href = "/tours/tour4")}
            >
              <div
                className="rounded-xl min-h-[300px]"
                style={{
                  backgroundImage: `url('/tt31.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "100%",
                  opacity: 0.9,
                }}
              />
              <div className="text-lg font-bold mt-4">
                브루클린 덤보 야경 투어 (워킹투어)
              </div>
              <div>⭐️ 5.0 (18)</div>
              <div className="font-bold my-2">48,500원</div>
            </div>
          </div>
          
          <div className="col-span-12 md:col-span-4">
            <div
              className="cursor-pointer pb-6"
              onClick={() => (window.location.href = "/tours/tour5")}
            >
              <div
                className="rounded-xl min-h-[300px]"
                style={{
                  backgroundImage: `url('/tt51.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "100%",
                  opacity: 0.9,
                }}
              />
              <div className="text-lg font-bold mt-4">
                뉴욕 메트로폴리탄 미술관 / 입장권 포함
              </div>
              <div>⭐️ 4.6 (32)</div>
              <div className="font-bold my-2">99,000원</div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4">
            <div
              className="cursor-pointer pb-6"
              onClick={() => (window.location.href = "/tours/tour6")}
            >
              <div
                className="rounded-xl min-h-[300px]"
                style={{
                  backgroundImage: `url('/tt61.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "100%",
                  opacity: 0.9,
                }}
              />
              <div className="text-lg font-bold mt-4">
                뉴욕 현대 미술관 MoMA 도슨트 투어 + 입장권 포함
              </div>
              <div>⭐️ 4.9 (230)</div>
              <div className="font-bold my-2"><span className="text-red-500">3%</span> 106,700</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
