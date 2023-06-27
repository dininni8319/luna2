import { useState, useCallback } from 'react'

export const useHttpClient = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const sendRequest = useCallback(
        async (url: string, params: any = {}) => {
            setLoading(true)
            try {
                const response = await fetch(url, params)

                const responseData = await response.json()

                if (!response.ok) {
                    throw new Error(responseData.message)
                }

                setLoading(false)
                return responseData
            } catch (err) {
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
