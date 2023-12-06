const allSPortfolio = `
  allStrapiSPortfolio {
    nodes {
      buttonText
      buttonUrl
      component
      sectionId
      sectionTitle
      position
      id
      hideSection
      games {
        title
        id
        slug
        coverImage {
         alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          ext
        }
      }
    }
  }
`

module.exports = allSPortfolio
