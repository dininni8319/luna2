import styled from 'styled-components';

export const Button = styled.button`
    outline: none;
    cursor: pointer;
    border: none;
    background: ${(props) => props.theme.buttonColor};
`