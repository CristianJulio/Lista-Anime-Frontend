import { useReducer } from 'react';
import AnimeContext from './animeContext';
import animeReducer from './animeReducer';
import { GET_ANIMES, CLEAN_GET_ANIMES, SET_IS_FINISHED, SEARCH_ANIME, CLEAN_ANIME_SEARCH, GET_ANIME_INFO, CLEAN_ANIME_INFO } from '../../types';

const AnimeState = ({ children }) => {
  const estado = {
    animes: [],
    currentAnime: {},
    busqueda: [],
    lastPage: 0,
    isFinished: false,
    cambio: false
  }

  const [state, dispatch] = useReducer(animeReducer, estado);

  const getAnimes = async ({ season, year }) => {
    setIsFinished(false);
    
    try {
      const response = await fetch(`https://api.jikan.moe/v3/season/${year}/${season}`);
      const data = await response.json();

      dispatch({
        type: GET_ANIMES,
        payload: data.anime
      });

      setIsFinished(true);
      
    } catch (error) {
      console.log(error);
    }
  }

  const cleanGetAnimes = () => {
    dispatch({
      type: CLEAN_GET_ANIMES
    })
  }

  const searchAnime = async (search, page = 1) => {
    setIsFinished(false);
    
    try {
      const response = await fetch(`https://api.jikan.moe/v3/search/anime?q=${search}&page=${page}`);
      const data = await response.json();

      dispatch({
        type: SEARCH_ANIME,
        payload: data
      });

      setIsFinished(true);
      
    } catch (error) {
      console.log(error);
    }
  }

  const cleanAnimeSearch = () => {
    dispatch({
      type: CLEAN_ANIME_SEARCH,
    })
  }

  const getAnimeInfo = async (id) => {
    setIsFinished(false);
    
    try {
      // const response = await fetch(`https://api.jikan.moe/v3/anime/${id}`);
      // const data = await response.json();
      const response = await Promise.all([
        fetch(`https://api.jikan.moe/v3/anime/${id}`),
        fetch(`https://api.jikan.moe/v3/anime/${id}/characters_staff`)
      ]);

      const data = await Promise.all(response.map(r => r.json()));

      dispatch({
        type: GET_ANIME_INFO,
        payload: {...data[0], ...data[1]}
      })

      setIsFinished(true);
      
    } catch (error) {
      console.log(error);
    }
  }

  const cleanAnimeInfo = () => {
    dispatch({
      type: CLEAN_ANIME_INFO
    })
  }

  const setIsFinished = (estado) => {
    dispatch({
      type: SET_IS_FINISHED,
      payload: estado
    })
  }

  return (
    <AnimeContext.Provider
      value={{
        animes: state.animes,
        currentAnime: state.currentAnime,
        busqueda: state.busqueda,
        lastPage: state.lastPage,
        isFinished: state.isFinished,
        getAnimes,
        cleanGetAnimes,
        searchAnime,
        cleanAnimeSearch,
        getAnimeInfo,
        cleanAnimeInfo
      }}
    >
      { children }
    </AnimeContext.Provider>
  );
}

export default AnimeState;