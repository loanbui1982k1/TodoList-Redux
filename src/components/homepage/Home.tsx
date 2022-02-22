import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Filter from './filter/Filter'
import TodoList from './todoList/TodoList'
import Header from '../header/Header'

export default function Home() {
  return (
    <div>
      <Header/>
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
    </div>

  )
}
