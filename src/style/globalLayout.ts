import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({direction}) => (direction ? direction : 'column')};
  width: ${({width}) => (width ? width : 'auto')};
  height: ${({height}) => (height ? height : 'auto')};
  padding: ${({padding}) => (padding ? padding : '0')};
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: ${({ justify }) => (justify ? justify : 'flex-start')};
    align-items: ${({ align }) => (align ? align : 'flex-star')};
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5rem;
`;
