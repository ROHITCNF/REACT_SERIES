import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorPath from "./components/ErrorPath";
import ReasturantMenu from "./components/ReasturantMenu";
import Loading from "./components/Loading.jsx";
//import Grocery from "./components/Grocery";
//BrowserRouter

const Grocery = lazy(() => import("./components/Grocery.jsx"));
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* children will be replacing the outlet */}
      <Outlet />
    </div>
  );
};

//configure the browser route : how the route will work in the app
// Also create the children route
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/resturants/:resId",
        element: <ReasturantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Loading />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPath />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
