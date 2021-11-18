import React from 'react';
import { Scatter } from 'react-chartjs-2';

const data = {
  datasets: [
    {
      label: 'A dataset',
      data: [
        { x: 'pains', y: 20 },
        { x: 'eclair', y: 10 },
        { x: 'gateau', y: 30 },
        { x: 'jambon beurre', y: 10 },
      ],
      backgroundColor: 'rgba(255, 99, 132, 1)',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const ScatterChart = () => (
  <>
    <div className="header">
      <h1 className="title">Scatter Chart</h1>
      <div className="links">
        <a
          className="btn btn-gh"
          href="https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Scatter.js"
        >
          Github Source
        </a>
      </div>
    </div>
    <Scatter data={data} options={options} />
  </>
);

export default ScatterChart;
