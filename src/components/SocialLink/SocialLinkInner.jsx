import styled from '@emotion/styled'
import { css } from '@emotion/react'

const dynamicStyles = ({ theme, variant = 'default' }) => css`
  ${variant === 'footer' &&
  `
    width: 30px;
    height: 30px;
`}

  ${variant === 'default' &&
  `
    ${theme.breakpoints.down('md')} {
        width: 20px;
        height: 20px;
    }

    ${theme.breakpoints.between('md', 'xl')} {
        width: 20px;
        height: 20px;
    }

    ${theme.breakpoints.up('xl')} {
        width: 40px;
        height: 40px;
    }
`}

${variant === 'map' &&
  `
    ${theme.breakpoints.down('md')} {
        width: 13px;
        height: 100%;
    }

    ${theme.breakpoints.between('md', 'xl')} {
        width: 17px;
        height: 100%;
    }

    ${theme.breakpoints.up('xl')} {
        width: 25px;
        height: 25px;
    }
`}
`

const SocialLinkInner = styled.div`
  object-fit: cover;

  ${dynamicStyles}
`

export default SocialLinkInner
