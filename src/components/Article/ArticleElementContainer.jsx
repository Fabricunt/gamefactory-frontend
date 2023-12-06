import styled from '@emotion/styled'

const ArticleElementContainer = styled.div`
  display: grid;
  height: max-content;
  margin-bottom: 40px;

  ${({ theme }) => theme.breakpoints.down('lg')} {
    gap: 25px;
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
  }

  ${({ theme }) => theme.breakpoints.up('lg')} {
    gap: 40px;
  }
`

export default ArticleElementContainer
