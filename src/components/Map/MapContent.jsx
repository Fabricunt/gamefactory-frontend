import styled from '@emotion/styled'
import { css } from '@emotion/react'

const dynamicStyles = ({ showPopup }) => css`
  ${showPopup
    ? `
    opacity: 1;
    visibility: visible;
  `
    : `
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  `}
`

const MapContent = styled.div`
  width: 100%;
  height: 100%;
  overflow: visible !important;
  position: absolute;
  left: 0;
  top: 0;

  & > div {
    width: 100% !important;
    height: 100% !important;
    cursor: default !important;
  }
  .mapboxgl-popup-tip {
    display: none;
  }

  .mapboxgl-popup-content {
    background: transparent;
    box-shadow: none;
    display: flex;
    justify-content: center;
    padding: 0;
  }

  .mapboxgl-popup {
    transform: none !important;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 100% !important;
    transition: 0.3s;

    ${dynamicStyles}
  }
`

export default MapContent
