import * as React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import GalleryModalViewer from '../components/GalleryModalViewer'
import SectionWrapper from '../components/SectionWrapper'
import Container from '../components/Container'
import GalleryTabsStack from '../components/Gallery/GalleryTabsStack'
import GalleryTabsStackItem from '../components/Gallery/GalleryTabsStackItem'
import GalleryTabsStackItemTitle from '../components/Gallery/GalleryTabsStackItemTitle'
import GalleryPanelsStack from '../components/Gallery/GalleryPanelsStack'
import GalleryPanelsStackItem from '../components/Gallery/GalleryPanelsStackItem'
import GalleryPanelsStackItemImage from '../components/Gallery/GalleryPanelsStackItemImage'
import GalleryBottom from '../components/Gallery/GalleryBottom'
import GalleryContainer from '../components/Gallery/GalleryContainer'
import Button from '../components/Button'
import useMedia from '../hooks/use-media'
import useElementOnScreen from '../hooks/use-element-on-screen'
import GalleryBackButton from '../components/Gallery/GalleryBackButton'

const Gallery = ({
  url,
  galleries,
  buttonUrl,
  buttonText,
  sectionId = '#gallery',
  showCount = 10,
  showBackButton,
  backButtonUrl,
}) => {
  const [rendered, setRendered] = React.useState(false)
  const [containerRef, isOnScreen] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  })
  const gutter = useMedia(
    ['(max-width: 768px)'],

    ['10px'],
    '20px',
  )
  const [currImg, setCurrImg] = React.useState(0)
  const [isOpen, setIsOpen] = React.useState(false)

  const modalOpenHandler = () => {
    setIsOpen(true)
  }

  const [activeGallery, setActiveGallery] = React.useState(galleries[0].id)
  const [activePages, setActivePages] = React.useState({
    [activeGallery]: 1,
  })

  const handlerSetActiveGallery = (id) => {
    setActiveGallery(id)
    if (!activePages[id]) {
      setActivePages({ ...activePages, [id]: 1 })
    }
  }

  const handlerSetActivePages = (id) => {
    setActivePages({ ...activePages, [id]: activePages[id] + 1 })
  }

  React.useEffect(() => {
    // if (isOnScreen && !rendered)
    if (!rendered) {
      setRendered(true)
    }
  }, [isOnScreen])

  React.useEffect(() => {
    if (typeof window !== undefined) {
      const script = document.createElement('script')
      script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js'
      script.type = 'module'
      document.getElementsByTagName('head')[0].appendChild(script)
    }
  }, [])

  return (
    <SectionWrapper ref={containerRef} id={sectionId} color="gray">
      <GalleryContainer disableGutters>
        <Container>
          <GalleryTabsStack centered={galleries?.length === 1}>
            {galleries.map((el) => (
              <GalleryTabsStackItem
                key={el.id}
                active={el.id === activeGallery}
                disabled={galleries?.length === 1}
                onClick={() => {
                  handlerSetActiveGallery(el.id)
                }}
              >
                <GalleryTabsStackItemTitle>{el.tabTitle}</GalleryTabsStackItemTitle>
              </GalleryTabsStackItem>
            ))}
          </GalleryTabsStack>
        </Container>
        <Container>
          <div style={{ width: '100%', display: 'grid', gap: '20px' }}>
            {showBackButton && <GalleryBackButton to={backButtonUrl}>{`< Back`}</GalleryBackButton>}
            <GalleryPanelsStack>
              {galleries.map((el) => (
                <GalleryPanelsStackItem active={el.id === activeGallery} key={el.id}>
                  <ResponsiveMasonry columnsCountBreakPoints={el.useModels ? ({ 320: 2, 768: 6}) : ({ 320: 2, 768: 3})}>
                    <Masonry gutter={gutter}>
                      {el?.useModels
                        ? el.models
                            .map((image, i) => {
                              return (
                                <div
                                  key={image.id}
                                  onClick={() => {
                                    setCurrImg(i)
                                    modalOpenHandler()
                                  }}
                                >
                                  {image.previewImage ? (
                                    <GalleryPanelsStackItemImage {...image.previewImage} />
                                  ) : typeof window !== 'undefined' ? (
                                    <model-viewer
                                      altText={image.altText}
                                      src={image.modelFile.localFile.publicURL}
                                      poster={image?.previewImage?.localFile?.publicURL}
                                      shadow-intensity="1"
                                      style={{aspectRatio: '1/1', cursor: 'pointer'}}
                                    ></model-viewer>
                                  ) : null}
                                </div>
                              )
                            })
                        : el.images
                            .map((image, i) => {
                              return (
                                <div
                                  key={image.id}
                                  onClick={() => {
                                    setCurrImg(i)
                                    modalOpenHandler()
                                  }}
                                >
                                  <GalleryPanelsStackItemImage {...image} />
                                </div>
                              )
                            })}
                    </Masonry>
                  </ResponsiveMasonry>
                </GalleryPanelsStackItem>
              ))}
            </GalleryPanelsStack>
          </div>
        </Container>
        {((!buttonUrl && galleries?.length === 1
          ? false
          : activePages[activeGallery] * showCount <=
            galleries.find((el) => el.id === activeGallery).images?.length) || buttonUrl) && (
          <GalleryBottom>
            <Button
              handler={() => handlerSetActivePages(activeGallery)}
              to={url !== '/' ? url + buttonUrl : buttonUrl}
            >
              {buttonText}
            </Button>
          </GalleryBottom>
        )}
        {rendered && (
          <GalleryModalViewer
            isOpen={isOpen}
            currImg={currImg}
            useModels={galleries.find((el) => el.id === activeGallery).useModels}
            photos={
              galleries.find((el) => el.id === activeGallery).useModels
                ? galleries.find((el) => el.id === activeGallery).models
                : galleries.find((el) => el.id === activeGallery).images
            }
            closeHandler={setIsOpen}
            showCounter={activePages[activeGallery] * showCount}
          />
        )}
      </GalleryContainer>
    </SectionWrapper>
  )
}

export default Gallery
