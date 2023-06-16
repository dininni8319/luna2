import styled from 'styled-components'
import { Input } from '@/style/globalInput'
import { rem } from 'polished'

export const AuthInputStyle = styled(Input)`
    border-bottom: ${rem('1px')} solid
        ${(props) => (props.formInvalid ? 'red' : 'green')};
    border: ${({ disabled }) => disabled && "1px solid #ccc" };
    margin-left: 0.4rem;
    ${({ formInvalid }) => (formInvalid ? 'red' : 'rgba(149,149,149,0.90)')};
`
