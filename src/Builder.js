import React from 'react'
import Container from '@material-ui/core/Container'
import Bar from './Bar'
import { Router } from '@reach/router'
import Landing from './Landing'

const Builder = () => (
  <>
    <Bar />
    <Container maxWidth="lg">
      <Router>
        <Landing path="/" />
      </Router>
    </Container>
  </>
)
export default Builder
