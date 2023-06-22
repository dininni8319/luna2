import { configureStore } from '@reduxjs/toolkit'
import inputReducer from './slices/input'
import emailReducer from './slices/email'
import registerReducer from './slices/createUser'
import loginReducer from './slices/login'
import restaurantReducer from './slices/restaurant'
import titleReducer from './slices/title'

const store = configureStore({
    reducer: {
        input: inputReducer,
        email: emailReducer,
        register: registerReducer,
        login: loginReducer,
        restaurant: restaurantReducer,
        title: titleReducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
