import React, { useContext, useEffect } from "react";
import Header from "../header/Header";
import animeContext from "../../context/anime/animeContext";
import AnimeList from "../general/AnimeList";
import { useParams } from "react-router-dom";
import Pagination from "../general/Pagination";
import Spinner from "../general/Spinner";
import { StyledBusqueda, TitleBusqueda } from "../../styles/busqueda/resBusStyledComp";

const ResultadosBusqueda = () => {
  const { isFinished, busqueda, searchAnime, cleanAnimeSearch } = useContext(
    animeContext
  );
  const { nombreAnime, page } = useParams();

  useEffect(() => {
    searchAnime(nombreAnime, page);
    return () => cleanAnimeSearch();
    // eslint-disable-next-line
  }, [nombreAnime, page]);

  return (
    <>
      <Header />

      <StyledBusqueda>
        <TitleBusqueda>{`Resultados "${nombreAnime}":`}</TitleBusqueda>

        {isFinished ? (
          <>
            <AnimeList animes={busqueda} />
            <Pagination baseUrl={`/search/${nombreAnime}`} />
          </>
        ) : (
          <Spinner />
        )}
      </StyledBusqueda>
    </>
  );
};

export default ResultadosBusqueda;
