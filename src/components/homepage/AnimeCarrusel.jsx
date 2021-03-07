import React from 'react';
import { StyledAnimeCarrusel, TextContainer, TitleCarrusel, EnlaceCarrusel } from '../../styles/homepage/AnimeCarruselStyledComp';
import AnimeList from '../general/AnimeList';

const AnimeCarrusel = ({ titulo, animes, enlace }) => {
  let lista = [];

  for(let i = 0; i < 5; i++) {
    lista.push(animes[i]);
  }


  return (
    <StyledAnimeCarrusel>
      <TextContainer>
        <TitleCarrusel>{titulo}</TitleCarrusel>
        <EnlaceCarrusel to={enlace}>View All</EnlaceCarrusel>
      </TextContainer>

      <AnimeList animes={lista} />
    </StyledAnimeCarrusel>
  );
}
 
export default AnimeCarrusel;