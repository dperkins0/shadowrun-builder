import React from 'react'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import styled from '@emotion/styled'

const Step = styled.div({
  margin: '24px 0px'
})

const StepsContainer = styled.div({
  display: 'flex',
  flexDirection: 'column'
})

const NewCharacter = () => {
  return (
    <StepsContainer>
      <Step>
        <Typography variant="h4" color="primary">
          Choose Priorities
        </Typography>
      </Step>
      <Divider />
      <Step>
        <Typography variant="h4" color="primary">
          Select Qualities
        </Typography>
      </Step>
      <Divider />
      <Step>
        <Typography variant="h4" color="primary">
          Spend Karma
        </Typography>
      </Step>
      <Divider />
      <Step>
        <Typography variant="h4" color="primary">
          Buy Gear
        </Typography>
      </Step>
    </StepsContainer>
  )
}
export default NewCharacter
