import styled from '@emotion/styled'

const TeamSliderItemText = styled.p`
  line-height: 1.13;

  ${({ theme }) => theme.breakpoints.down('md')} {
    fontsize: 10px;
    margin-bottom: 10px;
  }

  ${({ theme }) => theme.breakpoints.between('md', 'lg')} {
    fontsize: 14px;
    margin-bottom: 15px;
  }

  ${({ theme }) => theme.breakpoints.between('lg', 'xl')} {
    fontsize: 18px;
    margin-bottom: 20px;
  }

  ${({ theme }) => theme.breakpoints.down('xl')} {
    padding-right: 5px;
    padding-left: 5px;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    padding-right: 65px;
    padding-left: 0;
  }

  ${({ theme }) => theme.breakpoints.between('xl', '2xl')} {
    fontsize: 20px;
    margin-bottom: 25px;
  }

  ${({ theme }) => theme.breakpoints.up('2xl')} {
    fontsize: 22px;
    margin-bottom: 30px;
  }
`

export default TeamSliderItemText
