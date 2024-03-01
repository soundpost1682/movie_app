import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/detail",
      element: <Detail />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
