import axios from "axios";

export const GET_ALL_STAFFS = "GET_ALL_STAFFS";
export const GET_REQUEST_BY_STATUS = "GET_REQUEST_BY_STATUS";
export const GET_ALL_FAILURE = "GET_ALL_FAILURE";
export const CHANGE_STATUS_SUCCESSFULLY = "CHANGE_STATUS_SUCCESSFULLY";
export const CHANGE_STATUS_FAILURE = "CHANGE_STATUS_FAILURE";

export const getAllStaff = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      token: `Bearer ${token}`,
    };

    const response = await axios.get(`http://localhost:8080/api/staff`, {
      headers,
    });
    dispatch(getAllStaffSuccess(response.data.data));
  } catch (error) {
    const errorMessage = error.response.data.message;
    dispatch(getAllStaffFailure(errorMessage));
  }
};

export const getAllByStatus = (status) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      token: `Bearer ${token}`,
    };

    const response = await axios.get(
      `http://localhost:8080/api/staffs/${status}`,
      { headers }
    );
    dispatch(getAllStaffSuccess(response.data.data));
  } catch (error) {
    const errorMessage = error.response.data.message;
    dispatch(getAllStaffFailure(errorMessage));
  }
};

export const activateAccount = (staffId) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      token: `Bearer ${token}`,
    };
    const body = { status: "status" };

    const response = await axios.patch(
      `http://localhost:8080/api/staff/activate-account/${staffId}`,
      { body },
      { headers }
    );
      dispatch(changeStatusSuccessfully(response.data.message));
    
  } catch (error) {
    const errorMessage = error.response.data.message;
    dispatch(changeStatusFailure(errorMessage));
  }
};
export const deactivateStaff = (staffId) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      token: `Bearer ${token}`,
    };
    const body = { status: "status" };

    const response = await axios.patch(
      `http://localhost:8080/api/staff/deactivate-account/${staffId}`,
      { body },
      { headers }
    );
      dispatch(changeStatusSuccessfully(response.data.message));
    
  } catch (error) {
    const errorMessage = error.response.data.message;
    dispatch(changeStatusFailure(errorMessage));
  }
};
export function getAllStaffSuccess(data) {
  return {
    type: GET_ALL_STAFFS,
    payload: data,
  };
}
export function getAllStaffFailure(data) {
    return {
      type: GET_ALL_FAILURE,
      payload: data,
    };
  }

  export function changeStatusSuccessfully(message) {
    return {
      type: CHANGE_STATUS_SUCCESSFULLY,
      message: message,
    };
  }


  export function changeStatusFailure(message) {
    return {
      type: CHANGE_STATUS_FAILURE,
      message: message,
    };
  }