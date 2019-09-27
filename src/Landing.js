import React from 'react'
import styled from '@emotion/styled'
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from '@reach/router'

const LandingContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '32px'
})

const ComposedLink = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} {...props} />
))

const Landing = () => {
  return (
    <LandingContainer>
      <Link variant="h5" component={ComposedLink} to="/new-character">
        Create a new character
      </Link>
    </LandingContainer>
  )
}
export default Landing
