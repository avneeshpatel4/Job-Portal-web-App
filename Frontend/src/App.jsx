import React from "react";
import { Button } from "./components/ui/button";
import Navbar from "./components/components_lite/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";
import Home from "./components/components_lite/Home";
import PrivacyPolicy from "./components/components_lite/PrivacyPolicy";
import TermsOfService from "./components/components_lite/TermsofService";
import Jobs from "./components/components_lite/Jobs";
import Browse from "./components/components_lite/Browse";
import Profile from "./components/components_lite/Profile";
import Description from "./components/components_lite/Description";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/PrivacyPolicy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/TermsofService",
    element: <TermsOfService/>,
  },
   {
    path: "/Jobs",
    element: <Jobs/>,
  },
    {
    path: "/description/:id",
    element: <Description/>,
  },
   {
    path: "/Browse",
    element: <Browse/>,
  },
   {
    path: "/Profile",
    element: <Profile/>,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
