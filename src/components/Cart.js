import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <>
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
            <button
              style={{
                margin: "20px",
                border: "1px solid green",
                background: "green",
                padding: "5px",
                color:"white"
              }}
            >
              <div>New To Food Villa?</div>
              <div>SIGN UP</div>
            </button>
          </div>
        </div>
        <img
          className="menu_logo"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r"
        />
      </div>
      <div></div>

      <div className="checkout_card">
        <ul>
          {cartItems.map((menuItem) => (
            <h3>{menuItem}</h3>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Cart;
