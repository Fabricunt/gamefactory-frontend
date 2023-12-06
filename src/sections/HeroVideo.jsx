import HeroWrapper from '../components/Hero/HeroWrapper'
import ReactPlayer from 'react-player/lazy'
import Image from '../components/Image'
import { useState } from 'react'

const HeroVideo = ({
  sectionId,
  videoUrl,
  playButton,
  videoFile,
  hideCustomBanner,
  placeholderImage,
  useVideoUrl,
}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const handleChangePlaying = () => {
    setIsPlaying(!isPlaying)
  }
  return (
    <HeroWrapper style={{ paddingBottom: '56.25%' }} onClick={handleChangePlaying} id={sectionId}>
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', width: '100%', height: '0', paddingBottom: '56.25%' }}>
          <ReactPlayer
            config={{
              youtube: {
                playerVars: { showinfo: 1, modestbranding: 0 },
              },
            }}
            controls={true}
            loop={true}
            muted={true}
            playing={isPlaying}
            width="100%"
            height="100%"
            style={{ position: 'absolute' }}
            light={
              !hideCustomBanner && placeholderImage ? (
                <Image style={{ width: '100%' }} {...placeholderImage} />
              ) : (
                true
              )
            }
            playIcon={
              playButton ? <Image style={{ position: 'absolute' }} {...playButton} /> : true
            }
            url={useVideoUrl && videoUrl ? videoUrl : videoFile.localFile.publicURL}
          />
        </div>
      </div>
    </HeroWrapper>
  )
}

export default HeroVideo
