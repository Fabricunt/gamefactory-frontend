import styled from '@emotion/styled'
import Link from '../Link'

const MapPopupItem = styled(Link)`
  display: flex;
  align-items: center;

  &:not(&:last-child) {
    margin-bottom: 7px;
  }
`

export default MapPopupItem
