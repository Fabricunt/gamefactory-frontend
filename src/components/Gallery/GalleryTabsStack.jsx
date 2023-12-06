import styled from '@emotion/styled'

const GalleryTabsStack = styled.div`
  display: flex;
  justify-content: ${({ centered }) => (centered ? 'center' : 'space-between')};
  width: 100%;
`

export default GalleryTabsStack
