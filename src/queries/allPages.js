const blockSections = require('./blockSections')
const blockSeo = require('./blockSeo')

const allPages = `
 allStrapiPage {
    nodes {
      sections{
        ... on STRAPI__COMPONENT_SECTIONS_NOT_FOUND {
          section {
            id
          }
        }
        ... on STRAPI__COMPONENT_SECTIONS_GALLERY_BANNER {
          section {
            id
          }
        }
        ... on STRAPI__COMPONENT_SECTIONS_HERO_VIDEO {
          section {
            id
          }
        }
        ... on STRAPI__COMPONENT_SECTIONS_TEXT {
          section {
            id
          }
        }
        ${blockSections}
      }
      name
      locale
      hidePage
      url
    ${blockSeo}
    }
  }
`

module.exports = allPages
