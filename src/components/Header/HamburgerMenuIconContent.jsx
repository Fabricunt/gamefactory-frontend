import styled from '@emotion/styled'
import { css } from '@emotion/react'

const dynamicStyles = ({ theme, menuOpened }) => css`
  background-color: ${menuOpened ? 'transparent' : theme.palette.orange[400]};

  &:after {
    transform: ${menuOpened ? 'rotate(-45deg)' : 'rotate(0deg)'};
    bottom: ${menuOpened ? '0' : '-7px'};
  }

  &:before {
    transform: ${menuOpened ? 'rotate(45deg)' : 'rotate(0deg)'};
    top: ${menuOpened ? '0' : '-7px'};
  }
`

const HamburgerMenuIconContent = styled.div`
  width: 100%;
  height: 3px;
  transition: 0.3s;
  position: relative;
  background-color: ${({ theme }) => theme.palette.orange[400]};

  &:after,
  &:before {
    transition: 0.3s;
    content: '';
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.palette.orange[400]};
    position: absolute;
  }

  ${dynamicStyles}
`

export default HamburgerMenuIconContent
