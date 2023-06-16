import { useCallback, useReducer } from 'react'
import { formReducer } from '@/store/reducers/formReducer'
import { IInput } from '@/interfaces'

type Obj = {
    [key: string]: { [key: string]: string }
}

export const useForm = (initialInputs: Obj, initialFormValidiy: boolean) => {
    const [formState, dispatch] = useReducer<
        (state: IInput, action: IInput) => IInput
    >(formReducer, {
        inputs: initialInputs,
        isValid: initialFormValidiy
    })

    const inputHandler = useCallback(
        (id: string, value: string, isValid: boolean) => {
            dispatch({
                type: 'INPUT_CHANGE',
                inputId: id,
                value: value,
                isValid: isValid
            })
        },
        []
    )

    return [formState, inputHandler]
}
