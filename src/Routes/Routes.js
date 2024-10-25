
import { Navigate, useRoutes } from "react-router-dom";
import Home from "../pages/Home"
import Plans from "../pages/Plans"
import Summary from "../pages/Summary"
import NotFound from "../components/NotFound"
import RegisterPlan from "../pages/RegisterPlan"
import PrivateRoute from './PrivateRoute';
export default function Router() {
    const routes = useRoutes([
        {
            path: '/',
            element: <Home />,
            exact: true
        },
        {
            path: '/home',
            element: <Home />,
            exact: true
        },
        {
            path: '/register-plan',
            element: (
                <PrivateRoute>
                    <RegisterPlan />
                </PrivateRoute>
            ),
            children: [
                {
                    path: '',
                    element: <Plans />,
                    exact: true
                },
                {
                    path: 'summary',
                    element: <Summary />,
                    exact: true
                },
                {
                    path: '*',
                    element: <NotFound />,
                    exact: true
                },
            ],
        },
    ]);
    return routes;

}