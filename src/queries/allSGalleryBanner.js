const allSGalleryBanner = `
allStrapiSGalleryBanner {
    nodes {
      sectionId
      component
      position
      sectionTitle
      id
      backgroundImage {
          id
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          alternativeText
        }
      hideSection
      galleries {
        tabTitle
        id
        url
        images {
          id
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          alternativeText
        }
      }
    }
  }
`

module.exports = allSGalleryBanner
