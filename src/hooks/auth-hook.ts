import { useState, useCallback, useEffect } from 'react'

let logoutTimer: any

export const useAuth = () => {
    const [tokenExpirationDate, setTokenExpirationDate] = useState<Date>(
        new Date()
    )
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        token: ''
    })

    const login = useCallback(
        (
            token: string,
            email: string,
            name: string,
            expirationDate: Date | undefined
        ): void => {
            setUserData((prevState) => ({
                ...prevState,
                name: name,
                email: email,
                token: token
            }))
            // exsisting experation date or it creates a new one
            const tokenExpirationDate =
                expirationDate ||
                new Date(new Date().getTime() + 1000 * 60 * 60) // add one hour to the current date

            setTokenExpirationDate(tokenExpirationDate)
            localStorage.setItem(
                'user',
                JSON.stringify({
                    name: name,
                    email: email,
                    token: token,
                    expiration: tokenExpirationDate.toISOString() //to ensure that no data is lost when we call the method JSON.stringify()
                })
            )
        },
        []
    )

    const logout = useCallback(() => {
        localStorage.removeItem('user')
        setTokenExpirationDate(new Date())
        setUserData({
            token: '',
            email: '',
            name: ''
        })
    }, [])

    useEffect(() => {
        if (userData.token && tokenExpirationDate) {
            // tokenExpirationDate.getTime() time in millisecond sinze 1970
            const remainingTime =
                tokenExpirationDate.getTime() - new Date().getTime() // current date
            logoutTimer = setTimeout(logout, remainingTime)
        } else {
            clearTimeout(logoutTimer)
        }
    }, [userData.token, logout, tokenExpirationDate])

    useEffect(() => {
        let user = localStorage.getItem('user')
        if (user) {
            const storedData = JSON.parse(user) // the parse method converts the json object/text back into JS
            if (
                storedData &&
                storedData.token &&
                storedData.expiration > new Date()
            ) {
                login(
                    storedData.token,
                    storedData.email,
                    storedData.name,
                    new Date(storedData.expiration)
                )
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
