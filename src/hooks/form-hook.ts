import { useCallback, useReducer } from 'react'
import { formReducer } from '@/store/reducers/formReducer'

type TInitialValue = {
    [key: string]: {
        value: string | File
        isValid: boolean
        isTouched?: boolean
    }
}

interface IForm {
    inputs: TInitialValue
    isValid: boolean
}
export const useForm = (
    initialInputs: TInitialValue,
    initialFormValidiy: boolean
) => {
    const [formState, dispatch] = useReducer<
        (state: IForm, action: any) => any
    >(formReducer, {
        inputs: initialInputs,
        isValid: initialFormValidiy
    })

    const inputHandler = useCallback(
        (id: string, value: string | File, isValid?: boolean) => {
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
