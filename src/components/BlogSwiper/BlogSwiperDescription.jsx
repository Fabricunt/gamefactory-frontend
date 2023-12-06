import styled from '@emotion/styled'

const BlogSwiperDescription = styled.p`
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: absolute;
  left: 10px;
  bottom: 10px;
  width: calc(100% - 20px);
  color: ${({ theme }) => theme.palette.white};
`

export default BlogSwiperDescription
