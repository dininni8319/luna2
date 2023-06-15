import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store'
import { IInput } from '@/interfaces'
import { api } from './api'

export const sendEmail = createAsyncThunk(
    'email/sendEmail',
    async (email: string) => {
        const response = await api.sendUserEmail(email)
        return response.data
    }
)

interface IEmail {
    isSuccess: boolean
    message: string
}

const initialState: IEmail = {
    isSuccess: false,
    message: ''
}

export const emailSlice = createSlice({
    name: 'email',
    initialState,
    reducers: {
        emailSent: (state: IInput) => {
            state.isTouched = true
        }
    },
    extraReducers: (builder) => {
        builder.addCase(sendEmail.fulfilled, (state, action) => {
            state.isSuccess = true
        })
        builder.addCase(sendEmail.rejected, (state, action) => {
            state.isSuccess = false
            state.message = 'something went wrong'
        })
    }
})

export const { emailSent } = emailSlice.actions

export const emailValue = (state: RootState) => state.input.value
export default emailSlice.reducer
