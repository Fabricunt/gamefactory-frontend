import styled from '@emotion/styled'
import { Link } from 'gatsby'

const BlogSwiperLink = styled(Link)`
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.2);
  align-items: center;

  width: max-content;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.white};
  display: flex;

  &:hover {
    color: ${({ theme }) => theme.palette.orange[100]};

    &:after {
      border-top: 1px solid ${({ theme }) => theme.palette.orange[100]};
      border-right: 1px solid ${({ theme }) => theme.palette.orange[100]};
    }
  }

  &:after {
    width: 10px;
    height: 10px;
    display: block;
    content: '';
    border-top: 1px solid ${({ theme }) => theme.palette.white};
    border-right: 1px solid ${({ theme }) => theme.palette.white};
    transform: rotate(45deg);
  }

  ${({ theme }) => theme.breakpoints.down('xl')} {
    font-size: 14px;
    gap: 10px;
    padding: 10px;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    font-size: 16px;
    gap: 20px;
    padding: 20px;
  }
`

export default BlogSwiperLink
