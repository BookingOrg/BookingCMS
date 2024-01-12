import { RouterProvider } from "react-router-dom";
import { routerCMS } from "@route/index.tsx";

function App() {
  const route = routerCMS();
  return <RouterProvider router={route} />;
}

export default App;
