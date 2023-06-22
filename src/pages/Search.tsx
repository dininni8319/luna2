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
    console.log("🚀 ~ file: Search.tsx:15 ~ Search ~ id:", id)
    console.log(convertPath(id));
    
    const { payload } = useFetch(`${base_url}${id?convertPath(id):"/restaurant/list"}`)

    const renderView = () => {
        if (id === 'restaurants' || id === '') {
           return payload?.map((restaurant: IRestaurant) => <Card restaurant={restaurant} />)
        } else if (id === 'users') {
          return payload?.map((user: IRestaurant) => <TitleUserHeader user={user}/>)
        } else if (id === 'reviews') {
            return <h3>No review was found!</h3>
        } 
    }
    return (
        <PageWrapper>
            <SearchNavigation />
            <TileGrid>  
                 {renderView()}
            </TileGrid>
        </PageWrapper>
    )
}

export default Search