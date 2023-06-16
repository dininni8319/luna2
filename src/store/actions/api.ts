import axios from 'axios'
import { ICreateUser, TLogin } from '@/interfaces/interfaces'

export const api = {
    sendUserEmail: async (email: string) => {
        const response = await axios.post(
            `http://localhost:8000/api/email/verify`,
            { email: email }
        )
        return response.data
    },
    completeUserRegistration: async (data: ICreateUser) => {
        const response = await axios.patch(
            `http://localhost:8000/api/social/user/update`,
            data 
        )
        return response.data
    },
    loginUser: async (data: TLogin) => {
        const response = await axios.post(
            `http://localhost:8000/api/social/signin`,
            data 
        )
        return response.data
    }
}
