const allSGallery = `
allStrapiSGallery {
    nodes {
      sectionId
      buttonText
      buttonUrl
      component
      position
      title
      id
      hideSection
      showBackButton
      backButtonUrl
      galleries {
        tabTitle
        useModels
        id
        images {
          id
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          alternativeText
        }
        models {
          altText
          title
          id
          modelFile {
            localFile {
              publicURL
            }
          }
          previewImage {
            localFile {
              publicURL
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`

module.exports = allSGallery
