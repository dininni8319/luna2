import styled from 'styled-components'
import { rem } from 'polished'

export const TileGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: ${rem('50px')} ${rem('30px')};
    padding: ${rem('30px')} 0;
`

export const TileContainer = styled.div`
    width: ${rem("280px")};
    border: 1px solid #ebebeb;
    background-color: white;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    overflow: hidden;
`

export const TileTopLine = styled.div`
    width: 100%;
    height: 8px;
    background-color: #e47d31;
`
