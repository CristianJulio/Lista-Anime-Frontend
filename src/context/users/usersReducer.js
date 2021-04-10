import {
  GET_USER_ANIME_LIST,
  CLEAN_USER_ANIME_LIST,
  SET_IS_FINISHED,
  SET_MESSAGE,
  CLEAN_MESSAGE,
} from "../../types";

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case GET_USER_ANIME_LIST:
      return {
        ...state,
        userAnimeList: action.payload.animeList,
        userInfo: action.payload.userInfo,
        watchingPrev: action.payload.watchingPrev
      };
    case CLEAN_USER_ANIME_LIST:
      return {
        ...state,
        userAnimeList: {},
        userInfo: {}
      };
    case SET_IS_FINISHED:
      return {
        ...state,
        isFinished: action.payload,
      };
    case SET_MESSAGE:
      return {
        ...state,
        mensaje: action.payload,
      };
    case CLEAN_MESSAGE:
      return {
        ...state,
        mensaje: {},
      };
    default:
      return state;
  }
};
