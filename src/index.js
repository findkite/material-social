import * as React from "react";
import * as ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import ErrorPage from "./routes/ErrorPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Home from "./routes/Home";
import Settings from "./routes/Settings";
import UserInfo from "./routes/UserInfo";
import SignUp from "./routes/SignUp";
import SignIn from "./routes/SignIn";
import FollowingList from "./components/FollowingList";
import FollowersList from "./components/FollowersList";
import ProfileUserInfo from "./components/ProfileUserInfo";
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "/profile",
        element: <UserInfo />,
        children: [
          {
            path: ":id",
            element: <ProfileUserInfo />,
            children: [
              {
                path: "following",
                element: <FollowingList />,
              },
              {
                path: "follower",
                element: <FollowersList />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
]);
root.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ThemeProvider>
);
