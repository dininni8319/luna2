import { useEffect, useReducer, ChangeEvent } from 'react'
import { AuthInputStyle } from './InputStyle'
import { IAuthInput, ReducerAction } from '@/interfaces/interfaces'
import { Flex } from '@/style/globalWrapper'
import { inputReducer } from '@/store/reducers/inputReducer'

const InputComponent = (props: IAuthInput) => {
    const {
        id,
        type,
        placeholder,
        inputElement,
        rows,
        errorText,
        value,
        disabled,
        onInput,
        margin
    } = props

    const initialState = {
        value: props.initialValue || '',
        isTouched: false,
        isValid: props.initialValid || false
    }

    const [inputState, dispatch] = useReducer<
        (state: typeof initialState, action: ReducerAction) => any
    >(inputReducer, initialState)

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'ON_CHANGE',
            validators: props.validators || [],
            val: event.target.value
        })
    }

    const touchHandler = () => {
        dispatch({
            type: 'TOUCH'
        })
    }

    useEffect(() => {
        if (onInput) {
            onInput(id, inputState.value, inputState.isValid)
        }
    }, [id, inputState.value, inputState.isValid])

    const element =
        inputElement === 'input' ? (
            <AuthInputStyle
                forminvalid={(
                    !inputState.isValid && inputState.isTouched
                ).toString()}
                id={id}
                type={type}
                placeholder={placeholder}
                onChange={changeHandler}
                value={value || inputState.value}
                onBlur={touchHandler}
                disabled={disabled}
                margin={margin}
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
        <Flex smdirection="column" align="start">
            {element}
            {!inputState.isValid && inputState.isTouched && (
                <span className="class-error">{errorText}</span>
            )}
        </Flex>
    )
}

export default InputComponent
