import styled from '@emotion/styled'

const GalleryTabsStackItem = styled.button`
  line-height: 1;
  max-width: 50%;
  padding: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration-style: solid;
  text-decoration-line: underline;
  text-underline-offset: 10px;
  text-decoration-thickness: 4px;
  transition: 0.5s;

  text-decoration-color: ${({ theme, active }) =>
    active ? theme.palette.orange[400] : 'transparent'};

  ${({ disabled, theme }) =>
    disabled
      ? ''
      : `&:hover {
      color: ${theme.palette.orange[400]};
    }`}
`

export default GalleryTabsStackItem
