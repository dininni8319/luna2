import { ReactNode } from 'react'
import { Container } from "@/style/globalLayout"
import { Flex } from "@/style/globalLayout"

interface Props {
 children: ReactNode;
 className: string
}

const index = ({ children, className }:Props) => {
  return (
    <Container>
       <Flex>
         {children}
       </Flex>
    </Container>
  )
}

export default index
