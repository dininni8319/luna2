import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store'
import { IInput } from '@/interfaces'
import { validate } from '@/utilities/validators'

const initialState: IInput = {
    value: '',
    isTouched: false,
    isValid: false,
    errorMessage: ''
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
            let valid = validate(action.payload.val, action.payload.validators)
            state.isValid = valid
        },
        touch: (state: IInput) => {
            state.isTouched = true
        }
    }
})

export const { onChange, touch } = inputSlice.actions

export const inputValue = (state: RootState) => state.input.value
export default inputSlice.reducer
