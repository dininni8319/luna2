import { ChangeEvent, FormEvent } from 'react'
import { PageWrapper } from '@/style/globalWrapper'
import { Title } from '@/style/globalTitle'
import { Flex } from '@/style/globalLayout'
import { Input } from '@/style/globalInput'
import { Button } from '@/style/globalButton'
import styled from 'styled-components'
import { rem } from 'polished'
import { useAppDispatch, useAppSelector } from '@/hooks/dispatch-selector-hooks'
import { onChange, touch } from '@/store/slices/input'
import { IInput } from '@/interfaces'
import { VALIDATOR_EMAIL } from '@/utilities/validators'
import { sendEmail } from '@/store/slices/email'

export const AuthButton = styled(Button)`
    color: white;
    width: ${rem('200px')};
    height: ${rem('35px')};
    text-transform: uppercase;
    font-weight: normal;
    font-size: 14px;
    border-radius: ${rem('30px')};
`

const Register = () => {
    const dispatch = useAppDispatch()
    const { value, isValid } = useAppSelector((state: IInput) => state.input)
    console.log('🚀 ~ file: Register.tsx:28 ~ Register ~ value:', value)

    const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(
            onChange({
                validators: [VALIDATOR_EMAIL()],
                val: event.target.value
            })
        )
    }
    const handleTouch = () => {
        dispatch(touch())
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(sendEmail(value))
    }

    return (
        <PageWrapper>
            <form onSubmit={handleSubmit}>
                <Flex justify="center" padding="2rem 0">
                    <Title>registration</Title>
                </Flex>
                <Flex justify="center" padding="2rem 0">
                    <Input
                        id="email"
                        value={value}
                        onChange={handleEmail}
                        placeholder="E-mail address"
                        onBlur={handleTouch}
                    />
                </Flex>
                <Flex justify="center" padding="2rem 0">
                    <AuthButton desabled={!isValid}>Register</AuthButton>
                </Flex>
            </form>
        </PageWrapper>
    )
}

export default Register
