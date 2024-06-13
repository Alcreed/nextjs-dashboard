import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 5
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: { // Acciones a llamar para cambiar el state
    addOne(state) {
      state.count++
    },

    subtractOne(state) {
      if (state.count === 0) return;

      state.count--
    },
      
    resetCount(state, action: PayloadAction<number>) {
      if (state.count < 0) state.count === 0;

      state.count = action.payload
    }
  }
});

export const { addOne, subtractOne, resetCount } = counterSlice.actions

export default counterSlice.reducer
