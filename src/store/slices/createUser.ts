import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store'
import { api } from '../actions/api'
import { userInitialState } from '../reducers/initialStates'
import { IMessage } from '@/interfaces'

export const initialState = {
    isSuccess: false,
    error: '',
    message: '',
    loading: false
}

export const completeRegistration = createAsyncThunk(
    'register/completeRegistration',
    async (data: any) => {
        const response = await api.completeUserRegistration(data)
        return response.data
    }
)

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        registerSuccess: (state: typeof initialState) => {
            state.isSuccess = true
        }
    },
    extraReducers: (builder) => {
        builder.addCase(
            completeRegistration.pending,
            (state: typeof initialState) => {
                state.loading = true
            }
        )
        builder.addCase(
            completeRegistration.fulfilled,
            (state: typeof initialState) => {
                state.isSuccess = true
                state.loading = false
                // state.users = action.payload
            }
        )
        builder.addCase(
            completeRegistration.rejected,
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

export const { registerSuccess } = registerSlice.actions

export default registerSlice.reducer
