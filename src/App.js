import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/landing/Home";
import Service from "./components/pages/services";
import Join from "./components/pages/join.staff";
import Contact from "./components/pages/contact";
import Agent from "./components/pages/agent";
import AdminDashboard from "./layout/main.layout";
import { PrivateRoute } from "./components/common/PrivateRoute.jsx";
import Dashboard from "./components/dashboard/login.dashboard";
import Booking from "./components/pages/booking";
import BookingSuccess from "./components/pages/success.page";
import StaffSuccess from "./components/pages/staffRegistration.success.page";
import advisoryCounseling from "./components/pages/advisoryCounseling";
import agentLogin from "./components/pages/agentLogin";
import mperekeza from './components/pages/mperekeza';
import testimonials from './components/pages/testimonials';
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/service" exact component={Service} />
          <Route path="/join-staff" exact component={Join} />
          <Route path="/contact-us" exact component={Contact} />
          <Route path="/agent" exact component={Agent} />
          <Route path="/admin-panel" exact component={Dashboard} />
          <Route path="/booking" exact component={Booking} />
          <Route path="/booking-success" exact component={BookingSuccess} />
          <Route path="/staff-success" exact component={StaffSuccess} />
          <Route
            path="/advisory-counseling"
            exact
            component={advisoryCounseling}
          />
          <Route path="/agent-login" exact component={agentLogin} />
          <Route path="/mperekeza" exact component={mperekeza} />
          <Route path="/testimonials" exact component={testimonials}/>
          <PrivateRoute path="/dashboard" component={AdminDashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
