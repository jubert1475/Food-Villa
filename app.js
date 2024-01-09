//React OverWrite html code.eg. if u have multiple h1 tag inside root and u r using react render then it will over write it.

//  const header   = React.createElement(
//     "h1",
//     {
//       //takes ID, class, style

//       id: "title",
//       className: "Header",
//     },
//     "Hello World"
//   );

//   const head1 = React.createElement(
//     "h1",
//     {
//       key: "head1",
//       id: "one",
//     },
//     "This is heading One"
//   );

//   const head2 = React.createElement(
//     "h1",
//     {
//       key: "head2",
//       id: "two",
//     },
//     "This is heading Two"
//   );

// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//   },
//   [head1, head2]
// );

// const FirstComponent = () => (
//   <div id="container">
//     <h1>This is my first React component..😍😍</h1>
//   </div>
// );

//   const paragraph=(<p>This is my first JSX component...</p>)

//

/*
 *Header
      -Logo
      -Nav Items
      -cart
      -men
      -women

      

 Body
      -Search
      -Item-Card
          -Img
          -Name
          -price
          


 Footer

      - contact us
      -More info

      */
import React, { lazy, StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import RestuarantMenu from "./src/components/RestuarantMenu";
import LoginPage from "./src/components/LoginPage";
import Shimmer from "./src/components/Shimmer";
//import Cart from "./src/components/Cart";

//Lazy Loading
const Cart_1 = lazy(() => import("./src/components/Cart"));

const About = lazy(() => import("./src/components/About"));

const App = () => {
  return (
    <>
      <StrictMode>
        <Header />
        <Outlet />
        <Footer />
      </StrictMode>
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
