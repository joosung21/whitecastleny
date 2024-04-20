"use client"
import { useState } from "react"
// import { PhoneIcon } from "@heroicons/react/24/outline"
import { Button, Input, Textarea } from "@nextui-org/react"

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    message: "",
  })

  return (
    <div className="mb-8">
      <div className="text-xl font-semibold mb-4">예약문의</div>
      <div className="mb-4 leading-8">
        이메일이나 SMS로 문의 주시면 답변 드리겠습니다.
        <br />
        (한국과 뉴욕과의 시차로 인해 전화로 문의 주시면 답변이 늦어질 수
        있습니다.)
      </div>
      {/* <div className="flex items-center text-xl">
        <PhoneIcon className="h-6 w-6 mr-2" />
        <a href="tel:+1-332-271-7070">332-271-7070</a>
      </div>
      <div className="text-xl my-4">whitecastleny@gmail.com</div> */}
      <div className="max-w-[600px] rounded-xl px-6 py-8 border-4 border-primary-600">
        <div className="flex flex-col gap-6">
          <Input
            label="이름"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
          <Input
            label="전화번호"
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
          />
          <Input
            label="방문일자"
            value={form.date}
            onChange={e => setForm({ ...form, date: e.target.value })}
          />
          <Textarea
            label="문의내용"
            minRows={10}
            placeholder="문의 내용을 입력해주세요."
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
          />
          <Button
            size="lg"
            color="primary"
            onClick={() => {
              window.location.href = `mailto:whitecastleny@gmail.com?subject=에약문의 ${form.name}님&body=안녕하세요.%0D%0A%0D%0A예약 문의 드립니다.%0D%0A%0D%0A이름:${form.name}%0D%0A%0D%0A전화번호:${form.phone}%0D%0A%0D%0A방문일자:${form.date}%0D%0A%0D%0A문의내용:%0D%0A%0D%0A${form.message}`
            }}
          >
            예약 문의하기
          </Button>
        </div>
      </div>
    </div>
  )
}
