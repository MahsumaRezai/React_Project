import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar'
const Chart = (props) => {
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => {
                <ChartBar
                    key={dataPoint.lable}
                    value={dataPoint.value}
                    maxValue={null}
                    lable={dataPoint.lable}




                />

            })}


        </div>
    )
}
export default Chart;