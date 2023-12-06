import styled from '@emotion/styled'

const BlogSwiperPreview = styled.div`
  max-width: 667px;
  width: 100%;
  display: grid;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  background: rgba(34, 34, 34, 0.5);

  &::after {
    content: "";
    opacity: 0.5;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.palette.black[700]};
  }

  ${({ theme }) => theme.breakpoints.down('xl')} {
    margin: auto;
  }

  ${({ theme }) => theme.breakpoints.down('2xl')} {
    gap: 10px;
    padding: 10px;
  }

  ${({ theme }) => theme.breakpoints.up('2xl')} {
    gap: 20px;
    padding: 20px;
  }
`

export default BlogSwiperPreview
