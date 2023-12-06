import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Image from '../Image'

const dynamicStyles = ({ scrollTopPosition }) => css`
  width: ${scrollTopPosition < 200 ? '86px' : '60px'};
`

const LogoImage = styled(Image)`
  height: 100%;
  object-fit: scale-down;

  ${dynamicStyles}
`

export default LogoImage
