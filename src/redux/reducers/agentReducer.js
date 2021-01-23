const agentReducer = (state = {}, action) => {
  switch (action.type) {
    case "AGENT_CREATED_SUCCESSFULLY":
      return {
        ...state,
        message: action.payload,
      };
    case "AGENT_CREATE_FAILED":
      return {
        ...state,
        messageError: action.payload,
      };
    case "GET_SERVICES_SUCCESS":
      return {
        ...state,
        data: action.payload,
      };
    case "GET_ALL_AGENTS":
      return {
        ...state,
        data: action.payload,
      };
    case "GET_HISTORY_SUCCESS":
      return {
        ...state,
        data: action.payload.agentDatas,
        totalAmount: action.payload.totalAmount,
        unpaidAmount: action.payload.unpaidAmount,
      };
    case "CHANGE_CASH_BALANCE_STATUS_SUCCESSFULLY":
      return {
        ...state,
        CashBalanceMessage: action.message,
      };
    case "CHANGE_STATE":
      return {
        ...state,
        CashBalanceMessage: action.message,
      };
      case "CHANGE_STATUS_SUCCESSFULLY":
        return {
          ...state,
          message: action.message,
        };
    case "CHANGE_ACCOUNT_STATE":
      return {
        ...state,
        message: action.message,
      };
    case "GET_HISTORY_FAILURE":
      return {
        ...state,
        messageError: action.payload,
      };
    case "UPDATE_ERROR_MESSAGE":
      return {
        ...state,
        messageError: action.payload,
      };
    default:
      return state;
  }
};
export default agentReducer;
