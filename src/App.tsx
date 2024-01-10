// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

// import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
// import "mapbox-gl/dist/mapbox-gl.css";
// import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routerCMS } from "./route/index.tsx";

function App() {
  const route = routerCMS();
  return <RouterProvider router={route} />;
}

export default App;
