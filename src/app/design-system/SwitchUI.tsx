import { Switch } from "@nextui-org/react"

export function SwitchUI() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
      <div className="md:col-span-3">
        <div className="font-semibold text-lg">Switch</div>
      </div>
      <div className="md:col-span-9">
        <Switch defaultSelected />
        <div className="flex gap-4 my-8">
          <Switch defaultSelected size="sm">
            Small
          </Switch>
          <Switch defaultSelected size="md">
            Medium
          </Switch>
          <Switch defaultSelected size="lg">
            Large
          </Switch>
        </div>
        <Switch isDisabled defaultSelected>
          Disabled
        </Switch>
      </div>
    </div>
  )
}
