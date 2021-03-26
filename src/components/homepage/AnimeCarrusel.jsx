import React, { useState, useEffect } from 'react';
import { StyledAnimeCarrusel, TextContainer, TitleCarrusel, EnlaceCarrusel } from '../../styles/homepage/AnimeCarruselStyledComp';
import AnimeList from '../general/AnimeList';

const AnimeCarrusel = ({ titulo, animes, enlace }) => {
  const [isbigscreen, setIsBigScreen] = useState(false)

  const updateSize = () => {
    setIsBigScreen(window.innerWidth >= 1920);
  }
  
  useEffect(() => {
    updateSize();
    window.addEventListener("resize", updateSize);
  // eslint-disable-next-line
  }, [])
  
  let lista = [];
  let limite = isbigscreen ? 6 : 5;

  for(let i = 0; i < limite; i++) {
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