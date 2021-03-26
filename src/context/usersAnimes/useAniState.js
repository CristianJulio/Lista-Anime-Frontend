import React, { useReducer } from 'react';
import UseAniContext from './useAniContext';
import useAniReducer from './useAniReducer';
import instance from '../../axios/axiosClient';
import { SET_MESSAGE, CLEAN_MESSAGE, GET_ANIME_FL, GET_ANIME_FL_ERROR, CLEAN_GET_ANIME_FL, REMOVE_ANIME } from '../../types';

const UsersAnimesState = ({ children }) => {
  const initialState = {
    mensaje: {},
    isAdded: null,
    userAnime: {},
    isFinished: true
  }

  const [state, dispatch] = useReducer(useAniReducer, initialState);

  const addAnime = async (data) => {
    try {
      const response = await instance.post("/users_animes", data);
      setMessage(response.data.msg, 'success');
      
    } catch (error) {
      setMessage(error.response.data.msg, 'error');
    }
  }

  const getAnimeFromList = async (mal_id) => {
    try {
      const response = await instance(`/users_animes/${mal_id}`);

      dispatch({
        type: GET_ANIME_FL,
        payload: response.data
      });
      
    } catch (error) {
      console.log(error);

      dispatch({
        type: GET_ANIME_FL_ERROR
      });
    }
  }

  const updateAnimeStatus = async (data, animeId) => {
    try {
      const response = await instance.put(`/users_animes/${animeId}`, data);

      setMessage(response.data.msg, 'success');
      clearMessage();
      
    } catch (error) {
      console.log(error);
      setMessage(error.response.data.msg, 'error');
      clearMessage();
    }
  }

  const removeAnime = async (animeId) => {
    try {
      const response = await instance.delete(`/users_animes/${animeId}`);

      dispatch({
        type: REMOVE_ANIME
      });

      setMessage(response.data.msg, 'success');
      clearMessage();
    } catch (error) {
      console.log(error);
    }
  }

  const cleanGetAnimeFL = () => {
    dispatch({
      type: CLEAN_GET_ANIME_FL
    });
  }
  
  const setMessage = (msg, type) => {
    dispatch({
      type: SET_MESSAGE,
      payload: {
        msg,
        type
      },
    });

    clearMessage();
  };

  const clearMessage = () => {
    const messageTM = setTimeout(() => {
      dispatch({
        type: CLEAN_MESSAGE
      })

      clearTimeout(messageTM);
    }, 5000);
  } 
  
  return (
    <UseAniContext.Provider
      value={{
        mensaje: state.mensaje,
        isAdded: state.isAdded,
        userAnime: state.userAnime,
        addAnime,
        getAnimeFromList,
        cleanGetAnimeFL,
        updateAnimeStatus,
        removeAnime
      }}
    >
      {children}
    </UseAniContext.Provider>
  );
}

export default UsersAnimesState;