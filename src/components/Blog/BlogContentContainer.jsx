import styled from '@emotion/styled'

const BlogContentContainer = styled.div`
  display: grid;
  gap: 43px;

  ${({ theme }) => theme.breakpoints.between('sm', 'md')} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.breakpoints.between('md', 'xl')} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    grid-template-columns: repeat(4, 1fr);
  }
`

export default BlogContentContainer
