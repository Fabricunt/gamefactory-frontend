import styled from '@emotion/styled'
import Image from '../Image'

const TechnologiesSliderItemImage = styled(Image)`
  ${({ theme }) => theme.breakpoints.down('md')} {
    height: 80px;
    width: 80px;
    margin-bottom: 10px;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    height: 159px;
    width: 159px;
    margin-bottom: 8px;
  }
`

export default TechnologiesSliderItemImage
