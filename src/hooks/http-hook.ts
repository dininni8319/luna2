import { useState, useEffect } from 'react'
import { Methods } from '@/interfaces/interfaces'
import axios from 'axios'

export const useFetch = (
    endpoint: string,
    verb = 'get', 
    body = {},
) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        axios[verb as Methods](endpoint, body)
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [endpoint])

    return {
        payload: data,
        setData,
        loading,
        error
    }
}
