import React, { useContext, useEffect } from "react";
import AnimeCarrusel from "./AnimeCarrusel";
import Header from "../header/Header";
import animeContext from "../../context/anime/animeContext";
import authContext from "../../context/auth/authContext";
import Spinner from "../general/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  HomePageContainer,
  AnimesContainer,
} from "../../styles/homepage/homepage.styles";
import Current from "./Current";
import usersContext from "../../context/users/usersContext";

const HomePage = () => {
  const {
    topAnimesGeneral,
    getTopAnimesGeneral,
    cleanTopAnimesGeneral,
  } = useContext(animeContext);

  const { user, mensaje } = useContext(authContext);
  const { userAnimeList, getUserAnimeList } = useContext(usersContext);

  useEffect(() => {
    getTopAnimesGeneral();

    if (mensaje.type === "success")
      toast.success(mensaje.msg, { hideProgressBar: true });

    if(user.username) {
      getUserAnimeList(user.username);
    }

    return () => cleanTopAnimesGeneral();
    // eslint-disable-next-line
  }, [user]);

  return (
    <>
      <Header />
      {topAnimesGeneral.length !== 0 ? (
        <HomePageContainer>
          <AnimesContainer>
            <AnimeCarrusel
              titulo="Top Airing Animes"
              animes={topAnimesGeneral[0].top}
              enlace="/top/airing"
            />
            <AnimeCarrusel
              titulo="Top Upcoming Animes"
              animes={topAnimesGeneral[1].top}
              enlace="/top/upcoming"
            />
            <AnimeCarrusel
              titulo="Top Tv Animes"
              animes={topAnimesGeneral[2].top}
              enlace="/top/tv"
            />
            <AnimeCarrusel
              titulo="Top Anime Movies"
              animes={topAnimesGeneral[3].top}
              enlace="/top/movie"
            />
            <AnimeCarrusel
              titulo="Top Anime Ovas"
              animes={topAnimesGeneral[4].top}
              enlace="/top/ova"
            />
            <AnimeCarrusel
              titulo="Top Anime Specials"
              animes={topAnimesGeneral[5].top}
              enlace="/top/special"
            />
            <ToastContainer position="top-left" />
          </AnimesContainer>

          {userAnimeList ? <Current userAnimeList={userAnimeList} /> : null}
        </HomePageContainer>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default HomePage;
