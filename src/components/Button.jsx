import styled from '@emotion/styled'
import Link from './Link'

const StyledButton = styled.div`
  font-weight: 400;
  letter-spacing: 0.06em;
  margin: 0 auto;
  color: ${({ theme }) => theme.palette.black[700]};
  text-decoration-style: solid;
  text-decoration-line: underline;
  text-decoration-color: transparent;
  text-underline-offset: 5px;
  text-decoration-thickness: 1px;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.palette.orange[400]};
    text-decoration-color: ${({ theme }) => theme.palette.orange[400]};
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 16px;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    font-size: 27px;
  }
`

const Button = ({ handler, to, children, ...props }) =>
  to ? (
    <Link to={to} {...props}>
      <StyledButton as="span">{children}</StyledButton>
    </Link>
  ) : (
    <StyledButton onClick={handler} {...props}>
      {children}
    </StyledButton>
  )

export default Button
