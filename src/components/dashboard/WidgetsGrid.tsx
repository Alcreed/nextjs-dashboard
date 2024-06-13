'use client'

import { IoCartOutline } from "react-icons/io5"
import { SimpleWidget } from "./SimpleWidget"
import { useAppSelector } from "@/store"

export const WidgetsGrid = () => {
  const count = useAppSelector(state => state.counter.count)
  
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <SimpleWidget 
        title={count}
        subTitle="Productos agregados"
        label="Contador"
        icon={<IoCartOutline size={70} className="text-blue-600" />}
        href="/dashboard/counter"
      />
    </div>
  )
}