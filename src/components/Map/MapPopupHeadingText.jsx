import styled from '@emotion/styled'

const MapPopupHeadingText = styled.span`
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.orange[400]};

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 18px;
  }

  ${({ theme }) => theme.breakpoints.between('md', 'xl')} {
    font-size: 20px;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    font-size: 24px;
  }
`

export default MapPopupHeadingText
