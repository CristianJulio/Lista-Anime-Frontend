import React, { useContext, useEffect, useState } from "react";
import authContext from "../../context/auth/authContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  LoginContainer,
  TitleLogin,
  FormLogin,
  InputForm,
  ButtonForm,
  EnlaceLogin,
  TermsContainer
} from "../../styles/auth/Auth.styles";
import Header from "../header/Header";

const Signup = ({ history }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    password_confirm: "",
    terms_accepted: false
  });

  const { username, email, password, password_confirm, terms_accepted } = credentials;

  const { mensaje, signup } = useContext(authContext);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (mensaje.type === "error")
      toast.error(mensaje.msg, { hideProgressBar: true });

    if (token) history.push("/");
  }, [mensaje, history, token]);

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    
    setCredentials((credentials) => ({
      ...credentials,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "" || password === "" || email === "" || password_confirm === "")
      return toast.warn("Fields can't be blank", { hideProgressBar: true });
    
    if(password.length < 6)
      return toast.warn("Password must have a minimum of 6 characters", { hideProgressBar: true });
      
    if(password !== password_confirm)
      return toast.warn("Passwords do not match", { hideProgressBar: true });

      signup(credentials);
  };

  return (
    <>
      <Header />
      <LoginContainer>
        <TitleLogin>Sign Up</TitleLogin>
        <FormLogin onSubmit={handleSubmit}>
          <InputForm
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            placeholder="Username"
          />
          <InputForm
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
          />
          <InputForm
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
          />
          <InputForm
            type="password"
            name="password_confirm"
            value={password_confirm}
            onChange={handleChange}
            placeholder="Password Confirmation"
          />
          <TermsContainer>
            <input
              type="checkbox"
              name="terms_accepted"
              value={terms_accepted}
              onChange={handleChange}
            />
            <label>You agree to our terms of service</label>
          </TermsContainer>
          <ButtonForm>Sign Up</ButtonForm>
        </FormLogin>
        <EnlaceLogin to="/signin">Sign In</EnlaceLogin>
        <ToastContainer position="top-left" />
      </LoginContainer>
    </>
  );
};

export default Signup;
