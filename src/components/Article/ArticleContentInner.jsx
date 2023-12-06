import styled from '@emotion/styled'

const ArticleContentInner = styled.article`
  padding-top: 20px;
  padding-right: 20px;
  padding-left: 20px;
  margin-top: -145px;
  margin-bottom: 40px;
  background-color: ${({ theme }) => theme.palette.white};
  position: relative;
  z-index: 1;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2), 0 2px 10px rgba(0, 0, 0, 0.1);;
`

export default ArticleContentInner
