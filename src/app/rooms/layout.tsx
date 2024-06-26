import { BuildingOfficeIcon } from "@heroicons/react/24/outline"
import RoomMenu from "./RoomMenu"

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <div className="hidden md:block">
        <div className="min-h-[400px] grid grid-cols-12">
          <div className="col-span-12 md:col-span-4 bg-primary px-10 py-6 text-white">
            <div className="text-[40px] font-[600]">RESIDENCE</div>
            <div>뉴욕 럭셔리 레지던스</div>
            <BuildingOfficeIcon className="w-12 h-12 mt-8" />
          </div>
          <div
            className="col-span-12 md:col-span-8"
            style={{
              backgroundImage: `url('/room-7-3.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
              opacity: 0.9,
              minHeight: "400px",
            }}
          />
        </div>
      </div>

      <div className="container">
        <RoomMenu />
        {children}
      </div>
    </>
  )
}
