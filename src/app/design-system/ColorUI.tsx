"use client"
import { Image } from "@nextui-org/react"

export function ColorUI() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
      <div className="md:col-span-3">
        <div className="font-semibold text-lg">Color</div>
      </div>
      <div className="md:col-span-9">
        <div className="font-semibold text-lg my-2">Theme Colors</div>
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-2">
          <div className="md:col-span-2">
            <div className="bg-default text-gray-500 p-4 rounded">Default</div>
          </div>
          <div className="md:col-span-2">
            <div className="bg-primary text-white p-4 rounded-md">Primary</div>
          </div>
          <div className="md:col-span-2">
            <div className="bg-secondary text-white p-4 rounded-md">
              Secondary
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="bg-success text-white p-4 rounded-md">Success</div>
          </div>
          <div className="md:col-span-2">
            <div className="bg-danger text-white p-4 rounded-md">Danger</div>
          </div>
          <div className="md:col-span-2">
            <div className="bg-warning text-white p-4 rounded-md">Warning</div>
          </div>
        </div>
        <div className="font-semibold text-lg mt-8">Colors Tokens</div>

        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/color1.png"
        />
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/color2.png"
        />
      </div>
    </div>
  )
}
