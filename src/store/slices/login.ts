import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { api } from '../actions/api'
import { TLogin } from '@/interfaces/interfaces'

type TPayload = {
    user: {
        name: string
        email: string
        token: string
    }
}

export const initialState = {
    isSuccess: false,
    error: '',
    message: '',
    loading: false, 
    user: {
        name: '',
        email: '',
        token: ''   
    }
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
            (state: typeof initialState, action: PayloadAction<TPayload>) => {
                state.isSuccess = true
                state.loading = false
                state.user = action.payload.user
            }
        )
        builder.addCase(
            signIn.rejected,
            (state: typeof initialState, action: PayloadAction<any>) => {
                state.isSuccess = false
                state.loading = false
                state.message = '. Sorry something went wrong!'
            }
        )
    }
})

// export const { loginSuccess } = loginSlice.actions

export default loginSlice.reducer
