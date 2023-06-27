import { useState, useCallback, useEffect } from 'react'

export const useAuth = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        token: ''
    })

    const login = useCallback(
        (token: string, email: string, name: string): void => {
            setUserData((prevState) => ({
                ...prevState,
                name: name,
                email: email,
                token: token
            }))

            localStorage.setItem(
                'user',
                JSON.stringify({
                    name: name,
                    email: email,
                    token: token
                })
            )
        },
        []
    )

    const logout = useCallback(() => {
        localStorage.removeItem('user')
        setUserData({
            token: '',
            email: '',
            name: ''
        })
    }, [])

    useEffect(() => {
        let user = localStorage.getItem('user')
        if (user) {
            const storedData = JSON.parse(user) // the parse method converts the json object/text back into JS

            if (storedData && storedData.token) {
                login(storedData.token, storedData.email, storedData.name)
            }
        }
    }, [login]) //this function will run one, after the render cicle

    return {
        token: userData?.token,
        userData,
        login,
        logout
    }
}
