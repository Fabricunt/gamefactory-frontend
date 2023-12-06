const allSTeam = `
  allStrapiSTeam {
    nodes {
      id
      hideSection
      sectionTitle
      sectionId
      position
      component
      people {
        id
        name
        role
        text
        stats {
          id
          value
          key
        }
        socials {
          url
          icon
          id
        }
        photo {
         alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`

module.exports = allSTeam
