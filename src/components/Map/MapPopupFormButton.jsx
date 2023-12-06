import styled from '@emotion/styled'

const MapPopupFormButton = styled.button`
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.palette.orange[400]};
  transition: 0.4s;
  border-radius: 5px;
  max-width: 150px;
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.palette.orange[400]};
  }

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

export default MapPopupFormButton
