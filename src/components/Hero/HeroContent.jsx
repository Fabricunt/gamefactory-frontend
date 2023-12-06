import styled from '@emotion/styled'

const HeroContent = styled.div`
  ${({ theme }) => theme.breakpoints.down('xl')} {
    display: none;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    max-width: 673px;
    z-index: 2;
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 30px;
    padding-bottom: 30px;
    width: 100%;
  }
`

export default HeroContent
