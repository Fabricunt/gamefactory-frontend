import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import SectionWrapper from '../components/SectionWrapper'
import Container from '../components/Container'
import Title from '../components/Title'
import AboutTimeWrapper from '../components/About/AboutTimeWrapper'
import AboutTimeLine from '../components/About/AboutTimeLine'
import AboutItemWrapper from '../components/About/AboutItemWrapper'
import AboutItemMarker from '../components/About/AboutItemMarker'
import AboutItemContent from '../components/About/AboutItemContent'
import AboutItemKey from '../components/About/AboutItemKey'
import AboutItemValue from '../components/About/AboutItemValue'

const swiperConfig = {
  modules: [Pagination, Autoplay],
  pagination: { clickable: true },
  className: 'about-slider',
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 1,
  autoplay: {
    delay: 10000,
    pauseOnMouseEnter: true,
    waitForTransition: true,
    disableOnInteraction: false,
  },
  breakpoints: {
    568: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 5,
    },
  },
}

const About = ({ abouts, sectionId, sectionTitle }) => {
  return (
    <SectionWrapper id={sectionId} color="gray">
      <Container>
        <Title>{sectionTitle}</Title>
        <AboutTimeWrapper>
          <AboutTimeLine />
          <Swiper {...swiperConfig}>
            {abouts.map(({ id, text, title }) => {
              return (
                <SwiperSlide key={id}>
                  <AboutItemWrapper>
                    <AboutItemMarker className="about-item__indicator"></AboutItemMarker>
                    <AboutItemContent className="about-item__inner">
                      {title && <AboutItemKey>{title}</AboutItemKey>}
                      {text && <AboutItemValue>{text}</AboutItemValue>}
                    </AboutItemContent>
                  </AboutItemWrapper>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </AboutTimeWrapper>
      </Container>
    </SectionWrapper>
  )
}

export default About
