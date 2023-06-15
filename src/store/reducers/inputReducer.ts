import { validate } from '@/utilities/validators';
import { ReducerAction, IInput } from '@/interfaces'

export const inputReducer = (state: IInput, action: ReducerAction): any => {
    switch (action.type) {
        case 'ON_CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            }
        case 'TOUCH':
            return {
                ...state,
                isTouched: true
            }
        case 'EMAIL_SEND_SUCCESS':
            return {
                ...state,
                isSuccess: true
            }
        default:
            return state
    }
}