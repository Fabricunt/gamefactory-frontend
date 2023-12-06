import styled from '@emotion/styled'

const AboutTimeWrapper = styled.div`
  width: 100%;

  position: relative;
  justify-content: space-between;

  .about-slider {
    padding-bottom: 60px;
    position: relative;

    .swiper-pagination-bullets {
      bottom: 0;
    }

    .swiper-pagination-bullet-active {
      background: ${({ theme }) => theme.palette.orange[400]};
    }

    .swiper-wrapper {
      .swiper-slide {
        .about-item__inner {
          opacity: 0.5;
        }
      }

      .swiper-slide-active {
        .about-item__indicator {
          width: 28px;
          height: 28px;
          margin-bottom: 0;
          margin-top: 0;
        }
        .about-item__inner {
          opacity: 1;
        }
      }
    }
  }

  &::before,
  &::after {
    content: '';
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 2;
  }

  &::before {
    background: linear-gradient(
      90deg,
      rgba(250, 250, 250, 1) 0%,
      rgba(250, 250, 250, 0.9275911048012955) 60%,
      rgba(255, 255, 255, 0) 100%
    );
    left: 0;
  }

  &::after {
    background: linear-gradient(
      270deg,
      rgba(250, 250, 250, 1) 0%,
      rgba(250, 250, 250, 0.9275911048012955) 60%,
      rgba(255, 255, 255, 0) 100%
    );
    right: 0;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding-right: 14px;
    padding-left: 14px;
    &::before,
    &::after {
      width: 8%;
    }
  }

  ${({ theme }) => theme.breakpoints.between('sm', 'md')} {
    padding-right: 31px;
    padding-left: 31px;
    &::before,
    &::after {
      width: 10%;
    }
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    padding-right: 31px;
    padding-left: 31px;
    &::before,
    &::after {
      width: 20%;
    }
  }
`

export default AboutTimeWrapper
