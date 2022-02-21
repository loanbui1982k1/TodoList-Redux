import {configureStore} from '@reduxjs/toolkit'
import filtersReducer from './slices/FilterSlice'
import todoListReducer from './slices/TodoListSlice'


const store = configureStore({
    reducer: {
       filters: filtersReducer.reducer,
       todolist: todoListReducer.reducer
    }
})

type RootSate = ReturnType<typeof store.getState>
export const selectTodos = (state: RootSate) => {
    const todoList = state.todolist.filter((todo) => {
        if (state.filters.status === 'complete') return todo.name.toLocaleLowerCase().includes(state.filters.search.toLocaleLowerCase()) && todo.complete
        else if (state.filters.status === 'uncomplete') return todo.name.toLocaleLowerCase().includes(state.filters.search.toLocaleLowerCase()) && !todo.complete
        else return todo.name.toLocaleLowerCase().includes(state.filters.search.toLocaleLowerCase())
    })
    return todoList
}
export default store