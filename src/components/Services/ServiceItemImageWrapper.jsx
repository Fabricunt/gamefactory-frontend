import styled from '@emotion/styled'

const ServiceItemImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.orange[400]};
  color: ${({ theme }) => theme.palette.white};
  margin-bottom: 20px;
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 150px;
    height: 150px;
  }

  ${({ theme }) => theme.breakpoints.up('sm')} {
    width: 200px;
    height: 200px;
  }
`

export default ServiceItemImageWrapper
