import React, { useRef, useState, useEffect } from "react";
import D3Chart from "./D3Chart";

const ChartWrapper = ({ gender }) => {
  const chartArea = useRef(null);
  const [chart, setChart] = useState(null);
  const [currentGender, setGender] = useState(null);

  useEffect(() => {
    if (!chart && !currentGender) {
      setChart(new D3Chart(chartArea.current));
      setGender(gender);
    } else {
      if (currentGender !== gender) {
        chart.update(gender);
        setGender(gender);
      }
    }
  }, [chart, gender, currentGender]);

  return <div className="chart-area" ref={chartArea}></div>;
};

export default ChartWrapper;
