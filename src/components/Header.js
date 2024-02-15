import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

import userContext from "../utils/userContex";
import {  useSelector } from "react-redux";



const Logo = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo_img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnm9yURneW64_3Ci5fRm1dsvfCIiyj2Ox8KQ&usqp=CAU"
      ></img>
    </a>
  );
};

const Header = () => {
  const [userLogin, setUserLogin] = useState(true);
  const isOnline = useOnline();

  const {user} = useContext(userContext);
  const cartItems = useSelector(store=>store.cart.items);
  console.log(cartItems)
  return (
    <>
      <div className="header">
        <Logo />
      

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">contact us</Link>
          </li>
          <li>
            <Link to="/cart">Cart-{cartItems.length}</Link>
          </li>
        </ul>

        <h1>{isOnline ? "🟢" : "🔴"}</h1>
        {user.name}--
        {user.email}
        {userLogin ? (
          <button className="LogInBtn" onClick={()=>{setUserLogin(false)}  } >
            Login
          </button>
        ) : (
          <button className="LogInBtn" onClick={()=>{setUserLogin(true)}}>
            Logout
          </button>
        )}
      </div>
      </div>
    </>
  );
};

export default Header;
