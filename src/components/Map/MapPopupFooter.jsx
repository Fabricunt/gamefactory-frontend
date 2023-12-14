import styled from '@emotion/styled'

const MapPopupFooter = styled.div`
  line-height: 16px;
  display: flex;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 12px;
    gap: 10px;
  }

  ${({ theme }) => theme.breakpoints.between('md', 'xl')} {
    font-size: 13px;
    gap: 15px;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    font-size: 14px;
    gap: 20px;
  }
`

export default MapPopupFooter
