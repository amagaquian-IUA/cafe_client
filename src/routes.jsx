import { createBrowserRouter } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Products from './pages/products/Products';

import Error from './pages/error/Error';
const router = createBrowserRouter([
    {
        path: "/:cat?",
        element: <Landing />,
        errorElement: <Error type={"error_desconocido"} />
    },
    {
        path: "/product/:id",
        element: <Products />,
        errorElement: <Error type={"error_desconocido"} />
    },
    {
        path: '*',
        element: <Error type={"error_404"} />,
        errorElement: <Error type={"error_desconocido"} />
    }
])

export default router