"use client"
import { usePathname } from "next/navigation"
import { useLayoutStore, useBreakpointStore } from "@/zustand/store"
import clsx from "clsx"
import Link from "next/link"
import React from "react"

export interface Link {
  name: string
  href: string
  group?: string
  icon?: React.ElementType
}

export const ALink = (props: Link) => {
  const pathname = usePathname()
  const isMobile = useBreakpointStore(state => state.isMobile)
  const toggleLeft = useLayoutStore(state => state.toggleLeft)
  const LinkIcon = props.icon || null

  const closeLeft = () => {
    if (isMobile) {
      toggleLeft()
    }
  }

  return (
    <Link
      href={props.href}
      className={clsx(
        "flex h-12 items-center gap-2 px-5 font-medium hover:bg-stone-100 opacity-80 transition",
        {
          "text-primary": pathname === props.href,
          "pl-[52px]": props.group,
        },
      )}
      onClick={closeLeft}
    >
      {LinkIcon && <LinkIcon className="w-6" />}
      <div>{props.name}</div>
    </Link>
  )
}
