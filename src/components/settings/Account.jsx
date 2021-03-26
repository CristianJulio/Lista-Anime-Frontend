import React, { useContext, useState } from "react";
import {
  ContentContainer,
  GroupContainer,
  LabelGroup,
  InputGroup,
  SaveButton,
} from "../../styles/settings/account.styles";
import authContext from '../../context/auth/authContext';

const Account = () => {
  const { user } = useContext(authContext);
  
  const [editing, setEditing] = useState(false);
  const [data, setData] = useState({
    username: user.username ? user.username : "",
    email: user.email,
    old_password: "",
  });

  const { username, email, old_password } = data;

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
    <>
      <ContentContainer onSubmit={handleSubmit}>
        <GroupContainer>
          <LabelGroup>Update Username</LabelGroup>
          <InputGroup
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            disabled={editing === false}
          />
        </GroupContainer>

        <GroupContainer>
          <LabelGroup>Update Email</LabelGroup>
          <InputGroup
            type="email"
            name="email"
            value={email}
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
    </>
  );
};

export default Account;
