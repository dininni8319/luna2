import {
    createBrowserRouter,
    RouterProvider,
    Routes,
    Route
} from 'react-router-dom'
import {
    Home,
    Login,
    Register,
    Search,
    Profile,
    NotFound,
    CreateProfile
} from '@/pages/index'
import Layout from '@/layout'

const router = createBrowserRouter([{ path: '*', Component: Root }])

const Router = () => {
    return <RouterProvider router={router} />
}

export default Router

function Root() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/search" element={<Search />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/create/profile/" element={<CreateProfile />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}
