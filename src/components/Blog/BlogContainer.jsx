import styled from '@emotion/styled'

const BlogContainer = styled.section`
  width: 100%;
  max-width: 1920px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  justify-items: center;

  ${({ theme }) => theme.breakpoints.down('lg')} {
    padding: 30px;
    gap: 30px;
  }

  ${({ theme }) => theme.breakpoints.between('lg', 'xl')} {
    padding: 40px 60px;
    gap: 50px;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    padding: 70px 100px;
    gap: 70px;
  }
`

export default BlogContainer
