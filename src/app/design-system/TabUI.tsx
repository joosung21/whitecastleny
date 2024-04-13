"use client"
import { Tabs, Tab } from "@nextui-org/react"

export function TabUI() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
      <div className="md:col-span-3">
        <div className="font-semibold text-lg">Tab</div>
      </div>
      <div className="md:col-span-9">
        <div className="space-y-4">
          <div>
            <Tabs variant="solid" color="secondary" aria-label="Tabs">
              <Tab key="photos" title="간편방행" />
              <Tab key="music" title="예약발행" />
              <Tab key="videos" title="기타발행" />
            </Tabs>
          </div>
          <div>
            <Tabs variant="light" color="secondary" aria-label="Tabs">
              <Tab key="photos" title="간편방행" />
              <Tab key="music" title="예약발행" />
              <Tab key="videos" title="기타발행" />
            </Tabs>
          </div>
          <div>
            <Tabs variant="underlined" color="secondary" aria-label="Tabs">
              <Tab key="photos" title="간편방행" />
              <Tab key="music" title="예약발행" />
              <Tab key="videos" title="기타발행" />
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
