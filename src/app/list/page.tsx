"use client"

import Filter from "./filter"
import List from "./list"

export default function Page() {
  return (
    <div>
      <Filter />
      <div className="mt-8">
        <List />
      </div>
    </div>
  )
}
