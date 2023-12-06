import { css } from '@emotion/react'
import styled from '@emotion/styled'

const dynamicStyle = ({ variant, theme }) => css`
  ${variant === 'on'
    ? `
    position: fixed;
    z-index: 3;
    background-color: ${theme.palette.orange[100]};
    border-radius: ${theme.borderRadius.small};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;

    &:hover {
      background-color: ${theme.palette.orange[200]};
    }

    ${theme.breakpoints.down('md')} {
      bottom: 25px;
      right: 25px;
    }

    ${theme.breakpoints.up('md')} {
      bottom: 50px;
      right: 50px;
    }

    &:before,
    &:after {
      display: block;
      width: 15px;
      height: 3px;
      content: "";
      border-top: 3px solid ${theme.palette.white};
      border-right: 3px solid ${theme.palette.white};
      border-radius: 2px;
      transition-duration: 0.2s;
      position: absolute;
      top: 18px;
    }

    &:before {
      transform: rotate(45deg);
      right: 8px;
    }

    &:after {
      transform: rotate(-45deg);
      left: 8px;
    }
  `
    : ''}
`

const BackUpButtonContent = styled.button`
  ${dynamicStyle}
`

export default BackUpButtonContent
