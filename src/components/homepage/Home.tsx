import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Filter from './filter/Filter'
import TodoList from './todoList/TodoList'

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          mt: 3,
          width: '90vw',
          maxWidth: '500px',
          height: '80vh',
        },
        justifyContent: 'center'
      }}
    >
      <Paper elevation={3}>
        <Filter/>
        <TodoList/>
      </Paper> 
    </Box>
  )
}
