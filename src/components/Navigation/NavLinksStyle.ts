import styled from 'styled-components'

export const NavLinksUl = styled.ul`
  display: flex;

  li {
    cursor: pointer;
  }

  justify-content: space-around;
  width: 10%;

  @media (max-width: 768px) {
    width: 30%;
  }
`
