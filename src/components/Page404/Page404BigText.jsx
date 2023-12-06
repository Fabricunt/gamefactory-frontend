import styled from '@emotion/styled'

const Page404BigText = styled.div`
  user-select: none;
  color: ${({ theme }) => theme.palette.orange[400]};

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 120px;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    font-size: 200px;
  }
`

export default Page404BigText
