import { useReducer } from 'react';
import AnimeContext from './animeContext';
import animeReducer from './animeReducer';
import { OBTENER_ANIMES, SET_IS_FINISHED, SEARCH_ANIME } from '../../types';

const AnimeState = ({ children }) => {
  const estado = {
    animes: [],
    isFinished: false,
    cambio: false
  }

  const [state, dispatch] = useReducer(animeReducer, estado);

  const obtenerAnimes = async ({ season, year }) => {
    setIsFinished(false);
    
    try {
      const response = await fetch(`https://api.jikan.moe/v3/season/${year}/${season}`);
      const data = await response.json();

      dispatch({
        type: OBTENER_ANIMES,
        payload: data.anime
      });

      setIsFinished(true);
      
    } catch (error) {
      console.log(error);
    }
  }

  const searchAnime = async (search) => {
    setIsFinished(false);
    
    try {
      const response = await fetch(`https://api.jikan.moe/v3/search/anime?q=${search}&page=1`);
      const data = await response.json();

      dispatch({
        type: SEARCH_ANIME,
        payload: data.results
      });

      console.log(data.results);

      setIsFinished(true);
      
    } catch (error) {
      console.log(error);
    }
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
        isFinished: state.isFinished,
        obtenerAnimes,
        searchAnime
      }}
    >
      { children }
    </AnimeContext.Provider>
  );
}

export default AnimeState;