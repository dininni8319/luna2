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
        value: ''
    },
    phone: {
        value: '',
        isValid: false,
        isTouched: false
    },
    category: {
        value: '',
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
        isValid: true
    },
    price_level: {
        value: '',
    },
    website: {
        value: '',
        isValid: true
    },
    opening_hours: {
        value: '',
        isValid: true
    },
    image: {
        value: '',
        isValid: true
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
