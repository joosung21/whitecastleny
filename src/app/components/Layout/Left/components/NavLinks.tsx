"use client"

import { HomeIcon } from "@heroicons/react/24/outline"
import React from "react"
import { ALink } from "./ALink"
// import { AGroup } from "./AGroup"

export default function NavLinks() {
  return (
    <div className="mt-6">
      <ALink name="Home" href="/home" icon={HomeIcon} />
      {/* <ALink name="Design System" href="/design-system" icon={SwatchIcon} /> */}
      {/* <ALink name="Form Validation" href="/form" icon={QueueListIcon} /> */}
      {/* <ALink
        name="React Query"
        href="/react-query"
        icon={CodeBracketSquareIcon}
      /> */}
      {/* <AGroup name="Group1" icon={BuildingOfficeIcon}>
        <ALink name="하위 메뉴 1" href="/chart" group="Group1" />
        <ALink name="하위 메뉴 2" href="/chart" group="Group1" />
      </AGroup> */}
    </div>
  )
}
