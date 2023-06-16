import axios from 'axios'
import { userInitialState } from '../reducers/initialStates'

export const api = {
    sendUserEmail: async (email: string) => {
        const response = await axios.post(
            `http://localhost:8000/api/email/verify`,
            { email: email }
        )
        return response.data
    },

    completeUserRegistration: async (data: typeof userInitialState) => {
        const response = await axios.post(
            `http://localhost:8000/api/email/verify`,
            { data }
        )
        return response.data
    }
}
