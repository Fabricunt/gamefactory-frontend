import styled from '@emotion/styled'
import { css } from '@emotion/react'

const dynamicStyle = ({ theme, color, dark, disablePaddingBottom, smallPadding }) => css`
  background-color: ${(dark && color === 'gray' && theme.palette.gray[50]) ||
  (color === 'gray' && theme.palette.gray[10]) ||
  theme.palette.white};
  ${disablePaddingBottom ? 'padding-bottom: 0!important;' : ''};
  ${smallPadding ? 'padding: 30px 0!important;' : ''}
`

const SectionWrapper = styled.section`
  display: grid;

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding-top: 45px;
    gap: 45px;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    padding-top: 60px;
    gap: 60px;
  }

  ${dynamicStyle}
`

export default SectionWrapper
