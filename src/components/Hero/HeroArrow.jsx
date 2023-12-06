import styled from '@emotion/styled'
import { css } from '@emotion/react'

const dynamicStyles = ({ theme, align, variant }) => css`
  ${align === 'left'
    ? `
transform: rotate(-45deg);`
    : `
transform: rotate(135deg);`}

  ${variant === 'mobile' ? `
    ${theme.breakpoints.down('md')}{
       ${align === 'left' ? `
        left: 10px;
        `
          : `
        left: auto;
        right: 10px;
        `
  }
       
       &::before {
        width: 25px;
        height: 25px;
       }
    }
  
    ${theme.breakpoints.between('md','xl')} {
       ${align === 'left' ? `
        left: 30px;
        `
        : `
        left: auto;
        right: 30px;
        `
       }
       
       &::before {
        width: 35px;
        height: 35px;
       }
    }

    ${theme.breakpoints.down('xl')}{
       position: absolute;
       top: 50%;
       z-index: 3;
    }

    ${theme.breakpoints.up('xl')} {
       display: none;
    }
  ` : `
    position: relative;
    &::before {
        width: 15px;
        height: 15px;
    }`}
`

const HeroArrow = styled.span`
  display: flex;
  padding: 15px;
  cursor: pointer;

  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;

    border-top: 2px solid ${({ theme }) => theme.palette.white};
    border-left: 2px solid ${({ theme }) => theme.palette.white};
  }
  ${dynamicStyles}
`

export default HeroArrow
