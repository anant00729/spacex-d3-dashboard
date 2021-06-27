import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantize } from "d3-scale";
import { MapsWrapper } from "./styles";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3.0.0/states-10m.json";

const colorScale = scaleQuantize()
  .domain([1, 10])
  .range([
    "#888888",
    "#585759",
    "#ffad9f",
    "#ff8a75",
    "#ff5533",
    "#e2492d",
    "#be3d26",
    "#9a311f",
    "#3898d4",
  ]);

const MapChart = () => {
  const [data, setData] = useState([]);

  const formatMapData = (data) => {
    let newData = [];
    data.forEach((d) => {
      let dObj;
      if (!!newData.length) {
        dObj = newData.find((newD) => newD.region == d.location.region);
        if (dObj) {
          dObj.count += 1;
        } else {
          newData = pushFormatedData(dObj, newData, d);
        }
      } else {
        newData = pushFormatedData(dObj, newData, d);
      }
    });
    setData(newData);
  };

  const pushFormatedData = (dObj, newData, d) => {
    dObj = {
      count: 1,
      region: d.location.region,
    };
    newData.push(dObj);
    return newData;
  };

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launchpads")
      .then((response) => response.json())
      .then((data) => {
        formatMapData(data);
      });
  }, []);

  return (
    <MapsWrapper>
      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const cur = data.find((s) => s.region === geo.properties.name);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={colorScale(cur ? cur.count : "white")}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </MapsWrapper>
  );
};

export default MapChart;
