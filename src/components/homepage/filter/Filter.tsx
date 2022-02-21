import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Filter() {
  return (
      <div>

    <Paper
    component="form" elevation={4}
    sx={{ p: '2px 4px', m: '20px', display: 'flex', alignItems: 'center', width: '80vw', maxWidth: 400 }}
  >
    <InputBase
      sx={{ ml: 1, flex: 1 }}
    //   inputProps={{ 'aria-label': 'search google maps' }}
    />
    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
      <SearchIcon />
    </IconButton>
  </Paper>
      <RadioGroup
        row
        aria-labelledby="demo-form-control-label-placement"
        name="position"
        defaultValue="all"
        onChange={(event: React.ChangeEvent<HTMLInputElement>, value: string) => console.log(value)}
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
