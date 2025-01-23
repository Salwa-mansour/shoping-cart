import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/_Layout";
import App from "./App";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "product/:id", element: <Product /> },
    ],
  },
  // {
  //   path: "shop",
  //   element: <Shop />,
  // },
  // {
  //   path: "Product/:id",
  //   element: <Product />,
  // },
];

export default routes;
