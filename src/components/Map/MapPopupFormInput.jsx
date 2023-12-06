import styled from '@emotion/styled'

const MapPopupFormInput = styled.input`
  border: 1px solid;
  padding: 5px;
  border-radius: 5px;
  resize: none;
  border-color: ${({ error }) => error && 'red'};

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

export default MapPopupFormInput
