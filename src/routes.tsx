import { RouteObject, Navigate } from 'react-router-dom'
import Home from './views/home'
import Rocket from './views/rocket'
import User from './views/user'
export const routes: Array<RouteObject> = [
    {
        path: '/',
        element: <Navigate to={'home'} />
    },
    {

        path: '/home',
        element: <Home />
    },
    {
        path: '/rocket',
        element: <Rocket />
    },
    {
        path: '/user',
        element: <User />
    },
]