import { ChangeEvent, FormEvent, useEffect } from 'react'
import { PageWrapper, Flex } from '@/style/globalWrapper'
import { Input } from '@/style/globalInput'
import { Title } from '@/style/globalTitle'
import { ErrorMessage, AuthButton } from './style'
import { useAppDispatch, useAppSelector } from '@/hooks/dispatch-selector-hooks'
import { onChange, touch } from '@/store/slices/input'
import { IInput } from '@/interfaces'
import { VALIDATOR_EMAIL } from '@/utilities/validators'
import { sendEmail } from '@/store/slices/email'
import { Success } from '@/components'

const Register = () => {
    const dispatch = useAppDispatch()
    const { value, isValid } = useAppSelector((state: IInput) => state.input)
    const { isSuccess, message, loading } = useAppSelector(
        (state: IInput) => state.email
    )

    useEffect(() => {
        if (isSuccess) {
            let setUserEmail = localStorage.setItem('email', value)
        }
    }, [isSuccess])

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
        dispatch(sendEmail(value))``
    }

    return (
        <PageWrapper>
            <form onSubmit={handleSubmit}>
                <Flex justify="center" padding="2rem 0">
                    <Title>registration</Title>
                </Flex>
                <Flex padding="2rem 0" align="center">
                    {isSuccess ? (
                        <Success />
                    ) : (
                        <Flex smdirection="column" align="center">
                            <Input
                                id="email"
                                type="email"
                                value={value}
                                onChange={handleEmail}
                                placeholder="E-mail address"
                                onBlur={handleTouch}
                            />
                            {!isSuccess && (
                                <ErrorMessage>{message}</ErrorMessage>
                            )}
                        </Flex>
                    )}
                </Flex>

                {!isSuccess && (
                    <Flex justify="center" padding="2rem 0">
                        <AuthButton disabled={!isValid && !value}>
                            {loading ? 'Loading...' : 'Register'}
                        </AuthButton>
                    </Flex>
                )}
            </form>
        </PageWrapper>
    )
}

export default Register
