import styled from '@emotion/styled'

const GameContentDescription = styled.div`
  margin-bottom: 30px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 14px;
  }

  ${({ theme }) => theme.breakpoints.between('md', 'xl')} {
    font-size: 18px;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    font-size: 20px;
  }
`

export default GameContentDescription
