import styled from '@emotion/styled'

const Page404Text = styled.span`
  display: block;
  text-align: center;

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 30px;
    margin-bottom: 15px;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    font-size: 40px;
    margin-bottom: 30px;
  }
`

export default Page404Text
