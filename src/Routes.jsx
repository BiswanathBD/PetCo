import { createBrowserRouter } from "react-router";
import Home from "./Components/Home";
import Homepage from "./Pages/Homepage";
import Services from "./Components/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>,
      },
      {
        path: "/service",
        element: <Services></Services>,
      },
    ],
  },
]);
