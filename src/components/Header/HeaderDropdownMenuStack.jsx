import styled from '@emotion/styled'
import { css } from '@emotion/react'

const dynamicStyles = ({ theme, isOpen }) => css`
  pointer-events: ${isOpen ? 'all' : 'none'};
  transition: ${isOpen ? '.5s' : '.2s'};
  top: ${!isOpen ? '70px' : '90px'};

  ${theme.breakpoints.down('xl')} {
    padding: ${isOpen ? '0 30px 20px 30px' : '0 30px'};
    max-height: ${isOpen ? '240px' : '0'};
  }

  ${theme.breakpoints.up('xl')} {
    opacity: ${isOpen ? '1' : '0'};
  }
`

const HeaderDropdownMenuStack = styled.div`
  display: flex;
  z-index: 10;
  height: auto;
  align-items: flex-start;
  overflow: hidden;
  flex-direction: column;
  width: 100%;
  border-radius: 15px;
  display: flex;
  spacing: 0;
  background-color: rgba(255, 255, 255);

  ${({ theme }) => theme.breakpoints.down('xl')} {
    box-shadow: none;
    position: static;
    min-width: 100vw;
    opacity: 1;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    box-shadow: 0 0.375rem 1.875rem 0 rgba(0, 0, 0, 0.1),
      0 1.875rem 3.75rem 0.9375rem rgba(2, 2, 3, 0.1);
    position: absolute;
    min-width: min-content;
    padding: 20px;
    max-height: max-content;
  }

  ${dynamicStyles}
`

export default HeaderDropdownMenuStack
