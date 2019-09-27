import React from 'react'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import styled from '@emotion/styled'

const Step = styled.div({
  margin: '24px 0px'
})

const StepsContainer = styled.div({
  display: 'flex',
  flexDirection: 'column'
})

const CardContainer = styled.div({
  position: 'sticky',
  margin: '24px 0px',
  top: '24px'
})

const NewCharacterContainer = styled.div({
  position: 'relative'
})

const NewCharacter = () => {
  return (
    <NewCharacterContainer>
      <CardContainer>
        <Card style={{ width: '100%' }}>
          <CardContent>STATS CURRENCY KARMA ETC</CardContent>
        </Card>
      </CardContainer>
      <StepsContainer>
        <Step>
          <Typography variant="h4" color="primary">
            Select Priorities
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
        <div style={{ height: '4000px' }}>hi</div>
      </StepsContainer>
    </NewCharacterContainer>
  )
}
export default NewCharacter
