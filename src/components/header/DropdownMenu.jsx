import React, { useContext } from "react";
import {
  MenuContainer,
  MenuImg,
  SubMenu,
  ItemSubMenu,
  ItemName
} from "../../styles/header/dropdownMenu.styles";
import authContext from "../../context/auth/authContext";
import { IoMdExit } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const DropdownMenu = () => {
  const { signOut } = useContext(authContext);

  return (
    <MenuContainer>
      <MenuImg
        src="https://i.pinimg.com/originals/79/ce/fb/79cefb2ef603381d8b80837eac5f2474.jpg"
        alt=""
      />
      <SubMenu>
        <ItemSubMenu 
          borRad="4px 4px 0 0"
          pad="25px 70px 0 25px"
        >
          <CgProfile /> <ItemName>Profile</ItemName>
        </ItemSubMenu>
        <ItemSubMenu 
          pad="15px 70px 15px 25px"
        >
          <AiOutlineSetting /> <ItemName>Settings</ItemName>
        </ItemSubMenu>
        <ItemSubMenu
          onClick={signOut}
          bg="rgb(237,241,245)"
          borRad="0 0 4px 4px"
          pad="15px 70px 15px 25px"
        >
          <IoMdExit />
          <ItemName>Signout</ItemName>
        </ItemSubMenu>
      </SubMenu>
    </MenuContainer>
  );
};

export default DropdownMenu;