import styled from 'styled-components'
import { Input } from '@/style/globalInput'
import { rem } from 'polished'

export const AuthInputStyle = styled(Input)`
    border-bottom: ${rem('1px')} solid
        ${({ forminvalid }: { forminvalid: string }) =>
            !forminvalid ? 'red' : '#ccc'};
    border: ${({ disabled }: { disabled: boolean }) =>
        disabled && '1px solid #ccc'};
    margin-left: 0.4rem;
    ${({ forminvalid }: { forminvalid: string }) =>
        !forminvalid ? 'red' : 'rgba(149,149,149,0.90)'};
`
