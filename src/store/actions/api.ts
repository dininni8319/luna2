import axios from 'axios'

export const api = {
    sendUserEmail: async (email: string) => {
        const response = await axios.post(
            `http://localhost:8000/api/email/verify`,
            { email: email }
        )
        return response.data
    }
}
