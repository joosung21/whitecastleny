"use client"
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react"

export function ModalUI() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
      <div className="md:col-span-3">
        <div className="font-semibold text-lg">Modal</div>
      </div>
      <div className="md:col-span-9">
        <Button onPress={onOpen}>모달 열기</Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          scrollBehavior="inside"
        >
          <ModalContent>
            {onClose => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  모달 타이틀
                </ModalHeader>
                <ModalBody>
                  <p>
                    로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나
                    그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은
                    그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기
                    텍스트로, 최종 결과물에 들어가는 실제적인 문장 내용이
                    채워지기 전에 시각 디자인 프로젝트 모형의 채움 글로도
                    이용된다. 이런 용도로 사용할 때 로렘 입숨을
                    그리킹(greeking)이라고도 부르며, 때로 로렘 입숨은 공간만
                    차지하는 무언가를 지칭하는 용어로도 사용된다.
                  </p>
                  <p>
                    로렘 입숨은 전통 라틴어와 닮은 점 때문에 종종 호기심을
                    유발하기도 하지만 그 이상의 의미를 담지는 않는다. 문서에서
                    텍스트가 보이면 사람들은 전체적인 프레젠테이션보다는
                    텍스트에 담긴 뜻에 집중하는 경향이 있어서 출판사들은 서체나
                    디자인을 보일 때는 프레젠테이션 자체에 초점을 맞추기 위해
                    로렘 입숨을 사용한다.
                  </p>
                  <p>
                    역시 마찬가지로, 단순히 고통이라는 이유 때문에 고통 그
                    자체를 사랑하거나 추구하거나 소유하려는 자는 없다. 다만
                    노역과 고통이 아주 큰 즐거움을 선사하는 상황이 때로는
                    발생하기 때문에 고통을 찾는 사람이 있는 것이다. 간단한 예를
                    들자면, 모종의 이익을 얻을 수도 없는데 힘든 육체적 노력을
                    기꺼이 할 사람이 우리들 중에 과연 있겠는가? 하지만 귀찮은
                    일이 뒤따르지 않는 즐거움을 누리는 것을 선택한 사람, 혹은
                    아무런 즐거움도 생기지 않는 고통을 회피하는 사람을 누가 탓할
                    수 있겠는가?
                  </p>
                  <p>
                    표준적인 로렘 입숨과 차이가 나는 변형 표현들도 존재한다.
                    어떤 것은 원래의 로렘 입숨과 거의 닮지 않았다. 다른
                    버전에서는 라틴어에서 거의 사용하지 않는 k, w, z 문자를
                    이용해 zzril, takimata, gubergren 같은 의미없는 단어를
                    원래의 문구에다 추가해 영어의 글자 분포에 더욱 가깝게 한
                    것도 있다. 때로는 키케로의 첫 번째 《카틸리나 반박문》(In
                    Catilinam)의 문구도 조판 견본으로 쓰이기도 한다:
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    닫기
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    확인
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  )
}
