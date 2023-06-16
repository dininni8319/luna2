import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store'
import { api } from '../actions/api'
import { IMessage } from '@/interfaces'

export const initialState = {
    isSuccess: false,
    error: '',
    message: '',
    loading: false
}

export const sendEmail = createAsyncThunk(
    'email/sendEmail',
    async (email: string) => {
        const response = await api.sendUserEmail(email)
        return response.data
    }
)

export const emailSlice = createSlice({
    name: 'email',
    initialState,
    reducers: {
        emailSent: (state: typeof initialState) => {
            state.isSuccess = true
        }
    },
    extraReducers: (builder) => {
        builder.addCase(sendEmail.pending, (state: typeof initialState) => {
            state.loading = true
        })
        builder.addCase(sendEmail.fulfilled, (state: typeof initialState) => {
            state.isSuccess = true
            state.loading = false
            // state.users = action.payload
        })
        builder.addCase(
            sendEmail.rejected,
            (state: typeof initialState, action: PayloadAction<IMessage>) => {
                state.isSuccess = false
                state.loading = false
                state.message =
                    action.error.message ||
                    '. User already exists, try with another email!'
            }
        )
    }
})

export const { emailSent } = emailSlice.actions

export const emailValue = (state: RootState) => state.input.value
export default emailSlice.reducer
