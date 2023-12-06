import styled from '@emotion/styled'

const PortfolioItemOuter = styled.div`
  display: flex;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
  }
  ${({ theme }) => theme.breakpoints.between('md', 'lg')} {
    width: 50%;
  }
  ${({ theme }) => theme.breakpoints.between('lg', 'xl')} {
    width: 33.3%;
  }
  ${({ theme }) => theme.breakpoints.up('2xl')} {
    width: 25%;
  }
`

export default PortfolioItemOuter
