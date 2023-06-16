import { ChangeEvent, FormEvent } from 'react'
import { Title } from '@/style/globalTitle'
import { PageWrapper, Flex } from '@/style/globalWrapper'
import { AuthInput } from '@/components'
import { AuthButton } from '@/pages/register/style'
import {  
  VALIDATOR_MINLENGTH, 
  VALIDATOR_REQUIRE,
  VALIDATOR_MAXLENGTH
} from '@/utilities/validators';
import { useForm } from "@/hooks/form-hook.ts";
import { userInitialState } from "@/store/reducers/initialStates";

let email = localStorage.getItem('email')

const CreateUserProfile = () => {
    const [ formState, inputHandler ] = useForm(userInitialState, false)
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {}
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
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
                            // onChange={handleChange}
                            placeholder="E-Mail address"
                            disabled={true}
                            inputElement="input"
                            onInput={inputHandler}
                        />
                        <AuthInput
                            id="code"
                            type="text"
                            onChange={handleChange}
                            placeholder="Validation code"
                            margin="0.50rem"
                            inputElement="input"
                            errorText='Code required and minimum length 8'
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
                            onChange={handleChange}
                            placeholder="Username"
                            inputElement="input"
                            errorText='Username required'
                            onInput={inputHandler}
                            validators={[VALIDATOR_REQUIRE()]}
                        />
                        <AuthInput
                            id="location"
                            type="text"
                            onChange={handleChange}
                            placeholder="Location"
                            inputElement="input"
                            errorText='Location required'
                            onInput={inputHandler}
                            validators={[VALIDATOR_REQUIRE()]}
                        />
                    </Flex>
                    <Flex smdirection="row" align="center">
                        <AuthInput
                            id="password"
                            type="password"
                            onChange={handleChange}
                            placeholder="Password"
                            inputElement="input"
                            errorText='Password required'
                            onInput={inputHandler}
                            validators={[VALIDATOR_MINLENGTH(8)]}
                        />
                        <AuthInput
                            id="password_repeat"
                            type="password"
                            onChange={handleChange}
                            placeholder="Password Repeat"
                            margin="0.50rem"
                            inputElement="input"
                            errorText='Password repeat required'
                            onInput={inputHandler}
                            validators={[VALIDATOR_MINLENGTH(8)]}
                        />
                    </Flex>
                </Flex>

                <Flex justify="center" padding="2rem 0">
                    <AuthButton disabled={false}>
                        Finish registration{' '}
                        {/* {loading ? "Loading..." : 'Register'}  */}
                    </AuthButton>
                </Flex>
            </form>
        </PageWrapper>
    )
}

export default CreateUserProfile
