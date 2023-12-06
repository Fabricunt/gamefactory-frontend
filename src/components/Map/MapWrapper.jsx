import styled from '@emotion/styled'

const MapWrapper = styled.section`
  max-width: 1920px;
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 0;

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding-bottom: 120%;
  }

  ${({ theme }) => theme.breakpoints.between('md', 'xl')} {
    padding-bottom: 60%;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    padding-bottom: 40%;
  }
`

/*  ratio={[3 / 4, 1 / 1, 16 / 9, 25 / 9, 25 / 9]}  */

export default MapWrapper
