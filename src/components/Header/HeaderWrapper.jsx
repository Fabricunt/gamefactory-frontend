import styled from '@emotion/styled'
import { css } from '@emotion/react'

const dynamicStyles = ({ theme, scrollTopPosition, headerTopPos }) => css`
  transform: translateY(${headerTopPos}px);
  box-shadow: ${scrollTopPosition > 200
    ? '0 .375rem .875rem 0 rgba(0, 0, 0, .1), 0 .875rem 1.75rem .4375rem rgba(2,2,3,.1)'
    : 'none'};

  ${theme.breakpoints.up('xl')} {
    height: ${scrollTopPosition > 200 ? '70px' : '100px'};
  }
`

const HeaderWrapper = styled.div`
  background-color: rgba(255, 255, 255);
  transition: 0.3s;
  position: fixed;
  width: 100%;
  z-index: 10;
  top: 0;

  ${({ theme }) => theme.breakpoints.down('md')} {
    height: 60px;
  }

  ${({ theme }) => theme.breakpoints.between('md', 'xl')} {
    height: 80px;
  }

  ${dynamicStyles}
`

export default HeaderWrapper
