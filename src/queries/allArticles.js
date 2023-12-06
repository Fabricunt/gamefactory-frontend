const blockSeo = require('./blockSeo')

const allArticles = `
  allStrapiArticle {
    nodes {
      component
      title
      hidePage
      id
      position
      locale
      text
      slug
      date
      articles {
        id
        title
        date
        slug
        coverImage {
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
      ${blockSeo}
      content {
        ... on STRAPI__COMPONENT_ARTICLE_BLOCKS_THREE_COLUMNS {
          id
          items {
            title
            textSize
            text
            order
            id
            image {
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
          strapi_component
        }
        ... on STRAPI__COMPONENT_ARTICLE_BLOCKS_TITLE {
          id
          title
          strapi_component
        }
        ... on STRAPI__COMPONENT_ARTICLE_BLOCKS_WIDE_IMAGE {
          id
          strapi_component
          image {
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
        ... on STRAPI__COMPONENT_ARTICLE_BLOCKS_WIDE_TEXT {
          id
          text
          strapi_component
        }
        ... on STRAPI__COMPONENT_ARTICLE_BLOCKS_TWO_COLUMNS {
          id
          columnsSize
          items {
            title
            textSize
            text
            order
            image {
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
          strapi_component
        }
      }
      sections {
       ... on STRAPI__COMPONENT_SECTIONS_HEADER {
          section {
            id
          }
        }
        ... on STRAPI__COMPONENT_SECTIONS_MAP {
          section {
            id
          }
        }
        ... on STRAPI__COMPONENT_SECTIONS_FOOTER {
          section {
            id
          }
        }
      }
      coverImage {
        ext
        alternativeText
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        id
      }
      pageCoverImage {
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

module.exports = allArticles
