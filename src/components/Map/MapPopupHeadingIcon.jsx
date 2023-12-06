import styled from '@emotion/styled'

const MapPopupHeadingIcon = styled.div`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: auto;
  cursor: pointer;

  &:hover {
    &::after,
    &::before {
      background-color: ${({ theme }) => theme.palette.orange[400]};
    }
  }

  &::after,
  &::before {
    content: '';
    width: 20px;
    height: 2px;
    background-color: black;
    position: absolute;
    transition: 0.5s;
  }

  &::after {
    transform: rotate(45deg);
  }

  &::before {
    transform: rotate(-45deg);
  }
`

export default MapPopupHeadingIcon
