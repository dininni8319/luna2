import { useEffect, useReducer, ChangeEvent } from 'react'
import { AuthInputStyle } from '../Input/InputStyle'
import { IAuthInput, ReducerAction } from '@/interfaces/interfaces'
import { Flex } from '@/style/globalWrapper'
import { inputReducer } from '@/store/reducers/inputReducer'
import styled from 'styled-components';
import { rem } from 'polished'

export const ImageInputStyle = styled(AuthInputStyle)`
    display: none;
`;

export const Label = styled.label`
    background-color: ${({theme}) => theme.buttonColor};
    color: white;
    width: ${rem('200px')};
    height: ${rem('30px')};
    text-transform: uppercase;
    font-weight: normal;
    font-size: 14px;
    border-radius: ${rem('30px')};
    text-align: center;
    padding-top: ${rem('10px')};
`;

const ImageInput = (props: IAuthInput) => {
    const {
        id,
        type,
        placeholder,
        onInput,
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
            validators: [],
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

    return (
        <Flex smdirection="column" align="start">
             <Label htmlFor={id}
             >   
               Choose a file...
             </Label>
             <ImageInputStyle
                forminvalid={(
                    !inputState.isValid && inputState.isTouched
                ).toString()}
                id={id}
                type={type}
                placeholder={placeholder}
                onChange={changeHandler}
                value={inputState.value}
                onBlur={touchHandler}
            />
        </Flex>
    )
}

export default ImageInput
