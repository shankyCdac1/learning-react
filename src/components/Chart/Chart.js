import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value); 
    const totalMaxValue  = Math.max(...dataPointValue);
    // console.log(dataPointValue);
    // console.log(totalMaxValue); 
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={totalMaxValue}
        />;
      })}
    </div>
  );
}

export default Chart;
