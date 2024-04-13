import AirplaneIcon from "@/assets/airplane.svg"

export default function Home() {
  return (
    <>
      <div className="home-main-bg">
        <div className="h-full bg-[rgba(255,255,255,0.05)] flex flex-col items-center justify-center">
          <div className="bg-primary px-12 py-10 opacity-90 mt-auto -mb-8">
            <AirplaneIcon className="mx-auto -mb-6 -mt-10 drop-shadow w-[120px] md:w-[160px]" />
            <div className="text-white text-center font-[600] leading-[4rem] drop-shadow">
              <div className="text-[70px] md:text-[80px]">WHITE CASTLE</div>
              <div className="text-[30px] md:text-[40px]">NEW YORK</div>
            </div>
          </div>
          <div className="text-white mt-auto w-full p-1 text-small opacity-30">
            사진:{" "}
            <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EB%82%AE%EC%97%90-%EA%B1%B4%EB%AC%BC-%EC%82%AC%EC%9D%B4-%EA%B1%B0%EB%A6%AC%EB%A5%BC-%EB%8B%AC%EB%A6%AC%EB%8A%94-%EB%85%B8%EB%9E%80-%EC%B0%A8-WTPp4wgourk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </a>
            의
            <a href="https://unsplash.com/ko/@robertbye?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Robert Bye
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

// 사진: <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EB%82%AE%EC%97%90-%EA%B1%B4%EB%AC%BC-%EC%82%AC%EC%9D%B4-%EA%B1%B0%EB%A6%AC%EB%A5%BC-%EB%8B%AC%EB%A6%AC%EB%8A%94-%EB%85%B8%EB%9E%80-%EC%B0%A8-WTPp4wgourk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>의<a href="https://unsplash.com/ko/@robertbye?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Robert Bye</a>
