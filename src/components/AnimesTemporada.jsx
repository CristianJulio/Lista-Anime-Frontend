import React, { useContext } from 'react';
import AnimeFilter from './AnimeFilter';
import Header from './Header';
import AnimeContext from "../context/anime/animeContext";
import AnimeList from './AnimeList';
import Spinner from './Spinner';

const AnimesTemporada = () => {
  const { animes, isFinished } = useContext(AnimeContext);

  return (
    <>
      <Header />
      <AnimeFilter />
      {isFinished ? <AnimeList animes={animes} /> : <Spinner />}
    </>
  );
}
 
export default AnimesTemporada;