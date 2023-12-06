import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Autoplay } from 'swiper'
import styled from '@emotion/styled'
import TechnologiesSliderItemWrapper from '../components/Technologies/TechnologiesSliderItemWrapper'
import TechnologiesSliderItemImage from '../components/Technologies/TechnologiesSliderItemImage'
import TechnologiesSliderItemTitle from '../components/Technologies/TechnologiesSliderItemTitle'
import SectionWrapper from '../components/SectionWrapper'
import Container from '../components/Container'
import Title from '../components/Title'
import useElementOnScreen from '../hooks/use-element-on-screen'
import 'swiper/css/bundle'

const TechSlider = styled(Swiper)`
  height: min-height;
  width: 100%;
  & > .swiper-wrapper {
    -webkit-transition-timing-function: linear !important;
    transition-timing-function: linear !important;
  }
`

const swiperConfig = {
  modules: [FreeMode, Autoplay],
  spaceBetween: 50,
  speed: 3000,
  centeredSlides: true,
  slidesPerView: 3,
  allowTouchMove: false,
  loop: true,
  autoplay: {
    delay: 1,
    pauseOnMouseEnter: true,
    waitForTransition: true,
    disableOnInteraction: false,
  },
  breakpoints: {
    568: {
      slidesPerView: 5,
      spaceBetween: 23,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 35,
    },
    1400: {
      slidesPerView: 7,
      spaceBetween: 49,
    },
  },
  freeMode: true,
}

const Technologies = ({ sectionId, sectionTitle, technologies }) => {
  const [rendered, setRendered] = React.useState(false)
  const [containerRef, isOnScreen] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  })
  React.useEffect(() => {
    if (isOnScreen && !rendered) {
      setRendered(true)
    }
  }, [isOnScreen])
  return (
    <SectionWrapper id={sectionId} ref={containerRef}>
      <Container disableGutters={true}>
        <Title>{sectionTitle}</Title>
        {rendered && (
          <TechSlider {...swiperConfig}>
            {technologies &&
              technologies.map(({ title, url, image, id }) => (
                <SwiperSlide key={id}>
                  <TechnologiesSliderItemWrapper to={url}>
                    <TechnologiesSliderItemImage objectFit="scale-down" {...image} />
                    <TechnologiesSliderItemTitle>{title}</TechnologiesSliderItemTitle>
                  </TechnologiesSliderItemWrapper>
                </SwiperSlide>
              ))}
          </TechSlider>
        )}
      </Container>
    </SectionWrapper>
  )
}

export default Technologies
