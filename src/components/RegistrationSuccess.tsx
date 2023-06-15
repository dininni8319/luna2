import styled from 'styled-components'

export const SuccessTitle = styled.h3`
    text-align: center;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    width: 40%;
`

const RegistrationSuccess = () => {
    return (
        <SuccessTitle>
            Thanks for your registration. Our hard working monkeys are preparing
            a digital message called E-Mail that will be sent to you soon. Since
            monkeys arent good in writing the message could end up in you junk
            folder. Our apologies for any inconvienience.thank for
        </SuccessTitle>
    )
}

export default RegistrationSuccess
