import styled from '@emotion/styled'

const BlogSwiperOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 550px;
  margin-left: auto;

  ${({ theme }) => theme.breakpoints.down('xl')} {
    position: fixed;
    visibility: hidden;
  }
`

export default BlogSwiperOptions
