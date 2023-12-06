import styled from '@emotion/styled'
import Link from '../Link'

const Page404Link = styled(Link)`
  text-transform: uppercase;
  padding: 15px;
  text-align: center;
  display: block;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 16px;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    font-size: 24px;
  }
`

export default Page404Link
