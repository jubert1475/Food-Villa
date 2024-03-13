import LoginPage from "./LoginPage";
import userContext from "../utils/userContex";
import { useContext } from "react";

const Footer = () => {
  const {user}= useContext(userContext);

    return <h1>This site is developed by- {user.name}</h1>;
    
  };

  export default Footer;
  