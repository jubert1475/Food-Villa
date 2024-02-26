import React from "react";
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import RestuarantMenu from "./src/components/RestuarantMenu";
import Shimmer from "./src/components/Shimmer";
import userContext from "./src/utils/userContex";
import SignUpPage from "./src/components/SignUpPage"
//import Cart from "./src/components/Cart";

//Lazy Loading
const Cart_1 = lazy(() => import("./src/components/Cart"));
import { Provider } from "react-redux";
import store from "./src/utils/store";
import LoginPage from "./src/components/LoginPage";

const About = lazy(() => import("./src/components/About"));

const App = () => {
  const user = {
    name: "Juber Tamboli",
    email: "jubert1475@gmail.com",
  };

  return (
    <>
    <Provider store={store}>

    
      <userContext.Provider
        value={{user:user}}
        >
      
        <Header />
        <Outlet />
      

      </userContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading About Page</h1>}>
            <About />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/restaurant/:id",
        element: <RestuarantMenu />,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Cart_1 />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: "/cart/login",
        element: <LoginPage />,
        errorElement: <Error />,
      },
      {
        path: "/cart/signUp",
        element: <SignUpPage />,
        errorElement: <Error />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
