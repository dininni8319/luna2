import { FormEvent } from 'react'
import { Title } from '@/style/globalTitle'
import { PageWrapper, Flex, FieldWrapper } from '@/style/globalWrapper'
import { AuthInput } from '@/components'
import { AuthButton } from '@/pages/register/style'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '@/utilities/validators'
import { useForm } from '@/hooks/form-hook.ts'
import { userInitialState } from '@/store/reducers/initialStates'
import { useAppDispatch, useAppSelector } from '@/hooks/dispatch-selector-hooks'
import { completeRegistration } from '@/store/slices/createUser'
import { ICreateUser } from '@/interfaces/interfaces'
import { useNavigate } from 'react-router-dom'
import {
    FieldTitle,
    NewRestaurantContainer,
    InformationContainer
} from './style'

const CreateUserProfile = () => {
    const [formState, inputHandler] = useForm(userInitialState, false)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { isSuccess, message, loading } = useAppSelector(
        (state) => state.register
    )
    const { inputs } = formState

    const formData: ICreateUser = {
        email: inputs.email.value,
        name: inputs.name.value,
        code: inputs.code.value,
        location: inputs.location.value,
        password: inputs.password.value,
        password_repeat: inputs.password_repeat.value
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        let arePasswordEqual =
            inputs.password.value.length === inputs.password_repeat.value.length
        if (!arePasswordEqual) {
            alert('Passwords are not equal!')
            return
        }
        dispatch(completeRegistration(formData))
        if (isSuccess) {
            navigate('/login')
        }
    }

    return (
        <PageWrapper>
            <Flex>
                <Title>Create a new restaurant</Title>
            </Flex>
            <NewRestaurantContainer onSubmit={handleSubmit}>
                <InformationContainer>
                    <FieldWrapper>
                        <FieldTitle>Name*</FieldTitle>
                        <AuthInput
                            id="name"
                            type="text"
                            inputElement="input"
                            onInput={inputHandler}
                            validators={[VALIDATOR_REQUIRE()]}
                        />
                    </FieldWrapper>
                    <FieldWrapper>
                        <FieldTitle>Category*</FieldTitle>
                        <AuthInput
                            id="category"
                            type="text"
                            inputElement="input"
                            errorText="Category required"
                            onInput={inputHandler}
                            validators={[VALIDATOR_REQUIRE()]}
                        />
                    </FieldWrapper>
                    <FieldWrapper>
                        <FieldTitle>Country*</FieldTitle>
                        <AuthInput
                            id="country"
                            type="text"
                            inputElement="input"
                            errorText="Country required"
                            onInput={inputHandler}
                            validators={[VALIDATOR_REQUIRE()]}
                        />
                    </FieldWrapper>
                    <FieldWrapper>
                        <FieldTitle>City*</FieldTitle>
                        <AuthInput
                            id="city"
                            type="text"
                            placeholder="city"
                            inputElement="input"
                            errorText="City required"
                            onInput={inputHandler}
                            validators={[VALIDATOR_REQUIRE()]}
                        />
                    </FieldWrapper>
                    <FieldWrapper>
                        <FieldTitle>Street*</FieldTitle>
                        <AuthInput
                            id="street"
                            type="text"
                            placeholder="Street"
                            inputElement="input"
                            errorText="Street required"
                            onInput={inputHandler}
                            validators={[VALIDATOR_REQUIRE()]}
                        />
                    </FieldWrapper>
                    <FieldWrapper>
                        <FieldTitle>Zip code</FieldTitle>
                        <AuthInput
                            id="zipcode"
                            type="text"
                            inputElement="input"
                            errorText="Zipcode required"
                            onInput={inputHandler}
                        />
                    </FieldWrapper>
                    <FieldWrapper>
                        <FieldTitle>Website</FieldTitle>
                        <AuthInput
                            id="website"
                            type="text"
                            inputElement="input"
                            onInput={inputHandler}
                        />
                    </FieldWrapper>
                    <FieldWrapper>
                        <FieldTitle>Phone*</FieldTitle>
                        <AuthInput
                            id="phone"
                            type="text"
                            inputElement="input"
                            errorText="Phone is required"
                            onInput={inputHandler}
                            validators={[VALIDATOR_MINLENGTH(8)]}
                        />
                    </FieldWrapper>
                    <FieldWrapper>
                        <FieldTitle>Email*</FieldTitle>
                        <AuthInput
                            id="email"
                            type="email"
                            inputElement="input"
                            errorText="Email required"
                            onInput={inputHandler}
                            validators={[VALIDATOR_MINLENGTH(8)]}
                        />
                    </FieldWrapper>
                    <FieldWrapper>
                        <FieldTitle>Opening Hours</FieldTitle>
                        <AuthInput
                            id="opening"
                            type="text"
                            placeholder="Opening Hours"
                            inputElement="input"
                            onInput={inputHandler}
                        />
                    </FieldWrapper>
                    <FieldWrapper>
                        <FieldTitle>Price Level</FieldTitle>
                        <AuthInput
                            id="price_level"
                            type="text"
                            placeholder="Price Level"
                            inputElement="input"
                            onInput={inputHandler}
                        />
                    </FieldWrapper>
                    <FieldWrapper>
                        <FieldTitle>Image</FieldTitle>
                        <AuthInput
                            id="image"
                            type="image"
                            inputElement="input"
                            onInput={inputHandler}
                        />
                    </FieldWrapper>
                </InformationContainer>
                {message && <span className="class-error">{message}</span>}
                <Flex justify="center" padding="2rem 0">
                    <AuthButton disabled={!formState.isValid}>
                        {loading ? 'Loading...' : 'Create a new Restaurant'}
                    </AuthButton>
                </Flex>
            </NewRestaurantContainer>
        </PageWrapper>
    )
}

export default CreateUserProfile
