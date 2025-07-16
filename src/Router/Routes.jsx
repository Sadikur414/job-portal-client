import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Home/Register/Register";
import Login from "../pages/Home/Login/Login";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivetRoute from "./PrivetRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplication from "../pages/MyApplications/MyApplication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/apply/:id",
        element: (
          <PrivetRoute>
            <JobDetails></JobDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/job-apply/:id",
        element: (
          <PrivetRoute>
            <JobApply></JobApply>
          </PrivetRoute>
        ),
      },
      {
        path: "/myapplication",
        element: (
          <PrivetRoute>
            <MyApplication></MyApplication>
          </PrivetRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
export default router;
