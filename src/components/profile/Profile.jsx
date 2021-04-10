import React, { useContext, useEffect } from "react";
import Header from "../header/Header";
import Spinner from '../general/Spinner';
import {
  ProfileContainer,
  BannerContainer,
  ImgBanner,
  AvatarImg,
  CabeceraProfile,
  Username,
  TextContainer
} from "../../styles/profile/profile.styles";
import userContext from "../../context/users/usersContext";
import { useParams } from "react-router";

const Profile = () => {
  const { userInfo, getUserAnimeList, cleanUserAnimeList } = useContext(userContext);
  const { username } = useParams();

  useEffect(() => {
    getUserAnimeList(username);

    return (() => cleanUserAnimeList());
    // eslint-disable-next-line
  }, [username]);

  const { banner_url, img_url, username: userN, about } = userInfo;

  return (
    <>
      {userInfo.banner_url ? (
        <>
          <Header opacity="0.5" />
          <BannerContainer>
            <ImgBanner src={banner_url} alt="Banner" />
          </BannerContainer>
          <ProfileContainer>
            <CabeceraProfile>
              <AvatarImg src={img_url} alt="Avatar" />
              <TextContainer>
                <Username>{userN}</Username>
                <p>{about}</p>
              </TextContainer>
            </CabeceraProfile>
          </ProfileContainer>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Profile;
