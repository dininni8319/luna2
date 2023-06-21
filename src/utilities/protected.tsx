import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({ children }: { children: JSX.Element }) => {
    let token = JSON.parse(localStorage.getItem('user'))?.token

    if (!token) {
        return <Navigate to="/login" replace />
    }
    return children
}

export default Protected
