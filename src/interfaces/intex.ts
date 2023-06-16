export interface IInput {
    id: string
    value: string
    isTouched?: boolean
    isValid: boolean
    errorMessage?: string
}

export type ValidatorType = {
    type: string
    val: number
}

export interface IPayload {
    type?: string
    val: string
    validators: ValidatorType
}

export interface IMessage extends Omit<IEmail, 'isSuccess'> {
    error: { message: string }
}

export interface IAuthInput {
    id: string
    type: string
    placeHolder: string
    inputElement: string
    rows?: number
    errorText: string
    value?: string
    onInput: (id: string, value: string, isValid: boolean) => void
}

export interface ReducerAction {
    type: string
    val?: string
    validators?: ValidatorType
}
