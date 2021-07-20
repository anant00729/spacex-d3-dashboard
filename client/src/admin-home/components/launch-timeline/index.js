import React, { useEffect, useState } from "react";
import {
  LaunchTimelineWrapper,
  TimeLineItem,
  LaunchStatusIcon,
  MissionNameLabel,
} from "./styles";
import DoneIcon from "../../../images/done.png";
import UpcomingIcon from "../../../images/upcoming.png";

function LaunchTimeline() {
  const [launches, setLaunches] = useState([]);
  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches")
      .then((response) => response.json())
      .then((data) => {
        setLaunches(data.reverse());
      });
  }, []);
  return (
    <LaunchTimelineWrapper>
      <div>
        {launches.map((d, i) => (
          <TimeLineItem key={i}>
            <LaunchStatusIcon
              upcoming={d.upcoming}
              src={d.upcoming ? UpcomingIcon : DoneIcon}
              alt={`launch-img-${i}`}
            />
            <MissionNameLabel>{d.mission_name}</MissionNameLabel>
          </TimeLineItem>
        ))}
      </div>
    </LaunchTimelineWrapper>
  );
}

export default LaunchTimeline;
