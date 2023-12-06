import styled from '@emotion/styled'
import Link from '../Link'

const TechnologiesSliderItemWrapper = styled(Link)`
  flex-direction: column;
  display: flex;
  text-align: center;
  align-items: center;
  transition: 0.3s;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 90px;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    width: 158px;
  }

  &:hover {
    color: ${({ theme }) => theme.palette.orange[400]};
  }
`

export default TechnologiesSliderItemWrapper
