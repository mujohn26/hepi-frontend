import axios from "axios";

export const GET_ALL_SERVICES = "GET_ALL_SERVICES";
export const GET_ALL_SERVICES_FAILURE = "GET_ALL_SERVICES_FAILURE";
export const CHANGE_STATUS_SUCCESSFULLY = "CHANGE_STATUS_SUCCESSFULLY";
export const CHANGE_STATUS_FAILURE = "CHANGE_STATUS_FAILURE";
export const CREATE_ADMIN_SUCCESSFULLY = "CREATE_ADMIN_SUCCESSFULLY";
export const CREATE_ADMIN_FAILURE = "CREATE_ADMIN_FAILURE";

export const getAllServices = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      token: `Bearer ${token}`,
    };

    const response = await axios.get(`https://hepi-backend-staging.herokuapp.com/api/pricing`, {
      headers,
    });
    dispatch(getAllServicesSuccess(response.data.data));
  } catch (error) {
    const errorMessage = error.response.data.message;
    dispatch(getAllStaffFailure(errorMessage));
  }
};

export const createService = (
  serviceName, price 
) => async (dispatch) => {
  dispatch({ type: "CREATE_ADMIN_FAILURE", isCreatedFailure: false });
  dispatch({ type: "CREATE_ADMIN_SUCCESSFULLY", isCreatedSuccess: false });
  try {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      token: `Bearer ${token}`,
    };
    const response = await axios.post(
      `https://hepi-backend-staging.herokuapp.com/api/pricing`,
      {
        serviceName, price 
      },
      { headers }
    );
    dispatch({ type: "CREATE_ADMIN_FAILURE", isCreatedFailure: false });
    dispatch({ type: "CREATE_ADMIN_SUCCESSFULLY", isCreatedSuccess: true });
  } catch (error) {
    const errorMessage = error.response.data.message;
    dispatch({ type: "CREATE_ADMIN_SUCCESSFULLY", isCreatedSuccess: false });
    dispatch({ type: "CREATE_ADMIN_FAILURE", isCreatedFailure: true });
  }
};

export function getAllServicesSuccess(data) {
  return {
    type: GET_ALL_SERVICES,
    payload: data,
  };
}
export function createAdminSuccess(data) {
  return {
    type: CREATE_ADMIN_SUCCESSFULLY,
    successMessage: data,
  };
}
export function createAdminFailure(data) {
  return {
    type: CREATE_ADMIN_FAILURE,
    payload: data,
  };
}
export function getAllStaffFailure(data) {
  return {
    type: GET_ALL_SERVICES_FAILURE,
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
