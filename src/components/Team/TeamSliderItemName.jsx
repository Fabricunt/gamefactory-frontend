import styled from '@emotion/styled'

const TeamSliderItemName = styled.span`
  line-height: 1.2;
  letter-spacing: 2.2px;
  margin-bottom: 12px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 13px;
  }

  ${({ theme }) => theme.breakpoints.between('md', 'lg')} {
    font-size: 16px;
  }

  ${({ theme }) => theme.breakpoints.between('lg', 'xl')} {
    font-size: 20px;
  }

  ${({ theme }) => theme.breakpoints.between('xl', '2xl')} {
    font-size: 24px;
  }

  ${({ theme }) => theme.breakpoints.up('2xl')} {
    font-size: 36px;
  }
`

export default TeamSliderItemName
