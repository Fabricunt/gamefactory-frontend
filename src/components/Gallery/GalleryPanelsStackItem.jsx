import styled from '@emotion/styled'
import { css } from '@emotion/react'

const dynamicStyles = ({ active }) => css`
  ${active
    ? `
    width: 100%;
    transform: translateX(0);
    opacity: 1;

`
    : `
    opacity: 0;
    visibility: hidden;
    position: absolute;
    width: 100%;

    &:last-child {
      transform: translateX(100%);
    }

    &:first-of-type {
      transform: translateX(-100%);
    }
`};
`

const GalleryPanelsStackItem = styled.div`
  padding: 0;
  transition: 0.5s;
  grid-area: 1/1/1/1;
  will-change: transform, opacity;

  & model-viewer {
    width: 100%;
    height: 200px;
  }

  ${dynamicStyles};
`

export default GalleryPanelsStackItem
