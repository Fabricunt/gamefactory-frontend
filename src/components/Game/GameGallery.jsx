import styled from '@emotion/styled'

const GameGallery = styled.div`
  flex: 1 1 50%;

  ${({ theme }) => theme.breakpoints.down('md')} {
    order: 2;
    padding-right: 10px;
    padding-left: 10px;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    order: 1;
    padding-right: 20px;
    padding-left: 20px;
  }
  & .gatsby-image-wrapper {
    cursor: pointer;
  }
`

export default GameGallery
