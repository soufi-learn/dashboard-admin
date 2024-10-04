import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const router = useRoutes(routes);
  return (
    <div className="flex items-start gap-6 p-6 pb-5">
      <Sidebar />
      <div className="w-full lg:w-4/5">
        <Header />
        {router}
      </div>
    </div>
  );
}

export default App;
