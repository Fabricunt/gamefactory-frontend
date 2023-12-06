import styled from '@emotion/styled'

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1920px;
  align-items: center;
  width: 100%;
  margin: auto auto 0;

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: 16px 20px;
  }

  ${({ theme }) => theme.breakpoints.between('md', 'xl')} {
    padding: 16px 30px;
  }

  ${({ theme }) => theme.breakpoints.between('xl', '2xl')} {
    padding: 16px 50px;
  }

  ${({ theme }) => theme.breakpoints.up('2xl')} {
    padding: 16px 100px;
  }
`

export default FooterWrapper
