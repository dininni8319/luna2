import { ReactNode } from 'react'
import { Container, Flex } from '@/style/globalWrapper'

interface Props {
    children: ReactNode
    className?: string
}

const LayoutComponent = ({ children, className }: Props) => {
    return (
        <Container className={className}>
            <Flex>{children}</Flex>
        </Container>
    )
}

export default LayoutComponent
