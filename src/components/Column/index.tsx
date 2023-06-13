import { ReactNode } from 'react'
import { Container } from '@/style/globalLayout'

interface IProps {
    children: ReactNode
    className: string
    centerAlign: boolean
    centerJustify: boolean
}

const Column = ({
    children,
    className,
    centerAlign,
    centerJustify
}: IProps) => (
    <Container
        className={className}
        centerAlign={centerAlign}
        centerJustify={centerJustify}
    >
        {children}
    </Container>
)

export default Column
