import axios from "axios";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const signIn = (email, password) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.post(
      `https://hepi-backend-staging.herokuapp.com/api/agent/auth/login`,
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
    const errorMessage = error.response.data.error;
    dispatch(loginFailure(errorMessage));
    // dispatch({ type: 'LOADING', payload: false });
  }
};

export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
}
export function loginFailure(errorMessage) {
  return {
    type: LOGIN_ERROR,
    errorMessage: errorMessage,
  };
}
