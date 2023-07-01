import React from 'react';
import Plot from 'react-plotly.js';

const Graph = (props) => {
  const { period, stockData } = props;

  const stockChartXValues = [];
  const stockChartYValues = [];

// console.log(period)
// console.log(stockData)

  let periodCode = (period === 'Daily') ? 'Time Series (Daily)' : period + ' Adjusted Time Series';

  for (const key in stockData[periodCode]) {
    stockChartXValues.push(key);
    stockChartYValues.push(stockData[periodCode][key]['1. open']); // Use period in key access
  }

  const chartRelayout = () => {
    const layout = {
      yaxis: {
        range: [Math.min(...stockChartYValues), Math.max(...stockChartYValues)],
      },
    };
    return layout;
  };

  return (               
        <Plot
        data={[
            {
                x: stockChartXValues,
                y: stockChartYValues,
                type: 'scatter',
                mode: 'lines',
                marker: { color: 'red' },
                fill: 'tozeroy',
                fillcolor: 'rgba(255, 0, 0, 0.5)',
            },
        ]}
        layout={{
            width: 1000,
            height: 425,
            // width: undefined,  // Set width to undefined for responsive sizing
            // height: undefined, // Set height to undefined for responsive sizing
            // responsive: true,

            title: 'A Fancy Plot',
            xaxis: {
                showgrid: false,
            },
            yaxis: {
                range: [Math.min(...stockChartYValues), Math.max(...stockChartYValues)],
                // showgrid: false,
            },
            margin: {
              l: 50,  // left margin
              r: 50,  // right margin
              t: 50,  // top margin
              b: 50,  // bottom margin
          },            
                //  paper_bgcolor: 'grey',
                // plot_bgcolor: 'grey'
        }}
                config={{ displayModeBar: false }}
                onDoubleClick={() => {
                    chartRelayout();
                } } />
  );
};

export default Graph;
