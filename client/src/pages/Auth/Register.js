import React, { useState } from "react";

import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
// import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  //   form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  // console.log(process.env.REACT_APP_API);
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
            <h3>Registration Form</h3>
            <div className="form-wrapper">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="form-control"
                required
              />
            </div>

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
            <div className="form-wrapper">
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone number"
                className="form-control"
                required
              />
              <i className="zmdi zmdi-lock" />
            </div>
            <div className="form-wrapper">
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
                className="form-control"
                required
              />
              <i className="zmdi zmdi-lock" />
            </div>
            <div className="form-wrapper">
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="What is your Favorite sport"
                className="form-control"
                required
              />
              <i className="zmdi zmdi-lock" />
            </div>

            <button className="button">
              Register
              <i className="zmdi zmdi-arrow-right" />
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
