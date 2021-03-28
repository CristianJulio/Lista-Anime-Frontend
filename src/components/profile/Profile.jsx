import React, { useContext } from "react";
import Header from "../header/Header";
import { ProfileContainer } from "../../styles/profile/profile.styles";
import authContext from '../../context/auth/authContext';

const Profile = () => {
  const { user } = useContext(authContext);

  return (
    <>
      <Header />
      <ProfileContainer>
        <img src={user.img_url} alt="Avatar" />
        <h2>{user.username}</h2>
      </ProfileContainer>
    </>
  );
};

export default Profile;
