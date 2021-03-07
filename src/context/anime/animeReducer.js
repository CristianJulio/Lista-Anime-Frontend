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

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case SEARCH_ANIME:
      return {
        ...state,
        busqueda: action.payload.results,
        lastPage: action.payload.last_page,
      };
    case CLEAN_ANIME_SEARCH:
      return {
        ...state,
        busqueda: [],
        lastPage: 0
      };
    case GET_ANIMES:
      return {
        ...state,
        animes: action.payload,
      };
    case CLEAN_GET_ANIMES:
      return {
        ...state,
        animes: [],
      };
    case GET_ANIME_INFO:
      return {
        ...state,
        currentAnime: action.payload,
      };
    case CLEAN_ANIME_INFO:
      return {
        ...state,
        currentAnime: [],
      };
    case SET_IS_FINISHED:
      return {
        ...state,
        isFinished: action.payload,
      };
    case GET_TOP_ANIMES_GENERAL:
      return {
        ...state,
        topAnimesGeneral: action.payload
      }
    case CLEAN_TOP_ANIMES_GENERAL:
      return {
        ...state,
        topAnimesGeneral: []
      }
    case GET_TOP_ANIMES:
      return {
        ...state,
        topAnimes: action.payload
      }
    case CLEAN_TOP_ANIMES:
      return {
        ...state,
        topAnimes: []
      }
    case GET_BROWSED_ANIMES:
      return {
        ...state,
        browsedAnimes: action.payload.results,
        lastPage: action.payload.last_page
      }
    case CLEAN_BROWSED_ANIMES:
      return {
        ...state,
        browsedAnimes: [],
        lastPage: 0
      }
    default:
      return state;
  }
};
