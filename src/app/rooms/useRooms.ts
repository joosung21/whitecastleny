export type Room = {
  id: number
  name: string
  excelTitle: string
}

export const roomItems = [
  { id: 1, name: "3호점 49번가 브로드웨이", excelTitle: "3호점" },
  { id: 2, name: "5호점 센트럴파크", excelTitle: "5호점" },
  { id: 3, name: "7호점 럭셔리 통유리 뷰 독채", excelTitle: "7호점" },
]

export function getRoomName(id: number) {
  return roomItems.find(room => room.id === id)?.name
}

export function getRoomExcelTitle(id: number) {
  return roomItems.find(room => room.id === id)?.excelTitle
}
