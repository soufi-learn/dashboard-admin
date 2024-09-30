import Home from "../pages/home/Home";
import NewUser from "../pages/newUser/NewUser";
import Products from "../pages/products/Products";
import UsersList from "../pages/users/UsersList";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UsersList /> },
  { path: "/newUser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
];

export default routes;
