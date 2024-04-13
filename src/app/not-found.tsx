import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-120px)] px-6">
      <h1 className="text-9xl font-bold text-gray-800">404</h1>
      <h2 className="text-6xl font-medium text-gray-700">Not Found</h2>
      <p className="text-gray-600 mt-4 mb-8">
        페이지를 찾지 못했습니다. 입력하신 주소가 정확한지 다시 한번 확인해
        주세요.
      </p>
      <Link
        href="/"
        className="px-6 py-2 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        홈으로 돌아가기
      </Link>
    </div>
  )
}
