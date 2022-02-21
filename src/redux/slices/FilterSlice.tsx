import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface Filter {
  search: string,
  status: 'all'| 'complete' | 'uncomplete'
}
 const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
      search: '',
      status: 'all',
    },
    reducers: {
      searchFilterChange: (state, action: PayloadAction<string>) => {
        state.search = action.payload
        },
      statusFilterChange: (state, action: PayloadAction<string>) => {
        state.status =  action.payload   
      }
    }
})

export default filtersSlice