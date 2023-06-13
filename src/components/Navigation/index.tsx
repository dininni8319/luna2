import { memo } from 'react'
import { Link } from 'react-router-dom'
import { NavigationStyle, NavLinksUl } from './NavbarStyle'
import SignupButton from '@/components/SignUpButton'

const Navigation = () => {
  return (
    <NavigationStyle>
      <div>
        <Link to="/">LUNA</Link>
      </div>
      <NavLinksUl>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/search'>Search</Link>
        </li>
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
        <SignupButton />
      </NavLinksUl>
    </NavigationStyle>
  )
}

export default memo(Navigation)