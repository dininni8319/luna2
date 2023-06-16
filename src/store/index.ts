import { configureStore } from '@reduxjs/toolkit'
import inputReducer from './slices/input'
import emailReducer from './slices/email'

const store = configureStore({
    reducer: {
        input: inputReducer,
        email: emailReducer,
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
