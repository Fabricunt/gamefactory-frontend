import styled from '@emotion/styled'

const ArticleContentTitle = styled.h3`  
  padding-top: 20px;
  font-weight: 600;
  
  ${({ theme }) => theme.breakpoints.down('lg')} {
    font-size: 17px;
    line-height: 30px;
  }
  
  ${({ theme }) => theme.breakpoints.between('lg', 'xl')} {
    font-size: 20px;
    line-height: 36px;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    font-size: 24px;
    line-height: 40px;

  }
`

export default ArticleContentTitle