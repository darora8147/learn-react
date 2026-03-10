import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, useEffect, useState } from "react";
import { Suspense } from "react";
// import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState();

  // For Authentication
  useEffect(() => {
    //Make some api call to fetch user details, below is static data
    const userDetails = {
      name: "Divyam Arora",
      email: "divyamarora95@gmail.com",
    };
    setUserInfo(userDetails);
  }, []);

  return (
    <div className="app">
      <UserContext.Provider value={{ loggedInUserDetails: userInfo, setUserInfo }}>
        <Header />
        <Outlet />
    </UserContext.Provider>

    </div>
  );
};

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
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:restId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
