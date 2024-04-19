"use client"

import {
  HomeIcon,
  ShoppingBagIcon,
  TicketIcon,
  BuildingOfficeIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline"
import React from "react"
import { ALink } from "./ALink"

export default function NavLinks() {
  return (
    <div className="mt-6">
      <ALink name="Home" href="/home" icon={HomeIcon} />
      <ALink name="뉴욕레지던스" href="/rooms/1" icon={BuildingOfficeIcon} />
      <ALink name="티켓/입장권" href="/ticket" icon={TicketIcon} />
      <ALink name="우드버리투어" href="/tour" icon={ShoppingBagIcon} />
      <ALink
        name="브로드웨이뮤지컬"
        href="/broadway"
        icon={BuildingLibraryIcon}
      />
    </div>
  )
}
