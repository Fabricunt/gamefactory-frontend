import styled from '@emotion/styled'

const TeamSliderItemExperienceItemValue = styled.span`
  line-height: 1.2;
  padding-bottom: 4px;
  letter-spacing: 2px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 15px;
  }

  ${({ theme }) => theme.breakpoints.between('md', 'lg')} {
    font-size: 20px;
  }

  ${({ theme }) => theme.breakpoints.between('lg', 'xl')} {
    font-size: 36px;
  }

  ${({ theme }) => theme.breakpoints.between('xl', '2xl')} {
    font-size: 40px;
  }

  ${({ theme }) => theme.breakpoints.up('2xl')} {
    font-size: 45px;
  }
`
export default TeamSliderItemExperienceItemValue
