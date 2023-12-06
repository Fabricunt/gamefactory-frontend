import styled from '@emotion/styled'

const ArticleCardTitle = styled.h3`
  text-align: center;
  text-transform: uppercase;

  ${({ theme }) => theme.breakpoints.down('lg')} {
    font-size: 20px;
    line-height: 30px;
  }

  ${({ theme }) => theme.breakpoints.between('lg', 'xl')} {
    font-size: 30px;
    line-height: 40px;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    font-size: 40px;
    line-height: 50px;
  }
`

export default ArticleCardTitle
