import styled from 'styled-components'

export const FooterStyle = styled.div`
  background: white;
  height: 70%;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.textGray};

  ul {
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
