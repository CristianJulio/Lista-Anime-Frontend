import React from 'react';
import Buscador from './Buscador';
import { StyledHeader, Title, HeaderEnlace } from '../styles/HeaderStyledComp';

const Header = () => {
  return (
    <StyledHeader>
      <Title>AnimeList</Title>

      <nav>
        <HeaderEnlace to="/">Inicio</HeaderEnlace>
      </nav>
      
      <Buscador />
    </StyledHeader>
  );
}

export default Header;