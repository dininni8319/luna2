import { validate } from '@/utilities/validators'
import { ReducerAction, IInput } from '@/interfaces/interfaces'

export const inputReducer = (
    state: IInput,
    action: ReducerAction
): ReducerAction => {
    switch (action.type) {
        case 'ON_CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: action.validators
                    ? validate(action.val, action.validators)
                    : true
            }
        case 'TOUCH':
            return {
                ...state,
                isTouched: true
            }
        default:
            return state
    }
}
