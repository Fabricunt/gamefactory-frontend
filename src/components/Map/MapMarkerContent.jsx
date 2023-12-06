import styled from '@emotion/styled'

const MapMarkerContent = styled.svg`
  position: absolute;
  top: 13px;
  width: 25px;
  height: 21px;
  left: 11px;
  color: ${({ theme }) => theme.palette.orange[400]};
`

export default MapMarkerContent
