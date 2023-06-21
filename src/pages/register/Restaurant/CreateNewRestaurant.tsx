import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '@/hooks/form-hook'
import { useFetch } from '@/hooks/http-hook'
import { Title } from '@/style/globalTitle'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '@/utilities/validators'
import { PageWrapper, Flex, FieldWrapper } from '@/style/globalWrapper'
import { AuthInput, Select } from '@/components'
import { AuthButton } from '@/pages/register/style'
import { restaurantInitialState } from '@/store/reducers/initialStates'
import { useAppDispatch, useAppSelector } from '@/hooks/dispatch-selector-hooks'
import {
    FieldTitle,
    NewRestaurantContainer,
    InformationContainer
} from './style'

interface IPayload {
    name: string
}

const CreateUserProfile = () => {
    const [formState, inputHandler] = useForm(restaurantInitialState, false)
    const {
        payload: { categories }
    } = useFetch('http://localhost:8000/api/restaurant/categories')

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { isSuccess, message, loading } = useAppSelector(
        (state) => state.register
    )
    const { inputs } = formState

    const formData = {
        email: inputs.email.value,
        name: inputs.name.value,
        city: inputs.city.value,
        country: inputs.country.value,
        category: inputs.category.value,
        zipcode: inputs.zipcode.value,
        phone: inputs.phone.value,
        street: inputs.street.value,
        opening_hours: inputs.opening_hours.value,
        price_level: inputs.price_level.value,
        image: inputs.image.value,
        website: inputs.website.value
    }

    const categoriesOption = () => {
        return (
            <>
                <option value="" disabled>
                    Please select
                </option>
                {categories?.map((category: IPayload) => {
                    return (
                        <option value={category.name}>{category.name}</option>
                    )
                })}
            </>
        )
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        // dispatch(completeRegistration(formData))
        if (isSuccess) {
            navigate('/restaurant')
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
                            errorText="Name is required"
                            onInput={inputHandler}
                            validators={[VALIDATOR_REQUIRE()]}
                        />
                    </FieldWrapper>
                    <FieldWrapper>
                        <FieldTitle>Category*</FieldTitle>
                        <Select
                            id="category"
                            onInput={inputHandler}
                            validators={[VALIDATOR_REQUIRE()]}
                            errorText="Category is required"
                        >
                            {categoriesOption()}
                        </Select>
                    </FieldWrapper>
                    <FieldWrapper>
                        <FieldTitle>Country*</FieldTitle>
                        <AuthInput
                            id="country"
                            type="text"
                            inputElement="input"
                            errorText="Country is required"
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
                            onInput={inputHandler}
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
