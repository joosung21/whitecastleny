"use client"
import React from "react"
import { useForm } from "react-hook-form"
import { Input, Button } from "@nextui-org/react"

interface IFormInput {
  name: string
  email: string
}

export default function Page() {
  const [updateData, setUpdateData] = React.useState<IFormInput>({
    name: "",
    email: "",
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data))
  }

  return (
    <div className="max-w-[800px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <Input
                value={updateData.name}
                fullWidth
                label="이름"
                isInvalid={errors.name !== undefined}
                errorMessage={errors.name && errors.name.message}
                onValueChange={value =>
                  setUpdateData({ ...updateData, name: value })
                }
                {...register("name", { required: "필수 입력 항목입니다." })}
              />
              <Input
                value={updateData.email}
                fullWidth
                label="Email"
                type="email"
                isInvalid={errors.email !== undefined}
                errorMessage={errors.email && errors.email.message}
                onValueChange={value =>
                  setUpdateData({ ...updateData, email: value })
                }
                {...register("email", {
                  required: "필수 입력 항목입니다.",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "이메일 형식이 맞지 않습니다.",
                  },
                })}
              />

              <Button color="primary" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
