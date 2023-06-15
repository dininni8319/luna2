export interface IInput {
    value: string
    isTouched: boolean
    isValid: boolean
    errorMessage?: string
}

export type ValidatorType = {
    type: string
    val: number
}

export interface IEmail {
    isSuccess: boolean
    error: string
    message: string
    loading: boolean
}

export interface IMessage extends Omit<IEmail, 'isSuccess'> {}
