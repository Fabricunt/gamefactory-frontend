import { css } from '@emotion/react'

const reboot = (theme) => css`
  body {
    font-family: ${theme.typography.fontFamilyOrbitron} !important;
    & .mapboxgl-map {
      font-family: ${theme.typography.fontFamilyOrbitron} !important;
    }
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }

  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;

    ${theme.breakpoints.down('md')} {
      padding-top: 60px;
    }

    ${theme.breakpoints.between('md', 'xl')} {
      padding-top: 80px;
    }

    ${theme.breakpoints.up('xl')} {
      padding-top: 100px;
    }
  }
`

export default reboot
