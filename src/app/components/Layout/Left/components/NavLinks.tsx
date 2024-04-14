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
      <ALink name="Rooms" href="/rooms" icon={BuildingOfficeIcon} />
      <ALink name="Tickets" href="/ticket" icon={TicketIcon} />
      <ALink name="Tour" href="/tour" icon={ShoppingBagIcon} />
      <ALink name="Broadway" href="/broadway" icon={BuildingLibraryIcon} />
    </div>
  )
}
