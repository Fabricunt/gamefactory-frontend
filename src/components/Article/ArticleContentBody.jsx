import styled from '@emotion/styled'

const ArticleContentBody = styled.div`
  border-top: 1px solid ${({ theme }) => theme.palette.gray[100]};
  display: grid;

  ${({ theme }) => theme.breakpoints.down('2xl')} {
    gap: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  ${({ theme }) => theme.breakpoints.up('2xl')} {
    padding-top: 40px;
    padding-bottom: 40px;
    gap: 40px;
  }
`

export default ArticleContentBody
