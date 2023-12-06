import styled from '@emotion/styled'

const MapPopupColumn = styled.div`
  flex-direction: column;

  &:not(&:first-of-type) {
    ${({ theme }) => theme.breakpoints.down('md')} {
      padding-top: 10px;
    }

    ${({ theme }) => theme.breakpoints.between('md', 'xl')} {
      padding-top: 20px;
    }

    ${({ theme }) => theme.breakpoints.down('xl')} {
      padding-left: 0;
    }

    ${({ theme }) => theme.breakpoints.up('xl')} {
      padding-left: 50px;
      padding-top: 0;
    }
  }
`

export default MapPopupColumn
