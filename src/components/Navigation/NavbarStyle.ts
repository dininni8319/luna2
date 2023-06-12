import styled from 'styled-components'
import { rem } from 'polished'

export const NavigationStyle = styled.div`
  width: 100%;
  height: 6vh;
  background: ${(props) => props.theme.navbarColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavLinksUl = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  height: 100%;

  li:hover {
    border-bottom: 3px solid ${props => props.theme.buttonColor};
    transition: 0.4s ease-in-out;
    padding-bottom: ${rem("5px")}
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

