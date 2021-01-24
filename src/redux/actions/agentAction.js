import axios from "axios";

export const AGENT_CREATED_SUCCESSFULLY = "AGENT_CREATED_SUCCESSFULLY";
export const AGENT_CREATE_FAILED = "AGENT_CREATE_FAILED";
export const GET_ALL_AGENTS = "GET_ALL_AGENTS";
export const GET_REQUEST_BY_STATUS = "GET_REQUEST_BY_STATUS";
export const GET_ALL_AGENTS_FAILURE = "GET_ALL_AGENTS_FAILURE";
export const CHANGE_STATUS_SUCCESSFULLY = "CHANGE_STATUS_SUCCESSFULLY";
export const CHANGE_STATUS_FAILURE = "CHANGE_STATUS_FAILURE";
export const GET_HISTORY_SUCCESS = "GET_HISTORY_SUCCESS";
export const GET_HISTORY_FAILURE = "GET_HISTORY_FAILURE";
export const CHANGE_CASH_BALANCE_STATUS_SUCCESSFULLY = "CHANGE_CASH_BALANCE_STATUS_SUCCESSFULLY";
export const ACCEPT_CASH_BALANCE_FAILURE = "ACCEPT_CASH_BALANCE_FAILURE";

export const agentRegister = (
  firstName,
  lastName,
  email,
  password,
  tel,
  nationality,
  modePay1,
  accountNmbr1,
  locDistrict,
  rePassword
) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.post(
      `https://hepi-backend-staging.herokuapp.com/api/agent/auth/signup`,
      {
        firstName,
        lastName,
        email,
        password,
        tel,
        nationality,
        modePay1,
        accountNmbr1,
        locDistrict,
        rePassword,
      }
    );
    dispatch(agentCreatedSuccess(response.data.message));
  } catch (error) {

    const errorMessage = error.response.data.message;
    dispatch(agentCreatedFailure(errorMessage));
  }
};

export const getAllAgents = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      token: `Bearer ${token}`,
    };

    const response = await axios.get(`https://hepi-backend-staging.herokuapp.com/api/agent`, {
      headers,
    });
    dispatch(getAllAgentsSuccess(response.data.data));
  } catch (error) {
    const errorMessage = error.response.data.message;
    dispatch(getAllAgentsFailure(errorMessage));
  }
};

export const activateAccount = (agentId) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      token: `Bearer ${token}`,
    };
    const body = { status: "status" };
    const response = await axios.patch(
      `https://hepi-backend-staging.herokuapp.com/api/agent/activate-account/${agentId}`,
      { body },
      { headers }
    );
      dispatch(changeStatusSuccessfully(response.data.message));
    
  } catch (error) {
    const errorMessage = error.response.data.message;
    dispatch(changeStatusFailure(errorMessage));
  }
};
export const deactivateAgent = (agentId) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      token: `Bearer ${token}`,
    };
    const body = { status: "status" };
    const response = await axios.patch(
      `https://hepi-backend-staging.herokuapp.com/api/agent/deactivate-account/${agentId}`,
      { body },
      { headers }
    );
      dispatch(changeStatusSuccessfully(response.data.message));
    
  } catch (error) {
    const errorMessage = error.response.data.message;
    dispatch(changeStatusFailure(errorMessage));
  }
};

export const getAgentCashHistory = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      token: `Bearer ${token}`,
    };
    const response = await axios.get(`https://hepi-backend-staging.herokuapp.com/api/balance/agent`, {
      headers,
    });
    const data={
      agentDatas:response.data.data.agentDatas,
      totalAmount:response.data.data.totalAmount,
      unpaidAmount:response.data.data.unpaidAmount,
    }
    dispatch(getAllAgentHistorySuccess(data));
  } catch (error) {
    const errorMessage = error.response.data.message;
    dispatch(getAllAgentHistoryFailure(errorMessage));
  }
};

