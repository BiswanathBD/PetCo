import { createBrowserRouter } from "react-router";
import Home from "./Components/Home";
import Homepage from "./Pages/Homepage";
import Services from "./Components/Services";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import MyProfile from "./Private/MyProfile";
import Details from "./Private/Details";
import Reset from "./Pages/Reset";
import BookService from "./Pages/BookService";
import UpdateProfile from "./Pages/UpdateProfile";

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
      {
        path: "/profile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
      },
      {
        path: "/reset",
        element: <Reset></Reset>,
      },
      {
        path: "/booking",
        element: <BookService></BookService>,
      },
      {
        path: "/update",
        element: <UpdateProfile></UpdateProfile>,
      },
    ],
  },
]);
