import React from "react";
import { BarChartWrapper } from "./styles";
import ChartWrapper from "./ChartWrapper";

function BarChart() {
  return (
    <BarChartWrapper>
      <ChartWrapper gender={"men"} />
    </BarChartWrapper>
  );
}

export default BarChart;
