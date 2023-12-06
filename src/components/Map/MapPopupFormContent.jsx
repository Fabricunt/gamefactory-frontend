import styled from '@emotion/styled'
import NetlifyForm from '../NetlifyForm'

const MapPopupFormContent = styled(NetlifyForm)`
  display: grid;
  gap: 10px;
  overflow: hidden;
  max-height: ${({ showForm }) => (showForm && '300px') || '0'};
  height: 100%;
  transition: 0.3s;
`

export default MapPopupFormContent
