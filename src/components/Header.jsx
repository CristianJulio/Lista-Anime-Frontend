import React from 'react';
import Styled from '@emotion/styled';
import Buscador from './Buscador';
import { Link } from 'react-router-dom';

const HeaderStyled = Styled.header`
  background: #113661;
  padding: 15px 30px;
  margin-bottom: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #FFF;
    text-align: center;
    font-family: 'Lobster', cursive;
    transform: rotateZ(-5deg);
    cursor: pointer;
    transition: all .3s;

    &:hover {
      transform: rotateZ(0deg);
    }
  }

  a {
    color: #FFF;
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <h1>AnimeList</h1>

      <nav>
        <Link to="/">Inicio</Link>
      </nav>
      
      <Buscador />
    </HeaderStyled>
  );
}

export default Header;