import React from "react";

import "./ChartBar.css";

function ChartBar(props) {
    let barfillHeight = '0%';
    
    if (props.maxValue > 0) {
        // console.log(props.value);
        barfillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
        // console.log(barfillHeight); 
    }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height : barfillHeight}}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
