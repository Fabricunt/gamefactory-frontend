import styled from '@emotion/styled'

const MapPopupContent = styled.div`
  height: 100%;
  display: flex;

  ${({ theme }) => theme.breakpoints.down('xl')} {
    flex-direction: column;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    flex-direction: row;
  }
`

export default MapPopupContent
