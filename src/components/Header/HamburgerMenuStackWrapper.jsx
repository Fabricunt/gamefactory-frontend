import styled from '@emotion/styled'
import { css } from '@emotion/react'

const dynamicStyles = ({ menuOpened, theme }) => css`
  ${theme.breakpoints.down('xl')} {
    height: ${menuOpened ? '100vh' : '0'};
  }

  ${theme.breakpoints.up('xl')} {
    height:  auto;
  }
`

const HamburgerMenuStackWrapper = styled.div`
  width: 100%;
  top: 100%;
  left: 0;
  transition: 0.5s;

  ${({ theme }) => theme.breakpoints.down('xl')} {
    overflow: hidden;
    background-color: white;
    position: fixed;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    overflow: visible;
    background-color: transparent;
    position: static;
  }

  ${dynamicStyles}
`

export default HamburgerMenuStackWrapper
