import React from 'react';
import { NavContainer, NavItem } from '../../styles/header/NavbarStyledComp';

const Navbar = () => {
  return (
    <NavContainer>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/seasonal">Seasonal</NavItem>
        <NavItem to="/browse/1">Browse</NavItem>
      </NavContainer>
  );
}
 
export default Navbar;