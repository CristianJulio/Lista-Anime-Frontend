import React, { useContext, useEffect } from 'react';
import Header from './Header';
import animeContext from '../context/anime/animeContext';
import AnimeList from './AnimeList';
import { useParams } from 'react-router-dom';
import Pagination from './Pagination';

const ResultadosBusqueda = () => {
  const { busqueda, searchAnime, cleanAnimeSearch } = useContext(animeContext);
  const { nombreAnime, page } = useParams();
  
  useEffect(() => {
    searchAnime(nombreAnime, page);

    return (() => cleanAnimeSearch());
  // eslint-disable-next-line
  }, [nombreAnime, page]);
  
  return (
    <>
      <Header />
      <AnimeList animes={busqueda} />
      <Pagination />
    </>
  );
}
 
export default ResultadosBusqueda;