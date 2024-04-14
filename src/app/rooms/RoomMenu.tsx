"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { roomItems, Room } from "./useRooms"

export default function RoomMenu() {
  const pathname = usePathname()
  const isActive = (id: number) => pathname?.includes(`/rooms/${id}`)

  const RoomItem = ({ room }: { room: Room }) => (
    <Link
      href={`/rooms/${room.id}`}
      className={`p-2 ${
        isActive(room.id) ? "border-b-3 border-[#5C6BC0] text-primary" : ""
      }`}
    >
      {room.name}
    </Link>
  )

  return (
    <div className="flex flex-wrap gap-4 text-[#999] font-[500] my-8">
      {roomItems.map(room => (
        <RoomItem key={room.id} room={room} />
      ))}
    </div>
  )
}
