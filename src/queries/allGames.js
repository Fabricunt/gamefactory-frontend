const blockSections = require('./blockSections')
const blockSeo = require('./blockSeo')

const allGames = `
  allStrapiGame {
    nodes {
      component
      hidePage
      title
      id
      position
      locale
      description
      slug
      techKeyTitle
      socials {
        icon
        id
        url
      }
      gameInfo {
        value
        key
        id
      }
      technologies {
        id
        url
        image {
          ext
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
          alternativeText
        }
        title
      }
      sections {
          ${blockSections}
        }
      ${blockSeo}
      images {
        ext
        alternativeText
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        id
      }
    }
  }
`

module.exports = allGames
