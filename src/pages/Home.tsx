import { useAuth } from '@/hooks/auth-hook'
import { useFetch } from '@/hooks/http-hook'
import { PageWrapper } from '@/style/globalWrapper'
import { TileGrid } from '@/style/tile'
import { base_url } from '@/utilities/urls'
import { Card } from '@/components'

const Home = () => {
    const { token } = useAuth()
    const { payload } = useFetch(`${base_url}/restaurant/list`, 'get', {
        headers: { Authorization: `${token}`}
    })
    
    return (
        <PageWrapper>
            <TileGrid>
                {payload?.slice(0,4).map((restaurant, index) => <Card restaurant={restaurant}/>)}
            </TileGrid>
        </PageWrapper>
    )
}

export default Home
