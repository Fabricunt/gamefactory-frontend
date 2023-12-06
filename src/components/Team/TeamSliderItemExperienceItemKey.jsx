import styled from '@emotion/styled'

const TeamSliderItemExperienceItemKey = styled.span`
  line-height: 1.2;
  letter-spacing: 1.1px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 10px;
  }

  ${({ theme }) => theme.breakpoints.between('md', 'lg')} {
    font-size: 15px;
  }

  ${({ theme }) => theme.breakpoints.between('lg', '2xl')} {
    font-size: 16px;
  }

  ${({ theme }) => theme.breakpoints.up('2xl')} {
    font-size: 20px;
  }
`
export default TeamSliderItemExperienceItemKey
