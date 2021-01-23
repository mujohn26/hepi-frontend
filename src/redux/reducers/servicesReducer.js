const servicesReducer = (state = {}, action) => {
    switch (action.type) {
      case "GET_ALL_SERVICES":
        return {
          ...state,
          data: action.payload,
        };
      case "CREATE_ADMIN_SUCCESSFULLY":
        return {
          ...state,
          isCreatedSuccess: action.isCreatedSuccess,
        };
        case "CHANGE_STATUS_SUCCESSFULLY":
          return {
            ...state,
            updateMessage: action.message,
          };
      case "CREATE_ADMIN_FAILURE":
        return {
          ...state,
          isCreatedFailure: action.isCreatedFailure,
        };
      default:
        return state;
    }
  };
  export default servicesReducer;
  