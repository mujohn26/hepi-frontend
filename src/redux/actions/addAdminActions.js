import axios from "axios";

export const GET_ALL_ADMINS = "GET_ALL_ADMINS";
export const GET_REQUEST_BY_STATUS = "GET_REQUEST_BY_STATUS";
export const GET_ALL_FAILURE = "GET_ALL_FAILURE";
export const CHANGE_STATUS_SUCCESSFULLY = "CHANGE_STATUS_SUCCESSFULLY";
export const CHANGE_STATUS_FAILURE = "CHANGE_STATUS_FAILURE";
export const CREATE_ADMIN_SUCCESSFULLY = "CREATE_ADMIN_SUCCESSFULLY";
export const CREATE_ADMIN_FAILURE = "CREATE_ADMIN_FAILURE";

export const getAllAdmins = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      token: `Bearer ${token}`,
    };

    const response = await axios.get(`https://hepi-backend-staging.herokuapp.com/api/admin`, {
      headers,
    });
    dispatch(getAllAdminsSuccess(response.data.data));
  } catch (error) {
    const errorMessage = error.response.data.message;
    dispatch(getAllStaffFailure(errorMessage));
  }
};

export const createAdmin = (
  firstName, lastName, email, secretPassword, tel
) => async (dispatch) => {
  dispatch({ type: "CREATE_ADMIN_FAILURE", isCreatedFailure: false });
  dispatch({ type: "CREATE_ADMIN_SUCCESSFULLY", isCreatedSuccess: false });
  try {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      token: `Bearer ${token}`,
    };
    console.log(firstName, lastName);
    const response = await axios.post(
      `https://hepi-backend-staging.herokuapp.com/api/admin/auth/signup`,
      {
        firstName, lastName, email, secretPassword, tel
      },
      { headers }
    );
    dispatch({ type: "CREATE_ADMIN_FAILURE", isCreatedFailure: false });
    dispatch({ type: "CREATE_ADMIN_SUCCESSFULLY", isCreatedSuccess: true });
  } catch (error) {
    const errorMessage = error.response.data.message;
    dispatch({ type: "CREATE_ADMIN_SUCCESSFULLY", isCreatedSuccess: false });
    dispatch({ type: "CREATE_ADMIN_FAILURE", isCreatedFailure: true });
    // dispatch(createAdminFailure(errorMessage));
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
      `https://hepi-backend-staging.herokuapp.com/api/admin/${status}`,
      { headers }
    );
    dispatch(getAllAdminsSuccess(response.data.data));
  } catch (error) {
    const errorMessage = error.response.data.message;
    dispatch(getAllStaffFailure(errorMessage));
  }
};

export const activateAccount = (userId) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      token: `Bearer ${token}`,
    };
    const body = { status: "status" };

    const response = await axios.patch(
      `https://hepi-backend-staging.herokuapp.com/api/admin/activate/${userId}`,
      { body },
      { headers }
    );
      dispatch(changeStatusSuccessfully(response.data.message));

  } catch (error) {
    const errorMessage = error.response.data.message;
    dispatch(changeStatusFailure(errorMessage));
  }
};
export const deactivateAdmin = (userId) => async (dispatch) => {
  dispatch({ type: "DEACTIVATE_ADMIN", isDeactivated: false });
  try {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      token: `Bearer ${token}`,
    };
    const body = { status: "status" };

    const response = await axios.patch(
      `https://hepi-backend-staging.herokuapp.com/api/admin/deactivate/${userId}`,
      { body },
      { headers }
    );
      dispatch(changeStatusSuccessfully(response.data.message));
      dispatch({ type: "DEACTIVATE_ADMIN", isDeactivated: true });

  } catch (error) {
    const errorMessage = error.response.data.message;
    dispatch(changeStatusFailure(errorMessage));
  }
};
export function getAllAdminsSuccess(data) {
  return {
    type: GET_ALL_ADMINS,
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
