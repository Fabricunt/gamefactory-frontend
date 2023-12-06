const allSTechnology = `
allStrapiSTechnology {
    nodes {
      id
      hideSection
      position
      component
      sectionId
      sectionTitle
      technologies {
        id
        title
        url
        image {
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
          ext
        }
      }
    }
  }
`

module.exports = allSTechnology
