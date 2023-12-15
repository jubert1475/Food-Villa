import { useState } from "react";
import { Link } from "react-router-dom";

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
              <Link to="/account">My Account</Link>
            </li>
            <li>
              <Link to="/contact">contact us</Link>
            </li>
          </ul>
        </div>
        {userLogin ? (
          <button onClick={() => setUserLogin(false)}>Login</button>
        ) : (
          <button onClick={() => setUserLogin(true)}>Logout</button>
        )}
      </div>
    </>
  );
};

export default Header;
