import styled from 'styled-components'
import { rem } from 'polished'

export const TileGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: ${rem('50px')} ${rem('30px')};
    padding: ${rem('30px')} 0;
    justify-items: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const TileContainer = styled.div`
    width: ${({ width }) => width ? rem(width) :rem('280px')} ;
    border: 1px solid #ebebeb;
    background-color: white;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    overflow: hidden;

    @media(max-width: 768px) {
        width: 100%;
    }
`

export const TileTopLine = styled.div`
    width: 100%;
    height: 8px;
    background-color: #e47d31;
`
