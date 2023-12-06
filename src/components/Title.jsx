import styled from '@emotion/styled'

const Title = styled.h1`
  padding-bottom: 0;
  text-transform: uppercase;
  font-weight: normal;
  text-align: center;
  letter-spacing: 0.06em;

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 20px;
  }

  ${({ theme }) => theme.breakpoints.between('md', 'xl')} {
    font-size: 34px;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    font-size: 40px;
  }
`
export default Title
