import SectionWrapper from '../components/SectionWrapper'
import Container from '../components/Container'
import Page404BigText from '../components/Page404/Page404BigText'
import Page404Text from '../components/Page404/Page404Text'
import Page404Link from '../components/Page404/Page404Link'
import Page404Wrapper from '../components/Page404/Page404Wrapper'

const Page404 = ({ sectionTitle, informationText, buttonText, buttonUrl }) => (
  <SectionWrapper>
    <Container>
      <Page404Wrapper>
        <Page404BigText>{sectionTitle}</Page404BigText>
        <div>
          <Page404Text>{informationText}</Page404Text>
          <Page404Link to={buttonUrl}>{buttonText}</Page404Link>
        </div>
      </Page404Wrapper>
    </Container>
  </SectionWrapper>
)

export default Page404
