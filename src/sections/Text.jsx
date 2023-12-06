import Container from '../components/Container'
import SectionWrapper from '../components/SectionWrapper'
import TextContent from '../components/Text/TextContent'
import TextContainer from '../components/Text/TextContainer'

const Text = ({ displayedText, background, useScreenHeight }) => {
  return (
    <SectionWrapper color={background} dark smallPadding>
      <TextContainer useScreenHeight={useScreenHeight}>
        <TextContent dangerouslySetInnerHTML={{ __html: displayedText }} />
      </TextContainer>
    </SectionWrapper>
  )
}

export default Text
