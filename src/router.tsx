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
import Protected from './utilities/protected'

const router = createBrowserRouter([{ path: '*', Component: Root }])

const Router = () => {
    return <RouterProvider router={router} />
}

export default Router

function Root() {
   
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/create/profile/:slug" element={<CreateProfile />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/home" element={
                    <Protected>
                        <Home />
                    </Protected>
                } />
                <Route path="/search" element={
                    <Protected>
                        <Search />
                    </Protected>
                } />
                <Route path="/profile" element={
                    <Protected>
                        <Profile />
                    </Protected>
                }/>
            </Route>
        </Routes>
    )
}
