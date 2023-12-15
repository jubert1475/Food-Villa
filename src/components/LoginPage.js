
import { useFormik } from "formik";

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: " ",
      password: " ",
    },
  });

  console.log("Form Vaues" , formik.values )

  return (
    <>
      <div>
        <h1>Sign Up..!</h1>
      </div>
      <div>
        <form id="Form">
          <label>Name</label>
          <input
            id="name"
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <label>Last Name</label>
          <input
            id="lastname"
            type="text"
            name="lastname"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            />
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
            type="tex "
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            />

        </form>
        <button>Submit</button>
      </div>
    </>
  );
};

export default LoginPage;