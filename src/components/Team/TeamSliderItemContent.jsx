import styled from '@emotion/styled'

const TeamSliderItemContent = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding-top: 10px;
  }

  ${({ theme }) => theme.breakpoints.between('sm', 'md')} {
    padding-top: 15px;
  }

  ${({ theme }) => theme.breakpoints.between('md', 'xl')} {
    padding-top: 20px;
  }

  ${({ theme }) => theme.breakpoints.down('lg')} {
    align-items: center;
    width: 90%;
  }
  ${({ theme }) => theme.breakpoints.up('lg')} {
    width: 100%;
  }

  ${({ theme }) => theme.breakpoints.down('xl')} {
    padding-left: 0;
    align-items: center;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    padding-left: 77px;
    padding-top: 0;
    align-items: flex-start;
  }
`

export default TeamSliderItemContent
