import * as React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import TeamSliderItem from '../components/Team/TeamSliderItem'
import SectionWrapper from '../components/SectionWrapper'
import Title from '../components/Title'
import TeamContainer from '../components/Team/TeamContainer'
import 'swiper/css/bundle'

const swiperConfig = {
  modules: [Navigation, Pagination],
  pagination: { clickable: true },
  className: 'team-slider',
  navigation: true,
  loop: true,
  spaceBetween: 0,
  slidesPerView: 1,
  lazy: true,
}

const Team = ({ people, sectionId, sectionTitle }) => {
  return (
    <SectionWrapper>
      <TeamContainer id={sectionId} disableGutters={true}>
        <Title>{sectionTitle}</Title>
        <Swiper {...swiperConfig}>
          {people &&
            people?.map((person) => (
              <SwiperSlide key={person.id}>
                <TeamSliderItem {...person} />
              </SwiperSlide>
            ))}
        </Swiper>
      </TeamContainer>
    </SectionWrapper>
  )
}

export default Team
