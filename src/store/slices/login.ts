import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { api } from '../actions/api'
import { TLogin } from '@/interfaces/interfaces'

export const initialState = {
    isSuccess: false,
    error: '',
    message: '',
    loading: false, 
    user: {}
}

export const signIn = createAsyncThunk(
    'login/signIn',
    async (data: TLogin) => {
        const response = await api.loginUser(data)
        return response.data
    }
)

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginSuccess: (state: typeof initialState) => {
            state.isSuccess = true

        }
    },
    extraReducers: (builder) => {
        builder.addCase(
            signIn.pending,
            (state: typeof initialState) => {
                state.loading = true
            }
        )
        builder.addCase(
            signIn.fulfilled,
            (state: typeof initialState, action: PayloadAction<any>) => {
                state.isSuccess = true
                state.loading = false
                state.user = action.payload
            }
        )
        builder.addCase(
            signIn.rejected,
            (state: typeof initialState, action: PayloadAction<any>) => {
                state.isSuccess = false
                state.loading = false
                state.message =
                    action.error.message ||
                    '. Sorry something went wrong!'
            }
        )
    }
})

export const { loginSuccess } = loginSlice.actions

export default loginSlice.reducer
