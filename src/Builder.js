import React from 'react'
import Container from '@material-ui/core/Container'
import Bar from './Bar'
import { Router } from '@reach/router'
import Landing from './Landing'
import NewCharacter from './NewCharacter'

const Builder = () => (
  <>
    <Bar />
    <Container maxWidth="lg">
      <Router>
        <Landing path="/" />
        <NewCharacter path="/new-character" />
      </Router>
    </Container>
  </>
)
export default Builder
