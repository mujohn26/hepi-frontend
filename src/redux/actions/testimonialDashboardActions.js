import axios from "axios";

export const GET_ALL_REQUESTS = "GET_ALL_REQUESTS";
export const GET_REQUEST_BY_STATUS = "GET_REQUEST_BY_STATUS";
export const GET_ALL_FAILURE = "GET_ALL_FAILURE";
export const CHANGE_STATUS_SUCCESSFULLY = "CHANGE_STATUS_SUCCESSFULLY";
export const CHANGE_STATUS_FAILURE = "CHANGE_STATUS_FAILURE";

export const getAllTestimonials = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      token: `Bearer ${token}`,
    };

    const response = await axios.get(`http://localhost:8080/api/testimonial/display`, {
      headers,
    });
    dispatch(getAllRequestSuccess(response.data.data));
  } catch (error) {
    const errorMessage = error.response.data.message;
    dispatch(getAllRequestFailure(errorMessage));
  }
};


export const acceptRequest = (id,displayType) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      token: `Bearer ${token}`,
    };
    const response = await axios.patch(
      `http://localhost:8080/api/testimonial/display/${id}`,
      { displayType },
      { headers }
    );
      dispatch(changeStatusSuccessfully(response.data.message));
    
  } catch (error) {
    const errorMessage = error.response.data.message;
    dispatch(getAllRequestFailure(errorMessage));
  }
};

export function getAllRequestSuccess(data) {
  return {
    type: GET_ALL_REQUESTS,
    payload: data,
  };
}
export function getAllRequestFailure(data) {
  return {
    type: GET_ALL_FAILURE,
    payload: data,
  };
}
export function getRequestByStatus(error) {
  return {
    type: GET_REQUEST_BY_STATUS,
    message: error,
  };
}

export function changeStatusSuccessfully(message) {
  return {
    type: CHANGE_STATUS_SUCCESSFULLY,
    message: message,
  };
}
