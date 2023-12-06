import styled from '@emotion/styled'
import { css } from '@emotion/react'

const dynamicStyles = ({ isOpen }) => css`
  color: ${isOpen ? 'orange.500' : 'gray.700'};
`

const HeaderDropdownMenuButton = styled.button`
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: ${({ theme }) => theme.palette.gray[700]};
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: normal;
  background-color: transparent !important;
  outline: 0px solid transparent !important;
  box-shadow: none;
  transition: all 250ms;
  icon-spacing: 5px;
  white-space: nowrap;

  &:active {
    background-color: transparent;
  }
  &:focus {
    box-shadow: none;
  }

  ${({ theme }) => theme.breakpoints.down('xl')} {
    height: min-content;
    justify-content: space-between;
    padding-left: 16px;
    padding-right: 16px;
    width: 100%;
    font-size: 14px;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    height: 100%;
    justify-content: center;
    padding-left: 10px;
    padding-right: 10px;
    width: auto;
    font-size: 24px;
  }

  ${dynamicStyles}
`

export default HeaderDropdownMenuButton
