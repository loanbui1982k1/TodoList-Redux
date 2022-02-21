import {createSlice} from '@reduxjs/toolkit'

 const todoListSlice = createSlice({
    name: 'todoList',
    initialState: [
        {id: 1, name: 'Học react', complete: false},
        {id: 2, name: 'Học javascript', complete: false},
        {id: 2, name: 'Học redux', complete: false}
    ],
    reducers: {
      addTodo: (state,action) => {
        state.push(action.payload)
        },
      deleteTodo: (state, action) => {
          let res = state.indexOf(action.payload.id)
          state.splice(res,1)
      }
    }
})

export default todoListSlice