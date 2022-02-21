import {configureStore} from '@reduxjs/toolkit'
import filtersReducer from './slices/FilterSlice'
import todoListReducer from './slices/TodoListSlice'


const store = configureStore({
    reducer: {
       filters: filtersReducer.reducer,
       todolist: todoListReducer.reducer
    }
})

export default store