import { ChangeEvent } from 'react';
import { SearchTitle } from '@/style/globalTitle'
import { Flex } from '@/style/globalWrapper'
import { useAppDispatch, useAppSelector } from '@/hooks/dispatch-selector-hooks'
import { onClick } from '@/store/slices/title'

const SearchNavigation = () => {
  const dispatch = useAppDispatch()

  const { isClicked, id } = useAppSelector(state => state.title)
  
  const handleClick = (id: string) => {
    dispatch(onClick({
       id: id
    }))
  }

  return (
    <Flex justify='center'>
      <>
        <SearchTitle uid={id} isClicked={isClicked} onClick={() => handleClick('restaurants')} id='restaurants' initialStyle='restaurants'><span>Restaurants</span></SearchTitle>
        <SearchTitle uid={id} isClicked={isClicked} onClick={() => handleClick('reviews')} id='reviews'><span>Reviews</span></SearchTitle>
        <SearchTitle uid={id} isClicked={isClicked} onClick={() => handleClick('users')} id='users'><span>Users</span></SearchTitle>
      </>
    </Flex>
  )
}

export default SearchNavigation
