import { ReactNode } from 'react'
import { Container } from "@/style/globalLayout"
import { Flex } from "@/style/globalLayout"

interface Props {
 children: ReactNode;
 className?: string
}

const LayoutComponent = ({ children, className,  }:Props) => {
  return (
    <Container className={className}>
       <Flex>
         {children}
       </Flex>
    </Container>
  )
}

export default LayoutComponent
