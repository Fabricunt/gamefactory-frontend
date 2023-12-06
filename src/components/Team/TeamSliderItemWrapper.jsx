import styled from '@emotion/styled'

const TeamSliderItemWrapper = styled.div`
  min-width: 290px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down('xl')} {
    max-width: 600px;
    flex-direction: column;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    max-width: 1048px;
    flex-direction: row;
  }
`

export default TeamSliderItemWrapper
