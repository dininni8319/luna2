import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/auth-hook'
import { useHttpClient } from '@/hooks/useHttp'
import { PageWrapper } from '@/style/globalWrapper'
import { base_url } from '@/utilities/urls'


const Profile = () => {
    const { token } = useAuth()
    console.log("🚀 ~ file: Profile.tsx:9 ~ Profile ~ token:", token)
    const [ profile, setProfile ] = useState(null)
    // const { error, loading, sendRequest } = useHttpClient()
    
    useEffect(() => {
        console.log('ok');
        fetch(`${base_url}/user/profile`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }, 
            })
        .then((resp) => resp.json())
        .then((data) =>  console.log('data', data)) 
    }, [])

    return (
        <PageWrapper>
            <h1>Profile</h1>
            {/* {JSON.stringify()} */}
        </PageWrapper>
    )
}

export default Profile
