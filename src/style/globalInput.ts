import styled from 'styled-components'
import { rem } from 'polished'

export const Input = styled.input`
    font-family: 'Roboto', sans-serif;
    width: ${rem('300px')};
    height: ${rem('40px')};
    padding-left: 0.6rem;
    font-weight: 900;
    border: 1px solid ${({ theme }) => theme.borderGray};
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    background-color: ${({ theme: { navbarColor } }) => navbarColor};
`

export const Textarea = styled.textarea``
