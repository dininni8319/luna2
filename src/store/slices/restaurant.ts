import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '@/store'
import { api } from '../actions/api'
import { IRestaurant } from '@/interfaces/interfaces'

export const initialState = {
    isSuccess: false,
    error: '',
    message: '',
    loading: false
}

interface IPayload {
    message: string
}

export const createRestaurant = createAsyncThunk(
    'restaurant/createRestaurant',
    async (data: IRestaurant) => {
        const response = await api.createRestaurantAction(data)
        return response.data
    }
)

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(
            createRestaurant.pending,
            (state: typeof initialState) => {
                state.loading = true
            }
        )
        builder.addCase(
            createRestaurant.fulfilled,
            (state: typeof initialState, action: PayloadAction<IPayload>) => {
                state.isSuccess = true
                state.loading = false
                state.message = action.payload.message
            }
        )
        builder.addCase(
            createRestaurant.rejected,
            (
                state: typeof initialState,
                action: PayloadAction<any>
            ) => {
                state.isSuccess = false
                state.loading = false
                state.message =
                    action.payload.error.message || '. Something went wrong!'
            }
        )
    }
})

// export const { registerSuccess } = restaurantSlice.actions

export default restaurantSlice.reducer
