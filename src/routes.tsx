import { RouteObject, Navigate } from 'react-router-dom'
import Rocket from './views/rocket'
import User from './views/user'
import Home from './views/home'

export const routes: Array<RouteObject> = [
    {
        path: '/',
        element: <Navigate to={'user'} />
    },
    {
        path: '/user',
        element: <User />
    },
    {
        path: '/rocket',
        element: <Rocket />
    },
    {

        path: '/home',
        element: <Home />
    },
]