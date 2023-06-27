import { createContext } from 'react'

export const AuthContext = createContext({
    isLoggedIn: false,
    token: '',
    name: '',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    login: (token: string, email: string, name: string) => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    logout: (token: string, email: string, name: string) => {}
})
