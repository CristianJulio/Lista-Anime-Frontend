import React, { useContext, useEffect, useState } from "react";
import {
  ContentContainer,
  GroupContainer,
  TitleContent,
  LabelGroup,
  InputGroup,
  SaveButton,
  AvatarChangeContainer,
  AvatarPreview,
} from "../../styles/settings/account.styles";
import authContext from "../../context/auth/authContext";
import usersContext from "../../context/users/usersContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfileSettings = () => {
  const { user } = useContext(authContext);
  const { mensajeUser, updateUser } = useContext(usersContext);

  const [data, setData] = useState({
    img_url: "",
    banner_url: "",
    old_password: "",
  });

  
  useEffect(() => {
    let timer;
    const msg = mensajeUser.msg;
    const type = mensajeUser.type;

    if (type === "error") toast.error(msg, { hideProgressBar: true });
    else if (type === "success") {
      toast.success(msg, { hideProgressBar: true });
      clearTimeout(timer);
      timer = setTimeout(() => {
        window.location.href = `${process.env.REACT_APP_FRONTEND_URL}profile/${user.username}`;
      }, 1000);
    }
    // eslint-disable-next-line
  }, [mensajeUser]);

  const { img_url, banner_url, old_password } = data;

  const handleChange = (e) => {   
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(img_url.length > 240 || banner_url.length > 240) return toast.warn("Url is too long", { hideProgressBar: true });

    if (old_password === "")
      return toast.warn("Old password is required", { hideProgressBar: true });

    updateUser(data, user.id);
  };

  const avatarUrl = img_url ? img_url : "https://i.pinimg.com/originals/79/ce/fb/79cefb2ef603381d8b80837eac5f2474.jpg";

  return (
    <>
      <ContentContainer>
        <AvatarChangeContainer>
          <GroupContainer>
            <LabelGroup>Avatar</LabelGroup>
            <InputGroup
              type="text"
              name="img_url"
              value={img_url}
              onChange={handleChange}
              placeholder="Image Url..."
            />
          </GroupContainer>

          <AvatarPreview src={avatarUrl} alt="Avatar preview" />
        </AvatarChangeContainer>

        <GroupContainer>
            <LabelGroup>Banner</LabelGroup>
            <InputGroup
              type="text"
              name="banner_url"
              value={banner_url}
              onChange={handleChange}
              placeholder="Banner Url..."
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

export default ProfileSettings;
