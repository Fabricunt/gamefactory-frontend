import styled from '@emotion/styled'

const GalleryTabsStackItemTitle = styled.span`
  letter-spacing: 2px;
  text-transform: uppercase;
  white-space: nowrap;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 12px;
  }

  ${({ theme }) => theme.breakpoints.between('sm', 'md')} {
    font-size: 16px;
  }

  ${({ theme }) => theme.breakpoints.between('md', 'lg')} {
    font-size: 20px;
  }

  ${({ theme }) => theme.breakpoints.between('lg', 'xl')} {
    font-size: 26px;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    font-size: 40px;
  }
`

export default GalleryTabsStackItemTitle
