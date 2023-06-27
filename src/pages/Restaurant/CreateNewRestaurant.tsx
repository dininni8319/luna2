import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '@/hooks/form-hook'
import { useFetch } from '@/hooks/http-hook'
import { Title } from '@/style/globalTitle'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '@/utilities/validators'
import { PageWrapper, Flex, FieldWrapper } from '@/style/globalWrapper'
import { AuthInput, Select, ImageInput } from '@/components'
import {
    categoriesOption,
    priceLevel
} from '@/components/FormComponents/Select/options'
import { AuthButton } from '@/pages/register/style'
import { createRestaurant } from '@/store/slices/restaurant'
import { restaurantInitialState } from '@/store/reducers/initialStates'
import { useAppDispatch, useAppSelector } from '@/hooks/dispatch-selector-hooks'
import {
    FieldTitle,
    NewRestaurantContainer,
    InformationContainer
} from './style'
// import { formatData } from "./formData";

import { base_url } from '@/utilities/urls'
import { useAuth } from '@/hooks/auth-hook'

const CreateUserProfile = () => {
    const [formState, inputHandler] = useForm(restaurantInitialState, false)
    const {
        payload: { categories }
    } = useFetch(`${base_url}/restaurant/categories`, 'get', {}, {})
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { token } = useAuth()

    const { isSuccess, message } = useAppSelector((state) => state.restaurant)
    const { inputs } = formState

    // const formData = formatData(inputs)

    const formData: FormData = new FormData()

    formData.append('email', inputs.email.value)
    formData.append('name', inputs.name.value)
    formData.append('city', inputs.city.value)
    formData.append('country', inputs.country.value)
    formData.append('category', inputs.email.value)
    formData.append('zipcode', inputs.zipcode.value)
    formData.append('phone', inputs.phone.value)
    formData.append('street', inputs.street.value)
    formData.append('opening_hours', inputs.opening_hours.value)
    formData.append('price_level', inputs.price_level.value)
    formData.append('image', inputs.image.value)
    formData.append('website', inputs.website.value)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            dispatch(createRestaurant(formData))
        } catch (err) {
            console.log('====================================')
            console.log(err)
            console.log('====================================')
            return
        }
        if (isSuccess) {
            navigate('/search')
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
                            // validators={[VALIDATOR_REQUIRE()]}
                            errorText="Category is required"
                        >
                            {categoriesOption(categories)}
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
                            id="opening_hours"
                            type="text"
                            placeholder="Opening Hours"
                            inputElement="input"
                            onInput={inputHandler}
                        />
                    </FieldWrapper>
                    <FieldWrapper>
                        <FieldTitle>Price Level</FieldTitle>
                        <Select id="price_level" onInput={inputHandler}>
                            {priceLevel()}
                        </Select>
                    </FieldWrapper>
                    <FieldWrapper>
                        <FieldTitle>Image</FieldTitle>
                        <ImageInput
                            id="image"
                            type="file"
                            inputElement="input"
                            onInput={inputHandler}
                            placeholder="Choose a file"
                        />
                    </FieldWrapper>
                </InformationContainer>
                {message && <span className="class-error">{message}</span>}
                <Flex justify="center" padding="2rem 0">
                    <AuthButton>
                        {/* {loading ? 'Loading...' : 'Create a Restaurant'} */}
                        {'Create a Restaurant'}
                    </AuthButton>
                </Flex>
            </NewRestaurantContainer>
        </PageWrapper>
    )
}

export default CreateUserProfile
