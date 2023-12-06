import Image from '../components/Image'
import GalleryBannerWrapper from '../components/GalleryBanner/GalleryBannerWrapper'
import GalleryBannerImageWrapper from '../components/GalleryBanner/GalleryBannerImageWrapper'
import GalleryBannerTabStack from '../components/GalleryBanner/GalleryBannerTabStack'
import GalleryBannerTab from '../components/GalleryBanner/GalleryBannerTab'
import GalleryBannerTabLink from '../components/GalleryBanner/GalleryBannerTabLink'
import Link from '../components/Link'
import SectionWrapper from '../components/SectionWrapper'
import Title from '../components/Title'

const GalleryBanner = ({ sectionId, galleries, backgroundImage, sectionTitle }) => {
  return (
    <SectionWrapper>
      <Title>{sectionTitle}</Title>
      <GalleryBannerWrapper id={sectionId}>
        <GalleryBannerImageWrapper>
          <Image {...backgroundImage} />
        </GalleryBannerImageWrapper>
        <GalleryBannerTabStack>
          {galleries.map(({ tabTitle, url, id }) => (
            <GalleryBannerTab key={id}>
              <GalleryBannerTabLink as={Link} to={url}>
                {tabTitle}
              </GalleryBannerTabLink>
            </GalleryBannerTab>
          ))}
        </GalleryBannerTabStack>
      </GalleryBannerWrapper>
    </SectionWrapper>
  )
}

export default GalleryBanner
