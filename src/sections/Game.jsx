import * as React from 'react'

import SocialLink from '../components/SocialLink/SocialLink'
import Masonry from 'react-responsive-masonry'
import GalleryModalViewer from '../components/GalleryModalViewer'

import Container from '../components/Container'
import SectionWrapper from '../components/SectionWrapper'
import GameWrapper from '../components/Game/GameWrapper'
import GameGallery from '../components/Game/GameGallery'
import GameContent from 'components/Game/GameContent'
import GameContentWrapper from '../components/Game/GameContentWrapper'
import GameContentTitle from '../components/Game/GameContentTitle'
import GameContentDescription from '../components/Game/GameContentDescription'
import GameContentList from '../components/Game/GameContentList'
import GameContentListItem from '../components/Game/GameContentListItem'
import GameContentListItemKey from '../components/Game/GameContentListItemKey'
import GameContentListItemValue from '../components/Game/GameContentListItemValue'

import GameContentSocialStack from '../components/Game/GameContentSocialStack'
import Image from '../components/Image'

const Game = ({ description, gameInfo, images, socials, techKeyTitle, technologies, title }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [currImg, setCurrImg] = React.useState(0)
  return (
    <>
      <SectionWrapper>
        <Container>
          <GameWrapper>
            <GameGallery>
              <Masonry gutter="20px" columnsCount={2}>
                {images.map((image, idx) => {
                  return (
                    <div
                      key={image.id}
                      onClick={() => {
                        setCurrImg(idx)
                        setIsOpen(true)
                      }}
                    >
                      <Image
                        {...image}
                        layout="fullWidth"
                        style={{
                          width: '100%',
                          display: 'block',
                        }}
                      />
                    </div>
                  )
                })}
              </Masonry>
            </GameGallery>
            <GameContentWrapper>
              <GameContent>
                <GameContentTitle>{title}</GameContentTitle>
                <GameContentDescription>{description}</GameContentDescription>
                <GameContentList>
                  {gameInfo.map(({ key, value, id }) => (
                    <GameContentListItem key={id}>
                      <GameContentListItemKey>{key}</GameContentListItemKey>
                      <GameContentListItemValue>{value}</GameContentListItemValue>
                    </GameContentListItem>
                  ))}
                  <GameContentListItem>
                    <GameContentListItemKey>{techKeyTitle}</GameContentListItemKey>
                    {technologies.map(({ id, title }, idx) => (
                      <GameContentListItemValue key={id}>{`${title}${
                        idx + 1 === technologies.length ? '.' : ','
                      }`}</GameContentListItemValue>
                    ))}
                  </GameContentListItem>
                </GameContentList>
                <GameContentSocialStack>
                  {socials.map(({ icon, id, url }) => {
                    return (
                      <SocialLink
                        key={id}
                        variant="footer"
                        icon={icon}
                        url={url}
                        color="#222222"
                        ariaLabel={`Open - ${icon}`}
                        hovercolor="#FB9559"
                        needcircle='false'
                      />
                    )
                  })}
                </GameContentSocialStack>
              </GameContent>
            </GameContentWrapper>
          </GameWrapper>
        </Container>
      </SectionWrapper>

      <GalleryModalViewer
        isOpen={isOpen}
        showCounter={images.length}
        closeHandler={setIsOpen}
        photos={images}
        currImg={currImg}
      />
    </>
  )
}

export default Game
