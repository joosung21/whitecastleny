"use client"
import { useQuery, useQueryClient } from "react-query"
import React, { SyntheticEvent, useEffect } from "react"
import Image from "next/image"
import { useLoadingOverlayStore } from "@/zustand/loadingOverlayStore"

type Breed = {
  weight: {
    imperial: string
    metric: string
  }
  height: {
    imperial: string
    metric: string
  }
  id: number
  name: string
  bred_for: string
  breed_group: string
  life_span: string
  temperament: string
  origin: string
  reference_image_id: string
}

async function fetchDogBreeds(): Promise<Breed[]> {
  const response = await fetch("https://api.thedogapi.com/v1/breeds")
  if (!response.ok) {
    throw new Error("네트워크가 좋지 않습니다.")
  }
  return response.json()
}

export default function Page() {
  const startLoading = useLoadingOverlayStore(state => state.startLoading)
  const stopLoading = useLoadingOverlayStore(state => state.stopLoading)

  const { data, isLoading, error } = useQuery<Breed[], Error>(
    "breeds",
    fetchDogBreeds,
    {
      refetchOnMount: "always", // 컴포넌트가 마운트될 때마다 새로고침
      onSettled: () => {
        stopLoading() // 데이터 로드가 완료되거나 에러가 발생했을 때 로딩 종료
      },
      onError: () => {
        stopLoading() // 에러 발생 시 로딩 종료
      },
    },
  )

  const queryClient = useQueryClient()
  useEffect(() => {
    return () => {
      queryClient.removeQueries("breeds")
    }
  }, [queryClient])

  useEffect(() => {
    if (isLoading) {
      startLoading() // 로딩 시작
    }
    // 로딩 종료는 onSettled 콜백을 통해 처리
  }, [isLoading, startLoading, stopLoading])

  if (isLoading) return null // 로딩 중이면 아무것도 렌더링하지 않음
  if (error) return <p>An error has occurred: {error.message}</p>

  const placeholderImageUrl = "/noImage.jpg" // 여기에 대체 이미지의 경로를 넣으세요.

  // 이미지 로딩 실패 시 호출될 함수
  const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = placeholderImageUrl
  }

  return (
    <div className="p-4 limit-width">
      <h1 className="text-4xl font-bold text-center mb-8">Dog Breeds</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.map(breed => (
          <div
            key={breed.id}
            className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative h-40 w-full">
              <Image
                src={`https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`}
                alt={breed.name}
                width={500} // 이미지의 폭
                height={300} // 이미지의 높이
                className="object-cover w-full h-full" // object-cover와 w-full, h-full을 사용하여 채우기
                onError={handleImageError} // onError 이벤트 핸들러 추가
                unoptimized // 필요에 따라 이 속성을 추가하거나 제거할 수 있습니다.
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold">{breed.name}</h2>
              <p className="text-sm">
                <strong>Bred for:</strong> {breed.bred_for}
              </p>
              <p className="text-sm">
                <strong>Life Span:</strong> {breed.life_span}
              </p>
              <p className="text-sm">
                <strong>Temperament:</strong> {breed.temperament}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
