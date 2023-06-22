import { PageWrapper } from '@/style/globalWrapper'
import { useFetch } from '@/hooks/http-hook'
import { TileGrid } from '@/style/tile'
import Card from '@/components/Card'
import { IRestaurant } from '@/interfaces/interfaces'
import { base_url } from '@/utilities/urls'
import { SearchNavigation } from '@/components'
import { useAppDispatch, useAppSelector } from '@/hooks/dispatch-selector-hooks'
import { convertPath } from '@/utilities/util'
import { TitleUserHeader } from '@/components'

const Search = () => {
    const dispatch = useAppDispatch()
    const { isClicked, id } = useAppSelector(state => state.title)
    console.log(convertPath(id));
    
    const { payload } = useFetch(`${base_url}${id?convertPath(id):"/restaurant/list"}`)

    console.log("🚀 ~ file: Restaurants.tsx:13 ~ Restaurants ~ payload:", payload)
    return (
        <PageWrapper>
            <SearchNavigation />
            <TileGrid>  
                 {/* <Card restaurant={restaurant} /> */}
                {payload?.map((user: IRestaurant) => <TitleUserHeader user={user}/>)}
            </TileGrid>
        </PageWrapper>
    )
}

export default Search