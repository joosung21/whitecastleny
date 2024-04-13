import { Button } from "@nextui-org/react"
import { HeartIcon } from "@heroicons/react/24/outline"
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid"

export function ButtonUI() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
      <div className="md:col-span-3">
        <div className="font-semibold text-lg">Button</div>
      </div>
      <div className="md:col-span-9">
        <div className="space-x-2 space-y-2">
          <Button>default</Button>
          <Button color="primary">primary</Button>
          <Button color="secondary">secondary</Button>
          <Button color="warning">warning</Button>
          <Button color="danger">danger</Button>
          <Button color="success">success</Button>
        </div>
        <div className="space-x-2 space-y-2 mt-2">
          <Button isDisabled color="primary">
            Disabled
          </Button>
        </div>
        <div className="space-x-2 space-y-2">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
        <div className="space-x-2 space-y-2">
          <Button color="primary" variant="solid">
            Solid
          </Button>
          <Button color="primary" variant="faded">
            Faded
          </Button>
          <Button color="primary" variant="bordered">
            Bordered
          </Button>
          <Button color="primary" variant="light">
            Light
          </Button>
          <Button color="primary" variant="flat">
            Flat
          </Button>
          <Button color="primary" variant="ghost">
            Ghost
          </Button>
          <Button color="primary" variant="shadow">
            Shadow
          </Button>
        </div>
        <div className="space-x-2 space-y-2 mt-2">
          <Button color="primary" isLoading>
            Loading 1
          </Button>

          <Button
            isLoading
            color="secondary"
            spinner={
              <svg
                className="animate-spin h-5 w-5 text-current"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  fill="currentColor"
                />
              </svg>
            }
          >
            Loading 2
          </Button>
        </div>
        <div className="space-x-2 mt-4 flex">
          <Button
            color="danger"
            variant="bordered"
            startContent={<HeartIcon className="h-6 w-6 -ml-2" />}
          >
            ICON START
          </Button>
          <Button
            color="danger"
            endContent={<HeartIconSolid className="h-6 w-6 -mr-2" />}
          >
            ICON END
          </Button>
          <Button isIconOnly color="danger" aria-label="Like">
            <HeartIconSolid className="w-6 n-6" />
          </Button>
          <Button
            isIconOnly
            color="default"
            variant="faded"
            aria-label="Take a photo"
          >
            <HeartIcon className="w-6 n-6" />
          </Button>
        </div>

        <div className="space-x-2 mt-4 flex">
          <Button
            radius="full"
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
          >
            그라데이션 버튼
          </Button>
        </div>
      </div>
      <div></div>
    </div>
  )
}
