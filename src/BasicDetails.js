import React from 'react'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

const BasicDetails = () => {
  return (
    <form autoComplete="off" noValidate>
      <FormControl>
        <TextField id="alias" label="Name/Alias" margin="normal" />
        <Select
          autoWidth
          inputProps={{
            id: 'metatype'
          }}
        >
          <MenuItem>Human</MenuItem>
          <MenuItem>Elf</MenuItem>
          <MenuItem>Dwarf</MenuItem>
          <MenuItem>Ork</MenuItem>
          <MenuItem>Troll</MenuItem>
        </Select>
      </FormControl>
    </form>
  )
}
export default BasicDetails
