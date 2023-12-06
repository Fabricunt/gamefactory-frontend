import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Link from '../Link'

const dynamicStyles = ({ theme, inView }) => css`
  color: ${inView ? theme.palette.orange[400] : 'inherit'};
`

const SpyLinkItem = styled(Link)`
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 16px;
  font-size: 24px;
  padding-bottom: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;

  height: min-content;
  outline: 0 solid transparent !important;
  border-bottom: none;
  margin-top: 0;
  width: 100%;
  transition: 0.3s;
  white-space: nowrap;

  ${({ theme }) => theme.breakpoints.down('xl')} {
    font-size: 14px;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    font-size: 24px;
  }

  &:hover {
    color: ${({ theme }) => theme.palette.orange[50]};
  }

  ${dynamicStyles}
`

export default SpyLinkItem
