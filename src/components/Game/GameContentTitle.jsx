import styled from '@emotion/styled'
import Title from '../Title'

const GameContentTitle = styled(Title)`
  color: ${({ theme }) => theme.palette.orange[400]};

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-bottom: 20px;
  }

  ${({ theme }) => theme.breakpoints.between('md', 'lg')} {
    margin-bottom: 30px;
  }

  ${({ theme }) => theme.breakpoints.between('lg', '2xl')} {
    margin-bottom: 40px;
  }

  ${({ theme }) => theme.breakpoints.up('2xl')} {
    margin-bottom: 50px;
  }
`

export default GameContentTitle
