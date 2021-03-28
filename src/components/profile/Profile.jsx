import React, { useContext } from "react";
import Header from "../header/Header";
import {
  ProfileContainer,
  BannerContainer,
  ImgBanner,
  AvatarImg,
  CabeceraProfile,
  Username
} from "../../styles/profile/profile.styles";
import authContext from "../../context/auth/authContext";

const Profile = () => {
  const { user } = useContext(authContext);

  return (
    <>
      <Header opacity={true} />
      <BannerContainer>
        <ImgBanner
          src="https://s4.anilist.co/file/anilistcdn/user/banner/n102388-mwsWnmLSjC8L.jpg"
          alt="Banner"
        />
      </BannerContainer>
      <ProfileContainer>
        <CabeceraProfile>
          <AvatarImg src={user.img_url} alt="Avatar" />
          <Username>{user.username}</Username>
        </CabeceraProfile>
      </ProfileContainer>
    </>
  );
};

export default Profile;
