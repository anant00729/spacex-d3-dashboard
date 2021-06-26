import React from "react";
import {
  AdminHomeWrapper,
  PageTitleWrapper,
  PageTitle,
  AnalysisWrapper,
} from "./styles";
import LaunchDashboard from "./components/launch-dashboard";
import Maps from "./components/maps";
import BarChart from "./components/bar-chart";
import LaunchTimeline from "./components/launch-timeline";

function AdminHome() {
  return (
    <AdminHomeWrapper>
      <PageTitleWrapper>
        <PageTitle>Analytics Dashboard</PageTitle>
      </PageTitleWrapper>
      <LaunchDashboard />
      <AnalysisWrapper>
        <Maps />
        <BarChart />
        <LaunchTimeline />
      </AnalysisWrapper>
    </AdminHomeWrapper>
  );
}

export default AdminHome;
