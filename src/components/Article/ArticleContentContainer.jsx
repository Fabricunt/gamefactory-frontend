import styled from '@emotion/styled'
import { css } from '@emotion/react'

const dynamicStyles = ({ theme, gridType }) => css`
  ${gridType ? `
     ${theme.breakpoints.between('lg', 'xl')}{
         grid-template-columns: 1fr 190px;
     }
     
     ${theme.breakpoints.up('xl')}{
        grid-template-columns: 1fr 268px;
     }
  ` : ''}
`

const ArticleContentContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.white};
  display: grid;
  gap: 90px;
  padding-top: 20px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding-left: 24px;
    padding-right: 24px;
  }

  ${({ theme }) => theme.breakpoints.between('md', 'lg')} {
    padding-left: 35px;
    padding-right: 35px;
  }

  ${({ theme }) => theme.breakpoints.between('lg', 'xl')} {
    padding-left: 60px;
    padding-right: 60px;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    padding-left: 100px;
    padding-right: 100px;
  }

  ${dynamicStyles}
`

export default ArticleContentContainer
