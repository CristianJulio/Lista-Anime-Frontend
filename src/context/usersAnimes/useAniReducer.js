import { SET_MESSAGE, CLEAN_MESSAGE, GET_ANIME_FL, GET_ANIME_FL_ERROR, CLEAN_GET_ANIME_FL, REMOVE_ANIME } from '../../types';

// eslint-disable-next-line
export default (state, action) => {
  switch(action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        mensaje: action.payload
      }
    case CLEAN_MESSAGE:
      return {
        ...state,
        mensaje: {}
      }
    case GET_ANIME_FL:
      return {
        ...state,
        isAdded: action.payload.isAdded,
        userAnime: action.payload.anime
      }
    case GET_ANIME_FL_ERROR:
      return {
        ...state,
        isAdded: false
      }
    case CLEAN_GET_ANIME_FL:
      return {
        ...state,
        isAdded: null,
        userAnime: {}
      }
    case REMOVE_ANIME:
      return {
        ...state,
        isAdded: false
      }
    default:
      return state;
  }
}