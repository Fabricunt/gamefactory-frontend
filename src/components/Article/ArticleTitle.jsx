import styled from '@emotion/styled'

const ArticleTitle = styled.h2`
  text-transform: uppercase;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.black[900]};
  margin-top: 10px;

  ${({ theme }) => theme.breakpoints.down('lg')} {
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 20px;
  }

  ${({ theme }) => theme.breakpoints.between('lg', 'xl')} {
    font-size: 27px;
    line-height: 35px;
    margin-bottom: 30px;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.06em;
    margin-bottom: 40px;
  }
`

export default ArticleTitle
