import axios from "axios";

export const BOOKING_REQUEST_SUCCESSFULLY = "BOOKING_REQUEST_SUCCESSFULLY";
export const BOOKING_REQUEST_FAILED = "BOOKING_REQUEST_FAILED";
export const GET_SERVICES_SUCCESS = "GET_SERVICES_SUCCESS";
export const GET_SERVICES_FAILED = "GET_SERVICES_FAILED";

export const bookingRequest = (
    firstName,
    lastName,
    province,
    district,
    sector,
    cell,
    email,
    startDate,
    service,
    visits,
    tel,
    agentCode
) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.post(
      `http://localhost:8080/api/mperekeza`,
      {
        firstName,
        lastName,
        province,
        district,
        sector,
        cell,
        email,
        startDate,
        service,
        visits,
        tel,
        agentCode
      }
    );
    dispatch(bookingRequestSuccess(response.data.message));
  } catch (error) {
    const errorMessage = error.response.data.message;
    dispatch(bookingRequestFailure(errorMessage));
  }
};
export function bookingRequestSuccess(data) {
  return {
    type: BOOKING_REQUEST_SUCCESSFULLY,
    payload: data,
  };
}
export function bookingRequestFailure(data) {
  return {
    type: BOOKING_REQUEST_FAILED,
    payload: data,
  };
}

export function getServicesPricingSuccess(data) {
  return {
    type: GET_SERVICES_SUCCESS,
    payload: data,
  };
}
export function getServicesPricingFailure(data) {
  return {
    type: GET_SERVICES_FAILED,
    payload: data,
  };
}
