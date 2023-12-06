import styled from '@emotion/styled'
import { css } from '@emotion/react'

const dynamicStyles = ({ mouseIn, cords }) => css`
  display: ${mouseIn ? 'block' : 'none'};
  position: ${mouseIn ? 'absolute' : 'static'};
  transform: ${`translate(${cords.left - 38}px,${cords.top - 38}px)`};
`

const PortfolioItemImageCursor = styled.div`
  pointer-events: none;
  animation: cursorBorders 2s cubic-bezier(0.46, 0.03, 0.52, 0.96) infinite alternate;
  width: 76px;
  height: 76px;
  background-color: black;
  will-change: transform;
  top: 0;
  left: 0;
  z-index: 3;

  ${dynamicStyles}
`

export default PortfolioItemImageCursor
