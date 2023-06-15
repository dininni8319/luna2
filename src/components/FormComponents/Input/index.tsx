import { useEffect, useState, useReducer } from 'react'
import { AuthInput } from './InputStyle'
import { IAuthInput } from '@/interfaces'
import { ErrorMessage } from '@/pages/register/style'
import { Flex } from '@/style/globalWrapper'
import { inputReducer } from '@/store/reducers/inputReducer'
import { IInput } from '@/interfaces'

const InputComponent = (props: IAuthInput) => {
    const [ inputId, setInputId ] = useState('')

    const { id, type, placeHolder, inputElement, rows, errorText, value, onInput } =
        props

    const initialState: IInput = {
        value: props.initialValue || "",
        isTouched: false, 
        isValid: props.initialValid || false 
    };

    const [ inputState, dispatch ] = useReducer<(state: IInput, action: IInput) => IInput>(inputReducer, initialState);

    let isEqual = id === inputId
    const changeHandler = (event) => {
        dispatch({
            type: "ON_CHANGE",
            validators: props.validators,
            val: event.target.value
        })
    }

    const touchHandler = () => {
        setInputId(id)
        dispatch({
            type: "TOUCH"
        })
    }

    // useEffect(() => {
    //    onInput(id, value, isValid);
    // }, [id, inputState.value, inputState.isValid]);

    const element =
        inputElement === 'input' ? (
            <AuthInput
                formInvalid={!inputState.isValid && inputState.isTouched}
                id={id}
                type={type}
                placeholder={placeHolder}
                onChange={changeHandler}
                value={value || inputState.value}
                onBlur={touchHandler}
            />
        ) : (
            <textarea
                id={id}
                rows={rows || 3}
                placeholder={placeHolder}
                onChange={changeHandler}
                value={value || value}
                onBlur={touchHandler}
            />
        )
    return (
        <Flex smdirection="column" align="center">
            {element}
            {!inputState.isValid && inputState.isTouched && isEqual && (
                <ErrorMessage>
                    {errorText || 'something went wrong'}
                </ErrorMessage>
            )}
        </Flex>
    )
}

export default InputComponent
