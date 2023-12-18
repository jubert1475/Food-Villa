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
import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import RestuarantMenu from "./src/components/RestuarantMenu";
import LoginPage from "./src/components/LoginPage";
//import Cart from "./src/components/Cart";

//Lazy Loading
const Cart= lazy(()=>import("./src/components/Cart"));

const App = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
      <LoginPage />
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
        element: <About />,
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
        element: <Cart />,
        errorElement: <Error />,
      }
      
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
