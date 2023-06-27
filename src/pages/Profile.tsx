import { useState } from 'react'
import { useAuth } from '@/hooks/auth-hook'
import { PageWrapper } from '@/style/globalWrapper'
import { base_url } from '@/utilities/urls'
import { useFetch } from '@/hooks/http-hook'

const Profile = () => {
    const { token } = useAuth()

     const { payload } = useFetch(`${base_url}/user/profile`, 'get',{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    const [ profile, setProfile ] = useState(null)
    
    return (
        <PageWrapper>
            <h1>Profile</h1>
            {JSON.stringify(payload)}
        </PageWrapper>
    )
}

export default Profile
