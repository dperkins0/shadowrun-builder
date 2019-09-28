import React from 'react'
import styled from '@emotion/styled'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const PrioritiesContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  flexWrap: 'wrap'
})

const PriorityContainer = styled(Card)({
  width: '150px',
  height: '150px',
  margin: '24px'
})

const PriorityCard = ({ children }) => {
  return (
    <PriorityContainer>
      <CardContent>{children}</CardContent>
    </PriorityContainer>
  )
}

const Priorities = () => {
  return (
    <PrioritiesContainer>
      <PriorityCard>Metatype</PriorityCard>
      <PriorityCard>Attributes</PriorityCard>
      <PriorityCard>Skills</PriorityCard>
      <PriorityCard>Magic/Resonance</PriorityCard>
      <PriorityCard>Resources</PriorityCard>
    </PrioritiesContainer>
  )
}
export default Priorities
