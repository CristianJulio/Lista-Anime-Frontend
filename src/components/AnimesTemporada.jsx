import React, { useContext } from 'react';
import AnimeFilter from './AnimeFilter';
import Header from './Header';
import AnimeContext from "../context/anime/animeContext";
import AnimeList from './AnimeList';

const AnimesTemporada = () => {
  const { animes } = useContext(AnimeContext);

  return (
    <>
      <Header />
      <AnimeFilter />
      <AnimeList animes={animes} />
    </>
  );
}
 
export default AnimesTemporada;