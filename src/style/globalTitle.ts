import styled from 'styled-components'
import { rem } from 'polished'

export const Title = styled.h1`
    text-transform: uppercase;
    padding-bottom: 0.6rem;
    text-align: center;
    position: relative;
    font-weight: 700;

    &::before {
        content: '';
        position: absolute;
        width: ${rem('100px')};
        top: 100%;
        left: 18%;
        border-bottom: 2px solid ${({ theme: { buttonColor } }) => buttonColor};

        @media (max-width: 768px) {
            left: 40%;
        }
    }
`
