import styled from '@emotion/styled'

const HeroThumbnails = styled.div`
  .hero-thumbnails {
    .swiper-wrapper {
      display: flex;
      align-items: center;
    }

    .swiper-slide {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 140px;
      height: 140px;

      .hero-thumbnail-image {
        width: 100px;
        height: 100px;
        border-radius: 10px;
      }

      &-active,
      &-duplicate-active {
        .hero-thumbnail-image {
          transform: scale(1.4);
        }
      }
    }
  }
`

export default HeroThumbnails
