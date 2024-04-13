import moment from "moment"

export const events = [
  {
    title: "안** 1호점 1박",
    start: moment("2024-04-13").toDate(),
    end: moment().add(1, "days").toDate(),
  },
  {
    title: "김** 2호점 2박",
    start: moment("2024-04-12").toDate(),
    end: moment("2024-04-12").add(2, "days").toDate(),
  },
  {
    title: "홍** 2호점 5박",
    start: moment("2024-04-20").toDate(),
    end: moment("2024-04-20").add(5, "days").toDate(),
  },
  {
    title: "홍** 2호점 5박",
    start: moment("2024-05-20").toDate(),
    end: moment("2024-05-20").add(5, "days").toDate(),
  },
]
