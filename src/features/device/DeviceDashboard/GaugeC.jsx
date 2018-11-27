import React, { Component } from 'react';

import Chart from "react-google-charts";


const options = {
   
    height: 150,
    width: 400, 
    redFrom: 40,
    redTo: 50,
    yellowFrom: 30,
    yellowTo: 40,
    minorTicks: 10,
    max: 50,
    majorTicks: [ 0, 10, 20, 30, 40, 50 ]
  };

 

class GaugeC extends Component {

    getData = () => {
        let tempstr = "Temp" + String.fromCharCode(8451);
        return [
            ["Label", "Value"],
            [tempstr, this.props.temp],
        ];
    };
    
    
    

  render() {

    // const {temp} = this.props;

    return (
         
        <Chart
          chartType="Gauge"
         
          data={this.getData()}
          options={options}
        />
        
    );
  }
}

export default GaugeC;

