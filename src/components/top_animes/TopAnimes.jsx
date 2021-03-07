import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import animeContext from "../../context/anime/animeContext";
import AnimeList from '../general/AnimeList';
import Spinner from '../general/Spinner';
import Header from '../header/Header';
import { StyledTopAnimes, TitleTopAnimes } from '../../styles/top_animes/TopAnimesStyledComp';

const TopAnimes = () => {
  const { isFinished, topAnimes, getTopAnimes, cleanTopAnimes } = useContext(
    animeContext
  );

  const { type } = useParams();

  useEffect(() => {
    getTopAnimes(type);

    return (() => cleanTopAnimes());
  // eslint-disable-next-line
  }, []);
  
  return (
    <>
      <Header />

      <StyledTopAnimes>
        <TitleTopAnimes>Top {type}</TitleTopAnimes>
        {isFinished ? ( <AnimeList animes={topAnimes} /> ) : <Spinner />}
      </StyledTopAnimes>
    </>
  );
}
 
export default TopAnimes;