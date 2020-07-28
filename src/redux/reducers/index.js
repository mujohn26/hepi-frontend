import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import requestReducer from "./requestsReducer";
import bookingReducer from "./bookingReducer";
import staffReducer from "./staffReducer";
import staffDashboardReducer from "./staffDashoardReducer";
import addAdminReducer from "./addAdminReducer";
import servicesReducer from "./servicesReducer";
import agentReducer from "./agentReducer";
import advisoryCounselingReducer from "./advisoryReducer";
import agentLoginReducer from "./agentLoginReducer";
import mperekezaReducer from "./mperekezaReducer";
import MperekezaDashboardReducer from "./mperekezaDashboardReducer";
import testimonialReducer from "./testimonialReducer";
import testimonialsDashboardReducer from "./testimonialsDashboardReducer";
import homeReducer from "./homeReducer";

export default combineReducers({
  loginReducer,
  requestReducer,
  bookingReducer,
  staffReducer,
  staffDashboardReducer,
  addAdminReducer,
  servicesReducer,
  agentReducer,
  advisoryCounselingReducer,
  agentLoginReducer,
  mperekezaReducer,
  MperekezaDashboardReducer,
  testimonialReducer,
  testimonialsDashboardReducer,
  homeReducer
});
