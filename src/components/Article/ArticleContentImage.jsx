import styled from '@emotion/styled'
import Image from '../Image'
import { css } from '@emotion/react'

const dynamicStyles = ({ theme, type = '' }) => css`
  ${type === 'content' ? `
      ${theme.breakpoints.up('xl')} {
        height: 170px;
      }
      
      ${theme.breakpoints.between('md', 'lg')} {
        height: 240px;
      } 
  
      ${theme.breakpoints.between('lg', 'xl')} {
        height: 270px;
      }
  
      ${theme.breakpoints.up('xl')} {
        height: 344px;
      }         
    ` : ''}

  ${type === 'cardSmall' ? `     
     ${theme.breakpoints.down('xl')}{
       max-height: 150px;
     }
      
     ${theme.breakpoints.between('xl', '2xl')} {
       max-height: 180px;
     }
     
     ${theme.breakpoints.up('2xl')} {
        max-height: 200px;
      } 
  ` : ''}
`

const ArticleContentImage = styled(Image)`
  position: relative;
  width: 100%;
  height: 100%;

  ${dynamicStyles}
`

export default ArticleContentImage
