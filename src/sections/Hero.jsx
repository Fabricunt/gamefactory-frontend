import * as React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Controller, Navigation } from 'swiper'
import HeroWrapper from '../components/Hero/HeroWrapper'
import HeroBackground from '../components/Hero/HeroBackground'
import HeroBackgroundImage from '../components/Hero/HeroBackgroundImage'
import HeroContent from '../components/Hero/HeroContent'
import HeroContentHeading from '../components/Hero/HeroContentHeading'
import HeroTitle from '../components/Hero/HeroTitle'

import HeroControls from '../components/Hero/HeroControls'
import HeroArrow from '../components/Hero/HeroArrow'
import HeroThumbnails from '../components/Hero/HeroThumbnails'
import HeroThumbnailsImage from '../components/Hero/HeroThumbnailsImage'
import HeroContainer from '../components/Hero/HeroContainer'
import 'swiper/css/bundle'

export default function Hero({ images: gallery, sectionId, sectionTitle }) {
  const { images, tabTitle } = gallery
  const [firstSwiper, setFirstSwiper] = React.useState(null)
  const [secondSwiper, setSecondSwiper] = React.useState(null)

  return (
    <HeroWrapper id={sectionId}>
      {images.length > 1 ? (
        <>
          <HeroArrow variant="mobile" className="hero-control-prev" align="left" />
          <HeroArrow variant="mobile" className="hero-control-next" />
        </>
      ) : null}
      <HeroContainer>
        <HeroBackground>
          <Swiper
            loop={true}
            modules={[Controller, Navigation]}
            loopAdditionalSlides={5}
            loopPreventsSlide={true}
            loopedSlides={5}
            onSwiper={setFirstSwiper}
            allowTouchMove={false}
            controller={{ control: secondSwiper }}
            navigation={{
              nextEl: '.hero-control-next',
              prevEl: '.hero-control-prev',
            }}
            className="hero-background"
            slidesPerView={1}
          >
            {images.map((image) => {
              return (
                <SwiperSlide key={image.id}>
                  <HeroBackgroundImage loading="eager" fadein="false" {...image} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </HeroBackground>
        {images.length > 1 ? (
          <HeroContent>
            <HeroContentHeading>
              <HeroTitle>{sectionTitle || tabTitle}</HeroTitle>
              <HeroControls>
                <HeroArrow className="hero-control-prev" align="left" />
                <HeroArrow className="hero-control-next" />
              </HeroControls>
            </HeroContentHeading>
            <HeroThumbnails>
              <Swiper
                loop={true}
                modules={[Controller]}
                onSwiper={setSecondSwiper}
                loopAdditionalSlides={5}
                loopPreventsSlide={true}
                loopedSlides={5}
                controller={{ control: firstSwiper }}
                className="hero-thumbnails"
                slidesPerView={5}
                centeredSlides={true}
              >
                {images.map((image) => (
                  <SwiperSlide key={image.id}>
                    <HeroThumbnailsImage
                      fadein="false"
                      loading="eager"
                      className="hero-thumbnail-image"
                      {...image}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </HeroThumbnails>
          </HeroContent>
        ) : null}
      </HeroContainer>
    </HeroWrapper>
  )
}
