import React, { useContext, useEffect } from 'react';
import Header from './Header';
import animeContext from '../context/anime/animeContext';
import { useParams } from 'react-router-dom';

const AnimeInfo = () => {
  const { currentAnime, getAnimeInfo, cleanAnimeInfo } = useContext(animeContext);
  const { animeId } = useParams();

  useEffect(() => {
    getAnimeInfo(animeId);

    return (() => cleanAnimeInfo());

  // eslint-disable-next-line
  }, [animeId])
  
  return (
    <>
      <Header />
      <h2>{currentAnime.title}</h2>
    </>
  );
}
 
export default AnimeInfo;