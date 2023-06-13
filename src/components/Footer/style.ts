import styled from 'styled-components'

export const FooterStyle = styled.div`
  background: white;
  height: 8vh;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.textGray};

  ul {
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  
`

export const CopyRightTag = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 14.06px;
`
