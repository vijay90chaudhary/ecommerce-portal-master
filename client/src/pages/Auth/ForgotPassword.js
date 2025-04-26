import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const ForgotPasssword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
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
  return (
    <Layout title={"Forgot Password - Ecommerce APP"}>
       <div
        className="wrapper"
        style={{ backgroundImage: 'url("images/bg-registration-form-1.jpg")' }}
      >
        <div className="inner">
          <div className="image-holder">
            <img src="images/registration-form-1.jpg" />
          </div>
          <form onSubmit={handleSubmit}>
            <h3>ForgotPasssword Form</h3>

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
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="What is the favirate sport"
                className="form-control"
                required
              />
              <i className="zmdi zmdi-lock" />
            </div>
            <div className="form-wrapper">
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="New Password"
                className="form-control"
                required
              />
              <i className="zmdi zmdi-lock" />
            </div>
            <button className="button" onClick={() => {navigate('/login')} }>
              Forget Password
              <i className="zmdi zmdi-arrow-right" />
            </button>
           
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPasssword;