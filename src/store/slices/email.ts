import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store'
import { IInput } from '@/interfaces'
import { api } from '../actions/api'
import { IEmail, IMessage } from '@/interfaces'

const initialState: IEmail = {
    isSuccess: false,
    error: '',
    message: '',
    loading: false,
    token: ''
    // user: {
    //  }
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
        emailSent: (state: IInput) => {
            state.isTouched = true
        }
    },
    extraReducers: (builder) => {
        builder.addCase(sendEmail.pending, (state: IEmail) => {
            state.loading = true
        })
        builder.addCase(
            sendEmail.fulfilled,
            (state: IEmail, action: PayloadAction<IMessage>) => {
                state.isSuccess = true
                state.loading = false
                // state.users = action.payload
            }
        )
        builder.addCase(
            sendEmail.rejected,
            (state: IEmail, action: PayloadAction<IMessage>) => {
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