export const AdminGetAgentCashHistory = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      token: `Bearer ${token}`,
    };
    const response = await axios.get(`https://hepi-backend-staging.herokuapp.com/api/balance`, {
      headers,
    });
    const data={
      agentDatas:response.data.data,
    }
    dispatch(getAllAgentHistorySuccess(data));
  } catch (error) {
    const errorMessage = error.response.data.message;
    dispatch(getAllAgentHistoryFailure(errorMessage));
  }
};
export const getCashHistoryByStatus = (status) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      token: `Bearer ${token}`,
    };
    const response = await axios.get(`https://hepi-backend-staging.herokuapp.com/api/balance?status=${status}`, {
      headers,
    });
    const data={
      agentDatas:response.data.data,
    }
    dispatch(getAllAgentHistorySuccess(data));
  } catch (error) {
    const errorMessage = error.response.data.error;
    dispatch(getAllAgentHistoryFailure(errorMessage));
  }
};
export const changeCashBalanceStatus = (balanceId) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      token: `Bearer ${token}`,
    };
    const body = { status: "status" };
    const response = await axios.patch(
      `https://hepi-backend-staging.herokuapp.com/api/balance/${balanceId}/accept`,
      { body },
      { headers }
    );
      dispatch(acceptCashBalanceSuccessfully(response.data.message));
    
  } catch (error) {
    const errorMessage = error.response.data.message;
    dispatch(acceptCashBalanceFailure(errorMessage));
  }
};
export const RejectCashBalance = (balanceId) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      token: `Bearer ${token}`,
    };
    const body = { status: "status" };
    const response = await axios.patch(
      `https://hepi-backend-staging.herokuapp.com/api/balance/${balanceId}/agent?status=rejected`,
      { body },
      { headers }
    );
      dispatch(acceptCashBalanceSuccessfully(response.data.message));
    
  } catch (error) {
    const errorMessage = error.response.data.message;
    dispatch(acceptCashBalanceFailure(errorMessage));
  }
};
export const AdminAcceptCashBalance = (balanceId,status) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      token: `Bearer ${token}`,
    };
    const body = { status: "status" };
    const response = await axios.patch(
      `https://hepi-backend-staging.herokuapp.com/api/balance/${balanceId}/admin?status=${status}`,
      { body },
      { headers }
    );

      dispatch(acceptCashBalanceSuccessfully(response.data.message));
    
  } catch (error) {
    const errorMessage = error.response.data.error;
    dispatch(acceptCashBalanceFailure(errorMessage));
  }
};
export function getAllAgentHistorySuccess(data) {
  return {
    type: GET_HISTORY_SUCCESS,
    payload: data,
  };
}

export function getAllAgentHistoryFailure(data) {
  return {
    type: GET_HISTORY_FAILURE,
    payload: data,
  };
}
export function updateErrorMessage() {
  return {
    type: "UPDATE_ERROR_MESSAGE",
    payload: "",
  };
}

export function agentCreatedSuccess(data) {
  return {
    type: AGENT_CREATED_SUCCESSFULLY,
    payload: data,
  };
}
export function agentCreatedFailure(data) {
  return {
    type: AGENT_CREATE_FAILED,
    payload: data,
  };
}

export function getAllAgentsSuccess(data) {
  return {
    type: GET_ALL_AGENTS,
    payload: data,
  };
}
export function getAllAgentsFailure(data) {
    return {
      type: GET_ALL_AGENTS_FAILURE,
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
  export function acceptCashBalanceSuccessfully(message) {
    return {
      type: CHANGE_CASH_BALANCE_STATUS_SUCCESSFULLY,
      message: message,
    };
  }

  export function changeCashBalanceState() {
    return {
      type: "CHANGE_STATE",
      message: "",
    };
  }

  export function changeAgentAccountState() {
    return {
      type: "CHANGE_ACCOUNT_STATE",
      message: "",
    };
  }
  export function acceptCashBalanceFailure(message) {
    return {
      type: ACCEPT_CASH_BALANCE_FAILURE,
      message: message,
    };
  }