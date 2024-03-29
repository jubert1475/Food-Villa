
import { useFormik } from "formik";

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
  });

  console.log("Form Vaues" , formik.values )

  return (
    <>
      
      <div>
        <form id="Form">
          
          <label>E-Mail</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            />
          <label>Password</label>
          <input
            id="password"
            type="password"
            name="password" 
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            />
            <label>Confirm Password</label>
          <input
            id="password"
            type="password"
            name="password" 
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            />
            <div>
            <button style={{margin:"5px"}}>Sign Up</button>
            </div>
            

        </form>
        
      </div>
    </>
  );
};

export default LoginPage;