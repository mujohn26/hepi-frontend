const advisoryCounselingReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADVISORY_REQUEST_SUCCESSFULLY":
      return {
        ...state,
        message: action.payload,
      };
    case "ADVISORY_REQUEST_FAILED":
      return {
        ...state,
        messageError: action.payload,
      };
    case "COUNSELING_REQUEST_SUCCESSFULLY":
      return {
        ...state,
        message: action.payload,
      };
      case 'GET_ALL_SUCCESS': 
      return{
         ...state,
         data: action.payload
         
    }
    case 'CHANGE_STATUS_SUCCESSFULLY': 
    return{
        ...state,
        message: action.message
        
   }
    case "COUNSELING_REQUEST_FAILED":
      return {
        ...state,
        messageError: action.payload,
      };
    default:
      return state;
  }
};
export default advisoryCounselingReducer;
