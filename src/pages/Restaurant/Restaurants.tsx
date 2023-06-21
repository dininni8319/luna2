import { PageWrapper } from '@/style/globalWrapper'
import { useFetch } from '@/hooks/http-hook'
import { TileGrid } from '@/style/tile'
import Card from '@/components/Card'
import { IRestaurant } from '@/interfaces/interfaces'

const Restaurants = () => {

    const {payload } = useFetch('http://localhost:8000/api/restaurant')

    return (
        <PageWrapper>
            <TileGrid>
                {payload?.map((restaurant: IRestaurant) => <Card restaurant={restaurant} />)}
            </TileGrid>
        </PageWrapper>
    )
}

export default Restaurants