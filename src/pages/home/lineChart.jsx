import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: [
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
    'Dimanche',
  ],
  datasets: [
    {
      label: 'Ventes aucours de la semaine',
      data: [1200, 750, 500, 950, 1700, 2000, 2500],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const LineChart = () => (
  <>
    <div className="header">
      <div className="links">
        <a
          className="btn btn-gh"
          href="https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Line.js"
        ></a>
      </div>
    </div>
    <Line data={data} options={options} />
  </>
);

export default LineChart;
