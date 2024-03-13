import { useSelector } from "react-redux";
import useRestuarantMenu from "../utils/useRestuarantMenu";
import LoginPage from "./LoginPage";
import { Link } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [loginPage, setLoginPage]= useState(false)
  const loginHandler = () => {
    return (
      setLoginPage(!loginPage)
    );
  };

  console.log(cartItems);
  return (
    <div className="cart">
      <div className="customer_details">
        <div>
          <div>
            <h2>Account</h2>
            <h4>
              To place your order now, log in to your existing account or sign
              up.
            </h4>
          </div>
          <div> 
            <Link to="/cart/login">
            <button
              
              style={{
                margin: "20px",
                border: "1px solid green",
                background: "white",
                padding: "5px",
              }}
            >
              <div>Have an account?</div>
              <div>LOG IN</div>
            </button>
            </Link>
            <Link to="/cart/signUp">
            <button
              style={{
                margin: "20px",
                border: "1px solid green",
                background: "green",
                padding: "5px",
                color: "white",
              }}
            >
              <div>New To Food Villa?</div>
              <div>SIGN UP</div>
            </button></Link>
            <div>
            {loginPage && <LoginPage />}
            </div>
          </div>
        </div>
      </div>

      <div className="checkout_card">
        <h2 style={{ margin: "10px",padding:"10px", borderBottom:"1px solid black" }}>Your Order Details:</h2>

        <div>
          <ul style={{ margin: "10px" }}>
            {cartItems.map((menuItem) => (
              <h5>
                {menuItem.name} - {menuItem.price / 100}RS
              </h5>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Cart;
