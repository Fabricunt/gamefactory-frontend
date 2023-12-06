import styled from '@emotion/styled'

const TextContent = styled.p`
  width: 100%;
  text-align: center;

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 18px;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    font-size: 24px;
  }

  & span {
    color: ${({ theme }) => theme.palette.orange[100]};
  }
`

export default TextContent
