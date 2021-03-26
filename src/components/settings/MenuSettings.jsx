import React from "react";
import {
  MenuContainer,
  MenuItem
} from "../../styles/settings/MenuSettings.styles";

const MenuSettings = ({ setState, data }) => {
  return (
    <MenuContainer>
      <MenuItem onClick={() => setState(data.account)}>Account</MenuItem>
      <MenuItem onClick={() => setState(data.security)}>Security</MenuItem>
    </MenuContainer>
  );
};

export default MenuSettings;
