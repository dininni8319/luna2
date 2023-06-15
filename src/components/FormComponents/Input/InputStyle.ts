import styled from 'styled-components'
import { Input } from '@/style/globalInput'
import { rem } from 'polished'

export const AuthInput = styled(Input)`
    /* border-bottom: ${rem('1px')} solid red; */
    margin-left: 0.40rem;
    ${({ formInvalid }) => (formInvalid ? 'red' : 'rgba(149,149,149,0.90)')};
`
