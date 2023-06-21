import { createContext } from 'react'

export const AuthContext = createContext({
    isLoggedIn: false,
    token: '',
    name: '',
    login: (token: string, email: string, name: string, expData: Date) => {},
    logout: (token: string, email: string, name: string, expData: Date) => {}
})
