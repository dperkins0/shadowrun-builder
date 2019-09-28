import React from 'react'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import styled from '@emotion/styled'
import StatsBar from './StatsBar'
import BasicDetails from './BasicDetails'
import Priorities from './Priorities'

const Step = styled.div({
  margin: '24px 0px'
})

const StepsContainer = styled.div({
  display: 'flex',
  flexDirection: 'column'
})

const NewCharacterContainer = styled.div({
  position: 'relative'
})

const NewCharacter = () => {
  return (
    <NewCharacterContainer>
      <StatsBar />
      <StepsContainer>
        <Step>
          <Typography variant="h4" color="primary">
            Basic details
          </Typography>
          <BasicDetails />
        </Step>
        <Divider />
        <Step>
          <Typography variant="h4" color="primary">
            Select Priorities
          </Typography>
          <Priorities />
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
    </NewCharacterContainer>
  )
}
export default NewCharacter
