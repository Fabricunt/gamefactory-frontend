import SectionWrapper from "../components/SectionWrapper"
import GameOnlineContent from "../components/GameOnline/GameOnlineContent";
import GameOnlineImageLink from "../components/GameOnline/GameOnlineImageLink";
import Image from "../components/Image"
import Title from "../components/Title";

const imageStyle = {position: 'absolute', height: '100%'}

const PlayOnline = (props) =>  {
  const {image, image2, link, link2, name} = props
  return (
    <SectionWrapper smallPadding id={name}>
      <Title>Game Online</Title>
      <GameOnlineContent>
        <GameOnlineImageLink href={link} target="_blank">
          <Image {...image} style={imageStyle}/>
        </GameOnlineImageLink>
        <GameOnlineImageLink href={link2} target="_blank">
          <Image {...image2} style={imageStyle}/>
        </GameOnlineImageLink>
      </GameOnlineContent>
    </SectionWrapper>
  )
}

export default PlayOnline