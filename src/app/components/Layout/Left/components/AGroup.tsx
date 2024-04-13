"use client"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import { useLayoutStore } from "@/zustand/store"
import clsx from "clsx"
import React from "react"

export interface Group {
  name: string
  icon: React.ElementType
  children: React.ReactNode
}

export const AGroup = (props: Group) => {
  const GroupIcon = props.icon
  const openGroup = useLayoutStore(state => state.openGroup)
  const setOpenGroup = useLayoutStore(state => state.setOpenGroup)

  const addOpenGroup = (name: string) => {
    if (openGroup.indexOf(name) === -1) {
      setOpenGroup([...openGroup, name])
    } else {
      setOpenGroup(openGroup.filter(item => item !== name))
    }
  }

  const isGroupOpen = React.useMemo(
    () => openGroup.indexOf(props.name) !== -1,
    [openGroup, props.name],
  )

  return (
    <>
      <div
        className="flex h-12 items-center gap-2 px-5 font-medium hover:bg-stone-100 opacity-80 transition cursor-pointer"
        onClick={() => addOpenGroup(props.name)}
      >
        <GroupIcon className="w-6" />
        <div>{props.name}</div>
        <ChevronLeftIcon
          className={clsx("w-[18px] h-[18px] ml-auto transition", {
            "transform -rotate-90": isGroupOpen,
          })}
        />
      </div>
      <div
        className="overflow-hidden transition-all"
        style={{
          maxHeight: isGroupOpen ? 1000 : 0,
        }}
      >
        {props.children}
      </div>
    </>
  )
}
