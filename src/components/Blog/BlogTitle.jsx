import styled from '@emotion/styled'

const BlogTitle = styled.h2`
  width: max-content;

  ${({ theme }) => theme.breakpoints.down('xl')} {
    font-size: 26px;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    font-size: 36px;
  }
`

export default BlogTitle