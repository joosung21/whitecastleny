import style from "./Top.module.scss"
import { useLayoutStore, useBreakpointStore } from "@/zustand/store"
import { Bars3Icon } from "@heroicons/react/24/outline"
import Link from "next/link"

export default function Top() {
  const toggleLeft = useLayoutStore(state => state.toggleLeft)
  const isLeftOpen = useLayoutStore(state => state.isLeftOpen)
  const isMobile = useBreakpointStore(state => state.isMobile)

  const NavButton = ({ name, href }: { name: string; href: string }) => (
    <Link
      href={href}
      className="font-[500] opacity-80 hover:opacity-100 transition"
    >
      {name}
    </Link>
  )

  return (
    <div
      className={`${style.top} ${
        isLeftOpen && !isMobile ? style.leftOpened : ""
      }`}
    >
      <div className="md:hidden">
        <Bars3Icon
          className="w-10 h-10 p-2 -ml-3 mr-2 cursor-pointer opacity-60 hover:opacity-100 transition hover:bg-stone-50 rounded-full"
          onClick={toggleLeft}
        />
      </div>
      {!isMobile && (
        <>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => {
              window.location.href = "/"
            }}
          >
            <div className="font-[600]">
              WHITE CASTLE <span className="ml-1 text-[#999]">NEW YORK</span>
            </div>
          </div>

          <div className="ml-auto flex gap-10 font-[500]">
            <NavButton name="뉴욕레지던스" href="/rooms/1" />
            <NavButton name="투어" href="/tours" />
            <NavButton name="티켓/입장권" href="/ticket" />
            <NavButton name="브로드웨이뮤지컬" href="/broadway" />
          </div>
        </>
      )}
    </div>
  )
}
