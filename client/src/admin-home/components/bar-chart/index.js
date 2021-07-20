import React, { useEffect, useState } from "react";
import { BarChartWrapper } from "./styles";
import ChartWrapper from "./ChartWrapper";

function BarChart() {
  const [chartData, setChartData] = useState([]);

  const formatMapData = (data) => {
    let newData = [];
    data.forEach((d) => {
      let dObj;
      if (!!newData.length) {
        dObj = newData.find((newD) => newD.launch_year == d.launch_year);
        if (dObj) {
          dObj.count += 1;
        } else {
          newData = pushFormatedData(dObj, newData, d);
        }
      } else {
        newData = pushFormatedData(dObj, newData, d);
      }
    });
    setChartData(newData);
  };

  useEffect(() => {
    if (chartData.length) {
      // graph update
    }
  }, [chartData]);

  const pushFormatedData = (dObj, newData, d) => {
    dObj = {
      count: 1,
      launch_year: d.launch_year,
    };
    newData.push(dObj);
    return newData;
  };

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches")
      .then((response) => response.json())
      .then((data) => {
        formatMapData(data);
      });
  }, []);

  return (
    <BarChartWrapper>
      <ChartWrapper gender={"men"} chartData={chartData} />
    </BarChartWrapper>
  );
}

export default BarChart;
