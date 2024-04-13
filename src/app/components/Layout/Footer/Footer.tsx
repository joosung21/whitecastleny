import {
  EnvelopeIcon,
  ChatBubbleOvalLeftIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline"
import AirplaneIcon from "@/assets/airplane-black.svg"

export default function Footer() {
  return (
    <footer className="bg-[#f1f1f1]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-4">
          <div className="text-sm text-gray-500 leading-7">
            <AirplaneIcon className="w-14 h-14 mr-2 opacity-70" />
            <div className="font-semibold text-[16px]">
              WHITE CASTLE NEW YORK
            </div>
            1034 6th Ave, New York, NY 10018
            <div className="flex items-center">
              <PhoneIcon className="h-5 w-5 mr-2" />
              <a href="tel:212-221-2304">212-221-2304</a>
            </div>
            <div className="flex items-center">
              <EnvelopeIcon className="h-5 w-5 mr-2" />
              <a href="mailto:whitecastleny@gmail.com">
                whitecastleny@gmail.com
              </a>
            </div>
            <div className="flex items-center mb-4">
              <ChatBubbleOvalLeftIcon className="h-5 w-5 inline-block mr-2" />
              <a href="http://pf.kakao.com/_stkyb">카카오톡</a>
            </div>
            © 2024 화이트캐슬 NewYork. All rights reserved.
            <br />
          </div>
        </div>
      </div>
    </footer>
  )
}
