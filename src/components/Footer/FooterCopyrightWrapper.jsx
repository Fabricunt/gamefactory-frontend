import styled from '@emotion/styled'

const FooterCopyrightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: auto;
  letter-spacing: 1px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 9px;
  }

  ${({ theme }) => theme.breakpoints.between('md', 'xl')} {
    font-size: 14px;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    font-size: 18px;
  }
`

export default FooterCopyrightWrapper
