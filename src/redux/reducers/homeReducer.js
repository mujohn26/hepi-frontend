const homeReducer = (state = {}, action) => {
    switch (action.type) {
      case "GET_STAFF_SUCCESSFULLY":
        return {
          ...state,
          data: action.payload,
        };
      case "GET_STAFF_FAILED":
        return {
          ...state,
          messageError: action.payload,
        };
      default:
        return state;
    }
  };
  export default homeReducer;
  