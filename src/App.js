// Created By Camila Silva
// Since 13/06/2022
// Using ApexCharts.js with React.js
// This script is responsable for render the components of the chart created 
// Main script

// imports
import React, { Component } from 'react';

// importing modules and components
import BarChart from './components/BarChart.jsx';
import ScatterChart from './components/ScatterChart.jsx'

// renderizing the components on the main page
class App extends React.Component{
      render(){
          return (
              <div>
                {/* bar chart component */}
                <BarChart />
                <ScatterChart />
              </div>
          );
      }
}

export default App;
