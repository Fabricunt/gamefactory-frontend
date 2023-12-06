import styled from '@emotion/styled'

const AboutItemMarker = styled.div`
  transition: 0.5s;
  width: 22px;
  height: 22px;
  position: absolute;
  margin-top: 4px;
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  background-color: ${({ theme }) => theme.palette.orange[400]};
`

export default AboutItemMarker
