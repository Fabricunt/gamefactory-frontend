import styled from '@emotion/styled'

const GameContentSocialStack = styled.div`
  display: flex;

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding-top: 15px;
    padding-bottom: 15px;
  }

  ${({ theme }) => theme.breakpoints.between('md', 'lg')} {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  ${({ theme }) => theme.breakpoints.up('lg')} {
    padding-top: 25px;
    padding-bottom: 25px;
  }
`

export default GameContentSocialStack
