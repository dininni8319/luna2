export type Methods =
    | 'head'
    | 'options'
    | 'put'
    | 'post'
    | 'patch'
    | 'delete'
    | 'get'

export interface IInput {
    value: string
    isTouched?: boolean
    isValid: boolean
    errorMessage?: string
}

export type ValidatorType = {
    type: string
    val?: number | string
}

export interface IPayload {
    type?: string
    val: string
    validators?: ValidatorType
}

export interface IMessage extends Omit<IEmail, 'isSuccess'> {
    error: { message: string }
}

export interface IAuthInput {
    id: string
    type: string
    placeholder?: string
    inputElement: string
    rows?: number
    errorText?: string
    value?: string
    disabled?: boolean
    initialValue?: string
    initialValid?: boolean
    margin?: string
    validators?: ValidatorType[]
    onInput: (id: string, value: string | File, isValid: boolean) => void
}

export interface ReducerAction {
    type: string
    val?: string
    validators?: ValidatorType[]
}

export interface ICreateUser {
    name: string
    email: string
    password: string
    password_repeat: string
    location: string
    code: string
}

interface IRemoveKeys {
    password_repeat: string
    location: string
    code: string
    name: string
}

//omit keys using IRemoveKeys
export type TLogin = Omit<ICreateUser, keyof IRemoveKeys>

export interface IRestaurant {
    name: string
    email: string
    city: string
    country: string
    category: string
    zipcode: string
    phone: string
    street: string
    opening_hours: string
    price_level: string
    image: File
    website: string
}
