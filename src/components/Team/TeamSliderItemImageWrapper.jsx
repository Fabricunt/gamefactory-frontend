import styled from '@emotion/styled'

const TeamSliderItemImageWrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.palette.orange[400]};
  flex-shrink: 0;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 130px;
    height: 130px;
    margin-top: 8px;
  }

  ${({ theme }) => theme.breakpoints.between('sm', 'md')} {
    width: 170px;
    height: 170px;
    margin-top: 16px;
  }

  ${({ theme }) => theme.breakpoints.between('md', 'lg')} {
    width: 200px;
    height: 200px;
    margin-top: 20px;
  }

  ${({ theme }) => theme.breakpoints.between('lg', 'xl')} {
    width: 300px;
    height: 300px;
    margin-top: 20px;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    width: 423px;
    height: 423px;
    margin-top: 0;
  }
`

export default TeamSliderItemImageWrapper
