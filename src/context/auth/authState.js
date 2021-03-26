import { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import instance from '../../axios/axiosClient';
import { SIGN_IN, SIGN_OUT, ERROR_SIGN_IN, SET_MESSAGE, CLEAN_MESSAGE, SET_CURRENT_USER, SET_CURRENT_USER_ERROR, SIGNUP_ERROR, SIGN_UP } from '../../types';

const AuthState = ({ children }) => {
  const initialState = {
    mensaje: {},
    user: {},
    isAuthenticated: false
  }

  const [state, dispatch] = useReducer(authReducer, initialState);

  const auth = async (credentials) => {
    try {
      const response = await instance.post('/auth', credentials);

      dispatch({
        type: SIGN_IN,
        payload: response.data.token
      });

      setMessage(response.data.msg, 'success');
      clearMessage();
      
    } catch (error) {
      dispatch({
        type: ERROR_SIGN_IN
      });

      setMessage(error.response.data.msg, 'error');
      clearMessage();
    }
  }

  const signup = async (credentials) => {
    try {
      const response = await instance.post("/users", credentials);

      dispatch({
        type: SIGN_UP,
        payload: response.data.token
      });

      setMessage(response.data.msg, 'success');
      clearMessage();

      console.log(response.data);
    } catch (error) {
      dispatch({
        type: SIGNUP_ERROR
      });

      setMessage(error.response.data.msg, 'error');
      clearMessage();
    }
  }

  const getCurrentUser = async () => {
    try {
      const response = await instance("/auth");
      
      dispatch({
        type: SET_CURRENT_USER,
        payload: response.data.user
      });
    } catch (error) {
      console.log(error.response.data);

      dispatch({
        type: SET_CURRENT_USER_ERROR
      });
    }
  }

  const signOut = () => {
    dispatch({
      type: SIGN_OUT
    })
  }

  const setMessage = (msg, type) => {
    dispatch({
      type: SET_MESSAGE,
      payload: {
        msg,
        type
      },
    });
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
    <AuthContext.Provider
      value={{
        mensaje: state.mensaje,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        auth,
        getCurrentUser,
        signOut,
        signup
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthState;