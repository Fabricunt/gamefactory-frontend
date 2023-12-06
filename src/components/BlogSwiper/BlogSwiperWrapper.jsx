import styled from '@emotion/styled'

const BlogSwiperWrapper = styled.section`
  width: 100%;
  position: relative;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding-top: 62%;
  }

  ${({ theme }) => theme.breakpoints.between('sm', '2xl')} {
    padding-top: 46%;
  }

  ${({ theme }) => theme.breakpoints.up('2xl')} {
    padding-top: 47%;
  }
`

export default BlogSwiperWrapper
