import styled from '@emotion/styled'

const BlogSwiperOptionHeading = styled.div`
  ${({ theme }) => theme.breakpoints.up('lg')} {
    justify-content: space-between;
    display: flex;
    min-width: 373px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.palette.white};
    max-width: 375px;
    margin-left: auto;
  }
`

export default BlogSwiperOptionHeading
