import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  const router = useRoutes(routes);
  return <>{router}</>;
}

export default App;
