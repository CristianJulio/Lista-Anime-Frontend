import React, { useState } from "react";
import {
  ContentContainer,
  GroupContainer,
  LabelGroup,
  InputGroup,
  SaveButton,
} from "../../styles/settings/account.styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Security = () => {
  const [editing, setEditing] = useState(false);
  const [data, setData] = useState({
    password: "",
    confirm_password: "",
    old_password: "",
  });

  const { password, confirm_password, old_password } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      (editing !== false && old_password === "") ||
      password === "" ||
      confirm_password === ""
    ) {
      return toast.warn("All fields are required required", {
        hideProgressBar: true,
      });
    }

    if (password !== confirm_password)
      return toast.warning("Passwords do not match", { hideProgressBar: true });

    if (editing === false) setEditing(true);
    else setEditing(false);
  };

  return (
    <ContentContainer onSubmit={handleSubmit}>
      <GroupContainer>
        <LabelGroup>Update Password</LabelGroup>
        <InputGroup
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          disabled={editing === false}
        />
      </GroupContainer>

      <GroupContainer>
        <LabelGroup>Confirm new Password</LabelGroup>
        <InputGroup
          type="password"
          name="confirm_password"
          value={confirm_password}
          onChange={handleChange}
          disabled={editing === false}
        />
      </GroupContainer>

      <GroupContainer>
        <LabelGroup>Old Password</LabelGroup>
        <InputGroup
          type="password"
          name="old_password"
          value={old_password}
          onChange={handleChange}
          disabled={editing === false}
        />
      </GroupContainer>

      <SaveButton onClick={handleSubmit}>
        {editing ? "Save" : "Edit"}
      </SaveButton>
      <ToastContainer position="top-left" />
    </ContentContainer>
  );
};

export default Security;
