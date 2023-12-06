import styled from '@emotion/styled'

const ArticleContentHeading = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.palette.gray[100]};

  ${({ theme }) => theme.breakpoints.down('xl')} {
    padding-bottom: 20px;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    padding-bottom: 40px;
  }
`

export default ArticleContentHeading
