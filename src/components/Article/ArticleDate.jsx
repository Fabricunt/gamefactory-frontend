import styled from '@emotion/styled'

const ArticleDate = styled.span`
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.gray[100]};
  display: inline-block;

  ${({ theme }) => theme.breakpoints.down('xl')} {
    font-size: 12px;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    font-size: 14px;
  }
`

export default ArticleDate
