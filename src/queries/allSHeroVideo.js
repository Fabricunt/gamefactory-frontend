const allSHeroVideo = `
 allStrapiSHeroVideo {
    nodes {
      id
      hideSection
      sectionId
      title
      position
      hideCustomBanner
      component
      videoUrl
      playButton {
        localFile {
          publicURL
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, quality: 80)
          }
          childSvgSprites {
            internal {
              content
            }
          }
        }
        ext
        alternativeText
      }
      videoFile {
        localFile {
          publicURL
        }
      }
      placeholderImage {
        localFile {
          publicURL
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, quality: 80)
          }
          childSvgSprites {
            internal {
              content
            }
          }
        }
        ext
        alternativeText
      }
      hideSection
      useVideoUrl
    }
  }
`

module.exports = allSHeroVideo
