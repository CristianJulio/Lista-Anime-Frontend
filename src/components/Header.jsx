import React from 'react';
import Styled from '@emotion/styled';

const HeaderStyled = Styled.header`
  background: #113661;
  padding: 10px 0;
  margin-bottom: 25px;

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
`;

const Header = () => {
  return (
    <HeaderStyled>
      <h1>AnimeList</h1>
    </HeaderStyled>
  );
}

export default Header;