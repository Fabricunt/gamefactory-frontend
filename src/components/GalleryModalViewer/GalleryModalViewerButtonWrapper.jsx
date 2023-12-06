import styled from '@emotion/styled'

const GalleryModalViewerButtonWrapper = styled.button`
  box-shadow: none !important;
  color: ${({ theme }) => theme.palette.orange[500]};
  border-radius: 50%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(46, 46, 46, 0.7);
  }

  &:active {
    background-color: rgba(46, 46, 46, 0.9);
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: 10px;
    width: 39px;
    height: 39px;
  }

  ${({ theme }) => theme.breakpoints.between('md', 'lg')} {
    padding: 10px;
    width: 49px;
    height: 49px;
  }

  ${({ theme }) => theme.breakpoints.between('lg', 'xl')} {
    padding: 15px;
    width: 59px;
    height: 59px;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    padding: 15px;
    width: 69px;
    height: 69px;
  }
`

export default GalleryModalViewerButtonWrapper
