import styled from '@emotion/styled'

const PortfolioItemTitle = styled.span`
  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 18px;
  }
  ${({ theme }) => theme.breakpoints.up('md')} {
    font-size: 26px;
  }
`

export default PortfolioItemTitle
