import styled from '@emotion/styled'
import { css } from '@emotion/react'

const dynamicStyles = ({ order = 'textFirst' }) => css`
  ${order === 'imageFirst' ? `
      flex-direction: column-reverse;
      justify-content: flex-end;
      ` : ''};

  ${order === 'textFirst' ? `
    flex-direction: column;
    ` : ''}
`

const ArticleCard = styled.div`
  display: flex;
  height: 100%;

  ${({ theme }) => theme.breakpoints.down('md')} {
  }

  ${({ theme }) => theme.breakpoints.down('xl')} {
    gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    gap: 40px;
  }

  ${dynamicStyles}
`

export default ArticleCard
