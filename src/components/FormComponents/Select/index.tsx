import { ChangeEvent, ReactNode, useEffect, useReducer } from 'react'
import { inputReducer } from '@/store/reducers/inputReducer'
import { ReducerAction, ValidatorType } from '@/interfaces/interfaces'
import { Selector } from './style'

const initialState = {
    value: '',
    isTouched: false,
    isValid: false
}

interface IProps {
    id: string
    children: ReactNode
    validators?: ValidatorType[]
    errorText?: string
    onInput: (id: string, value: string, isValid: boolean) => void
}

const Select = (props: IProps) => {
    const { validators, onInput, id, errorText, children } = props

    const [inputState, dispatch] = useReducer<
        (state: typeof initialState, action: ReducerAction) => any
    >(inputReducer, initialState)

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'ON_CHANGE',
            validators: validators || [],
            val: event.target.value
        })
    }

    const touchHandler = () => {
        dispatch({
            type: 'TOUCH'
        })
    }

    useEffect(() => {
        onInput(id, inputState.value, initialState.isValid)
    }, [id, inputState.value, initialState.isValid])

    return (
        <>
            <Selector
                forminvalid={(
                    !inputState.isValid && inputState.isTouched
                ).toString()}
                id={id}
                onChange={changeHandler}
                value={inputState.value}
                onBlur={touchHandler}
            >
                {children}
            </Selector>
            {!inputState.isValid && inputState.isTouched && (
                <span className="class-error">{errorText}</span>
            )}
        </>
    )
}

export default Select
