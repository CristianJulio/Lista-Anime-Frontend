import { useReducer } from "react";
import AnimeContext from "./animeContext";
import animeReducer from "./animeReducer";
import {
  GET_ANIMES,
  CLEAN_GET_ANIMES,
  SET_IS_FINISHED,
  SEARCH_ANIME,
  CLEAN_ANIME_SEARCH,
  GET_ANIME_INFO,
  CLEAN_ANIME_INFO,
  GET_TOP_ANIMES_GENERAL,
  CLEAN_TOP_ANIMES_GENERAL,
  GET_TOP_ANIMES,
  CLEAN_TOP_ANIMES,
  GET_BROWSED_ANIMES,
  CLEAN_BROWSED_ANIMES
} from "../../types";

const AnimeState = ({ children }) => {
  const estado = {
    animes: [],
    currentAnime: {},
    busqueda: [],
    lastPage: 0,
    isFinished: false,
    topAnimesGeneral: [],
    topAnimes: [],
    browsedAnimes: []
  };

  const [state, dispatch] = useReducer(animeReducer, estado);

  const getAnimes = async ({ season, year }) => {
    setIsFinished(false);

    try {
      const response = await fetch(
        `https://api.jikan.moe/v3/season/${year}/${season}`
      );
      const data = await response.json();

      dispatch({
        type: GET_ANIMES,
        payload: data.anime,
      });

    } catch (error) {
      console.log(error);
    }

    setIsFinished(true);
  };

  const cleanGetAnimes = () => {
    dispatch({
      type: CLEAN_GET_ANIMES,
    });
  };

  const searchAnime = async (search, page = 1) => {
    setIsFinished(false);

    try {
      const response = await fetch(
        `https://api.jikan.moe/v3/search/anime?q=${search}&page=${page}`
      );
      const data = await response.json();

      dispatch({
        type: SEARCH_ANIME,
        payload: data,
      });

    } catch (error) {
      console.log(error);
    }

    setIsFinished(true);
  };

  const cleanAnimeSearch = () => {
    dispatch({
      type: CLEAN_ANIME_SEARCH,
    });
  };

  const getAnimeInfo = async (id) => {
    setIsFinished(false);

    try {
      // const response = await fetch(`https://api.jikan.moe/v3/anime/${id}`);
      // const data = await response.json();
      const response = await Promise.all([
        fetch(`https://api.jikan.moe/v3/anime/${id}`),
        fetch(`https://api.jikan.moe/v3/anime/${id}/characters_staff`),
        fetch(`https://api.jikan.moe/v3/anime/${id}/stats`),
      ]);

      const data = await Promise.all(response.map(r => r.json()));

      dispatch({
        type: GET_ANIME_INFO,
        payload: {...data[0], ...data[1], ...data[2]}
      });

    } catch (error) {
      console.log(error);
    }

    setIsFinished(true);
  };

  const cleanAnimeInfo = () => {
    dispatch({
      type: CLEAN_ANIME_INFO,
    });
  };

  const setIsFinished = (estado) => {
    dispatch({
      type: SET_IS_FINISHED,
      payload: estado,
    });
  };

  const getTopAnimesGeneral = async () => {
    setIsFinished(false);
    
    try {
      const res1 = await fetch("https://api.jikan.moe/v3/top/anime/1/airing");
      const res2 = await fetch("https://api.jikan.moe/v3/top/anime/1/upcoming");
      const res3 = await fetch("https://api.jikan.moe/v3/top/anime/1/tv");
      const res4 = await fetch("https://api.jikan.moe/v3/top/anime/1/movie");
      const res5 = await fetch("https://api.jikan.moe/v3/top/anime/1/ova");
      const res6 = await fetch("https://api.jikan.moe/v3/top/anime/1/special");

      const data = await Promise.all([
        res1.json(),
        res2.json(),
        res3.json(),
        res4.json(),
        res5.json(),
        res6.json()
      ]);
      
      dispatch({
        type: GET_TOP_ANIMES_GENERAL,
        payload: data
      });
      
    } catch (error) {
      console.log(error);
    }

    setIsFinished(true);
  }

  const cleanTopAnimesGeneral = () => {
    dispatch({
      type: CLEAN_TOP_ANIMES_GENERAL
    });
  }

  const getTopAnimes = async (type) => {
    setIsFinished(false);
    
    try {
      const response = await fetch(`https://api.jikan.moe/v3/top/anime/1/${type}`);
      const data = await response.json();

      dispatch({
        type: GET_TOP_ANIMES,
        payload: data.top
      });

      
    } catch (error) {
      console.log(error);
    }
    
    setIsFinished(true);
  }

  const cleanTopAnimes = () => {
    dispatch({
      type: CLEAN_TOP_ANIMES
    })
  }

  const getBrowsedAnimes = async ({q, type="", status="", rated="", genre="", score="", order="", sort="", page=1}) => {
    setIsFinished(false);
    
    try {
      const url = `https://api.jikan.moe/v3/search/anime?q=${q}&page=${page}?order_by=${order}&status=${status}&rated=${rated}&genre=${genre}&sort=${sort}&type=${type}&score=${score}`;
      const response = await fetch(url);
      const data = await response.json();

      dispatch({
        type: GET_BROWSED_ANIMES,
        payload: data
      });
      
    } catch (error) {
      console.log(error);
    }

    setIsFinished(true);
  }

  const cleanBrowsedAnimes = () => {
    dispatch({
      type: CLEAN_BROWSED_ANIMES
    });
  }
  
  return (
    <AnimeContext.Provider
      value={{
        animes: state.animes,
        currentAnime: state.currentAnime,
        busqueda: state.busqueda,
        lastPage: state.lastPage,
        isFinished: state.isFinished,
        topAnimesGeneral: state.topAnimesGeneral,
        topAnimes: state.topAnimes,
        browsedAnimes: state.browsedAnimes,
        getAnimes,
        cleanGetAnimes,
        searchAnime,
        cleanAnimeSearch,
        getAnimeInfo,
        cleanAnimeInfo,
        getTopAnimesGeneral,
        cleanTopAnimesGeneral,
        getTopAnimes,
        cleanTopAnimes,
        getBrowsedAnimes,
        cleanBrowsedAnimes
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};

export default AnimeState;
