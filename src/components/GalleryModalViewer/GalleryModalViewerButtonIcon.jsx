import { css } from '@emotion/react'
import styled from '@emotion/styled'

const dynamicStyles = ({ showIcon }) => css`
  ${showIcon ? 'display: flex;' : 'display: none;'}
`

const GalleryModalViewerButtonIcon = styled.span`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.palette.orange[400]};

  svg {
    width: 100%;
    height: 100%;
  }
  ${dynamicStyles}
`

export default GalleryModalViewerButtonIcon
