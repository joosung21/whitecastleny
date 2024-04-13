"use client"
import { Tooltip, Button } from "@nextui-org/react"

export function TooltipUI() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
      <div className="md:col-span-3">
        <div className="font-semibold text-lg">Tooltip</div>
      </div>
      <div className="md:col-span-9">
        <div className="space-x-2">
          <Tooltip content="툴팁 메세지 입니다. 간단한 설명 문구는 툴팁으로...">
            <Button color="primary">마우스를 올려 보세요</Button>
          </Tooltip>

          <Tooltip
            content={
              <div className="px-1 py-2">
                <div className="text-small font-bold">커스텀한 컨텐츠</div>
                <div className="text-tiny">
                  여기에 자세한 설명을 추가할 수 있습니다.
                  <br />
                  이미지 등 다양한 컨텐츠를 넣을 수 있습니다.
                </div>
              </div>
            }
          >
            <Button variant="bordered">커스텀 툴팁 컨텐츠</Button>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}
