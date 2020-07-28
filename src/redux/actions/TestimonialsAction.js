import axios from "axios";

export const ADD_TESTIMONIAL_SUCCESSFULLY = "ADD_TESTIMONIAL_SUCCESSFULLY";
export const ADD_TESTIMONIAL_FAILED = "ADD_TESTIMONIAL_FAILED";
export const GET_TESTIMONIALS_SUCCESS = "GET_TESTIMONIALS_SUCCESS";
export const GET_TESTIMONIALS__FAILED = "GET_TESTIMONIALS__FAILED";

export const addTestimonials = (
        name,
        email,
        message
) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try{
    const response = await axios.post(
      `http://localhost:8080/api/testimonial`,
      {
        name,
        email,
        message
      }
    );
    dispatch(addTestimonialSuccess(response.data.message));
  } catch (error) {
    const errorMessage = error.response.data.message;
    dispatch(addTestimonialFailure(errorMessage));
  }
};

export const getTestimonials = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await axios.get(`http://localhost:8080/api/testimonial/web`,{
      headers,
    });
    dispatch(getTestimonialSuccess(response.data.data));
  } catch (error) {
    const errorMessage = error.response.data.message;
    dispatch(getTestimonialFailure(errorMessage));
  }
};

export function addTestimonialSuccess(data) {
  return {
    type: ADD_TESTIMONIAL_SUCCESSFULLY,
    payload: data,
  };
}
export function addTestimonialFailure(data) {
  return {
    type: ADD_TESTIMONIAL_FAILED,
    payload: data,
  };
}

export function getTestimonialSuccess(data) {
  return {
    type: GET_TESTIMONIALS_SUCCESS,
    payload: data,
  };
}
export function getTestimonialFailure(data) {
  return {
    type: GET_TESTIMONIALS__FAILED,
    payload: data,
  };
}
