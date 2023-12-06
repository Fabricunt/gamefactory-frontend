import styled from '@emotion/styled'
import Container from '../Container'

const TextContainer = styled(Container)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  height: ${({ useScreenHeight }) => (useScreenHeight ? 'calc(100vh - 180px)' : 'auto')};
`

export default TextContainer
