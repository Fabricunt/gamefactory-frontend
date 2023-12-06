import styled from '@emotion/styled'
import Image from '../Image'

const ArticleCoverImage = styled(Image)`
  position: relative;
  width: 100%;
  height: 0;

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding-top: 100%;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    padding-top: 41.36%;
  }
`

export default ArticleCoverImage
