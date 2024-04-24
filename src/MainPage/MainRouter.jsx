import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootPage from "./RootPage";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";

const router = createBrowserRouter([
  {
    // 상위 페이지
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    // children는 하위 페이지
    children: [
      {
        path: "react",
        element: <HomePage />,
      },
      {
        path: "test",
        element: <div>test</div>,
      },
      {
        path: "test/:testId",
        element: <div>testId</div>,
      },
    ],
  },
  {
    path: "/test-page",
    element: <RootPage />,
    children: [
      {
        path: "page",
        element: <HomePage />,
      },
    ],
  },
]);

export default function MainRouter() {
  return <RouterProvider router={router} />;
}
