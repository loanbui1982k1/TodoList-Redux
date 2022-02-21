import {useState} from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox';
import { useDispatch } from 'react-redux';
import todoListSlice from 'redux/slices/TodoListSlice';

export default function TodoList() {
  const list = ['học javascript', 'học react', 'học redux']
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()
  console.log(todo, list)
  const addTodo = () => {
    dispatch(todoListSlice.actions.addTodo({
      id: 5,
      name: todo,
      complete: false
    }))
  }
  return (
    <div >
      <List sx={{ maxHeight: '40vh', overflow: 'auto' }} >
        {list.map((value: string, index: number) => {
          return (
            <ListItem
              secondaryAction={
                
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItem sx = {{width: '60px'}}>
              <Checkbox/>
              </ListItem>
              <ListItemText
                primary={value}
              // secondary={secondary ? 'Secondary text' : null}
              />
            </ListItem>
          )
        }
        )}
      </List>
      <div style = {{ position: 'absolute', bottom: '20vh' }}>

       <TextField sx = {{ml: '10px', mr: '20px', width: '60vw', maxWidth : '350px'}} onChange = {(e)=>setTodo(e.target.value)} id="fullWidth" />
        <Button variant="contained" sx = {{top: '5px'}} onClick = {addTodo}>Thêm</Button>
      </div>
    </div>
  )
}
