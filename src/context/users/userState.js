import { useReducer } from "react";
import UserContext from "./usersContext";
import userReducer from "./usersReducer";
import instance, { setToken } from "../../axios/axiosClient";
import {
  GET_USER_ANIME_LIST,
  CLEAN_USER_ANIME_LIST,
  SET_IS_FINISHED,
  SET_MESSAGE,
  CLEAN_MESSAGE,
} from "../../types";

const UserState = ({ children }) => {
  const initialState = {
    userAnimeList: [],
    userInfo: {},
    isFinished: false,
    mensaje: {},
    isSucces: false
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const getUserAnimeList = async (username) => {
    const token = localStorage.getItem("token");
    setToken(token);

    setIsFinished(false);

    try {
      const response = await instance(`/users/${username}`);
      dispatch({
        type: GET_USER_ANIME_LIST,
        payload: response.data,
      });
    } catch (error) {
      console.log(error.response);
    }

    setIsFinished(true);
  };

  const cleanUserAnimeList = () => {
    dispatch({
      type: CLEAN_USER_ANIME_LIST,
    });
  };

  const updateUser = async (data, id) => {
    try {
      const response = await instance.put(`/users/${id}`, data);
      setMessage(response.data.msg, "success");
    } catch (error) {
      console.log(error.response);
      setMessage(error.response.data.msg, "error");
    }

    clearMessage();
  };

  const setIsFinished = (status) => {
    dispatch({
      type: SET_IS_FINISHED,
      payload: status,
    });
  };

  const setMessage = (msg, type) => {
    dispatch({
      type: SET_MESSAGE,
      payload: {
        msg,
        type,
      },
    });
  };

  const clearMessage = () => {
    const messageTM = setTimeout(() => {
      dispatch({
        type: CLEAN_MESSAGE,
      });

      clearTimeout(messageTM);
    }, 5000);
  };

  return (
    <UserContext.Provider
      value={{
        userAnimeList: state.userAnimeList,
        userInfo: state.userInfo,
        isFinished: state.isFinished,
        mensajeUser: state.mensaje,
        getUserAnimeList,
        cleanUserAnimeList,
        setIsFinished,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
