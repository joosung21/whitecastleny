"use client"
export function TypographyUI() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
      <div className="md:col-span-3">
        <div className="font-semibold text-lg">Typography</div>
      </div>
      <div className="md:col-span-9">
        <div className="text-2xl leading-loose">
          <p className="font-sans">font-sans 고딕체</p>
          <p className="font-serif">font-serif 명조체</p>
          <p className="font-mono">font-mono 모노체</p>
        </div>
        <div className="mt-8">
          <p className="text-sm">text-sm 작은글씨체 입니다.</p>
          <p className="text-base">text-base 기본글씨체 입니다.</p>
          <p className="text-lg">text-lg 큰글씨체 입니다.</p>
          <p className="text-xl">text-xl 아주 큰글씨체 입니다.</p>
          <p className="text-2xl">text-2xl 엄청 큰글씨체 입니다.</p>
          <p className="text-3xl">text-3xl 매우 큰글씨체 입니다.</p>
          <p className="text-4xl">text-4xl 거대한 글씨체 입니다.</p>
        </div>
      </div>
    </div>
  )
}
