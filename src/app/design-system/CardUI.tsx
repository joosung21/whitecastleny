"use client"

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react"

export function CardUI() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
      <div className="md:col-span-3">
        <div className="font-semibold text-lg">Card</div>
      </div>
      <div className="md:col-span-9">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://lh3.googleusercontent.com/8rOxrcbo1UK3hOnXBmU8EN5ubi8boPA8bpo9A95Q-T5Io05_ALpXgkfGleCgZDifdgU"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">Bolta</p>
              <p className="text-small text-default-500">bolta.io</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>
              볼타와 함께라면 세금계산서 발행, 관리 업무가 쉬워집니다. 10,000+,
              누적 발행량, 150 억원+ 누적 발행액, 1 % 이탈률.
            </p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href="https://bolta.io/">
              자세히 보기
            </Link>
          </CardFooter>
        </Card>

        <Card className="py-4 max-w-[400px] mt-8">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">카드 캐치프레이즈</p>
            <small className="text-default-500">어떠한 설명 문구</small>
            <h4 className="font-bold text-large">카드 타이틀 Title</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="/mock1.webp"
            />
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
