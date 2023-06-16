import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store'
import { IPayload } from '@/interfaces'
import { validate } from '@/utilities/validators'

const initialState = {
    id: '',
    value: '',
    isTouched: false,
    isValid: false,
    errorMessage: ''
}

export const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        onChange: (
            state: typeof initialState,
            action: PayloadAction<IPayload>
        ) => {
            state.value = action.payload.val
            let valid = validate(action.payload.val, action.payload.validators)
            state.isValid = valid
        },
        touch: (state: typeof initialState) => {
            state.isTouched = true
        }
    }
})

export const { onChange, touch } = inputSlice.actions

export const inputValue = (state: RootState) => state.input.value
export default inputSlice.reducer
