import { useState, useCallback } from 'react'

export const useHttpClient = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const sendRequest = useCallback(
        async (url: string, method = 'GET', token: string) => {
            setLoading(true)
            // we can use the abort controller to abort the request in case the user change the page

            try {
                const response = await fetch(url, {
                    method,
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                })

                const responseData = await response.json()
         
                // we wanna clear the controller for the request just been completed

                if (!response.ok) {
                    throw new Error(responseData.message)
                }

                setLoading(false)
                return responseData
            } catch (err: any) {
                setError(err.message)
                setLoading(false)

                throw err
            }
        },
        []
    )

    const clearError = () => {
        setError(null)
    }

    return {
        loading,
        error,
        sendRequest,
        clearError
    }
}
