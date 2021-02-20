import { GET_ANIMES, CLEAN_GET_ANIMES, SET_IS_FINISHED, SEARCH_ANIME, CLEAN_ANIME_SEARCH, GET_ANIME_INFO, CLEAN_ANIME_INFO } from '../../types';

// eslint-disable-next-line
export default (state, action) => {
  switch(action.type) {
    case SEARCH_ANIME:
      return {
        ...state,
        busqueda: action.payload.results,
        lastPage: action.payload.last_page
      }
    case CLEAN_ANIME_SEARCH:
      return {
        ...state,
        busqueda: []
      }
    case GET_ANIMES:
      return {
        ...state,
        animes: action.payload
      }
    case CLEAN_GET_ANIMES:
      return {
        ...state,
        animes: []
      }
    case GET_ANIME_INFO:
      return {
        ...state,
        currentAnime: action.payload
      }
    case CLEAN_ANIME_INFO:
      return {
        ...state,
        currentAnime: []
      }
    case SET_IS_FINISHED:
      return {
        ...state,
        isFinished: action.payload
      }
    default:
      return state;
  }
}