import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store'
import { IInput } from '@/interfaces'

const initialState: IInput = {
    value: '',
    isTouched: false,
    isValid: false
}

interface IPayload {
    val: string
    validators: boolean
}

export const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        onChange: (state: IInput, action: PayloadAction<IPayload>) => {
            state.value = action.payload.val
            state.isValid = action.payload.validators
        }
    }
})

export const { onChange } = inputSlice.actions

export const inputValue = (state: RootState) => state.input.value
export default inputSlice.reducer
