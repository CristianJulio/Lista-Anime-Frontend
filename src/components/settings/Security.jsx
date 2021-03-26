import React, { useState } from "react";
import {
  ContentContainer,
  GroupContainer,
  LabelGroup,
  InputGroup,
  SaveButton,
} from "../../styles/settings/account.styles";

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

    if (editing === false) {
      setEditing(true);
    } else {
      setEditing(false);
      console.log(data);
    }
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

      <SaveButton>{editing ? "Save" : "Edit"}</SaveButton>
    </ContentContainer>
  );
};

export default Security;
