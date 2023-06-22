import axios from 'axios'
import { ICreateUser, TLogin, IRestaurant } from '@/interfaces/interfaces'
import { base_url } from '@/utilities/urls'

export const api = {
    sendUserEmail: async (email: string) => {
        const response = await axios.post(
            `${base_url}/email/verify`,
            { email: email }
        )
        return response.data
    },
    completeUserRegistration: async (data: ICreateUser) => {
        const response = await axios.patch(`${base_url}/user/signup`, data)
        return response.data
    },
    loginUser: async (data: TLogin) => {
        const response = await axios.post(`${base_url}/user/signin`, data)
        return response
    },
    createRestaurantAction: async (data: IRestaurant) => {
        const response = await axios.post(`${base_url}/restaurant/new`, data)
        return response
    }
}
