const allSBlog = `
   allStrapiSBlog {
      nodes {
         buttonText
         buttonUrl
         component
         sectionId
         sectionTitle
         position
         id
         hideSection
         articles{
            title
            date
            slug
            id
            coverImage {
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

module.exports = allSBlog
