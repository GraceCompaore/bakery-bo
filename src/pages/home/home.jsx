import { useEffect, useState } from 'react';
import {
  Bar,
  Bubble,
  Doughnut,
  Pie,
  PolarArea,
  Scatter,
} from 'react-chartjs-2';
import CategoryApi from '../../core/api/category.api';
import PageLayout from '../../core/components/PageLayout';
import LineChart from './lineChart';
import ScatterChart from './scatterChart';

const Home = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    CategoryApi.findAll().then((data) => {
      setCategoryList(data);
    });
  }, []);

  const data = {
    labels: ['Viennoiseries', 'Pains', 'Desserts', 'Sandwich'],
    datasets: [
      {
        label: 'Evolution du stock en fonction des catégories',
        data: [60, 55, 70, 50],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
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

  return (
    <PageLayout>
      <div className="w-5/12">
        <Bar data={data} options={options} />
      </div>
      <div className="w-5/12">
        <LineChart data={data} />
      </div>
      <div className="w-5/12">
        <PolarArea data={data} />
      </div>
      <div className="w-5/12">
        <Pie data={data} />
      </div>
    </PageLayout>
  );
};

export default Home;
