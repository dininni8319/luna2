import styled from 'styled-components'
import { rem } from 'polished'

export const Selector = styled.select`
    width: 340px;
    height: 45px;
    border: 1px solid #ebebeb;
    background-color: white;
    padding: 0 10px;
    border-radius: 3px;
    outline: none;
    border-bottom: ${rem('1px')} solid
        ${({ forminvalid }: { forminvalid: string }) =>
            !forminvalid ? 'red' : '#ccc'};
`
