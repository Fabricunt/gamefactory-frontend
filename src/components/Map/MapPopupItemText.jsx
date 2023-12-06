import styled from '@emotion/styled'

const MapPopupItemText = styled.div`
  color: ${({ theme }) => theme.palette.orange[400]};
  padding-left: 5px;
  line-height: 18px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 10px;
  }

  ${({ theme }) => theme.breakpoints.between('md', 'xl')} {
    font-size: 12px;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    font-size: 14px;
  }
`

export default MapPopupItemText
