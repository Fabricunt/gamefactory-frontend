import styled from '@emotion/styled'
import { css } from '@emotion/react'

const dynamicStyles = ({ theme, columnsSize = 'divideInHalf' }) => css`
  ${columnsSize === 'threeColumns' ? `
      ${theme.breakpoints.between('md', 'lg')}{
         grid-template-columns: 1fr;
      }
      
      ${theme.breakpoints.up('lg')}{
         grid-template-columns: repeat(3,1fr);
      }
   ` : ''};

  ${columnsSize === 'divideInHalf' ? `
      ${theme.breakpoints.up('lg')}{
         grid-template-columns: 1fr 1fr;
      }
   ` : ''};

  ${columnsSize === 'firstWide' ? `
      ${theme.breakpoints.up('lg')}{
         grid-template-columns: 65fr 35fr;
      }
   ` : ''};

  ${columnsSize === 'firstNarrow' ? `
      ${theme.breakpoints.up('lg')}{
         grid-template-columns: 35fr 65fr;
      }
   ` : ''};
`

const ArticleColumns = styled.div`
  display: grid;

  ${({ theme }) => theme.breakpoints.down('md')} {
    gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.between('md', 'lg')} {
    gap: 25px;
    grid-template-columns: 1fr 1fr;
  }

  ${({ theme }) => theme.breakpoints.between('md', '2xl')} {
    gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.up('2xl')} {
    gap: 40px;
  }

  ${dynamicStyles}
`

export default ArticleColumns
