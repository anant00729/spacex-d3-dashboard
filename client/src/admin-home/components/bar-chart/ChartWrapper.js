import React, { useRef, useState, useEffect } from "react";
import D3Chart from "./D3Chart";

const ChartWrapper = ({ chartData }) => {
  const chartArea = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    console.log(`chartData >> ChartWrapper`, chartData);
    if (!chart) {
      setChart(new D3Chart(chartArea.current, chartData));
    }

    if (chartData.length) {
      chart.update(chartData);
    }
  }, [chart, chartData]);

  return <div className="chart-area" ref={chartArea}></div>;
};

export default ChartWrapper;
