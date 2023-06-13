import styled from 'styled-components'

export const FooterStyle = styled.div`
  background: white;
  height: 8vh;
  border-bottom: 1px solid ${props => props.theme.borderGray};

  ul {
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  p {  
    font-size: 12px;
    font-weight: 400;
    line-height: 14.06px;
    padding: 0.60rem;
    margin: 0;
    background: white;
    height: 100%;
    width: 100%
  }
`

