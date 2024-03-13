import { createContext } from "react";

 const userContext = createContext({
  user1: {
    name: "Dummy Name",
    email: "Dummy@gmail.com",
  },
});


export default userContext;