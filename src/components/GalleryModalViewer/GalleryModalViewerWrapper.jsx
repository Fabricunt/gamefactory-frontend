import styled from '@emotion/styled'
import { css } from '@emotion/react'

const dynamicStyles = ({ isOpen }) => css`
  opacity: ${isOpen ? '1' : '0'};
  visibility: ${isOpen ? 'visible' : 'hidden'};
`

const GalleryModalViewerWrapper = styled.section`
  background-color: rgba(20, 20, 20, 0.95);
  height: 100vh;
  z-index: 11;
  display: flex;
  transition: 0.7s;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;

  & model-viewer {
    width: 100%;
    height: 100%;
  }

  & div.photo-slider {
    width: 100vw;
    height: 85%;
    padding-top: 10px;

    & .swiper-button-prev,
    & .swiper-button-next {
      width: 90px;
      height: 90px;
      top: 58%;
      border-radius: 50%;
      background-color: transparent;

      ${({ theme }) => theme.breakpoints.down('md')} {
        display: none;
      }
      &:hover {
        background-color: rgba(46, 46, 46, 0.7);
      }
    }

    & .swiper-slide {
      & .swiper-zoom-target {
        & img {
          transform: none !important;
        }
        & picture {
          transform: none !important;
        }
        & div {
          transform: none !important;
        }
      }
    }
  }
  & div.thumbs-slider {
    width: 100vw;
    height: 120px;
    padding-top: 10px;
    padding-bottom: 10px;

    & .swiper-slide {
      width: 100px;
      height: 100px;
    }

    & .swiper-slide-thumb-active {
      border: 4px solid ${({ theme }) => theme.palette.orange[400]};
      overflow: hidden;
    }

    & model-viewer {
      pointer-events: none;
    }
  }

  ${dynamicStyles};
`

export default GalleryModalViewerWrapper
