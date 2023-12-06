import styled from '@emotion/styled'

const GameContentListItem = styled.div`
  display: flex;
  grid-column-gap: 10px;
  flex-wrap: wrap;
  grid-row-gap: 5px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 13px;
    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }

  ${({ theme }) => theme.breakpoints.between('md', 'xl')} {
    font-size: 17px;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    font-size: 19px;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`

export default GameContentListItem
