const addAdminReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ALL_ADMINS":
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
      case "DEACTIVATE_ADMIN":
        return {
          ...state,
          isDeactivated: action.isDeactivated,
        };
    default:
      return state;
  }
};
export default addAdminReducer;
