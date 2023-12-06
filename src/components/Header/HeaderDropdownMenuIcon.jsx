import styled from '@emotion/styled'
import { css } from '@emotion/react'

const dynamicStyles = ({ theme, isOpen }) => css`
  ${theme.breakpoints.down('xl')} {
    transform: ${isOpen ? 'rotate(0deg)' : 'rotate(-90deg)'};
  }

  &:after,
  &:before {
    background-color: ${isOpen ? theme.palette.orange[400] : theme.palette.gray[200]};
  }
`

const HeaderDropdownMenuIcon = styled.span`
  width: 17px;
  height: 17px;
  position: relative;
  transition: all 250ms;
  margin-bottom: 2px;

  &:after,
  &:before {
    transition: all 250ms;
    content: '';
    position: absolute;
    width: 8px;
    height: 2px;
    bottom: 6px;
  }

  &:after {
    right: 2px;
    transform: rotate(135deg);
  }

  &:before {
    left: 2px;
    transform: rotate(45deg);
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    transform: rotate(0);
  }

  ${dynamicStyles}
`

export default HeaderDropdownMenuIcon
