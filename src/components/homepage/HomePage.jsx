import React, { useContext, useEffect } from "react";
import AnimeCarrusel from "./AnimeCarrusel";
import Header from "../header/Header";
import animeContext from "../../context/anime/animeContext";
import Spinner from "../general/Spinner";

const HomePage = () => {
  const { topAnimesGeneral, getTopAnimesGeneral, cleanTopAnimesGeneral } = useContext(
    animeContext
  );

  useEffect(() => {
    getTopAnimesGeneral();

    return (() => cleanTopAnimesGeneral());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      {topAnimesGeneral.length !== 0 ? (
        <>
          <AnimeCarrusel titulo="Top Airing Animes" animes={topAnimesGeneral[0].top} enlace="/top/airing" />
          <AnimeCarrusel titulo="Top Upcoming Animes" animes={topAnimesGeneral[1].top} enlace="/top/upcoming" />
          <AnimeCarrusel titulo="Top Tv Animes" animes={topAnimesGeneral[2].top} enlace="/top/tv" />
          <AnimeCarrusel titulo="Top Anime Movies" animes={topAnimesGeneral[3].top} enlace="/top/movie" />
          <AnimeCarrusel titulo="Top Anime Ovas" animes={topAnimesGeneral[4].top} enlace="/top/ova" />
          <AnimeCarrusel titulo="Top Anime Specials" animes={topAnimesGeneral[5].top} enlace="/top/special" />
        </>
      ) : <Spinner />}
    </>
  );
};

export default HomePage;
