import styled from 'styled-components'

export const FooterStyle = styled.div`
    background: white;
    min-height: 8vh;
    display: flex;
    flex-direction: column;
    margin: 0;

    span {
        position: relative;
        left: 1%;
        font-size: 12px;
        font-weight: 400;
        line-height: 14.06px;
        /* padding-left: 0.6rem; */
        padding-top: 0.6rem;
        margin: 0;
        padding-right: 0;
        background: white;
        height: 100%;
        width: 100%;
    }
`

export const LinksContainer = styled.div`
    display: flex;
    padding: 0.6rem;
    border-bottom: 1px solid ${(props) => props.theme.borderGray};

    @media (max-width: 768px) {
        display: block;
    }
`

export const FooterSectionLinks = styled.div`
    display: flex;
    width: 40%;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const FooterSectionIcons = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
`

export const IconSection = styled.div`
    display: flex;
    width: 40%;
    justify-content: space-around;

    @media (max-width: 768px) {
        width: 100%;
        padding-top: 0.7rem;
        justify-content: space-between;
    }
`
