"use client"
// import Link from "next/link"
import style from "./Left.module.scss"
import NavLinks from "./components/NavLinks"
// import { Image } from "@nextui-org/react"
import { useBreakpointStore, useLayoutStore } from "@/zustand/store"
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
        {/* <div className="p-4"> */}
        {/* <Link href="/">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://lh3.googleusercontent.com/8rOxrcbo1UK3hOnXBmU8EN5ubi8boPA8bpo9A95Q-T5Io05_ALpXgkfGleCgZDifdgU"
              width={40}
            />
          </Link> */}
        {/* </div> */}
        <NavLinks />
      </div>
    </div>
  )
}
