import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import RouterPageRootLayout from "./RouterPageRootLayout";
import RouterPageError from "./RouterPageError";
import RouterPageDetail from "./RouterPageDetail";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

const router = createBrowserRouter([
  {
    path: "/root",
    element: <RouterPageRootLayout />,
    errorElement: <RouterPageError />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:productId",
        element: <RouterPageDetail />,
      },
    ],
  },
]);

// const router = createBrowserRouter(routeDefinitions);

export default function RouterPage() {
  return <RouterProvider router={router} />;
}
