import React, { useContext, useEffect, useState } from "react";
import {
  ContentContainer,
  GroupContainer,
  TitleContent,
  LabelGroup,
  InputGroup,
  SaveButton,
} from "../../styles/settings/account.styles";
import authContext from "../../context/auth/authContext";
import usersContext from "../../context/users/usersContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AccountSettings = () => {
  const { user, signOut } = useContext(authContext);
  const { mensajeUser, updateUser } = useContext(usersContext);

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    old_password: "",
  });

  useEffect(() => {
    const msg = mensajeUser.msg;
    const type = mensajeUser.type;

    if (type === "error")
      toast.error(msg, { hideProgressBar: true });
    else if(type === "success") {
      toast.success(msg, { hideProgressBar: true });
      alert("You need to Sign in again");
      signOut();
    }
  // eslint-disable-next-line
  }, [mensajeUser]);

  const { username, email, password, confirm_password, old_password } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(username === "" && email === "")
      return toast.warn("Nothing to update", { hideProgressBar: true });

    if (old_password === "")
      return toast.warn("Old password is required", { hideProgressBar: true });

    updateUser(data, user.id);
  };

  return (
    <>
      <ContentContainer>
        <GroupContainer>
          <LabelGroup>Update Username</LabelGroup>
          <InputGroup
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            placeholder={user.username}
          />
        </GroupContainer>

        <GroupContainer>
          <LabelGroup>Update Email</LabelGroup>
          <InputGroup
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder={user.email}
          />
        </GroupContainer>

        <TitleContent>Password</TitleContent>

        <GroupContainer>
        <LabelGroup>Update Password</LabelGroup>
        <InputGroup
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </GroupContainer>

      <GroupContainer>
        <LabelGroup>Confirm new Password</LabelGroup>
        <InputGroup
          type="password"
          name="confirm_password"
          value={confirm_password}
          onChange={handleChange}
        />
      </GroupContainer>

      <TitleContent>Confirm old password</TitleContent>

      <GroupContainer>
        <LabelGroup>Old Password</LabelGroup>
        <InputGroup
          type="password"
          name="old_password"
          value={old_password}
          onChange={handleChange}
        />
      </GroupContainer>

        <SaveButton onClick={handleSubmit}>Save</SaveButton>
        <ToastContainer position="top-left" />
      </ContentContainer>
    </>
  );
};

export default AccountSettings;
