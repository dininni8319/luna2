import LayoutComponent from '@/components/LayoutComponent/index'
import { Flex } from '@/style/globalLayout'
import { Link } from 'react-router-dom'
import { PageWrapper } from '@/style/globalWrapper'

const NotFound = () => {
    return (
        <PageWrapper>
            <LayoutComponent>
                <Flex>
                    <h2>404 The page that you are looking for not exists!</h2>
                </Flex>
            </LayoutComponent>
            <Flex justify="center">
                <Link to="/">Continue</Link>
            </Flex>
        </PageWrapper>
    )
}

export default NotFound
