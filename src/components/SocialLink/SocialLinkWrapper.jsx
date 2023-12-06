import styled from '@emotion/styled'
import { css } from '@emotion/react'

const dynamicStyles = ({ theme, needCircle, hoverColor, color, variant = 'default' }) => css`
  color: ${color};

  &:hover {
    background-color: ${needCircle ? color : 'transparent'};
    ${hoverColor ? `color: ${hoverColor}` : ''};
  }

  ${variant === 'footer' &&
  `
    height: 30px;
    width: 30px;


    ${theme.breakpoints.down('md')} {
        &:not(:last-child) {
            margin-right: 25px;
        }
    }

    ${theme.breakpoints.between('md', 'xl')} {
        &:not(:last-child) {
            margin-right: 30px;
        }
    }

    ${theme.breakpoints.up('xl')} {
        &:not(:last-child) {
            margin-right: 35px;
        }
    }`}

  ${variant === 'default' &&
  `
    &:not(:last-child) {
        margin-right: 50px;
    }

    ${theme.breakpoints.down('md')} {
        height: 35px;
        width: 35px;
    }

    ${theme.breakpoints.between('md', 'xl')} {
        height: 35px;
        width: 35px;
    }

    ${theme.breakpoints.up('xl')} {
        height: 60px;
        width: 60px;
    }`}


    ${variant === 'map' &&
  `
    margin-right: 0;
    height: max-content;

    ${theme.breakpoints.down('md')} {
        width: 13px;
    }

    ${theme.breakpoints.between('md', 'xl')} {
        width: 17px;
    }

    ${theme.breakpoints.up('xl')} {
        width: 25px;
    }`}
`

const SocialLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  transition: 0.5s;

  ${dynamicStyles}
`

export default SocialLinkWrapper
