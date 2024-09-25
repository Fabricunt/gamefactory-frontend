const allSPlayOnline = `
  allStrapiSectionImageLink {
    nodes {
      component
      id
      position
      link
      link2
      name
      image {
          id
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      image2 {
          id
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
    }
  }
`

module.exports = allSPlayOnline