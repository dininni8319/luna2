import { PageWrapper } from '@/style/globalWrapper'
import { useFetch } from '@/hooks/http-hook'
import { TileGrid } from '@/style/tile'
import Card from '@/components/Card'
import { IRestaurant } from '@/interfaces/interfaces'
import { base_url } from '@/utilities/urls'
import { SearchNavigation } from '@/components'

const Restaurants = () => {

    const { payload } = useFetch(`${base_url}/restaurant`)

    return (
        <PageWrapper>
            <SearchNavigation />
            <TileGrid>
                {payload?.map((restaurant: IRestaurant) => <Card restaurant={restaurant} />)}
            </TileGrid>
        </PageWrapper>
    )
}

export default Restaurants