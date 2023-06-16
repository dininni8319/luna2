import { FormEvent } from 'react'
import { Title } from '@/style/globalTitle'
import { PageWrapper, Flex } from '@/style/globalWrapper'
import { AuthInput } from '@/components'
import { AuthButton } from '@/pages/register/style'
import {
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE,
    VALIDATOR_MAXLENGTH,
    VALIDATOR_EMAIL,
    validate
} from '@/utilities/validators'
import { useForm } from '@/hooks/form-hook.ts'
import { userInitialState } from '@/store/reducers/initialStates'
import { useAppDispatch, useAppSelector } from '@/hooks/dispatch-selector-hooks'
import { completeRegistration } from '@/store/slices/createUser'

let email = localStorage.getItem('email')
const validEmail = email && validate(email, [VALIDATOR_EMAIL()])

const CreateUserProfile = () => {
    const [formState, inputHandler] = useForm(userInitialState, false)
    console.log(
        '🚀 ~ file: CreateUserProfile.tsx:22 ~ CreateUserProfile ~ formState:',
        formState
    )
    const dispatch = useAppDispatch()
    const { isSuccess, message, loading } = useAppSelector(
        (state) => state.register
    )
    const { inputs } = formState

    const formData = {
        email: inputs.email.value,
        name: inputs.name.value,
        location: inputs.location.value,
        password: inputs.password.value,
        password_repeat: inputs.password_repeat.value
    }
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(completeRegistration(formData))
    }

    return (
        <PageWrapper>
            <Flex>
                <Title>validation</Title>
            </Flex>

            <form onSubmit={handleSubmit}>
                <Flex padding="2rem 0" align="center" smdirection="column">
                    <Flex smdirection="row" align="center">
                        <AuthInput
                            id="email"
                            type="email"
                            initialValue={email}
                            initialValid={validEmail}
                            placeholder="E-Mail address"
                            disabled={true}
                            inputElement="input"
                            onInput={inputHandler}
                            validators={[VALIDATOR_EMAIL()]}
                        />
                        <AuthInput
                            id="code"
                            type="text"
                            placeholder="Validation code"
                            margin="0.50rem"
                            inputElement="input"
                            errorText="Code required and minimum length 8"
                            onInput={inputHandler}
                            validators={[
                                VALIDATOR_REQUIRE(),
                                VALIDATOR_MINLENGTH(8),
                                VALIDATOR_MAXLENGTH(8)
                            ]}
                        />
                    </Flex>
                    <Flex smdirection="row" align="center">
                        <AuthInput
                            id="name"
                            type="text"
                            placeholder="Username"
                            inputElement="input"
                            errorText="Username required"
                            onInput={inputHandler}
                            validators={[VALIDATOR_REQUIRE()]}
                        />
                        <AuthInput
                            id="location"
                            type="text"
                            placeholder="Location"
                            inputElement="input"
                            errorText="Location required"
                            onInput={inputHandler}
                            validators={[VALIDATOR_REQUIRE()]}
                        />
                    </Flex>
                    <Flex smdirection="row" align="center">
                        <AuthInput
                            id="password"
                            type="password"
                            placeholder="Password"
                            inputElement="input"
                            errorText="Password required"
                            onInput={inputHandler}
                            validators={[VALIDATOR_MINLENGTH(8)]}
                        />
                        <AuthInput
                            id="password_repeat"
                            type="password"
                            placeholder="Password Repeat"
                            margin="0.50rem"
                            inputElement="input"
                            errorText="Password repeat required"
                            onInput={inputHandler}
                            validators={[VALIDATOR_MINLENGTH(8)]}
                        />
                    </Flex>
                </Flex>
                {message && <span className="class-error">{message}</span>}
                <Flex justify="center" padding="2rem 0">
                    <AuthButton disabled={false}>
                        {loading ? 'Loading...' : 'Complete registration'}
                    </AuthButton>
                </Flex>
            </form>
        </PageWrapper>
    )
}

export default CreateUserProfile
