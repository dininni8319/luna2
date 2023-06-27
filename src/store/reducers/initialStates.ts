export const userInitialState = {
    email: {
        value: '',
        isValid: false
    },
    code: {
        value: '',
        isValid: false
    },
    name: {
        value: '',
        isValid: false
    },
    location: {
        value: '',
        isValid: false
    },
    password: {
        value: '',
        isValid: false
    },
    password_repeat: {
        value: '',
        isValid: false
    }
}

export const restaurantInitialState = {
    name: {
        value: '',
        isValid: false,
        isTouched: false
    },
    email: {
        value: '',
        isValid: true,
        isTouched: false
    },
    phone: {
        value: '',
        isValid: false,
        isTouched: false
    },
    category: {
        value: '',
        isValid: false,
        isTouched: false
    },
    city: {
        value: '',
        isValid: false,
        isTouched: false
    },
    country: {
        value: '',
        isValid: false,
        isTouched: false
    },
    street: {
        value: '',
        isValid: false,
        isTouched: false
    },
    zipcode: {
        value: '',
        isValid: true,
        isTouched: false
    },
    price_level: {
        value: '',
        isValid: true,
        isTouched: false
    },
    website: {
        value: '',
        isValid: true,
        isTouched: false
    },
    opening_hours: {
        value: '',
        isValid: true,
        isTouched: false
    },
    image: {
        value: null,
        isValid: true,
        isTouched: false
    }
}
export const loginInitialState = {
    email: {
        value: '',
        isValid: false
    },
    password: {
        value: '',
        isValid: false
    }
}

export const prices = [
    { name: '$' },
    { name: '$$' },
    { name: '$$$' },
    { name: '$$$$' }
]
