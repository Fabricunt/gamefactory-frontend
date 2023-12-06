import styled from '@emotion/styled'

const BlogSwiperContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: 10px 35px;
  }

  ${({ theme }) => theme.breakpoints.between('md', '2xl')} {
    padding: 20px 50px;
    gap: 30px;
  }

  ${({ theme }) => theme.breakpoints.up('2xl')} {
    padding: 40px 100px;
    gap: 50px;
  }
`

export default BlogSwiperContent
