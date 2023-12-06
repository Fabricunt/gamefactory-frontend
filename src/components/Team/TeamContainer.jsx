import styled from '@emotion/styled'
import Container from '../Container'

const TeamContainer = styled(Container)`
  .team-slider {
    width: 90%;
    max-width: 1920px;
    padding-bottom: 50px;

    &::before,
    &::after {
      content: '';
      height: 100%;
      position: absolute;
      top: 0;
      z-index: 2;

      ${({ theme }) => theme.breakpoints.down('sm')} {
        width: 2%;
      }

      ${({ theme }) => theme.breakpoints.between('sm', '2xl')} {
        width: 5%;
      }

      ${({ theme }) => theme.breakpoints.up('2xl')} {
        width: 10%;
      }
    }

    &::before {
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0.9275911048012955) 60%,
        rgba(255, 255, 255, 0) 100%
      );
      left: 0;
    }

    &::after {
      background: linear-gradient(
        270deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0.9275911048012955) 60%,
        rgba(255, 255, 255, 0) 100%
      );
      right: 0;
    }

    .swiper-button-prev,
    .swiper-button-next {
      ${({ theme }) => theme.breakpoints.down('md')} {
        display: none;
      }

      ${({ theme }) => theme.breakpoints.up('md')} {
        height: 50px;
        width: 25px;
        top: 41%;
        z-index: 10;
        height: 100px;
        width: 50px;
        &::after {
          color: ${({ theme }) => theme.palette.orange[400]};
          font-size: 50px;
          font-size: 100px;
        }
      }
    }

    .swiper-button-prev {
      left: 10px;
    }

    .swiper-button-next {
      right: 10px;
    }

    ${({ theme }) => theme.breakpoints.down('xl')} {
      .team-slider {
        padding-bottom: 0;
      }
    }

    .swiper-wrapper {
      padding-bottom: 50px;
    }

    .swiper-slide {
      display: flex;
      justify-content: center;
    }

    .swiper-pagination-bullets {
      bottom: 0;
    }

    .swiper-pagination-bullet-active {
      background: ${({ theme }) => theme.palette.orange[400]};
    }
  }
`

export default TeamContainer
