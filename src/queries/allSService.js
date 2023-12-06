const allSService = `
allStrapiSService {
    nodes {
      id
      hideSection
      component
      position
      sectionId
      sectionTitle
      services {
        id
        text
        title
        image {
          ext
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
            childSvgSprites {
              internal {
                content
              }
            }
          }
        }
      }
    }
  }
`

module.exports = allSService
