import styled from '@emotion/styled'

const TeamSliderItemSocials = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-bottom: 8px;
  }

  ${({ theme }) => theme.breakpoints.between('md', 'lg')} {
    margin-bottom: 16px;
  }

  ${({ theme }) => theme.breakpoints.between('lg', '2xl')} {
    margin-bottom: 20px;
  }

  ${({ theme }) => theme.breakpoints.up('2xl')} {
    margin-bottom: 25px;
  }
`

export default TeamSliderItemSocials
