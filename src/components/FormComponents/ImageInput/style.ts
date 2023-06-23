import styled from 'styled-components';
import { rem } from 'polished'
import { AuthInputStyle } from '../Input/InputStyle'

export const ImageInputStyle = styled(AuthInputStyle)`
    display: none;
`

export const Label = styled.label`
    background-color: ${({ theme }) => theme.buttonColor};
    color: white;
    width: ${rem('200px')};
    height: ${rem('30px')};
    text-transform: uppercase;
    font-weight: normal;
    font-size: 14px;
    border-radius: ${rem('30px')};
    text-align: center;
    padding-top: ${rem('10px')};
`