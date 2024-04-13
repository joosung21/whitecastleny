"use client"
import { useState, useMemo } from "react"
import { Input, Textarea } from "@nextui-org/react"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid"
import { EnvelopeIcon } from "@heroicons/react/24/outline"

const sizes = ["sm", "md", "lg"] as const
const variants = ["flat", "bordered", "underlined", "faded"] as const

export function InputUI() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("jay2bolta.io")
  const toggleVisibility = () => setIsVisible(!isVisible)

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)

  const isInvalid = useMemo(() => {
    if (email === "") return false

    return validateEmail(email) ? false : true
  }, [email])

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
      <div className="md:col-span-3">
        <div className="font-semibold text-lg">Input</div>
      </div>
      <div className="md:col-span-9">
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input type="email" label="레이블" />
          <Input type="email" label="레이블" placeholder="플레이스 홀더" />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
          <Input
            isDisabled
            type="레이블"
            label="Disabled"
            defaultValue="name@email.com"
            className="max-w-xs"
          />

          <Input
            isReadOnly
            type="email"
            label="Read Only"
            defaultValue="name@email.com"
            className="max-w-xs"
          />
        </div>

        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
          {sizes.map(size => (
            <div
              key={size}
              className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
            >
              <Input size={size} type="email" label={`${size} 사이즈`} />
            </div>
          ))}
        </div>

        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-4">
          {variants.map(variant => (
            <div
              key={variant}
              className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
            >
              <Input
                type="email"
                variant={variant}
                label={`${variant} 스타일`}
              />
            </div>
          ))}
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-8">
          <Input
            isRequired
            type="email"
            label="Required"
            placeholder="필수입력 항목입니다."
          />
          <Input
            label="Password Toggle"
            placeholder="패스워드를 입력하세요."
            endContent={
              <button type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <EyeSlashIcon className="text-2xl w-6 h-6 text-default-400" />
                ) : (
                  <EyeIcon className="text-2xl w-6 h-6 text-default-400" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            className="max-w-xs"
          />
        </div>
        <div className="flex flex-col gap-4 mt-8">
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              type="email"
              label="이메일"
              placeholder="you@example.com"
              labelPlacement="outside"
              startContent={
                <EnvelopeIcon className="text-default-400 w-6 h-6" />
              }
            />
            <Input
              type="number"
              label="가격"
              placeholder="0"
              labelPlacement="outside"
              step={1000}
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">₩</span>
                </div>
              }
            />
            <Input
              type="url"
              label="웹사이트"
              placeholder="bolta.io"
              labelPlacement="outside"
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">https://</span>
                </div>
              }
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              type="email"
              label="이메일"
              placeholder="you@example.com"
              labelPlacement="outside"
              endContent={<EnvelopeIcon className="text-default-400 w-6 h-6" />}
            />
            <Input
              type="number"
              label="가격"
              placeholder="0"
              labelPlacement="outside"
              step={1000}
              endContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">원</span>
                </div>
              }
            />
            <Input
              type="url"
              label="몸무게"
              placeholder="70"
              labelPlacement="outside"
              endContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">kg</span>
                </div>
              }
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              label="Email"
              placeholder="jay"
              labelPlacement="outside"
              startContent={
                <EnvelopeIcon className="text-default-400 w-6 h-6 flex-shrink-0" />
              }
              endContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">
                    @gmail.com
                  </span>
                </div>
              }
            />
            <Input
              label="Price"
              labelPlacement="outside"
              placeholder="0"
              endContent={
                <div className="flex items-center">
                  <label className="sr-only" htmlFor="currency">
                    Currency
                  </label>
                  <select
                    className="outline-none border-0 bg-transparent text-default-400 text-small"
                    id="currency"
                    name="currency"
                  >
                    <option>KRW</option>
                    <option>USD</option>
                    <option>EUR</option>
                  </select>
                </div>
              }
              type="number"
            />
            <Input
              type="url"
              label="Website"
              placeholder=""
              labelPlacement="outside"
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">https://</span>
                </div>
              }
              endContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">.com</span>
                </div>
              }
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              value={email}
              type="email"
              label="이메일 유효성 검사"
              variant="bordered"
              isInvalid={isInvalid}
              color={isInvalid ? "danger" : "default"}
              errorMessage={isInvalid && "올바른 이메일을 입력해 주세요."}
              onValueChange={setEmail}
              className="max-w-xs"
            />
            <Input
              value={email}
              type="email"
              label="이메일 유효성 검사"
              isInvalid={isInvalid}
              color={isInvalid ? "danger" : "default"}
              errorMessage={isInvalid && "올바른 이메일을 입력해 주세요."}
              onValueChange={setEmail}
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Textarea
              label="Textarea"
              placeholder="내용을 입력하세요."
              className="max-w-xs"
              minRows={8}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
