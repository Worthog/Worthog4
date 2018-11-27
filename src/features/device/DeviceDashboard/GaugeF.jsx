import React, { Component } from 'react';

import Chart from "react-google-charts";


const options = {
   
    height: 150,
    width: 400, 
    redFrom: 90,
    redTo: 100,
    yellowFrom: 80,
    yellowTo: 90,
    minorTicks: 5,
    max: 100,
    majorTicks: [ 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]
  };


  

class GaugeF extends Component {

    getData = () => {
        let tempstr = "Temp" + String.fromCharCode(8457);
        return [
            ["Label", "Value"],
            [tempstr, this.props.tempF],
        ];
    };
    
    
    

  render() {

    
    return (
         
        <Chart
          chartType="Gauge"
         
          data={this.getData()}
          options={options}
        />
        
    );
  }
}

export default GaugeF;

