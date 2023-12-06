import styled from '@emotion/styled'
import { css } from '@emotion/react'

const dynamicStyles = ({ mouseIn }) => css`
  transform: scale(${mouseIn ? '1.1' : '1'});
`

const PortfolioItemImageContent = styled.div`
  transition: 1s;
  pointer-events: none;
  height: 100%;

  ${dynamicStyles}
`

export default PortfolioItemImageContent
