import { createBrowserRouter } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Products from './pages/products/Products';
import Login from './pages/auth/Login';
import Error from './pages/error/Error';
import PublicLayout from './components/layouts/PublicLayout';
const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        children: [
            {
                path: "/:cat?",
                element: <Landing />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/product/:id",
                element: <Products />,
            },
        ],
        errorElement: <Error type={"error_desconocido"} />
    },


    {
        path: '*',
        element: <Error type={"error_404"} />,
        errorElement: <Error type={"error_desconocido"} />
    }
])

export default router