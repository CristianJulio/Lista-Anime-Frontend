import React, { useContext } from 'react';
import TemporadasFilter from './TemporadasFilter';
import Header from '../header/Header';
import AnimeContext from "../../context/anime/animeContext";
import AnimeList from '../general/AnimeList';
import Spinner from '../general/Spinner';

const Temporadas = () => {
  const { animes, isFinished } = useContext(AnimeContext);

  return (
    <>
      <Header />
      <TemporadasFilter />
      {isFinished ? <AnimeList animes={animes} /> : <Spinner />}
    </>
  );
}
 
export default Temporadas;