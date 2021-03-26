import { useReducer } from 'react';
import UserContext from './usersContext';
import userReducer from './usersReducer';
import instance, { setToken } from '../../axios/axiosClient';
import { GET_USER_ANIME_LIST, CLEAN_USER_ANIME_LIST, SET_IS_FINISHED } from '../../types';

const UserState = ({ children }) => {
  const initialState = {
    userAnimeList: [],
    userInfo: {},
    isFinished: false
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const getUserAnimeList = async (username) => {
    const token = localStorage.getItem('token');
    setToken(token);

    setIsFinished(false);
    
    try {
      const response = await instance(`/users/${username}`);
      dispatch({
        type: GET_USER_ANIME_LIST,
        payload: response.data
      });

    } catch (error) {
      console.log(error.response);
    }

    setIsFinished(true);
  }

  const cleanUserAnimeList = () => {
    dispatch({
      type: CLEAN_USER_ANIME_LIST
    })
  }

  const setIsFinished = status => {
    dispatch({
      type: SET_IS_FINISHED,
      payload: status
    });
  }
  
  return (
    <UserContext.Provider
      value={{
        userAnimeList: state.userAnimeList,
        userInfo: state.userInfo,
        isFinished: state.isFinished,
        getUserAnimeList,
        cleanUserAnimeList,
        setIsFinished
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserState;