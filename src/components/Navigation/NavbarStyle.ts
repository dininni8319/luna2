import styled from 'styled-components'

export const NavigationStyle = styled.div`
  width: 100%;
  height: 5vh;
  background: ${(props) => props.theme.navbarColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavLinksUl = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 30%;

  @media (max-width: 768px) {
    width: 100%;
  }
`

