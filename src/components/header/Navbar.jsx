import React, { useContext } from 'react';
import { NavContainer, NavItem } from '../../styles/header/NavbarStyledComp';
import authContext from '../../context/auth/authContext';

const Navbar = () => {
  const { user } = useContext(authContext);
  
  return (
    <NavContainer>
        <NavItem to="/">Home</NavItem>
        <NavItem to={`/profile/${user.username}`}>Profile</NavItem>
        <NavItem to={`/list/${user.username}`}>Anime List</NavItem>
        <NavItem to="/browse/1">Browse</NavItem>
      </NavContainer>
  );
}
 
export default Navbar;