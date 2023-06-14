import { ChangeEvent } from 'react'
import { PageWrapper } from '@/style/globalWrapper'
import { Title } from '@/style/globalTitle'
import { Flex } from '@/style/globalLayout'
import { Input } from '@/style/globalInput'
import { Button } from '@/style/globalButton'
import styled from 'styled-components'
import { rem } from 'polished'
import { useAppDispatch, useAppSelector } from '@/hooks/dispatch-selector-hooks'
import { onChange } from '@/store/slices/input'
import { IInput } from '@/interfaces'

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
    const { value } = useAppSelector((state: IInput) => state.input)

    const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(
            onChange({
                validators: true,
                val: event.target.value
            })
        )
    }

    return (
        <PageWrapper>
            <Flex justify="center" padding="2rem 0">
                <Title>registration</Title>
            </Flex>
            <Flex justify="center" padding="2rem 0">
                <Input
                    value={value}
                    onChange={handleEmail}
                    placeholder="E-mail address"
                />
            </Flex>
            <Flex justify="center" padding="2rem 0">
                <AuthButton>Register</AuthButton>
            </Flex>
        </PageWrapper>
    )
}

export default Register
