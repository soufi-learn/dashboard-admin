import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";
import Header from "./components/header/Header";

function App() {
  const router = useRoutes(routes);
  return (
    <>
      <Header />
      {router}
    </>
  );
}

export default App;
