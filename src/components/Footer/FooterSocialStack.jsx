import styled from '@emotion/styled'

const FooterSocialStack = styled.div`
  display: flex;
  color: ${({ theme }) => theme.palette.black};
  justify-content: space-between;

  ${({ theme }) => theme.breakpoints.down('md')} {
    max-width: auto;
  }

  ${({ theme }) => theme.breakpoints.between('md', '2xl')} {
    max-width: 40%;
  }

  ${({ theme }) => theme.breakpoints.up('2xl')} {
    max-width: 50%;
  }
`

export default FooterSocialStack
