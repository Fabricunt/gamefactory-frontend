import styled from '@emotion/styled'
import { css } from '@emotion/react'

const dynamicStyles = ({ mouseIn, animation }) => css`
  cursor: ${mouseIn ? 'none' : 'default'};
  animation: ${animation
    ? 'morphBorders 6s cubic-bezier(0.46, 0.03, 0.52, 0.96) alternate infinite'
    : 'changedBordersOut 1s cubic-bezier(0.46, 0.03, 0.52, 0.96) alternate-reverse forwards'};
`

const PortfolioItemImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 50%;
  position: relative;
  background-color: ${({ theme }) => theme.palette.orange[400]};
  color: ${({ theme }) => theme.palette.white};

  &:hover {
    animation: changedBordersIn 1s cubic-bezier(0.46, 0.03, 0.52, 0.96) alternate forwards;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 234px;
    height: 234px;
    margin-bottom: 20px;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    width: 247px;
    height: 247px;
    margin-bottom: 12px;
  }

  ${dynamicStyles}
`

export default PortfolioItemImageWrapper
