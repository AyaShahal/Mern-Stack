import React, { Component } from "react";
import Sidebar from "../../Component/Sidebar/Sidebar";
import DashboardAdmins from "../../components/dashboard-admins-section/index.js";
class Dashboard extends Component {
  render() {
    return (
      <div>
        <Sidebar>
          <div style={{ fontSize: 30 }}>Welcome To the dashboard</div>
        </Sidebar>
      </div>
    );
  }
}
export default Dashboard;
