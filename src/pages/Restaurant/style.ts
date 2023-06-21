import styled from 'styled-components'
import { rem } from 'polished'

export const FieldTitle = styled.p`
    color: #979797;
    font-weight: bold;
    margin-bottom: 8px;
`

export const NewRestaurantContainer = styled.form`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${rem('20px')} 0;

    @media (max-width: 768px) {
        padding: 0;
    }
`

export const InformationContainer = styled.div`
    flex: 2;
    width: auto;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${rem('20px')} ${rem('60px')};
    margin-bottom: 30px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: ${rem('20px')} ${rem('30px')};
    }
`
