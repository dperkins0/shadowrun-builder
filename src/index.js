import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import Builder from './Builder'
import { ThemeProvider } from '@material-ui/styles'
import createTheme from '@material-ui/core/styles/createMuiTheme'
import colours from './colours'

const theme = createTheme({
  palette: {
    primary: {
      main: colours.primary,
      dark: colours.primary,
      light: colours.primary
    },
    secondary: {
      main: colours.secondary,
      dark: colours.secondary,
      light: colours.secondary
    }
  }
})

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Builder />
      </ThemeProvider>
    </>
  )
}

const mountNode = document.getElementById('root')

ReactDOM.render(<App />, mountNode)
