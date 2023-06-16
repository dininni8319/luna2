import { useEffect, useReducer, ChangeEvent } from 'react'
import { AuthInputStyle } from './InputStyle'
import { IAuthInput } from '@/interfaces'
import { ErrorMessage } from '@/pages/register/style'
import { Flex } from '@/style/globalWrapper'
import { inputReducer } from '@/store/reducers/inputReducer'
import { IInput } from '@/interfaces'

const InputComponent = (props: IAuthInput) => {
    const { 
        id, 
        type, 
        placeholder, 
        inputElement, 
        rows, errorText, 
        value, disabled, 
        onInput 
    } =
        props

    const initialState: IInput = {
        value: props.initialValue || "",
        isTouched: false, 
        isValid: props.initialValid || false 
    };

    const [ inputState, dispatch ] = useReducer<(state: IInput, action: IInput) => IInput>(inputReducer, initialState);
    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: "ON_CHANGE",
            validators: props.validators,
            val: event.target.value
        })
    }

    const touchHandler = () => {
        dispatch({
            type: "TOUCH"
        })
    }

    // useEffect(() => {
    //    onInput(id, value, isValid);
    // }, [id, inputState.value, inputState.isValid]);

    const element =
        inputElement === 'input' ? (
            <AuthInputStyle
                formInvalid={!inputState.isValid && inputState.isTouched}
                id={id}
                type={type}
                placeholder={placeholder}
                onChange={changeHandler}
                value={value || inputState.value}
                onBlur={touchHandler}
                disabled={disabled}
            />
        ) : (
            <textarea
                id={id}
                rows={rows || 3}
                placeholder={placeholder}
                onChange={changeHandler}
                value={value || value}
                onBlur={touchHandler}
            />
        )
    return (
        <Flex smdirection="column" align="center">
            {element}
            {!inputState.isValid && inputState.isTouched && (  
             <span className='class-error'>{errorText}</span> 
            )}
        </Flex>
    )
}

export default InputComponent
