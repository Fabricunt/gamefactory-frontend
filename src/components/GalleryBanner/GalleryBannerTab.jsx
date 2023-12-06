import styled from '@emotion/styled'

const GalleryBannerTab = styled.aside`
  display: flex;
  flex: 0 0 50%;
  justify-content: center;
  align-items: center;
  transition: 0.3s;

  &:not(:hover) {
    color: ${({ theme }) => theme.palette.white};
  }

  &:hover {
    color: ${({ theme }) => theme.palette.orange[400]};
  }

  &:not(:first-of-type) {
    border-left: 2px solid white;
  }

  &:not(:last-child) {
    border-right: 2px solid white;
  }
`

export default GalleryBannerTab
