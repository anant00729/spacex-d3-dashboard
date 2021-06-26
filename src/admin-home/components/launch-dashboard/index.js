import React from "react";
import {
  LaunchDashboardWrapper,
  PageTitleWrapper,
  PageTitle,
  DashboardCountWrapper,
  UpcomingCountCard,
  PastCountCard,
  TotalCountCard,
} from "./styles";

function LaunchDashboard() {
  return (
    <LaunchDashboardWrapper>
      <PageTitleWrapper>
        <PageTitle>Launch Dashboard</PageTitle>
      </PageTitleWrapper>
      <DashboardCountWrapper>
        <UpcomingCountCard></UpcomingCountCard>
        <PastCountCard></PastCountCard>
        <TotalCountCard></TotalCountCard>
      </DashboardCountWrapper>
    </LaunchDashboardWrapper>
  );
}

export default LaunchDashboard;
