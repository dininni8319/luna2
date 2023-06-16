import { configureStore } from '@reduxjs/toolkit'
import inputReducer from './slices/input'
import emailReducer from './slices/email'
import registerReducer from './slices/createUser'
import loginReducer from './slices/login'

const store = configureStore({
    reducer: {
        input: inputReducer,
        email: emailReducer,
        register: registerReducer,
        login: loginReducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
