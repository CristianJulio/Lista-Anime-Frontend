import React from 'react';
import Buscador from './Buscador';
import Navbar from './Navbar';
import { StyledHeader, HeaderEnlace, Title } from '../../styles/header/HeaderStyledComp';

const Header = () => {
  return (
    <StyledHeader>
      <Title><HeaderEnlace to="/">AnimeList</HeaderEnlace></Title>
      <Navbar />
      <Buscador />
    </StyledHeader>
  );
}

export default Header;