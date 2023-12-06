import styled from '@emotion/styled'

const BlogSwiperThumbnails = styled.div`
  .blog-swiper-thumbnails {
    .swiper-wrapper {
      display: flex;
      align-items: center;
    }

    .swiper-slide {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 170px;
      height: 170px;
      position: relative;

      .blog-swiper-thumbnail-image {
        width: 140px;
        height: 140px;
        border-radius: 10px;
        cursor: pointer;
      }

      &-active,
      &-duplicate-active {
        .blog-swiper-thumbnail-image {
          height: 170px;
          width: 170px;
        }
      }
    }
  }
`

export default BlogSwiperThumbnails
