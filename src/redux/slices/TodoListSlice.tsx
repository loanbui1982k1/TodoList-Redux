import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Todo {
  id: number,
  name: string,
  complete: boolean
}


const todoListSlice = createSlice({
  name: 'todoList',
  initialState: [
    { id: 1, name: 'Học react', complete: false },
    { id: 2, name: 'Học javascript', complete: false },
    { id: 3, name: 'Học redux', complete: false }
  ],
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload)
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const state1: Todo[] = state.filter(({ id }) => id !== action.payload)
      return state1
    },
    changeStatus: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((todo)=> todo.id === action.payload)
      state[index].complete = !state[index].complete
    }
  }
})

export default todoListSlice