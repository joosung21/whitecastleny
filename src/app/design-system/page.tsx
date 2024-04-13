"use client"
import { Divider } from "@nextui-org/react"
import { ButtonUI } from "./ButtonUI"
import { ButtonGroupUI } from "./ButtonGroupUI"
import { InputUI } from "./InputUI"
import { SelectUI } from "./SelectUI"
import { CheckUI } from "./CheckUI"
import { SwitchUI } from "./SwitchUI"
import { AccordionUI } from "./AccordionUI"
import { CardUI } from "./CardUI"
import { ChipUI } from "./ChipUI"
import { ColorUI } from "./ColorUI"
import { TypographyUI } from "./TypographyUI"
import { TableUI } from "./TableUI"
import { TooltipUI } from "./TooltipUI"
import { ModalUI } from "./ModalUI"
import { SnackbarUI } from "./SnackbarUI"
import { LoadingOverlayUI } from "./LoadingOverlayUI"
import { TabUI } from "./TabUI"
import { DatePickerUI } from "./DatePickerUI"
import { FileUI } from "./FileUI"

import { useBreakpointStore } from "@/zustand/store"

export default function Page() {
  const breakpoint = useBreakpointStore(state => state.breakpoint)

  return (
    <div>
      <div className="flex">
        <h1 className="text-4xl text-primary font-serif">
          Bolta Design System
        </h1>
      </div>
      <div className="my-8">Current Breakpoint: {breakpoint}</div>

      <div className="limit-width">
        <TypographyUI />
        <Divider className="my-8" />
        <ColorUI />
        <Divider className="my-8" />
        <ButtonUI />
        <Divider className="my-8" />
        <FileUI />
        <Divider className="my-8" />
        <ButtonGroupUI />
        <Divider className="my-8" />
        <InputUI />
        <Divider className="my-8" />
        <SelectUI />
        <Divider className="my-8" />
        <DatePickerUI />
        <Divider className="my-8" />
        <CheckUI />
        <Divider className="my-8" />
        <SwitchUI />
        <Divider className="my-8" />
        <AccordionUI />
        <Divider className="my-8" />
        <CardUI />
        <Divider className="my-8" />
        <ChipUI />
        <Divider className="my-8" />
        <TableUI />
        <Divider className="my-8" />
        <TabUI />
        <Divider className="my-8" />
        <TooltipUI />
        <Divider className="my-8" />
        <ModalUI />
        <Divider className="my-8" />
        <SnackbarUI />
        <Divider className="my-8" />
        <LoadingOverlayUI />
        <Divider className="my-8" />
      </div>
    </div>
  )
}
