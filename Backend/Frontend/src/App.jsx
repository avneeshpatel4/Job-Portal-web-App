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
import Companies from "./components/adminComponents/Companies";
import CompanyCreate from "./components/adminComponents/CompanyCreate";
import CompanySetup from "./components/adminComponents/CompanySetup";
import AdminJobs from "./components/adminComponents/AdminJobs";
import PostJob from "./components/adminComponents/PostJob";
import Applicants from "./components/adminComponents/Applicants";
import ProtectedRoute from "./components/adminComponents/ProtectedRoute";

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
    path: "/navbar",
    element: <Navbar />,
  },
  {
    path: "/PrivacyPolicy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/TermsofService",
    element: <TermsOfService />,
  },
  {
    path: "/Jobs",
    element: <Jobs />,
  },
  {
    path: "/description/:id",
    element: <Description />,
  },
  {
    path: "/Browse",
    element: <Browse />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
{
    path: "/admin/companies",
    element: (
      <ProtectedRoute>
        <Companies />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/companies/create",
    element: (
      <ProtectedRoute>
        <CompanyCreate />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/companies/:id",
    element: (
      <ProtectedRoute>
        <CompanySetup />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs",
    element: (
      <ProtectedRoute>
        {" "}
        <AdminJobs />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs/create",
    element: (
      <ProtectedRoute>
        {" "}
        <PostJob />{" "}
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs/:id/applicants",
    element: (
      <ProtectedRoute>
        <Applicants />
      </ProtectedRoute>
    ),
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
