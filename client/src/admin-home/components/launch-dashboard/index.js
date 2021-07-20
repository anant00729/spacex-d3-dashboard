import React, { useEffect, useState } from "react";
import {
  LaunchDashboardWrapper,
  PageTitleWrapper,
  PageTitle,
  DashboardCountWrapper,
  CountCard,
  CountLabel,
  LaunchStatusLabel,
} from "./styles";

function LaunchDashboard() {
  const [allLaunches, setAllLaunches] = useState({});

  const filterAllTypesOfLaunches = (data) => {
    let upcomingLaunches = 0;
    let pastLaunches = 0;
    let totalLaunches = data.length;
    data.forEach((d) => {
      if (d.upcoming) {
        ++upcomingLaunches;
      } else {
        ++pastLaunches;
      }
    });
    setAllLaunches({ upcomingLaunches, pastLaunches, totalLaunches });
  };

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches")
      .then((response) => response.json())
      .then((data) => {
        filterAllTypesOfLaunches(data);
      });
  }, []);
  return (
    <LaunchDashboardWrapper>
      <PageTitleWrapper>
        <PageTitle>Launch Dashboard</PageTitle>
      </PageTitleWrapper>
      <DashboardCountWrapper>
        <CountCard>
          <CountLabel>{allLaunches.upcomingLaunches}</CountLabel>
          <LaunchStatusLabel>Upcoming Launches</LaunchStatusLabel>
        </CountCard>
        <CountCard>
          <CountLabel>{allLaunches.pastLaunches}</CountLabel>
          <LaunchStatusLabel>Past Launches</LaunchStatusLabel>
        </CountCard>
        <CountCard>
          <CountLabel>{allLaunches.totalLaunches}</CountLabel>
          <LaunchStatusLabel>Total Launches</LaunchStatusLabel>
        </CountCard>
      </DashboardCountWrapper>
    </LaunchDashboardWrapper>
  );
}

export default LaunchDashboard;
