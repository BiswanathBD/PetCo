import { createBrowserRouter } from "react-router";
import Home from "./Components/Home";
import Homepage from "./Pages/Homepage";
import Services from "./Components/Services";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

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
      {
        path: "/SignIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/SignUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
