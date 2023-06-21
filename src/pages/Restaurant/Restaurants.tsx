import { PageWrapper } from '@/style/globalWrapper'
import { useFetch } from '@/hooks/http-hook'

const Restaurants = () => {

    const {payload } = useFetch('http://localhost:8000/api/restaurant')

    return (
        <PageWrapper>
            {JSON.stringify(payload)}
        </PageWrapper>
    )
}

export default Restaurants