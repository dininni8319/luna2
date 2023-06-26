import { FormEvent, useContext } from 'react'
import { PageWrapper, Flex } from '@/style/globalWrapper'
import { Title } from '@/style/globalTitle'
import { AuthInput } from '@/components'
import { AuthButton } from '@/pages/register/style'
import {
    VALIDATOR_MINLENGTH,
    VALIDATOR_EMAIL,
    validate
} from '@/utilities/validators'
import { useForm } from '@/hooks/form-hook'
import { loginInitialState } from '@/store/reducers/initialStates'
import { useAppDispatch, useAppSelector } from '@/hooks/dispatch-selector-hooks'
import { signIn } from '@/store/slices/login'
import { TLogin } from '@/interfaces/interfaces'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '@/context/auth-context'

let email = localStorage.getItem('email')
const validEmail = email && validate(email, [VALIDATOR_EMAIL()])

const Login = () => {
    const [formState, inputHandler] = useForm(loginInitialState, false)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { login } = useContext(AuthContext)
    const { message, loading, user } = useAppSelector(
        (state) => state.login
        )
    const { inputs } = formState

    const formData: TLogin = {
        email: inputs.email.value,
        password: inputs.password.value
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        let expirationDate: any
        try {
            dispatch(signIn(formData))
        } catch (err) {
          console.log(err, 'error')
          return
        }
        login(user.token, user.email, user.name, expirationDate)
        localStorage.removeItem('email')
        navigate('/home')
    }

    return (
        <PageWrapper>
            <Flex>
                <Title>signin</Title>
            </Flex>

            <form onSubmit={handleSubmit}>
                <Flex padding="2rem 0" align="center" smdirection="column">
                    <AuthInput
                        id="email"
                        type="email"
                        initialValue={email || ''}
                        initialValid={validEmail || false}
                        placeholder="E-Mail address"
                        inputElement="input"
                        onInput={inputHandler}
                        validators={[VALIDATOR_EMAIL()]}
                    />
                    <AuthInput
                        id="password"
                        type="password"
                        placeholder="Password"
                        inputElement="input"
                        errorText="Password required"
                        onInput={inputHandler}
                        validators={[VALIDATOR_MINLENGTH(8)]}
                    />
                </Flex>
                {message && <span className="class-error">{message}</span>}
                <Flex justify="center" padding="2rem 0">
                    <AuthButton disabled={!formState.isValid}>
                        {loading ? 'Loading...' : 'Login'}
                    </AuthButton>
                </Flex>
            </form>
        </PageWrapper>
    )
}
export default Login
