import axios from "axios";

export const GET_STAFF_SUCCESSFULLY = "GET_STAFF_SUCCESSFULLY";
export const GET_STAFF_FAILED = "GET_STAFF_FAILED";


export const getStaffs = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await axios.get(`https://hepi-backend-staging.herokuapp.com/api/staff-web`,{
      headers,
    });
    dispatch(getStaffSuccess(response.data.data));
  } catch (error) {
    const errorMessage = error.response.data.message;
    dispatch(getStaffFailure(errorMessage));
  }
};


export function getStaffSuccess(data) {
  return {
    type: GET_STAFF_SUCCESSFULLY,
    payload: data,
  };
}
export function getStaffFailure(data) {
  return {
    type: GET_STAFF_FAILED,
    payload: data,
  };
}
