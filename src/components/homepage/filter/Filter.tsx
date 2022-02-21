import React,{useState} from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useDispatch, useSelector } from 'react-redux';
import filterSlice from 'redux/slices/FilterSlice'

export default function Filter() {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  
  return (
    <div>
      <Paper
        component="form" elevation={4}
        sx={{ p: '2px 4px', m: '20px', display: 'flex', alignItems: 'center', width: '80vw', maxWidth: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          value = {search}
          onChange = {(e)=>setSearch(e.target.value)}
        />
        <IconButton sx={{ p: '10px' }} aria-label="search">
          <SearchIcon onClick = {()=> dispatch(filterSlice.actions.searchFilterChange(search))}/>
        </IconButton>
      </Paper>
      <RadioGroup
        row
        aria-labelledby="demo-form-control-label-placement"
        name="position"
        defaultValue="all"
        onChange={(event: React.ChangeEvent<HTMLInputElement>, value: string) => dispatch(filterSlice.actions.statusFilterChange(value))}
      >
        <FormControlLabel
          value="all"
          control={<Radio />}
          label="Tất cả"
          labelPlacement="start"
        />
        <FormControlLabel
          value="complete"
          control={<Radio />}
          label="Hoàn thành"
          labelPlacement="start"
        />
        <FormControlLabel
          value="uncomplete"
          control={<Radio />}
          label="Chưa hoàn thành"
          labelPlacement="start"
        />

      </RadioGroup>

    </div>
  )
}
