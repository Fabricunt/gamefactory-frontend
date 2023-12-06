import styled from '@emotion/styled'
import { css } from '@emotion/react'

const dynamicStyles = ({ theme, preview }) => css`
  ${preview ? `
     color: ${theme.palette.white};
     overflow: hidden;
     
     -webkit-box-orient: vertical;
     display: -webkit-box;
     text-align: justify;
     
     ${theme.breakpoints.down('sm')}{
        -webkit-line-clamp: 1;
     }
     
     ${theme.breakpoints.between('sm', 'md')}{
        -webkit-line-clamp: 2;
     }
     
     ${theme.breakpoints.up('md')}{
        -webkit-line-clamp: 3;
     }
  ` : ''}
`

const ArticleText = styled.p`
  text-align: justify;

  ${({ theme }) => theme.breakpoints.down('xl')} {
    font-size: 14px;
    line-height: 22px;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    font-size: 16px;
    line-height: 25px;
  }

  ${dynamicStyles}
`

export default ArticleText