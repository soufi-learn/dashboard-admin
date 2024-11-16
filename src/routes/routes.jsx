import Home from "../pages/home/Home";
import NewUser from "../pages/newUser/NewUser";
import Products from "../pages/products/Products";
import Product from "../pages/product/Product";
import UsersList from "../pages/users/UsersList";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UsersList /> },
  { path: "/newUser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
  { path: "/products/:productId", element: <Product /> },
];

export default routes;
