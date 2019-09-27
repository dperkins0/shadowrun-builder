import React from 'react'
import styled from '@emotion/styled'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const CardContainer = styled.div({
  position: 'sticky',
  margin: '24px 0px',
  top: '24px'
})

const FlexContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
})

const Stat = styled.div({})

const StatsBar = () => {
  return (
    <CardContainer>
      <Card style={{ width: '100%' }}>
        <FlexContent>
          <Stat>attributes</Stat>
          <Stat>currency</Stat>
          <Stat>another thing</Stat>
        </FlexContent>
      </Card>
    </CardContainer>
  )
}
export default StatsBar
