import styled from '@emotion/styled'
import { css } from '@emotion/react'

const dynamicStyles = ({ theme, scrollTopPosition }) => css`
  ${theme.breakpoints.down('md')} {
    font-size: 12px;
  }

  ${scrollTopPosition < 200
    ? `
  ${theme.breakpoints.between('md', 'lg')} {
    font-size: 16px;
  }

  ${theme.breakpoints.between('lg', 'xl')} {
    font-size: 20px;
  }

  ${theme.breakpoints.between('xl', '2xl')} {
    font-size: 24px;
  }

  ${theme.breakpoints.up('2xl')} {
    font-size: 30px;
  }
  `
    : `
  ${theme.breakpoints.between('md', 'lg')} {
    font-size: 12px;
  }

  ${theme.breakpoints.between('lg', 'xl')} {
    font-size: 16px;
  }

  ${theme.breakpoints.between('xl', '2xl')} {
    font-size: 20px;
  }

  ${theme.breakpoints.up('2xl')} {
    font-size: 24px;
  }
`}
`

const LogoTitle = styled.span`
  white-space: nowrap;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.palette.orange[400]};

  ${({ theme }) => theme.breakpoints.down('md')} {
    display: none;
    margin-left: 5px;
  }
  ${({ theme }) => theme.breakpoints.between('md', 'xl')} {
    display: flex;
    margin-left: 8px;
  }
  ${({ theme }) => theme.breakpoints.up('xl')} {
    display: flex;
    margin-left: 17px;
  }

  ${dynamicStyles}
`

export default LogoTitle
