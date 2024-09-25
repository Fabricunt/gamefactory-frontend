import styled from '@emotion/styled'

const TeamSliderItemRole = styled.span`
  line-height: 1.2;
  margin-bottom: 12px;
  letter-spacing: 1.8px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 10px;
  }

  ${({ theme }) => theme.breakpoints.between('md', 'lg')} {
    font-size: 14px;
  }

  ${({ theme }) => theme.breakpoints.between('lg', 'xl')} {
    font-size: 16px;
  }

  ${({ theme }) => theme.breakpoints.between('xl', '2xl')} {
    font-size: 20px;
  }

  ${({ theme }) => theme.breakpoints.up('2xl')} {
    font-size: 30px;
  }
`

export default TeamSliderItemRole
