import * as React from 'react'
import ServicesItem from '../components/Services/ServicesItem'
import ServicesStack from '../components/Services/ServicesStack'
import SectionWrapper from '../components/SectionWrapper'
import Container from '../components/Container'
import Title from '../components/Title'

const Services = ({ sectionId, sectionTitle, services }) => {
  return (
    <SectionWrapper id={sectionId} color="gray">
      <Container>
        <Title>{sectionTitle}</Title>
        <ServicesStack>
          {services && services?.map((el) => <ServicesItem key={el.id} {...el} />)}
        </ServicesStack>
      </Container>
    </SectionWrapper>
  )
}

export default Services
