import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout.js";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth.js";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
    const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        alert("sucessfully");
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title="Register - Ecommerce App">
      <div
        className="wrapper"
        style={{ backgroundImage: 'url("images/bg-registration-form-1.jpg")' }}
      >
        <div className="inner">
          <div className="image-holder">
            <img src="images/registration-form-1.jpg" />
          </div>
          <form onSubmit={handleSubmit}>
            <h3>Login Form</h3>

            <div className="form-wrapper">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="form-control"
                required
              />
              <i className="zmdi zmdi-email" />
            </div>

            <div className="form-wrapper">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="form-control"
                required
              />
              <i className="zmdi zmdi-lock" />
            </div>
            <button className="button" onClick={() => {navigate('/forgot-password')} }>
              Forget Password
              <i className="zmdi zmdi-arrow-right" />
            </button>
            <button className="button">
              LOGIN
              <i className="zmdi zmdi-arrow-right" />
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default Login;
