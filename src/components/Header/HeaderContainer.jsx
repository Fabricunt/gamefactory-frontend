import styled from '@emotion/styled'
import { css } from '@emotion/react'

const dynamicStyles = ({ theme, scrollTopPosition }) => css`
  ${theme.breakpoints.up('xl')} {
    height: ${scrollTopPosition > 200 ? '70px' : '100px'};
  }
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;

  ${({ theme }) => theme.breakpoints.down('md')} {
    height: 60px;
    padding-right: 15px;
    padding-left: 15px;
  }

  ${({ theme }) => theme.breakpoints.between('md', 'xl')} {
    height: 80px;
    padding-right: 25px;
    padding-left: 25px;
  }

  ${({ theme }) => theme.breakpoints.between('xl', '2xl')} {
    padding-right: 30px;
    padding-left: 30px;
  }

  ${({ theme }) => theme.breakpoints.up('2xl')} {
    padding-right: 40px;
    padding-left: 40px;
  }

  ${dynamicStyles}
`

export default HeaderContainer
