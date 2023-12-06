import styled from '@emotion/styled'

const Page404Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.down('md')} {
    min-height: calc(100vh - 150px);
  }
  ${({ theme }) => theme.breakpoints.between('md', 'xl')} {
    min-height: calc(100vh - 220px);
  }
  ${({ theme }) => theme.breakpoints.up('xl')} {
    min-height: calc(100vh - 280px);
  }
`

export default Page404Wrapper
