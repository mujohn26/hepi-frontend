const testimonialReducer = (state = {}, action) => {
    switch (action.type) {
      case "ADD_TESTIMONIAL_SUCCESSFULLY":
        return {
          ...state,
          message: action.payload,
        };
      case "ADD_TESTIMONIAL_FAILED":
        return {
          ...state,
          messageError: action.payload,
        };
      case "GET_TESTIMONIALS_SUCCESS":
        return {
          ...state,
          data: action.payload,
        };
      case 'GET_ALL_AGENTS': 
        return{
           ...state,
           data: action.payload
           
      }
      case 'CHANGE_STATUS_SUCCESSFULLY': 
      return{
          ...state,
          message: action.message
          
     }
      case "GET_TESTIMONIALS__FAILED":
        return {
          ...state,
          messageError: action.payload,
        };
      default:
        return state;
    }
  };
  export default testimonialReducer;
  