import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import BlogSwiperWrapper from 'components/BlogSwiper/BlogSwiperWrapper'
import BlogSwiperContent from 'components/BlogSwiper/BlogSwiperContent'
import BlogSwiperOptions from 'components/BlogSwiper/BlogSwiperOptions'
import BlogSwiperOptionHeading from 'components/BlogSwiper/BlogSwiperOptionHeading'
import HeroArrow from 'components/Hero/HeroArrow'
import HeroControls from 'components/Hero/HeroControls'
import HeroTitle from 'components/Hero/HeroTitle'
import BlogSwiperThumbnails from 'components/BlogSwiper/BlogSwiperThumbnails'
import HeroThumbnailsImage from 'components/Hero/HeroThumbnailsImage'
import BlogSwiperPreview from 'components/BlogSwiper/BlogSwiperPreview'
import BlogSwiperTitle from 'components/BlogSwiper/BlogSwiperTitle'
import ArticleText from 'components/Article/ArticleText'
import BlogSwiperImage from 'components/BlogSwiper/BlogSwiperImage'
import BlogSwiperLink from 'components/BlogSwiper/BlogSwiperLink'
import BlogSwiperDescription from 'components/BlogSwiper/BlogSwiperDescription'

const BlogSwiper = ({ sectionTitle, articles }) => {
   const [activeSlide, setActiveSlide] = useState(articles[0])
   const handleActiveSlideChange = (obj) => setActiveSlide(obj)

   return (
      <BlogSwiperWrapper>
         <BlogSwiperImage {...activeSlide.pageCoverImage} />

         {articles.length > 1 ? (
            <>
               <HeroArrow variant='mobile' className='blog-swiper-control-prev' align='left' />
               <HeroArrow variant='mobile' className='blog-swiper-control-next' />
            </>
         ) : null}

         <BlogSwiperContent>
            <BlogSwiperPreview>
               <BlogSwiperTitle>{activeSlide.title}</BlogSwiperTitle>
               <ArticleText preview>{activeSlide.text}</ArticleText>
               <BlogSwiperLink to={activeSlide.slug}>SHOW MORE</BlogSwiperLink>
            </BlogSwiperPreview>

            <BlogSwiperOptions>
               <BlogSwiperOptionHeading>
                  <HeroTitle>{sectionTitle}</HeroTitle>
                  <HeroControls>
                     <HeroArrow className='blog-swiper-control-prev' align='left' />
                     <HeroArrow className='blog-swiper-control-next' />
                  </HeroControls>
               </BlogSwiperOptionHeading>
               <BlogSwiperThumbnails>
                  <Swiper
                     loop={true}
                     modules={[Navigation]}
                     loopAdditionalSlides={3}
                     loopPreventsSlide={true}
                     loopedSlides={3}
                     className='blog-swiper-thumbnails'
                     slidesPerView={3}
                     startslides='true'
                     slideToClickedSlide='true'
                     navigation={{
                        nextEl: '.blog-swiper-control-next',
                        prevEl: '.blog-swiper-control-prev',
                     }}
                     onRealIndexChange={(swiper) => handleActiveSlideChange(articles[swiper.realIndex])}
                  >
                     {articles.map((el) => (
                        <SwiperSlide key={el.id}>
                           {({ isActive }) => isActive ? (
                              <>
                                 <HeroThumbnailsImage
                                    fadein='false'
                                    loading='eager'
                                    className='blog-swiper-thumbnail-image'
                                    {...el.pageCoverImage}
                                 />

                                 <BlogSwiperDescription>{el.title}</BlogSwiperDescription>
                              </>
                           ) : (
                              <HeroThumbnailsImage
                                 fadein='false'
                                 loading='eager'
                                 className='blog-swiper-thumbnail-image'
                                 {...el.pageCoverImage}
                              />
                           )}
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </BlogSwiperThumbnails>
            </BlogSwiperOptions>
         </BlogSwiperContent>
      </BlogSwiperWrapper>
   )
}

export default BlogSwiper
