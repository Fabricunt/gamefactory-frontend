import styled from '@emotion/styled'
import { css } from '@emotion/react'

const dynamicStyles = ({ isOpen }) => css`
  &:before {
    pointer-events: ${isOpen ? 'all' : 'none'};
  }
`

const HeaderDropdownMenuWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  filter: blur(0);

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 80px;
    top: 100%;
  }

  ${({ theme }) => theme.breakpoints.down('xl')} {
    flex-direction: column;

    border-bottom: 0.5px solid #d1d1d1;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    border-bottom: none;
  }

  ${dynamicStyles}
`

export default HeaderDropdownMenuWrapper
