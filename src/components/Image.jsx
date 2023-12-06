import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// Render inline SVG with fallback non-svg images
const Image = ({ alternativeText, localFile, ext, ...props }) => {
   // Inlined SVGs
   if (ext === '.svg' && localFile.childSvgSprites?.internal?.content) {
      return (
         <div
            dangerouslySetInnerHTML={{ __html: localFile.childSvgSprites?.internal?.content }}
            {...props}
         />
      )
   }

   // Non SVG images
   if (localFile?.childImageSharp?.gatsbyImageData)
      return (
         <GatsbyImage
            image={getImage(localFile?.childImageSharp?.gatsbyImageData)}
            alt={alternativeText || ''}
            {...props}
         />
      )

   return null
}

export default Image
