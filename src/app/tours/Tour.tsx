import { Button } from "@nextui-org/react"

type Props = {
  children: React.ReactNode
  content: {
    title: string
    rate: string
    images: string[]
    discount?: string
    price: string
    pricetable: {
      title: string
      price: string
    }[]
    description: React.ReactNode
  }
}

export default function Tour({ children, content }: Props) {
  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-8 my-8">
        <div className="col-span-12 md:col-span-8">
          <div className="text-2xl font-semibold">{content.title}</div>
          <div className="text-xl mt-2">⭐️ {content.rate}</div>
          <div className="grid grid-cols-12 gap-2 my-8">
            <div className="col-span-12">
              <div
                className="min-h-[500px]"
                style={{
                  backgroundImage: `url('${content.images[0]}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "100%",
                  opacity: 0.9,
                }}
              />
            </div>
            <div className="col-span-12 md:col-span-4">
              <div
                className="min-h-[240px]"
                style={{
                  backgroundImage: `url('${content.images[1]}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "100%",
                  opacity: 0.9,
                }}
              />
            </div>
            <div className="col-span-12 md:col-span-4">
              <div
                className="min-h-[240px]"
                style={{
                  backgroundImage: `url('${content.images[2]}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "100%",
                  opacity: 0.9,
                }}
              />
            </div>
            <div className="col-span-12 md:col-span-4">
              <div
                className="min-h-[240px]"
                style={{
                  backgroundImage: `url('${content.images[3]}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </div>
          {children}
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="rounded-lg border p-6">
            <div className="text-lg font-bold">
              {content.discount && (
                <span className="text-red-500 mr-2">{content.discount}</span>
              )}
              {content.price}
            </div>

            <table className="w-full mt-4 border border-gray-100">
              <tbody>
                {content.pricetable.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-100 p-2">{item.title}</td>
                    <td className="border border-gray-100 p-2">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="space-y-4 mt-8 leading-10">
              {content.description}
            </div>

            <Button
              size="lg"
              color="primary"
              className="mt-8 w-full rounded"
              onClick={() => {
                window.location.href = `mailto:whitecastleny@gmail.com?subject=에약문의`
              }}
            >
              예약신청
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
