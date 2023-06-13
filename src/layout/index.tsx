import Navigation from '@/components/Navigation'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const MainLayout = () => {
    return (
        <>
            <Navigation />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout
