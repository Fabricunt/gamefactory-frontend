import styled from '@emotion/styled'
import Title from '../Title'

const GalleryBannerTabLink = styled(Title)`
  line-height: 1;
  max-width: 50%;
  padding: 15px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration-style: solid;
  ${'' /* text-decoration-line: underline; */}
  text-underline-offset: 10px;
  text-decoration-thickness: 4px;
  transition: 0.3s;
`

export default GalleryBannerTabLink
