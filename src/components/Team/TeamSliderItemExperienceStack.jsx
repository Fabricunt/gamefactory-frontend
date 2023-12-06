import styled from '@emotion/styled'

const TeamSliderItemExperienceStack = styled.div`
  align-items: baseline;
  display: flex;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-bottom: 10px;
  }

  ${({ theme }) => theme.breakpoints.between('md', 'lg')} {
    margin-bottom: 15px;
  }

  ${({ theme }) => theme.breakpoints.between('lg', 'xl')} {
    margin-bottom: 20px;
  }

  ${({ theme }) => theme.breakpoints.between('xl', '2xl')} {
    margin-bottom: 25px;
  }

  ${({ theme }) => theme.breakpoints.up('2xl')} {
    margin-bottom: 30px;
  }
`

export default TeamSliderItemExperienceStack
