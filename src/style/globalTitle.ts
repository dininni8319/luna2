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
        width: 80%;
        top: 100%;
        left: 10%;
        border-bottom: 2px solid ${({ theme: { buttonColor } }) => buttonColor};
    }
`

export const Message = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: ${rem('14px')};
    font-weight: 400;
`

export const SearchTitle = styled.h1`
    text-transform: uppercase;
    padding-bottom: 0.6rem;
    text-align: center;
    position: relative;
    font-weight: 700;
    width: 200px;
    cursor: pointer;

    span::before {
        height: 100%;
        width: 100%;
        content: '';
        position: absolute;
        top: 55%;
        left: 0%;
        border-bottom: 2px solid
            ${({ theme: { buttonColor }, id, uid, initialStyle, isClicked }) =>
                id === uid || (!!initialStyle && !isClicked)
                    ? buttonColor
                    : '#ccc'};
    }
`
