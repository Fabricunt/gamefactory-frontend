import styled from '@emotion/styled'

const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;

  ${({ theme }) => theme.breakpoints.down('xl')} {
    padding-bottom: 56%;
  }
  ${({ theme }) => theme.breakpoints.up('xl')} {
    padding-bottom: 44%;
  }
`

export default HeroWrapper
