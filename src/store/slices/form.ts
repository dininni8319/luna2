import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store'
import { IInput } from '@/interfaces'

const initialState = {
    inputs: {
        email: {
            inputId: '',
            value: '',
            isValid: false
        }
    },
    formValidity: false
}

type TInput = {
    inputId: string
    value: string
    isValid: boolean
}

interface IPayload {
    inputs: {
        email: TInput
        name?: TInput
        password?: TInput
        password_repeat?: TInput
    }
    code?: string
    formValidity: boolean
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        emailValid: (state: IInput, action: PayloadAction<IPayload>) => {
            let formIsValid = true

            for (const inputId in state.inputs) {
                // input change
                if (inputId === action.payload.inputId) {
                    state.inputs[inputId].inputId = action.payload.inputId
                    state.inputs[inputId].value = action.payload.value
                    state.inputs[inputId].isValid = action.payload.isValid
                    formIsValid = formIsValid && action.payload.isValid // looping through the object and checking if we are updating the obj with input change
                } else {
                    // here get the input validity of the inputs not been updated
                    // not updated from the current running action
                    formIsValid = formIsValid && state.inputs[inputId].isValid
                }
            }
            state.inputs = {
                ...state.inputs,
                [action.payload.inputId]: {
                    value: action.payload.value,
                    isValid: action.payload.isValid
                }
            }
            state.formValidity = formIsValid
        }
    }
})

export const { emailValid } = formSlice.actions

export const inputValue = (state: RootState) => state.input.value
export default formSlice.reducer
