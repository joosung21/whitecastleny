import style from "./Top.module.scss"
import { useLayoutStore, useBreakpointStore } from "@/zustand/store"
import { Bars3Icon } from "@heroicons/react/24/outline"
import AirplaneIcon from "@/assets/airplane-black.svg"

export default function Top() {
  const toggleLeft = useLayoutStore(state => state.toggleLeft)
  const isLeftOpen = useLayoutStore(state => state.isLeftOpen)
  const isMobile = useBreakpointStore(state => state.isMobile)

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
      <div
        className={`flex items-center cursor-pointer ${
          isMobile ? "hidden" : ""
        }`}
        onClick={() => {
          window.location.href = "/"
        }}
      >
        <AirplaneIcon className="w-12 mr-2" />
        <div className="font-[600] text-secondary">WHITE CASTLE NEW YORK</div>
      </div>
    </div>
  )
}
