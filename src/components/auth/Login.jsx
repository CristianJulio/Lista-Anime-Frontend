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
  EnlaceLogin
} from "../../styles/auth/Auth.styles";
import Header from "../header/Header";
import UserContext from "../../context/users/usersContext";

const Login = ({ history }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const { username, password } = credentials;

  const { mensaje, auth } = useContext(authContext);
  const { mensajeUser } = useContext(UserContext);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (mensaje.type === "error")
      toast.error(mensaje.msg, { hideProgressBar: true });
    if(mensajeUser.type === "success") {
      toast.success(mensajeUser.msg, { hideProgressBar: true });
    }

    if (token) history.push("/");
  // eslint-disable-next-line
  }, [mensaje, history, token]);

  const handleChange = (e) => {
    setCredentials((credentials) => ({
      ...credentials,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "" || password === "")
      return toast.warn("Fields can't be blank", { hideProgressBar: true });

    auth(credentials);
  };

  return (
    <>
      <Header />
      <LoginContainer>
        <TitleLogin>Sign In</TitleLogin>
        <FormLogin onSubmit={handleSubmit}>
          <InputForm
            type="text"
            name="username"
            onChange={handleChange}
            placeholder="Username"
          />
          <InputForm
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
          />
          <ButtonForm>Sign in</ButtonForm>
        </FormLogin>
        <EnlaceLogin to="/signup">Join us!</EnlaceLogin>
        <ToastContainer position="top-left" />
      </LoginContainer>
    </>
  );
};

export default Login;
