import { configureStore } from '@reduxjs/toolkit'
import inputReducer from './slices/input'

const store = configureStore({
    reducer: {
        input: inputReducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
