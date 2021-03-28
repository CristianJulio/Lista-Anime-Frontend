import React, { useContext } from 'react';
import TemporadasFilter from './TemporadasFilter';
import AnimeContext from "../../context/anime/animeContext";
import AnimeList from '../general/AnimeList';
import Spinner from '../general/Spinner';

const Temporadas = () => {
  const { animes, isFinished } = useContext(AnimeContext);

  return (
    <>
      <TemporadasFilter />
      {isFinished ? <AnimeList animes={animes} /> : <Spinner />}
    </>
  );
}
 
export default Temporadas;