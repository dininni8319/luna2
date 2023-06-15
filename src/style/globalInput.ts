import styled from 'styled-components'
import { rem } from 'polished'

export const Input = styled.input`
    font-family: 'Roboto', sans-serif;
    width: ${rem('300px')};
    height: ${rem('40px')};
    padding-left: 0.6rem;
    margin-bottom: 0.6rem;
    margin-left: ${({ margin }) => (margin ? margin : '0')};
    font-weight: 900;
    border: 1px solid ${({ theme }) => theme.borderGray};
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
    background-color: ${({ theme: { navbarColor } }) => navbarColor};

    @media (max-width: 768px) {
        margin-left: 0;
    }
`

export const Textarea = styled.textarea``
