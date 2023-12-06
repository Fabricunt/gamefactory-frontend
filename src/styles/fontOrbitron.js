import { css } from '@emotion/react'

const fontUrl = '/fonts/Orbitron/'

const fontOrbitron = css`
  @font-face {
    font-family: 'Orbitron';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Orbitron-Bold'), url('${fontUrl}Orbitron-Bold.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Orbitron';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Orbitron-Regular'), url('${fontUrl}Orbitron-Regular.woff2') format('woff2');
  }
`

export default fontOrbitron
