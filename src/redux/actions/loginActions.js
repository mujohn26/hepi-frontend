import axios from "axios";

export const GET_PROFILE_IMAGE = "GET_PROFILE_IMAGE";
export const GET_PROFILE_IMAGE_ERROR = "GET_PROFILE_IMAGE_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const signIn = (email, password) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.post(
      `https://hepi-backend-staging.herokuapp.com/api/auth/signin`,
      {
        email: email,
        password: password,
      }
    );

    const user = response.data.data.token;
    localStorage.setItem("token", user);
    // dispatch({ type: 'LOADING', payload: false });
    dispatch(loginSuccess(response.data.message));
  } catch (error) {
    const errorMessage = error.response.data.message;
    dispatch(loginFailure(errorMessage));
    // dispatch({ type: 'LOADING', payload: false });
  }
};

export function getImageSuccess(data) {
  return {
    type: GET_PROFILE_IMAGE,
    payload: data,
  };
}
export function getImageError(error) {
  return {
    type: GET_PROFILE_IMAGE_ERROR,
    message: error,
  };
}
export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
}
export function loginFailure(data) {
  return {
    type: LOGIN_ERROR,
    errorMessage: data,
  };
}
