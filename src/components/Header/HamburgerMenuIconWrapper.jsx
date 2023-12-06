import styled from '@emotion/styled'

const HamburgerMenuIconWrapper = styled.div`
  height: 24px;
  width: 24px;
  padding: 10px;
  box-sizing: content-box;
  cursor: pointer;
  order: 1;

  ${({ theme }) => theme.breakpoints.down('xl')} {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    display: none;
  }
`

export default HamburgerMenuIconWrapper
