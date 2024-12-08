import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import ErrorRoute from "./pages/errorRoute";
<<<<<<< HEAD
import ForgetPassword from "./pages/ForgetPassword";
=======
import ForgotPassword from "./pages/forgotPassword";
>>>>>>> f6b0764778b792a0a4546ffff5908d15305072aa
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
import ExpensePage from "./pages/expense";

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage/>,
      errorElement: <ErrorRoute/>,
    },
    {
      path: "/eror",
      element: <ErrorRoute/>
    },
    {
      path: "/login",
      element: <SignInPage/>
    },
    {
      path: "/register",
      element: <SignUpPage/>
    },
    {
      path: "/forgot-password",
      element: <ForgetPassword/>
    },
    {
      path: "/balance",
      element: <BalancePage/>
    },
    {
      path: "/expense",
      element: <ExpensePage/>
    }

  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;