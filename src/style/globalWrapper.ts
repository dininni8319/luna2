import styled from 'styled-components'

export const PageWrapper = styled.section`
    width: 100%;
    min-height: 82vh;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
`
export const Flex = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => (direction ? direction : 'column')};
    width: 100%;
    height: ${({ height }) => (height ? height : 'auto')};
    padding: ${({ padding }) => (padding ? padding : '0')};
    justify-content: ${({ justify }) => (justify ? justify : 'center')};
    align-items: ${({ align }) => (align ? align : 'center')};
    border-bottom: 2px solid ${({ color }) => (color ? color : 'trasparent')};

    @media (min-width: 768px) {
        width: ${({ width }) => (width ? width : 'auto')};
        flex-direction: ${({ smdirection }) =>
            smdirection ? smdirection : 'row'};
        justify-content: ${({ justify }) => (justify ? justify : 'center')};
        align-items: ${({ align }) => (align ? align : 'center')};
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 5rem;
`

export const FieldWrapper = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`
