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
    CreateProfile,
    CreateNewRestaurant,
    Restaurants
} from '@/pages/index'
import Layout from '@/layout'
import Protected from './utilities/protected'
import { AuthContext } from '@/context/auth-context'
import { useAuth } from '@/hooks/auth-hook'

const router = createBrowserRouter([{ path: '*', Component: Root }])

const Router = () => {
    return <RouterProvider router={router} />
}

export default Router

function Root() {
    const { token, userData, login, logout } = useAuth()

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: !!token,
                token: token,
                name: userData.name,
                login: login,
                logout: logout
            }}
        >
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/create/profile/:slug"
                        element={<CreateProfile />}
                    />
                    <Route path="*" element={<NotFound />} />
                    <Route
                        path="/home"
                        element={
                            <Protected>
                                <Home />
                            </Protected>
                        }
                    />
                    <Route
                        path="/search"
                        element={
                            <Protected>
                                <Search />
                            </Protected>
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <Protected>
                                <Profile />
                            </Protected>
                        }
                    />
                    <Route
                        path="/create/restaurant"
                        element={
                            <Protected>
                                <CreateNewRestaurant />
                            </Protected>
                        }
                    />
                    <Route
                        path="/restaurants"
                        element={
                            <Protected>
                                <Restaurants />
                            </Protected>
                        }
                    />
                </Route>
            </Routes>
        </AuthContext.Provider>
    )
}
