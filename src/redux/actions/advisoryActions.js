import axios from "axios";

export const ADVISORY_REQUEST_SUCCESSFULLY = "ADVISORY_REQUEST_SUCCESSFULLY";
export const ADVISORY_REQUEST_FAILED = "ADVISORY_REQUEST_FAILED";
export const COUNSELING_REQUEST_SUCCESSFULLY =
  "COUNSELING_REQUEST_SUCCESSFULLY";
export const COUNSELING_REQUEST_FAILED = "COUNSELING_REQUEST_FAILED";

export const GET_SERVICES_SUCCESS = "GET_SERVICES_SUCCESS";
export const GET_SERVICES_FAILED = "GET_SERVICES_FAILED";
export const GET_ALL_SUCCESS = "GET_ALL_SUCCESS";
export const GET_ALL_FAILURE = "GET_ALL_FAILURE";

export const advisoryRequest = (
  firstName,
  lastName,
  email,
  tel,
  province,
  district,
  sector,
  adversoryMean,
  date,
  visit
) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.post(`http://localhost:8080/api/adversory`, {
      firstName,
      lastName,
      email,
      tel,
      province,
      district,
      sector,
      adversoryMean,
      date,
      visit,
    });
    dispatch(advisoryRequestSuccess(response.data.message));
  } catch (error) {
    const errorMessage = error.response.data.message;
    dispatch(advisoryRequestFailure(errorMessage));
  }
};

export const counselingRequest = (
  firstName,
  lastName,
  email,
  tel,
  province,
  district,
  sector,
  counselingMean,
  date,
  visit
) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.post(`http://localhost:8080/api/counseling`, {
      firstName,
      lastName,
      email,
      tel,
      province,
      district,
      sector,
      counselingMean,
      visit,
      date
    });
    dispatch(advisoryRequestSuccess(response.data.message));
  } catch (error) {
    const errorMessage = error.response.data.message;
    dispatch(advisoryRequestFailure(errorMessage));
  }
};

export const getAllCounselings = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      token: `Bearer ${token}`,
    };

    const response = await axios.get(`http://localhost:8080/api/adversory`, {
      headers,
    });
    dispatch(getAllSuccess(response.data.data));
  } catch (error) {
    const errorMessage = error.response.data.message;
    dispatch(getAllFailure(errorMessage));
  }
};

export const getAllAdversaries = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      token: `Bearer ${token}`,
    };

    const response = await axios.get(`http://localhost:8080/api/counseling`, {
      headers,
    });
    dispatch(getAllSuccess(response.data.data));
  } catch (error) {
    const errorMessage = error.response.data.message;
    dispatch(getAllFailure(errorMessage));
  }
};

export function advisoryRequestSuccess(data) {
  return {
    type: ADVISORY_REQUEST_SUCCESSFULLY,
    payload: data,
  };
}
export function advisoryRequestFailure(data) {
  return {
    type: ADVISORY_REQUEST_FAILED,
    payload: data,
  };
}

export function counselingRequestSuccess(data) {
  return {
    type: COUNSELING_REQUEST_SUCCESSFULLY,
    payload: data,
  };
}
export function counselingRequestFailure(data) {
  return {
    type: COUNSELING_REQUEST_FAILED,
    payload: data,
  };
}

export function getAllSuccess(data) {
  return {
    type: GET_ALL_SUCCESS,
    payload: data,
  };
}
export function getAllFailure(data) {
    return {
      type: GET_ALL_FAILURE,
      payload: data,
    };
  }
