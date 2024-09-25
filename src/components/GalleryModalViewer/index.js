import * as React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, Navigation, Zoom, Autoplay, FreeMode } from 'swiper'
import { ScaleUpIcon, ScaleDownIcon, CloseIcon, PlayIcon, PauseIcon } from '../../icons'
import GalleryModalViewerButtonWrapper from './GalleryModalViewerButtonWrapper'
import GalleryModalViewerControls from './GalleryModalViewerControls'
import GalleryModalViewerWrapper from './GalleryModalViewerWrapper'
import GalleryModalViewerButtonIcon from './GalleryModalViewerButtonIcon'
import GalleryModalViewerImage from './GalleryModalViewerImage'
import GalleryModalViewerImageThumb from './GalleryModalViewerImageThumb'
import useMedia from '../../hooks/use-media'

export default function GalleryModalViewer({
  isOpen,
  photos,
  useModels,
  currImg,
  closeHandler,
}) {
  const swiperRef = React.useRef(null)
  const [autoplay, setAutoplay] = React.useState(false)
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null)
  const [zoomed, setZoomed] = React.useState(false)
  const isLargerThan768 = useMedia(['(min-width: 768px)'], [true], false)
  const onKeyDown = (e) => (e.key === 'Escape' && isOpen) && modalCloseHandler()

  React.useEffect(() => {
    if (isOpen) document.addEventListener('keydown', onKeyDown)
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(currImg + 1, 1, true)
    }
    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, currImg])

  React.useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.swiper &&
      swiperRef.current.swiper.autoplay.running &&
      typeof autoplay === 'null'
    ) {
      swiperRef.current.swiper.autoplay.stop()
      setAutoplay(false)
    }

  }, [swiperRef.current?.swiper.autoplay.running])

  React.useEffect(() => {
    if(!useModels) setAutoplay(false)
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.allowTouchMove = !useModels
      swiperRef.current.swiper.autoplay.stop()
      swiperRef.current.swiper.zoom.out()
      document
        .getElementById('photo-slider')
        .getElementsByClassName('swiper-button-prev')[0]
        .addEventListener('click', () => {
          changeSlideHandler()
        })
      document
        .getElementById('photo-slider')
        .getElementsByClassName('swiper-button-next')[0]
        .addEventListener('click', () => {
          changeSlideHandler()
        })
    }

    setZoomed(false)
  }, [isOpen])

  const autoplayHandler = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (swiperRef.current.swiper.autoplay.running) {
        swiperRef.current.swiper.autoplay.stop()
      } else {
        swiperRef.current.swiper.autoplay.start()
      }
      swiperRef.current.swiper.zoom.out()
    }
    setZoomed(false)
  }

  const modalCloseHandler = () => {
    if(!useModels) setAutoplay(false)

    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop()
      swiperRef.current.swiper.zoom.out()
    }
    document.removeEventListener('keydown', onKeyDown)
    document
      .getElementById('photo-slider')
      .getElementsByClassName('swiper-button-prev')[0]
      .removeEventListener('click', () => {
        changeSlideHandler()
      })
    document
      .getElementById('photo-slider')
      .getElementsByClassName('swiper-button-next')[0]
      .removeEventListener('click', () => {
        changeSlideHandler()
      })
    setZoomed(false)
    closeHandler(false)
  }

  const changeSlideHandler = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.zoom.out()
      swiperRef.current.swiper.autoplay.stop()
    }
    setZoomed(false)
    if(!useModels) setAutoplay(false)
  }

  const zoomToggleHandler = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.zoom.toggle()
      swiperRef.current.swiper.autoplay.stop()
    }
    setZoomed(!zoomed)
    setAutoplay(false)
  }

  const animationModelMove = (autoplay) => {
    const swiper = swiperRef.current.swiper
    swiper.slides.forEach(slide => {
      const model = slide.childNodes[0]
      model.toggleAttribute('autoplay')
      autoplay ? model.play() : model.pause()
    })
  }

  return (
    <>
      <GalleryModalViewerWrapper isOpen={isOpen}>
        <GalleryModalViewerControls>
          <GalleryModalViewerButtonWrapper
            onClick={() => {
              setAutoplay(!autoplay)
              !useModels ? autoplayHandler() : animationModelMove(autoplay)
              }
            }
          >
            <GalleryModalViewerButtonIcon showIcon={!useModels ? autoplay : !autoplay}>
              <PauseIcon />
            </GalleryModalViewerButtonIcon>
            <GalleryModalViewerButtonIcon showIcon={!useModels ? !autoplay : autoplay}>
              <PlayIcon />
            </GalleryModalViewerButtonIcon>
          </GalleryModalViewerButtonWrapper>

          {!useModels && (
            <GalleryModalViewerButtonWrapper onClick={zoomToggleHandler}>
              <GalleryModalViewerButtonIcon showIcon={!zoomed}>
                <ScaleUpIcon />
              </GalleryModalViewerButtonIcon>
              <GalleryModalViewerButtonIcon showIcon={zoomed}>
                <ScaleDownIcon />
              </GalleryModalViewerButtonIcon>
            </GalleryModalViewerButtonWrapper>
          )}

          <GalleryModalViewerButtonWrapper onClick={modalCloseHandler}>
            <GalleryModalViewerButtonIcon showIcon={true}>
              <CloseIcon />
            </GalleryModalViewerButtonIcon>
          </GalleryModalViewerButtonWrapper>
        </GalleryModalViewerControls>

        <Swiper
          className="photo-slider"
          id="photo-slider"
          style={{ '--swiper-navigation-color': '#FB792B' }}
          spaceBetween={0}
          slidesPerView={1}
          centeredSlides={true}
          navigation={true}
          loop={true}
          modules={[Thumbs, Navigation, Zoom, Autoplay]}
          thumbs={{ swiper: thumbsSwiper }}
          ref={swiperRef}
          zoom={{toggle: isLargerThan768}}
          onSliderMove={() => {
            if (autoplay) {
              setAutoplay(false)
              if (swiperRef.current && swiperRef.current.swiper) {
                swiperRef.current.swiper.autoplay.stop()
              }
            }
            if (zoomed) {
              setZoomed(false)
              swiperRef.current.swiper.zoom.out()
            }
          }}
          speed={600}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: false,
            waitForTransition: false,
            disableOnInteraction: false,
          }}
        >
          {photos?.map((img, index) => {
            return (
              <SwiperSlide key={img.id}>
                {useModels ? (
                  typeof window !== 'undefined' ? (
                    <model-viewer
                      id={index}
                      class='model'
                      autoplay
                      alt={img.altText}
                      src={img.modelFile.localFile.publicURL}
                      poster={img?.previewImage?.localFile?.publicURL}
                      shadow-intensity="1"
                      camera-controls
                      touch-action="pan-y"
                    ></model-viewer>
                  ) : null
                ) : (
                  <div className="swiper-zoom-container">
                    <GalleryModalViewerImage
                      draggable={false}
                      className="swiper-zoom-target"
                      {...img}
                      objectFit="contain"
                    />
                  </div>
                )}
              </SwiperSlide>
            )
          })}
        </Swiper>

        <Swiper
          className="thumbs-slider"
          slidesPerView={'auto'}
          spaceBetween={10}
          centerInsufficientSlides={true}
          modules={[Thumbs, FreeMode]}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
          freeMode
          watchslidesvisibility="true"
        >
          {photos?.map((img) => {
            return (
              <SwiperSlide key={img.id}>
                {useModels ? (
                  <model-viewer
                    alt={img.altText}
                    src={img.modelFile.localFile.publicURL}
                    poster={img?.previewImage?.localFile?.publicURL}
                    shadow-intensity="1"
                  ></model-viewer>
                ) : (
                  <GalleryModalViewerImageThumb {...img} />
                )}
              </SwiperSlide>
            )
          })}
        </Swiper>
      </GalleryModalViewerWrapper>

      {isOpen && (<style dangerouslySetInnerHTML={{__html: `body {overflow: hidden}`,}}/>)}
    </>
  )
}
