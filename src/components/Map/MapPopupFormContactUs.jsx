import styled from '@emotion/styled'

const MapPopupFormContactUs = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  border-bottom: 1px solid #222222;
  transition: 0.4s;
  max-width: 100px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 12px;
  }

  ${({ theme }) => theme.breakpoints.between('md', 'xl')} {
    font-size: 14px;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    font-size: 16px;
  }

  &:hover {
    color: ${({ theme }) => theme.palette.orange[400]};
    border-bottom-color: ${({ theme }) => theme.palette.orange[400]};
  }
`

export default MapPopupFormContactUs
