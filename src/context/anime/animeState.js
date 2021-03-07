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

      setIsFinished(true);
    } catch (error) {
      console.log(error);
    }
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

      setIsFinished(true);
    } catch (error) {
      console.log(error);
    }
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

      setIsFinished(true);
    } catch (error) {
      console.log(error);
    }
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
      const response = await Promise.all([
        fetch("https://api.jikan.moe/v3/top/anime/1/airing"),
        fetch("https://api.jikan.moe/v3/top/anime/1/upcoming"),
        fetch("https://api.jikan.moe/v3/top/anime/1/tv"),
        fetch("https://api.jikan.moe/v3/top/anime/1/movie"),
        fetch("https://api.jikan.moe/v3/top/anime/1/ova"),
        fetch("https://api.jikan.moe/v3/top/anime/1/special")
      ]);


      const data = await Promise.all(response.map(r => r.json()));
      
      dispatch({
        type: GET_TOP_ANIMES_GENERAL,
        payload: data
      });

      setIsFinished(true);
      
    } catch (error) {
      console.log(error);
    }
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

      setIsFinished(true);

    } catch (error) {
      console.log(error);
    }
  }

  const cleanTopAnimes = () => {
    dispatch({
      type: CLEAN_TOP_ANIMES
    })
  }

  const getBrowsedAnimes = async ({q, type="", status="", rated="", genre="", score="", order="", sort="", page=1}) => {
    setIsFinished(false);
    
    try {
      const url = `https://api.jikan.moe/v3/search/anime?q=${q}&page=${page}?order_by=${order}&status=${status}&rated=${rated}&genre=${genre}&sort=${sort}&type=${type}`;
      const response = await fetch(url);
      const data = await response.json();

      dispatch({
        type: GET_BROWSED_ANIMES,
        payload: data
      });

      setIsFinished(true);
      
    } catch (error) {
      console.log(error);
    }
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
