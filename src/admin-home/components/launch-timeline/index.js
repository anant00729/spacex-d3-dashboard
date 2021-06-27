import React, { useEffect, useState } from "react";
import { LaunchTimelineWrapper } from "./styles";

function LaunchTimeline() {
  const [data, setData] = useState([]);
  useEffect(() => {
    let someData = [];
    for (let i = 0; i < 100; ++i) {
      someData.push(i);
    }
    setData(someData);
    fetch("https://api.spacexdata.com/v3/launches")
      .then((response) => response.json())
      .then((data) => {
        console.log(`data`, data);
        // formatMapData(data);
      });
  }, []);
  return (
    <LaunchTimelineWrapper>
      <div>
        {data.map((d, i) => (
          <div key={i}>{d}</div>
        ))}
      </div>
    </LaunchTimelineWrapper>
  );
}

export default LaunchTimeline;
