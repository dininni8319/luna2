import styled from 'styled-components'
import { rem } from 'polished'
import { Message } from '@/style/globalTitle'
import { Button } from '@/style/globalButton'

export const ErrorMessage = styled(Message)`
    color: red;
    font-size: 12px;
`

export const AuthButton = styled(Button)`
    color: white;
    background: ${({ disabled }) => (disabled ? '#ccc' : 'inerit')};
    width: ${rem('200px')};
    height: ${rem('35px')};
    text-transform: uppercase;
    font-weight: normal;
    font-size: 14px;
    border-radius: ${rem('30px')};
`
