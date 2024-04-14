export type Room = {
  id: number
  name: string
  excelTitle: string
}

export const roomItems = [
  { id: 1, name: "1호점 타임스퀘어", excelTitle: "1호점" },
  { id: 2, name: "2호점 타임스퀘어", excelTitle: "2호점" },
  { id: 3, name: "3호점 타임스퀘어", excelTitle: "3호점" },
  { id: 4, name: "4호점 유니온스케어", excelTitle: "4호점" },
  { id: 5, name: "5호점 유니온스케어", excelTitle: "5호점" },
  { id: 6, name: "6호점 미드타운", excelTitle: "6호점" },
  { id: 7, name: "7호점", excelTitle: "7호점" },
]

export function getRoomName(id: number) {
  return roomItems.find(room => room.id === id)?.name
}

export function getRoomExcelTitle(id: number) {
  return roomItems.find(room => room.id === id)?.excelTitle
}
