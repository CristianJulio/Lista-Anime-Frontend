import { SIGN_IN, SIGN_OUT, ERROR_SIGN_IN, SET_MESSAGE, CLEAN_MESSAGE, SET_CURRENT_USER, SET_CURRENT_USER_ERROR, SIGNUP_ERROR, SIGN_UP } from '../../types';

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
    case SIGN_UP:
    case SIGN_IN:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        isAuthenticated: true
      }
    case SIGNUP_ERROR:
    case SET_CURRENT_USER_ERROR:
    case ERROR_SIGN_IN:
    case SIGN_OUT:
      localStorage.removeItem('token');
      
      return {
        ...state,
        isAuthenticated: false,
        user: {}
      }
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      }
    default: 
      return state;
  }
}