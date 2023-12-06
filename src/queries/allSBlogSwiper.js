const allSBlogSwiper = `
  allStrapiSBlogSwiper {
     nodes {
        sectionTitle
        position
        id
        component
        hideSection
        articles {
           title
           text
           slug
           id
           pageCoverImage {
              ext
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

module.exports = allSBlogSwiper
