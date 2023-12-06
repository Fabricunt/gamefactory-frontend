import styled from '@emotion/styled'

const GameContent = styled.div`
  top: 100px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    position: static;
    max-height: 100%;
    overflow-y: visible;
  }
  ${({ theme }) => theme.breakpoints.up('md')} {
    position: sticky;
    max-height: 70vh;
    overflow-y: auto;
  }
`

export default GameContent
