import { OBTENER_ANIMES, SET_IS_FINISHED, SEARCH_ANIME } from '../../types';

// eslint-disable-next-line
export default (state, action) => {
  switch(action.type) {
    case SEARCH_ANIME:
    case OBTENER_ANIMES:
      return {
        ...state,
        animes: action.payload
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