import styled from '@emotion/styled'

const HamburgerMenuStack = styled.div`
  display: flex;
  spacing: 0;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  ${({ theme }) => theme.breakpoints.down('xl')} {
    flex-direction: column;
    overflow-y: scroll;
    padding-bottom: 200px;
    align-items: inherit;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    flex-direction: row;
    overflow-y: inherit;
    padding-bottom: 0;
    align-items: center;
  }
`

export default HamburgerMenuStack
