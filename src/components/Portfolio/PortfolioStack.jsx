import styled from '@emotion/styled'
import { css } from '@emotion/react'

const dynamicStyles = ({ buttonLink }) => css`
  justify-content: ${buttonLink === null || buttonLink === undefined || buttonLink === ''
    ? 'start'
    : 'center'};
  grid-column-gap: ${buttonLink === null || buttonLink === undefined || buttonLink === ''
    ? '0'
    : '70px'};
`

const PortfolioStack = styled.div`
  max-width: 1200px;
  width: 100%;
  flex-wrap: wrap;
  display: flex;

  @keyframes changedBordersIn {
    0% {
      border-radius: 54% 46% 55% 45%/56% 50% 50% 44%;
    }
    25% {
      border-radius: 45% 55%;
    }
    50% {
      border-radius: 36% 24% 31% 28%/29% 30% 18% 24%;
    }
    75% {
      border-radius: 20% 15% 11% 5%/12% 20% 18% 9%;
    }
    to {
      border-radius: 0% 0% 0% 0%/0% 0% 0% 0%;
    }
  }

  @keyframes changedBordersOut {
    0% {
      border-radius: 54% 46% 55% 45%/56% 50% 50% 44%;
    }
    25% {
      border-radius: 45% 55%;
    }
    50% {
      border-radius: 36% 24% 31% 28%/29% 30% 18% 24%;
    }
    75% {
      border-radius: 20% 15% 11% 5%/12% 20% 18% 9%;
    }
    to {
      border-radius: 0% 0% 0% 0%/0% 0% 0% 0%;
    }
  }

  @keyframes morphBorders {
    0% {
      border-radius: 54% 46% 55% 45%/56% 50% 50% 44%;
    }
    25% {
      border-radius: 45% 55%;
    }
    50% {
      border-radius: 54% 46% 55% 45%/56% 50% 50% 44%;
    }
    75% {
      border-radius: 52% 48% 40% 60%/58% 56% 44% 42%;
    }
    to {
      border-radius: 44% 56% 60% 40%/49% 55% 45% 51%;
    }
  }

  @keyframes cursorBorders {
    0% {
      border-radius: 54% 46% 55% 45%/56% 50% 50% 44%;
      opacity: 1;
    }
    25% {
      border-radius: 45% 55%;
      opacity: 0.8;
    }
    50% {
      border-radius: 46% 54% 45% 56%/ 45% 55% 65% 35%;
      opacity: 0.9;
    }
    75% {
      border-radius: 54% 46% 55% 45%/56% 50% 50% 44%;
      opacity: 0.8;
    }
    to {
      border-radius: 45% 55%;
      opacity: 0.9;
    }
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-row-gap: 40px;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    grid-row-gap: 50px;
  }

  ${dynamicStyles}
`

export default PortfolioStack
