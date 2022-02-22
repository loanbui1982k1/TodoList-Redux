import {useState} from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import todoListSlice from 'redux/slices/TodoListSlice';
import {selectTodos} from 'redux/store'

interface Todo {
  id: number,
  name: string,
  complete: boolean
}

export default function TodoList() {
  const todoList = useSelector(selectTodos)
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()
  const addTodo = () => {
    dispatch(todoListSlice.actions.addTodo({
      id: Math.floor(Math.random()*1001) + Math.floor(Math.random()*1001),
      name: todo,
      complete: false
    }))
    setTodo('')
  }

  const deleteTodo = (id: number) => {
    dispatch(todoListSlice.actions.deleteTodo(id))
  }
  return (
    <div >
      <List sx={{ maxHeight: '35vh', overflow: 'auto' }} >
        {todoList.map((value: Todo, index: number) => {
          return (
            <ListItem
              secondaryAction={
                
                <IconButton edge="end" aria-label="delete" >
                  <DeleteIcon  onClick ={() => deleteTodo(value.id)} />
                </IconButton>
              }
            >
              <ListItem sx = {{width: '60px'}}>
              <Checkbox checked = {value.complete} onClick = {() => dispatch(todoListSlice.actions.changeStatus(value.id))}/>
              </ListItem>
              <ListItemText
                primary={value.name}
              // secondary={secondary ? 'Secondary text' : null}
              />
            </ListItem>
          )
        }
        )}
      </List>
      <div style = {{ position: 'absolute', bottom: '10vh' }}>

       <TextField sx = {{ml: '10px', mr: '20px', width: '60vw', maxWidth : '350px'}} value = {todo} onChange = {(e)=>setTodo(e.target.value)} id="fullWidth" />
        <Button variant="contained" sx = {{top: '5px'}} disabled = {todo === ''} onClick = {addTodo} >Thêm</Button>
      </div>
    </div>
  )
}
