import styled from '@emotion/styled'

const MapPopupFormSuccess = styled.div`
  display: inline-block;
  width: 8em;
  height: 8em;
  font-size: 12px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.palette.orange[400]};
  background-color: #fff;
  position: relative;
  overflow: hidden;
  transform-origin: center;
  transform: scale(1);

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    height: 4px;
    background-color: ${({ theme }) => theme.palette.orange[400]};
    border-radius: 10px;
  }

  &::before {
    width: 2.4em;
    top: 4.3em;
    left: 1.4em;
    transform: rotate(45deg);
  }

  &::after {
    width: 4em;
    transform: rotate(-45deg);
    top: 3.7em;
    left: 2.75em;
  }
`

export default MapPopupFormSuccess
