import style from "./Left.module.scss"
import NavLinks from "./components/NavLinks"
import { useBreakpointStore, useLayoutStore } from "@/zustand/store"
import AirplaneIcon from "@/assets/airplane-black.svg"
import clsx from "clsx"

export default function Left() {
  const isMobile = useBreakpointStore(state => state.isMobile)
  const isLeftOpen = useLayoutStore(state => state.isLeftOpen)
  const closeLeft = useLayoutStore(state => state.closeLeft)

  return (
    <div>
      {isLeftOpen && isMobile && (
        <div className={style.overlay} onClick={closeLeft} />
      )}
      <div
        className={`${style.left} ${clsx({
          [style.hide]: !isLeftOpen,
          "shadow-xl": isMobile,
        })}`}
      >
        <div className="px-6 mt-6">
          <AirplaneIcon className="w-12 h-12 mr-2" />
          <div className="font-[600]">
            화이트캐슬 <span className="ml-1 text-[#999]">NEW YORK</span>
          </div>
        </div>
        <NavLinks />
      </div>
    </div>
  )
}
