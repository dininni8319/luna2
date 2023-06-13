import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  
  @media(min-width: 768px) {
    flex-direction: row;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5rem;
`;