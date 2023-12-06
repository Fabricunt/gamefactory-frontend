import styled from '@emotion/styled'

const AboutItemContent = styled.div`
  display: flex;
  transition: 0.5s;
  flex-direction: column;
  padding-left: 0;
  padding-top: 25px;
  align-items: center;
  width: 253px;

  ${({ theme }) => theme.breakpoints.down('lg')} {
    gap: 15px;
  }

  ${({ theme }) => theme.breakpoints.up('lg')} {
    gap: 20px;
  }
`

export default AboutItemContent
