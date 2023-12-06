import styled from '@emotion/styled'

const GameWrapper = styled.div`
  width: 100%;
  display: flex;
  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column;
  }
  ${({ theme }) => theme.breakpoints.up('md')} {
    flex-direction: row;
  }
`

export default GameWrapper
