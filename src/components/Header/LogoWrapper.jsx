import styled from '@emotion/styled'
import Link from '../Link'

const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0;
  text-transform: uppercase;
  height: 70%;
  outline: 0px solid transparent !important;
  text-decoration: none;
  &:hover {
    color: inherit;
  }
`

export default LogoWrapper
