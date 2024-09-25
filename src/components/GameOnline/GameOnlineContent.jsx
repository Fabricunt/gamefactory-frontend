import styled from '@emotion/styled'

const GameOnlineContent = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  gap: 10px;
  height: 100%;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;
  }
`


export default GameOnlineContent