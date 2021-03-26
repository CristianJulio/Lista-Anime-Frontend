import { GET_USER_ANIME_LIST, CLEAN_USER_ANIME_LIST, SET_IS_FINISHED } from '../../types';

// eslint-disable-next-line
export default (state, action) => {
  switch(action.type) {
    case GET_USER_ANIME_LIST:
      return {
        ...state,
        userAnimeList: action.payload.animeList,
        userInfo: action.payload.userInfo
      }
    case CLEAN_USER_ANIME_LIST:
      return {
        ...state,
        userAnimeList: {},
        userInfo: {}
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