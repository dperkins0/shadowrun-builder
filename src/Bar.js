import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Bar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>Shadowrun Builder</Typography>
      </Toolbar>
    </AppBar>
  )
}
export default Bar
