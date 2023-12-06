import styled from '@emotion/styled'

const BlogSwiperTitle = styled.h2`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.palette.white};

  ${({ theme }) => theme.breakpoints.down('xl')} {
    font-size: 30px;
    line-height: 45px;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    font-size: 60px;
    line-height: 75px;
  }
`

export default BlogSwiperTitle
