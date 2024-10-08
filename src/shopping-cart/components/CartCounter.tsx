'use client'

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, subtractOne } from "@/store/counter/counterSlice";
interface Props {
  value?: number
}

// Generated by https://quicktype.io

export interface CounterResponse {
  method: string;
  count:  number;
}


const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch('/api/counter')
  const res = await data.json()

  return res
}

export const CartCounter = ({ value = 0 }: Props) => {
  const count = useAppSelector(state => state.counter.count)
  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(initCounterState(value))
  // }, [dispatch, value]);

  useEffect(() => {
    getApiCounter()
      .then(({ count }) => dispatch(initCounterState(count)))
  }, [dispatch]);

  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex gap-2">
        <button 
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]"
          onClick={() => dispatch(subtractOne())}
        >
          -1
        </button>

        <button 
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]"
          onClick={() => dispatch(addOne())}
        >
          +1
        </button>
      </div>
    </>
  )
}