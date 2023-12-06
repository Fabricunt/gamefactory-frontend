import styled from '@emotion/styled'

const TechnologiesSliderItemTitle = styled.span`
${({ theme }) => theme.breakpoints.down('md')}{
    font-size: 14px;
}

${({ theme }) => theme.breakpoints.up('md')}{
    font-size: 20px;   
}
`

export default TechnologiesSliderItemTitle
