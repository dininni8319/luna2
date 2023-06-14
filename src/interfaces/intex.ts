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
