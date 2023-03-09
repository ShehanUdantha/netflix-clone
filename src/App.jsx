import React from "react";
import "./App.css";
import HomePage from "./HomePages/HomePage";
import Login from "./LoginPage/Login";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import StepOne from "./RegisterPages/StepOne";
import RegForm from "./RegisterPages/RegForm";
import StepTwo from "./RegisterPages/StepTwo";
import PlanForm from "./RegisterPages/PlanForm";
import StepThree from "./RegisterPages/StepThree";
import CreditForm from "./RegisterPages/CreditForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <StepOne />,
  },
  {
    path: "/regform",
    element: <RegForm />,
  },
  {
    path: "/plan",
    element: <StepTwo />,
  },
  {
    path: "/planform",
    element: <PlanForm />,
  },
  {
    path: "/paymentPicker",
    element: <StepThree />,
  },
  {
    path: "/creditoption",
    element: <CreditForm />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
