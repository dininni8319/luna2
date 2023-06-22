import { ChangeEvent } from 'react';
import { SearchTitle } from '@/style/globalTitle'
import { Flex } from '@/style/globalWrapper'
import { useAppDispatch, useAppSelector } from '@/hooks/dispatch-selector-hooks'
import { onClick } from '@/store/slices/title'
interface Props {
  
}

const SearchNavigation = (props: Props) => {
  const dispatch = useAppDispatch()

  const { id } = useAppSelector(state => state.title)
  
  const handleClick = (event: any, id: string) => {
     dispatch(onClick({
       id: id
     }))
  }

  return (
    <Flex justify='center'>
      <>
        <SearchTitle uid={id} onClick={(event:any) => handleClick(event, 'restaurants')} id='restaurants'><span>Restaurants</span></SearchTitle>
        <SearchTitle uid={id} onClick={(event:any) => handleClick(event, 'reviews')} id='reviews'><span>Reviews</span></SearchTitle>
        <SearchTitle uid={id} onClick={(event:any) => handleClick(event, 'users')} id='users'><span>Users</span></SearchTitle>
      </>
    </Flex>
  )
}

export default SearchNavigation
