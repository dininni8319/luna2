import { memo } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { NavLinksUl } from './NavLinksStyle'

export const NavigationStyle = styled.div`
 width: 100%;
 height: 5vh;
 background: ${props => props.theme.navbarColor};

 h3 {
  margin: 0;
  padding: 0;
 }
`

const Navigation = () => {
  return (
    <NavigationStyle>
      <Link to="/">LUNA</Link>
        <NavLinksUl>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
        </NavLinksUl>
    </NavigationStyle>
  )
}

export default memo(Navigation)